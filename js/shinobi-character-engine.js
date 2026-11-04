/**
 * SHINOBI CHARACTER ENGINE — FIVE LEGENDS OF THE LEAF
 * Minato Namikaze · Kakashi Hatake · Naruto Uzumaki · Obito Uchiha · Jiraiya
 * 60fps Multi-Layered Anime Jutsu VFX Canvas + Character Silhouettes + Collapsible HUD
 * Kumar Utkarsh Portfolio
 */

(function () {
  'use strict';
  if (typeof window === 'undefined') return;

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     Character Profiles & Philosophy
     ========================================================================== */
  var LEGENDS = {
    all: {
      name: 'All Legends',
      title: 'Hidden Leaf Grand Hokage Council',
      kanji: '火影',
      role: 'Will of Fire Pipeline',
      quote: 'The Will of Fire: Blending 5 master methodologies into an airtight 6-stage delivery pipeline.',
      auraColor: 'rgba(255, 94, 26, 0.4)',
      accentColor: '#ff5e1a'
    },
    minato: {
      name: 'Minato Namikaze',
      title: 'The Yellow Flash (Fourth Hokage · 波風ミナト)',
      kanji: '飛雷神',
      role: 'Velocity & Sprint Mastery',
      quote: 'Deploying at lightspeed: Translating ambiguous user stories into production prototypes with zero latency.',
      auraColor: 'rgba(251, 191, 36, 0.5)',
      accentColor: '#fbbf24'
    },
    kakashi: {
      name: 'Kakashi Hatake',
      title: 'The Copy Ninja (Sixth Hokage · はたけカカシ)',
      kanji: '雷切',
      role: 'Multi-Role Analysis & RBAC',
      quote: 'Those who break rules are scum, but those who abandon requirements rework are worse. Full multi-role coverage.',
      auraColor: 'rgba(56, 189, 248, 0.5)',
      accentColor: '#38bdf8'
    },
    naruto: {
      name: 'Naruto Uzumaki',
      title: 'The Seventh Hokage (Child of Prophecy · うずまきナルト)',
      kanji: '螺旋丸',
      role: 'Unyielding Delivery & 100% Quality',
      quote: 'I never go back on my word; that is my Nindō: Zero developer rework and 98% client approval.',
      auraColor: 'rgba(255, 94, 26, 0.6)',
      accentColor: '#ff5e1a'
    },
    obito: {
      name: 'Obito Uchiha',
      title: 'Kamui Spacetime Architect (うちはオビト)',
      kanji: '神威',
      role: 'Dual Perspectives & Architecture',
      quote: 'Bending complex systems to reveal hidden realities. Multi-sided platforms analyzed from every perspective.',
      auraColor: 'rgba(244, 63, 94, 0.5)',
      accentColor: '#f43f5e'
    },
    jiraiya: {
      name: 'Jiraiya',
      title: 'The Toad Sage (Legendary Sannin · 自来也)',
      kanji: '仙人',
      role: 'Living Specifications & Wisdom',
      quote: 'The true measure of a software architect is not how fast he types, but the living documentation he leaves behind.',
      auraColor: 'rgba(234, 88, 12, 0.5)',
      accentColor: '#ea580c'
    }
  };

  var activeLegend = 'all';

  // Preload Character Vector Silhouettes
  var charImages = {
    minato: new Image(),
    kakashi: new Image(),
    naruto: new Image(),
    obito: new Image(),
    jiraiya: new Image()
  };
  charImages.minato.src = '/images/shinobi-minato.svg';
  charImages.kakashi.src = '/images/shinobi-kakashi.svg';
  charImages.naruto.src = '/images/shinobi-naruto.svg';
  charImages.obito.src = '/images/shinobi-obito.svg';
  charImages.jiraiya.src = '/images/shinobi-jiraiya.svg';

  /* ==========================================================================
     Character Background Canvas Engine (60fps)
     ========================================================================== */
  function initCharacterCanvas() {
    if (prefersReduced) return;

    var canvas = document.getElementById('shinobi-character-stage');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'shinobi-character-stage';
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

    var mouse = { x: width * 0.5, y: height * 0.4, active: false };
    window.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }, { passive: true });

    /* 1. Minato Yellow Flash Light Streaks */
    var minatoBeams = [];
    function spawnMinatoBeam() {
      var angle = Math.random() * Math.PI * 0.35 + 0.1;
      var startX = Math.random() * width;
      var startY = Math.random() * (height * 0.6);
      var len = Math.random() * 260 + 140;
      minatoBeams.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * (Math.random() * 12 + 18),
        vy: Math.sin(angle) * (Math.random() * 8 + 10),
        len: len,
        life: 1.0,
        decay: Math.random() * 0.03 + 0.02,
        width: Math.random() * 2.5 + 1.2
      });
    }

    /* 2. Kakashi Chidori / Raikiri Lightning Arcs */
    var kakashiBolts = [];
    function spawnKakashiBolt() {
      var startX = Math.random() > 0.5 ? Math.random() * width * 0.35 : width * 0.65 + Math.random() * width * 0.35;
      var startY = Math.random() * height * 0.7;
      var points = [{ x: startX, y: startY }];
      var segCount = Math.floor(Math.random() * 6 + 5);
      var curX = startX;
      var curY = startY;

      for (var i = 0; i < segCount; i++) {
        curX += (Math.random() - 0.5) * 60;
        curY += Math.random() * 35 + 15;
        points.push({ x: curX, y: curY });
      }

      kakashiBolts.push({
        points: points,
        life: 1.0,
        decay: Math.random() * 0.08 + 0.05,
        width: Math.random() * 2 + 1,
        color: Math.random() > 0.3 ? '#38bdf8' : '#ffffff'
      });
    }

    /* 3. Naruto Kurama Chakra Flame Wisps */
    var kuramaFlames = [];
    var flameCount = 28;
    for (var f = 0; f < flameCount; f++) {
      kuramaFlames.push({
        x: Math.random() * width,
        y: height + Math.random() * 100,
        r: Math.random() * 14 + 6,
        vy: -Math.random() * 1.4 - 0.6,
        vxBase: (Math.random() - 0.5) * 0.6,
        angle: Math.random() * Math.PI * 2,
        life: Math.random() * 0.6 + 0.3,
        hue: Math.random() > 0.4 ? '255, 94, 26' : '255, 170, 0'
      });
    }

    /* 4. Obito Kamui Spacetime Vortex */
    var kamuiAngle = 0;

    /* 5. Jiraiya Sage Oil Embers */
    var jiraiyaEmbers = [];
    for (var j = 0; j < 18; j++) {
      jiraiyaEmbers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 3 + 1,
        vy: -Math.random() * 0.6 - 0.2,
        vx: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.2,
        flicker: Math.random() * Math.PI
      });
    }

    var charFloatAngle = 0;
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
      charFloatAngle += 0.015;

      // --- 0. CHARACTER VECTOR SILHOUETTE RENDERING ---
      var currentKey = activeLegend;
      if (currentKey === 'all') {
        // In 'all' mode, cycle subtle character appearance based on time
        var cycleKeys = ['minato', 'kakashi', 'naruto', 'obito', 'jiraiya'];
        var cycleIdx = Math.floor((Date.now() / 6000) % cycleKeys.length);
        currentKey = cycleKeys[cycleIdx];
      }

      var activeImg = charImages[currentKey];
      if (activeImg && activeImg.complete && activeImg.naturalWidth > 0) {
        ctx.save();
        var imgW = Math.min(260, width * 0.22);
        var imgH = imgW * 1.5;
        // Position on the right side behind the hero / cards
        var charX = width - imgW - 35;
        var charY = height * 0.16 + Math.sin(charFloatAngle) * 12;

        ctx.globalAlpha = activeLegend === 'all' ? 0.16 : 0.28;
        ctx.shadowBlur = 24;
        ctx.shadowColor = LEGENDS[currentKey].accentColor;
        ctx.drawImage(activeImg, charX, charY, imgW, imgH);
        ctx.restore();
      }

      // --- A. MINATO YELLOW FLASH RENDERING ---
      if (activeLegend === 'all' || activeLegend === 'minato') {
        if (Math.random() < 0.08) spawnMinatoBeam();

        for (var i = minatoBeams.length - 1; i >= 0; i--) {
          var b = minatoBeams[i];
          b.x += b.vx;
          b.y += b.vy;
          b.life -= b.decay;

          if (b.life <= 0 || b.x > width + 100 || b.y > height + 100) {
            minatoBeams.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          var tailX = b.x - b.vx * 3;
          var tailY = b.y - b.vy * 3;
          var grad = ctx.createLinearGradient(tailX, tailY, b.x, b.y);
          grad.addColorStop(0, 'rgba(251, 191, 36, 0)');
          grad.addColorStop(0.7, 'rgba(251, 191, 36, ' + (b.life * 0.5) + ')');
          grad.addColorStop(1, 'rgba(255, 255, 255, ' + (b.life * 0.8) + ')');

          ctx.strokeStyle = grad;
          ctx.lineWidth = b.width;
          ctx.lineCap = 'round';
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#fbbf24';
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          // Flash Kunai spark at the head of beam
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.width * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, ' + b.life + ')';
          ctx.fill();
          ctx.restore();
        }
      }

      // --- B. KAKASHI CHIDORI LIGHTNING RENDERING ---
      if (activeLegend === 'all' || activeLegend === 'kakashi') {
        if (Math.random() < 0.06) spawnKakashiBolt();

        for (var k = kakashiBolts.length - 1; k >= 0; k--) {
          var bolt = kakashiBolts[k];
          bolt.life -= bolt.decay;
          if (bolt.life <= 0) {
            kakashiBolts.splice(k, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(bolt.points[0].x, bolt.points[0].y);
          for (var pIdx = 1; pIdx < bolt.points.length; pIdx++) {
            ctx.lineTo(bolt.points[pIdx].x, bolt.points[pIdx].y);
          }
          ctx.strokeStyle = bolt.color;
          ctx.globalAlpha = bolt.life * 0.6;
          ctx.lineWidth = bolt.width;
          ctx.shadowBlur = 14;
          ctx.shadowColor = '#38bdf8';
          ctx.stroke();
          ctx.restore();
        }
      }

      // --- C. NARUTO KURAMA CHAKRA FLAMES RENDERING ---
      if (activeLegend === 'all' || activeLegend === 'naruto') {
        ctx.save();
        for (var nf = 0; nf < kuramaFlames.length; nf++) {
          var flame = kuramaFlames[nf];
          flame.y += flame.vy;
          flame.angle += 0.02;
          flame.x += Math.sin(flame.angle) * 0.8 + flame.vxBase;

          if (flame.y < -30) {
            flame.y = height + 20;
            flame.x = Math.random() * width;
          }

          var flameAlpha = (activeLegend === 'naruto' ? 0.35 : 0.18) * Math.sin((flame.y / height) * Math.PI);
          if (flameAlpha < 0) flameAlpha = 0;

          ctx.beginPath();
          var flameGrad = ctx.createRadialGradient(flame.x, flame.y, 0, flame.x, flame.y, flame.r);
          flameGrad.addColorStop(0, 'rgba(' + flame.hue + ', ' + (flameAlpha * 1.5) + ')');
          flameGrad.addColorStop(0.6, 'rgba(' + flame.hue + ', ' + flameAlpha + ')');
          flameGrad.addColorStop(1, 'rgba(' + flame.hue + ', 0)');

          ctx.fillStyle = flameGrad;
          ctx.arc(flame.x, flame.y, flame.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // --- D. OBITO KAMUI SPACETIME VORTEX RENDERING ---
      if (activeLegend === 'all' || activeLegend === 'obito') {
        kamuiAngle += 0.008;
        var centerX = mouse.active ? mouse.x : width * 0.82;
        var centerY = mouse.active ? mouse.y : height * 0.42;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(kamuiAngle);

        var ringCount = activeLegend === 'obito' ? 5 : 3;
        var maxR = activeLegend === 'obito' ? 140 : 80;

        for (var r = 1; r <= ringCount; r++) {
          var curRadius = (r / ringCount) * maxR;
          ctx.beginPath();
          ctx.arc(0, 0, curRadius, 0, Math.PI * 1.5);
          ctx.strokeStyle = activeLegend === 'obito' ? 'rgba(244, 63, 94, 0.25)' : 'rgba(244, 63, 94, 0.08)';
          ctx.lineWidth = 1.2;
          ctx.setLineDash([8, 12]);
          ctx.stroke();
        }
        ctx.restore();
      }

      // --- E. JIRAIYA SAGE OIL EMBERS RENDERING ---
      if (activeLegend === 'all' || activeLegend === 'jiraiya') {
        ctx.save();
        for (var je = 0; je < jiraiyaEmbers.length; je++) {
          var ember = jiraiyaEmbers[je];
          ember.y += ember.vy;
          ember.x += ember.vx;
          ember.flicker += 0.03;

          if (ember.y < 0) {
            ember.y = height + 10;
            ember.x = Math.random() * width;
          }

          var eAlpha = ember.alpha + Math.sin(ember.flicker) * 0.15;
          if (eAlpha < 0.1) eAlpha = 0.1;

          ctx.beginPath();
          ctx.arc(ember.x, ember.y, ember.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(234, 88, 12, ' + (eAlpha * (activeLegend === 'jiraiya' ? 0.7 : 0.35)) + ')';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#ea580c';
          ctx.fill();
        }
        ctx.restore();
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  /* ==========================================================================
     Interactive Shinobi Legends HUD Controller (Collapsible & Non-Intrusive)
     ========================================================================== */
  function createShinobiLegendsHUD() {
    if (document.getElementById('shinobi-legends-hud')) return;

    var hud = document.createElement('div');
    hud.id = 'shinobi-legends-hud';
    hud.className = 'shinobi-legends-hud collapsed';
    hud.setAttribute('role', 'region');
    hud.setAttribute('aria-label', 'Shinobi Legends Aura Controller');

    var hudInner = document.createElement('div');
    hudInner.className = 'hud-inner';

    // Clickable Title Bar that toggles collapsed/expanded state
    var hudLabel = document.createElement('button');
    hudLabel.type = 'button';
    hudLabel.className = 'hud-title-bar';
    hudLabel.setAttribute('aria-expanded', 'false');
    hudLabel.innerHTML = '<span class="hud-crest-icon">火</span>' +
      '<span class="hud-title-text">SHINOBI LEGENDS AURA</span>' +
      '<span class="hud-status-pulse"></span>' +
      '<span class="hud-arrow-indicator">▾</span>';
    hudInner.appendChild(hudLabel);

    var hudBody = document.createElement('div');
    hudBody.className = 'hud-body-content';

    var chipsWrap = document.createElement('div');
    chipsWrap.className = 'hud-chips-wrap';

    var keys = ['all', 'minato', 'kakashi', 'naruto', 'obito', 'jiraiya'];
    var buttons = {};

    keys.forEach(function (key) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'hud-legend-chip' + (key === activeLegend ? ' active' : '');
      btn.setAttribute('data-legend', key);

      var iconMap = {
        all: '✨ All',
        minato: '⚡ Minato',
        kakashi: '⚡ Kakashi',
        naruto: '🔥 Naruto',
        obito: '🌀 Obito',
        jiraiya: '🐸 Jiraiya'
      };

      btn.innerHTML = iconMap[key];
      btn.title = LEGENDS[key].title + ' — ' + LEGENDS[key].role;

      btn.onclick = function (e) {
        e.stopPropagation();
        selectLegend(key);
      };

      buttons[key] = btn;
      chipsWrap.appendChild(btn);
    });

    hudBody.appendChild(chipsWrap);

    // Toast Quote Banner inside HUD
    var quoteBox = document.createElement('div');
    quoteBox.id = 'hud-legend-quote';
    quoteBox.className = 'hud-legend-quote';
    hudBody.appendChild(quoteBox);

    hudInner.appendChild(hudBody);
    hud.appendChild(hudInner);
    document.body.appendChild(hud);

    function updateQuote(key) {
      var leg = LEGENDS[key];
      quoteBox.innerHTML = '<strong style="color:' + leg.accentColor + ';">[' + leg.kanji + ' ' + leg.name + ']:</strong> ' +
        '<span>' + leg.quote + '</span>';
    }

    function selectLegend(key) {
      activeLegend = key;
      Object.keys(buttons).forEach(function (k) {
        buttons[k].classList.toggle('active', k === key);
      });
      updateQuote(key);
      // Auto open if closed
      hud.classList.remove('collapsed');
      hudLabel.setAttribute('aria-expanded', 'true');
    }

    // Toggle collapse on click
    hudLabel.onclick = function () {
      var isCollapsed = hud.classList.toggle('collapsed');
      hudLabel.setAttribute('aria-expanded', (!isCollapsed).toString());
    };

    // Default quote
    updateQuote(activeLegend);
  }

  /* ==========================================================================
     Bootstrap Shinobi Character Engine
     ========================================================================== */
  function init() {
    initCharacterCanvas();
    createShinobiLegendsHUD();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
