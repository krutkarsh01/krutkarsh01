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
     1. Ambient Chakra Motes Disabled (Replaced by Universal Aurora Engine)
     ========================================================================== */
  function initChakraCanvas() {
    // Chakra particles permanently decommissioned for Code of Sagar Aurora System
    var oldCanvas = document.getElementById('chakra-canvas');
    if (oldCanvas && oldCanvas.parentNode) {
      oldCanvas.parentNode.removeChild(oldCanvas);
    }
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
     4. Professional Delivery Footer & Journey Visuals
     ========================================================================== */
  function enhanceShinobiFooter() {
    // 1. Add Professional Delivery Subtitle to Callout
    var calloutCol = document.querySelector('.closing-callout-col');
    if (calloutCol) {
      var existingSub = calloutCol.querySelector('.footer-nindo-sub');
      if (existingSub) {
        existingSub.textContent = 'Documentation-First Delivery: Eliminating developer guesswork and code rework across 34 global markets through airtight living specifications.';
      } else {
        var statement = calloutCol.querySelector('.footer-statement');
        if (statement) {
          var nindoSub = document.createElement('span');
          nindoSub.className = 'footer-nindo-sub';
          nindoSub.textContent = 'Documentation-First Delivery: Eliminating developer guesswork and code rework across 34 global markets through airtight living specifications.';
          statement.insertAdjacentElement('afterend', nindoSub);
        }
      }
    }

    // 2. Enhance Geo Coordinates with Professional Global Delivery Context
    var geoCoord = document.querySelector('.meta-mono-coord');
    if (geoCoord) {
      geoCoord.setAttribute('data-shinobi-updated', 'true');
      geoCoord.innerHTML = '<span>28.53° N / NOIDA · GLOBAL REMOTE</span><br><span class="meta-coord-sub">34 CLIENT MARKETS DELIVERED</span>';
    }

    // 3. Transform Journey SVG Marker into Sleek Supersonic Delta Craft
    enhanceJourneyMarker();

    // 4. Enhance 6-Stage Journey Labels with High-Tech Aurora Engineering Icons
    enhanceJourneyStages();

    // 5. Clean Professional Tooltip on Wordmark
    var wordmark = document.querySelector('.footer-wordmark');
    if (wordmark) {
      wordmark.title = 'Kumar Utkarsh — Senior Business Analyst & AI Product Strategist';
    }
  }

  /* ==========================================================================
     5. High-Tech Supersonic Delta SVG Marker & 6-Stage Engineering Route
     ========================================================================== */
  function enhanceJourneyMarker() {
    var deltaCraftPath = '<path d="M 0 -15 L 7 5 L 0 2 L -7 5 Z" fill="#00E5FF" stroke="#FFFFFF" stroke-width="1.2"/>' +
      '<circle cx="0" cy="0" r="1.8" fill="#FFFFFF"/>' +
      '<line x1="-3" y1="6" x2="-5" y2="10" stroke="#10B981" stroke-width="1.5" stroke-linecap="round"/>' +
      '<line x1="3" y1="6" x2="5" y2="10" stroke="#10B981" stroke-width="1.5" stroke-linecap="round"/>';

    var dPlane = document.getElementById('journeyMarkerPlane');
    if (dPlane) {
      dPlane.innerHTML = deltaCraftPath;
      dPlane.setAttribute('transform', 'scale(1.2)');
    }

    var mPlane = document.getElementById('journeyMarkerPlaneMobile');
    if (mPlane) {
      mPlane.innerHTML = deltaCraftPath;
      mPlane.setAttribute('transform', 'scale(0.9)');
    }
  }

  function enhanceJourneyStages() {
    // 1. Remove all cluttering sublabels
    document.querySelectorAll('.journey-stage-sublabel').forEach(function (el) {
      el.remove();
    });

    // 2. Modern High-Tech Aurora Product Delivery Icons (Zero Orange, Pure Cyan / Mint / Indigo)
    var TECH_STAGE_ICONS = {
      'DISCOVERY': {
        // High-Tech Radar & Requirements Exploration Lens
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(0, 229, 255, 0.08)" stroke="#00E5FF" stroke-width="1.2" stroke-dasharray="3 3" class="stage-chakra-ring"/>' +
          '<rect x="-16" y="-14" width="32" height="28" rx="5" fill="#030C14" stroke="#00E5FF" stroke-width="1.5"/>' +
          '<circle cx="-2" cy="-2" r="6" fill="none" stroke="#00E5FF" stroke-width="1.5"/>' +
          '<line x1="3" y1="3" x2="9" y2="9" stroke="#00E5FF" stroke-width="2" stroke-linecap="round"/>' +
          '<circle cx="-2" cy="-2" r="2" fill="#10B981"/>'
      },
      'SPECS': {
        // Airtight Architecture Blueprint & Technical SOW
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="1.2" stroke-dasharray="3 3" class="stage-chakra-ring"/>' +
          '<rect x="-15" y="-18" width="30" height="36" rx="4" fill="#030C14" stroke="#10B981" stroke-width="1.5"/>' +
          '<path d="M -7 -18 v -3 a 2 2 0 0 1 2 -2 h 10 a 2 2 0 0 1 2 2 v 3 z" fill="#10B981"/>' +
          '<line x1="-9" y1="-8" x2="9" y2="-8" stroke="#00E5FF" stroke-width="1.4" stroke-linecap="round"/>' +
          '<line x1="-9" y1="-1" x2="5" y2="-1" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round"/>' +
          '<line x1="-9" y1="6" x2="9" y2="6" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round"/>' +
          '<circle cx="5" cy="11" r="3" fill="#10B981"/>'
      },
      'PROTOTYPE': {
        // Interactive Multi-Role Sandbox Wireframe
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(0, 229, 255, 0.08)" stroke="#00E5FF" stroke-width="1.2" stroke-dasharray="3 3" class="stage-chakra-ring"/>' +
          '<rect x="-19" y="-14" width="38" height="28" rx="4" fill="#030C14" stroke="#00E5FF" stroke-width="1.5"/>' +
          '<line x1="-19" y1="-7" x2="19" y2="-7" stroke="#00E5FF" stroke-width="1"/>' +
          '<circle cx="-13" cy="-10.5" r="1.5" fill="#00E5FF"/>' +
          '<circle cx="-8" cy="-10.5" r="1.5" fill="#38BDF8"/>' +
          '<rect x="-13" y="-1" width="12" height="10" rx="1.5" fill="rgba(0, 229, 255, 0.25)" stroke="#00E5FF" stroke-width="1"/>' +
          '<line x1="3" y1="1" x2="13" y2="1" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round"/>' +
          '<line x1="3" y1="6" x2="10" y2="6" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round"/>'
      },
      'LOGIC & RBAC': {
        // Modular Microservice Architecture & Security Shield
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(99, 102, 241, 0.08)" stroke="#6366F1" stroke-width="1.2" stroke-dasharray="3 3" class="stage-chakra-ring"/>' +
          '<path d="M 0 -16 L 14 -7 L 14 5 C 14 12, 0 17, 0 17 C 0 17, -14 12, -14 5 L -14 -7 Z" fill="#030C14" stroke="#6366F1" stroke-width="1.5"/>' +
          '<circle cx="0" cy="-2" r="3.5" fill="none" stroke="#00E5FF" stroke-width="1.4"/>' +
          '<path d="M -2 1.5 h 4 v 4 h -4 z" fill="#00E5FF"/>'
      },
      'SPRINTS': {
        // Continuous Delivery & Agile Sprint Velocity
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(52, 211, 153, 0.08)" stroke="#34D399" stroke-width="1.2" stroke-dasharray="3 3" class="stage-chakra-ring"/>' +
          '<rect x="-18" y="-14" width="36" height="28" rx="4" fill="#030C14" stroke="#34D399" stroke-width="1.5"/>' +
          '<line x1="-6" y1="-14" x2="-6" y2="14" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>' +
          '<line x1="6" y1="-14" x2="6" y2="14" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>' +
          '<rect x="-14" y="-9" width="5" height="14" rx="1.5" fill="#34D399"/>' +
          '<rect x="-2" y="-4" width="5" height="14" rx="1.5" fill="#10B981"/>' +
          '<rect x="10" y="-11" width="5" height="12" rx="1.5" fill="#00E5FF"/>'
      },
      'RELEASE': {
        // Production netlify/Cloud Deploy & Orbital Launch
        svg: '<circle cx="0" cy="0" r="24" fill="rgba(0, 229, 255, 0.12)" stroke="#00E5FF" stroke-width="1.4" class="stage-chakra-ring"/>' +
          '<path d="M 0 -18 C -6 -8 -7 6 -7 16 L 7 16 C 7 6 6 -8 0 -18 Z" fill="#030C14" stroke="#00E5FF" stroke-width="1.5"/>' +
          '<path d="M -7 12 L -13 18 L -7 16 Z" fill="#00E5FF"/>' +
          '<path d="M 7 12 L 13 18 L 7 16 Z" fill="#00E5FF"/>' +
          '<circle cx="0" cy="1" r="3" fill="#FFFFFF"/>' +
          '<path d="M -3 18 L -5 25 M 0 18 L 0 28 M 3 18 L 5 25" stroke="#10B981" stroke-width="1.8" stroke-linecap="round"/>'
      }
    };

    // 3. Align and Enhance ALL stages (Desktop & Mobile) with Clean Aurora Tech Icons
    var allStages = document.querySelectorAll('.journey-stage');
    allStages.forEach(function (stage) {
      var label = stage.querySelector('.journey-stage-label');
      if (label) {
        var key = label.textContent.trim().replace('&amp;', '&');
        var config = TECH_STAGE_ICONS[key];
        if (config) {
          var isMobile = !!stage.closest('.journey-mobile-svg');
          var labelClone = label.cloneNode(true);
          labelClone.setAttribute('y', isMobile ? '40' : '42');
          if (isMobile) {
            labelClone.setAttribute('font-size', '10px');
          }
          stage.innerHTML = config.svg;
          stage.appendChild(labelClone);
          stage.classList.add('aurora-stage-enhanced');
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
    subs.forEach(function (s) { s.remove(); });
  }

  /* ==========================================================================
     Shinobi Contact Form Engine (Web3Forms API Integration)
     ========================================================================== */
  function initShinobiForms() {
    var forms = document.querySelectorAll('.shinobi-contact-form');
    forms.forEach(function (form) {
      if (form.__initialized) return;
      form.__initialized = true;

      var wrap = form.closest('.shinobi-contact-wrap');
      var thankyouCard = wrap ? wrap.querySelector('.shinobi-thankyou-card') : null;
      var feedback = wrap ? wrap.querySelector('.shinobi-form-feedback') : null;
      var submitBtn = form.querySelector('.shinobi-form-submit-btn');

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (feedback) {
          feedback.style.display = 'none';
          feedback.className = 'shinobi-form-feedback';
        }

        // Honeypot bot protection (VULN-04)
        var honeypot = form.querySelector('input[name="_gotcha"]');
        if (honeypot && honeypot.value.trim() !== '') {
          console.warn('Bot detected via honeypot.');
          if (feedback) {
            feedback.innerHTML = '⚠️ Automated transmission rejected.';
            feedback.className = 'shinobi-form-feedback error';
            feedback.style.display = 'block';
          }
          return;
        }

        // Anti-spam client throttle (15s cooldown)
        var lastSubmit = sessionStorage.getItem('last_brief_submit');
        if (lastSubmit && (Date.now() - parseInt(lastSubmit, 10)) < 15000) {
          if (feedback) {
            feedback.innerHTML = '⚠️ Please wait a few moments before sending another project brief.';
            feedback.className = 'shinobi-form-feedback error';
            feedback.style.display = 'block';
          }
          return;
        }

        // Validate email format
        var emailEl = form.querySelector('input[name="email"]');
        var emailVal = (emailEl ? emailEl.value : '').trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
          if (feedback) {
            feedback.innerHTML = '⚠️ Please provide a valid email address.';
            feedback.className = 'shinobi-form-feedback error';
            feedback.style.display = 'block';
          }
          return;
        }

        var btnOriginalHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>⚡ Transmitting Brief...</span>';

        var formData = new FormData(form);

        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        })
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            if (data.success) {
              sessionStorage.setItem('last_brief_submit', Date.now().toString());
              form.reset();
              form.style.display = 'none';
              if (thankyouCard) {
                thankyouCard.classList.add('active');
                var nameInput = (formData.get('name') || 'Friend').toString().trim();
                var nameEl = thankyouCard.querySelector('.applicant-name');
                if (nameEl) nameEl.textContent = nameInput;
              }
            } else {
              throw new Error(data.message || 'Submission was not accepted by the gateway.');
            }
          })
          .catch(function (err) {
            if (feedback) {
              feedback.innerHTML = '⚠️ <strong>Transmission Note:</strong> ' + (err.message || 'Could not complete network submission.') + '<br>You can connect directly via WhatsApp: <a href="https://wa.me/918447143995" target="_blank" rel="noopener noreferrer" style="color: #ff8c42; text-decoration: underline;">+91 84471 43995</a> or email <a href="mailto:work.krutkarsh@gmail.com" style="color: #ff8c42; text-decoration: underline;">work.krutkarsh@gmail.com</a>.';
              feedback.className = 'shinobi-form-feedback error';
              feedback.style.display = 'block';
            }
          })
          .finally(function () {
            submitBtn.disabled = false;
            submitBtn.innerHTML = btnOriginalHTML;
          });
      });

      if (thankyouCard) {
        var resetBtn = thankyouCard.querySelector('.shinobi-reset-btn');
        if (resetBtn) {
          resetBtn.addEventListener('click', function () {
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
      requestAnimationFrame(function () {
        var rect = wrap.getBoundingClientRect();
        var winH = window.innerHeight;
        var triggerY = winH * 0.65;

        var progress = (triggerY - rect.top) / rect.height;
        progress = Math.max(0, Math.min(1, progress));

        beam.style.height = (progress * 100).toFixed(2) + '%';

        entries.forEach(function (entry) {
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
     Universal Minimalist Menu Controller (Code of Sagar Theme)
     ========================================================================== */
  function markActiveMenuPage() {
    var overlay = document.getElementById('nlMenuOverlay');
    if (!overlay) return;
    var rawPath = window.location.pathname || '/';
    var cleanPath = rawPath.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
    var links = overlay.querySelectorAll('.nl-menu-link');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var cleanHref = href.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
      if (cleanHref === cleanPath) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  function initMinimalistMenu() {
    var menuBtn = document.getElementById('nlMenuBtn');
    var closeBtn = document.getElementById('nlMenuCloseBtn');
    var overlay = document.getElementById('nlMenuOverlay');

    markActiveMenuPage();

    if (window.location.hash === '#menu' || window.location.search.indexOf('menu=open') !== -1) {
      if (overlay) {
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
      }
    }

    if (menuBtn && overlay) {
      menuBtn.addEventListener('click', function () {
        markActiveMenuPage();
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      });
    }

    function closeMenu() {
      if (!overlay) return;
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    // Close on Escape key
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close when clicking any menu link
    if (overlay) {
      overlay.querySelectorAll('.nl-menu-link').forEach(function (link) {
        link.addEventListener('click', function () {
          closeMenu();
        });
      });
    }
  }

  /* ==========================================================================
     Typewriter Stream Controller (Typing from Kumar's Laptop — Images 3 & 4)
     ========================================================================== */
  function initLaptopTypewriter() {
    var textEl = document.getElementById('nlStreamTypewriter');
    var scene = textEl && textEl.closest('[data-character-scene]');
    if (!scene) return;
    var motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    var phrases = [
      "Senior Business Analyst",
      "AI Product Strategist",
      "Agile Project Manager",
      "Architecting intelligent AI systems",
      "Translating vision into scalable products",
      "Leading enterprise delivery end-to-end",
      "Slashing engineering rework by 35%"
    ];

    var phraseIdx = 0;
    var charIdx = 0;
    var isDeleting = false;
    var typingSpeed = 65;
    var deletingSpeed = 32;
    var pauseEnd = 2200;
    var timer;

    function tick() {
      var fullText = phrases[phraseIdx];

      if (isDeleting) {
        charIdx--;
        textEl.textContent = fullText.substring(0, charIdx);
        if (charIdx <= 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, deletingSpeed);
      } else {
        charIdx++;
        textEl.textContent = fullText.substring(0, charIdx);
        if (charIdx >= fullText.length) {
          isDeleting = true;
          timer = setTimeout(tick, pauseEnd);
          return;
        }
        timer = setTimeout(tick, typingSpeed);
      }
    }

    function syncTypewriter() {
      clearTimeout(timer);
      if (scene.classList.contains('is-character-visible')) {
        tick();
      } else if (motionPreference.matches) {
        phraseIdx = 0;
        charIdx = phrases[0].length;
        isDeleting = true;
        textEl.textContent = phrases[0];
      }
    }

    scene.addEventListener('character-scene-visibility', syncTypewriter);
    syncTypewriter();
  }

  /* ==========================================================================
     Code of Sagar Signature Custom Difference Cursor (Inverts on All Hover)
     ========================================================================== */
  function initSagarCursor() {
    // Only enable on desktop with fine mouse pointer
    if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    // Check if reduced motion is requested
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Clean up old cursor elements if present
    var oldDot = document.querySelector('.sagar-cursor-dot');
    if (oldDot && oldDot.parentNode) oldDot.parentNode.removeChild(oldDot);
    var oldRing = document.querySelector('.sagar-cursor-ring');
    if (oldRing && oldRing.parentNode) oldRing.parentNode.removeChild(oldRing);

    var ball = document.querySelector('.sagar-cursor-ball');
    if (!ball) {
      ball = document.createElement('div');
      ball.className = 'sagar-cursor-ball';
      ball.setAttribute('aria-hidden', 'true');
      document.body.appendChild(ball);
    }

    document.body.classList.add('has-sagar-cursor');

    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 2;
    var ballX = mouseX;
    var ballY = mouseY;
    var isClicking = false;
    var isVisible = false;

    window.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ball.style.opacity = '1';
      }
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      isVisible = false;
      ball.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function () {
      isVisible = true;
      ball.style.opacity = '1';
    });

    window.addEventListener('mousedown', function () {
      isClicking = true;
      ball.classList.add('is-clicking');
    });

    window.addEventListener('mouseup', function () {
      isClicking = false;
      ball.classList.remove('is-clicking');
    });

    // Smooth lerp loop for the trailing difference ball
    function renderCursor() {
      ballX += (mouseX - ballX) * 0.22;
      ballY += (mouseY - ballY) * 0.22;

      ball.style.transform = 'translate(' + ballX + 'px, ' + ballY + 'px) translate(-50%, -50%)' + (isClicking ? ' scale(0.85)' : '');

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Hover detection over ANY static text, dynamic text, images, or anime character!
    var hoverSelector = 'h1, h2, h3, h4, p, a, button, .btn, .nl-menu-btn, .nl-menu-close-btn, .nl-menu-link, .nl-hero-line, .nl-hero-title, .nl-hero-bio, .nl-brand-center, .nl-anime-kumar, .nl-hero-hand-left, .nl-hero-hand-right, img, .osiris-card, .cos-button, input, textarea, select, [role="button"], .interactive-target, .nl-laptop-stream-bubble, .nl-stream-text';

    document.addEventListener('mouseover', function (e) {
      var target = e.target.closest(hoverSelector);
      if (target) {
        ball.classList.add('is-hovering');
      }
    });

    document.addEventListener('mouseout', function (e) {
      var target = e.target.closest(hoverSelector);
      if (target) {
        ball.classList.remove('is-hovering');
      }
    });
  }

  function initCharacterScenes() {
    var scenes = document.querySelectorAll('[data-character-scene]');
    if (!scenes.length || !('IntersectionObserver' in window)) return;

    var motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    var scenesInView = new Set();
    var visibleThreshold = 0.01;

    function updateScene(scene) {
      var active = scenesInView.has(scene) && !document.hidden && !motionPreference.matches;
      if (active) scene.classList.add('is-character-ready');
      if (scene.classList.contains('is-character-visible') === active) return;

      scene.classList.toggle('is-character-visible', active);
      scene.dispatchEvent(new Event('character-scene-visibility'));
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= visibleThreshold) scenesInView.add(entry.target);
        else scenesInView.delete(entry.target);
        updateScene(entry.target);
      });
    }, { threshold: visibleThreshold });

    function updateScenes() { scenes.forEach(updateScene); }

    document.addEventListener('visibilitychange', updateScenes);
    motionPreference.addEventListener('change', updateScenes);
    scenes.forEach(function (scene) { observer.observe(scene); });
  }

  function initNavbarScrollGlass() {
    var nav = document.querySelector('.nl-nav');
    if (!nav) return;
    function syncNavGlass() {
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      if (y > 24) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    syncNavGlass();
    window.addEventListener('scroll', syncNavGlass, { passive: true });
  }

  /* ==========================================================================
     Bootstrap Shinobi Engine on DOM Ready
     ========================================================================== */
  function init() {
    initNavbarScrollGlass();
    initMinimalistMenu();
    initLaptopTypewriter();
    initCharacterScenes();
    initSagarCursor();
    initChakraCanvas();
    enhanceShinobiHeader();
    enhanceShinobiFooter();
    initShinobiForms();
    initExperienceTimelineScroll();

    // Clean up any old shinobi character canvas stage if present
    var oldStage = document.getElementById('shinobi-character-stage');
    if (oldStage && oldStage.parentNode) {
      oldStage.parentNode.removeChild(oldStage);
    }

    // WebMCP: Register read-only agentic browsing tools when supported by browser
    if (typeof navigator !== 'undefined' && navigator.modelContext && typeof navigator.modelContext.registerTool === 'function') {
      try {
        navigator.modelContext.registerTool({
          name: 'get_portfolio_summary',
          description: 'Get executive profile, credentials, and navigation URLs for Kumar Utkarsh (Senior BA, AI Product Strategist & Project Manager).',
          inputSchema: { type: 'object', properties: {} },
          execute: async function () {
            return {
              content: [{
                type: 'text',
                text: JSON.stringify({
                  name: 'Kumar Utkarsh',
                  role: 'Senior Business Analyst, AI Product Strategist & Project Manager',
                  experienceYears: '6+',
                  deliveredPlatforms: '700+',
                  globalMarkets: 34,
                  reworkReduction: '35%+',
                  satisfaction: '98%',
                  website: 'https://www.krutkarsh.com/',
                  llmsTxt: 'https://www.krutkarsh.com/llms.txt',
                  llmsFullTxt: 'https://www.krutkarsh.com/llms-full.txt',
                  sitemap: 'https://www.krutkarsh.com/sitemap.xml'
                })
              }]
            };
          }
        });
        navigator.modelContext.registerTool({
          name: 'get_contact_channels',
          description: 'Get direct contact channels, response SLA, and availability for Kumar Utkarsh.',
          inputSchema: { type: 'object', properties: {} },
          execute: async function () {
            return {
              content: [{
                type: 'text',
                text: JSON.stringify({
                  email: 'work.krutkarsh@gmail.com',
                  phoneWhatsApp: '+91 84471 43995',
                  linkedin: 'https://linkedin.com/in/kumar-utkarsh01',
                  github: 'https://github.com/krutkarsh01',
                  responseSla: '< 4 Hours',
                  bookingUrl: 'https://www.krutkarsh.com/contact/#book'
                })
              }]
            };
          }
        });
      } catch (_) { }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
