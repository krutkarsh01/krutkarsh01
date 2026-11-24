/**
 * Code of Sagar Page-Turn & Section-Shift Controller
 * 
 * Strict Dual-Sided Page-Turn Architecture:
 * 1. Outgoing Section (Section 1) stays strictly on the LEFT/TOP side of the diagonal crease line.
 *    - Progressively fades out: opacity: 1 -> 0.
 * 2. Incoming Section (Section 2) appears strictly on the RIGHT/BOTTOM side of the diagonal crease line.
 *    - FIXED VIEWPORT LOCK:
 *      During active peel (0 < progress < 1), the incoming section's panel is locked to
 *      `position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;` sharing the exact
 *      same coordinate origin as the outgoing panel at (0,0).
 *    - SMOOTH CONTENT FADE-IN (IMAGE 3 FIX):
 *      As the peel reveals Section 2, Section 2's contents progressively fade in from translucent
 *      to full crisp opacity: `--incoming-opacity: 0.2 + (progress * 0.8)`.
 *    - When the peel completes (progress >= 1), it cleanly transitions to standard flow.
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
  var isTicking = false;

  function initStickyTurnStages() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

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

        if (i < SECTION_IDS.length - 1) {
          var creaseLine = document.createElement('div');
          creaseLine.className = 'turn-curl-crease-line';
          creaseLine.innerHTML = '<svg class="turn-curl-crease-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><line class="turn-curl-line-stroke" x1="100%" y1="100%" x2="100%" y2="100%" /></svg>';
          wrapper.appendChild(creaseLine);
        }

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
        creaseLine: wrapper.querySelector('.turn-curl-crease-line'),
        svgLine: wrapper.querySelector('.turn-curl-line-stroke'),
        index: i,
        baseZ: baseZ
      });
    }

    if (stages.length >= 2) {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize, { passive: true });
      window.updatePeelProgress = updatePeelProgress;
      updatePeelProgress();
    }
  }

  function onScroll() {
    if (!isTicking) {
      window.requestAnimationFrame(function () {
        updatePeelProgress();
        isTicking = false;
      });
      isTicking = true;
    }
  }

  function onResize() {
    updatePeelProgress();
  }

  function computeTurnGeometry(progress) {
    var p = Math.max(0, Math.min(1, progress));
    var C = 2.0 * (1.0 - p);
    var outClip, inClip;
    var line = { x1: '100%', y1: '100%', x2: '100%', y2: '100%' };

    if (C >= 1.0) {
      var yRight = (C - 1.0) * 100;
      var xBottom = (C - 1.0) * 100;

      outClip = 'polygon(0 0, 100% 0, 100% ' + yRight.toFixed(2) + '%, ' + xBottom.toFixed(2) + '% 100%, 0 100%)';
      inClip = 'polygon(100% ' + yRight.toFixed(2) + '%, 100% 100%, ' + xBottom.toFixed(2) + '% 100%)';

      line.x1 = '100%';
      line.y1 = yRight.toFixed(2) + '%';
      line.x2 = xBottom.toFixed(2) + '%';
      line.y2 = '100%';
    } else {
      var xTop = C * 100;
      var yLeft = C * 100;

      outClip = 'polygon(0 0, ' + xTop.toFixed(2) + '% 0, 0 ' + yLeft.toFixed(2) + '%)';
      inClip = 'polygon(' + xTop.toFixed(2) + '% 0, 100% 0, 100% 100%, 0 100%, 0 ' + yLeft.toFixed(2) + '%)';

      line.x1 = xTop.toFixed(2) + '%';
      line.y1 = '0%';
      line.x2 = '0%';
      line.y2 = yLeft.toFixed(2) + '%';
    }

    return {
      outClip: outClip,
      inClip: inClip,
      line: line
    };
  }

  function updatePeelProgress() {
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

    var activePeelIndex = -1;
    var activeProgress = 0;

    for (var i = 0; i < stages.length - 1; i++) {
      var stage = stages[i];
      if (!stage.wrapper || !stage.panel) continue;

      var rect = stage.wrapper.getBoundingClientRect();
      var turnDist = stage.wrapper.offsetHeight - vh;
      if (turnDist <= 0) continue;

      // Snappy reading pause (48% of track) before diagonal peel engages
      var readingHold = Math.max(isMobile ? 160 : 180, turnDist * 0.48);

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

      // Only enter active peel after the reading pause has completed
      if (-rect.top > readingHold && rect.top > -turnDist) {
        activePeelIndex = i;
        var peelDist = Math.max(1, turnDist - readingHold);
        activeProgress = Math.max(0, Math.min(1, (-rect.top - readingHold) / peelDist));
        break;
      }
    }

    if (activePeelIndex !== -1) {
      var outStage = stages[activePeelIndex];
      var inStage = stages[activePeelIndex + 1];

      var geom = computeTurnGeometry(activeProgress);

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

      // 2. Active Outgoing Stage (Section 1): on top (z-index: 40), clipped along peel line
      outStage.panel.style.display = 'flex';
      outStage.panel.classList.remove('is-fixed-reveal');
      outStage.panel.classList.add('is-peeling');
      outStage.wrapper.style.zIndex = '40';
      outStage.wrapper.classList.remove('is-incoming', 'is-fully-active');
      outStage.wrapper.classList.add('is-peeling-wrapper');
      outStage.panel.style.clipPath = geom.outClip;
      outStage.panel.style.webkitClipPath = geom.outClip;
      outStage.panel.style.setProperty('--outgoing-opacity', '1');

      if (outStage.svgLine) {
        outStage.svgLine.setAttribute('x1', geom.line.x1);
        outStage.svgLine.setAttribute('y1', geom.line.y1);
        outStage.svgLine.setAttribute('x2', geom.line.x2);
        outStage.svgLine.setAttribute('y2', geom.line.y2);
      }

      // 3. Active Incoming Stage (Section 2): Full intact page underneath (z-index: 30)
      // Unveiled naturally as Section 1 peels away, zero double-clipping or text collision
      if (inStage) {
        inStage.panel.style.display = 'flex';
        inStage.panel.classList.remove('is-peeling');
        inStage.panel.classList.add('is-fixed-reveal');
        inStage.wrapper.style.zIndex = '30';
        inStage.wrapper.classList.add('is-incoming');
        inStage.wrapper.classList.remove('is-fully-active', 'is-peeling-wrapper');
        inStage.panel.style.clipPath = 'none';
        inStage.panel.style.webkitClipPath = 'none';
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
    } else {
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
