const fs = require('fs');
const { PROTO_DATA, ALL_HUBS, TOP_HOMEPAGE_PROTOS } = require('./update_data_and_templates');

// 1. UPDATE index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// A. Replace const hubs = [...]
const hubsStart = indexHtml.indexOf('const hubs = [');
const hubsEnd = indexHtml.indexOf('window.__HUBS = hubs;', hubsStart);
if (hubsStart !== -1 && hubsEnd !== -1) {
  const newHubsScript = 'const hubs = ' + JSON.stringify(ALL_HUBS) + ';\n';
  indexHtml = indexHtml.substring(0, hubsStart) + newHubsScript + indexHtml.substring(hubsEnd);
  console.log('✓ Successfully updated __HUBS in index.html');
}

// B. Replace PROTO_DATA in index.html
const pDataStart = indexHtml.indexOf('var protoData = {');
const pDataEnd = indexHtml.indexOf('window.PROTO_DATA = protoData;', pDataStart);
if (pDataStart !== -1 && pDataEnd !== -1) {
  const newProtoDataScript = 'var protoData = ' + JSON.stringify(PROTO_DATA) + ';\n  ';
  indexHtml = indexHtml.substring(0, pDataStart) + newProtoDataScript + indexHtml.substring(pDataEnd);
  console.log('✓ Successfully updated PROTO_DATA in index.html');
}

// C. Update Select Dropdown with All 34 Markets & 'all' option
const selectStart = indexHtml.indexOf('<select id="kh-market-select"');
const selectEnd = indexHtml.indexOf('</select>', selectStart) + 9;
if (selectStart !== -1 && selectEnd !== -1) {
  const selectHtml = `<select id="kh-market-select" class="globe-hub-select" onchange="focusGlobeHub(this.value)">
<option value="all">🌍 All 34+ Global Markets (Global Overview)</option>
<optgroup label="Europe (16)">
<option value="spain">🇪🇸 Spain (Portfolio Hub)</option>
<option value="switzerland">🇨🇭 Switzerland (Portfolio Hub)</option>
<option value="portugal">🇵🇹 Portugal (Portfolio Hub)</option>
<option value="uk">🇬🇧 United Kingdom (Portfolio Hub)</option>
<option value="finland">🇫🇮 Finland (Portfolio Hub)</option>
<option value="lithuania">🇱🇹 Lithuania (Portfolio Hub)</option>
<option value="germany">🇩🇪 Germany (Verified Review)</option>
<option value="france">🇫🇷 France (Verified Review)</option>
<option value="netherlands">🇳🇱 Netherlands (Verified Review)</option>
<option value="italy">🇮🇹 Italy</option>
<option value="belgium">🇧🇪 Belgium</option>
<option value="sweden">🇸🇪 Sweden</option>
<option value="slovakia">🇸🇰 Slovakia</option>
<option value="romania">🇷🇴 Romania</option>
<option value="bulgaria">🇧🇬 Bulgaria</option>
</optgroup>
<optgroup label="Americas (4)">
<option value="usa">🇺🇸 USA (Portfolio Hub)</option>
<option value="canada">🇨🇦 Canada</option>
<option value="brazil">🇧🇷 Brazil</option>
<option value="suriname">🇸🇷 Suriname</option>
</optgroup>
<optgroup label="Africa (4)">
<option value="senegal">🇸🇳 Senegal (Portfolio Hub)</option>
<option value="rwanda">🇷🇼 Rwanda (Portfolio Hub)</option>
<option value="southafrica">🇿🇦 South Africa</option>
<option value="malawi">🇲🇼 Malawi</option>
</optgroup>
<optgroup label="Asia (6)">
<option value="hongkong">🇭🇰 Hong Kong (Portfolio Hub)</option>
<option value="india">🇮🇳 India (Home Base & Portfolio Hub)</option>
<option value="malaysia">🇲🇾 Malaysia</option>
<option value="indonesia">🇮🇩 Indonesia</option>
<option value="laos">🇱🇦 Laos</option>
<option value="taiwan">🇹🇼 Taiwan</option>
</optgroup>
<optgroup label="Middle East (2)">
<option value="uae">🇦🇪 UAE (Verified Review)</option>
<option value="israel">🇮🇱 Israel (Verified Review)</option>
</optgroup>
<optgroup label="Oceania (2)">
<option value="australia">🇦🇺 Australia (Verified Review)</option>
<option value="newzealand">🇳🇿 New Zealand</option>
</optgroup>
</select>`;
  indexHtml = indexHtml.substring(0, selectStart) + selectHtml + indexHtml.substring(selectEnd);
  console.log('✓ Successfully updated Market Select dropdown in index.html');
}

