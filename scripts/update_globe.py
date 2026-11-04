with open('_astro/atlas-globe.Deg8bG5e.js', 'r', encoding='utf-8') as f:
    c = f.read()

target1 = 'y=document.createElement("div");y.className="atlas-label",i.appendChild(y);'

replacement1 = 'let currentHubId="all";const flagPins=e.map(le=>{const el=document.createElement("div");el.className="globe-country-flag-pin";el.setAttribute("data-id",le.id);el.innerHTML=\'<span class="flag-glyph">\'+le.flag+\'</span><span class="flag-name">\'+le.name+\'</span>\';el.onclick=function(ev){ev.stopPropagation();Y(le.id);if(t&&t.onHub)t.onHub(le.id);};i.appendChild(el);return{id:le.id,el:el,hub:le};});const y=document.createElement("div");y.className="atlas-label",i.appendChild(y);'

assert target1 in c, "target1 not found"
c = c.replace(target1, replacement1, 1)

target2 = 'function Y(le){const he=e.find(Ce=>Ce.id===le);if(he){for(R=he,w.x=he.lat*nn,w.y=-Math.PI/2-he.lng*nn;w.y-d.rotation.y>Math.PI;)w.y-=Math.PI*2;for(;d.rotation.y-w.y>Math.PI;)w.y+=Math.PI*2;b.forEach(Ce=>{const H=Ce.userData.id===le;Ce.geometry=H?u:m,Ce.material=H?h.pinActive:h.pin}),y.textContent=`${he.flag} ${he.name}`,ae()}}'

replacement2 = 'function Y(le){currentHubId=le||"all";if(le==="all"||!le){b.forEach(Ce=>{Ce.visible=!0;Ce.geometry=m;Ce.material=h.pin;});flagPins.forEach(fp=>{fp.el.classList.remove("is-selected-flag");});y.textContent="🌍 34 Client Markets Across 5 Continents";ae();return;}const he=e.find(Ce=>Ce.id===le);if(he){R=he;w.x=he.lat*nn;w.y=-Math.PI/2-he.lng*nn;for(;w.y-d.rotation.y>Math.PI;)w.y-=Math.PI*2;for(;d.rotation.y-w.y>Math.PI;)w.y+=Math.PI*2;b.forEach(Ce=>{const H=Ce.userData.id===le;Ce.visible=H;Ce.geometry=H?u:m;Ce.material=H?h.pinActive:h.pin;});flagPins.forEach(fp=>{if(fp.id===le){fp.el.classList.add("is-selected-flag");}else{fp.el.classList.remove("is-selected-flag")}});y.textContent=`${he.flag} ${he.name}`;ae();}}'

assert target2 in c, "target2 not found"
c = c.replace(target2, replacement2, 1)

target3 = 'function z(){const le=b.find(Z=>Z.userData.id===R.id);if(!le)return;le.getWorldPosition(J);const he=J.clone().normalize().dot(a.position.clone().normalize())>.15;J.project(a);const Ce=(J.x*.5+.5)*i.clientWidth,H=(-J.y*.5+.5)*i.clientHeight;y.style.transform=`translate(${Math.round(Ce+10)}px, ${Math.round(H-26)}px)`,y.style.opacity=he?"1":"0"}'

replacement3 = 'function z(){const isAll=(currentHubId==="all"||!currentHubId);flagPins.forEach(fp=>{const mesh=b.find(Z=>Z.userData.id===fp.id);if(!mesh)return;if(!isAll&&fp.id!==currentHubId){fp.el.style.opacity="0";fp.el.style.pointerEvents="none";return;}mesh.getWorldPosition(J);const isFacing=J.clone().normalize().dot(a.position.clone().normalize())>0.10;J.project(a);const px=Math.round((J.x*0.5+0.5)*i.clientWidth);const py=Math.round((-J.y*0.5+0.5)*i.clientHeight);if(isFacing){fp.el.style.opacity="1";fp.el.style.transform="translate("+(px-14)+"px, "+(py-22)+"px)";fp.el.style.pointerEvents="auto";}else{fp.el.style.opacity="0";fp.el.style.pointerEvents="none";}});const le=b.find(Z=>Z.userData.id===R.id);if(!le)return;le.getWorldPosition(J);const he=J.clone().normalize().dot(a.position.clone().normalize())>.15;J.project(a);const Ce=(J.x*.5+.5)*i.clientWidth,H=(-J.y*.5+.5)*i.clientHeight;y.style.transform=`translate(${Math.round(Ce+10)}px, ${Math.round(H-26)}px)`;y.style.opacity=(he&&!isAll)?"1":"0";}'

assert target3 in c, "target3 not found"
c = c.replace(target3, replacement3, 1)

with open('_astro/atlas-globe.Deg8bG5e.js', 'w', encoding='utf-8') as f:
    f.write(c)

print("Successfully injected 3D globe flag pins into Deg8bG5e.js!")
