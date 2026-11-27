(function () {
  'use strict';

  const pose = document.querySelector('.character-typing-pose');
  const scene = pose?.closest('[data-character-scene]');
  if (!scene) return;

  const namespace = 'http://www.w3.org/2000/svg';

  function svgElement(name, attributes) {
    const element = document.createElementNS(namespace, name);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  }

  function displacementImage(points) {
    // Neutral gray leaves the seated pose in place. Green shifts only the fingertip pixels vertically.
    const ellipses = points.map(([cx, cy, rx, ry]) =>
      `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#pressure)"/>`
    ).join('');
    const map = `<svg xmlns="${namespace}" width="533" height="948" viewBox="0 0 533 948">
      <radialGradient id="pressure">
        <stop offset="10%" stop-color="#80ff80"/>
        <stop offset="100%" stop-color="#808080" stop-opacity="0"/>
      </radialGradient>
      <rect width="533" height="948" fill="#808080"/>
      ${ellipses}
    </svg>`;

    return 'data:image/svg+xml,' + encodeURIComponent(map);
  }

  function startTyping() {
    const svg = svgElement('svg', { class: 'character-typing-filter', 'aria-hidden': 'true' });
    const filter = svgElement('filter', {
      id: 'character-typing-fingers',
      primitiveUnits: 'objectBoundingBox',
      'color-interpolation-filters': 'sRGB',
    });
    const groups = [
      { points: [[269, 482, 19, 19], [296, 474, 11, 17]], pressure: '0;.027;0;.022;0;.031;0;0' },
      { points: [[285, 479, 13, 20], [307, 462, 9, 16]], pressure: '0;0;.027;0;.024;0;0;0' },
    ];
    const animations = groups.map(({ points, pressure }, index) => {
      const map = 'finger-map-' + index;
      const input = index === 0 ? 'SourceGraphic' : 'first-fingers';
      const displacement = svgElement('feDisplacementMap', {
        in: input, in2: map, result: index === 0 ? 'first-fingers' : 'typing-pose',
        scale: 0, xChannelSelector: 'R', yChannelSelector: 'G',
      });
      const animation = svgElement('animate', {
        attributeName: 'scale', begin: 'indefinite', dur: '1.5s', repeatCount: 'indefinite',
        values: pressure, keyTimes: '0;.14;.28;.43;.57;.72;.88;1',
      });
      displacement.append(animation);
      filter.append(svgElement('feImage', {
        href: displacementImage(points),
        x: 0, y: 0, width: 1, height: 1, preserveAspectRatio: 'none',
        result: map,
      }), displacement);
      return animation;
    });

    svg.append(filter);
    document.body.append(svg);
    if (typeof animations[0].beginElement !== 'function') {
      svg.remove();
      return;
    }

    animations.forEach(animation => animation.beginElement());
    return svg;
  }

  let typingFilter;
  function syncTyping() {
    const active = scene.classList.contains('is-character-visible');
    if (active && !typingFilter) typingFilter = startTyping();
    if (!typingFilter) return;

    pose.classList.toggle('is-typing', active);
    if (active) typingFilter.unpauseAnimations();
    else typingFilter.pauseAnimations();
  }

  scene.addEventListener('character-scene-visibility', syncTyping);
  syncTyping();
})();
