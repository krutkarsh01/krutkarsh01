/**
 * Code of Sagar Page-Turn & Section-Shift Controller
 * 
 * Hardware-Accelerated Luminous Card-Stack Turnover Architecture:
 * 1. Outgoing Section (Section 1) stays pinned at top: 0 with subtle depth scale & dimming.
 * 2. Incoming Section (Section 2) rises smoothly from the bottom (translateY: 100% -> 0%)
 *    with a luminous glowing cyan top border (#00e5ff) and deep ambient shadow.
 * 3. ZERO CLIP-PATH SLICING: Neither section is ever cut in half by a line!
 *    All titles, buttons, logos, and cards remain 100% intact and razor-sharp across all viewports.
 * 4. When the turnover completes, the active section settles flush at top: 0.
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

  function updatePeelProgress() {
    var vh = window.innerHeight || 800;
    var isMobile = (window.innerWidth || 800) <= 768;

    var activePeelIndex = -1;
    var activeProgress = 0;

    for (var i = 0; i < stages.length - 1; i++) {
      var stage = stages[i];
      if (!stage.wrapper || !stage.panel) continue;

      var rect = stage.wrapper.getBoundingClientRect();
      var turnDist = stage.wrapper.offsetHeight - vh;
      
      // Reading window: user comfortably enjoys 70% of the section before turnover engages
      var readingHold = Math.max(isMobile ? 200 : 350, turnDist * 0.70);

      // Only enter active turnover after the comfortable reading window has completed
      if (-rect.top > readingHold && rect.top > -turnDist) {
        activePeelIndex = i;
        var peelDist = turnDist - readingHold;
        activeProgress = Math.max(0, Math.min(1, (-rect.top - readingHold) / peelDist));
        break;
      }
    }

    if (activePeelIndex !== -1) {
      var outStage = stages[activePeelIndex];
      var inStage = stages[activePeelIndex + 1];

      // 1. Prior stages before active: hidden
      for (var b = 0; b < activePeelIndex; b++) {
        var prev = stages[b];
        prev.panel.style.display = 'none';
        prev.panel.style.transform = 'none';
        prev.panel.style.filter = 'none';
        prev.wrapper.style.zIndex = '10';
        prev.wrapper.classList.remove('is-incoming', 'is-fully-active');
      }

      // 2. Active Outgoing Stage (Section 1): pinned underneath at z-index: 20 with subtle depth
      outStage.panel.style.display = 'flex';
      outStage.panel.style.clipPath = 'none';
      outStage.panel.style.webkitClipPath = 'none';
      outStage.wrapper.style.zIndex = '20';
      outStage.wrapper.classList.remove('is-incoming', 'is-fully-active');
      outStage.panel.style.transform = 'scale(' + (1.0 - activeProgress * 0.04).toFixed(3) + ')';
      outStage.panel.style.filter = 'brightness(' + (1.0 - activeProgress * 0.35).toFixed(3) + ')';
      outStage.panel.style.borderTop = 'none';
      outStage.panel.style.boxShadow = 'none';

      // 3. Active Incoming Stage (Section 2): rises smoothly from bottom (100% -> 0%)
      // at z-index: 40 with luminous cyan top border & deep shadow
      if (inStage) {
        var yPercent = (1.0 - activeProgress) * 100;
        inStage.panel.style.display = 'flex';
        inStage.panel.classList.add('is-fixed-reveal');
        inStage.wrapper.style.zIndex = '40';
        inStage.wrapper.classList.add('is-incoming');
        inStage.wrapper.classList.remove('is-fully-active');
        inStage.panel.style.clipPath = 'none';
        inStage.panel.style.webkitClipPath = 'none';
        inStage.panel.style.transform = 'translateY(' + yPercent.toFixed(2) + '%)';
        inStage.panel.style.borderTop = '2px solid #00e5ff';
        inStage.panel.style.boxShadow = '0 -25px 60px rgba(0, 0, 0, 0.95), 0 -2px 20px rgba(0, 229, 255, 0.7)';
        inStage.panel.style.filter = 'none';
      }

      // 4. Downstream stages after inStage: hidden completely
      for (var a = activePeelIndex + 2; a < stages.length; a++) {
        var future = stages[a];
        future.panel.style.display = 'none';
        future.panel.style.transform = 'none';
        future.panel.style.filter = 'none';
        future.wrapper.style.zIndex = '10';
        future.wrapper.classList.remove('is-incoming', 'is-fully-active');
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

        if (idx < landedIndex) {
          curStage.wrapper.style.zIndex = '10';
          curStage.panel.style.display = 'none';
          curStage.panel.style.transform = 'none';
          curStage.panel.style.filter = 'none';
          curStage.panel.style.clipPath = 'none';
          curStage.panel.style.webkitClipPath = 'none';
          curStage.panel.style.borderTop = 'none';
          curStage.panel.style.boxShadow = 'none';
          curStage.wrapper.classList.remove('is-incoming', 'is-fully-active');
        } else if (idx === landedIndex) {
          curStage.panel.style.display = 'flex';
          curStage.wrapper.style.zIndex = '40';
          curStage.panel.style.transform = 'none';
          curStage.panel.style.filter = 'none';
          curStage.panel.style.clipPath = 'none';
          curStage.panel.style.webkitClipPath = 'none';
          curStage.panel.style.borderTop = 'none';
          curStage.panel.style.boxShadow = 'none';
          curStage.wrapper.classList.remove('is-incoming');
          curStage.wrapper.classList.add('is-fully-active');
        } else {
          curStage.wrapper.style.zIndex = curStage.baseZ;
          curStage.panel.style.display = 'none';
          curStage.panel.style.transform = 'none';
          curStage.panel.style.filter = 'none';
          curStage.panel.style.clipPath = 'none';
          curStage.panel.style.webkitClipPath = 'none';
          curStage.panel.style.borderTop = 'none';
          curStage.panel.style.boxShadow = 'none';
          curStage.wrapper.classList.remove('is-incoming', 'is-fully-active');
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
