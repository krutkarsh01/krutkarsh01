/**
 * ANIME HUMAN COMPANION ENGINE — AUTONOMOUS SCROLL-DRIVEN ARCHITECTURE
 * 60fps Scroll-bound leaps, dynamic autonomous gestures, and contextual explainer guide.
 * Code of Sagar Design System Integration · Kumar Utkarsh Portfolio
 */

(function () {
  'use strict';
  if (typeof window === 'undefined') return;

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     Waypoints & Explainer Commentary Data
     ========================================================================== */
  var WAYPOINTS = [
    {
      id: 'nlHeroSection',
      name: 'Hero Studio',
      tag: '01 / ARCHITECTURAL STUDIO',
      emote: '⚡',
      title: 'Architecting Intelligent Systems',
      text: "That's me! I translate ambiguous product vision into production prototypes and scalable AI systems that eliminate rework.",
      dockHero: true
    },
    {
      id: 'osiris-command-deck',
      name: '34 Global Markets',
      tag: '02 / WORLDWIDE PROOF',
      emote: '🌍',
      title: '700+ Projects in 34 Nations',
      text: 'Look at this interactive atlas! 700+ systems delivered across Europe, North America, Asia, Africa, and Oceania. Pick any nation to see its living prototype.',
      offsetX: 20,
      offsetY: -35
    },
    {
      id: 'core-value-proposition',
      name: 'Value Proposition',
      tag: '03 / METHODOLOGY PILLARS',
      emote: '📐',
      title: 'Four Delivery Foundations',
      text: 'Here is how we cut rework by 35%: AI & agentic orchestration, multi-actor RBAC state machines, living clickable HTML prototypes, and cross-border compliance.',
      offsetX: 40,
      offsetY: -30
    },
    {
      id: 'portfolio-curved-gallery',
      name: '17 Living Prototypes',
      tag: '04 / INTERACTIVE SANDBOXES',
      emote: '🚀',
      title: 'Test Live Role-Based Prototypes',
      text: 'Tap any project in this 3D carousel! Every platform (MEAX, 112 Veterinarios, El Manantial) is prototyped role-by-role before engineers write a single line of code.',
      offsetX: -60,
      offsetY: -20
    },
    {
      id: 'contact',
      name: 'Direct Dispatch',
      tag: '05 / READY TO SHIP',
      emote: '💬',
      title: 'Direct Line to Architecture',
      text: 'Ready to build without scope creep? Transmit your project brief right here. Kumar responds directly within 4 hours with an architectural roadmap.',
      offsetX: 40,
      offsetY: -20
    }
  ];

  var POSES = {
    typing: '/images/3d-kumar-sit.png',
    idle: '/images/3d-kumar-explain.png',
    jump: '/images/3d-kumar-jump.png',
    land: '/images/3d-kumar-land.png',
    explain: '/images/3d-kumar-explain.png'
  };

  /* ==========================================================================
     Companion Engine State
     ========================================================================== */
  var state = {
    currentIndex: 0,
    isJumping: false,
    posX: 100,
    posY: 300,
    targetX: 100,
    targetY: 300,
    startX: 100,
    startY: 300,
    startTime: 0,
    duration: 800,
    apexHeight: 120,
    speechVisible: false,
    facingRight: true,
    lastScrollY: 0,
    isHeroActive: true
  };

  // DOM Elements
  var stageEl = null;
  var characterEl = null;
  var charImg = null;
  var speechEl = null;
  var speechTag = null;
  var speechTitle = null;
  var speechText = null;
  var hudEl = null;
  var hudStatus = null;
  var dustContainer = null;

  /* ==========================================================================
     DOM Construction & Styles
     ========================================================================== */
  function injectStyles() {
    if (document.getElementById('anime-companion-styles')) return;
    var style = document.createElement('style');
    style.id = 'anime-companion-styles';
    style.textContent = `
      #anime-companion-stage {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 950;
        overflow: hidden;
      }

      .anime-companion-character {
        position: absolute;
        width: 170px;
        height: 230px;
        pointer-events: auto;
        cursor: grab;
        transform-origin: bottom center;
        transition: filter 0.25s ease, opacity 0.3s ease;
        filter: drop-shadow(0 14px 32px rgba(0, 0, 0, 0.65));
        opacity: 0;
        visibility: hidden;
      }

      .anime-companion-character.active {
        opacity: 1;
        visibility: visible;
      }

      .anime-companion-character:hover {
        filter: drop-shadow(0 14px 32px rgba(0, 255, 135, 0.35)) scale(1.05);
      }

      .anime-companion-character img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
        user-select: none;
        -webkit-user-drag: none;
      }

      /* Speech Explainer Balloon */
      .anime-speech-bubble {
        position: absolute;
        bottom: 186px;
        left: 50%;
        transform: translateX(-50%) translateY(0);
        width: 300px;
        background: rgba(5, 26, 22, 0.95);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(0, 255, 135, 0.3);
        border-radius: 12px;
        padding: 14px 16px;
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 135, 0.15);
        pointer-events: auto;
        font-family: 'Space Grotesk', -apple-system, sans-serif;
        color: #FFFFFF;
        direction: ltr !important;
        unicode-bidi: normal !important;
        text-align: left !important;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 960;
      }

      .anime-speech-bubble.active {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(-6px);
      }

      .anime-speech-bubble::after {
        content: '';
        position: absolute;
        bottom: -7px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 12px;
        height: 12px;
        background: #051a16;
        border-right: 1px solid rgba(0, 255, 135, 0.3);
        border-bottom: 1px solid rgba(0, 255, 135, 0.3);
      }

      .anime-speech-tag {
        font-family: 'Space Mono', monospace;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: #03100E;
        background: #00ff87;
        border-radius: 9999px;
        padding: 2px 8px;
        display: inline-block;
        margin-bottom: 6px;
        text-transform: uppercase;
      }

      .anime-speech-title {
        font-size: 14px;
        font-weight: 600;
        margin: 0 0 6px;
        line-height: 1.3;
        color: #FFFFFF;
      }

      .anime-speech-text {
        font-size: 13px;
        line-height: 18px;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.85);
        margin: 0 0 10px;
      }

      .anime-speech-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 8px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }

      .anime-speech-btn {
        background: #00ff87;
        color: #03100E;
        border: none;
        border-radius: 9999px;
        padding: 5px 12px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        transition: background 0.15s ease;
      }

      .anime-speech-btn:hover {
        background: #5cffb1;
      }

      .anime-speech-close {
        background: transparent;
        color: rgba(255, 255, 255, 0.5);
        border: none;
        font-size: 16px;
        cursor: pointer;
        padding: 2px 6px;
        line-height: 1;
      }

      .anime-speech-close:hover {
        color: #FFFFFF;
      }

      /* Floating Tour HUD */
      #anime-companion-hud {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 1000;
        background: rgba(5, 26, 22, 0.92);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(0, 255, 135, 0.25);
        border-radius: 9999px;
        padding: 6px 14px 6px 10px;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        font-family: 'Space Grotesk', -apple-system, sans-serif;
        font-size: 13px;
        font-weight: 600;
        color: #FFFFFF;
        pointer-events: none;
        opacity: 0;
        transition: transform 0.2s ease, opacity 0.3s ease;
      }

      .anime-hud-avatar {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #00ff87;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #03100E;
      }

      .anime-hud-btn {
        background: rgba(255, 255, 255, 0.15);
        color: #FFFFFF;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 9999px;
        padding: 4px 10px;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .anime-hud-btn:hover {
        background: #00ff87;
        color: #03100E;
      }

      /* Particle Dust Puffs */
      .anime-dust-puff {
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #00ff87;
        pointer-events: none;
        opacity: 0.8;
        transform: scale(0.5);
        animation: dustFade 0.4s ease-out forwards;
      }

      @keyframes dustFade {
        0% { opacity: 0.8; transform: scale(0.6) translateY(0); }
        100% { opacity: 0; transform: scale(1.6) translateY(-14px); }
      }

      @media (max-width: 768px) {
        .anime-companion-character {
          width: 95px;
          height: 135px;
        }
        .anime-speech-bubble {
          width: 250px;
          bottom: 145px;
          padding: 12px;
        }
        #anime-companion-hud {
          bottom: 16px;
          right: 16px;
          padding: 4px 10px;
          font-size: 12px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function createCompanionDOM() {
    stageEl = document.createElement('div');
    stageEl.id = 'anime-companion-stage';
    stageEl.setAttribute('aria-hidden', 'true');

    dustContainer = document.createElement('div');
    dustContainer.className = 'anime-dust-container';
    stageEl.appendChild(dustContainer);

    characterEl = document.createElement('div');
    characterEl.className = 'anime-companion-character';
    characterEl.setAttribute('role', 'button');
    characterEl.setAttribute('tabindex', '0');
    characterEl.setAttribute('aria-label', 'Interactive Anime Tour Guide. Follows you on scroll.');

    charImg = document.createElement('img');
    charImg.src = POSES.explain;
    charImg.alt = 'Anime Tour Guide Companion';
    characterEl.appendChild(charImg);

    // Speech Bubble
    speechEl = document.createElement('div');
    speechEl.className = 'anime-speech-bubble';

    speechTag = document.createElement('span');
    speechTag.className = 'anime-speech-tag';
    speechEl.appendChild(speechTag);

    speechTitle = document.createElement('h4');
    speechTitle.className = 'anime-speech-title';
    speechEl.appendChild(speechTitle);

    speechText = document.createElement('p');
    speechText.className = 'anime-speech-text';
    speechEl.appendChild(speechText);

    var footer = document.createElement('div');
    footer.className = 'anime-speech-footer';

    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'anime-speech-btn';
    nextBtn.textContent = 'Next Stop ↷';
    nextBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      jumpToNextWaypoint();
    });
    footer.appendChild(nextBtn);

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'anime-speech-close';
    closeBtn.innerHTML = '×';
    closeBtn.setAttribute('aria-label', 'Close explanation');
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      hideSpeech();
    });
    footer.appendChild(closeBtn);

    speechEl.appendChild(footer);
    characterEl.appendChild(speechEl);

    characterEl.addEventListener('click', function () {
      if (state.speechVisible) {
        jumpToNextWaypoint();
      } else {
        showSpeech();
      }
    });

    stageEl.appendChild(characterEl);
    document.body.appendChild(stageEl);

    // Tour Guide HUD permanently removed per User Request
    hudEl = null;
  }

  /* ==========================================================================
     Waypoint Coordinate Math
     ========================================================================== */
  function getWaypointPosition(index) {
    if (index <= 0) {
      // In Hero: Dock smoothly near the hero bottom-left
      return { x: window.innerWidth * 0.15, y: window.innerHeight * 0.65 };
    }

    var wp = WAYPOINTS[index];
    var targetEl = document.getElementById(wp.id);

    if (!targetEl) {
      return { x: window.innerWidth * 0.1, y: 800 * index };
    }

    var rect = targetEl.getBoundingClientRect();
    var pageY = window.pageYOffset + rect.top;
    var pageX = window.pageXOffset + rect.left;

    var posX = pageX + (rect.width > 400 ? rect.width * 0.78 : rect.width) + (wp.offsetX || 0);
    var posY = pageY + (wp.offsetY || 0) + 40;

    var maxW = document.documentElement.clientWidth - 150;
    if (posX > maxW) posX = maxW - 20;
    if (posX < 20) posX = 20;

    return { x: posX, y: posY };
  }

  function spawnDust(x, y) {
    if (prefersReduced || !dustContainer) return;
    for (var i = 0; i < 4; i++) {
      var puff = document.createElement('div');
      puff.className = 'anime-dust-puff';
      var offsetX = (Math.random() - 0.5) * 40;
      puff.style.left = (x + 50 + offsetX) + 'px';
      puff.style.top = (y + 160) + 'px';
      dustContainer.appendChild(puff);
      setTimeout(function (el) {
        if (el && el.parentNode) el.parentNode.removeChild(el);
      }, 450, puff);
    }
  }

  /* ==========================================================================
     Parabolic Leap Animation
     ========================================================================== */
  function jumpTo(targetX, targetY, onComplete) {
    if (prefersReduced) {
      state.posX = targetX;
      state.posY = targetY;
      updateCharacterPosition();
      if (onComplete) onComplete();
      return;
    }

    state.isJumping = true;
    state.startX = state.posX;
    state.startY = state.posY;
    state.targetX = targetX;
    state.targetY = targetY;
    state.facingRight = targetX >= state.startX;

    hideSpeech();

    // 1. Anticipation Crouch (120ms)
    charImg.src = POSES.land;
    charImg.style.transformOrigin = 'bottom center';
    charImg.style.transform = (state.facingRight ? 'scale(1.15, 0.85)' : 'scale(-1.15, 0.85)');
    characterEl.style.transform = 'none';

    setTimeout(function () {
      state.startTime = performance.now();
      charImg.src = POSES.jump;

      function renderArc(now) {
        var elapsed = now - state.startTime;
        var progress = Math.min(elapsed / state.duration, 1);

        var ease = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        state.posX = state.startX + (state.targetX - state.startX) * ease;
        var linearY = state.startY + (state.targetY - state.startY) * ease;
        var arcY = 4 * state.apexHeight * progress * (1 - progress);
        state.posY = linearY - arcY;

        var tilt = (progress < 0.5 ? -14 : 14) * (state.facingRight ? 1 : -1);
        charImg.style.transform = `scale(${state.facingRight ? 1 : -1}, 1) rotate(${tilt}deg)`;
        characterEl.style.transform = 'none';
        updateCharacterPosition();

        if (progress < 1) {
          requestAnimationFrame(renderArc);
        } else {
          // Touchdown Squash and Stretch
          state.isJumping = false;
          charImg.src = POSES.land;
          charImg.style.transform = state.facingRight ? 'scale(1.25, 0.75)' : 'scale(-1.25, 0.75)';
          characterEl.style.transform = 'none';
          spawnDust(state.posX, state.posY);

          setTimeout(function () {
            charImg.src = POSES.explain;
            charImg.style.transform = state.facingRight ? 'scale(1, 1)' : 'scale(-1, 1)';
            characterEl.style.transform = 'none';
            if (onComplete) onComplete();
          }, 140);
        }
      }

      requestAnimationFrame(renderArc);
    }, 120);
  }

  function updateCharacterPosition() {
    if (!characterEl) return;
    characterEl.style.left = state.posX + 'px';
    characterEl.style.top = state.posY + 'px';
  }

  function showSpeech() {
    var wp = WAYPOINTS[state.currentIndex];
    if (!wp || !speechEl) return;

    speechTag.textContent = wp.tag;
    speechTitle.textContent = wp.emote + ' ' + wp.title;
    speechText.textContent = wp.text;
    speechEl.classList.add('active');
    state.speechVisible = true;

    if (hudStatus) {
      hudStatus.textContent = wp.name;
    }
  }

  function hideSpeech() {
    if (speechEl) {
      speechEl.classList.remove('active');
      state.speechVisible = false;
    }
  }

  function jumpToWaypoint(index) {
    if (state.isJumping) return;
    state.currentIndex = (index + WAYPOINTS.length) % WAYPOINTS.length;
    var target = getWaypointPosition(state.currentIndex);

    var targetScroll = Math.max(0, target.y - 280);
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });

    jumpTo(target.x, target.y, function () {
      setTimeout(showSpeech, 180);
    });
  }

  function jumpToNextWaypoint() {
    jumpToWaypoint(state.currentIndex + 1);
  }

  /* ==========================================================================
     Autonomous Scroll Listener (Automatic Leaping & Tracking throughout Page)
     ========================================================================== */
  var scrollTimeout = null;

  function onScroll() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var heroEl = document.getElementById('nlHeroSection');
    var heroHeight = heroEl ? heroEl.offsetHeight : 700;

    // Inside Hero: The hero character is active on the stone hand!
    if (scrollY < heroHeight * 0.5) {
      if (characterEl) characterEl.classList.remove('active');
      if (hudEl) {
        hudEl.style.opacity = '0';
        hudEl.style.pointerEvents = 'none';
      }
      hideSpeech();
      state.isHeroActive = true;
      return;
    } else {
      if (hudEl) {
        hudEl.style.opacity = '1';
        hudEl.style.pointerEvents = 'auto';
      }
    }

    // Past Hero: Reveal the traveling companion!
    if (characterEl && !characterEl.classList.contains('active')) {
      characterEl.classList.add('active');
      var initPos = getWaypointPosition(1);
      state.posX = initPos.x;
      state.posY = initPos.y;
      updateCharacterPosition();
    }

    state.isHeroActive = false;

    // Detect Active Section in Viewport
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      if (state.isJumping) return;

      var viewportMid = scrollY + window.innerHeight * 0.45;
      var bestIndex = 1;
      var minDistance = Infinity;

      for (var i = 1; i < WAYPOINTS.length; i++) {
        var el = document.getElementById(WAYPOINTS[i].id);
        if (el) {
          var rect = el.getBoundingClientRect();
          var sectionMid = scrollY + rect.top + rect.height * 0.35;
          var dist = Math.abs(viewportMid - sectionMid);
          if (dist < minDistance) {
            minDistance = dist;
            bestIndex = i;
          }
        }
      }

      if (bestIndex !== state.currentIndex) {
        state.currentIndex = bestIndex;
        var target = getWaypointPosition(bestIndex);
        jumpTo(target.x, target.y, function () {
          showSpeech();
        });
      }
    }, 180);
  }

  /* ==========================================================================
     Initialize Companion
     ========================================================================== */
  function initEngine() {
    injectStyles();
    createCompanionDOM();

    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial check
    onScroll();

    window.AnimeCompanion = {
      jumpTo: jumpToWaypoint,
      next: jumpToNextWaypoint,
      toggleSpeech: function () {
        if (state.speechVisible) hideSpeech(); else showSpeech();
      }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEngine);
  } else {
    initEngine();
  }
})();
