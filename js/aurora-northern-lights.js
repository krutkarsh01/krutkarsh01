/**
 * REAL PROCEDURAL NORTHERN LIGHTS (AURORA BOREALIS) & BLOXI17-STYLE GLOWING STARFIELD ENGINE
 * v4.14.0: Hardware-Accelerated WebGL GLSL Aurora Curtain Simulation
 * Preserving 100% of the Bloxi17 Glowing Starfield, Halos, Diffraction Spikes & Constellation Drift
 * Kumar Utkarsh Portfolio · Code of Sagar Aesthetic
 */

(function () {
  'use strict';
  if (typeof window === 'undefined') return;

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isVisible = true;
  var animationId = null;

  // Window & Canvas dimensions
  var width = window.innerWidth || 1440;
  var height = window.innerHeight || 900;

  // Mouse tracking for pointer lean & constellation interaction
  var mouse = { x: width * 0.5, y: height * 0.5, active: 0.0 };
  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = 1.0;
  }, { passive: true });

  window.addEventListener('mouseleave', function () {
    mouse.active = 0.0;
  }, { passive: true });

  // =========================================================================
  // 1. STARFIELD ENGINE (Bloxi17 Reference: Preserved 100% Intact)
  // =========================================================================
  var starCanvas = null;
  var starCtx = null;

  var backgroundStars = [];
  var heroGlowingStars = [];
  var constellationNodes = [];

  var NUM_BG_STARS = 320;
  var NUM_HERO_STARS = 45;
  var NUM_CONSTELLATION = 40;

  var STAR_COLOR_PALETTES = [
    { core: '#FFFFFF', inner: 'rgba(0, 240, 255, 0.85)', mid: 'rgba(0, 240, 255, 0.25)', outer: 'rgba(0, 240, 255, 0)' },   // Cyan starlight
    { core: '#FFFFFF', inner: 'rgba(70, 255, 210, 0.85)', mid: 'rgba(70, 255, 210, 0.25)', outer: 'rgba(70, 255, 210, 0)' },   // Mint aurora
    { core: '#FFFFFF', inner: 'rgba(255, 245, 200, 0.9)', mid: 'rgba(255, 220, 140, 0.25)', outer: 'rgba(255, 220, 140, 0)' }, // Warm celestial gold
    { core: '#FFFFFF', inner: 'rgba(210, 235, 255, 0.9)', mid: 'rgba(160, 205, 255, 0.25)', outer: 'rgba(160, 205, 255, 0)' }  // Pure diamond white
  ];

  function initStarfield() {
    backgroundStars = [];
    heroGlowingStars = [];
    constellationNodes = [];

    // 1. Background glittering diamond stars (sharp pin-point dots)
    for (var i = 0; i < NUM_BG_STARS; i++) {
      backgroundStars.push({
        x: Math.random(),
        y: Math.random() * 0.96,
        radius: Math.random() * 0.8 + 0.5,
        baseAlpha: Math.random() * 0.45 + 0.35,
        alphaRange: Math.random() * 0.4 + 0.2,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: (Math.random() * 0.025 + 0.008) * (prefersReduced ? 0.2 : 1)
      });
    }

    // 2. Hero glowing accent stars - sharp pinpoint cores with subtle micro-aura & clean diffraction spikes
    for (var j = 0; j < NUM_HERO_STARS; j++) {
      var palette = STAR_COLOR_PALETTES[Math.floor(Math.random() * STAR_COLOR_PALETTES.length)];
      heroGlowingStars.push({
        x: Math.random(),
        y: Math.random() * 0.88,
        coreRadius: Math.random() * 0.6 + 1.0,
        haloRadius: Math.random() * 3.5 + 3.0,
        palette: palette,
        baseAlpha: Math.random() * 0.3 + 0.65,
        alphaRange: Math.random() * 0.3 + 0.2,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: (Math.random() * 0.018 + 0.006) * (prefersReduced ? 0.2 : 1),
        flareLength: Math.random() * 4 + 4,
        hasFlare: Math.random() < 0.55
      });
    }

    // 3. Floating constellation nodes with subtle drift
    for (var k = 0; k < NUM_CONSTELLATION; k++) {
      constellationNodes.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.85),
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 1.2,
        alpha: Math.random() * 0.4 + 0.5
      });
    }
  }

  function renderStarfield() {
    if (!starCtx) return;
    starCtx.clearRect(0, 0, width, height);

    // LAYER A: Background Diamond Pin-point Stars
    starCtx.save();
    for (var bIdx = 0; bIdx < backgroundStars.length; bIdx++) {
      var bStar = backgroundStars[bIdx];
      bStar.phase += bStar.twinkleSpeed;
      var bAlpha = bStar.baseAlpha + (Math.sin(bStar.phase) * 0.5 + 0.5) * bStar.alphaRange;
      if (bAlpha < 0.1) bAlpha = 0.1;
      if (bAlpha > 0.95) bAlpha = 0.95;

      var bx = bStar.x * width;
      var by = bStar.y * height;

      starCtx.fillStyle = 'rgba(255, 255, 255, ' + bAlpha + ')';
      starCtx.beginPath();
      starCtx.arc(bx, by, bStar.radius, 0, Math.PI * 2);
      starCtx.fill();
    }
    starCtx.restore();

    // LAYER B: Interactive Constellation Nodes & Micro-Lines
    starCtx.save();
    for (var cIdx = 0; cIdx < constellationNodes.length; cIdx++) {
      var p = constellationNodes[cIdx];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height * 0.85;
      if (p.y > height * 0.85) p.y = 0;

      // Mouse subtle gravitational deflection
      if (mouse.active > 0.0) {
        var dx = mouse.x - p.x;
        var dy = mouse.y - p.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 1) {
          var force = (180 - dist) / 180 * 0.008;
          p.x += (dx / dist) * force * 15;
          p.y += (dy / dist) * force * 15;
        }
      }

      starCtx.fillStyle = 'rgba(0, 240, 255, ' + (p.alpha * 0.65) + ')';
      starCtx.beginPath();
      starCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      starCtx.fill();

      // Delicate connecting lines
      for (var dIdx = cIdx + 1; dIdx < constellationNodes.length; dIdx++) {
        var q = constellationNodes[dIdx];
        var distPQ = Math.hypot(p.x - q.x, p.y - q.y);
        if (distPQ < 95) {
          var lineAlpha = (1 - distPQ / 95) * 0.22;
          starCtx.strokeStyle = 'rgba(0, 229, 255, ' + lineAlpha + ')';
          starCtx.lineWidth = 0.6;
          starCtx.beginPath();
          starCtx.moveTo(p.x, p.y);
          starCtx.lineTo(q.x, q.y);
          starCtx.stroke();
        }
      }
    }
    starCtx.restore();

    // LAYER C: Bloxi17-Style Hero Glowing Stars & Diffraction Spikes
    starCtx.save();
    starCtx.globalCompositeOperation = 'lighter';

    for (var hIdx = 0; hIdx < heroGlowingStars.length; hIdx++) {
      var star = heroGlowingStars[hIdx];
      star.phase += star.pulseSpeed;

      var pulse = 0.5 + 0.5 * Math.sin(star.phase);
      var currentAlpha = star.baseAlpha + pulse * star.alphaRange;
      if (currentAlpha < 0.2) currentAlpha = 0.2;
      if (currentAlpha > 1.0) currentAlpha = 1.0;

      var sx = star.x * width;
      var sy = star.y * height;
      var curHalo = star.haloRadius * (0.8 + 0.4 * pulse);
      var curCore = star.coreRadius * (0.85 + 0.3 * pulse);

      // Pre-cached offscreen radial glow sprite (eliminates 45 per-frame createRadialGradient allocations)
      if (!star.sprite) {
        var spr = document.createElement('canvas');
        spr.width = 64;
        spr.height = 64;
        var sCtx = spr.getContext('2d');
        var rg = sCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
        rg.addColorStop(0.0, star.palette.core);
        rg.addColorStop(0.18, star.palette.inner);
        rg.addColorStop(0.55, star.palette.mid);
        rg.addColorStop(1.0, star.palette.outer);
        sCtx.fillStyle = rg;
        sCtx.fillRect(0, 0, 64, 64);
        star.sprite = spr;
      }
      starCtx.drawImage(star.sprite, sx - curHalo, sy - curHalo, curHalo * 2, curHalo * 2);

      // High-intensity diamond core
      starCtx.fillStyle = 'rgba(255, 255, 255, ' + currentAlpha + ')';
      starCtx.beginPath();
      starCtx.arc(sx, sy, curCore, 0, Math.PI * 2);
      starCtx.fill();

      // Delicate 4-point cross diffraction flare
      if (star.hasFlare && pulse > 0.45) {
        var flareAlpha = (pulse - 0.45) * 1.8 * currentAlpha;
        if (flareAlpha > 0.85) flareAlpha = 0.85;
        var fLen = star.flareLength * (0.7 + 0.5 * pulse);

        starCtx.strokeStyle = 'rgba(255, 255, 255, ' + flareAlpha + ')';
        starCtx.lineWidth = 0.75;

        starCtx.beginPath();
        starCtx.moveTo(sx - fLen, sy);
        starCtx.lineTo(sx + fLen, sy);
        starCtx.stroke();

        starCtx.beginPath();
        starCtx.moveTo(sx, sy - fLen);
        starCtx.lineTo(sx, sy + fLen);
        starCtx.stroke();
      }
    }
    starCtx.restore();
  }

  // =========================================================================
  // 2. WEBGL GLSL SHADER AURORA CURTAINS ENGINE (User's Exact Code)
  // =========================================================================
  var glCanvas = null;
  var gl = null;
  var glProgram = null;
  var uniformLocs = {};
  var startTime = performance.now();
  var smoothPointer = { x: width * 0.5, y: height * 0.5, z: 0.0 };

  // Shader configuration parameters matching user's specification
  var CONFIG = {
    amplitude: 1.0,
    height: 0.42,
    intensity: 0.62,
    layers: 2.0,
    placement: 'top', // 'top' = uFlip 0.0, 'bottom' = uFlip 1.0
    rays: 0.7,
    reach: 0.5,
    scale: 1.0,
    // Emerald at lower edge -> teal/cyan -> blue -> violet tips
    colors: [
      [0.133, 0.898, 0.518], // #22e584
      [0.098, 0.827, 0.773], // #19d3c5
      [0.310, 0.490, 1.000], // #4f7dff
      [0.627, 0.361, 1.000]  // #a05cff
    ]
  };

  function initWebGLAurora() {
    var backdrop = document.getElementById('universal-aurora-backdrop');
    if (!backdrop) return false;

    glCanvas = document.getElementById('webgl-aurora-canvas');
    if (!glCanvas) {
      glCanvas = document.createElement('canvas');
      glCanvas.id = 'webgl-aurora-canvas';
      glCanvas.className = 'webgl-aurora-canvas';
      glCanvas.setAttribute('aria-hidden', 'true');
      backdrop.prepend(glCanvas);
    }

    gl = glCanvas.getContext('webgl2', { alpha: true, antialias: false, depth: false }) ||
         glCanvas.getContext('webgl', { alpha: true, antialias: false, depth: false });

    if (!gl) {
      console.warn('WebGL not supported for Aurora shader; falling back to CSS curtains.');
      return false;
    }

    var isWebGL2 = (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext);

    var vsSource = isWebGL2 ?
      '#version 300 es\n' +
      'in vec2 aPos;\n' +
      'void main() {\n' +
      '  gl_Position = vec4(aPos, 0.0, 1.0);\n' +
      '}\n'
    :
      'attribute vec2 aPos;\n' +
      'void main() {\n' +
      '  gl_Position = vec4(aPos, 0.0, 1.0);\n' +
      '}\n';

    var fsSource = (isWebGL2 ? '#version 300 es\nprecision highp float;\nout vec4 fragColor;\n' : 'precision highp float;\n') +
      'uniform float uTime;\n' +
      'uniform vec2 uResolution;\n' +
      'uniform vec3 uPointer;\n' +
      'uniform float uIntro;\n' +
      'uniform float uDark;\n' +
      'uniform vec3 uColors[8];\n' +
      'uniform int uColorsCount;\n' +
      'uniform float uAmplitude;\n' +
      'uniform float uFlip;\n' +
      'uniform float uHeight;\n' +
      'uniform float uIntensity;\n' +
      'uniform float uLayers;\n' +
      'uniform float uRays;\n' +
      'uniform float uReach;\n' +
      'uniform float uScale;\n' +

      // 2D Simplex Noise (Ashima Arts / Stefan Gustavson)
      'vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n' +
      'vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n' +
      'vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }\n' +
      'float snoise(vec2 v) {\n' +
      '  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\n' +
      '  vec2 i  = floor(v + dot(v, C.yy) );\n' +
      '  vec2 x0 = v -   i + dot(i, C.xx);\n' +
      '  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n' +
      '  vec4 x12 = x0.xyxy + C.xxzz;\n' +
      '  x12.xy -= i1;\n' +
      '  i = mod289(i);\n' +
      '  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));\n' +
      '  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n' +
      '  m = m*m; m = m*m;\n' +
      '  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n' +
      '  vec3 h = abs(x) - 0.5;\n' +
      '  vec3 ox = floor(x + 0.5);\n' +
      '  vec3 a0 = x - ox;\n' +
      '  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n' +
      '  vec3 g;\n' +
      '  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n' +
      '  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n' +
      '  return 130.0 * dot(m, g);\n' +
      '}\n' +

      'vec2 uvOf(vec2 frag) {\n' +
      '  return frag / uResolution.xy;\n' +
      '}\n' +

      'vec3 ramp(vec3 colors[8], int count, float t) {\n' +
      '  float ct = clamp(t, 0.0, 1.0);\n' +
      '  if (count <= 1) return colors[0];\n' +
      '  float fCount = float(count - 1);\n' +
      '  float scaled = ct * fCount;\n' +
      '  float idx = floor(scaled);\n' +
      '  float frac = fract(scaled);\n' +
      '  vec3 c1 = colors[0];\n' +
      '  vec3 c2 = colors[1];\n' +
      '  for (int i = 0; i < 7; i++) {\n' +
      '    if (float(i) == idx) {\n' +
      '      c1 = colors[i];\n' +
      '      c2 = colors[i + 1];\n' +
      '      break;\n' +
      '    }\n' +
      '  }\n' +
      '  return mix(c1, c2, frac);\n' +
      '}\n' +

      'vec4 glow(vec3 color, float amount) {\n' +
      '  return vec4(color * amount, amount);\n' +
      '}\n' +

      // One curtain: its lower edge waves across the box, and light hangs above it.
      'vec4 curtain(vec2 uv, float aspect, float i) {\n' +
      '  float t = uTime * 0.06;\n' +
      '  float x = (uv.x - 0.5) * aspect * uScale + i * 3.7;\n' +
      '  float fold = snoise(vec2(x * 0.55 + t * (0.6 + i * 0.25), t * 0.9 + i * 7.1));\n' +
      '  float fine = snoise(vec2(x * 1.7 - t * 0.8, t * 1.3 + i * 3.3));\n' +
      '  float edge = uHeight + (fold * 0.16 + fine * 0.05) * uAmplitude - i * 0.05;\n' +
      '  float h = uv.y - edge;\n' +
      '  float rx = x * 7.0 + fold * 3.5;\n' +
      '  float streak = snoise(vec2(rx, uv.y * 0.35 - t * 1.6 + i)) * 0.6 + snoise(vec2(rx * 2.9, uv.y * 0.8 + t * 2.2)) * 0.4;\n' +
      '  float rays = mix(1.0, 0.35 + 1.25 * smoothstep(-0.55, 0.75, streak), uRays);\n' +
      '  float lit = smoothstep(-0.7, 0.6, snoise(vec2(x * 0.35 - t * 0.5, i * 5.0 + t * 0.4)));\n' +
      '  float reach = max(uReach, 0.02) * (0.75 + 0.5 * lit);\n' +
      '  float body = smoothstep(-0.02, 0.05, h) * exp(-max(h, 0.0) / reach * 2.6);\n' +
      '  float hem = exp(-abs(h - 0.02) * 55.0) * 0.35;\n' +
      '  float amount = (body + hem) * rays * (0.35 + 0.65 * lit);\n' +
      '  vec3 color = ramp(uColors, uColorsCount, clamp(h / reach * 0.9 + fine * 0.08, 0.0, 1.0));\n' +
      '  return vec4(color, amount);\n' +
      '}\n' +

      'vec4 scene(vec2 frag) {\n' +
      '  vec2 uv = uvOf(frag);\n' +
      '  vec2 lean = (uPointer.xy / uResolution - 0.5) * uPointer.z;\n' +
      '  if (uFlip > 0.5) { uv.y = 1.0 - uv.y; lean.y = -lean.y; }\n' +
      '  uv.x -= lean.x * 0.06 * max(uv.y - uHeight + 0.2, 0.0);\n' +
      '  uv.y -= lean.y * 0.03;\n' +
      '  float aspect = uResolution.x / uResolution.y;\n' +
      '  vec4 sum = vec4(0.0);\n' +
      '  for (int i = 0; i < 3; i++) {\n' +
      '    if (float(i) >= uLayers) break;\n' +
      '    vec4 c = curtain(uv, aspect, float(i));\n' +
      '    float w = i == 0 ? 1.0 : 0.6 / float(i);\n' +
      '    sum += vec4(c.rgb * c.a * w, c.a * w);\n' +
      '  }\n' +
      '  vec3 color = sum.a > 0.0 ? sum.rgb / sum.a : vec3(0.0);\n' +
      '  float rise = smoothstep(0.0, 1.0, uIntro * 1.4 - (uv.y - uHeight) * 0.6);\n' +
      '  float amount = (1.0 - exp(-sum.a * 1.6)) * uIntensity * rise;\n' +
      '  return glow(color, amount * mix(0.85, 1.2, uDark));\n' +
      '}\n' +

      'void main() {\n' +
      '  vec4 col = scene(gl_FragCoord.xy);\n' +
      (isWebGL2 ? '  fragColor = col;\n' : '  gl_FragColor = col;\n') +
      '}\n';

    function compileShader(type, src) {
      var s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Aurora Shader Compilation Error:', gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    }

    var vs = compileShader(gl.VERTEX_SHADER, vsSource);
    var fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return false;

    glProgram = gl.createProgram();
    gl.attachShader(glProgram, vs);
    gl.attachShader(glProgram, fs);
    gl.linkProgram(glProgram);

    if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) {
      console.error('Aurora Program Link Error:', gl.getProgramInfoLog(glProgram));
      return false;
    }

    gl.useProgram(glProgram);

    // Quad geometry (2 triangles covering -1 to 1)
    var quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0
      ]),
      gl.STATIC_DRAW
    );

    var posAttr = gl.getAttribLocation(glProgram, 'aPos');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations lookup
    uniformLocs = {
      uTime: gl.getUniformLocation(glProgram, 'uTime'),
      uResolution: gl.getUniformLocation(glProgram, 'uResolution'),
      uPointer: gl.getUniformLocation(glProgram, 'uPointer'),
      uIntro: gl.getUniformLocation(glProgram, 'uIntro'),
      uDark: gl.getUniformLocation(glProgram, 'uDark'),
      uColorsCount: gl.getUniformLocation(glProgram, 'uColorsCount'),
      uAmplitude: gl.getUniformLocation(glProgram, 'uAmplitude'),
      uFlip: gl.getUniformLocation(glProgram, 'uFlip'),
      uHeight: gl.getUniformLocation(glProgram, 'uHeight'),
      uIntensity: gl.getUniformLocation(glProgram, 'uIntensity'),
      uLayers: gl.getUniformLocation(glProgram, 'uLayers'),
      uRays: gl.getUniformLocation(glProgram, 'uRays'),
      uReach: gl.getUniformLocation(glProgram, 'uReach'),
      uScale: gl.getUniformLocation(glProgram, 'uScale')
    };

    // Color array uniform locations
    for (var c = 0; c < 8; c++) {
      uniformLocs['uColors_' + c] = gl.getUniformLocation(glProgram, 'uColors[' + c + ']');
    }

    // Set static parameters
    gl.uniform1i(uniformLocs.uColorsCount, CONFIG.colors.length);
    for (var i = 0; i < CONFIG.colors.length; i++) {
      var rgb = CONFIG.colors[i];
      gl.uniform3f(uniformLocs['uColors_' + i], rgb[0], rgb[1], rgb[2]);
    }

    gl.uniform1f(uniformLocs.uAmplitude, CONFIG.amplitude);
    gl.uniform1f(uniformLocs.uFlip, CONFIG.placement === 'bottom' ? 1.0 : 0.0);
    gl.uniform1f(uniformLocs.uHeight, CONFIG.height);
    gl.uniform1f(uniformLocs.uIntensity, CONFIG.intensity);
    gl.uniform1f(uniformLocs.uLayers, CONFIG.layers);
    gl.uniform1f(uniformLocs.uRays, CONFIG.rays);
    gl.uniform1f(uniformLocs.uReach, CONFIG.reach);
    gl.uniform1f(uniformLocs.uScale, CONFIG.scale);
    gl.uniform1f(uniformLocs.uDark, 1.0);

    // Enable Alpha Blending
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    // Suppress CSS fold animations since WebGL is rendering the curtains
    var oldFolds = backdrop.querySelectorAll('.aurora-glow-sheet, .aurora-curtain-fold, .aurora-fold-3');
    oldFolds.forEach(function (f) {
      f.style.display = 'none';
    });

    return true;
  }

  function renderWebGLAurora(elapsedSeconds) {
    if (!gl || !glProgram) return;

    gl.viewport(0, 0, glCanvas.width, glCanvas.height);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(glProgram);

    // Pointer smooth lerp
    smoothPointer.x += (mouse.x - smoothPointer.x) * 0.08;
    smoothPointer.y += (mouse.y - smoothPointer.y) * 0.08;
    smoothPointer.z += (mouse.active - smoothPointer.z) * 0.08;

    gl.uniform1f(uniformLocs.uTime, elapsedSeconds);
    gl.uniform2f(uniformLocs.uResolution, glCanvas.width, glCanvas.height);
    gl.uniform3f(uniformLocs.uPointer, smoothPointer.x, smoothPointer.y, smoothPointer.z);

    // Smooth entrance fade-in over 1.8s
    var introVal = Math.min(1.0, elapsedSeconds / 1.8);
    gl.uniform1f(uniformLocs.uIntro, introVal);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  // =========================================================================
  // 3. COMBINED RENDER LOOP (WebGL Aurora Curtains + Bloxi17 Starfield)
  // =========================================================================
  function resizeAll() {
    width = window.innerWidth || 1440;
    height = window.innerHeight || 900;
    // Render soft atmospheric WebGL aurora at 0.5x resolution (4x-16x faster GPU shader with silky upscaling)
    var glScale = 0.5;

    if (glCanvas) {
      glCanvas.width = Math.max(320, Math.floor(width * glScale));
      glCanvas.height = Math.max(200, Math.floor(height * glScale));
      glCanvas.style.width = width + 'px';
      glCanvas.style.height = height + 'px';
    }

    if (starCanvas) {
      starCanvas.width = width;
      starCanvas.height = height;
      starCanvas.style.width = width + 'px';
      starCanvas.style.height = height + 'px';
    }
  }

  var isHeroVisible = true;

  function checkHeroScroll() {
    // Keep Aurora Borealis & Bloxi17 Starfield animating smoothly across all sections
    isHeroVisible = true;
    if (!animationId && isVisible) {
      animationId = requestAnimationFrame(render);
    }
  }

  function render() {
    if (!isVisible || !isHeroVisible) {
      animationId = null;
      return;
    }

    var elapsedSeconds = (performance.now() - startTime) * 0.001;

    // 1. Render WebGL GLSL Aurora Curtains
    renderWebGLAurora(elapsedSeconds);

    // 2. Render Bloxi17 Glowing Starfield & Constellations Over Aurora
    renderStarfield();

    animationId = requestAnimationFrame(render);
  }

  function init() {
    // 1. Singleton Backdrop Container
    var backdrop = document.getElementById('universal-aurora-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'universal-aurora-backdrop';
      backdrop.className = 'universal-aurora-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.prepend(backdrop);
    }

    // Keep deep space horizon gradient base
    if (!backdrop.querySelector('.aurora-sky-base')) {
      var skyBase = document.createElement('div');
      skyBase.className = 'aurora-sky-base';
      backdrop.prepend(skyBase);
    }

    // 2. Initialize WebGL Aurora Curtain Engine
    var webglReady = initWebGLAurora();

    // 3. Initialize Single Universal Starfield Canvas (strictly on top of WebGL aurora)
    starCanvas = document.getElementById('universal-aurora-canvas');
    if (!starCanvas) {
      starCanvas = document.createElement('canvas');
      starCanvas.id = 'universal-aurora-canvas';
      starCanvas.className = 'universal-aurora-canvas';
      starCanvas.setAttribute('aria-hidden', 'true');
      if (backdrop && backdrop.nextSibling) {
        document.body.insertBefore(starCanvas, backdrop.nextSibling);
      } else {
        document.body.prepend(starCanvas);
      }
    }
    starCtx = starCanvas.getContext('2d');

    initStarfield();
    resizeAll();
    window.addEventListener('resize', resizeAll, { passive: true });
    window.addEventListener('scroll', checkHeroScroll, { passive: true });

    document.addEventListener('visibilitychange', function () {
      isVisible = !document.hidden;
      if (isVisible && !animationId) {
        animationId = requestAnimationFrame(render);
      }
    });

    animationId = requestAnimationFrame(render);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