// D. Add Quick Market Filter Pills and Action Bar to Atlas Card
const cardTarget = '<div class="kh-note" id="globe-active-hub-card" aria-live="polite">';
const cardIdx = indexHtml.indexOf(cardTarget);
if (cardIdx !== -1) {
  // Let's replace the card structure to include quick pills, details, and action buttons
  const cardEnd = indexHtml.indexOf('</div> </figure>', cardIdx);
  if (cardEnd !== -1) {
    const newCardHtml = `<div class="globe-quick-pills-bar" style="display: flex; gap: 8px; overflow-x: auto; padding: 10px 0; margin-bottom: 12px; scrollbar-width: none;">
      <button type="button" class="globe-market-chip active" onclick="focusGlobeHub('all')" data-hub="all">🌍 All Markets</button>
      <button type="button" class="globe-market-chip" onclick="focusGlobeHub('spain')" data-hub="spain">🇪🇸 Spain</button>
      <button type="button" class="globe-market-chip" onclick="focusGlobeHub('usa')" data-hub="usa">🇺🇸 USA</button>
      <button type="button" class="globe-market-chip" onclick="focusGlobeHub('switzerland')" data-hub="switzerland">🇨🇭 Switzerland</button>
      <button type="button" class="globe-market-chip" onclick="focusGlobeHub('senegal')" data-hub="senegal">🇸🇳 Senegal</button>
      <button type="button" class="globe-market-chip" onclick="focusGlobeHub('portugal')" data-hub="portugal">🇵🇹 Portugal</button>
      <button type="button" class="globe-market-chip" onclick="focusGlobeHub('hongkong')" data-hub="hongkong">🇭🇰 Hong Kong</button>
      <button type="button" class="globe-market-chip" onclick="focusGlobeHub('uk')" data-hub="uk">🇬🇧 UK</button>
      <button type="button" class="globe-market-chip" onclick="focusGlobeHub('finland')" data-hub="finland">🇫🇮 Finland</button>
      <button type="button" class="globe-market-chip" onclick="focusGlobeHub('lithuania')" data-hub="lithuania">🇱🇹 Lithuania</button>
      <button type="button" class="globe-market-chip" onclick="focusGlobeHub('rwanda')" data-hub="rwanda">🇷🇼 Rwanda</button>
      <button type="button" class="globe-market-chip" onclick="focusGlobeHub('india')" data-hub="india">🇮🇳 India</button>
    </div>
    <div class="kh-note" id="globe-active-hub-card" aria-live="polite">
      <div class="kh-note-top">
        <span id="hub-card-flag-name">🌍 ALL 34+ CLIENT MARKETS</span>
        <span id="hub-card-source" class="hub-source-badge">Worldwide Delivery</span>
      </div>
      <h3 id="hub-card-title">Cross-Border Digital Transformation Across 5 Continents</h3>
      <p id="hub-card-desc">Delivered 700+ enterprise systems, multi-sided platforms, and AI product architectures for clients in North America, Europe, Asia, Africa, and Oceania.</p>
      <div class="kh-pills" id="hub-card-pills" style="margin-bottom: 1rem;">
        <span class="pill-link">34 Countries</span><span class="pill-link">700+ Projects</span><span class="pill-link">17 Interactive Prototypes</span><span class="pill-link">35% Rework Cut</span>
      </div>
      <div class="hub-card-actions-row" id="hub-card-actions" style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border);">
        <a href="/prototypes/" class="btn btn-primary" id="hub-btn-action-primary" style="font-size: 0.85rem; padding: 0.5rem 1rem;"><span>Explore All 17 Prototypes ↗</span></a>
        <a href="/testimonials/" class="btn btn-secondary" id="hub-btn-action-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;"><span>Read Verified Client Reviews ↗</span></a>
        <button type="button" class="btn btn-ghost" id="hub-btn-action-reset" onclick="focusGlobeHub('all')" style="font-size: 0.82rem; padding: 0.5rem 0.85rem; display: none;"><span>Show All Markets ↺</span></button>
      </div>
    </div>`;
    indexHtml = indexHtml.substring(0, cardIdx) + newCardHtml + indexHtml.substring(cardEnd);
    console.log('✓ Successfully updated Globe Hub Card in index.html');
  }
}

