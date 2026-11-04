/**
 * SHINOBI ENGINE — THE WAY OF THE HOKAGE ARCHITECT (v1.8.0 Precision Refactor)
 * Ambient Chakra Motes (60fps) + Unified Hitai-ate Headband Nav + Single-Kanji Badges
 * + Embedded Header Viewport Switcher + Sharingan/Sage Toggle + Minato Kunai + Hokage Rock Footer
 * Kumar Utkarsh Portfolio Redesign
 */

(function () {
  'use strict';
  if (typeof window === 'undefined') return;

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. Ambient Chakra Motes (60fps Lightweight Canvas)
     ========================================================================== */
  function initChakraCanvas() {
    if (prefersReduced) return;
    var canvas = document.getElementById('chakra-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'chakra-canvas';
      canvas.setAttribute('aria-hidden', 'true');
      document.body.prepend(canvas);
    }

    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var width = (canvas.width = window.innerWidth);
    var height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', function () {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    var particles = [];
    var count = Math.min(36, Math.floor(width / 40));

    var colors = [
      'rgba(255, 94, 26, ',   // Kurama Orange
      'rgba(255, 140, 66, ',  // Flame Amber
      'rgba(0, 229, 255, ',   // Rasengan Cyan
      'rgba(251, 191, 36, '   // Minato Lightning Gold
    ];

    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.2 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.25,
        alpha: Math.random() * 0.5 + 0.2,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI
      });
    }

    var isTabVisible = true;
    document.addEventListener('visibilitychange', function () {
      isTabVisible = !document.hidden;
    });

    function render() {
      if (!isTabVisible) {
        requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        var currentAlpha = p.alpha + Math.sin(p.pulse) * 0.15;
        if (currentAlpha < 0.05) currentAlpha = 0.05;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.colorBase + currentAlpha + ')';
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.colorBase + '0.8)';
        ctx.fill();
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  /* ==========================================================================
     2. Standardized 1-Kanji Badges & Hitai-ate Headband Header
     ========================================================================== */
  var KANJI_MAP = {
    'Home': '里',        // Village (Konoha Base)
    'About': '道',       // Way (Shinobi Path)
    'Process': '門',     // Gate (Eight Gates Methodology)
    'Skills': '術',      // Jutsu (Arsenal & Stack)
    'Portfolio': '巻',   // Scroll (Secret Prototypes)
    'Experience': '歴',  // Chronicle (S-Rank Missions)
    'Reviews': '盟',     // Alliance (Allied Commendations)
    'Contact': '信'      // Signal (Summoning & Dispatch)
  };

  function enhanceShinobiHeader() {
    // 0. Ensure Brand Logo retains signature KU mark and remove any sub-badge
    var brandSymbol = document.querySelector('.brand-symbol');
    if (brandSymbol) {
      if (brandSymbol.querySelector('.konoha-crest-img') || brandSymbol.textContent.trim() !== 'KU') {
        brandSymbol.textContent = 'KU';
        brandSymbol.classList.remove('shinobi-crest-badge');
      }
    }

    var subBadges = document.querySelectorAll('.brand-sub-badge');
    subBadges.forEach(function (b) {
      if (b.parentNode) b.parentNode.removeChild(b);
    });

    // 1. Enhance desktop nav links with standardized single-kanji square seals
    var desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');
    desktopNavLinks.forEach(function (link) {
      if (link.querySelector('.shinobi-kanji-badge')) return;
      var text = link.textContent.trim();
      var kanji = KANJI_MAP[text];
      if (kanji) {
        link.innerHTML = '<span class="shinobi-kanji-badge">' + kanji + '</span> ' + text;
      }
    });

    // 2. Enhance mobile nav drawer links with single-kanji square seals
    var mobileNavLinks = document.querySelectorAll('.mobile-nav .mobile-nav-link');
    mobileNavLinks.forEach(function (link) {
      if (link.querySelector('.shinobi-kanji-badge')) return;
      var text = link.textContent.trim();
      var kanji = KANJI_MAP[text];
      if (kanji) {
        link.innerHTML = '<span class="shinobi-kanji-badge">' + kanji + '</span> ' + text;
      }
    });

    // 3. Enhance Minato Hiraishin CTA button with Three-Pronged Kunai
    var ctaBtn = document.querySelector('.btn-nav-cta');
    if (ctaBtn && !ctaBtn.querySelector('.hiraishin-kunai-icon')) {
      var kunaiSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      kunaiSvg.setAttribute('viewBox', '0 0 24 24');
      kunaiSvg.setAttribute('class', 'hiraishin-kunai-icon');
      kunaiSvg.setAttribute('aria-hidden', 'true');
      kunaiSvg.innerHTML = '<path d="M12 2 L14 8 L18 10 L14 12 L12 22 L10 12 L6 10 L10 8 Z" fill="currentColor"/>';
      ctaBtn.prepend(kunaiSvg);
    }

    // 4. Setup Theme Toggle with Sharingan (Dark) & Sage Eye (Light)
    setupSharinganSageToggle();
  }

  /* ==========================================================================
     3. Sharingan / Sage Mode Theme Toggle Engine
     ========================================================================== */
  function getEyeSvg(theme) {
    if (theme === 'dark') {
      // Kakashi / Obito 3-Tomoe Sharingan Eye
      return '<svg class="eye-mode-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
        '<circle cx="16" cy="16" r="14" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>' +
        '<circle cx="16" cy="16" r="9" stroke="#000000" stroke-width="1.2" stroke-dasharray="2 1"/>' +
        '<circle cx="16" cy="16" r="3.5" fill="#000000"/>' +
        '<g fill="#000000">' +
          '<path d="M 16 7 C 18 7, 18.5 9, 16.5 10 C 15 10.5, 14 9, 14 8 C 14 7, 15.2 7, 16 7 Z"/>' +
          '<path d="M 23 20 C 24 21, 23 23, 21.5 22 C 20 21, 20.5 19.5, 21.5 19 C 22.5 18.5, 23.5 19.2, 23 20 Z"/>' +
          '<path d="M 9 20 C 8 21, 9 23, 10.5 22 C 12 21, 11.5 19.5, 10.5 19 C 9.5 18.5, 8.5 19.2, 9 20 Z"/>' +
        '</g>' +
      '</svg>';
    } else {
      // Naruto / Jiraiya Sage Mode Toad Eye (Golden Iris + Horizontal Bar Pupil + Orange Flare)
      return '<svg class="eye-mode-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
        '<path d="M 4 16 C 8 8, 24 8, 28 16 C 24 24, 8 24, 4 16 Z" fill="#ea580c" opacity="0.35"/>' +
        '<circle cx="16" cy="16" r="13" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>' +
        '<rect x="7" y="14" width="18" height="4" rx="2" fill="#1c1917"/>' +
        '<circle cx="16" cy="16" r="2" fill="#fef3c7"/>' +
      '</svg>';
    }
  }

  function setupSharinganSageToggle() {
    var toggleBtn = document.getElementById('theme-toggle-btn');
    if (!toggleBtn) return;

    function renderCurrentEye() {
      var currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      toggleBtn.innerHTML = getEyeSvg(currentTheme);
      toggleBtn.title = currentTheme === 'dark' 
        ? 'Current: Sharingan (Dark). Click for Sage Mode (Light)' 
        : 'Current: Sage Mode (Light). Click for Sharingan (Dark)';
    }

    renderCurrentEye();

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === 'data-theme') {
          renderCurrentEye();
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
  }

  /* ==========================================================================
     4. Hokage Monument Footer & Jiraiya Scroll Enhancements
     ========================================================================== */
  function enhanceShinobiFooter() {
    // 1. Add Nindo Subtitle to Jiraiya Scroll Callout
    var calloutCol = document.querySelector('.closing-callout-col');
    if (calloutCol && !calloutCol.querySelector('.footer-nindo-sub')) {
      var statement = calloutCol.querySelector('.footer-statement');
      if (statement) {
        var nindoSub = document.createElement('span');
        nindoSub.className = 'footer-nindo-sub';
        nindoSub.textContent = 'The Shinobi Nindō: Eliminating developer guesswork and rework across 30 Allied Nations through living specifications.';
        statement.insertAdjacentElement('afterend', nindoSub);
      }
    }

    // 2. Enhance Geo Coordinates with Leaf Village
    var geoCoord = document.querySelector('.meta-mono-coord');
    if (geoCoord && !geoCoord.getAttribute('data-shinobi-updated')) {
      geoCoord.setAttribute('data-shinobi-updated', 'true');
      geoCoord.textContent = '28.53° N / NOIDA · HIDDEN LEAF VILLAGE (木ノ葉隠れの里) · 30 ALLIED NATIONS DELIVERED';
    }

    // 3. Transform Journey SVG Marker into Minato's Three-Pronged Kunai
    enhanceJourneyMarker();

    // 4. Enhance 6-Stage Journey Labels with Shinobi Arc Milestones
    enhanceJourneyStages();

    // 5. Hook Wordmark Earth-Tremor Animation
    var wordmark = document.querySelector('.footer-wordmark');
    if (wordmark) {
      wordmark.title = 'Hokage Rock Monument (火影岩) — Click to Trigger Flying Thunder God Flight';
    }
  }

  /* ==========================================================================
     5. Minato Hiraishin Kunai SVG Marker & 6-Stage Shinobi Mastery Route
     ========================================================================== */
  function enhanceJourneyMarker() {
    var kunaiPath = '<path d="M 0 -14 L 4 -4 L 9 -1 L 4 2 L 2 12 L 0 16 L -2 12 L -4 2 L -9 -1 L -4 -4 Z" fill="#fbbf24" stroke="#ffffff" stroke-width="1.2"/>' +
      '<circle cx="0" cy="18" r="2.5" fill="none" stroke="#fbbf24" stroke-width="1.5"/>' +
      '<line x1="-6" y1="-2" x2="6" y2="-2" stroke="#d97706" stroke-width="1"/>';

    var dPlane = document.getElementById('journeyMarkerPlane');
    if (dPlane) {
      dPlane.innerHTML = kunaiPath;
      dPlane.setAttribute('transform', 'scale(1.2)');
    }

    var mPlane = document.getElementById('journeyMarkerPlaneMobile');
    if (mPlane) {
      mPlane.innerHTML = kunaiPath;
      mPlane.setAttribute('transform', 'scale(0.9)');
    }
  }

  function enhanceJourneyStages() {
    var STAGE_SUBS = {
      'DISCOVERY': 'TEAM 7 · ELICITATION',
      'SPECS': 'CHŪNIN · SOW LOCK',
      'ARCHITECTURE': 'JIRAIYA · LIVING SPECS',
      'PROTOTYPE': 'KAKASHI · MULTI-ROLE',
      'SPRINTS': 'MINATO · HIRAISHIN SPEED',
      'RELEASE': 'HOKAGE · 35% REWORK CUT'
    };

    var desktopStages = document.querySelectorAll('.journey-desktop-svg .journey-stage');
    desktopStages.forEach(function (stage) {
      var label = stage.querySelector('.journey-stage-label');
      if (label && !stage.querySelector('.journey-stage-sublabel')) {
        var text = label.textContent.trim();
        var subText = STAGE_SUBS[text];
        if (subText) {
          var sub = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          sub.setAttribute('x', label.getAttribute('x') || '0');
          var y = parseFloat(label.getAttribute('y') || '50') + 14;
          sub.setAttribute('y', y.toString());
          sub.setAttribute('class', 'journey-stage-sublabel');
          sub.setAttribute('text-anchor', 'middle');
          sub.textContent = subText;
          stage.appendChild(sub);
        }
      }
    });
  }

  /* ==========================================================================
     Bootstrap Shinobi Engine on DOM Ready
     ========================================================================== */
  function init() {
    initChakraCanvas();
    enhanceShinobiHeader();
    enhanceShinobiFooter();

    // Dynamically load Five Shinobi Legends Character Engine
    if (!document.querySelector('script[src*="shinobi-character-engine.js"]')) {
      var s = document.createElement('script');
      s.src = '/js/shinobi-character-engine.js';
      s.defer = true;
      document.head.appendChild(s);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
