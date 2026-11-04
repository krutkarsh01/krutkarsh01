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
    // 1. Remove all cluttering sublabels marked in Image 1
    document.querySelectorAll('.journey-stage-sublabel').forEach(function (el) {
      el.remove();
    });

    // 2. Naruto Themed Shinobi Stage Icons (Addressing Image 2)
    var SHINOBI_STAGE_ICONS = {
      'DISCOVERY': {
        // Ninja Intel Reconnaissance Scroll with Konoha Chakra Core
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(255, 98, 0, 0.08)" stroke="#ff6200" stroke-width="1.2" stroke-dasharray="3 2" class="stage-chakra-ring"/>' +
             '<rect x="-18" y="-14" width="36" height="28" rx="4" fill="#131824" stroke="#ff6200" stroke-width="1.5"/>' +
             '<path d="M -12 -8 L 12 -8 M -12 -2 L 8 -2 M -12 4 L 4 4" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"/>' +
             '<circle cx="8" cy="4" r="5" fill="#ff6200" opacity="0.3"/>' +
             '<circle cx="8" cy="4" r="2.5" fill="#ff6200"/>'
      },
      'SPECS': {
        // Sealed Chunin Exam SOW Jutsu Scroll with Ribbon
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(0, 229, 255, 0.08)" stroke="#00e5ff" stroke-width="1.2" stroke-dasharray="3 2" class="stage-chakra-ring"/>' +
             '<rect x="-16" y="-18" width="32" height="36" rx="3" fill="#131824" stroke="#00e5ff" stroke-width="1.5"/>' +
             '<path d="M -16 -10 L 16 -10" stroke="#00e5ff" stroke-width="1.2"/>' +
             '<circle cx="0" cy="-2" r="6" fill="#e11d48" opacity="0.25"/>' +
             '<path d="M -4 -2 L 4 -2 M 0 -6 L 0 2" stroke="#e11d48" stroke-width="1.5"/>' +
             '<path d="M -10 8 L 10 8" stroke="#94a3b8" stroke-width="1.4" stroke-linecap="round"/>'
      },
      'PROTOTYPE': {
        // Multi-Role Sandbox Frame with Sharingan Tomoe Node
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(255, 98, 0, 0.1)" stroke="#ff6200" stroke-width="1.2" stroke-dasharray="3 2" class="stage-chakra-ring"/>' +
             '<rect x="-20" y="-15" width="40" height="30" rx="3" fill="#131824" stroke="#ff6200" stroke-width="1.5"/>' +
             '<line x1="-20" y1="-7" x2="20" y2="-7" stroke="#ff6200" stroke-width="1"/>' +
             '<circle cx="-14" cy="-11" r="1.5" fill="#ff6200"/>' +
             '<circle cx="-9" cy="-11" r="1.5" fill="#ff7a29"/>' +
             '<rect x="-15" y="-1" width="12" height="11" rx="1.5" fill="#ff6200" opacity="0.25" stroke="#ff6200" stroke-width="1"/>' +
             '<circle cx="11" cy="4" r="5" fill="#e11d48" opacity="0.3"/>' +
             '<circle cx="11" cy="4" r="2.5" fill="#e11d48"/>'
      },
      'LOGIC & RBAC': {
        // Eight Trigrams / Fūinjutsu Chakra Seal Grid
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 2" class="stage-chakra-ring"/>' +
             '<polygon points="0,-16 16,0 0,16 -16,0" fill="#131824" stroke="#10b981" stroke-width="1.5"/>' +
             '<circle cx="0" cy="0" r="4" fill="#10b981"/>' +
             '<line x1="-16" y1="0" x2="-22" y2="0" stroke="#10b981" stroke-width="1.5"/>' +
             '<circle cx="-23" cy="0" r="2.5" fill="#10b981"/>' +
             '<line x1="16" y1="0" x2="22" y2="0" stroke="#10b981" stroke-width="1.5"/>' +
             '<circle cx="23" cy="0" r="2.5" fill="#10b981"/>'
      },
      'SPRINTS': {
        // Minato Hiraishin Speed Kunai & Squad Agility
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(251, 191, 36, 0.08)" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3 2" class="stage-chakra-ring"/>' +
             '<path d="M 0 -16 L 4 -6 L 9 -3 L 4 0 L 2 10 L 0 14 L -2 10 L -4 0 L -9 -3 L -4 -6 Z" fill="#fbbf24" stroke="#ffffff" stroke-width="1"/>' +
             '<circle cx="0" cy="15" r="2" fill="none" stroke="#fbbf24" stroke-width="1.2"/>' +
             '<path d="M -14 -6 L -7 -6 M 7 -6 L 14 -6 M -12 2 L -5 2 M 5 2 L 12 2" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>'
      },
      'RELEASE': {
        // Hokage Flame Monument Ascent & Reached Milestone
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(255, 98, 0, 0.12)" stroke="#ff6200" stroke-width="1.4" class="stage-chakra-ring"/>' +
             '<path d="M 0 -18 C -6 -8 -7 6 -7 16 L 7 16 C 7 6 6 -8 0 -18 Z" fill="#131824" stroke="#ff6200" stroke-width="1.5"/>' +
             '<path d="M -7 12 L -13 18 L -7 16 Z" fill="#ff6200"/>' +
             '<path d="M 7 12 L 13 18 L 7 16 Z" fill="#ff6200"/>' +
             '<circle cx="0" cy="1" r="3" fill="#ff7a29"/>' +
             '<path d="M -3 18 L -5 25 M 0 18 L 0 28 M 3 18 L 5 25" stroke="#fbbf24" stroke-width="1.8" stroke-linecap="round"/>'
      }
    };

    // 3. Align and Enhance ALL stages (Desktop & Mobile) with Naruto Shinobi Chakra Icons
    var allStages = document.querySelectorAll('.journey-stage');
    allStages.forEach(function (stage) {
      var label = stage.querySelector('.journey-stage-label');
      if (label) {
        var key = label.textContent.trim().replace('&amp;', '&');
        var config = SHINOBI_STAGE_ICONS[key];
        if (config && !stage.classList.contains('shinobi-enhanced')) {
          stage.classList.add('shinobi-enhanced');
          var isMobile = !!stage.closest('.journey-mobile-svg');

          // Clear old placeholder shapes, keep label
          var oldShapes = Array.from(stage.children).filter(function (child) {
            return !child.classList.contains('journey-stage-label');
          });
          oldShapes.forEach(function (el) { el.remove(); });

          // Insert Naruto themed icon SVG
          var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          g.setAttribute('class', 'stage-shinobi-icon-wrap');
          if (isMobile) {
            g.setAttribute('transform', 'scale(0.85)');
          }
          g.innerHTML = config.svg;
          stage.insertBefore(g, label);

          // Position label neatly below on the exact same baseline
          label.setAttribute('y', isMobile ? '40' : '42');
          if (isMobile) {
            label.setAttribute('font-size', '10px');
          }
        }
      }
    });

    // Perfectly align parent group positions
    var desktopStages = document.querySelectorAll('.journey-desktop-svg .journey-stage');
    var desktopPositions = [
      { x: 100, y: 52 },
      { x: 280, y: 52 },
      { x: 460, y: 52 },
      { x: 640, y: 52 },
      { x: 820, y: 52 },
      { x: 1000, y: 52 }
    ];
    desktopStages.forEach(function (st, idx) {
      if (desktopPositions[idx] && st.parentElement) {
        st.parentElement.setAttribute('transform', 'translate(' + desktopPositions[idx].x + ', ' + desktopPositions[idx].y + ')');
      }
    });

    var mobileStages = document.querySelectorAll('.journey-mobile-svg .journey-stage');
    var mobilePositions = [
      { x: 50, y: 48 },
      { x: 150, y: 48 },
      { x: 250, y: 48 },
      { x: 350, y: 48 }
    ];
    mobileStages.forEach(function (st, idx) {
      if (mobilePositions[idx] && st.parentElement) {
        st.parentElement.setAttribute('transform', 'translate(' + mobilePositions[idx].x + ', ' + mobilePositions[idx].y + ')');
      }
    });

    // Also remove any stray sublabels defensively
    var subs = document.querySelectorAll('.journey-stage-sublabel');
    subs.forEach(function(s) { s.remove(); });
  }

  /* ==========================================================================
     Shinobi Contact Form Engine (Web3Forms API Integration)
     ========================================================================== */
  function initShinobiForms() {
    var forms = document.querySelectorAll('.shinobi-contact-form');
    forms.forEach(function(form) {
      if (form.__initialized) return;
      form.__initialized = true;

      var wrap = form.closest('.shinobi-contact-wrap');
      var thankyouCard = wrap ? wrap.querySelector('.shinobi-thankyou-card') : null;
      var feedback = wrap ? wrap.querySelector('.shinobi-form-feedback') : null;
      var submitBtn = form.querySelector('.shinobi-form-submit-btn');

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (feedback) {
          feedback.style.display = 'none';
          feedback.className = 'shinobi-form-feedback';
        }

        var btnOriginalHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>⚡ Transmitting Brief...</span>';

        var formData = new FormData(form);

        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        })
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          if (data.success) {
            form.reset();
            form.style.display = 'none';
            if (thankyouCard) {
              thankyouCard.classList.add('active');
              var nameInput = formData.get('name') || 'Friend';
              var nameEl = thankyouCard.querySelector('.applicant-name');
              if (nameEl) nameEl.textContent = nameInput;
            }
          } else {
            throw new Error(data.message || 'Submission was not accepted by the gateway.');
          }
        })
        .catch(function(err) {
          if (feedback) {
            feedback.innerHTML = '⚠️ <strong>Transmission Note:</strong> ' + (err.message || 'Could not complete network submission.') + '<br>You can connect directly via WhatsApp: <a href="https://wa.me/918447143995" target="_blank" style="color: #ff8c42; text-decoration: underline;">+91 84471 43995</a> or email <a href="mailto:work.krutkarsh@gmail.com" style="color: #ff8c42; text-decoration: underline;">work.krutkarsh@gmail.com</a>.';
            feedback.className = 'shinobi-form-feedback error';
            feedback.style.display = 'block';
          }
        })
        .finally(function() {
          submitBtn.disabled = false;
          submitBtn.innerHTML = btnOriginalHTML;
        });
      });

      if (thankyouCard) {
        var resetBtn = thankyouCard.querySelector('.shinobi-reset-btn');
        if (resetBtn) {
          resetBtn.addEventListener('click', function() {
            thankyouCard.classList.remove('active');
            form.style.display = 'flex';
          });
        }
      }
    });
  }

  /* ==========================================================================
     Experience Timeline Scroll-Driven Energy Beam
     ========================================================================== */
  function initExperienceTimelineScroll() {
    var wrap = document.querySelector('.timeline-wrap');
    if (!wrap) return;

    var beam = wrap.querySelector('.timeline-scroll-beam');
    if (!beam) {
      beam = document.createElement('div');
      beam.className = 'timeline-scroll-beam';
      beam.id = 'timelineScrollBeam';
      wrap.appendChild(beam);
    }

    var entries = wrap.querySelectorAll('.timeline-entry');
    var isTicking = false;

    function onScroll() {
      if (isTicking) return;
      isTicking = true;
      requestAnimationFrame(function() {
        var rect = wrap.getBoundingClientRect();
        var winH = window.innerHeight;
        var triggerY = winH * 0.65;

        var progress = (triggerY - rect.top) / rect.height;
        progress = Math.max(0, Math.min(1, progress));

        beam.style.height = (progress * 100).toFixed(2) + '%';

        entries.forEach(function(entry) {
          var entryRect = entry.getBoundingClientRect();
          var node = entry.querySelector('.timeline-node');
          if (entryRect.top <= triggerY + 30) {
            entry.classList.add('active');
            if (node) node.classList.add('active');
          } else {
            entry.classList.remove('active');
            if (node) node.classList.remove('active');
          }
        });

        isTicking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  }

  /* ==========================================================================
     Bootstrap Shinobi Engine on DOM Ready
     ========================================================================== */
  function init() {
    initChakraCanvas();
    enhanceShinobiHeader();
    enhanceShinobiFooter();
    initShinobiForms();
    initExperienceTimelineScroll();

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