// E. Update focusGlobeHub implementation in index.html
const focusStart = indexHtml.indexOf('window.focusGlobeHub = function(id) {');
const focusEnd = indexHtml.indexOf('})();\n  </script>   </main>', focusStart);
if (focusStart !== -1 && focusEnd !== -1) {
  const newFocusLogic = `window.focusGlobeHub = function(id) {
      var hudStatus = document.getElementById('globe-hud-status');
      var hudCoords = document.getElementById('globe-hud-coords');
      var elFlagName = document.getElementById('hub-card-flag-name');
      var elSource = document.getElementById('hub-card-source');
      var elTitle = document.getElementById('hub-card-title');
      var elDesc = document.getElementById('hub-card-desc');
      var elPills = document.getElementById('hub-card-pills');
      var btnPrimary = document.getElementById('hub-btn-action-primary');
      var btnSecondary = document.getElementById('hub-btn-action-secondary');
      var btnReset = document.getElementById('hub-btn-action-reset');

      if (id === 'all' || !id) {
        if (window.__atlas) window.__atlas.select('all');
        if (hudStatus) hudStatus.textContent = '34 markets · drag to explore';
        if (hudCoords) hudCoords.textContent = 'Global Coverage · 5 Continents';
        if (elFlagName) elFlagName.textContent = '🌍 ALL 34+ CLIENT MARKETS';
        if (elSource) {
          elSource.textContent = 'Worldwide Delivery';
          elSource.style.display = 'inline-block';
        }
        if (elTitle) elTitle.textContent = 'Cross-Border Digital Transformation Across 5 Continents';
        if (elDesc) elDesc.textContent = 'Delivered 700+ enterprise systems, multi-sided platforms, and AI product architectures for clients in North America, Europe, Asia, Africa, and Oceania.';
        if (elPills) {
          elPills.innerHTML = '<span class="pill-link">34 Countries</span><span class="pill-link">700+ Projects</span><span class="pill-link">17 Interactive Prototypes</span><span class="pill-link">35% Rework Cut</span>';
        }
        if (btnPrimary) {
          btnPrimary.href = '/prototypes/';
          btnPrimary.target = '_self';
          btnPrimary.innerHTML = '<span>Explore All 17 Prototypes ↗</span>';
          btnPrimary.style.display = 'inline-flex';
        }
        if (btnSecondary) {
          btnSecondary.href = '/testimonials/';
          btnSecondary.target = '_self';
          btnSecondary.innerHTML = '<span>Read Verified Client Reviews ↗</span>';
          btnSecondary.style.display = 'inline-flex';
        }
        if (btnReset) btnReset.style.display = 'none';

        document.querySelectorAll('.globe-market-chip').forEach(function(c) {
          var on = c.getAttribute('data-hub') === 'all';
          c.classList.toggle('active', on);
        });
        var sel = document.querySelector('.globe-hub-select');
        if (sel && sel.value !== 'all') sel.value = 'all';
        return;
      }

      var hub = HUBS_DATA.find(function(h) { return h.id === id; });
      if (!hub) return;
      if (window.__atlas) window.__atlas.select(id);

      if (hudStatus) hudStatus.textContent = 'Isolated Market: ' + hub.name;
      if (hudCoords) hudCoords.textContent = hub.coords;
      if (elFlagName) elFlagName.textContent = hub.flag + ' ' + hub.name.toUpperCase();
      if (elSource) {
        elSource.textContent = hub.source || 'Client Delivery';
        elSource.style.display = 'inline-block';
      }
      if (elTitle) elTitle.textContent = hub.role;
      if (elDesc) elDesc.textContent = hub.desc;

      if (elPills && hub.pills) {
        elPills.innerHTML = '';
        hub.pills.forEach(function(pillText) {
          var s = document.createElement('span');
          s.className = 'pill-link';
          s.textContent = pillText;
          elPills.appendChild(s);
        });
      }

      // Dynamic action links
      if (btnPrimary) {
        if (hub.protoUrl) {
          btnPrimary.href = hub.protoUrl;
          btnPrimary.target = '_blank';
          btnPrimary.innerHTML = '<span>🚀 Open Live Prototype ↗</span>';
          btnPrimary.style.display = 'inline-flex';
        } else {
          btnPrimary.href = '/prototypes/';
          btnPrimary.target = '_self';
          btnPrimary.innerHTML = '<span>Explore Portfolio ↗</span>';
          btnPrimary.style.display = 'inline-flex';
        }
      }
      if (btnSecondary) {
        if (hub.protoId) {
          btnSecondary.href = '/prototypes/#card-' + hub.protoId;
          btnSecondary.target = '_self';
          btnSecondary.innerHTML = '<span>📄 View Full Specs ↗</span>';
          btnSecondary.style.display = 'inline-flex';
        } else if (hub.source.indexOf('Review') !== -1 || hub.source.indexOf('Trustpilot') !== -1 || hub.source.indexOf('LinkedIn') !== -1) {
          btnSecondary.href = '/testimonials/';
          btnSecondary.target = '_self';
          btnSecondary.innerHTML = '<span>⭐ Read Client Review ↗</span>';
          btnSecondary.style.display = 'inline-flex';
        } else {
          btnSecondary.style.display = 'none';
        }
      }
      if (btnReset) {
        btnReset.style.display = 'inline-flex';
      }

      document.querySelectorAll('.globe-market-chip').forEach(function(c) {
        var on = c.getAttribute('data-hub') === id;
        c.classList.toggle('active', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      var sel = document.querySelector('.globe-hub-select');
      if (sel && sel.value !== id) sel.value = id;
    };`;
  indexHtml = indexHtml.substring(0, focusStart) + newFocusLogic + indexHtml.substring(focusEnd);
  console.log('✓ Successfully updated focusGlobeHub logic in index.html');
}

