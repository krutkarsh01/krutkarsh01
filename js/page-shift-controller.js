/**
 * PlanWithKumar Page-Turn & Curved Paper-Curl Controller
 *
 * Smooth 60fps Curved Page-Turn Architecture (inspired by codeofsagar.in):
 * 1. Curved quadratic Bezier fold edge sampled into a GPU-composited clip-path polygon.
 * 2. Complementary non-overlapping outClip / inClip keep Aurora & Starfield visible on ALL sections.
 * 3. Lightweight 2D Canvas overlay renders the 3D-shaded curled-back paper flap + cast shadow.
 * 4. Smooth RAF inertia damping eliminates discrete mouse-wheel stepping.
 */

(function () {
  'use strict';

  if (typeof window === 'undefined') return;

  var SECTION_IDS = [
    'nlHeroSection',
    'global-client-atlas',
    'core-value-proposition',
    'portfolio-curved-gallery',
    'contact'
  ];

  var stages = [];
  var curlCanvas = null;
  var curlCtx = null;
  var isTicking = false;

  // Smooth inertia state for buttery 60fps peel even with stepped mouse wheels
  var targetPeelIndex = -1;
  var targetProgress = 0;
  var smoothPeelIndex = -1;
  var smoothProgress = 0;
  var animFrameId = null;

  function ensureCurlCanvas() {
    if (curlCanvas) return;
    curlCanvas = document.createElement('canvas');
    curlCanvas.id = 'turn-curl-overlay-canvas';
    curlCanvas.setAttribute('aria-hidden', 'true');
    curlCanvas.style.cssText =
      'position:fixed;inset:0;width:100vw;height:100vh;height:100svh;pointer-events:none;z-index:50;display:none;';
    document.body.appendChild(curlCanvas);
    curlCtx = curlCanvas.getContext('2d');
    resizeCurlCanvas();
  }

  function resizeCurlCanvas() {
    if (!curlCanvas) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = window.innerWidth || 1440;
    var h = window.innerHeight || 900;
    if (curlCanvas.width !== Math.round(w * dpr) || curlCanvas.height !== Math.round(h * dpr)) {
      curlCanvas.width = Math.round(w * dpr);
      curlCanvas.height = Math.round(h * dpr);
    }
    if (curlCtx) {
      curlCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  function initStickyTurnStages() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    ensureCurlCanvas();
    stages = [];

    for (var i = 0; i < SECTION_IDS.length; i++) {
      var sec = document.getElementById(SECTION_IDS[i]);
      if (!sec) continue;

      var wrapper = sec.closest('.turn-stage-wrapper');
      if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.className = 'turn-stage-wrapper' + (i < SECTION_IDS.length - 1 ? ' has-turn-effect' : '');
        wrapper.id = 'stage-' + SECTION_IDS[i];

        var stickyPanel = document.createElement('div');
        stickyPanel.className = 'turn-sticky-panel';

        sec.parentNode.insertBefore(wrapper, sec);
        stickyPanel.appendChild(sec);
        wrapper.appendChild(stickyPanel);
      }

      var baseZ = 50 - (i * 10);
      wrapper.style.zIndex = baseZ;

      stages.push({
        id: SECTION_IDS[i],
        wrapper: wrapper,
        panel: wrapper.querySelector('.turn-sticky-panel'),
        index: i,
        baseZ: baseZ
      });
    }

    if (stages.length >= 2) {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize, { passive: true });
      window.updatePeelProgress = function () {
        updateTargetFromScroll();
        // Snap immediately when invoked programmatically (e.g. jump or test)
        smoothPeelIndex = targetPeelIndex;
        smoothProgress = targetProgress;
        renderPeelState(smoothPeelIndex, smoothProgress);
      };
      updateTargetFromScroll();
      smoothPeelIndex = targetPeelIndex;
      smoothProgress = targetProgress;
      renderPeelState(smoothPeelIndex, smoothProgress);
    }
  }

  function onScroll() {
    updateTargetFromScroll();
    if (!isTicking && !animFrameId) {
      isTicking = true;
      animFrameId = window.requestAnimationFrame(stepCurlAnimation);
    }
  }

  function onResize() {
    resizeCurlCanvas();
    updateTargetFromScroll();
    smoothPeelIndex = targetPeelIndex;
    smoothProgress = targetProgress;
    renderPeelState(smoothPeelIndex, smoothProgress);
  }

  function stepCurlAnimation() {
    isTicking = false;
    animFrameId = null;

    if (targetPeelIndex === -1) {
      smoothPeelIndex = -1;
      smoothProgress = 0;
      renderPeelState(-1, 0);
      return;
    }

    if (smoothPeelIndex !== targetPeelIndex) {
      smoothPeelIndex = targetPeelIndex;
      smoothProgress = targetProgress;
    } else {
      var diff = targetProgress - smoothProgress;
      if (Math.abs(diff) < 0.0015) {
        smoothProgress = targetProgress;
      } else {
        smoothProgress += diff * 0.16;
        animFrameId = window.requestAnimationFrame(stepCurlAnimation);
      }
    }

    renderPeelState(smoothPeelIndex, smoothProgress);
  }

  function updateTargetFromScroll() {
    var vh = window.innerHeight || 800;
    var isMobile = (window.innerWidth || 800) <= 768;

    var btt = document.getElementById('backToTopBtn');
    if (btt) {
      if ((window.scrollY || document.documentElement.scrollTop || 0) > 350) {
        btt.classList.add('visible');
      } else {
        btt.classList.remove('visible');
      }
    }

    targetPeelIndex = -1;
    targetProgress = 0;

    for (var i = 0; i < stages.length - 1; i++) {
      var stage = stages[i];
      if (!stage.wrapper || !stage.panel) continue;

      var rect = stage.wrapper.getBoundingClientRect();
      var turnDist = stage.wrapper.offsetHeight - vh;
      if (turnDist <= 0) continue;

      // 28% reading pause, 72% dedicated to slow, realistic curved page turn
      var readingHold = Math.max(isMobile ? 140 : 160, turnDist * 0.28);

      // Sync internal overflow scroll (e.g. tall mobile Atlas/Gallery) during reading pause
      var maxInnerScroll = Math.max(0, stage.panel.scrollHeight - stage.panel.clientHeight);
      if (maxInnerScroll > 0 && rect.top <= 0 && -rect.top <= readingHold) {
        var readRatio = Math.max(0, Math.min(1, -rect.top / readingHold));
        stage.panel.scrollTop = readRatio * maxInnerScroll;
      } else if (maxInnerScroll > 0 && rect.top > 0) {
        stage.panel.scrollTop = 0;
      } else if (maxInnerScroll > 0 && -rect.top > readingHold) {
        stage.panel.scrollTop = maxInnerScroll;
      }

      if (-rect.top > readingHold && rect.top > -turnDist) {
        targetPeelIndex = i;
        var peelDist = Math.max(1, turnDist - readingHold);
        targetProgress = Math.max(0, Math.min(1, (-rect.top - readingHold) / peelDist));
        break;
      }
    }
  }

  function sampleQuadBezier(P1, Ctrl, P2, steps) {
    var pts = [];
    for (var s = 0; s <= steps; s++) {
      var t = s / steps;
      var u = 1 - t;
      pts.push({
        x: u * u * P1.x + 2 * u * t * Ctrl.x + t * t * P2.x,
        y: u * u * P1.y + 2 * u * t * Ctrl.y + t * t * P2.y
      });
    }
    return pts;
  }

  function reflectPoint(Q, P1, ux, uy, scale) {
    var dist = (Q.x - P1.x) * ux + (Q.y - P1.y) * uy;
    var factor = 1.0 + (scale || 0.84);
    return {
      x: Q.x - factor * dist * ux,
      y: Q.y - factor * dist * uy
    };
  }

  function computeCurvedGeometry(progress) {
    var raw = Math.max(0, Math.min(1, progress));
    // Gentle sine-in-out curve for natural paper momentum
    var p = 0.5 - 0.5 * Math.cos(Math.PI * raw);
    var C = 2.0 * (1.0 - p);

    var P1, P2;
    if (C >= 1.0) {
      var v1 = C - 1.0;
      P1 = { x: 1.0, y: v1 };
      P2 = { x: v1, y: 1.0 };
    } else {
      var v2 = C;
      P1 = { x: v2, y: 0.0 };
      P2 = { x: 0.0, y: v2 };
    }

    var dx = P2.x - P1.x;
    var dy = P2.y - P1.y;
    var len = Math.hypot(dx, dy) || 1e-5;
    // Unit normal pointing toward top-left (0, 0)
    var ux = -dy / len;
    var uy = dx / len;

    // Curved paper bend bows gently toward the unpeeled page
    var bulge = Math.sin(Math.PI * p) * 0.055;
    var Mx = (P1.x + P2.x) * 0.5;
    var My = (P1.y + P2.y) * 0.5;
    var Ctrl = { x: Mx + ux * bulge, y: My + uy * bulge };

    var curvePts = sampleQuadBezier(P1, Ctrl, P2, 14);
    var curveStrForward = curvePts.map(function (pt) {
      return (pt.x * 100).toFixed(2) + '% ' + (pt.y * 100).toFixed(2) + '%';
    }).join(', ');
    var curveStrReverse = curvePts.slice().reverse().map(function (pt) {
      return (pt.x * 100).toFixed(2) + '% ' + (pt.y * 100).toFixed(2) + '%';
    }).join(', ');

    var outClip, inClip;
    if (C >= 1.0) {
      outClip = 'polygon(0% 0%, 100% 0%, ' + curveStrForward + ', 0% 100%)';
      inClip = 'polygon(' + curveStrReverse + ', 100% 100%)';
    } else {
      outClip = 'polygon(0% 0%, ' + curveStrForward + ')';
      inClip = 'polygon(' + curveStrForward + ', 0% 100%, 100% 100%, 100% 0%)';
    }

    return {
      p: p,
      C: C,
      P1: P1,
      P2: P2,
      Ctrl: Ctrl,
      ux: ux,
      uy: uy,
      outClip: outClip,
      inClip: inClip
    };
  }

  function drawCurlFlap(geom) {
    if (!curlCanvas || !curlCtx) return;
    var w = window.innerWidth || 1440;
    var h = window.innerHeight || 900;

    if (geom.p <= 0.002 || geom.p >= 0.998) {
      curlCanvas.style.display = 'none';
      curlCtx.clearRect(0, 0, w, h);
      return;
    }

    curlCanvas.style.display = 'block';
    curlCtx.clearRect(0, 0, w, h);

    var P1 = { x: geom.P1.x * w, y: geom.P1.y * h };
    var P2 = { x: geom.P2.x * w, y: geom.P2.y * h };
    var Ctrl = { x: geom.Ctrl.x * w, y: geom.Ctrl.y * h };

    var dx = P2.x - P1.x;
    var dy = P2.y - P1.y;
    var len = Math.hypot(dx, dy);
    if (len < 2) return;

    var ux = -dy / len;
    var uy = dx / len;

    // Reflect the peeled corner(s) across the fold line to form the 3D curled-back paper flap
    var cornerBR = reflectPoint({ x: w, y: h }, P1, ux, uy, 0.84);
    var flapPoly;
    if (geom.C >= 1.0) {
      flapPoly = [cornerBR];
    } else {
      var cornerTR = reflectPoint({ x: w, y: 0 }, P1, ux, uy, 0.84);
      var cornerBL = reflectPoint({ x: 0, y: h }, P1, ux, uy, 0.84);
      flapPoly = [cornerBL, cornerBR, cornerTR];
    }

    // Midpoint of fold line to reflected tip defines the cylindrical paper-bend gradient axis
    var Mx = (P1.x + P2.x) * 0.5;
    var My = (P1.y + P2.y) * 0.5;
    var grad = curlCtx.createLinearGradient(Mx, My, cornerBR.x, cornerBR.y);
    grad.addColorStop(0.00, 'rgb(6, 18, 16)');
    grad.addColorStop(0.14, 'rgb(24, 58, 54)');
    grad.addColorStop(0.40, 'rgb(138, 202, 208)');
    grad.addColorStop(0.72, 'rgb(30, 66, 62)');
    grad.addColorStop(1.00, 'rgb(10, 26, 24)');

    curlCtx.save();
    curlCtx.shadowColor = 'rgba(0, 0, 0, 0.72)';
    curlCtx.shadowBlur = 26;
    curlCtx.shadowOffsetX = 6;
    curlCtx.shadowOffsetY = 6;

    curlCtx.beginPath();
    curlCtx.moveTo(P1.x, P1.y);
    curlCtx.quadraticCurveTo(Ctrl.x, Ctrl.y, P2.x, P2.y);
    for (var f = 0; f < flapPoly.length; f++) {
      curlCtx.lineTo(flapPoly[f].x, flapPoly[f].y);
    }
    curlCtx.closePath();
    curlCtx.fillStyle = grad;
    curlCtx.fill();
    curlCtx.restore();

    // Subtle pearlescent highlight rim along the curved fold edge
    curlCtx.save();
    curlCtx.beginPath();
    curlCtx.moveTo(P1.x, P1.y);
    curlCtx.quadraticCurveTo(Ctrl.x, Ctrl.y, P2.x, P2.y);
    curlCtx.strokeStyle = 'rgba(220, 248, 255, 0.55)';
    curlCtx.lineWidth = 1.5;
    curlCtx.stroke();
    curlCtx.restore();
  }

  function renderPeelState(activePeelIndex, activeProgress) {
    if (activePeelIndex !== -1) {
      var outStage = stages[activePeelIndex];
      var inStage = stages[activePeelIndex + 1];

      var geom = computeCurvedGeometry(activeProgress);

      // 1. Prior stages before active: peeled and hidden
      for (var b = 0; b < activePeelIndex; b++) {
        var prev = stages[b];
        prev.panel.classList.remove('is-peeling', 'is-fixed-reveal');
        prev.panel.style.clipPath = 'polygon(0 0, 0 0, 0 0)';
        prev.panel.style.webkitClipPath = 'polygon(0 0, 0 0, 0 0)';
        prev.wrapper.style.zIndex = '10';
        prev.wrapper.classList.remove('is-incoming', 'is-fully-active', 'is-peeling-wrapper');
        prev.panel.style.display = 'none';
      }

      // 2. Active Outgoing Stage (Section 1): top-left side of curved fold
      outStage.panel.style.display = 'flex';
      outStage.panel.classList.remove('is-fixed-reveal');
      outStage.panel.classList.add('is-peeling');
      outStage.wrapper.style.zIndex = '40';
      outStage.wrapper.classList.remove('is-incoming', 'is-fully-active');
      outStage.wrapper.classList.add('is-peeling-wrapper');
      outStage.panel.style.clipPath = geom.outClip;
      outStage.panel.style.webkitClipPath = geom.outClip;
      outStage.panel.style.setProperty('--outgoing-opacity', '1');

      // 3. Active Incoming Stage (Section 2): strictly bottom-right side of curved fold (zero overlap)
      if (inStage) {
        inStage.panel.style.display = 'flex';
        inStage.panel.classList.remove('is-peeling');
        inStage.panel.classList.add('is-fixed-reveal');
        inStage.wrapper.style.zIndex = '30';
        inStage.wrapper.classList.add('is-incoming');
        inStage.wrapper.classList.remove('is-fully-active', 'is-peeling-wrapper');
        inStage.panel.style.clipPath = geom.inClip;
        inStage.panel.style.webkitClipPath = geom.inClip;
        inStage.panel.style.setProperty('--incoming-opacity', '1');
      }

      // 4. Downstream stages after inStage: hidden completely
      for (var a = activePeelIndex + 2; a < stages.length; a++) {
        var future = stages[a];
        future.panel.classList.remove('is-peeling', 'is-fixed-reveal');
        future.panel.style.clipPath = 'none';
        future.panel.style.webkitClipPath = 'none';
        future.wrapper.style.zIndex = '10';
        future.wrapper.classList.remove('is-incoming', 'is-fully-active', 'is-peeling-wrapper');
        future.panel.style.display = 'none';
      }

      drawCurlFlap(geom);
    } else {
      if (curlCanvas) {
        curlCanvas.style.display = 'none';
      }

      var landedIndex = 0;
      for (var k = stages.length - 1; k >= 0; k--) {
        var sRect = stages[k].wrapper.getBoundingClientRect();
        if (sRect.top <= 10) {
          landedIndex = k;
          break;
        }
      }

      for (var idx = 0; idx < stages.length; idx++) {
        var curStage = stages[idx];
        curStage.panel.classList.remove('is-peeling', 'is-fixed-reveal');
        curStage.wrapper.classList.remove('is-peeling-wrapper');

        if (idx < landedIndex) {
          curStage.wrapper.style.zIndex = '10';
          curStage.panel.style.clipPath = 'polygon(0 0, 0 0, 0 0)';
          curStage.panel.style.webkitClipPath = 'polygon(0 0, 0 0, 0 0)';
          curStage.wrapper.classList.remove('is-incoming', 'is-fully-active');
          curStage.panel.style.display = 'none';
        } else if (idx === landedIndex) {
          curStage.panel.style.display = 'flex';
          curStage.wrapper.style.zIndex = '40';
          curStage.panel.style.clipPath = 'none';
          curStage.panel.style.webkitClipPath = 'none';
          curStage.panel.style.setProperty('--outgoing-opacity', '1');
          curStage.panel.style.setProperty('--incoming-opacity', '1');
          curStage.wrapper.classList.remove('is-incoming');
          curStage.wrapper.classList.add('is-fully-active');
        } else {
          curStage.wrapper.style.zIndex = curStage.baseZ;
          curStage.panel.style.clipPath = 'none';
          curStage.panel.style.webkitClipPath = 'none';
          curStage.panel.style.setProperty('--outgoing-opacity', '1');
          curStage.panel.style.setProperty('--incoming-opacity', '1');
          curStage.wrapper.classList.remove('is-incoming', 'is-fully-active');
          curStage.panel.style.display = 'none';
        }
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStickyTurnStages);
  } else {
    initStickyTurnStages();
  }
})();
