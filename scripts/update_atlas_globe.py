import os

path = '_astro/atlas-globe.Deg8bG5e.js'
with open(path, 'r', encoding='utf-8') as f:
    orig = f.read()

idx = orig.find('function Ju(')
if idx == -1:
    raise ValueError("function Ju( not found in " + path)

prefix = orig[:idx]

new_ju = """function Ju(i,e,t={}){
  let n;
  try{n=new ku({antialias:!0,alpha:!0})}catch{return i.classList.add("atlas-no-webgl"),null}
  const r=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1;
  n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
  n.domElement.className="atlas-canvas";
  n.domElement.setAttribute("aria-hidden","true");
  i.appendChild(n.domElement);
  const s=new Ka,a=new Lt(42,1,.1,100);
  let targetDist=5.35,currentDist=5.35;
  a.position.set(0,0,currentDist);
  const o=new ro("#ffffff",.5),c=new ls("#ffffff",1.5),l=new ls("#00d2ff",.4);
  l.position.set(-4,-3,-2);
  s.add(o,c,l);
  const d=new Kn;
  s.add(d);
  const h={
    torus:new mn({transparent:!0,opacity:.22}),
    sphere:new Qa({roughness:.88}),
    rim:new mn({transparent:!0,opacity:.04,side:1,blending:2}),
    halo:new mn({transparent:!0,opacity:.035,side:1,blending:2}),
    grid:new Pi({transparent:!0,opacity:.07}),
    land:new vr({size:.012,transparent:!0,sizeAttenuation:!0}),
    ocean:new vr({size:.014,transparent:!0,opacity:.08,sizeAttenuation:!0}),
    coast:new Pi({transparent:!0,depthWrite:!1}),
    border:new Pi({transparent:!0,depthWrite:!1}),
    pin:new mn({color:"#00f0ff"}),
    pinActive:new mn({color:"#ffd700"})
  };
  const f=new Et(new br(1.46,.004,6,96),h.torus);
  f.rotation.set(1.15,.25,.55);
  d.add(f);
  [!1,!0].forEach(le=>{
    const he=[];
    for(const Z of Ku)Z.shared===le&&he.push(...gr(Z.a[1],Z.a[0],en*1.007).toArray(),...gr(Z.b[1],Z.b[0],en*1.007).toArray());
    const Ce=new gt;
    Ce.setAttribute("position",new _t(he,3));
    const H=new Ja(Ce,le?h.border:h.coast);
    H.renderOrder=1;
    d.add(H);
  });
  d.add(new Et(new _n(en,48,48),h.sphere));
  d.add(new Et(new _n(en*1.015,36,36),h.rim));
  d.add(new Et(new _n(en*1.12,36,36),h.halo));
  for(const le of $u(en*1.002))d.add(new ks(le,h.grid));
  const p=Zu(en*1.006,6500),g=new gt;
  g.setAttribute("position",new Ut(p.land,3));
  d.add(new rs(g,h.land));
  const x=new gt;
  x.setAttribute("position",new Ut(p.ocean,3));
  d.add(new rs(x,h.ocean));
  
  // Star-like sparkling pins (larger radius and electric cyan)
  const m=new _n(.014,14,14),u=new _n(.03,16,16);
  const b=e.map(le=>{
    const he=new Et(m,h.pin);
    return he.position.copy(gr(le.lat,le.lng,en*1.018)),he.userData.id=le.id,d.add(he),he;
  });
  const y=document.createElement("div");
  y.className="atlas-label";
  y.style.opacity="0";
  i.appendChild(y);
  function E(le){
    const he=ju[le];
    h.torus.color.set(he.torus);
    h.torus.opacity=le==="light"?.2:.22;
    h.sphere.color.set(he.sphere);
    h.sphere.metalness=le==="light"?.02:.12;
    h.rim.color.set(he.rim);
    h.halo.color.set(he.halo);
    h.grid.color.set(he.grid);
    h.land.color.set(he.land);
    h.land.opacity=le==="light"?.42:.32;
    h.ocean.color.set(he.ocean);
    h.coast.color.set(he.coast);
    h.coast.opacity=le==="light"?.78:.75;
    h.border.color.set(he.border);
    h.border.opacity=le==="light"?.5:.48;
    h.pin.color.set(le==="light"?"#0284c7":"#00f0ff");
    h.pinActive.color.set(he.pinActive||"#ffd700");
    o.intensity=he.ambient;
    c.color.set(he.key);
    c.intensity=he.keyI;
    c.position.set(le==="light"?-4:4,5,3);
    l.color.set(he.fill);
    l.intensity=he.fillI;
    ae();
  }
  const P=()=>document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";
  new MutationObserver(()=>E(P())).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});
  
  // Global view by default: NO country active, no Spain bias
  let R=null;
  const w={x:0.25,y:0};
  d.rotation.set(w.x,w.y,0);
  let N=!1,S=!r,M=!1,D={x:0,y:0},G=!0,V=0,q=performance.now(),pointerStart={x:0,y:0};

  function Y(le){
    if(le==='all'||!le){
      R=null;
      b.forEach(Ce=>{
        Ce.geometry=m;
        Ce.material=h.pin;
      });
      if(y){y.style.opacity='0';y.textContent='';}
      ae();
      return;
    }
    const he=e.find(Ce=>Ce.id===le);
    if(he){
      R=he;
      for(w.x=he.lat*nn,w.y=-Math.PI/2-he.lng*nn;w.y-d.rotation.y>Math.PI;)w.y-=Math.PI*2;
      for(;d.rotation.y-w.y>Math.PI;)w.y+=Math.PI*2;
      b.forEach(Ce=>{
        const H=Ce.userData.id===le;
        Ce.geometry=H?u:m;
        Ce.material=H?h.pinActive:h.pin;
      });
      if(y){
        y.textContent=`${he.flag} ${he.name}`;
      }
      ae();
    }
  }

  function X(){
    const le=i.clientWidth,he=i.clientHeight;
    if(!le||!he)return;
    n.setSize(le,he,!1);
    a.aspect=le/he;
    a.updateProjectionMatrix();
    ae();
  }
  const J=new I;
  function z(){
    if(!R){
      if(y)y.style.opacity="0";
      return;
    }
    const le=b.find(Z=>Z.userData.id===R.id);
    if(!le)return;
    le.getWorldPosition(J);
    const he=J.clone().normalize().dot(a.position.clone().normalize())>.15;
    J.project(a);
    const Ce=(J.x*.5+.5)*i.clientWidth,H=(-J.y*.5+.5)*i.clientHeight;
    y.style.transform=`translate(${Math.round(Ce+10)}px, ${Math.round(H-26)}px)`;
    y.style.opacity=he?"1":"0";
  }
  const coordEl=document.getElementById("globe-hud-coords");
  function updateCoordsTelemetry(){
    if(!coordEl)return;
    const curLat=(-d.rotation.x/nn);
    const curLng=(((-d.rotation.y-Math.PI/2)/nn+540)%360)-180;
    coordEl.textContent=Math.abs(curLat).toFixed(2)+"° "+(curLat>=0?"N":"S")+", "+Math.abs(curLng).toFixed(2)+"° "+(curLng>=0?"E":"W");
  }

  function re(le){
    V=0;
    const he=Math.min((le-q)/1e3,.05);
    q=le;
    if(!N&&S&&!M)w.y+=he*.16;
    const Ce=1-Math.exp(-8*he);
    d.rotation.x=zi.lerp(d.rotation.x,w.x,Ce);
    d.rotation.y=zi.lerp(d.rotation.y,w.y,Ce);
    currentDist=zi.lerp(currentDist,targetDist,Ce);
    a.position.set(0,0,currentDist);

    // Star twinkling / sparkling effect on blue dots
    b.forEach((pin,idx)=>{
      if(!R||pin.userData.id!==R.id){
        const starSpark=1+0.22*Math.sin(le*0.0035+idx*0.7);
        pin.scale.set(starSpark,starSpark,starSpark);
      }else{
        pin.scale.set(1.15,1.15,1.15);
      }
    });

    n.render(s,a);
    z();
    if(M||(!N&&S))updateCoordsTelemetry();
    const H=Math.abs(d.rotation.x-w.x)+Math.abs(d.rotation.y-w.y)+Math.abs(currentDist-targetDist)>.001;
    G&&(!N&&S||H||M||!r)&&ae();
  }
  function ae(){
    if(!V){q=performance.now();V=requestAnimationFrame(re);}
  }
  const pe=n.domElement;
  pe.style.touchAction="none";
  pe.addEventListener("pointerdown",le=>{
    M=!0;
    S=!1;
    D={x:le.clientX,y:le.clientY};
    pointerStart={x:le.clientX,y:le.clientY};
    try{pe.setPointerCapture(le.pointerId)}catch(q){}
    pe.classList.add("is-dragging");
  });
  pe.addEventListener("pointermove",le=>{
    if(M){
      w.y+=(le.clientX-D.x)*.007;
      w.x=zi.clamp(w.x+(le.clientY-D.y)*.007,-1.4,1.4);
      D={x:le.clientX,y:le.clientY};
      ae();
    }
  });
  function checkPinHit(clientX,clientY){
    const rect=pe.getBoundingClientRect();
    const cx=clientX-rect.left;
    const cy=clientY-rect.top;
    const tapVec=new I;
    let bestPin=null,bestDist=28;
    for(const pinMesh of b){
      pinMesh.getWorldPosition(tapVec);
      if(tapVec.clone().normalize().dot(a.position.clone().normalize())>.15){
        tapVec.project(a);
        const sx=(tapVec.x*.5+.5)*i.clientWidth;
        const sy=(-tapVec.y*.5+.5)*i.clientHeight;
        const dist=Math.hypot(sx-cx,sy-cy);
        if(dist<bestDist){bestDist=dist;bestPin=pinMesh.userData.id;}
      }
    }
    if(bestPin){Y(bestPin);t.onHub?.(bestPin);}
  }
  const Be=le=>{
    if(M&&le&&Math.hypot(le.clientX-pointerStart.x,le.clientY-pointerStart.y)<7){
      checkPinHit(le.clientX,le.clientY);
    }
    M=!1;
    pe.classList.remove("is-dragging");
  };
  pe.addEventListener("pointerup",Be);
  pe.addEventListener("pointercancel",Be);

  // Desktop Wheel Zoom
  pe.addEventListener("wheel",le=>{
    le.preventDefault();
    const delta=Math.sign(le.deltaY)*0.45;
    targetDist=zi.clamp(targetDist+delta,2.2,8.0);
    ae();
  },{passive:!1});

  // Mobile Touch + Pinch-to-Zoom
  let pinchStartDist=0,pinchBaseDist=5.35;
  pe.addEventListener("touchstart",le=>{
    if(le.touches&&le.touches.length===1){
      M=!0;S=!1;
      D={x:le.touches[0].clientX,y:le.touches[0].clientY};
      pointerStart={x:le.touches[0].clientX,y:le.touches[0].clientY};
      pe.classList.add("is-dragging");
      if(le.cancelable)le.preventDefault();
    }else if(le.touches&&le.touches.length===2){
      M=!1;
      pe.classList.remove("is-dragging");
      pinchStartDist=Math.hypot(le.touches[0].clientX-le.touches[1].clientX,le.touches[0].clientY-le.touches[1].clientY);
      pinchBaseDist=targetDist;
      if(le.cancelable)le.preventDefault();
    }
  },{passive:!1});
  pe.addEventListener("touchmove",le=>{
    if(le.touches&&le.touches.length===1&&M){
      w.y+=(le.touches[0].clientX-D.x)*.007;
      w.x=zi.clamp(w.x+(le.touches[0].clientY-D.y)*.007,-1.4,1.4);
      D={x:le.touches[0].clientX,y:le.touches[0].clientY};
      ae();
      if(le.cancelable)le.preventDefault();
    }else if(le.touches&&le.touches.length===2&&pinchStartDist>0){
      const curDist=Math.hypot(le.touches[0].clientX-le.touches[1].clientX,le.touches[0].clientY-le.touches[1].clientY);
      if(curDist>10){
        targetDist=zi.clamp(pinchBaseDist*(pinchStartDist/curDist),2.2,8.0);
        ae();
      }
      if(le.cancelable)le.preventDefault();
    }
  },{passive:!1});
  pe.addEventListener("touchend",le=>{
    if(le.changedTouches&&le.changedTouches.length===1&&Math.hypot(le.changedTouches[0].clientX-pointerStart.x,le.changedTouches[0].clientY-pointerStart.y)<8){
      checkPinHit(le.changedTouches[0].clientX,le.changedTouches[0].clientY);
    }
    if(!le.touches||le.touches.length<2)pinchStartDist=0;
    Be(le.changedTouches?.[0]);
  });
  pe.addEventListener("touchcancel",Be);

  new ResizeObserver(X).observe(i);
  "IntersectionObserver"in window&&new IntersectionObserver(le=>{G=le[0].isIntersecting;G&&ae();}).observe(i);
  E(P());
  X();
  Y('all'); // Initialize in ALL markets overview without default country

  return{
    select(le){Y(le)},
    step(le){
      const currId=R?R.id:e[0].id;
      const he=e.findIndex(H=>H.id===currId);
      const Ce=e[(he+le+e.length)%e.length];
      Y(Ce.id);
      t.onHub?.(Ce.id);
    },
    togglePause(){
      N=!N;
      if(!N){S=!r;ae();}
      return N;
    },
    zoomIn(){
      targetDist=zi.clamp(targetDist-0.75,2.2,8.0);
      ae();
      return targetDist;
    },
    zoomOut(){
      targetDist=zi.clamp(targetDist+0.75,2.2,8.0);
      ae();
      return targetDist;
    },
    resetView(){
      targetDist=5.35;
      w.x=0.25;
      w.y=0;
      Y('all');
      ae();
    },
    resize(){
      X();
    }
  };
}
export{Ju as mountAtlas};
"""

with open(path, 'w', encoding='utf-8') as f:
    f.write(prefix + new_ju)

print("Successfully written updated atlas-globe with sparkling star dots and neutral all-country default!")