// F. Update Homepage Carousel with TOP 7 PROTOTYPES (duplicated twice = 14 cards)
const trackStart = indexHtml.indexOf('<div class="curved-gallery-track" id="curvedGalleryTrack">');
const trackEnd = indexHtml.indexOf('</div> </div> <div class="gallery-nav-bar">', trackStart);
if (trackStart !== -1 && trackEnd !== -1) {
  let cardsHtml = '';
  // Repeat top 7 twice for smooth 360 loop (indices 0..13)
  for (let cycle = 0; cycle < 2; cycle++) {
    TOP_HOMEPAGE_PROTOS.forEach((p, idx) => {
      const cardIndex = cycle * TOP_HOMEPAGE_PROTOS.length + idx;
      cardsHtml += `<div class="curved-card" data-index="${cardIndex}" data-proto-id="${p.id}" role="button" onclick="handleCurvedCardClick(this, '${p.id}')" tabindex="0">
        <div class="curved-card-inner">
          <span class="curved-card-top-tag">${p.tag}</span>
          <img src="${p.img}" alt="${p.name}" class="curved-card-img" loading="lazy" decoding="async">
          <div class="curved-card-glass-glow"></div>
        </div>
        <div class="curved-card-caption">
          <span class="caption-title">${p.name}</span>
          <span class="caption-flag">${p.flag}</span>
        </div>
      </div>`;
    });
  }
  indexHtml = indexHtml.substring(0, trackStart + '<div class="curved-gallery-track" id="curvedGalleryTrack">'.length) + cardsHtml + indexHtml.substring(trackEnd);
  console.log('✓ Successfully updated Top 7 Carousel cards in index.html');
}

// G. Update Carousel Description text and button link
indexHtml = indexHtml.replace(/10 interactive, multi-role prototypes for clients/g, 'Top 7 flagship multi-role interactive prototypes for clients');
indexHtml = indexHtml.replace(/See all 10 projects →/g, 'See all 17 projects →');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('✓ index.html successfully written to disk.');

