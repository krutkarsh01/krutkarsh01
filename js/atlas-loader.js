const globe = document.getElementById('globe-canvas-wrap');

async function mountGlobe() {
  try {
    const { mountAtlas } = await import('/_astro/atlas-globe.Deg8bG5e.js');
    const atlas = mountAtlas(globe, window.__HUBS ?? [], {
      onHub: hub => window.focusGlobeHub?.(hub),
    });
    if (!atlas) return;

    window.__atlas = atlas;
    const bind = (id, handler) => document.getElementById(id)?.addEventListener('click', handler);
    bind('globe-btn-west', () => atlas.step(-1));
    bind('globe-btn-east', () => atlas.step(1));
    bind('globe-btn-play', event => {
      const paused = atlas.togglePause();
      event.currentTarget.textContent = paused ? '▶' : '⏸';
      event.currentTarget.setAttribute('aria-label', paused ? 'Resume rotation' : 'Pause rotation');
    });
  } catch (error) {
    console.error('Mount atlas error:', error);
  }
}

function observeAtlas() {
  if (!globe) return;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio < 0.01) return;
      observer.disconnect();
      mountGlobe();
    }, { threshold: 0.01 });
    observer.observe(globe);
  } else {
    mountGlobe();
  }
}

// The page-turn controller creates its normal-flow stage on DOMContentLoaded.
document.addEventListener('DOMContentLoaded', observeAtlas, { once: true });
