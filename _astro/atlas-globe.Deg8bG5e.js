/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sr="180";const tn="",Dt="srgb",Bn="srgb-linear",Li="linear",Ze="srgb";const Ir="300 es";class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fr=1234567;const $n=Math.PI/180,Jn=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Er(i,e){return(i%e+e)%e}function aa(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function oa(i,e,t){return i!==e?(t-i)/(e-i):0}function jn(i,e,t){return(1-t)*i+t*e}function la(i,e,t,n){return jn(i,e,1-Math.exp(-t*n))}function ca(i,e=1){return e-Math.abs(Er(i,e*2)-e)}function ua(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ha(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function da(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fa(i,e){return i+Math.random()*(e-i)}function pa(i){return i*(.5-Math.random())}function ma(i){i!==void 0&&(Fr=i);let e=Fr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _a(i){return i*$n}function ga(i){return i*Jn}function va(i){return(i&i-1)===0&&i!==0}function xa(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ma(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sa(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),d=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*d,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*d,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zi={DEG2RAD:$n,RAD2DEG:Jn,generateUUID:zn,clamp:Ve,euclideanModulo:Er,mapLinear:aa,inverseLerp:oa,lerp:jn,damp:la,pingpong:ca,smoothstep:ua,smootherstep:ha,randInt:da,randFloat:fa,randFloatSpread:pa,seededRandom:ma,degToRad:_a,radToDeg:ga,isPowerOfTwo:va,ceilPowerOfTwo:xa,floorPowerOfTwo:Ma,setQuaternionFromProperEuler:Sa,normalize:xt,denormalize:In};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ei{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],d=n[r+2],h=n[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==f||l!==p||d!==g){let m=1-o;const u=c*f+l*p+d*g+h*x,b=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const P=Math.sqrt(y),R=Math.atan2(P,u*b);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const E=o*b;if(c=c*m+f*E,l=l*m+p*E,d=d*m+g*E,h=h*m+x*E,m===1-o){const P=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=P,l*=P,d*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],d=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+d*h+c*p-l*f,e[t+1]=c*g+d*f+l*h-o*p,e[t+2]=l*g+d*p+o*f-c*h,e[t+3]=d*g-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(r/2),h=o(s/2),f=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*d*h+l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h-f*p*g;break;case"YXZ":this._x=f*d*h+l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h+f*p*g;break;case"ZXY":this._x=f*d*h-l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h-f*p*g;break;case"ZYX":this._x=f*d*h-l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h+f*p*g;break;case"YZX":this._x=f*d*h+l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h-f*p*g;break;case"XZY":this._x=f*d*h-l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(d-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-n*l,this._z=s*d+a*l+n*c-r*o,this._w=a*d-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),d=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*d,this.y=n+c*d+o*l-s*h,this.z=r+c*h+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vi.copy(this).projectOnVector(e),this.sub(Vi)}reflect(e){return this.sub(Vi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vi=new I,Nr=new ei;class Ne{constructor(e,t,n,r,s,a,o,c,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=r[0],m=r[3],u=r[6],b=r[1],y=r[4],E=r[7],P=r[2],R=r[5],w=r[8];return s[0]=a*x+o*b+c*P,s[3]=a*m+o*y+c*R,s[6]=a*u+o*E+c*w,s[1]=l*x+d*b+h*P,s[4]=l*m+d*y+h*R,s[7]=l*u+d*E+h*w,s[2]=f*x+p*b+g*P,s[5]=f*m+p*y+g*R,s[8]=f*u+p*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*s*d+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,f=o*c-d*s,p=l*s-a*c,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*l-d*n)*x,e[2]=(o*n-r*a)*x,e[3]=f*x,e[4]=(d*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hi.makeScale(e,t)),this}rotate(e){return this.premultiply(Hi.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hi=new Ne;function Is(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ui(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ea(){const i=Ui("canvas");return i.style.display="block",i}const Br={};function Qn(i){i in Br||(Br[i]=!0,console.warn(i))}function Ta(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Or=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gr=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ya(){const i={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ze&&(r.r=Yt(r.r),r.g=Yt(r.g),r.b=Yt(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tn?Li:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bn]:{primaries:e,whitePoint:n,transfer:Li,toXYZ:Or,fromXYZ:Gr,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:Or,fromXYZ:Gr,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}const Xe=ya();function Yt(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Sn;class Aa{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sn===void 0&&(Sn=Ui("canvas")),Sn.width=e.width,Sn.height=e.height;const r=Sn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Sn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ui("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yt(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yt(t[n]/255)*255):t[n]=Yt(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ba=0;class Tr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ba++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ki(r[a].image)):s.push(ki(r[a]))}else s=ki(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ki(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ra=0;const Wi=new I;class Tt extends Gn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=Tt.DEFAULT_ANISOTROPY,d=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ra++}),this.uuid=zn(),this.name="",this.source=new Tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wi).x}get height(){return this.source.getSize(Wi).y}get depth(){return this.source.getSize(Wi).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=300;Tt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],d=c[4],h=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,E=(p+1)/2,P=(u+1)/2,R=(d+f)/4,w=(h+x)/4,N=(g+m)/4;return y>E&&y>P?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=R/n,s=w/n):E>P?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=N/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=w/s,r=N/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(f-d)/b,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wa extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Tt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Tr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends wa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fs extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ca extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,It):It.fromBufferAttribute(s,a),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ai.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ai.copy(n.boundingBox)),ai.applyMatrix4(e.matrixWorld),this.union(ai)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kn),oi.subVectors(this.max,kn),En.subVectors(e.a,kn),Tn.subVectors(e.b,kn),yn.subVectors(e.c,kn),Kt.subVectors(Tn,En),Zt.subVectors(yn,Tn),on.subVectors(En,yn);let t=[0,-Kt.z,Kt.y,0,-Zt.z,Zt.y,0,-on.z,on.y,Kt.z,0,-Kt.x,Zt.z,0,-Zt.x,on.z,0,-on.x,-Kt.y,Kt.x,0,-Zt.y,Zt.x,0,-on.y,on.x,0];return!Xi(t,En,Tn,yn,oi)||(t=[1,0,0,0,1,0,0,0,1],!Xi(t,En,Tn,yn,oi))?!1:(li.crossVectors(Kt,Zt),t=[li.x,li.y,li.z],Xi(t,En,Tn,yn,oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ht[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ht[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ht[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ht[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ht[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ht[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ht[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ht[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ht),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ht=[new I,new I,new I,new I,new I,new I,new I,new I],It=new I,ai=new ti,En=new I,Tn=new I,yn=new I,Kt=new I,Zt=new I,on=new I,kn=new I,oi=new I,li=new I,ln=new I;function Xi(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ln.fromArray(i,s);const o=r.x*Math.abs(ln.x)+r.y*Math.abs(ln.y)+r.z*Math.abs(ln.z),c=e.dot(ln),l=t.dot(ln),d=n.dot(ln);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Pa=new ti,Wn=new I,qi=new I;class ni{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pa.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wn.subVectors(e,this.center);const t=Wn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Wn,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wn.copy(e.center).add(qi)),this.expandByPoint(Wn.copy(e.center).sub(qi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const kt=new I,Yi=new I,ci=new I,$t=new I,Ki=new I,ui=new I,Zi=new I;class yr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kt.copy(this.origin).addScaledVector(this.direction,t),kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yi.copy(e).add(t).multiplyScalar(.5),ci.copy(t).sub(e).normalize(),$t.copy(this.origin).sub(Yi);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ci),o=$t.dot(this.direction),c=-$t.dot(ci),l=$t.lengthSq(),d=Math.abs(1-a*a);let h,f,p,g;if(d>0)if(h=a*c-o,f=a*o-c,g=s*d,h>=0)if(f>=-g)if(f<=g){const x=1/d;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Yi).addScaledVector(ci,f),p}intersectSphere(e,t){kt.subVectors(e.center,this.origin);const n=kt.dot(this.direction),r=kt.dot(kt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,kt)!==null}intersectTriangle(e,t,n,r,s){Ki.subVectors(t,e),ui.subVectors(n,e),Zi.crossVectors(Ki,ui);let a=this.direction.dot(Zi),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$t.subVectors(this.origin,e);const c=o*this.direction.dot(ui.crossVectors($t,ui));if(c<0)return null;const l=o*this.direction.dot(Ki.cross($t));if(l<0||c+l>a)return null;const d=-o*$t.dot(Zi);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,r,s,a,o,c,l,d,h,f,p,g,x,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,d,h,f,p,g,x,m)}set(e,t,n,r,s,a,o,c,l,d,h,f,p,g,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/An.setFromMatrixColumn(e,0).length(),s=1/An.setFromMatrixColumn(e,1).length(),a=1/An.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,p=a*h,g=o*d,x=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*d,p=c*h,g=l*d,x=l*h;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*d,p=c*h,g=l*d,x=l*h;t[0]=f-x*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*d,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*d,p=a*h,g=o*d,x=o*h;t[0]=c*d,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*d,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=f*h+x,t[5]=a*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*d,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Da,e,La)}lookAt(e,t,n){const r=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),jt.crossVectors(n,bt),jt.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),jt.crossVectors(n,bt)),jt.normalize(),hi.crossVectors(bt,jt),r[0]=jt.x,r[4]=hi.x,r[8]=bt.x,r[1]=jt.y,r[5]=hi.y,r[9]=bt.y,r[2]=jt.z,r[6]=hi.z,r[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],u=n[14],b=n[3],y=n[7],E=n[11],P=n[15],R=r[0],w=r[4],N=r[8],S=r[12],M=r[1],D=r[5],G=r[9],V=r[13],q=r[2],Y=r[6],X=r[10],J=r[14],z=r[3],re=r[7],ae=r[11],pe=r[15];return s[0]=a*R+o*M+c*q+l*z,s[4]=a*w+o*D+c*Y+l*re,s[8]=a*N+o*G+c*X+l*ae,s[12]=a*S+o*V+c*J+l*pe,s[1]=d*R+h*M+f*q+p*z,s[5]=d*w+h*D+f*Y+p*re,s[9]=d*N+h*G+f*X+p*ae,s[13]=d*S+h*V+f*J+p*pe,s[2]=g*R+x*M+m*q+u*z,s[6]=g*w+x*D+m*Y+u*re,s[10]=g*N+x*G+m*X+u*ae,s[14]=g*S+x*V+m*J+u*pe,s[3]=b*R+y*M+E*q+P*z,s[7]=b*w+y*D+E*Y+P*re,s[11]=b*N+y*G+E*X+P*ae,s[15]=b*S+y*V+E*J+P*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*c*h-r*l*h-s*o*f+n*l*f+r*o*p-n*c*p)+x*(+t*c*p-t*l*f+s*a*f-r*a*p+r*l*d-s*c*d)+m*(+t*l*h-t*o*p-s*a*h+n*a*p+s*o*d-n*l*d)+u*(-r*o*d-t*c*h+t*o*f+r*a*h-n*a*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],b=h*m*l-x*f*l+x*c*p-o*m*p-h*c*u+o*f*u,y=g*f*l-d*m*l-g*c*p+a*m*p+d*c*u-a*f*u,E=d*x*l-g*h*l+g*o*p-a*x*p-d*o*u+a*h*u,P=g*h*c-d*x*c-g*o*f+a*x*f+d*o*m-a*h*m,R=t*b+n*y+r*E+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=b*w,e[1]=(x*f*s-h*m*s-x*r*p+n*m*p+h*r*u-n*f*u)*w,e[2]=(o*m*s-x*c*s+x*r*l-n*m*l-o*r*u+n*c*u)*w,e[3]=(h*c*s-o*f*s-h*r*l+n*f*l+o*r*p-n*c*p)*w,e[4]=y*w,e[5]=(d*m*s-g*f*s+g*r*p-t*m*p-d*r*u+t*f*u)*w,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*u-t*c*u)*w,e[7]=(a*f*s-d*c*s+d*r*l-t*f*l-a*r*p+t*c*p)*w,e[8]=E*w,e[9]=(g*h*s-d*x*s-g*n*p+t*x*p+d*n*u-t*h*u)*w,e[10]=(a*x*s-g*o*s+g*n*l-t*x*l-a*n*u+t*o*u)*w,e[11]=(d*o*s-a*h*s-d*n*l+t*h*l+a*n*p-t*o*p)*w,e[12]=P*w,e[13]=(d*x*r-g*h*r+g*n*f-t*x*f-d*n*m+t*h*m)*w,e[14]=(g*o*r-a*x*r-g*n*c+t*x*c+a*n*m-t*o*m)*w,e[15]=(a*h*r-d*o*r+d*n*c-t*h*c-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+n,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,h=o+o,f=s*l,p=s*d,g=s*h,x=a*d,m=a*h,u=o*h,b=c*l,y=c*d,E=c*h,P=n.x,R=n.y,w=n.z;return r[0]=(1-(x+u))*P,r[1]=(p+E)*P,r[2]=(g-y)*P,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(f+u))*R,r[6]=(m+b)*R,r[7]=0,r[8]=(g+y)*w,r[9]=(m-b)*w,r[10]=(1-(f+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=An.set(r[0],r[1],r[2]).length();const a=An.set(r[4],r[5],r[6]).length(),o=An.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ft.copy(this);const l=1/s,d=1/a,h=1/o;return Ft.elements[0]*=l,Ft.elements[1]*=l,Ft.elements[2]*=l,Ft.elements[4]*=d,Ft.elements[5]*=d,Ft.elements[6]*=d,Ft.elements[8]*=h,Ft.elements[9]*=h,Ft.elements[10]*=h,t.setFromRotationMatrix(Ft),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3,c=!1){const l=this.elements,d=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===2e3)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===2001)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,c=!1){const l=this.elements,d=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===2e3)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===2001)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const An=new I,Ft=new it,Da=new I(0,0,0),La=new I(1,1,1),jt=new I,hi=new I,bt=new I,zr=new it,Vr=new ei;class zt{constructor(e=0,t=0,n=0,r=zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vr.setFromEuler(this),this.setFromQuaternion(Vr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zt.DEFAULT_ORDER="XYZ";class Ns{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ua=0;const Hr=new I,bn=new ei,Wt=new it,di=new I,Xn=new I,Ia=new I,Fa=new ei,kr=new I(1,0,0),Wr=new I(0,1,0),Xr=new I(0,0,1),qr={type:"added"},Na={type:"removed"},Rn={type:"childadded",child:null},$i={type:"childremoved",child:null};class dt extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ua++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new I,t=new zt,n=new ei,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Ne}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(kr,e)}rotateY(e){return this.rotateOnAxis(Wr,e)}rotateZ(e){return this.rotateOnAxis(Xr,e)}translateOnAxis(e,t){return Hr.copy(e).applyQuaternion(this.quaternion),this.position.add(Hr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kr,e)}translateY(e){return this.translateOnAxis(Wr,e)}translateZ(e){return this.translateOnAxis(Xr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?di.copy(e):di.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wt.lookAt(Xn,di,this.up):Wt.lookAt(di,Xn,this.up),this.quaternion.setFromRotationMatrix(Wt),r&&(Wt.extractRotation(r.matrixWorld),bn.setFromRotationMatrix(Wt),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qr),Rn.child=e,this.dispatchEvent(Rn),Rn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Na),$i.child=e,this.dispatchEvent($i),$i.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qr),Rn.child=e,this.dispatchEvent(Rn),Rn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,e,Ia),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,Fa,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DEFAULT_UP=new I(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nt=new I,Xt=new I,ji=new I,qt=new I,wn=new I,Cn=new I,Yr=new I,Ji=new I,Qi=new I,er=new I,tr=new st,nr=new st,ir=new st;class Bt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nt.subVectors(e,t),r.cross(Nt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nt.subVectors(r,t),Xt.subVectors(n,t),ji.subVectors(e,t);const a=Nt.dot(Nt),o=Nt.dot(Xt),c=Nt.dot(ji),l=Xt.dot(Xt),d=Xt.dot(ji),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-o*d)*f,g=(a*d-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qt)===null?!1:qt.x>=0&&qt.y>=0&&qt.x+qt.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,qt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qt.x),c.addScaledVector(a,qt.y),c.addScaledVector(o,qt.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return tr.setScalar(0),nr.setScalar(0),ir.setScalar(0),tr.fromBufferAttribute(e,t),nr.fromBufferAttribute(e,n),ir.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tr,s.x),a.addScaledVector(nr,s.y),a.addScaledVector(ir,s.z),a}static isFrontFacing(e,t,n,r){return Nt.subVectors(n,t),Xt.subVectors(e,t),Nt.cross(Xt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),Xt.subVectors(this.a,this.b),Nt.cross(Xt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;wn.subVectors(r,n),Cn.subVectors(s,n),Ji.subVectors(e,n);const c=wn.dot(Ji),l=Cn.dot(Ji);if(c<=0&&l<=0)return t.copy(n);Qi.subVectors(e,r);const d=wn.dot(Qi),h=Cn.dot(Qi);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(wn,a);er.subVectors(e,s);const p=wn.dot(er),g=Cn.dot(er);if(g>=0&&p<=g)return t.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Cn,o);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Yr.subVectors(s,r),o=(h-d)/(h-d+(p-g)),t.copy(r).addScaledVector(Yr,o);const u=1/(m+x+f);return a=x*u,o=f*u,t.copy(n).addScaledVector(wn,a).addScaledVector(Cn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jt={h:0,s:0,l:0},fi={h:0,s:0,l:0};function rr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=Er(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=rr(a,s,e+1/3),this.g=rr(a,s,e),this.b=rr(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=Bs[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yt(e.r),this.g=Yt(e.g),this.b=Yt(e.b),this}copyLinearToSRGB(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Xe.workingToColorSpace(mt.copy(this),e),Math.round(Ve(mt.r*255,0,255))*65536+Math.round(Ve(mt.g*255,0,255))*256+Math.round(Ve(mt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(mt.copy(this),t);const n=mt.r,r=mt.g,s=mt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Dt){Xe.workingToColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,r=mt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Jt),this.setHSL(Jt.h+e,Jt.s+t,Jt.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jt),e.getHSL(fi);const n=jn(Jt.h,fi.h,t),r=jn(Jt.s,fi.s,t),s=jn(Jt.l,fi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new ke;ke.NAMES=Bs;let Ba=0;class xn extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ba++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mn extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new I,pi=new qe;let Oa=0;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oa++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix3(e),this.setXY(t,pi.x,pi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class Os extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gs extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ga=0;const Pt=new it,sr=new dt,Pn=new I,Rt=new ti,qn=new ti,ht=new I;class gt extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ga++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Is(e)?Gs:Os)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return sr.lookAt(e),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];qn.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(Rt.min,qn.min),Rt.expandByPoint(ht),ht.addVectors(Rt.max,qn.max),Rt.expandByPoint(ht)):(Rt.expandByPoint(qn.min),Rt.expandByPoint(qn.max))}Rt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)ht.fromBufferAttribute(o,l),c&&(Pn.fromBufferAttribute(e,l),ht.add(Pn)),r=Math.max(r,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new I,c[N]=new I;const l=new I,d=new I,h=new I,f=new qe,p=new qe,g=new qe,x=new I,m=new I;function u(N,S,M){l.fromBufferAttribute(n,N),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,N),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),d.sub(l),h.sub(l),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(D),o[N].add(x),o[S].add(x),o[M].add(x),c[N].add(m),c[S].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,S=b.length;N<S;++N){const M=b[N],D=M.start,G=M.count;for(let V=D,q=D+G;V<q;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new I,E=new I,P=new I,R=new I;function w(N){P.fromBufferAttribute(r,N),R.copy(P);const S=o[N];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),E.crossVectors(R,S);const D=E.dot(c[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,D)}for(let N=0,S=b.length;N<S;++N){const M=b[N],D=M.start,G=M.count;for(let V=D,q=D+G;V<q;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,c=new I,l=new I,d=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,f=new l.constructor(c.length*d);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*d;for(let u=0;u<d;u++)f[g++]=l[p++]}return new Ut(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,h=l.length;d<h;d++){const f=l[d],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];d.push(p.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],h=s[l];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kr=new it,cn=new yr,mi=new ni,Zr=new I,_i=new I,gi=new I,vi=new I,ar=new I,xi=new I,$r=new I,Mi=new I;class Et extends dt{constructor(e=new gt,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],h=s[c];d!==0&&(ar.fromBufferAttribute(h,e),a?xi.addScaledVector(ar,d):xi.addScaledVector(ar.sub(t),d))}t.add(xi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mi.copy(n.boundingSphere),mi.applyMatrix4(s),cn.copy(e.ray).recast(e.near),!(mi.containsPoint(cn.origin)===!1&&(cn.intersectSphere(mi,Zr)===null||cn.origin.distanceToSquared(Zr)>(e.far-e.near)**2))&&(Kr.copy(s).invert(),cn.copy(e.ray).applyMatrix4(Kr),!(n.boundingBox!==null&&cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=a[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,P=y;E<P;E+=3){const R=o.getX(E),w=o.getX(E+1),N=o.getX(E+2);r=Si(this,u,e,n,l,d,h,R,w,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const b=o.getX(m),y=o.getX(m+1),E=o.getX(m+2);r=Si(this,a,e,n,l,d,h,b,y,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=a[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,P=y;E<P;E+=3){const R=E,w=E+1,N=E+2;r=Si(this,u,e,n,l,d,h,R,w,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const b=m,y=m+1,E=m+2;r=Si(this,a,e,n,l,d,h,b,y,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function za(i,e,t,n,r,s,a,o){let c;if(e.side===1?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===0,o),c===null)return null;Mi.copy(o),Mi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Mi);return l<t.near||l>t.far?null:{distance:l,point:Mi.clone(),object:i}}function Si(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,_i),i.getVertexPosition(c,gi),i.getVertexPosition(l,vi);const d=za(i,e,t,n,_i,gi,vi,$r);if(d){const h=new I;Bt.getBarycoord($r,_i,gi,vi,h),r&&(d.uv=Bt.getInterpolatedAttribute(r,o,c,l,h,new qe)),s&&(d.uv1=Bt.getInterpolatedAttribute(s,o,c,l,h,new qe)),a&&(d.normal=Bt.getInterpolatedAttribute(a,o,c,l,h,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new I,materialIndex:0};Bt.getNormal(_i,gi,vi,f.normal),d.face=f,d.barycoord=h}return d}class ii extends gt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(h,2));function g(x,m,u,b,y,E,P,R,w,N,S){const M=E/w,D=P/N,G=E/2,V=P/2,q=R/2,Y=w+1,X=N+1;let J=0,z=0;const re=new I;for(let ae=0;ae<X;ae++){const pe=ae*D-V;for(let Be=0;Be<Y;Be++){const le=Be*M-G;re[x]=le*b,re[m]=pe*y,re[u]=q,l.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[u]=R>0?1:-1,d.push(re.x,re.y,re.z),h.push(Be/w),h.push(1-ae/N),J+=1}}for(let ae=0;ae<N;ae++)for(let pe=0;pe<w;pe++){const Be=f+pe+Y*ae,le=f+pe+Y*(ae+1),he=f+(pe+1)+Y*(ae+1),Ce=f+(pe+1)+Y*ae;c.push(Be,le,Ce),c.push(le,he,Ce),z+=6}o.addGroup(p,z,S),p+=z,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function On(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Mt(i){const e={};for(let t=0;t<i.length;t++){const n=On(i[t]);for(const r in n)e[r]=n[r]}return e}function Va(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zs(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Ha={clone:On,merge:Mt};var ka=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ka,this.fragmentShader=Wa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=On(e.uniforms),this.uniformsGroups=Va(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vs extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qt=new I,jr=new qe,Jr=new qe;class Lt extends Vs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($n*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jn*2*Math.atan(Math.tan($n*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qt.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qt.x,Qt.y).multiplyScalar(-e/Qt.z),Qt.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qt.x,Qt.y).multiplyScalar(-e/Qt.z)}getViewSize(e,t){return this.getViewBounds(e,jr,Jr),t.subVectors(Jr,jr)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($n*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dn=-90,Ln=1;class Xa extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Lt(Dn,Ln,e,t);r.layers=this.layers,this.add(r);const s=new Lt(Dn,Ln,e,t);s.layers=this.layers,this.add(s);const a=new Lt(Dn,Ln,e,t);a.layers=this.layers,this.add(a);const o=new Lt(Dn,Ln,e,t);o.layers=this.layers,this.add(o);const c=new Lt(Dn,Ln,e,t);c.layers=this.layers,this.add(c);const l=new Lt(Dn,Ln,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hs extends Tt{constructor(e=[],t=301,n,r,s,a,o,c,l,d){super(e,t,n,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qa extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Hs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ii(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:On(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new Et(r,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Xa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Kn extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ya={type:"move"};class or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ya)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ka extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zt,this.environmentIntensity=1,this.environmentRotation=new zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const lr=new I,Za=new I,$a=new Ne;class fn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=lr.subVectors(n,t).cross(Za.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$a.getNormalMatrix(e),r=this.coplanarPoint(lr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const un=new ni,ja=new qe(.5,.5),Ei=new I;class Ar{constructor(e=new fn,t=new fn,n=new fn,r=new fn,s=new fn,a=new fn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],d=s[4],h=s[5],f=s[6],p=s[7],g=s[8],x=s[9],m=s[10],u=s[11],b=s[12],y=s[13],E=s[14],P=s[15];if(r[0].setComponents(l-a,p-d,u-g,P-b).normalize(),r[1].setComponents(l+a,p+d,u+g,P+b).normalize(),r[2].setComponents(l+o,p+h,u+x,P+y).normalize(),r[3].setComponents(l-o,p-h,u-x,P-y).normalize(),n)r[4].setComponents(c,f,m,E).normalize(),r[5].setComponents(l-c,p-f,u-m,P-E).normalize();else if(r[4].setComponents(l-c,p-f,u-m,P-E).normalize(),t===2e3)r[5].setComponents(l+c,p+f,u+m,P+E).normalize();else if(t===2001)r[5].setComponents(c,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(e){un.center.set(0,0,0);const t=ja.distanceTo(e.center);return un.radius=.7071067811865476+t,un.applyMatrix4(e.matrixWorld),this.intersectsSphere(un)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ei.x=r.normal.x>0?e.max.x:e.min.x,Ei.y=r.normal.y>0?e.max.y:e.min.y,Ei.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ei)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pi extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ii=new I,Fi=new I,Qr=new it,Yn=new yr,Ti=new ni,cr=new I,es=new I;class ks extends dt{constructor(e=new gt,t=new Pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ii.fromBufferAttribute(t,r-1),Fi.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ii.distanceTo(Fi);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ti.copy(n.boundingSphere),Ti.applyMatrix4(r),Ti.radius+=s,e.ray.intersectsSphere(Ti)===!1)return;Qr.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(Qr);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=l){const u=d.getX(x),b=d.getX(x+1),y=yi(this,e,Yn,c,u,b,x);y&&t.push(y)}if(this.isLineLoop){const x=d.getX(g-1),m=d.getX(p),u=yi(this,e,Yn,c,x,m,g-1);u&&t.push(u)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=l){const u=yi(this,e,Yn,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=yi(this,e,Yn,c,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yi(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Ii.fromBufferAttribute(o,r),Fi.fromBufferAttribute(o,s),t.distanceSqToSegment(Ii,Fi,cr,es)>n)return;cr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(cr);if(!(l<e.near||l>e.far))return{distance:l,point:es.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ts=new I,ns=new I;class Ja extends ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ts.fromBufferAttribute(t,r),ns.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ts.distanceTo(ns);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vr extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const is=new it,xr=new yr,Ai=new ni,bi=new I;class rs extends dt{constructor(e=new gt,t=new vr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ai.copy(n.boundingSphere),Ai.applyMatrix4(r),Ai.radius+=s,e.ray.intersectsSphere(Ai)===!1)return;is.copy(r).invert(),xr.copy(e.ray).applyMatrix4(is);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,x=p;g<x;g++){const m=l.getX(g);bi.fromBufferAttribute(h,m),ss(bi,m,c,r,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,x=p;g<x;g++)bi.fromBufferAttribute(h,g),ss(bi,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ss(i,e,t,n,r,s,a){const o=xr.distanceSqToPoint(i);if(o<t){const c=new I;xr.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ws extends Tt{constructor(e,t,n=1014,r,s,a,o=1003,c=1003,l,d=1026,h=1){if(d!==1026&&d!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xs extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ni extends gt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,d=c+1,h=e/o,f=t/c,p=[],g=[],x=[],m=[];for(let u=0;u<d;u++){const b=u*f-a;for(let y=0;y<l;y++){const E=y*h-s;g.push(E,-b,0),x.push(0,0,1),m.push(y/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){const y=b+l*u,E=b+l*(u+1),P=b+1+l*(u+1),R=b+1+l*u;p.push(y,E,R),p.push(E,P,R)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.widthSegments,e.heightSegments)}}class _n extends gt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],h=new I,f=new I,p=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){const b=[],y=u/n;let E=0;u===0&&a===0?E=.5/t:u===n&&c===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){const R=P/t;h.x=-e*Math.cos(r+R*s)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(r+R*s)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(R+E,1-y),b.push(l++)}d.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){const y=d[u][b+1],E=d[u][b],P=d[u+1][b],R=d[u+1][b+1];(u!==0||a>0)&&p.push(y,E,R),(u!==n-1||c<Math.PI)&&p.push(E,P,R)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class br extends gt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],d=new I,h=new I,f=new I;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,u=(r+1)*(p-1)+g,b=(r+1)*p+g;a.push(x,m,b),a.push(m,u,b)}this.setIndex(a),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Qa extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eo extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class to extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qs extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ur=new it,as=new I,os=new I;class no{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;as.setFromMatrixPosition(e.matrixWorld),t.position.copy(as),os.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(os),t.updateMatrixWorld(),ur.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ur,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ur)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ys extends Vs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class io extends no{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ls extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new io}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ro extends qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class so extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function cs(i,e,t,n){const r=ao(n);switch(t){case 1021:return i*e;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ao(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ks(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function oo(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,d);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];i.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var lo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,co=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ho=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,po=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mo=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_o=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,go=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xo=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,So=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eo=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,To=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yo=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ao=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ro=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Co=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Po=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Do=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Io=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,No=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Go="gl_FragColor = linearToOutputTexel( gl_FragColor );",zo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ho=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ko=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qo=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yo=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ko=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zo=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$o=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jo=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jo=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qo=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,el=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,il=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,al=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ol=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ll=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ul=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ml=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_l=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vl=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ml=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,El=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Al=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rl=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ll=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ul=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Il=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ol=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xl=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ql=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$l=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jl=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ql=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ec=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ic=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ac=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_c=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ec=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ac=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ic=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:lo,alphahash_pars_fragment:co,alphamap_fragment:uo,alphamap_pars_fragment:ho,alphatest_fragment:fo,alphatest_pars_fragment:po,aomap_fragment:mo,aomap_pars_fragment:_o,batching_pars_vertex:go,batching_vertex:vo,begin_vertex:xo,beginnormal_vertex:Mo,bsdfs:So,iridescence_fragment:Eo,bumpmap_pars_fragment:To,clipping_planes_fragment:yo,clipping_planes_pars_fragment:Ao,clipping_planes_pars_vertex:bo,clipping_planes_vertex:Ro,color_fragment:wo,color_pars_fragment:Co,color_pars_vertex:Po,color_vertex:Do,common:Lo,cube_uv_reflection_fragment:Uo,defaultnormal_vertex:Io,displacementmap_pars_vertex:Fo,displacementmap_vertex:No,emissivemap_fragment:Bo,emissivemap_pars_fragment:Oo,colorspace_fragment:Go,colorspace_pars_fragment:zo,envmap_fragment:Vo,envmap_common_pars_fragment:Ho,envmap_pars_fragment:ko,envmap_pars_vertex:Wo,envmap_physical_pars_fragment:tl,envmap_vertex:Xo,fog_vertex:qo,fog_pars_vertex:Yo,fog_fragment:Ko,fog_pars_fragment:Zo,gradientmap_pars_fragment:$o,lightmap_pars_fragment:jo,lights_lambert_fragment:Jo,lights_lambert_pars_fragment:Qo,lights_pars_begin:el,lights_toon_fragment:nl,lights_toon_pars_fragment:il,lights_phong_fragment:rl,lights_phong_pars_fragment:sl,lights_physical_fragment:al,lights_physical_pars_fragment:ol,lights_fragment_begin:ll,lights_fragment_maps:cl,lights_fragment_end:ul,logdepthbuf_fragment:hl,logdepthbuf_pars_fragment:dl,logdepthbuf_pars_vertex:fl,logdepthbuf_vertex:pl,map_fragment:ml,map_pars_fragment:_l,map_particle_fragment:gl,map_particle_pars_fragment:vl,metalnessmap_fragment:xl,metalnessmap_pars_fragment:Ml,morphinstance_vertex:Sl,morphcolor_vertex:El,morphnormal_vertex:Tl,morphtarget_pars_vertex:yl,morphtarget_vertex:Al,normal_fragment_begin:bl,normal_fragment_maps:Rl,normal_pars_fragment:wl,normal_pars_vertex:Cl,normal_vertex:Pl,normalmap_pars_fragment:Dl,clearcoat_normal_fragment_begin:Ll,clearcoat_normal_fragment_maps:Ul,clearcoat_pars_fragment:Il,iridescence_pars_fragment:Fl,opaque_fragment:Nl,packing:Bl,premultiplied_alpha_fragment:Ol,project_vertex:Gl,dithering_fragment:zl,dithering_pars_fragment:Vl,roughnessmap_fragment:Hl,roughnessmap_pars_fragment:kl,shadowmap_pars_fragment:Wl,shadowmap_pars_vertex:Xl,shadowmap_vertex:ql,shadowmask_pars_fragment:Yl,skinbase_vertex:Kl,skinning_pars_vertex:Zl,skinning_vertex:$l,skinnormal_vertex:jl,specularmap_fragment:Jl,specularmap_pars_fragment:Ql,tonemapping_fragment:ec,tonemapping_pars_fragment:tc,transmission_fragment:nc,transmission_pars_fragment:ic,uv_pars_fragment:rc,uv_pars_vertex:sc,uv_vertex:ac,worldpos_vertex:oc,background_vert:lc,background_frag:cc,backgroundCube_vert:uc,backgroundCube_frag:hc,cube_vert:dc,cube_frag:fc,depth_vert:pc,depth_frag:mc,distanceRGBA_vert:_c,distanceRGBA_frag:gc,equirect_vert:vc,equirect_frag:xc,linedashed_vert:Mc,linedashed_frag:Sc,meshbasic_vert:Ec,meshbasic_frag:Tc,meshlambert_vert:yc,meshlambert_frag:Ac,meshmatcap_vert:bc,meshmatcap_frag:Rc,meshnormal_vert:wc,meshnormal_frag:Cc,meshphong_vert:Pc,meshphong_frag:Dc,meshphysical_vert:Lc,meshphysical_frag:Uc,meshtoon_vert:Ic,meshtoon_frag:Fc,points_vert:Nc,points_frag:Bc,shadow_vert:Oc,shadow_frag:Gc,sprite_vert:zc,sprite_frag:Vc},se={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Gt={basic:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Mt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Mt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Mt([se.points,se.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Mt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Mt([se.common,se.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Mt([se.sprite,se.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Mt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Mt([se.lights,se.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Gt.physical={uniforms:Mt([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ri={r:0,b:0,g:0},hn=new zt,Hc=new it;function kc(i,e,t,n,r,s,a){const o=new ke(0);let c=s===!0?0:1,l,d,h=null,f=0,p=null;function g(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?t:e).get(E)),E}function x(y){let E=!1;const P=g(y);P===null?u(o,c):P&&P.isColor&&(u(P,1),E=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,E){const P=g(E);P&&(P.isCubeTexture||P.mapping===306)?(d===void 0&&(d=new Et(new ii(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:On(Gt.backgroundCube.uniforms),vertexShader:Gt.backgroundCube.vertexShader,fragmentShader:Gt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),hn.copy(E.backgroundRotation),hn.x*=-1,hn.y*=-1,hn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(hn.y*=-1,hn.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Hc.makeRotationFromEuler(hn)),d.material.toneMapped=Xe.getTransfer(P.colorSpace)!==Ze,(h!==P||f!==P.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new Et(new Ni(2,2),new rn({name:"BackgroundMaterial",uniforms:On(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(P.colorSpace)!==Ze,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function u(y,E){y.getRGB(Ri,zs(i)),n.buffers.color.setClear(Ri.r,Ri.g,Ri.b,E,a)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),c=E,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,u(o,c)},render:x,addToRenderList:m,dispose:b}}function Wc(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,D,G,V,q){let Y=!1;const X=h(V,G,D);s!==X&&(s=X,l(s.object)),Y=p(M,V,G,q),Y&&g(M,V,G,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,E(M,D,G,V),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function h(M,D,G){const V=G.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let Y=q[D.id];Y===void 0&&(Y={},q[D.id]=Y);let X=Y[V];return X===void 0&&(X=f(c()),Y[V]=X),X}function f(M){const D=[],G=[],V=[];for(let q=0;q<t;q++)D[q]=0,G[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,D,G,V){const q=s.attributes,Y=D.attributes;let X=0;const J=G.getAttributes();for(const z in J)if(J[z].location>=0){const ae=q[z];let pe=Y[z];if(pe===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),ae===void 0||ae.attribute!==pe||pe&&ae.data!==pe.data)return!0;X++}return s.attributesNum!==X||s.index!==V}function g(M,D,G,V){const q={},Y=D.attributes;let X=0;const J=G.getAttributes();for(const z in J)if(J[z].location>=0){let ae=Y[z];ae===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const pe={};pe.attribute=ae,ae&&ae.data&&(pe.data=ae.data),q[z]=pe,X++}s.attributes=q,s.attributesNum=X,s.index=V}function x(){const M=s.newAttributes;for(let D=0,G=M.length;D<G;D++)M[D]=0}function m(M){u(M,0)}function u(M,D){const G=s.newAttributes,V=s.enabledAttributes,q=s.attributeDivisors;G[M]=1,V[M]===0&&(i.enableVertexAttribArray(M),V[M]=1),q[M]!==D&&(i.vertexAttribDivisor(M,D),q[M]=D)}function b(){const M=s.newAttributes,D=s.enabledAttributes;for(let G=0,V=D.length;G<V;G++)D[G]!==M[G]&&(i.disableVertexAttribArray(G),D[G]=0)}function y(M,D,G,V,q,Y,X){X===!0?i.vertexAttribIPointer(M,D,G,q,Y):i.vertexAttribPointer(M,D,G,V,q,Y)}function E(M,D,G,V){x();const q=V.attributes,Y=G.getAttributes(),X=D.defaultAttributeValues;for(const J in Y){const z=Y[J];if(z.location>=0){let re=q[J];if(re===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const ae=re.normalized,pe=re.itemSize,Be=e.get(re);if(Be===void 0)continue;const le=Be.buffer,he=Be.type,Ce=Be.bytesPerElement,H=he===i.INT||he===i.UNSIGNED_INT||re.gpuType===1013;if(re.isInterleavedBufferAttribute){const Z=re.data,me=Z.stride,Le=re.offset;if(Z.isInstancedInterleavedBuffer){for(let ye=0;ye<z.locationSize;ye++)u(z.location+ye,Z.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ye=0;ye<z.locationSize;ye++)m(z.location+ye);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ye=0;ye<z.locationSize;ye++)y(z.location+ye,pe/z.locationSize,he,ae,me*Ce,(Le+pe/z.locationSize*ye)*Ce,H)}else{if(re.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)u(z.location+Z,re.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Z=0;Z<z.locationSize;Z++)m(z.location+Z);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Z=0;Z<z.locationSize;Z++)y(z.location+Z,pe/z.locationSize,he,ae,pe*Ce,pe/z.locationSize*Z*Ce,H)}}else if(X!==void 0){const ae=X[J];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(z.location,ae);break;case 3:i.vertexAttrib3fv(z.location,ae);break;case 4:i.vertexAttrib4fv(z.location,ae);break;default:i.vertexAttrib1fv(z.location,ae)}}}}b()}function P(){N();for(const M in n){const D=n[M];for(const G in D){const V=D[G];for(const q in V)d(V[q].object),delete V[q];delete D[G]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const G in D){const V=D[G];for(const q in V)d(V[q].object),delete V[q];delete D[G]}delete n[M.id]}function w(M){for(const D in n){const G=n[D];if(G[M.id]===void 0)continue;const V=G[M.id];for(const q in V)d(V[q].object),delete V[q];delete G[M.id]}}function N(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Xc(i,e,t){let n;function r(l){n=l}function s(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,n,1)}function c(l,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=d[x]*f[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function qc(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==1023&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const N=w===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==1009&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==1015&&!N)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:P,maxSamples:R}}function Yc(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new fn,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?d(null):l();else{const b=s?0:n,y=b*4;let E=u.clippingState||null;c.value=E,E=d(g,f,y,p);for(let P=0;P!==y;++P)E[P]=t[P];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const u=p+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,E=p;y!==x;++y,E+=4)a.copy(h[y]).applyMatrix4(b,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Kc(i){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new qa(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Fn=4,us=[.125,.215,.35,.446,.526,.582],gn=20,hr=new Ys,hs=new ke;let dr=null,fr=0,pr=0,mr=!1;const pn=(1+Math.sqrt(5))/2,Un=1/pn,ds=[new I(-pn,Un,0),new I(pn,Un,0),new I(-Un,0,pn),new I(Un,0,pn),new I(0,pn,-Un),new I(0,pn,Un),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Zc=new I;class fs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Zc}=s;dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_s(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ms(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dr,fr,pr),this._renderer.xr.enabled=mr,e.scissorTest=!1,wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Bn,depthBuffer:!1},r=ps(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ps(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$c(s)),this._blurMaterial=jc(s,e,t)}return r}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,hr)}_sceneToCubeUV(e,t,n,r,s){const c=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(hs),h.toneMapping=0,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const x=new mn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new Et(new ii,x);let u=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,u=!0):(x.color.copy(hs),u=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[y],s.y,s.z)):E===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[y]));const P=this._cubeSize;wi(r,E*P,y>2?P:0,P,P),h.setRenderTarget(r),u&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_s()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ms());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;wi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ds[(r-s-1)%ds.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Et(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gn-1),x=s/g,m=isFinite(s)?1+Math.floor(d*x):gn;m>gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gn}`);const u=[];let b=0;for(let w=0;w<gn;++w){const N=w/x,S=Math.exp(-N*N/2);u.push(S),w===0?b+=S:w<m&&(b+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const E=this._sizeLods[r],P=3*E*(r>y-Fn?r-y+Fn:0),R=4*(this._cubeSize-E);wi(t,P,R,3*E,2*E),c.setRenderTarget(t),c.render(h,hr)}}function $c(i){const e=[],t=[],n=[];let r=i;const s=i-Fn+1+us.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Fn?c=us[a-i+Fn-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,x=3,m=2,u=1,b=new Float32Array(x*g*p),y=new Float32Array(m*g*p),E=new Float32Array(u*g*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,N=R>2?0:-1,S=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];b.set(S,x*g*R),y.set(f,m*g*R);const M=[R,R,R,R,R,R];E.set(M,u*g*R)}const P=new gt;P.setAttribute("position",new Ut(b,x)),P.setAttribute("uv",new Ut(y,m)),P.setAttribute("faceIndex",new Ut(E,u)),e.push(P),r>Fn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ps(i,e,t){const n=new vn(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function jc(i,e,t){const n=new Float32Array(gn),r=new I(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ms(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _s(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jc(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===303||c===304,d=c===301||c===302;if(l||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new fs(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new fs(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Qc(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Qn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function e1(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let y=0,E=b.length;y<E;y+=3){const P=b[y+0],R=b[y+1],w=b[y+2];f.push(P,R,R,w,w,P)}}else if(g!==void 0){const b=g.array;x=g.version;for(let y=0,E=b.length/3-1;y<E;y+=3){const P=y+0,R=y+1,w=y+2;f.push(P,R,R,w,w,P)}}else return;const m=new(Is(f)?Gs:Os)(f,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function t1(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,s,f*a),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*a,g),t.update(p,n,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function h(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/a,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,x,0,g);let u=0;for(let b=0;b<g;b++)u+=p[b]*x[b];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function n1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function i1(i,e,t){const n=new WeakMap,r=new st;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let E=o.attributes.position.count*y,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*P*4*h),w=new Fs(R,E,P,h);w.type=1015,w.needsUpdate=!0;const N=y*4;for(let M=0;M<h;M++){const D=m[M],G=u[M],V=b[M],q=E*P*4*M;for(let Y=0;Y<D.count;Y++){const X=Y*N;p===!0&&(r.fromBufferAttribute(D,Y),R[q+X+0]=r.x,R[q+X+1]=r.y,R[q+X+2]=r.z,R[q+X+3]=0),g===!0&&(r.fromBufferAttribute(G,Y),R[q+X+4]=r.x,R[q+X+5]=r.y,R[q+X+6]=r.z,R[q+X+7]=0),x===!0&&(r.fromBufferAttribute(V,Y),R[q+X+8]=r.x,R[q+X+9]=r.y,R[q+X+10]=r.z,R[q+X+11]=V.itemSize===4?r.w:1)}}f={count:h,texture:w,size:new qe(E,P)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function r1(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Zs=new Tt,gs=new Ws(1,1),$s=new Fs,js=new Ca,Js=new Hs,vs=[],xs=[],Ms=new Float32Array(16),Ss=new Float32Array(9),Es=new Float32Array(4);function Vn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=vs[r];if(s===void 0&&(s=new Float32Array(r),vs[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bi(i,e){let t=xs[e];t===void 0&&(t=new Int32Array(e),xs[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function s1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function a1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function o1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function l1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function c1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Es.set(n),i.uniformMatrix2fv(this.addr,!1,Es),ct(t,n)}}function u1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Ss.set(n),i.uniformMatrix3fv(this.addr,!1,Ss),ct(t,n)}}function h1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Ms.set(n),i.uniformMatrix4fv(this.addr,!1,Ms),ct(t,n)}}function d1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function f1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function p1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function m1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function _1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function g1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function v1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function x1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function M1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(gs.compareFunction=515,s=gs):s=Zs,t.setTexture2D(e||s,r)}function S1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||js,r)}function E1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Js,r)}function T1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||$s,r)}function y1(i){switch(i){case 5126:return s1;case 35664:return a1;case 35665:return o1;case 35666:return l1;case 35674:return c1;case 35675:return u1;case 35676:return h1;case 5124:case 35670:return d1;case 35667:case 35671:return f1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return _1;case 36294:return g1;case 36295:return v1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return T1}}function A1(i,e){i.uniform1fv(this.addr,e)}function b1(i,e){const t=Vn(e,this.size,2);i.uniform2fv(this.addr,t)}function R1(i,e){const t=Vn(e,this.size,3);i.uniform3fv(this.addr,t)}function w1(i,e){const t=Vn(e,this.size,4);i.uniform4fv(this.addr,t)}function C1(i,e){const t=Vn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function P1(i,e){const t=Vn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function D1(i,e){const t=Vn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function L1(i,e){i.uniform1iv(this.addr,e)}function U1(i,e){i.uniform2iv(this.addr,e)}function I1(i,e){i.uniform3iv(this.addr,e)}function F1(i,e){i.uniform4iv(this.addr,e)}function N1(i,e){i.uniform1uiv(this.addr,e)}function B1(i,e){i.uniform2uiv(this.addr,e)}function O1(i,e){i.uniform3uiv(this.addr,e)}function G1(i,e){i.uniform4uiv(this.addr,e)}function z1(i,e,t){const n=this.cache,r=e.length,s=Bi(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Zs,s[a])}function V1(i,e,t){const n=this.cache,r=e.length,s=Bi(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||js,s[a])}function H1(i,e,t){const n=this.cache,r=e.length,s=Bi(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Js,s[a])}function k1(i,e,t){const n=this.cache,r=e.length,s=Bi(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||$s,s[a])}function W1(i){switch(i){case 5126:return A1;case 35664:return b1;case 35665:return R1;case 35666:return w1;case 35674:return C1;case 35675:return P1;case 35676:return D1;case 5124:case 35670:return L1;case 35667:case 35671:return U1;case 35668:case 35672:return I1;case 35669:case 35673:return F1;case 5125:return N1;case 36294:return B1;case 36295:return O1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return k1}}class X1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=y1(t.type)}}class q1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W1(t.type)}}class Y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const _r=/(\w+)(\])?(\[|\.)?/g;function Ts(i,e){i.seq.push(e),i.map[e.id]=e}function K1(i,e,t){const n=i.name,r=n.length;for(_r.lastIndex=0;;){const s=_r.exec(n),a=_r.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ts(t,l===void 0?new X1(o,i,e):new q1(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Y1(o),Ts(t,h)),t=h}}}class Di{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);K1(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ys(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Z1=37297;let $1=0;function j1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const As=new Ne;function J1(i){Xe._getMatrix(As,Xe.workingColorSpace,i);const e=`mat3( ${As.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Li:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bs(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+j1(i.getShaderSource(e),o)}else return s}function Q1(i,e){const t=J1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function eu(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ci=new I;function tu(){Xe.getLuminanceCoefficients(Ci);const i=Ci.x.toFixed(4),e=Ci.y.toFixed(4),t=Ci.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nu(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zn).join(`
`)}function iu(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ru(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Zn(i){return i!==""}function Rs(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ws(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const su=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mr(i){return i.replace(su,ou)}const au=new Map;function ou(i,e){let t=Ge[e];if(t===void 0){const n=au.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mr(t)}const lu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cs(i){return i.replace(lu,cu)}function cu(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ps(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uu(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function hu(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function du(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function fu(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function pu(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function mu(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=uu(t),l=hu(t),d=du(t),h=fu(t),f=pu(t),p=nu(t),g=iu(s),x=r.createProgram();let m,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zn).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zn).join(`
`),u.length>0&&(u+=`
`)):(m=[Ps(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zn).join(`
`),u=[Ps(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ge.tonemapping_pars_fragment:"",t.toneMapping!==0?eu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Q1("linearToOutputTexel",t.outputColorSpace),tu(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zn).join(`
`)),a=Mr(a),a=Rs(a,t),a=ws(a,t),o=Mr(o),o=Rs(o,t),o=ws(o,t),a=Cs(a),o=Cs(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Ir?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ir?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=b+m+a,E=b+u+o,P=ys(r,r.VERTEX_SHADER,y),R=ys(r,r.FRAGMENT_SHADER,E);r.attachShader(x,P),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(D){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(x)||"",V=r.getShaderInfoLog(P)||"",q=r.getShaderInfoLog(R)||"",Y=G.trim(),X=V.trim(),J=q.trim();let z=!0,re=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,P,R);else{const ae=bs(r,P,"vertex"),pe=bs(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+ae+`
`+pe)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||J==="")&&(re=!1);re&&(D.diagnostics={runnable:z,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:J,prefix:u}})}r.deleteShader(P),r.deleteShader(R),N=new Di(r,x),S=ru(r,x)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Z1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=R,this}let _u=0;class gu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vu(e),t.set(e,n)),n}}class vu{constructor(e){this.id=_u++,this.code=e,this.usedTimes=0}}function xu(i,e,t,n,r,s,a){const o=new Ns,c=new gu,l=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,G,V){const q=G.fog,Y=V.geometry,X=S.isMeshStandardMaterial?G.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),z=J&&J.mapping===306?J.image.height:null,re=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pe=ae!==void 0?ae.length:0;let Be=0;Y.morphAttributes.position!==void 0&&(Be=1),Y.morphAttributes.normal!==void 0&&(Be=2),Y.morphAttributes.color!==void 0&&(Be=3);let le,he,Ce,H;if(re){const Ye=Gt[re];le=Ye.vertexShader,he=Ye.fragmentShader}else le=S.vertexShader,he=S.fragmentShader,c.update(S),Ce=c.getVertexShaderID(S),H=c.getFragmentShaderID(S);const Z=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Le=V.isInstancedMesh===!0,ye=V.isBatchedMesh===!0,He=!!S.map,ft=!!S.matcap,A=!!J,Qe=!!S.aoMap,Ie=!!S.lightMap,Pe=!!S.bumpMap,ve=!!S.normalMap,et=!!S.displacementMap,xe=!!S.emissiveMap,Oe=!!S.metalnessMap,ut=!!S.roughnessMap,at=S.anisotropy>0,T=S.clearcoat>0,_=S.dispersion>0,F=S.iridescence>0,W=S.sheen>0,$=S.transmission>0,k=at&&!!S.anisotropyMap,Te=T&&!!S.clearcoatMap,ne=T&&!!S.clearcoatNormalMap,Me=T&&!!S.clearcoatRoughnessMap,Se=F&&!!S.iridescenceMap,ee=F&&!!S.iridescenceThicknessMap,ue=W&&!!S.sheenColorMap,we=W&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,oe=!!S.specularColorMap,Fe=!!S.specularIntensityMap,C=$&&!!S.transmissionMap,te=$&&!!S.thicknessMap,ie=!!S.gradientMap,fe=!!S.alphaMap,j=S.alphaTest>0,K=!!S.alphaHash,ge=!!S.extensions;let Ue=0;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const je={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:he,defines:S.defines,customVertexShaderID:Ce,customFragmentShaderID:H,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ye,batchingColor:ye&&V._colorsTexture!==null,instancing:Le,instancingColor:Le&&V.instanceColor!==null,instancingMorph:Le&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Bn,alphaToCoverage:!!S.alphaToCoverage,map:He,matcap:ft,envMap:A,envMapMode:A&&J.mapping,envMapCubeUVHeight:z,aoMap:Qe,lightMap:Ie,bumpMap:Pe,normalMap:ve,displacementMap:f&&et,emissiveMap:xe,normalMapObjectSpace:ve&&S.normalMapType===1,normalMapTangentSpace:ve&&S.normalMapType===0,metalnessMap:Oe,roughnessMap:ut,anisotropy:at,anisotropyMap:k,clearcoat:T,clearcoatMap:Te,clearcoatNormalMap:ne,clearcoatRoughnessMap:Me,dispersion:_,iridescence:F,iridescenceMap:Se,iridescenceThicknessMap:ee,sheen:W,sheenColorMap:ue,sheenRoughnessMap:we,specularMap:Ee,specularColorMap:oe,specularIntensityMap:Fe,transmission:$,transmissionMap:C,thicknessMap:te,gradientMap:ie,opaque:S.transparent===!1&&S.blending===1&&S.alphaToCoverage===!1,alphaMap:fe,alphaTest:j,alphaHash:K,combine:S.combine,mapUv:He&&x(S.map.channel),aoMapUv:Qe&&x(S.aoMap.channel),lightMapUv:Ie&&x(S.lightMap.channel),bumpMapUv:Pe&&x(S.bumpMap.channel),normalMapUv:ve&&x(S.normalMap.channel),displacementMapUv:et&&x(S.displacementMap.channel),emissiveMapUv:xe&&x(S.emissiveMap.channel),metalnessMapUv:Oe&&x(S.metalnessMap.channel),roughnessMapUv:ut&&x(S.roughnessMap.channel),anisotropyMapUv:k&&x(S.anisotropyMap.channel),clearcoatMapUv:Te&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(S.sheenRoughnessMap.channel),specularMapUv:Ee&&x(S.specularMap.channel),specularColorMapUv:oe&&x(S.specularColorMap.channel),specularIntensityMapUv:Fe&&x(S.specularIntensityMap.channel),transmissionMapUv:C&&x(S.transmissionMap.channel),thicknessMapUv:te&&x(S.thicknessMap.channel),alphaMapUv:fe&&x(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ve||at),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(He||fe),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&Xe.getTransfer(S.map.colorSpace)===Ze,decodeVideoTextureEmissive:xe&&S.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(S.emissiveMap.colorSpace)===Ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===2,flipSided:S.side===1,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ge&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&S.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(b(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=g[S.type];let D;if(M){const G=Gt[M];D=Ha.clone(G.uniforms)}else D=S.uniforms;return D}function P(S,M){let D;for(let G=0,V=d.length;G<V;G++){const q=d[G];if(q.cacheKey===M){D=q,++D.usedTimes;break}}return D===void 0&&(D=new mu(i,M,S,s),d.push(D)),D}function R(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function w(S){c.remove(S)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:P,releaseProgram:R,releaseShaderCache:w,programs:d,dispose:N}}function Mu(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Su(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ds(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ls(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,p,g,x,m){let u=i[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function o(h,f,p,g,x,m){const u=a(h,f,p,g,x,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(h,f,p,g,x,m){const u=a(h,f,p,g,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(h,f){t.length>1&&t.sort(h||Su),n.length>1&&n.sort(f||Ds),r.length>1&&r.sort(f||Ds)}function d(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:d,sort:l}}function Eu(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ls,i.set(n,[a])):r>=s.length?(a=new Ls,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tu(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function yu(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Au=0;function bu(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ru(i){const e=new Tu,t=yu(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const r=new I,s=new it,a=new it;function o(l){let d=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,b=0,y=0,E=0,P=0,R=0,w=0;l.sort(bu);for(let S=0,M=l.length;S<M;S++){const D=l[S],G=D.color,V=D.intensity,q=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=G.r*V,h+=G.g*V,f+=G.b*V;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],V);w++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,z=t.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=D.shadow.matrix,b++}n.directional[p]=X,p++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(G).multiplyScalar(V),X.distance=q,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[x]=X;const J=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,J.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[x]=J.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=Y,E++}x++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(G).multiplyScalar(V),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const J=D.shadow,z=t.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(V),X.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[u]=X,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==b||N.numPointShadows!==y||N.numSpotShadows!==E||N.numSpotMaps!==P||N.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=b,N.numPointShadows=y,N.numSpotShadows=E,N.numSpotMaps=P,N.numLightProbes=w,n.version=Au++)}function c(l,d){let h=0,f=0,p=0,g=0,x=0;const m=d.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){const y=l[u];if(y.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(y.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Us(i){const e=new Ru(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function wu(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Us(i),e.set(r,[o])):s>=a.length?(o=new Us(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Cu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Du(i,e,t){let n=new Ar;const r=new qe,s=new qe,a=new st,o=new eo({depthPacking:3201}),c=new to,l={},d=t.maxTextureSize,h={0:1,1:0,2:2},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Cu,fragmentShader:Pu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new gt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let u=this.type;this.render=function(R,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),G=i.state;G.setBlending(0),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=u!==3&&this.type===3,q=u===3&&this.type!==3;for(let Y=0,X=R.length;Y<X;Y++){const J=R[Y],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const re=z.getFrameExtents();if(r.multiply(re),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/re.x),r.x=s.x*re.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/re.y),r.y=s.y*re.y,z.mapSize.y=s.y)),z.map===null||V===!0||q===!0){const pe=this.type!==3?{minFilter:1003,magFilter:1003}:{};z.map!==null&&z.map.dispose(),z.map=new vn(r.x,r.y,pe),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ae=z.getViewportCount();for(let pe=0;pe<ae;pe++){const Be=z.getViewport(pe);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),G.viewport(a),z.updateMatrices(J,pe),n=z.getFrustum(),E(w,N,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===3&&b(z,N),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,D)};function b(R,w){const N=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vn(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,N,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,N,p,x,null)}function y(R,w,N,S){let M=null;const D=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)M=D;else if(M=N.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const G=M.uuid,V=w.uuid;let q=l[G];q===void 0&&(q={},l[G]=q);let Y=q[V];Y===void 0&&(Y=M.clone(),q[V]=Y,w.addEventListener("dispose",P)),M=Y}if(M.visible=w.visible,M.wireframe=w.wireframe,S===3?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=i.properties.get(M);G.light=N}return M}function E(R,w,N,S,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===3)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const V=e.update(R),q=R.material;if(Array.isArray(q)){const Y=V.groups;for(let X=0,J=Y.length;X<J;X++){const z=Y[X],re=q[z.materialIndex];if(re&&re.visible){const ae=y(R,re,S,M);R.onBeforeShadow(i,R,w,N,V,ae,z),i.renderBufferDirect(N,null,V,ae,R,z),R.onAfterShadow(i,R,w,N,V,ae,z)}}}else if(q.visible){const Y=y(R,q,S,M);R.onBeforeShadow(i,R,w,N,V,Y,null),i.renderBufferDirect(N,null,V,Y,R,null),R.onAfterShadow(i,R,w,N,V,Y,null)}}const G=R.children;for(let V=0,q=G.length;V<q;V++)E(G[V],w,N,S,M)}function P(R){R.target.removeEventListener("dispose",P);for(const N in l){const S=l[N],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Lu={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Uu(i,e){function t(){let C=!1;const te=new st;let ie=null;const fe=new st(0,0,0,0);return{setMask:function(j){ie!==j&&!C&&(i.colorMask(j,j,j,j),ie=j)},setLocked:function(j){C=j},setClear:function(j,K,ge,Ue,je){je===!0&&(j*=Ue,K*=Ue,ge*=Ue),te.set(j,K,ge,Ue),fe.equals(te)===!1&&(i.clearColor(j,K,ge,Ue),fe.copy(te))},reset:function(){C=!1,ie=null,fe.set(-1,0,0,0)}}}function n(){let C=!1,te=!1,ie=null,fe=null,j=null;return{setReversed:function(K){if(te!==K){const ge=e.get("EXT_clip_control");K?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),te=K;const Ue=j;j=null,this.setClear(Ue)}},getReversed:function(){return te},setTest:function(K){K?Z(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(K){ie!==K&&!C&&(i.depthMask(K),ie=K)},setFunc:function(K){if(te&&(K=Lu[K]),fe!==K){switch(K){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=K}},setLocked:function(K){C=K},setClear:function(K){j!==K&&(te&&(K=1-K),i.clearDepth(K),j=K)},reset:function(){C=!1,ie=null,fe=null,j=null,te=!1}}}function r(){let C=!1,te=null,ie=null,fe=null,j=null,K=null,ge=null,Ue=null,je=null;return{setTest:function(Ye){C||(Ye?Z(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Ye){te!==Ye&&!C&&(i.stencilMask(Ye),te=Ye)},setFunc:function(Ye,Vt,Ot){(ie!==Ye||fe!==Vt||j!==Ot)&&(i.stencilFunc(Ye,Vt,Ot),ie=Ye,fe=Vt,j=Ot)},setOp:function(Ye,Vt,Ot){(K!==Ye||ge!==Vt||Ue!==Ot)&&(i.stencilOp(Ye,Vt,Ot),K=Ye,ge=Vt,Ue=Ot)},setLocked:function(Ye){C=Ye},setClear:function(Ye){je!==Ye&&(i.clearStencil(Ye),je=Ye)},reset:function(){C=!1,te=null,ie=null,fe=null,j=null,K=null,ge=null,Ue=null,je=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let d={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,y=null,E=null,P=null,R=null,w=new ke(0,0,0),N=0,S=!1,M=null,D=null,G=null,V=null,q=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=J>=2);let re=null,ae={};const pe=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),le=new st().fromArray(pe),he=new st().fromArray(Be);function Ce(C,te,ie,fe){const j=new Uint8Array(4),K=i.createTexture();i.bindTexture(C,K),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<ie;ge++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(te+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return K}const H={};H[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(3),Pe(!1),ve(1),Z(i.CULL_FACE),Qe(0);function Z(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function me(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function Le(C,te){return h[C]!==te?(i.bindFramebuffer(C,te),h[C]=te,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=te),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=te),!0):!1}function ye(C,te){let ie=p,fe=!1;if(C){ie=f.get(te),ie===void 0&&(ie=[],f.set(te,ie));const j=C.textures;if(ie.length!==j.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let K=0,ge=j.length;K<ge;K++)ie[K]=i.COLOR_ATTACHMENT0+K;ie.length=j.length,fe=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,fe=!0);fe&&i.drawBuffers(ie)}function He(C){return g!==C?(i.useProgram(C),g=C,!0):!1}const ft={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};ft[103]=i.MIN,ft[104]=i.MAX;const A={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(C,te,ie,fe,j,K,ge,Ue,je,Ye){if(C===0){x===!0&&(me(i.BLEND),x=!1);return}if(x===!1&&(Z(i.BLEND),x=!0),C!==5){if(C!==m||Ye!==S){if((u!==100||E!==100)&&(i.blendEquation(i.FUNC_ADD),u=100,E=100),Ye)switch(C){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,y=null,P=null,R=null,w.set(0,0,0),N=0,m=C,S=Ye}return}j=j||te,K=K||ie,ge=ge||fe,(te!==u||j!==E)&&(i.blendEquationSeparate(ft[te],ft[j]),u=te,E=j),(ie!==b||fe!==y||K!==P||ge!==R)&&(i.blendFuncSeparate(A[ie],A[fe],A[K],A[ge]),b=ie,y=fe,P=K,R=ge),(Ue.equals(w)===!1||je!==N)&&(i.blendColor(Ue.r,Ue.g,Ue.b,je),w.copy(Ue),N=je),m=C,S=!1}function Ie(C,te){C.side===2?me(i.CULL_FACE):Z(i.CULL_FACE);let ie=C.side===1;te&&(ie=!ie),Pe(ie),C.blending===1&&C.transparent===!1?Qe(0):Qe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const fe=C.stencilWrite;o.setTest(fe),fe&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),xe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(C){M!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),M=C)}function ve(C){C!==0?(Z(i.CULL_FACE),C!==D&&(C===1?i.cullFace(i.BACK):C===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),D=C}function et(C){C!==G&&(X&&i.lineWidth(C),G=C)}function xe(C,te,ie){C?(Z(i.POLYGON_OFFSET_FILL),(V!==te||q!==ie)&&(i.polygonOffset(te,ie),V=te,q=ie)):me(i.POLYGON_OFFSET_FILL)}function Oe(C){C?Z(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function ut(C){C===void 0&&(C=i.TEXTURE0+Y-1),re!==C&&(i.activeTexture(C),re=C)}function at(C,te,ie){ie===void 0&&(re===null?ie=i.TEXTURE0+Y-1:ie=re);let fe=ae[ie];fe===void 0&&(fe={type:void 0,texture:void 0},ae[ie]=fe),(fe.type!==C||fe.texture!==te)&&(re!==ie&&(i.activeTexture(ie),re=ie),i.bindTexture(C,te||H[C]),fe.type=C,fe.texture=te)}function T(){const C=ae[re];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function W(){try{i.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{i.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{i.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{i.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{i.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{i.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(C){le.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),le.copy(C))}function we(C){he.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),he.copy(C))}function Ee(C,te){let ie=l.get(te);ie===void 0&&(ie=new WeakMap,l.set(te,ie));let fe=ie.get(C);fe===void 0&&(fe=i.getUniformBlockIndex(te,C.name),ie.set(C,fe))}function oe(C,te){const fe=l.get(te).get(C);c.get(te)!==fe&&(i.uniformBlockBinding(te,fe,C.__bindingPointIndex),c.set(te,fe))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},re=null,ae={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,y=null,E=null,P=null,R=null,w=new ke(0,0,0),N=0,S=!1,M=null,D=null,G=null,V=null,q=null,le.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:me,bindFramebuffer:Le,drawBuffers:ye,useProgram:He,setBlending:Qe,setMaterial:Ie,setFlipSided:Pe,setCullFace:ve,setLineWidth:et,setPolygonOffset:xe,setScissorTest:Oe,activeTexture:ut,bindTexture:at,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Se,texImage3D:ee,updateUBOMapping:Ee,uniformBlockBinding:oe,texStorage2D:ne,texStorage3D:Me,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:k,compressedTexSubImage3D:Te,scissor:ue,viewport:we,reset:Fe}}function Iu(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):Ui("canvas")}function x(T,_,F){let W=1;const $=at(T);if(($.width>F||$.height>F)&&(W=F/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const k=Math.floor(W*$.width),Te=Math.floor(W*$.height);h===void 0&&(h=g(k,Te));const ne=_?g(k,Te):h;return ne.width=k,ne.height=Te,ne.getContext("2d").drawImage(T,0,0,k,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+k+"x"+Te+")."),ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,_,F,W,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let k=_;if(_===i.RED&&(F===i.FLOAT&&(k=i.R32F),F===i.HALF_FLOAT&&(k=i.R16F),F===i.UNSIGNED_BYTE&&(k=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.R8UI),F===i.UNSIGNED_SHORT&&(k=i.R16UI),F===i.UNSIGNED_INT&&(k=i.R32UI),F===i.BYTE&&(k=i.R8I),F===i.SHORT&&(k=i.R16I),F===i.INT&&(k=i.R32I)),_===i.RG&&(F===i.FLOAT&&(k=i.RG32F),F===i.HALF_FLOAT&&(k=i.RG16F),F===i.UNSIGNED_BYTE&&(k=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RG8UI),F===i.UNSIGNED_SHORT&&(k=i.RG16UI),F===i.UNSIGNED_INT&&(k=i.RG32UI),F===i.BYTE&&(k=i.RG8I),F===i.SHORT&&(k=i.RG16I),F===i.INT&&(k=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RGB8UI),F===i.UNSIGNED_SHORT&&(k=i.RGB16UI),F===i.UNSIGNED_INT&&(k=i.RGB32UI),F===i.BYTE&&(k=i.RGB8I),F===i.SHORT&&(k=i.RGB16I),F===i.INT&&(k=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),F===i.UNSIGNED_INT&&(k=i.RGBA32UI),F===i.BYTE&&(k=i.RGBA8I),F===i.SHORT&&(k=i.RGBA16I),F===i.INT&&(k=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),_===i.RGBA){const Te=$?Li:Xe.getTransfer(W);F===i.FLOAT&&(k=i.RGBA32F),F===i.HALF_FLOAT&&(k=i.RGBA16F),F===i.UNSIGNED_BYTE&&(k=Te===Ze?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function E(T,_){let F;return T?_===null||_===1014||_===1020?F=i.DEPTH24_STENCIL8:_===1015?F=i.DEPTH32F_STENCIL8:_===1012&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===1014||_===1020?F=i.DEPTH_COMPONENT24:_===1015?F=i.DEPTH_COMPONENT32F:_===1012&&(F=i.DEPTH_COMPONENT16),F}function P(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==1003&&T.minFilter!==1006?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function R(T){const _=T.target;_.removeEventListener("dispose",R),N(_),_.isVideoTexture&&d.delete(_)}function w(T){const _=T.target;_.removeEventListener("dispose",w),M(_)}function N(T){const _=n.get(T);if(_.__webglInit===void 0)return;const F=T.source,W=f.get(F);if(W){const $=W[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(T),Object.keys(W).length===0&&f.delete(F)}n.remove(T)}function S(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const F=T.source,W=f.get(F);delete W[_.__cacheKey],a.memory.textures--}function M(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let $=0;$<_.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[W][$]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=T.textures;for(let W=0,$=F.length;W<$;W++){const k=n.get(F[W]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(F[W])}n.remove(T)}let D=0;function G(){D=0}function V(){const T=D;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),D+=1,T}function q(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function Y(T,_){const F=n.get(T);if(T.isVideoTexture&&Oe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function X(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){H(F,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function J(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){H(F,T,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function z(T,_){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Z(F,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const re={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},ae={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},pe={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Be(T,_){if(_.type===1015&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===1006||_.magFilter===1007||_.magFilter===1005||_.magFilter===1008||_.minFilter===1006||_.minFilter===1007||_.minFilter===1005||_.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,re[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,re[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,re[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ae[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ae[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===1003||_.minFilter!==1005&&_.minFilter!==1008||_.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function le(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",R));const W=_.source;let $=f.get(W);$===void 0&&($={},f.set(W,$));const k=q(_);if(k!==T.__cacheKey){$[k]===void 0&&($[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[k].usedTimes++;const Te=$[T.__cacheKey];Te!==void 0&&($[T.__cacheKey].usedTimes--,Te.usedTimes===0&&S(_)),T.__cacheKey=k,T.__webglTexture=$[k].texture}return F}function he(T,_,F){return Math.floor(Math.floor(T/F)/_)}function Ce(T,_,F,W){const k=T.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,W,_.data);else{k.sort((ee,ue)=>ee.start-ue.start);let Te=0;for(let ee=1;ee<k.length;ee++){const ue=k[Te],we=k[ee],Ee=ue.start+ue.count,oe=he(we.start,_.width,4),Fe=he(ue.start,_.width,4);we.start<=Ee+1&&oe===Fe&&he(we.start+we.count-1,_.width,4)===oe?ue.count=Math.max(ue.count,we.start+we.count-ue.start):(++Te,k[Te]=we)}k.length=Te+1;const ne=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ee=0,ue=k.length;ee<ue;ee++){const we=k[ee],Ee=Math.floor(we.start/4),oe=Math.ceil(we.count/4),Fe=Ee%_.width,C=Math.floor(Ee/_.width),te=oe,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,C),t.texSubImage2D(i.TEXTURE_2D,0,Fe,C,te,ie,F,W,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function H(T,_,F){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);const $=le(T,_),k=_.source;t.bindTexture(W,T.__webglTexture,i.TEXTURE0+F);const Te=n.get(k);if(k.version!==Te.__version||$===!0){t.activeTexture(i.TEXTURE0+F);const ne=Xe.getPrimaries(Xe.workingColorSpace),Me=_.colorSpace===tn?null:Xe.getPrimaries(_.colorSpace),Se=_.colorSpace===tn||ne===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ee=x(_.image,!1,r.maxTextureSize);ee=ut(_,ee);const ue=s.convert(_.format,_.colorSpace),we=s.convert(_.type);let Ee=y(_.internalFormat,ue,we,_.colorSpace,_.isVideoTexture);Be(W,_);let oe;const Fe=_.mipmaps,C=_.isVideoTexture!==!0,te=Te.__version===void 0||$===!0,ie=k.dataReady,fe=P(_,ee);if(_.isDepthTexture)Ee=E(_.format===1027,_.type),te&&(C?t.texStorage2D(i.TEXTURE_2D,1,Ee,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ee,ee.width,ee.height,0,ue,we,null));else if(_.isDataTexture)if(Fe.length>0){C&&te&&t.texStorage2D(i.TEXTURE_2D,fe,Ee,Fe[0].width,Fe[0].height);for(let j=0,K=Fe.length;j<K;j++)oe=Fe[j],C?ie&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,ue,we,oe.data):t.texImage2D(i.TEXTURE_2D,j,Ee,oe.width,oe.height,0,ue,we,oe.data);_.generateMipmaps=!1}else C?(te&&t.texStorage2D(i.TEXTURE_2D,fe,Ee,ee.width,ee.height),ie&&Ce(_,ee,ue,we)):t.texImage2D(i.TEXTURE_2D,0,Ee,ee.width,ee.height,0,ue,we,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){C&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ee,Fe[0].width,Fe[0].height,ee.depth);for(let j=0,K=Fe.length;j<K;j++)if(oe=Fe[j],_.format!==1023)if(ue!==null)if(C){if(ie)if(_.layerUpdates.size>0){const ge=cs(oe.width,oe.height,_.format,_.type);for(const Ue of _.layerUpdates){const je=oe.data.subarray(Ue*ge/oe.data.BYTES_PER_ELEMENT,(Ue+1)*ge/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Ue,oe.width,oe.height,1,ue,je)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ee.depth,ue,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ee,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ee.depth,ue,we,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ee,oe.width,oe.height,ee.depth,0,ue,we,oe.data)}else{C&&te&&t.texStorage2D(i.TEXTURE_2D,fe,Ee,Fe[0].width,Fe[0].height);for(let j=0,K=Fe.length;j<K;j++)oe=Fe[j],_.format!==1023?ue!==null?C?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,ue,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ee,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?ie&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,ue,we,oe.data):t.texImage2D(i.TEXTURE_2D,j,Ee,oe.width,oe.height,0,ue,we,oe.data)}else if(_.isDataArrayTexture)if(C){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ee,ee.width,ee.height,ee.depth),ie)if(_.layerUpdates.size>0){const j=cs(ee.width,ee.height,_.format,_.type);for(const K of _.layerUpdates){const ge=ee.data.subarray(K*j/ee.data.BYTES_PER_ELEMENT,(K+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ue,we,ge)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,we,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,ee.width,ee.height,ee.depth,0,ue,we,ee.data);else if(_.isData3DTexture)C?(te&&t.texStorage3D(i.TEXTURE_3D,fe,Ee,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,we,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,ee.width,ee.height,ee.depth,0,ue,we,ee.data);else if(_.isFramebufferTexture){if(te)if(C)t.texStorage2D(i.TEXTURE_2D,fe,Ee,ee.width,ee.height);else{let j=ee.width,K=ee.height;for(let ge=0;ge<fe;ge++)t.texImage2D(i.TEXTURE_2D,ge,Ee,j,K,0,ue,we,null),j>>=1,K>>=1}}else if(Fe.length>0){if(C&&te){const j=at(Fe[0]);t.texStorage2D(i.TEXTURE_2D,fe,Ee,j.width,j.height)}for(let j=0,K=Fe.length;j<K;j++)oe=Fe[j],C?ie&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ue,we,oe):t.texImage2D(i.TEXTURE_2D,j,Ee,ue,we,oe);_.generateMipmaps=!1}else if(C){if(te){const j=at(ee);t.texStorage2D(i.TEXTURE_2D,fe,Ee,j.width,j.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,we,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ue,we,ee);m(_)&&u(W),Te.__version=k.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Z(T,_,F){if(_.image.length!==6)return;const W=le(T,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const k=n.get($);if($.version!==k.__version||W===!0){t.activeTexture(i.TEXTURE0+F);const Te=Xe.getPrimaries(Xe.workingColorSpace),ne=_.colorSpace===tn?null:Xe.getPrimaries(_.colorSpace),Me=_.colorSpace===tn||Te===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let K=0;K<6;K++)!Se&&!ee?ue[K]=x(_.image[K],!0,r.maxCubemapSize):ue[K]=ee?_.image[K].image:_.image[K],ue[K]=ut(_,ue[K]);const we=ue[0],Ee=s.convert(_.format,_.colorSpace),oe=s.convert(_.type),Fe=y(_.internalFormat,Ee,oe,_.colorSpace),C=_.isVideoTexture!==!0,te=k.__version===void 0||W===!0,ie=$.dataReady;let fe=P(_,we);Be(i.TEXTURE_CUBE_MAP,_);let j;if(Se){C&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Fe,we.width,we.height);for(let K=0;K<6;K++){j=ue[K].mipmaps;for(let ge=0;ge<j.length;ge++){const Ue=j[ge];_.format!==1023?Ee!==null?C?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Ue.width,Ue.height,Ee,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Fe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Ue.width,Ue.height,Ee,oe,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Fe,Ue.width,Ue.height,0,Ee,oe,Ue.data)}}}else{if(j=_.mipmaps,C&&te){j.length>0&&fe++;const K=at(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(ee){C?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ue[K].width,ue[K].height,Ee,oe,ue[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,ue[K].width,ue[K].height,0,Ee,oe,ue[K].data);for(let ge=0;ge<j.length;ge++){const je=j[ge].image[K].image;C?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,je.width,je.height,Ee,oe,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Fe,je.width,je.height,0,Ee,oe,je.data)}}else{C?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,oe,ue[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,Ee,oe,ue[K]);for(let ge=0;ge<j.length;ge++){const Ue=j[ge];C?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Ee,oe,Ue.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Fe,Ee,oe,Ue.image[K])}}}m(_)&&u(i.TEXTURE_CUBE_MAP),k.__version=$.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function me(T,_,F,W,$,k){const Te=s.convert(F.format,F.colorSpace),ne=s.convert(F.type),Me=y(F.internalFormat,Te,ne,F.colorSpace),Se=n.get(_),ee=n.get(F);if(ee.__renderTarget=_,!Se.__hasExternalTextures){const ue=Math.max(1,_.width>>k),we=Math.max(1,_.height>>k);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,k,Me,ue,we,_.depth,0,Te,ne,null):t.texImage2D($,k,Me,ue,we,0,Te,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,ee.__webglTexture,0,et(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,ee.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(T,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const W=_.depthTexture,$=W&&W.isDepthTexture?W.type:null,k=E(_.stencilBuffer,$),Te=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=et(_);xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,k,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,T)}else{const W=_.textures;for(let $=0;$<W.length;$++){const k=W[$],Te=s.convert(k.format,k.colorSpace),ne=s.convert(k.type),Me=y(k.internalFormat,Te,ne,k.colorSpace),Se=et(_);F&&xe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Me,_.width,_.height):xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,Me,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Me,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const $=W.__webglTexture,k=et(_);if(_.depthTexture.format===1026)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===1027)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function He(T){const _=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=W}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const W=T.texture.mipmaps;W&&W.length>0?ye(_.__webglFramebuffer[0],T):ye(_.__webglFramebuffer,T)}else if(F){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),Le(_.__webglDepthbuffer[W],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,k)}}else{const W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Le(_.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(T,_,F){const W=n.get(T);_!==void 0&&me(W.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&He(T)}function A(T){const _=T.texture,F=n.get(T),W=n.get(_);T.addEventListener("dispose",w);const $=T.textures,k=T.isWebGLCubeRenderTarget===!0,Te=$.length>1;if(Te||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++),k){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let Me=0;Me<_.mipmaps.length;Me++)F.__webglFramebuffer[ne][Me]=i.createFramebuffer()}else F.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)F.__webglFramebuffer[ne]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ne=0,Me=$.length;ne<Me;ne++){const Se=n.get($[ne]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&xe(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){const Me=$[ne];F.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);const Se=s.convert(Me.format,Me.colorSpace),ee=s.convert(Me.type),ue=y(Me.internalFormat,Se,ee,Me.colorSpace,T.isXRRenderTarget===!0),we=et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Be(i.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)me(F.__webglFramebuffer[ne][Me],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me);else me(F.__webglFramebuffer[ne],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ne=0,Me=$.length;ne<Me;ne++){const Se=$[ne],ee=n.get(Se);let ue=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),Be(ue,Se),me(F.__webglFramebuffer,T,Se,i.COLOR_ATTACHMENT0+ne,ue,0),m(Se)&&u(ue)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,W.__webglTexture),Be(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)me(F.__webglFramebuffer[Me],T,_,i.COLOR_ATTACHMENT0,ne,Me);else me(F.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,ne,0);m(_)&&u(ne),t.unbindTexture()}T.depthBuffer&&He(T)}function Qe(T){const _=T.textures;for(let F=0,W=_.length;F<W;F++){const $=_[F];if(m($)){const k=b(T),Te=n.get($).__webglTexture;t.bindTexture(k,Te),u(k),t.unbindTexture()}}}const Ie=[],Pe=[];function ve(T){if(T.samples>0){if(xe(T)===!1){const _=T.textures,F=T.width,W=T.height;let $=i.COLOR_BUFFER_BIT;const k=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(T),ne=_.length>1;if(ne)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Me=T.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ee=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,F,W,0,0,F,W,$,i.NEAREST),c===!0&&(Ie.length=0,Pe.length=0,Ie.push(i.COLOR_ATTACHMENT0+Se),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ie.push(k),Pe.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ee=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function et(T){return Math.min(r.maxSamples,T.samples)}function xe(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Oe(T){const _=a.render.frame;d.get(T)!==_&&(d.set(T,_),T.update())}function ut(T,_){const F=T.colorSpace,W=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Bn&&F!==tn&&(Xe.getTransfer(F)===Ze?(W!==1023||$!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function at(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=ft,this.setupRenderTarget=A,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=me,this.useMultisampledRTT=xe}function Fu(i,e){function t(n,r=tn){let s;const a=Xe.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Nu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ou{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:Nu,fragmentShader:Bu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gu extends Gn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Ou,u={},b=t.getContextAttributes();let y=null,E=null;const P=[],R=[],w=new qe;let N=null;const S=new Lt;S.viewport=new st;const M=new Lt;M.viewport=new st;const D=[S,M],G=new so;let V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=P[H];return Z===void 0&&(Z=new or,P[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=P[H];return Z===void 0&&(Z=new or,P[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=P[H];return Z===void 0&&(Z=new or,P[H]=Z),Z.getHandSpace()};function Y(H){const Z=R.indexOf(H.inputSource);if(Z===-1)return;const me=P[Z];me!==void 0&&(me.update(H.inputSource,H.frame,l||a),me.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let H=0;H<P.length;H++){const Z=R[H];Z!==null&&(R[H]=null,P[H].disconnect(Z))}V=null,q=null,m.reset();for(const H in u)delete u[H];e.setRenderTarget(y),p=null,f=null,h=null,r=null,E=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Le=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?1027:1026,Le=b.stencil?1020:1014);const He={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(He),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new vn(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new Ws(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new vn(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(H){for(let Z=0;Z<H.removed.length;Z++){const me=H.removed[Z],Le=R.indexOf(me);Le>=0&&(R[Le]=null,P[Le].disconnect(me))}for(let Z=0;Z<H.added.length;Z++){const me=H.added[Z];let Le=R.indexOf(me);if(Le===-1){for(let He=0;He<P.length;He++)if(He>=R.length){R.push(me),Le=He;break}else if(R[He]===null){R[He]=me,Le=He;break}if(Le===-1)break}const ye=P[Le];ye&&ye.connect(me)}}const z=new I,re=new I;function ae(H,Z,me){z.setFromMatrixPosition(Z.matrixWorld),re.setFromMatrixPosition(me.matrixWorld);const Le=z.distanceTo(re),ye=Z.projectionMatrix.elements,He=me.projectionMatrix.elements,ft=ye[14]/(ye[10]-1),A=ye[14]/(ye[10]+1),Qe=(ye[9]+1)/ye[5],Ie=(ye[9]-1)/ye[5],Pe=(ye[8]-1)/ye[0],ve=(He[8]+1)/He[0],et=ft*Pe,xe=ft*ve,Oe=Le/(-Pe+ve),ut=Oe*-Pe;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ut),H.translateZ(Oe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ye[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const at=ft+Oe,T=A+Oe,_=et-ut,F=xe+(Le-ut),W=Qe*A/T*at,$=Ie*A/T*at;H.projectionMatrix.makePerspective(_,F,W,$,at,T),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function pe(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let Z=H.near,me=H.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(me=m.depthFar)),G.near=M.near=S.near=Z,G.far=M.far=S.far=me,(V!==G.near||q!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),V=G.near,q=G.far),G.layers.mask=H.layers.mask|6,S.layers.mask=G.layers.mask&3,M.layers.mask=G.layers.mask&5;const Le=H.parent,ye=G.cameras;pe(G,Le);for(let He=0;He<ye.length;He++)pe(ye[He],Le);ye.length===2?ae(G,S,M):G.projectionMatrix.copy(S.projectionMatrix),Be(H,G,Le)};function Be(H,Z,me){me===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(me.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Jn*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(H){return u[H]};let le=null;function he(H,Z){if(d=Z.getViewerPose(l||a),g=Z,d!==null){const me=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Le=!1;me.length!==G.cameras.length&&(G.cameras.length=0,Le=!0);for(let A=0;A<me.length;A++){const Qe=me[A];let Ie=null;if(p!==null)Ie=p.getViewport(Qe);else{const ve=h.getViewSubImage(f,Qe);Ie=ve.viewport,A===0&&(e.setRenderTargetTextures(E,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(E))}let Pe=D[A];Pe===void 0&&(Pe=new Lt,Pe.layers.enable(A),Pe.viewport=new st,D[A]=Pe),Pe.matrix.fromArray(Qe.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Qe.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),A===0&&(G.matrix.copy(Pe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Le===!0&&G.cameras.push(Pe)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const A=h.getDepthInformation(me[0]);A&&A.isValid&&A.texture&&m.init(A,r.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let A=0;A<me.length;A++){const Qe=me[A].camera;if(Qe){let Ie=u[Qe];Ie||(Ie=new Xs,u[Qe]=Ie);const Pe=h.getCameraImage(Qe);Ie.sourceTexture=Pe}}}}for(let me=0;me<P.length;me++){const Le=R[me],ye=P[me];Le!==null&&ye!==void 0&&ye.update(Le,Z,l||a)}le&&le(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ce=new Ks;Ce.setAnimationLoop(he),this.setAnimationLoop=function(H){le=H},this.dispose=function(){}}}const dn=new zt,zu=new it;function Vu(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,zs(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,b,y,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,E)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,b,y):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===1&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===1&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const b=e.get(u),y=b.envMap,E=b.envMapRotation;y&&(m.envMap.value=y,dn.copy(E),dn.x*=-1,dn.y*=-1,dn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(dn.y*=-1,dn.z*=-1),m.envMapRotation.value.setFromMatrix4(zu.makeRotationFromEuler(dn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,b,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===1&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const b=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hu(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const E=y.program;n.uniformBlockBinding(b,E)}function l(b,y){let E=r[b.id];E===void 0&&(g(b),E=d(b),r[b.id]=E,b.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(b,P);const R=e.render.frame;s[b.id]!==R&&(f(b),s[b.id]=R)}function d(b){const y=h();b.__bindingPointIndex=y;const E=i.createBuffer(),P=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=r[b.id],E=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,w=E.length;R<w;R++){const N=Array.isArray(E[R])?E[R]:[E[R]];for(let S=0,M=N.length;S<M;S++){const D=N[S];if(p(D,R,S,P)===!0){const G=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let Y=0;Y<V.length;Y++){const X=V[Y],J=x(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,G+q,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,y,E,P){const R=b.value,w=y+"_"+E;if(P[w]===void 0)return typeof R=="number"||typeof R=="boolean"?P[w]=R:P[w]=R.clone(),!0;{const N=P[w];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return P[w]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(b){const y=b.uniforms;let E=0;const P=16;for(let w=0,N=y.length;w<N;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,D=S.length;M<D;M++){const G=S[M],V=Array.isArray(G.value)?G.value:[G.value];for(let q=0,Y=V.length;q<Y;q++){const X=V[q],J=x(X),z=E%P,re=z%J.boundary,ae=z+re;E+=re,ae!==0&&P-ae<J.storage&&(E+=P-ae),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=J.storage}}}const R=E%P;return R>0&&(E+=P-R),b.__size=E,b.__cache={},this}function x(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class ku{constructor(e={}){const{canvas:t=Ea(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1;this._outputColorSpace=Dt;let R=0,w=0,N=null,S=-1,M=null;const D=new st,G=new st;let V=null;const q=new ke(0);let Y=0,X=t.width,J=t.height,z=1,re=null,ae=null;const pe=new st(0,0,X,J),Be=new st(0,0,X,J);let le=!1;const he=new Ar;let Ce=!1,H=!1;const Z=new it,me=new I,Le=new st,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function ft(){return N===null?z:1}let A=n;function Qe(v,L){return t.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sr}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",j,!1),A===null){const L="webgl2";if(A=Qe(L,v),A===null)throw Qe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ie,Pe,ve,et,xe,Oe,ut,at,T,_,F,W,$,k,Te,ne,Me,Se,ee,ue,we,Ee,oe,Fe;function C(){Ie=new Qc(A),Ie.init(),Ee=new Fu(A,Ie),Pe=new qc(A,Ie,e,Ee),ve=new Uu(A,Ie),Pe.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),et=new n1(A),xe=new Mu,Oe=new Iu(A,Ie,ve,xe,Pe,Ee,et),ut=new Kc(E),at=new Jc(E),T=new oo(A),oe=new Wc(A,T),_=new e1(A,T,et,oe),F=new r1(A,_,T,et),ee=new i1(A,Pe,Oe),ne=new Yc(xe),W=new xu(E,ut,at,Ie,Pe,oe,ne),$=new Vu(E,xe),k=new Eu,Te=new wu(Ie),Se=new kc(E,ut,at,ve,F,p,c),Me=new Du(E,F,Pe),Fe=new Hu(A,et,Pe,ve),ue=new Xc(A,Ie,et),we=new t1(A,Ie,et),et.programs=W.programs,E.capabilities=Pe,E.extensions=Ie,E.properties=xe,E.renderLists=k,E.shadowMap=Me,E.state=ve,E.info=et}C();const te=new Gu(E,A);this.xr=te,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=Ie.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ie.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(v){v!==void 0&&(z=v,this.setSize(X,J,!1))},this.getSize=function(v){return v.set(X,J)},this.setSize=function(v,L,B=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,J=L,t.width=Math.floor(v*z),t.height=Math.floor(L*z),B===!0&&(t.style.width=v+"px",t.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(X*z,J*z).floor()},this.setDrawingBufferSize=function(v,L,B){X=v,J=L,z=B,t.width=Math.floor(v*B),t.height=Math.floor(L*B),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(pe)},this.setViewport=function(v,L,B,O){v.isVector4?pe.set(v.x,v.y,v.z,v.w):pe.set(v,L,B,O),ve.viewport(D.copy(pe).multiplyScalar(z).round())},this.getScissor=function(v){return v.copy(Be)},this.setScissor=function(v,L,B,O){v.isVector4?Be.set(v.x,v.y,v.z,v.w):Be.set(v,L,B,O),ve.scissor(G.copy(Be).multiplyScalar(z).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(v){ve.setScissorTest(le=v)},this.setOpaqueSort=function(v){re=v},this.setTransparentSort=function(v){ae=v},this.getClearColor=function(v){return v.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,B=!0){let O=0;if(v){let U=!1;if(N!==null){const Q=N.texture.format;U=Q===1033||Q===1031||Q===1029}if(U){const Q=N.texture.type,ce=Q===1009||Q===1014||Q===1012||Q===1020||Q===1017||Q===1018,_e=Se.getClearColor(),de=Se.getClearAlpha(),Re=_e.r,De=_e.g,Ae=_e.b;ce?(g[0]=Re,g[1]=De,g[2]=Ae,g[3]=de,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=Re,x[1]=De,x[2]=Ae,x[3]=de,A.clearBufferiv(A.COLOR,0,x))}else O|=A.COLOR_BUFFER_BIT}L&&(O|=A.DEPTH_BUFFER_BIT),B&&(O|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",j,!1),Se.dispose(),k.dispose(),Te.dispose(),xe.dispose(),ut.dispose(),at.dispose(),F.dispose(),oe.dispose(),Fe.dispose(),W.dispose(),te.dispose(),te.removeEventListener("sessionstart",Ot),te.removeEventListener("sessionend",wr),sn.stop()};function ie(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const v=et.autoReset,L=Me.enabled,B=Me.autoUpdate,O=Me.needsUpdate,U=Me.type;C(),et.autoReset=v,Me.enabled=L,Me.autoUpdate=B,Me.needsUpdate=O,Me.type=U}function j(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function K(v){const L=v.target;L.removeEventListener("dispose",K),ge(L)}function ge(v){Ue(v),xe.remove(v)}function Ue(v){const L=xe.get(v).programs;L!==void 0&&(L.forEach(function(B){W.releaseProgram(B)}),v.isShaderMaterial&&W.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,B,O,U,Q){L===null&&(L=ye);const ce=U.isMesh&&U.matrixWorld.determinant()<0,_e=ea(v,L,B,O,U);ve.setMaterial(O,ce);let de=B.index,Re=1;if(O.wireframe===!0){if(de=_.getWireframeAttribute(B),de===void 0)return;Re=2}const De=B.drawRange,Ae=B.attributes.position;let ze=De.start*Re,Ke=(De.start+De.count)*Re;Q!==null&&(ze=Math.max(ze,Q.start*Re),Ke=Math.min(Ke,(Q.start+Q.count)*Re)),de!==null?(ze=Math.max(ze,0),Ke=Math.min(Ke,de.count)):Ae!=null&&(ze=Math.max(ze,0),Ke=Math.min(Ke,Ae.count));const rt=Ke-ze;if(rt<0||rt===1/0)return;oe.setup(U,O,_e,B,de);let Je,$e=ue;if(de!==null&&(Je=T.get(de),$e=we,$e.setIndex(Je)),U.isMesh)O.wireframe===!0?(ve.setLineWidth(O.wireframeLinewidth*ft()),$e.setMode(A.LINES)):$e.setMode(A.TRIANGLES);else if(U.isLine){let be=O.linewidth;be===void 0&&(be=1),ve.setLineWidth(be*ft()),U.isLineSegments?$e.setMode(A.LINES):U.isLineLoop?$e.setMode(A.LINE_LOOP):$e.setMode(A.LINE_STRIP)}else U.isPoints?$e.setMode(A.POINTS):U.isSprite&&$e.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))$e.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const be=U._multiDrawStarts,tt=U._multiDrawCounts,We=U._multiDrawCount,yt=de?T.get(de).bytesPerElement:1,Mn=xe.get(O).currentProgram.getUniforms();for(let At=0;At<We;At++)Mn.setValue(A,"_gl_DrawID",At),$e.render(be[At]/yt,tt[At])}else if(U.isInstancedMesh)$e.renderInstances(ze,rt,U.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,tt=Math.min(B.instanceCount,be);$e.renderInstances(ze,rt,tt)}else $e.render(ze,rt)};function je(v,L,B){v.transparent===!0&&v.side===2&&v.forceSinglePass===!1?(v.side=1,v.needsUpdate=!0,si(v,L,B),v.side=0,v.needsUpdate=!0,si(v,L,B),v.side=2):si(v,L,B)}this.compile=function(v,L,B=null){B===null&&(B=v),u=Te.get(B),u.init(L),y.push(u),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),v!==B&&v.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const O=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){const _e=Q[ce];je(_e,B,U),O.add(_e)}else je(Q,B,U),O.add(Q)}),u=y.pop(),O},this.compileAsync=function(v,L,B=null){const O=this.compile(v,L,B);return new Promise(U=>{function Q(){if(O.forEach(function(ce){xe.get(ce).currentProgram.isReady()&&O.delete(ce)}),O.size===0){U(v);return}setTimeout(Q,10)}Ie.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ye=null;function Vt(v){Ye&&Ye(v)}function Ot(){sn.stop()}function wr(){sn.start()}const sn=new Ks;sn.setAnimationLoop(Vt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(v){Ye=v,te.setAnimationLoop(v),v===null?sn.stop():sn.start()},te.addEventListener("sessionstart",Ot),te.addEventListener("sessionend",wr),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(L),L=te.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,L,N),u=Te.get(v,y.length),u.init(L),y.push(u),Z.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),he.setFromProjectionMatrix(Z,2e3,L.reversedDepth),H=this.localClippingEnabled,Ce=ne.init(this.clippingPlanes,H),m=k.get(v,b.length),m.init(),b.push(m),te.enabled===!0&&te.isPresenting===!0){const Q=E.xr.getDepthSensingMesh();Q!==null&&Oi(Q,L,-1/0,E.sortObjects)}Oi(v,L,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(re,ae),He=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,He&&Se.addToRenderList(m,v),this.info.render.frame++,Ce===!0&&ne.beginShadows();const B=u.state.shadowsArray;Me.render(B,v,L),Ce===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,U=m.transmissive;if(u.setupLights(),L.isArrayCamera){const Q=L.cameras;if(U.length>0)for(let ce=0,_e=Q.length;ce<_e;ce++){const de=Q[ce];Pr(O,U,v,de)}He&&Se.render(v);for(let ce=0,_e=Q.length;ce<_e;ce++){const de=Q[ce];Cr(m,v,de,de.viewport)}}else U.length>0&&Pr(O,U,v,L),He&&Se.render(v),Cr(m,v,L);N!==null&&w===0&&(Oe.updateMultisampleRenderTarget(N),Oe.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(E,v,L),oe.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(u=y[y.length-1],Ce===!0&&ne.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Oi(v,L,B,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||he.intersectsSprite(v)){O&&Le.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);const ce=F.update(v),_e=v.material;_e.visible&&m.push(v,ce,_e,B,Le.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||he.intersectsObject(v))){const ce=F.update(v),_e=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Le.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Le.copy(ce.boundingSphere.center)),Le.applyMatrix4(v.matrixWorld).applyMatrix4(Z)),Array.isArray(_e)){const de=ce.groups;for(let Re=0,De=de.length;Re<De;Re++){const Ae=de[Re],ze=_e[Ae.materialIndex];ze&&ze.visible&&m.push(v,ce,ze,B,Le.z,Ae)}}else _e.visible&&m.push(v,ce,_e,B,Le.z,null)}}const Q=v.children;for(let ce=0,_e=Q.length;ce<_e;ce++)Oi(Q[ce],L,B,O)}function Cr(v,L,B,O){const U=v.opaque,Q=v.transmissive,ce=v.transparent;u.setupLightsView(B),Ce===!0&&ne.setGlobalState(E.clippingPlanes,B),O&&ve.viewport(D.copy(O)),U.length>0&&ri(U,L,B),Q.length>0&&ri(Q,L,B),ce.length>0&&ri(ce,L,B),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Pr(v,L,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[O.id]===void 0&&(u.state.transmissionRenderTarget[O.id]=new vn(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const Q=u.state.transmissionRenderTarget[O.id],ce=O.viewport||D;Q.setSize(ce.z*E.transmissionResolutionScale,ce.w*E.transmissionResolutionScale);const _e=E.getRenderTarget(),de=E.getActiveCubeFace(),Re=E.getActiveMipmapLevel();E.setRenderTarget(Q),E.getClearColor(q),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),He&&Se.render(B);const De=E.toneMapping;E.toneMapping=0;const Ae=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),u.setupLightsView(O),Ce===!0&&ne.setGlobalState(E.clippingPlanes,O),ri(v,B,O),Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ke=0,rt=L.length;Ke<rt;Ke++){const Je=L[Ke],$e=Je.object,be=Je.geometry,tt=Je.material,We=Je.group;if(tt.side===2&&$e.layers.test(O.layers)){const yt=tt.side;tt.side=1,tt.needsUpdate=!0,Dr($e,B,O,be,tt,We),tt.side=yt,tt.needsUpdate=!0,ze=!0}}ze===!0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q))}E.setRenderTarget(_e,de,Re),E.setClearColor(q,Y),Ae!==void 0&&(O.viewport=Ae),E.toneMapping=De}function ri(v,L,B){const O=L.isScene===!0?L.overrideMaterial:null;for(let U=0,Q=v.length;U<Q;U++){const ce=v[U],_e=ce.object,de=ce.geometry,Re=ce.group;let De=ce.material;De.allowOverride===!0&&O!==null&&(De=O),_e.layers.test(B.layers)&&Dr(_e,L,B,de,De,Re)}}function Dr(v,L,B,O,U,Q){v.onBeforeRender(E,L,B,O,U,Q),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(E,L,B,O,v,Q),U.transparent===!0&&U.side===2&&U.forceSinglePass===!1?(U.side=1,U.needsUpdate=!0,E.renderBufferDirect(B,L,O,U,v,Q),U.side=0,U.needsUpdate=!0,E.renderBufferDirect(B,L,O,U,v,Q),U.side=2):E.renderBufferDirect(B,L,O,U,v,Q),v.onAfterRender(E,L,B,O,U,Q)}function si(v,L,B){L.isScene!==!0&&(L=ye);const O=xe.get(v),U=u.state.lights,Q=u.state.shadowsArray,ce=U.state.version,_e=W.getParameters(v,U.state,Q,L,B),de=W.getProgramCacheKey(_e);let Re=O.programs;O.environment=v.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(v.isMeshStandardMaterial?at:ut).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",K),Re=new Map,O.programs=Re);let De=Re.get(de);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===ce)return Ur(v,_e),De}else _e.uniforms=W.getUniforms(v),v.onBeforeCompile(_e,E),De=W.acquireProgram(_e,de),Re.set(de,De),O.uniforms=_e.uniforms;const Ae=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=ne.uniform),Ur(v,_e),O.needsLights=na(v),O.lightsStateVersion=ce,O.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=De,O.uniformsList=null,De}function Lr(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Di.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Ur(v,L){const B=xe.get(v);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function ea(v,L,B,O,U){L.isScene!==!0&&(L=ye),Oe.resetTextureUnits();const Q=L.fog,ce=O.isMeshStandardMaterial?L.environment:null,_e=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Bn,de=(O.isMeshStandardMaterial?at:ut).get(O.envMap||ce),Re=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ae=!!B.morphAttributes.position,ze=!!B.morphAttributes.normal,Ke=!!B.morphAttributes.color;let rt=0;O.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(rt=E.toneMapping);const Je=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$e=Je!==void 0?Je.length:0,be=xe.get(O),tt=u.state.lights;if(Ce===!0&&(H===!0||v!==M)){const vt=v===M&&O.id===S;ne.setState(O,v,vt)}let We=!1;O.version===be.__version?(be.needsLights&&be.lightsStateVersion!==tt.state.version||be.outputColorSpace!==_e||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==de||O.fog===!0&&be.fog!==Q||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ne.numPlanes||be.numIntersection!==ne.numIntersection)||be.vertexAlphas!==Re||be.vertexTangents!==De||be.morphTargets!==Ae||be.morphNormals!==ze||be.morphColors!==Ke||be.toneMapping!==rt||be.morphTargetsCount!==$e)&&(We=!0):(We=!0,be.__version=O.version);let yt=be.currentProgram;We===!0&&(yt=si(O,L,U));let Mn=!1,At=!1,Hn=!1;const nt=yt.getUniforms(),wt=be.uniforms;if(ve.useProgram(yt.program)&&(Mn=!0,At=!0,Hn=!0),O.id!==S&&(S=O.id,At=!0),Mn||M!==v){ve.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),nt.setValue(A,"projectionMatrix",v.projectionMatrix),nt.setValue(A,"viewMatrix",v.matrixWorldInverse);const St=nt.map.cameraPosition;St!==void 0&&St.setValue(A,me.setFromMatrixPosition(v.matrixWorld)),Pe.logarithmicDepthBuffer&&nt.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&nt.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,At=!0,Hn=!0)}if(U.isSkinnedMesh){nt.setOptional(A,U,"bindMatrix"),nt.setOptional(A,U,"bindMatrixInverse");const vt=U.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),nt.setValue(A,"boneTexture",vt.boneTexture,Oe))}U.isBatchedMesh&&(nt.setOptional(A,U,"batchingTexture"),nt.setValue(A,"batchingTexture",U._matricesTexture,Oe),nt.setOptional(A,U,"batchingIdTexture"),nt.setValue(A,"batchingIdTexture",U._indirectTexture,Oe),nt.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&nt.setValue(A,"batchingColorTexture",U._colorsTexture,Oe));const Ct=B.morphAttributes;if((Ct.position!==void 0||Ct.normal!==void 0||Ct.color!==void 0)&&ee.update(U,B,yt),(At||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,nt.setValue(A,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(wt.envMap.value=de,wt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(wt.envMapIntensity.value=L.environmentIntensity),At&&(nt.setValue(A,"toneMappingExposure",E.toneMappingExposure),be.needsLights&&ta(wt,Hn),Q&&O.fog===!0&&$.refreshFogUniforms(wt,Q),$.refreshMaterialUniforms(wt,O,z,J,u.state.transmissionRenderTarget[v.id]),Di.upload(A,Lr(be),wt,Oe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Di.upload(A,Lr(be),wt,Oe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&nt.setValue(A,"center",U.center),nt.setValue(A,"modelViewMatrix",U.modelViewMatrix),nt.setValue(A,"normalMatrix",U.normalMatrix),nt.setValue(A,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const vt=O.uniformsGroups;for(let St=0,Gi=vt.length;St<Gi;St++){const an=vt[St];Fe.update(an,yt),Fe.bind(an,yt)}}return yt}function ta(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function na(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,L,B){const O=xe.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),xe.get(v.texture).__webglTexture=L,xe.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:B,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const B=xe.get(v);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};const ia=A.createFramebuffer();this.setRenderTarget=function(v,L=0,B=0){N=v,R=L,w=B;let O=!0,U=null,Q=!1,ce=!1;if(v){const de=xe.get(v);if(de.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(A.FRAMEBUFFER,null),O=!1;else if(de.__webglFramebuffer===void 0)Oe.setupRenderTarget(v);else if(de.__hasExternalTextures)Oe.rebindTextures(v,xe.get(v.texture).__webglTexture,xe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ae=v.depthTexture;if(de.__boundDepthTexture!==Ae){if(Ae!==null&&xe.has(Ae)&&(v.width!==Ae.image.width||v.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(v)}}const Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ce=!0);const De=xe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(De[L])?U=De[L][B]:U=De[L],Q=!0):v.samples>0&&Oe.useMultisampledRTT(v)===!1?U=xe.get(v).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[B]:U=De,D.copy(v.viewport),G.copy(v.scissor),V=v.scissorTest}else D.copy(pe).multiplyScalar(z).floor(),G.copy(Be).multiplyScalar(z).floor(),V=le;if(B!==0&&(U=ia),ve.bindFramebuffer(A.FRAMEBUFFER,U)&&O&&ve.drawBuffers(v,U),ve.viewport(D),ve.scissor(G),ve.setScissorTest(V),Q){const de=xe.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,B)}else if(ce){const de=L;for(let Re=0;Re<v.textures.length;Re++){const De=xe.get(v.textures[Re]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Re,De.__webglTexture,B,de)}}else if(v!==null&&B!==0){const de=xe.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,de.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(v,L,B,O,U,Q,ce,_e=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=xe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de){ve.bindFramebuffer(A.FRAMEBUFFER,de);try{const Re=v.textures[_e],De=Re.format,Ae=Re.type;if(!Pe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-O&&B>=0&&B<=v.height-U&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+_e),A.readPixels(L,B,O,U,Ee.convert(De),Ee.convert(Ae),Q))}finally{const Re=N!==null?xe.get(N).__webglFramebuffer:null;ve.bindFramebuffer(A.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(v,L,B,O,U,Q,ce,_e=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=xe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de)if(L>=0&&L<=v.width-O&&B>=0&&B<=v.height-U){ve.bindFramebuffer(A.FRAMEBUFFER,de);const Re=v.textures[_e],De=Re.format,Ae=Re.type;if(!Pe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+_e),A.readPixels(L,B,O,U,Ee.convert(De),Ee.convert(Ae),0);const Ke=N!==null?xe.get(N).__webglFramebuffer:null;ve.bindFramebuffer(A.FRAMEBUFFER,Ke);const rt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Ta(A,rt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(ze),A.deleteSync(rt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,B=0){const O=Math.pow(2,-B),U=Math.floor(v.image.width*O),Q=Math.floor(v.image.height*O),ce=L!==null?L.x:0,_e=L!==null?L.y:0;Oe.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,ce,_e,U,Q),ve.unbindTexture()};const ra=A.createFramebuffer(),sa=A.createFramebuffer();this.copyTextureToTexture=function(v,L,B=null,O=null,U=0,Q=null){Q===null&&(U!==0?(Qn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ce,_e,de,Re,De,Ae,ze,Ke,rt;const Je=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(B!==null)ce=B.max.x-B.min.x,_e=B.max.y-B.min.y,de=B.isBox3?B.max.z-B.min.z:1,Re=B.min.x,De=B.min.y,Ae=B.isBox3?B.min.z:0;else{const Ct=Math.pow(2,-U);ce=Math.floor(Je.width*Ct),_e=Math.floor(Je.height*Ct),v.isDataArrayTexture?de=Je.depth:v.isData3DTexture?de=Math.floor(Je.depth*Ct):de=1,Re=0,De=0,Ae=0}O!==null?(ze=O.x,Ke=O.y,rt=O.z):(ze=0,Ke=0,rt=0);const $e=Ee.convert(L.format),be=Ee.convert(L.type);let tt;L.isData3DTexture?(Oe.setTexture3D(L,0),tt=A.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Oe.setTexture2DArray(L,0),tt=A.TEXTURE_2D_ARRAY):(Oe.setTexture2D(L,0),tt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);const We=A.getParameter(A.UNPACK_ROW_LENGTH),yt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Mn=A.getParameter(A.UNPACK_SKIP_PIXELS),At=A.getParameter(A.UNPACK_SKIP_ROWS),Hn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Je.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Je.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Re),A.pixelStorei(A.UNPACK_SKIP_ROWS,De),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ae);const nt=v.isDataArrayTexture||v.isData3DTexture,wt=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const Ct=xe.get(v),vt=xe.get(L),St=xe.get(Ct.__renderTarget),Gi=xe.get(vt.__renderTarget);ve.bindFramebuffer(A.READ_FRAMEBUFFER,St.__webglFramebuffer),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let an=0;an<de;an++)nt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xe.get(v).__webglTexture,U,Ae+an),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xe.get(L).__webglTexture,Q,rt+an)),A.blitFramebuffer(Re,De,ce,_e,ze,Ke,ce,_e,A.DEPTH_BUFFER_BIT,A.NEAREST);ve.bindFramebuffer(A.READ_FRAMEBUFFER,null),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||xe.has(v)){const Ct=xe.get(v),vt=xe.get(L);ve.bindFramebuffer(A.READ_FRAMEBUFFER,ra),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,sa);for(let St=0;St<de;St++)nt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ct.__webglTexture,U,Ae+St):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ct.__webglTexture,U),wt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,vt.__webglTexture,Q,rt+St):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,vt.__webglTexture,Q),U!==0?A.blitFramebuffer(Re,De,ce,_e,ze,Ke,ce,_e,A.COLOR_BUFFER_BIT,A.NEAREST):wt?A.copyTexSubImage3D(tt,Q,ze,Ke,rt+St,Re,De,ce,_e):A.copyTexSubImage2D(tt,Q,ze,Ke,Re,De,ce,_e);ve.bindFramebuffer(A.READ_FRAMEBUFFER,null),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else wt?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(tt,Q,ze,Ke,rt,ce,_e,de,$e,be,Je.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(tt,Q,ze,Ke,rt,ce,_e,de,$e,Je.data):A.texSubImage3D(tt,Q,ze,Ke,rt,ce,_e,de,$e,be,Je):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Q,ze,Ke,ce,_e,$e,be,Je.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Q,ze,Ke,Je.width,Je.height,$e,Je.data):A.texSubImage2D(A.TEXTURE_2D,Q,ze,Ke,ce,_e,$e,be,Je);A.pixelStorei(A.UNPACK_ROW_LENGTH,We),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,yt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Mn),A.pixelStorei(A.UNPACK_SKIP_ROWS,At),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Hn),Q===0&&L.generateMipmaps&&A.generateMipmap(tt),ve.unbindTexture()},this.initRenderTarget=function(v){xe.get(v).__webglFramebuffer===void 0&&Oe.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Oe.setTextureCube(v,0):v.isData3DTexture?Oe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Oe.setTexture2DArray(v,0):Oe.setTexture2D(v,0),ve.unbindTexture()},this.resetState=function(){R=0,w=0,N=null,ve.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Wu=[[[180,-16.07],[180,-16.56],[179.36,-16.8],[178.73,-17.01],[178.6,-16.64],[180,-16.07]],[[178.13,-17.5],[178.37,-17.34],[178.72,-17.63],[178.55,-18.15],[177.93,-18.29],[177.38,-18.16],[177.29,-17.72],[177.67,-17.38],[178.13,-17.5]],[[-179.79,-16.02],[-179.92,-16.5],[-180,-16.56],[-180,-16.07],[-179.79,-16.02]],[[33.9,-.95],[34.07,-1.06],[37.7,-3.1],[37.77,-3.68],[39.2,-4.68],[38.74,-5.91],[38.8,-6.48],[39.44,-6.84],[39.19,-8.49],[40.32,-10.32],[39.52,-10.9],[36.51,-11.72],[35.31,-11.44],[34.56,-11.52],[33.74,-9.42],[30.74,-8.34],[29.62,-6.52],[29.34,-4.5],[30.75,-3.36],[30.47,-2.41],[30.76,-2.29],[30.82,-1.7],[30.42,-1.13],[33.9,-.95]],[[-8.67,27.66],[-8.69,25.88],[-11.97,25.93],[-11.94,23.37],[-12.87,23.28],[-13.12,22.77],[-12.93,21.33],[-16.85,21.33],[-17.06,21],[-17.02,21.42],[-17,21.42],[-14.75,21.5],[-13.89,23.69],[-12.5,24.77],[-11.39,26.88],[-8.79,27.12],[-8.82,27.66],[-8.67,27.66]],[[-122.84,49],[-125.62,50.42],[-127.44,50.83],[-127.99,51.72],[-127.85,52.33],[-129.13,52.76],[-129.31,53.56],[-130.51,54.29],[-130.01,55.92],[-131.71,56.55],[-132.73,57.69],[-133.36,58.41],[-135.48,59.79],[-136.48,59.46],[-137.45,58.91],[-138.34,59.56],[-139.04,60],[-140.01,60.28],[-141,60.31],[-140.99,66],[-140.99,69.71],[-136.5,68.9],[-135.63,69.32],[-134.41,69.63],[-132.93,69.51],[-131.43,69.94],[-129.79,70.19],[-129.11,69.78],[-128.36,70.01],[-128.14,70.48],[-127.45,70.38],[-125.76,69.48],[-124.42,70.16],[-124.29,69.4],[-121.47,69.8],[-115.25,68.91],[-113.9,68.4],[-115.3,67.9],[-113.5,67.69],[-110.8,67.81],[-109.95,67.98],[-108.88,67.38],[-107.79,67.89],[-108.81,68.31],[-108.17,68.65],[-106.95,68.7],[-106.15,68.8],[-105.34,68.56],[-104.34,68.02],[-103.22,68.1],[-101.45,67.65],[-99.9,67.81],[-98.44,67.78],[-98.56,68.4],[-97.67,68.58],[-96.12,68.24],[-96.13,67.29],[-95.49,68.09],[-94.68,68.06],[-94.23,69.07],[-95.3,69.69],[-96.47,70.09],[-96.39,71.19],[-95.21,71.92],[-93.89,71.76],[-92.88,71.32],[-91.52,70.19],[-92.41,69.7],[-90.55,69.5],[-90.55,68.47],[-89.22,69.26],[-88.02,68.62],[-88.32,67.87],[-87.35,67.2],[-86.31,67.92],[-85.58,68.78],[-85.52,69.88],[-84.1,69.81],[-82.62,69.66],[-81.28,69.16],[-81.22,68.67],[-81.96,68.13],[-81.26,67.6],[-81.39,67.11],[-83.34,66.41],[-84.74,66.26],[-85.77,66.56],[-87.32,64.78],[-88.48,64.1],[-89.91,64.03],[-90.7,63.61],[-90.77,62.96],[-91.93,62.84],[-93.16,62.02],[-94.24,60.9],[-94.63,60.11],[-94.68,58.95],[-93.22,58.78],[-92.76,57.85],[-92.3,57.09],[-90.9,57.28],[-85.01,55.3],[-83.36,55.24],[-82.27,55.15],[-82.44,54.28],[-82.13,53.28],[-81.4,52.16],[-79.91,51.21],[-79.14,51.53],[-78.6,52.56],[-79.12,54.14],[-79.83,54.67],[-78.23,55.14],[-77.1,55.84],[-76.54,56.53],[-76.62,57.2],[-77.3,58.05],[-78.52,58.8],[-77.34,59.85],[-77.77,60.76],[-78.11,62.32],[-73.84,62.44],[-71.37,61.14],[-69.59,61.06],[-69.62,60.22],[-69.29,58.96],[-68.37,58.8],[-67.65,58.21],[-66.2,58.77],[-65.25,59.87],[-64.58,60.34],[-61.4,56.97],[-61.8,56.34],[-60.47,55.78],[-59.57,55.2],[-57.98,54.95],[-57.33,54.63],[-56.94,53.78],[-56.16,53.65],[-55.76,53.27],[-55.68,52.15],[-60.03,50.24],[-66.4,50.23],[-67.24,49.51],[-68.51,49.07],[-69.95,47.74],[-71.1,46.82],[-70.26,46.99],[-68.65,48.3],[-66.55,49.13],[-65.06,49.23],[-64.17,48.74],[-65.12,48.07],[-64.8,46.99],[-64.47,46.24],[-63.17,45.74],[-61.52,45.88],[-60.52,47.01],[-60.45,46.28],[-59.8,45.92],[-65.36,43.55],[-66.12,43.62],[-66.16,44.47],[-64.43,45.29],[-66.03,45.26],[-67.14,45.14],[-67.79,45.7],[-67.79,47.07],[-69.24,47.45],[-70.66,45.46],[-71.51,45.01],[-73.35,45.01],[-74.87,45],[-76.82,43.63],[-77.74,43.63],[-78.72,43.63],[-79.17,43.47],[-78.94,42.86],[-82.44,41.68],[-83.14,41.98],[-82.14,43.57],[-82.34,44.44],[-82.55,45.35],[-84.88,46.9],[-88.38,48.3],[-91.64,48.14],[-94.33,48.67],[-94.64,48.84],[-94.82,49.39],[-95.16,49.38],[-95.16,49],[-122.84,49]],[[-83.99,62.45],[-83.25,62.91],[-81.88,62.9],[-81.9,62.71],[-83.07,62.16],[-83.77,62.18],[-83.99,62.45]],[[-79.78,72.8],[-80.88,73.33],[-80.83,73.69],[-80.35,73.76],[-78.06,73.65],[-76.34,73.1],[-76.25,72.83],[-79.78,72.8]],[[-80.32,62.09],[-79.93,62.39],[-79.52,62.36],[-79.27,62.16],[-79.66,61.63],[-80.32,62.09]],[[-93.61,74.98],[-94.16,74.59],[-95.61,74.67],[-96.82,74.93],[-96.29,75.38],[-94.85,75.65],[-93.98,75.3],[-93.61,74.98]],[[-96.75,78.77],[-95.56,78.42],[-95.83,78.06],[-97.31,77.85],[-98.12,78.08],[-98.55,78.46],[-98.63,78.87],[-97.34,78.83],[-96.75,78.77]],[[-88.15,74.39],[-89.76,74.52],[-92.42,74.84],[-92.77,75.39],[-92.89,75.88],[-93.89,76.32],[-95.96,76.44],[-97.12,76.75],[-96.75,77.16],[-91.61,76.78],[-90.74,76.45],[-90.97,76.07],[-89.82,75.85],[-89.19,75.61],[-81.13,75.71],[-80.06,75.34],[-79.83,74.92],[-80.46,74.66],[-81.95,74.44],[-88.15,74.39]],[[-111.26,78.15],[-109.85,78],[-110.19,77.7],[-112.05,77.41],[-113.53,77.73],[-112.72,78.05],[-111.26,78.15]],[[-110.96,78.8],[-109.66,78.6],[-110.88,78.41],[-112.54,78.41],[-110.96,78.8]],[[-55.6,51.32],[-56.13,50.69],[-56.8,49.81],[-56.14,50.15],[-55.47,49.94],[-55.82,49.59],[-53.48,49.25],[-53.79,48.52],[-53.09,48.69],[-52.96,48.16],[-52.65,47.54],[-53.07,46.66],[-53.52,46.62],[-54.18,46.81],[-53.96,47.63],[-54.24,47.75],[-55.4,46.88],[-56,46.92],[-55.29,47.39],[-56.25,47.63],[-57.33,47.57],[-59.27,47.6],[-59.42,47.9],[-58.8,48.25],[-59.23,48.52],[-58.39,49.13],[-57.36,50.72],[-56.74,51.29],[-55.87,51.63],[-55.41,51.59],[-55.6,51.32]],[[-83.88,65.11],[-82.79,64.77],[-81.64,64.46],[-81.55,63.98],[-80.82,64.06],[-80.1,63.73],[-80.99,63.41],[-82.55,63.65],[-83.11,64.1],[-84.1,63.57],[-85.52,63.05],[-85.87,63.64],[-87.22,63.54],[-86.35,64.04],[-86.22,64.82],[-85.88,65.74],[-83.88,65.11]],[[-78.77,72.35],[-77.82,72.75],[-75.61,72.24],[-74.23,71.77],[-74.1,71.33],[-72.24,71.56],[-71.2,70.92],[-68.79,70.53],[-67.91,70.12],[-66.97,69.19],[-68.81,68.72],[-66.45,68.07],[-64.86,67.85],[-63.42,66.93],[-61.85,66.86],[-62.16,66.16],[-63.92,65],[-65.15,65.43],[-66.72,66.39],[-68.02,66.26],[-68.14,65.69],[-65.32,64.38],[-64.67,63.39],[-65.01,62.67],[-66.28,62.95],[-68.78,63.75],[-66.17,61.93],[-68.88,62.33],[-74.83,64.68],[-74.82,64.39],[-77.71,64.23],[-78.56,64.57],[-77.9,65.31],[-76.02,65.33],[-73.96,65.45],[-74.29,65.81],[-73.94,66.31],[-72.65,67.28],[-72.93,67.73],[-73.31,68.07],[-74.84,68.55],[-76.87,68.89],[-76.23,69.15],[-78.96,70.17],[-79.49,69.87],[-81.31,69.74],[-88.68,70.41],[-89.51,70.76],[-88.47,71.22],[-89.89,71.22],[-90.21,72.24],[-89.44,73.13],[-88.41,73.54],[-85.83,73.8],[-86.56,73.16],[-85.77,72.53],[-84.85,73.34],[-82.32,73.75],[-80.6,72.72],[-80.75,72.06],[-78.77,72.35]],[[-94.5,74.13],[-92.42,74.1],[-90.51,73.86],[-94.27,72.02],[-95.41,72.06],[-96.03,72.94],[-96.02,73.44],[-95.5,73.86],[-94.5,74.13]],[[-122.85,76.12],[-119.1,77.51],[-117.57,77.5],[-116.2,77.65],[-116.34,76.88],[-117.11,76.53],[-121.5,75.9],[-122.85,76.12]],[[-132.71,54.04],[-131.75,54.12],[-132.05,52.98],[-131.18,52.18],[-133.05,53.41],[-133.24,53.85],[-133.18,54.17],[-132.71,54.04]],[[-105.49,79.3],[-103.53,79.17],[-100.83,78.8],[-100.06,78.32],[-99.67,77.91],[-105.18,78.38],[-104.21,78.68],[-105.42,78.92],[-105.49,79.3]],[[-123.51,48.51],[-124.01,48.37],[-125.66,48.83],[-127.03,49.81],[-128.06,49.99],[-128.44,50.54],[-128.36,50.77],[-125.76,50.3],[-123.51,48.51]],[[-121.54,74.45],[-120.11,74.24],[-117.56,74.19],[-116.58,73.9],[-115.51,73.48],[-116.77,73.22],[-119.22,72.52],[-120.46,71.82],[-120.46,71.38],[-123.09,70.9],[-123.62,71.34],[-125.93,71.87],[-123.94,73.68],[-124.92,74.29],[-121.54,74.45]],[[-107.82,75.85],[-106.93,76.01],[-105.88,75.97],[-105.7,75.48],[-106.31,75.01],[-109.7,74.85],[-112.22,74.42],[-113.74,74.39],[-113.87,74.72],[-111.79,75.16],[-116.31,75.04],[-117.71,75.22],[-116.35,76.2],[-115.4,76.48],[-109.07,75.47],[-110.5,76.43],[-109.58,76.79],[-108.55,76.68],[-108.21,76.2],[-107.82,75.85]],[[-106.52,73.08],[-105.4,72.67],[-104.77,71.7],[-104.46,70.99],[-102.79,70.5],[-100.98,70.02],[-101.09,69.58],[-102.73,69.5],[-102.09,69.12],[-102.43,68.75],[-104.24,68.91],[-105.96,69.18],[-113.31,68.54],[-113.85,69.01],[-115.22,69.28],[-116.11,69.17],[-117.34,69.96],[-112.42,70.37],[-117.9,70.54],[-118.43,70.91],[-116.11,71.31],[-117.66,71.3],[-119.4,71.56],[-118.56,72.31],[-117.87,72.71],[-115.19,73.31],[-114.17,73.12],[-114.67,72.65],[-112.44,72.96],[-111.05,72.45],[-109.92,72.96],[-109.01,72.63],[-108.19,71.65],[-107.69,72.07],[-108.4,73.09],[-107.52,73.24],[-106.52,73.08]],[[-100.44,72.71],[-101.54,73.36],[-100.36,73.84],[-99.16,73.63],[-97.38,73.76],[-97.12,73.47],[-98.05,72.99],[-96.54,72.56],[-96.72,71.66],[-98.36,71.27],[-102.5,72.51],[-102.48,72.83],[-100.44,72.71]],[[-106.6,73.6],[-105.26,73.64],[-104.5,73.42],[-105.38,72.76],[-106.94,73.46],[-106.6,73.6]],[[-98.5,76.72],[-97.74,76.26],[-97.7,75.74],[-98.16,75],[-99.81,74.9],[-100.88,75.06],[-100.86,75.64],[-102.5,75.56],[-102.57,76.34],[-98.5,76.72]],[[-96.02,80.6],[-95.32,80.91],[-94.3,80.98],[-94.74,81.21],[-92.41,81.26],[-91.13,80.72],[-89.45,80.51],[-87.81,80.32],[-87.02,79.66],[-85.81,79.34],[-87.19,79.04],[-89.04,78.29],[-90.8,78.22],[-92.88,78.34],[-93.95,78.75],[-93.94,79.11],[-93.15,79.38],[-94.97,79.37],[-96.08,79.71],[-96.71,80.16],[-96.02,80.6]],[[-91.59,81.89],[-85.5,82.65],[-84.26,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.31,83.13],[-72.83,83.23],[-61.85,82.63],[-61.89,82.36],[-67.66,81.5],[-65.48,81.51],[-67.84,80.9],[-69.47,80.62],[-71.18,79.8],[-76.91,79.32],[-75.53,79.2],[-76.22,79.02],[-75.39,78.53],[-79.76,77.21],[-77.89,76.78],[-80.56,76.18],[-89.49,76.47],[-89.62,76.95],[-87.77,77.18],[-88.26,77.9],[-87.65,77.97],[-84.98,77.54],[-86.34,78.18],[-87.96,78.37],[-85.09,79.35],[-86.51,79.74],[-86.93,80.25],[-84.2,80.21],[-83.41,80.1],[-81.85,80.46],[-84.1,80.58],[-87.6,80.52],[-89.37,80.86],[-91.59,81.89]],[[-75.22,67.44],[-75.87,67.15],[-76.99,67.1],[-77.24,67.59],[-76.81,68.15],[-75.9,68.29],[-75.11,68.01],[-75.1,67.58],[-75.22,67.44]],[[-96.26,69.49],[-95.65,69.11],[-96.27,68.76],[-99.8,69.4],[-98.92,69.71],[-98.22,70.14],[-96.26,69.49]],[[-64.52,49.87],[-64.17,49.96],[-62.86,49.71],[-61.84,49.29],[-61.81,49.11],[-64.52,49.87]],[[-64.01,47.04],[-63.66,46.55],[-62.94,46.42],[-62.01,46.44],[-62.5,46.03],[-62.87,45.97],[-64.14,46.39],[-64.39,46.73],[-64.01,47.04]],[[-122.84,49],[-95.16,49],[-95.16,49.38],[-94.82,49.39],[-94.64,48.84],[-94.33,48.67],[-91.64,48.14],[-88.38,48.3],[-84.88,46.9],[-82.55,45.35],[-82.34,44.44],[-82.14,43.57],[-83.12,42.08],[-82.69,41.68],[-78.94,42.86],[-79.17,43.47],[-78.72,43.63],[-77.74,43.63],[-76.82,43.63],[-74.87,45],[-73.35,45.01],[-71.51,45.01],[-70.66,45.46],[-69.24,47.45],[-67.79,47.07],[-67.79,45.7],[-67.14,45.14],[-66.96,44.81],[-70.12,43.68],[-70.82,42.34],[-70.49,41.81],[-70.08,41.78],[-70.18,42.15],[-69.88,41.92],[-69.97,41.64],[-73.71,40.93],[-72.24,41.12],[-71.94,40.93],[-73.95,40.75],[-74.18,39.71],[-74.91,38.94],[-75.53,39.5],[-75.06,38.4],[-75.38,38.02],[-75.94,37.22],[-76.03,37.26],[-75.72,37.94],[-76.23,38.32],[-76.35,39.15],[-76.54,38.72],[-76.33,38.08],[-76.99,38.24],[-76.3,37.92],[-75.73,35.55],[-76.36,34.81],[-79.06,33.49],[-81.34,31.44],[-81.49,30.73],[-81.31,30.04],[-80.06,26.88],[-80.38,25.21],[-80.68,25.08],[-81.17,25.2],[-81.33,25.64],[-81.71,25.87],[-82.86,27.89],[-82.65,28.55],[-82.93,29.1],[-83.71,29.94],[-84.1,30.09],[-85.11,29.64],[-86.4,30.4],[-89.59,30.16],[-89.41,29.16],[-93.23,29.78],[-93.85,29.71],[-94.69,29.48],[-97.14,27.83],[-97.14,25.87],[-97.53,25.84],[-98.24,26.06],[-99.02,26.37],[-100.96,29.38],[-101.66,29.78],[-102.48,29.76],[-103.11,28.97],[-103.94,29.27],[-106.51,31.75],[-108.24,31.75],[-108.24,31.34],[-109.03,31.34],[-111.02,31.33],[-114.72,32.72],[-115.99,32.61],[-117.13,32.54],[-118.52,34.03],[-120.62,34.61],[-124.4,40.31],[-124.18,41.14],[-124.21,42],[-124.53,42.77],[-123.9,45.52],[-124.69,48.18],[-124.57,48.38],[-123.12,48.04],[-122.59,47.1],[-122.34,47.36],[-122.5,48.18],[-122.84,49]],[[-155.4,20.08],[-154.81,19.51],[-155.69,18.92],[-156.07,19.7],[-155.86,20.27],[-155.79,20.25],[-155.4,20.08]],[[-156,20.76],[-156.08,20.64],[-156.41,20.57],[-156.71,20.93],[-156,20.76]],[[-156.76,21.18],[-156.79,21.07],[-157.33,21.1],[-157.25,21.22],[-156.76,21.18]],[[-158.03,21.72],[-157.71,21.26],[-157.78,21.28],[-158.13,21.31],[-158.03,21.72]],[[-159.37,22.21],[-159.35,21.98],[-159.46,21.88],[-159.8,22.07],[-159.37,22.21]],[[-166.47,60.38],[-165.67,60.29],[-165.58,59.91],[-166.19,59.75],[-166.85,59.94],[-167.46,60.21],[-166.47,60.38]],[[-153.23,57.97],[-152.56,57.9],[-152.14,57.59],[-153.01,57.12],[-154.01,56.73],[-154.52,56.99],[-154.67,57.46],[-153.76,57.82],[-153.23,57.97]],[[-140.99,69.71],[-141,60.31],[-140.01,60.28],[-139.04,60],[-138.34,59.56],[-137.45,58.91],[-136.48,59.46],[-135.48,59.79],[-133.36,58.41],[-132.73,57.69],[-131.71,56.55],[-130.01,55.92],[-129.98,55.29],[-130.54,54.8],[-131.09,55.18],[-131.97,55.5],[-132.25,56.37],[-133.54,57.18],[-134.08,58.12],[-135.04,58.19],[-136.63,58.21],[-137.8,58.5],[-139.87,59.54],[-143.96,60],[-145.93,60.46],[-147.11,60.88],[-148.22,60.67],[-148.02,59.98],[-151.72,59.16],[-151.86,59.74],[-151.41,60.73],[-150.35,61.03],[-150.62,61.28],[-154.02,59.35],[-153.29,58.86],[-154.23,58.15],[-155.31,57.73],[-156.31,57.42],[-158.43,55.99],[-163.07,54.69],[-164.79,54.4],[-164.94,54.57],[-161.8,55.89],[-160.56,56.01],[-160.07,56.42],[-158.68,57.02],[-158.46,57.22],[-157.72,57.57],[-157.55,58.33],[-157.04,58.92],[-159.06,58.42],[-159.71,58.93],[-159.98,58.57],[-160.36,59.07],[-161.36,58.67],[-161.97,58.67],[-162.05,59.27],[-161.87,59.63],[-162.52,59.99],[-163.82,59.8],[-164.66,60.27],[-165.35,60.51],[-165.35,61.07],[-166.12,61.5],[-165.73,62.07],[-164.92,62.63],[-164.56,63.15],[-163.75,63.22],[-163.07,63.06],[-160.77,63.77],[-160.96,64.22],[-161.52,64.4],[-160.78,64.79],[-162.76,64.34],[-163.55,64.56],[-164.96,64.45],[-166.43,64.69],[-166.85,65.09],[-168.11,65.67],[-166.71,66.09],[-164.47,66.58],[-163.65,66.58],[-163.79,66.08],[-161.68,66.12],[-165.39,68.04],[-166.76,68.36],[-166.2,68.88],[-164.43,68.92],[-161.91,70.33],[-156.58,71.36],[-155.07,71.15],[-154.34,70.7],[-153.9,70.89],[-152.21,70.83],[-152.27,70.6],[-150.74,70.43],[-140.99,69.71]],[[-171.73,63.78],[-168.69,63.3],[-168.77,63.19],[-169.53,62.98],[-171.55,63.32],[-171.79,63.41],[-171.73,63.78]],[[87.36,49.21],[86.6,48.55],[85.77,48.46],[85.72,47.45],[85.16,47],[83.18,47.33],[82.46,45.54],[81.95,45.32],[79.97,44.92],[80.87,43.18],[80.18,42.92],[80.26,42.35],[79.64,42.5],[79.14,42.86],[75.64,42.88],[74.21,43.3],[73.65,43.09],[73.49,42.5],[71.84,42.85],[71.19,42.7],[70.96,42.27],[70.39,42.08],[69.07,41.38],[68.63,40.67],[68.26,40.66],[67.99,41.14],[66.71,41.17],[66.51,41.99],[66.02,41.99],[66.1,43],[64.9,43.73],[63.19,43.65],[62.01,43.5],[61.06,44.41],[58.5,45.59],[55.93,45],[55.97,41.31],[55.46,41.26],[54.76,42.04],[54.08,42.32],[52.94,42.12],[52.5,41.78],[52.5,42.79],[51.34,43.13],[50.31,44.61],[51.28,44.51],[51.32,45.25],[52.17,45.41],[53.04,45.26],[53.22,46.23],[53.04,46.85],[52.04,46.8],[51.19,47.05],[50.03,46.61],[49.1,46.4],[48.59,46.56],[48.69,47.08],[48.06,47.74],[47.32,47.72],[46.47,48.39],[47.55,50.45],[48.58,49.87],[48.7,50.61],[50.77,51.69],[52.33,51.72],[54.53,51.03],[55.72,50.62],[56.78,51.04],[58.36,51.06],[59.64,50.55],[59.93,50.84],[61.34,50.8],[61.59,51.27],[59.97,51.96],[60.93,52.45],[60.74,52.72],[61.7,52.98],[60.98,53.66],[61.44,54.01],[65.18,54.35],[69.07,55.39],[70.87,55.17],[71.18,54.13],[72.22,54.38],[73.51,54.04],[73.43,53.49],[74.38,53.55],[76.89,54.49],[76.53,54.18],[77.8,53.4],[80.04,50.86],[80.57,51.39],[81.95,50.81],[83.38,51.07],[85.54,49.69],[86.83,49.83],[87.36,49.21]],[[55.97,41.31],[55.93,45],[58.5,45.59],[61.06,44.41],[62.01,43.5],[63.19,43.65],[64.9,43.73],[66.1,43],[66.02,41.99],[66.51,41.99],[66.71,41.17],[67.99,41.14],[68.26,40.66],[70.96,42.27],[71.26,42.17],[70.42,41.52],[73.06,40.87],[71.77,40.15],[71.01,40.24],[70.6,40.22],[70.46,40.5],[70.67,40.96],[69.33,40.73],[69.01,40.09],[68.54,39.53],[67.7,39.58],[67.44,39.14],[68.18,38.9],[68.39,38.16],[67.83,37.14],[67.08,37.36],[66.52,37.36],[66.55,37.97],[65.22,38.4],[64.17,38.89],[63.52,39.36],[62.37,40.05],[61.88,41.08],[61.55,41.27],[60.47,41.22],[60.08,41.43],[59.98,42.22],[58.63,42.75],[57.79,42.17],[56.93,41.83],[57.1,41.32],[55.97,41.31]],[[141,-2.6],[142.74,-3.29],[144.58,-3.86],[145.27,-4.37],[145.83,-4.88],[145.98,-5.47],[147.65,-6.08],[147.89,-6.61],[146.97,-6.72],[147.19,-7.39],[148.08,-8.04],[148.73,-9.1],[149.31,-9.07],[149.27,-9.51],[150.8,-10.29],[150.69,-10.58],[147.91,-10.13],[146.05,-8.07],[144.74,-7.63],[143.9,-7.92],[143.29,-8.25],[143.41,-8.98],[142.63,-9.33],[142.07,-9.16],[141.03,-9.12],[141.02,-5.86],[141,-2.6]],[[152.64,-3.66],[153.02,-3.98],[153.14,-4.5],[152.83,-4.77],[152.64,-4.18],[152.41,-3.79],[150.66,-2.74],[150.94,-2.5],[152.64,-3.66]],[[151.3,-5.84],[149.71,-6.32],[148.89,-6.03],[148.32,-5.75],[148.4,-5.44],[149.3,-5.58],[149.85,-5.51],[150,-5.03],[150.14,-5],[150.24,-5.53],[150.81,-5.46],[151.09,-5.11],[151.65,-4.76],[151.54,-4.17],[152.14,-4.15],[152.34,-4.31],[152.32,-4.87],[151.3,-5.84]],[[154.76,-5.34],[156.02,-6.54],[155.88,-6.82],[155.6,-6.92],[155.17,-6.54],[154.73,-5.9],[154.51,-5.14],[154.65,-5.04],[154.76,-5.34]],[[141,-2.6],[141.02,-5.86],[141.03,-9.12],[140.14,-8.3],[137.61,-8.41],[138.04,-7.6],[138.67,-7.32],[138.41,-6.23],[137.93,-5.39],[133.66,-3.54],[133.37,-4.02],[132.98,-4.11],[132.76,-3.75],[132.75,-3.31],[131.99,-2.82],[133.07,-2.46],[133.78,-2.48],[133.7,-2.21],[132.23,-2.21],[130.52,-.94],[131.87,-.7],[132.38,-.37],[133.99,-.78],[134.14,-1.15],[134.42,-2.77],[135.46,-3.37],[136.29,-2.31],[137.44,-1.7],[141,-2.6]],[[124.97,-8.89],[125.07,-9.09],[125.09,-9.39],[124.44,-10.14],[123.58,-10.36],[123.46,-10.24],[123.55,-9.9],[123.98,-9.29],[124.97,-8.89]],[[134.21,-6.9],[134.5,-5.45],[134.73,-5.74],[134.72,-6.21],[134.21,-6.9]],[[117.88,4.14],[117.31,3.23],[118.05,2.29],[117.88,1.83],[119,.9],[117.81,.78],[117.48,.1],[117.52,-.8],[116.56,-1.49],[116.53,-2.48],[116.15,-4.01],[116,-3.66],[114.86,-4.11],[114.47,-3.5],[113.76,-3.44],[113.26,-3.12],[112.07,-3.48],[111.7,-2.99],[111.05,-3.05],[110.22,-2.93],[110.07,-1.59],[109.57,-1.31],[109.09,-.46],[108.95,.42],[109.07,1.34],[109.66,2.01],[109.83,1.34],[110.51,.77],[111.16,.98],[111.8,.9],[112.38,1.41],[112.86,1.5],[113.81,1.22],[114.62,1.43],[115.87,4.31],[117.02,4.31],[117.88,4.14]],[[129.37,-2.8],[130.47,-3.09],[130.83,-3.86],[129.99,-3.45],[127.9,-3.39],[128.14,-2.84],[129.37,-2.8]],[[126.87,-3.79],[126.18,-3.61],[125.99,-3.18],[127,-3.13],[127.25,-3.46],[126.87,-3.79]],[[127.93,2.17],[128,1.63],[128.59,1.54],[128.69,1.13],[128.64,.26],[128.12,.36],[127.97,-.25],[128.38,-.78],[128.1,-.9],[127.7,-.27],[127.4,1.01],[127.6,1.81],[127.93,2.17]],[[122.93,.88],[124.08,.92],[125.07,1.64],[125.24,1.42],[124.44,.43],[123.69,.24],[120.18,.24],[120.04,-.52],[120.94,-1.41],[121.48,-.96],[123.34,-.62],[123.26,-1.08],[122.82,-.93],[122.39,-1.52],[121.51,-1.9],[122.45,-3.19],[122.27,-3.53],[123.17,-4.68],[123.16,-5.34],[122.63,-5.63],[122.24,-5.28],[122.72,-4.46],[121.74,-4.85],[121.49,-4.57],[121.62,-4.19],[120.9,-3.6],[120.97,-2.63],[120.31,-2.93],[120.39,-4.1],[120.43,-5.53],[119.8,-5.67],[119.37,-5.38],[119.65,-4.46],[119.5,-3.49],[119.08,-3.49],[118.77,-2.8],[119.83,.15],[120.04,.57],[120.89,1.31],[121.67,1.01],[122.93,.88]],[[120.3,-10.26],[118.97,-9.56],[119.9,-9.36],[120.43,-9.67],[120.78,-9.97],[120.72,-10.24],[120.3,-10.26]],[[121.34,-8.54],[122.01,-8.46],[122.9,-8.09],[122.76,-8.65],[121.25,-8.93],[119.92,-8.81],[119.92,-8.44],[120.72,-8.24],[121.34,-8.54]],[[118.26,-8.36],[118.88,-8.28],[119.13,-8.71],[116.74,-9.03],[117.9,-8.1],[118.26,-8.36]],[[108.49,-6.42],[108.62,-6.78],[110.54,-6.88],[110.76,-6.47],[112.61,-6.95],[112.98,-7.59],[114.48,-7.78],[115.71,-8.37],[114.56,-8.75],[108.28,-7.77],[105.37,-6.85],[106.05,-5.9],[108.49,-6.42]],[[104.37,-1.08],[104.54,-1.78],[104.89,-2.34],[105.62,-2.43],[106.11,-3.06],[105.86,-4.31],[105.82,-5.85],[104.71,-5.87],[103.87,-5.04],[102.58,-4.22],[99.26,.18],[98.97,1.04],[98.6,1.82],[95.38,4.97],[95.29,5.48],[95.94,5.44],[97.48,5.25],[100.64,2.1],[101.66,2.08],[102.5,1.4],[103.08,.56],[103.84,.1],[103.44,-.71],[104.01,-1.06],[104.37,-1.08]],[[-68.63,-52.64],[-68.25,-53.1],[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2],[-66.45,-55.25],[-66.96,-54.9],[-67.56,-54.87],[-68.63,-54.87],[-68.63,-52.64]],[[-57.63,-30.22],[-58.5,-34.43],[-57.23,-35.29],[-57.36,-35.98],[-56.74,-36.41],[-56.79,-36.9],[-57.75,-38.18],[-59.23,-38.72],[-61.24,-38.93],[-62.34,-38.83],[-62.15,-40.68],[-62.75,-41.03],[-63.77,-41.17],[-64.73,-40.8],[-65.12,-41.06],[-64.98,-42.06],[-64.3,-42.36],[-63.76,-42.04],[-63.46,-42.56],[-64.38,-42.87],[-65.18,-43.5],[-65.33,-44.5],[-65.57,-45.04],[-66.51,-45.04],[-67.29,-45.55],[-67.58,-46.3],[-66.6,-47.03],[-65.64,-47.24],[-65.99,-48.13],[-67.17,-48.7],[-67.82,-49.87],[-68.73,-50.26],[-69.14,-50.73],[-68.82,-51.77],[-68.15,-52.35],[-71.91,-52.01],[-72.33,-51.43],[-72.31,-50.68],[-72.98,-50.74],[-73.33,-50.38],[-73.42,-49.32],[-72.65,-48.88],[-72.33,-48.24],[-71.66,-44.97],[-71.22,-44.78],[-71.33,-44.41],[-71.79,-44.21],[-71.46,-43.79],[-71.92,-43.41],[-72.15,-42.25],[-71.75,-42.05],[-71.92,-40.83],[-71.68,-39.81],[-71.41,-38.92],[-70.81,-38.55],[-71.12,-37.58],[-71.12,-36.66],[-70.36,-36.01],[-70.39,-35.17],[-69.82,-34.19],[-70.54,-31.37],[-69.92,-30.34],[-70.01,-29.37],[-69.66,-28.46],[-69,-27.52],[-68.3,-26.9],[-68.59,-26.51],[-68.39,-26.19],[-68.42,-24.52],[-67.33,-24.03],[-66.99,-22.99],[-67.11,-22.74],[-66.27,-21.83],[-64.96,-22.08],[-64.38,-22.8],[-63.99,-21.99],[-62.85,-22.03],[-62.69,-22.25],[-60.85,-23.88],[-57.78,-25.16],[-57.63,-25.6],[-58.62,-27.12],[-55.7,-27.39],[-54.79,-26.62],[-54.63,-25.74],[-54.13,-25.55],[-53.63,-26.12],[-53.65,-26.92],[-57.63,-30.22]],[[-68.63,-52.64],[-68.63,-54.87],[-67.56,-54.87],[-66.96,-54.9],[-67.29,-55.3],[-68.15,-55.61],[-71.01,-55.05],[-74.66,-52.84],[-71.11,-54.07],[-70.59,-53.62],[-70.27,-52.93],[-69.35,-52.52],[-68.63,-52.64]],[[-69.59,-17.58],[-68.44,-19.41],[-68.76,-20.37],[-68.22,-21.49],[-67.83,-22.87],[-67.11,-22.74],[-66.99,-22.99],[-67.33,-24.03],[-68.42,-24.52],[-68.39,-26.19],[-68.59,-26.51],[-68.3,-26.9],[-69,-27.52],[-69.66,-28.46],[-70.01,-29.37],[-69.92,-30.34],[-70.54,-31.37],[-69.82,-34.19],[-70.39,-35.17],[-70.36,-36.01],[-71.12,-36.66],[-71.12,-37.58],[-70.81,-38.55],[-71.41,-38.92],[-71.68,-39.81],[-71.92,-40.83],[-71.75,-42.05],[-72.15,-42.25],[-71.92,-43.41],[-71.46,-43.79],[-71.79,-44.21],[-71.33,-44.41],[-71.22,-44.78],[-71.66,-44.97],[-72.33,-48.24],[-72.65,-48.88],[-73.42,-49.32],[-73.33,-50.38],[-72.98,-50.74],[-72.31,-50.68],[-72.33,-51.43],[-71.91,-52.01],[-69.5,-52.14],[-68.57,-52.3],[-70.85,-52.9],[-71.01,-53.83],[-71.43,-53.86],[-74.95,-52.26],[-75.61,-48.67],[-75.18,-47.71],[-74.13,-46.94],[-75.64,-46.65],[-74.69,-45.76],[-74.35,-44.1],[-73.24,-44.45],[-72.72,-42.38],[-73.39,-42.12],[-73.7,-43.37],[-74.33,-43.22],[-74.02,-41.79],[-73.68,-39.94],[-73.22,-39.26],[-73.51,-38.28],[-73.59,-37.16],[-73.17,-37.12],[-71.44,-32.42],[-71.49,-28.86],[-70.91,-27.64],[-70.09,-21.39],[-70.16,-19.76],[-70.37,-18.35],[-69.86,-18.09],[-69.59,-17.58]],[[29.34,-4.5],[29.62,-6.52],[30.2,-7.08],[30.74,-8.34],[28.73,-8.53],[28.37,-11.79],[28.64,-11.97],[29.34,-12.36],[29.62,-12.18],[29.7,-13.26],[28.93,-13.25],[27.16,-11.61],[26.55,-11.92],[24.31,-11.26],[24.26,-10.95],[22.16,-11.08],[21.73,-7.29],[20.51,-7.3],[20.6,-6.94],[20.09,-6.94],[20.04,-7.12],[19.42,-7.16],[19.17,-7.74],[19.02,-7.99],[17.47,-8.07],[16.33,-5.88],[12.32,-6.1],[12.18,-5.79],[12.63,-4.99],[13.6,-4.5],[14.58,-4.97],[16.01,-3.54],[15.97,-2.71],[16.41,-1.74],[17.64,-.42],[18.54,4.2],[18.93,4.71],[19.47,5.03],[22.41,4.03],[22.7,4.63],[22.84,4.71],[25.65,5.26],[27.37,5.23],[27.98,4.41],[28.43,4.29],[29.72,4.6],[30.83,3.51],[30.77,2.34],[31.17,2.2],[29.88,.6],[29.02,-2.84],[29.28,-3.29],[29.34,-4.5]],[[41.59,-1.68],[40.99,-.86],[40.98,2.78],[41.86,3.92],[42.13,4.23],[42.77,4.25],[43.66,4.96],[44.96,5],[48.94,9.45],[48.95,11.41],[51.11,12.02],[50.55,9.2],[48.59,5.34],[47.74,4.22],[46.56,2.86],[43.14,.29],[41.59,-1.68]],[[39.2,-4.68],[37.77,-3.68],[37.7,-3.1],[34.07,-1.06],[33.9,-.95],[33.89,.11],[35.04,1.91],[34.01,4.25],[34.62,4.85],[35.3,5.51],[35.82,5.34],[35.82,4.78],[36.16,4.45],[36.86,4.45],[38.12,3.6],[39.56,3.42],[39.85,3.84],[40.77,4.26],[41.17,3.92],[41.86,3.92],[40.98,2.78],[40.99,-.86],[41.59,-1.68],[40.26,-2.57],[39.2,-4.68]],[[24.57,8.23],[23.81,8.67],[23.46,8.95],[23.55,10.09],[22.29,12.65],[21.94,12.59],[23.02,15.68],[23.89,15.61],[23.84,19.58],[23.85,20],[25,20],[25,22],[36.87,22],[37.48,18.61],[37.86,18.37],[38.41,18],[36.85,16.96],[36.27,13.56],[34.26,10.63],[33.96,9.58],[33.97,8.68],[33.72,10.33],[33.21,10.72],[33.09,11.44],[33.21,12.18],[32.74,12.25],[32.67,12.02],[32.07,11.97],[32.31,11.68],[32.4,11.08],[31.85,10.53],[31.35,9.81],[30.84,9.71],[30,10.29],[28.97,9.4],[26.75,9.47],[25.79,10.41],[25.07,10.27],[24.79,9.81],[24.54,8.92],[24.19,8.73],[23.89,8.62],[24.57,8.23]],[[23.84,19.58],[23.89,15.61],[23.02,15.68],[21.94,12.59],[22.29,12.65],[22.86,11.14],[22.23,10.97],[21.72,10.57],[21,9.48],[18.81,8.98],[18.91,8.63],[18.39,8.28],[17.96,7.89],[15.28,7.42],[14.98,8.8],[14.54,8.97],[13.95,9.55],[14.17,10.02],[15.47,9.98],[14.92,10.89],[14.6,13.33],[13.95,13.35],[13.96,14],[13.54,14.37],[13.97,15.68],[15.25,16.63],[15.9,20.39],[15.1,21.31],[14.85,22.86],[15.86,23.41],[19.85,21.5],[23.84,19.58]],[[-71.71,19.71],[-71.71,18.04],[-73.92,18.03],[-74.46,18.34],[-74.37,18.66],[-72.33,18.67],[-72.79,19.1],[-72.78,19.48],[-73.42,19.64],[-73.19,19.92],[-72.58,19.87],[-71.71,19.71]],[[-71.71,18.04],[-71.69,18.32],[-71.95,18.62],[-71.59,19.88],[-69.95,19.65],[-68.32,18.61],[-68.69,18.21],[-70.67,18.43],[-71,18.28],[-71.4,17.6],[-71.66,17.76],[-71.71,18.04]],[[178.73,71.1],[180,71.52],[180,70.83],[178.9,70.78],[178.73,71.1]],[[49.1,46.4],[46.68,44.61],[48.58,41.81],[47.82,41.15],[45.47,42.5],[39.96,43.43],[36.68,45.24],[37.4,45.4],[38.23,46.24],[37.67,46.64],[39.15,47.04],[39.12,47.26],[38.22,47.1],[38.26,47.55],[38.77,47.83],[39.74,47.9],[40.07,49.6],[35.36,50.58],[35.38,50.77],[35.02,51.21],[34.22,51.26],[34.14,51.57],[34.39,51.77],[33.75,52.34],[31.79,52.1],[31.54,52.74],[31.31,53.07],[32.69,53.35],[30.76,54.81],[30.97,55.08],[30.87,55.55],[28.18,56.17],[27.86,56.76],[27.77,57.24],[27.29,57.47],[27.72,57.79],[27.42,58.72],[28.13,59.3],[27.98,59.48],[27.98,59.48],[29.12,60.03],[28.07,60.5],[28.07,60.5],[31.52,62.87],[30.04,63.55],[30.44,64.2],[29.54,64.95],[30.22,65.81],[29.05,66.94],[29.98,67.7],[28.45,68.36],[28.59,69.06],[32.13,69.91],[33.78,69.3],[36.51,69.06],[40.29,67.93],[41.06,67.46],[41.13,66.79],[40.02,66.27],[38.38,66],[33.92,66.76],[33.18,66.63],[34.81,65.9],[34.88,65.44],[34.94,64.41],[36.23,64.11],[37.01,63.85],[37.14,64.33],[36.54,64.76],[37.18,65.14],[39.59,64.52],[40.44,64.76],[39.76,65.5],[42.09,66.48],[43.02,66.42],[43.95,66.07],[44.53,66.76],[43.7,67.35],[44.19,67.95],[43.45,68.57],[46.25,68.25],[46.82,67.69],[45.56,67.57],[45.56,67.01],[46.35,66.67],[47.89,66.88],[48.14,67.52],[50.23,68],[53.72,68.86],[54.47,68.81],[53.49,68.2],[54.73,68.1],[58.8,68.88],[59.94,68.28],[61.08,68.94],[60.03,69.52],[60.55,69.85],[63.5,69.55],[64.89,69.23],[68.51,68.09],[69.18,68.62],[68.16,69.14],[68.14,69.36],[66.93,69.45],[67.26,69.93],[66.72,70.71],[66.69,71.03],[69.94,73.04],[72.59,72.78],[72.8,72.22],[71.85,71.41],[72.47,71.09],[72.79,70.39],[72.56,69.02],[73.67,68.41],[73.24,67.74],[71.28,66.32],[72.42,66.17],[75.05,67.76],[74.47,68.33],[74.94,68.99],[73.84,69.07],[73.6,69.63],[74.4,70.63],[73.1,71.45],[74.89,72.12],[74.66,72.83],[75.16,72.85],[75.68,72.3],[75.29,71.34],[76.36,71.15],[75.9,71.87],[77.58,72.27],[79.65,72.32],[81.5,71.75],[80.61,72.58],[80.51,73.65],[86.82,73.94],[86.01,74.46],[87.17,75.12],[93.23,76.05],[95.86,76.14],[96.68,75.92],[98.92,76.45],[100.76,76.43],[101.04,76.86],[101.99,77.29],[104.35,77.7],[106.07,77.37],[104.71,77.13],[106.97,76.97],[107.24,76.48],[108.15,76.72],[111.08,76.71],[113.33,76.22],[114.13,75.85],[113.89,75.33],[109.4,74.18],[113.02,73.98],[113.53,73.34],[113.97,73.59],[115.57,73.75],[118.78,73.59],[119.02,73.12],[123.2,72.97],[123.26,73.74],[125.38,73.56],[126.98,73.57],[128.59,73.04],[129.05,72.4],[128.46,71.98],[129.72,71.19],[131.29,70.79],[132.25,71.84],[133.86,71.39],[139.87,71.49],[139.15,72.42],[140.47,72.85],[149.5,72.2],[150.35,71.61],[152.97,70.84],[157.01,71.03],[159,70.87],[159.83,70.45],[159.71,69.72],[160.94,69.44],[167.84,69.58],[169.58,68.69],[170.82,69.01],[170.01,69.65],[170.45,70.1],[173.64,69.82],[175.72,69.88],[178.6,69.4],[180,68.96],[180,64.98],[179.99,64.97],[178.71,64.53],[177.41,64.61],[179.37,62.98],[179.49,62.57],[179.23,62.3],[177.36,62.52],[174.57,61.77],[173.68,61.65],[170.33,59.88],[168.9,60.57],[166.29,59.79],[165.84,60.16],[164.88,59.73],[163.54,59.87],[163.22,59.21],[162.02,58.24],[162.05,57.84],[163.19,57.62],[163.06,56.16],[162.13,56.12],[161.7,55.29],[162.12,54.86],[160.37,54.34],[160.02,53.2],[158.53,52.96],[158.23,51.94],[156.79,51.01],[155.43,55.38],[155.91,56.77],[156.76,57.36],[156.81,57.83],[158.36,58.06],[163.67,61.14],[164.47,62.55],[163.26,62.47],[162.66,61.64],[160.12,60.54],[159.3,61.77],[156.72,61.43],[154.22,59.76],[155.04,59.14],[152.81,58.88],[151.27,58.78],[151.34,59.5],[149.78,59.66],[148.54,59.16],[145.49,59.34],[142.2,59.04],[138.96,57.09],[135.13,54.73],[136.7,54.6],[137.19,53.98],[138.16,53.76],[138.8,54.25],[139.9,54.19],[141.35,53.09],[141.38,52.24],[140.6,51.24],[140.51,50.05],[140.06,48.45],[134.87,43.4],[133.54,42.81],[132.91,42.8],[132.28,43.28],[130.78,42.22],[130.63,42.9],[131.14,42.93],[131.29,44.11],[131.03,44.97],[131.88,45.32],[133.1,45.14],[135.03,48.48],[133.37,48.18],[132.51,47.79],[130.99,47.79],[130.58,48.73],[129.4,49.44],[127.66,49.76],[125.95,52.79],[125.07,53.16],[123.57,53.46],[122.25,53.43],[121,53.25],[120.18,52.75],[120.73,52.52],[120.74,51.96],[120.18,51.64],[119.28,50.58],[119.29,50.14],[117.88,49.51],[114.36,50.25],[112.9,49.54],[111.58,49.38],[110.66,49.13],[109.4,49.29],[108.48,49.28],[107.87,49.79],[106.89,50.27],[103.68,50.09],[102.26,50.51],[102.07,51.26],[98.86,52.05],[97.83,51.01],[98.23,50.42],[97.26,49.73],[92.23,50.8],[87.36,49.21],[86.83,49.83],[85.54,49.69],[83.38,51.07],[81.95,50.81],[80.57,51.39],[80.04,50.86],[77.8,53.4],[76.53,54.18],[76.89,54.49],[74.38,53.55],[73.43,53.49],[73.51,54.04],[72.22,54.38],[71.18,54.13],[70.87,55.17],[69.07,55.39],[65.18,54.35],[61.44,54.01],[60.98,53.66],[61.7,52.98],[60.74,52.72],[60.93,52.45],[59.97,51.96],[61.59,51.27],[61.34,50.8],[59.93,50.84],[59.64,50.55],[58.36,51.06],[56.78,51.04],[55.72,50.62],[54.53,51.03],[52.33,51.72],[50.77,51.69],[48.7,50.61],[48.58,49.87],[47.55,50.45],[46.47,48.39],[47.32,47.72],[48.06,47.74],[48.69,47.08],[48.59,46.56],[49.1,46.4]],[[93.78,81.02],[95.94,81.25],[97.88,80.75],[100.19,79.78],[99.94,78.88],[97.76,78.76],[94.97,79.04],[93.31,79.43],[92.55,80.14],[91.18,80.34],[93.78,81.02]],[[102.84,79.28],[105.37,78.71],[105.08,78.31],[99.44,77.92],[101.26,79.23],[102.09,79.35],[102.84,79.28]],[[138.83,76.14],[141.47,76.09],[145.09,75.56],[144.3,74.82],[140.61,74.85],[138.96,74.61],[136.97,75.26],[137.51,75.95],[138.83,76.14]],[[148.22,75.35],[150.73,75.08],[149.58,74.69],[147.98,74.78],[146.12,75.17],[146.36,75.5],[148.22,75.35]],[[139.86,73.37],[140.81,73.77],[142.06,73.86],[143.48,73.48],[143.6,73.21],[139.86,73.37]],[[44.85,80.59],[51.52,80.7],[47.59,80.01],[46.5,80.25],[47.07,80.56],[44.85,80.59]],[[22.73,54.33],[20.89,54.31],[19.66,54.43],[19.89,54.87],[21.27,55.19],[22.32,55.02],[22.76,54.86],[22.65,54.58],[22.73,54.33]],[[53.51,73.75],[55.9,74.63],[55.63,75.08],[57.87,75.61],[61.17,76.25],[68.16,76.94],[68.85,76.54],[61.58,75.26],[58.48,74.31],[56.99,73.33],[55.42,72.37],[55.62,71.54],[57.54,70.72],[56.94,70.63],[53.68,70.76],[53.41,71.21],[51.6,71.47],[51.46,72.01],[52.48,72.23],[52.44,72.77],[54.43,73.63],[53.51,73.75]],[[142.91,53.7],[143.26,52.74],[143.24,51.76],[143.65,50.75],[144.65,48.98],[143.17,49.31],[142.56,47.86],[143.53,46.84],[143.51,46.14],[142.75,46.74],[142.09,45.97],[142.18,50.95],[141.59,51.94],[141.68,53.3],[142.61,53.76],[142.21,54.23],[142.65,54.37],[142.91,53.7]],[[-174.93,67.21],[-175.01,66.58],[-174.34,66.34],[-174.57,67.06],[-171.86,66.91],[-169.9,65.98],[-170.89,65.54],[-172.53,65.44],[-172.55,64.46],[-172.96,64.25],[-175.98,64.92],[-176.21,65.36],[-177.22,65.52],[-178.36,65.39],[-178.9,65.74],[-178.69,66.11],[-179.88,65.87],[-179.43,65.4],[-180,64.98],[-180,68.96],[-177.55,68.2],[-174.93,67.21]],[[-178.69,70.89],[-180,70.83],[-180,71.52],[-177.58,71.27],[-177.66,71.13],[-178.69,70.89]],[[33.44,45.97],[33.7,46.22],[35.51,45.41],[36.53,45.47],[36.33,45.11],[35.24,44.94],[33.88,44.36],[33.33,44.56],[33.55,45.03],[32.45,45.33],[33.44,45.97]],[[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58],[-78.91,26.42],[-78.98,26.79]],[[-77.79,27.04],[-77,26.59],[-77.17,25.88],[-77.79,27.04]],[[-78.19,25.21],[-77.89,25.17],[-77.54,24.34],[-77.53,23.76],[-78.41,24.58],[-78.19,25.21]],[[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85]],[[15.14,79.67],[15.52,80.02],[16.99,80.05],[18.25,79.7],[21.54,78.96],[19.03,78.56],[18.47,77.83],[17.59,77.64],[17.12,76.81],[15.91,76.77],[13.76,77.38],[14.67,77.74],[13.17,78.02],[11.22,78.87],[10.44,79.65],[13.17,80.01],[13.72,79.66],[15.14,79.67]],[[31.1,69.56],[29.4,69.16],[28.59,69.06],[29.02,69.77],[27.73,70.16],[26.18,69.83],[25.69,69.09],[24.74,68.65],[23.66,68.89],[22.36,68.84],[21.24,69.37],[20.65,69.11],[20.03,69.07],[19.88,68.41],[17.99,68.57],[17.73,68.01],[16.77,68.01],[13.56,64.79],[13.92,64.45],[13.57,64.05],[12.58,64.07],[11.93,63.13],[11.99,61.8],[12.63,61.29],[12.3,60.12],[11.47,59.43],[11.03,58.86],[10.36,59.47],[8.38,58.31],[7.05,58.08],[5.67,58.59],[5.31,59.66],[4.99,61.97],[10.53,64.49],[12.36,65.88],[14.76,67.81],[16.44,68.56],[19.18,69.82],[21.38,70.26],[23.02,70.2],[24.55,71.03],[26.37,70.99],[28.17,71.19],[31.29,70.45],[30.01,70.19],[31.1,69.56]],[[27.41,80.06],[25.92,79.52],[23.02,79.4],[20.08,79.57],[17.37,80.32],[22.92,80.66],[25.45,80.41],[27.41,80.06]],[[24.72,77.85],[22.49,77.44],[20.73,77.68],[21.42,77.94],[20.81,78.25],[22.88,78.45],[23.28,78.08],[24.72,77.85]],[[-46.76,82.63],[-38.62,83.55],[-35.09,83.65],[-27.1,83.52],[-20.85,82.73],[-22.69,82.34],[-26.52,82.3],[-31.9,82.2],[-24.84,81.79],[-22.9,82.09],[-22.07,81.73],[-23.17,81.15],[-20.62,81.52],[-15.77,81.91],[-12.77,81.72],[-12.21,81.29],[-16.29,80.58],[-16.85,80.35],[-20.05,80.18],[-17.73,80.13],[-18.9,79.4],[-19.7,78.75],[-19.67,77.64],[-18.47,76.99],[-20.04,76.94],[-21.68,76.63],[-19.83,76.1],[-19.6,75.25],[-20.67,75.16],[-19.37,74.3],[-21.59,74.22],[-20.43,73.82],[-20.76,73.46],[-22.17,73.31],[-23.57,73.31],[-22.31,72.63],[-22.3,72.18],[-24.28,72.6],[-24.79,72.33],[-23.44,72.08],[-22.13,71.47],[-21.75,70.66],[-23.54,70.47],[-24.31,70.86],[-25.54,71.43],[-25.2,70.75],[-26.36,70.23],[-23.73,70.18],[-22.35,70.13],[-25.03,69.26],[-27.75,68.47],[-30.67,68.13],[-31.78,68.12],[-32.81,67.74],[-34.2,66.68],[-39.81,65.46],[-40.67,64.84],[-40.68,64.14],[-41.19,63.48],[-42.82,62.68],[-42.42,61.9],[-42.87,61.07],[-43.38,60.1],[-44.79,60.04],[-46.26,60.85],[-48.26,60.86],[-51.63,63.63],[-52.14,64.28],[-52.28,65.18],[-53.66,66.1],[-53.3,66.84],[-53.97,67.19],[-52.98,68.36],[-51.48,68.73],[-51.08,69.15],[-50.87,69.93],[-53.46,69.28],[-54.68,69.61],[-54.75,70.29],[-54.36,70.82],[-53.43,70.84],[-51.39,70.57],[-53.11,71.2],[-54,71.55],[-55,71.41],[-55.83,71.65],[-54.72,72.59],[-57.32,74.71],[-58.6,75.1],[-58.59,75.52],[-61.27,76.1],[-68.5,76.06],[-69.66,76.38],[-71.4,77.01],[-68.78,77.32],[-66.76,77.38],[-71.04,77.64],[-73.3,78.04],[-73.16,78.43],[-69.37,78.91],[-65.71,79.39],[-65.32,79.76],[-68.02,80.12],[-62.23,81.32],[-62.65,81.77],[-60.28,82.03],[-57.21,82.19],[-54.13,82.2],[-53.04,81.89],[-50.39,82.44],[-44.52,81.66],[-46.9,82.2],[-46.76,82.63]],[[68.94,-48.62],[70.56,-49.25],[70.28,-49.71],[68.75,-49.77],[68.94,-48.62]],[[124.97,-8.89],[125.09,-8.66],[125.95,-8.43],[127.34,-8.4],[125.09,-9.39],[125.07,-9.09],[124.97,-8.89]],[[16.34,-28.58],[16.82,-28.08],[17.22,-28.36],[17.39,-28.78],[17.84,-28.86],[18.46,-29.05],[19,-28.97],[19.89,-28.46],[19.9,-24.77],[20.17,-24.92],[20.76,-25.87],[20.67,-26.48],[20.89,-26.83],[21.61,-26.73],[23.31,-25.27],[23.73,-25.39],[24.21,-25.67],[25.03,-25.72],[25.66,-25.49],[25.77,-25.17],[25.94,-24.7],[26.49,-24.62],[26.79,-24.24],[27.12,-23.57],[28.02,-22.83],[29.43,-22.09],[31.19,-22.25],[31.67,-23.66],[31.93,-24.37],[31.75,-25.48],[31.84,-25.84],[31.33,-25.66],[31.04,-25.73],[30.69,-26.74],[31.28,-27.29],[31.87,-27.18],[32.07,-26.73],[32.83,-26.74],[32.2,-28.75],[28.22,-32.77],[25.78,-33.94],[22.57,-33.86],[20.07,-34.8],[18.38,-34.14],[17.93,-32.61],[18.25,-32.43],[18.22,-31.66],[16.34,-28.58]],[[28.98,-28.96],[29.33,-29.26],[28.11,-30.55],[27.75,-30.65],[27,-29.88],[27.53,-29.24],[28.07,-28.85],[28.54,-28.65],[28.98,-28.96]],[[-117.13,32.54],[-115.99,32.61],[-114.72,32.72],[-111.02,31.33],[-109.03,31.34],[-108.24,31.34],[-108.24,31.75],[-106.51,31.75],[-103.94,29.27],[-103.11,28.97],[-102.48,29.76],[-101.66,29.78],[-99.52,27.54],[-99.3,26.84],[-99.02,26.37],[-97.14,25.87],[-97.87,22.44],[-97.19,20.64],[-95.9,18.83],[-94.84,18.56],[-94.43,18.14],[-91.41,18.88],[-90.77,19.28],[-90.28,21],[-87.05,21.54],[-86.81,21.33],[-86.85,20.85],[-87.38,20.26],[-87.62,19.65],[-87.84,18.26],[-88.49,18.49],[-88.85,17.88],[-91,17.82],[-91,17.25],[-91.45,17.25],[-90.46,16.07],[-91.75,16.07],[-92.23,14.54],[-93.36,15.62],[-93.88,15.94],[-94.69,16.2],[-96.56,15.65],[-103.5,18.29],[-105.49,19.95],[-105.73,20.43],[-105.4,20.53],[-105.27,21.42],[-106.03,22.77],[-108.4,25.17],[-109.26,25.58],[-109.44,25.82],[-109.29,26.44],[-109.8,26.68],[-110.39,27.16],[-110.64,27.86],[-112.23,28.95],[-113.15,31.17],[-114.78,31.8],[-114.94,31.39],[-114.77,30.91],[-114.67,30.16],[-111.62,26.66],[-110.66,24.3],[-110.17,24.27],[-109.77,23.81],[-109.41,23.36],[-109.43,23.19],[-109.85,22.82],[-112.18,24.74],[-112.15,25.47],[-112.3,26.01],[-115.06,27.72],[-114.98,27.8],[-114.57,27.74],[-114.2,28.12],[-114.16,28.57],[-114.93,29.28],[-115.52,29.56],[-117.13,32.54]],[[-57.63,-30.22],[-56.98,-30.11],[-53.79,-32.05],[-53.21,-32.73],[-53.65,-33.2],[-53.37,-33.77],[-53.81,-34.4],[-54.94,-34.95],[-55.67,-34.75],[-56.22,-34.86],[-57.14,-34.43],[-57.82,-34.46],[-58.43,-33.91],[-57.63,-30.22]],[[-53.37,-33.77],[-53.65,-33.2],[-53.21,-32.73],[-53.79,-32.05],[-56.98,-30.11],[-57.63,-30.22],[-53.65,-26.92],[-53.63,-26.12],[-54.13,-25.55],[-54.63,-25.74],[-54.29,-24.02],[-55.4,-23.96],[-55.8,-22.36],[-57.94,-22.09],[-57.87,-20.73],[-58.17,-20.18],[-57.5,-18.17],[-57.73,-17.55],[-58.28,-17.27],[-58.39,-16.88],[-58.24,-16.3],[-60.16,-16.26],[-60.5,-13.78],[-64.32,-12.46],[-65.4,-11.57],[-65.34,-9.76],[-66.65,-9.93],[-68.27,-11.01],[-70.55,-11.01],[-70.48,-9.49],[-71.3,-10.08],[-72.18,-10.05],[-72.56,-9.52],[-73.23,-9.46],[-73.02,-9.03],[-73.57,-8.42],[-73.99,-7.52],[-73.12,-6.63],[-72.89,-5.27],[-70.79,-4.25],[-69.89,-4.3],[-69.44,-1.56],[-69.42,-1.12],[-70.02,.54],[-69.45,.71],[-69.25,.6],[-69.22,.99],[-69.8,1.09],[-69.82,1.71],[-67.87,1.69],[-67.54,2.04],[-67.26,1.72],[-67.07,1.13],[-65.55,.79],[-63.37,2.2],[-63.42,2.41],[-64.27,2.5],[-64.41,3.13],[-64.37,3.8],[-64.82,4.06],[-63.09,3.77],[-60.97,4.54],[-60.6,4.92],[-60.73,5.2],[-60.21,5.24],[-59.98,5.01],[-60.11,4.57],[-59.77,4.42],[-59.54,3.96],[-59.82,3.61],[-59.97,2.76],[-59.72,2.25],[-59.65,1.79],[-59.03,1.32],[-57.34,1.95],[-56,1.82],[-55.97,2.51],[-52.94,2.12],[-51.32,4.2],[-51.07,3.65],[-50.51,1.9],[-49.97,1.74],[-49.95,1.05],[-50.7,.22],[-50.39,-.08],[-48.62,-.24],[-48.58,-1.24],[-47.82,-.58],[-46.57,-.94],[-44.91,-1.55],[-44.42,-2.14],[-44.58,-2.69],[-43.42,-2.38],[-41.47,-2.91],[-39.98,-2.87],[-38.5,-3.7],[-37.22,-4.82],[-36.45,-5.11],[-35.6,-5.15],[-34.73,-7.34],[-35.13,-9],[-38.67,-13.06],[-39.27,-17.87],[-40.94,-21.94],[-41.75,-22.37],[-41.99,-22.97],[-43.07,-22.97],[-44.65,-23.35],[-47.65,-24.89],[-48.5,-25.88],[-48.89,-28.67],[-53.37,-33.77]],[[-69.53,-10.95],[-68.79,-11.04],[-68.27,-11.01],[-66.65,-9.93],[-65.34,-9.76],[-65.4,-11.57],[-64.32,-12.46],[-60.5,-13.78],[-60.16,-16.26],[-58.24,-16.3],[-58.39,-16.88],[-58.28,-17.27],[-57.73,-17.55],[-57.5,-18.17],[-57.85,-19.97],[-58.17,-20.18],[-58.18,-19.87],[-59.12,-19.36],[-60.04,-19.34],[-61.79,-19.63],[-62.69,-22.25],[-62.85,-22.03],[-63.99,-21.99],[-64.38,-22.8],[-64.96,-22.08],[-66.27,-21.83],[-67.11,-22.74],[-67.83,-22.87],[-68.22,-21.49],[-68.76,-20.37],[-68.44,-19.41],[-69.59,-17.58],[-68.96,-16.5],[-69.34,-14.95],[-68.67,-12.56],[-69.53,-10.95]],[[-69.89,-4.3],[-70.79,-4.25],[-72.89,-5.27],[-73.12,-6.63],[-73.99,-7.52],[-73.57,-8.42],[-73.02,-9.03],[-73.23,-9.46],[-72.56,-9.52],[-72.18,-10.05],[-71.3,-10.08],[-70.48,-9.49],[-70.55,-11.01],[-70.09,-11.12],[-69.53,-10.95],[-68.67,-12.56],[-69.34,-14.95],[-68.96,-16.5],[-69.59,-17.58],[-69.86,-18.09],[-70.37,-18.35],[-76.01,-14.65],[-76.42,-13.82],[-76.26,-13.54],[-79.76,-7.19],[-80.54,-6.54],[-81.25,-6.14],[-80.93,-5.69],[-81.41,-4.74],[-81.1,-4.04],[-80.3,-3.4],[-80.44,-4.43],[-80.03,-4.35],[-79.62,-4.45],[-79.21,-4.96],[-78.64,-4.55],[-78.45,-3.87],[-77.84,-3],[-76.64,-2.61],[-75.54,-1.56],[-75.11,-.06],[-73.66,-1.26],[-73.07,-2.31],[-70.81,-2.26],[-70.05,-2.73],[-70.69,-3.74],[-70.39,-3.77],[-69.89,-4.3]],[[-66.88,1.25],[-67.54,2.04],[-67.87,1.69],[-69.82,1.71],[-69.8,1.09],[-69.22,.99],[-69.25,.6],[-69.45,.71],[-70.02,.54],[-69.42,-1.12],[-69.44,-1.56],[-69.89,-4.3],[-70.39,-3.77],[-70.69,-3.74],[-70.05,-2.73],[-70.81,-2.26],[-73.07,-2.31],[-73.66,-1.26],[-75.11,-.06],[-77.42,.4],[-78.99,1.69],[-77.13,3.85],[-77.5,4.09],[-77.32,5.85],[-77.48,6.69],[-77.88,7.22],[-77.24,7.94],[-77.47,8.52],[-75.67,9.44],[-75.66,9.77],[-75.48,10.62],[-74.91,11.08],[-73.41,11.23],[-71.4,12.38],[-71.14,12.11],[-71.33,11.78],[-71.97,11.61],[-72.91,10.45],[-73.03,9.74],[-73.3,9.15],[-72.79,9.09],[-72.44,7.42],[-72.2,7.34],[-71.96,6.99],[-70.67,7.09],[-70.09,6.96],[-69.39,6.1],[-67.34,6.1],[-67.82,4.5],[-67.3,3.32],[-67.81,2.82],[-66.88,1.25]],[[-77.35,8.67],[-77.47,8.52],[-77.24,7.94],[-77.88,7.22],[-78.21,7.51],[-78.43,8.05],[-78.18,8.32],[-79.12,9],[-80.38,8.3],[-80.48,8.09],[-80,7.55],[-80.89,7.22],[-81.06,7.82],[-81.19,7.65],[-81.52,7.71],[-81.72,8.11],[-82.85,8.07],[-82.93,9.48],[-81.44,8.79],[-79.02,9.55],[-77.35,8.67]],[[-82.55,9.57],[-82.93,9.48],[-82.97,8.23],[-84.98,10.09],[-84.91,9.8],[-85.11,9.56],[-85.34,9.83],[-85.66,9.93],[-85.94,10.9],[-85.71,11.09],[-85.56,11.22],[-83.66,10.94],[-82.55,9.57]],[[-83.66,10.94],[-85.71,11.09],[-87.67,12.91],[-86.73,13.26],[-86.76,13.75],[-85.8,13.84],[-84.92,14.79],[-83.15,15],[-83.86,11.37],[-83.81,11.1],[-83.66,10.94]],[[-83.15,15],[-84.92,14.79],[-85.8,13.84],[-86.76,13.75],[-86.73,13.26],[-87.32,12.98],[-87.86,13.89],[-88.07,13.96],[-88.5,13.85],[-89.35,14.42],[-89.15,15.07],[-87.9,15.86],[-84.98,16],[-83.15,15]],[[-89.35,14.42],[-87.72,13.79],[-87.79,13.38],[-87.9,13.15],[-90.1,13.74],[-89.35,14.42]],[[-92.23,14.54],[-91.75,16.07],[-90.46,16.07],[-91.45,17.25],[-91,17.25],[-91,17.82],[-90.07,17.82],[-89.14,17.81],[-89.15,17.02],[-89.23,15.89],[-88.23,15.73],[-88.68,15.35],[-89.15,15.07],[-89.35,14.42],[-90.1,13.74],[-92.23,14.54]],[[-89.14,17.81],[-88.49,18.49],[-88.11,18.35],[-88.36,16.53],[-88.93,15.89],[-89.23,15.89],[-89.15,17.02],[-89.14,17.81]],[[-60.73,5.2],[-60.6,4.92],[-60.97,4.54],[-63.09,3.77],[-64.82,4.06],[-64.37,3.8],[-64.41,3.13],[-64.27,2.5],[-63.42,2.41],[-63.37,2.2],[-65.55,.79],[-66.33,.72],[-67.81,2.82],[-67.3,3.32],[-67.82,4.5],[-67.34,6.1],[-69.39,6.1],[-70.09,6.96],[-70.67,7.09],[-71.96,6.99],[-72.2,7.34],[-72.44,7.42],[-72.79,9.09],[-73.3,9.15],[-73.03,9.74],[-72.91,10.45],[-71.97,11.61],[-71.33,11.78],[-71.36,11.54],[-71.95,11.42],[-71.62,10.97],[-71.63,10.45],[-72.07,9.87],[-71.7,9.07],[-71.26,9.14],[-71.04,9.86],[-71.35,10.21],[-71.4,10.97],[-70.16,11.38],[-70.29,11.85],[-69.94,12.16],[-69.58,11.46],[-68.88,11.44],[-68.23,10.89],[-68.19,10.55],[-67.3,10.55],[-66.23,10.65],[-65.66,10.2],[-64.89,10.08],[-64.33,10.39],[-64.32,10.64],[-63.08,10.7],[-61.88,10.72],[-62.73,10.42],[-62.39,9.95],[-61.59,9.87],[-60.83,9.38],[-60.67,8.58],[-60.15,8.6],[-59.76,8.37],[-60.55,7.78],[-60.64,7.42],[-60.3,7.04],[-60.54,6.86],[-61.16,6.7],[-61.14,6.23],[-61.41,5.96],[-60.73,5.2]],[[-56.54,1.9],[-56.78,1.86],[-57.34,1.95],[-58.54,1.27],[-59.03,1.32],[-59.65,1.79],[-59.72,2.25],[-59.97,2.76],[-59.82,3.61],[-59.54,3.96],[-59.77,4.42],[-60.11,4.57],[-59.98,5.01],[-60.21,5.24],[-60.73,5.2],[-61.41,5.96],[-61.14,6.23],[-61.16,6.7],[-60.54,6.86],[-60.3,7.04],[-60.64,7.42],[-60.55,7.78],[-59.76,8.37],[-57.15,5.97],[-58.04,4.06],[-56.54,1.9]],[[-54.52,2.31],[-55.97,2.51],[-56,1.82],[-56.54,1.9],[-57.15,2.77],[-57.28,3.33],[-57.6,3.33],[-58.04,4.06],[-57.15,5.97],[-53.96,5.76],[-54.48,4.9],[-54.4,4.21],[-54.01,3.62],[-54.52,2.31]],[[-51.66,4.16],[-52.94,2.12],[-54.52,2.31],[-54.01,3.62],[-54.4,4.21],[-54.48,4.9],[-53.96,5.76],[-53.62,5.65],[-52.88,5.41],[-51.82,4.57],[-51.66,4.16]],[[6.19,49.46],[6.66,49.2],[8.1,49.02],[7.59,48.33],[7.47,47.62],[7.19,47.45],[6.74,47.54],[6.77,47.29],[6.04,46.73],[6.02,46.27],[6.5,46.43],[6.84,45.99],[6.8,45.71],[7.1,45.33],[6.75,45.03],[7.01,44.25],[7.55,44.13],[7.44,43.69],[6.53,43.13],[4.56,43.4],[3.1,43.08],[2.99,42.47],[1.83,42.34],[-1.5,43.03],[-1.9,43.42],[-1.38,44.02],[-1.19,46.01],[-2.23,47.06],[-2.96,47.57],[-4.49,47.95],[-4.59,48.68],[-3.3,48.9],[-1.62,48.64],[-1.93,49.78],[-.99,49.35],[1.34,50.13],[1.64,50.95],[2.51,51.15],[4.29,49.91],[6.19,49.46]],[[8.75,42.63],[9.39,43.01],[9.56,42.15],[9.23,41.38],[8.78,41.58],[8.54,42.26],[8.75,42.63]],[[-75.37,-.15],[-75.23,-.91],[-75.54,-1.56],[-76.64,-2.61],[-77.84,-3],[-78.45,-3.87],[-78.64,-4.55],[-79.21,-4.96],[-79.62,-4.45],[-80.03,-4.35],[-80.44,-4.43],[-79.77,-2.66],[-79.99,-2.22],[-80.37,-2.69],[-80.97,-2.25],[-80.76,-1.97],[-80.93,-1.06],[-80.58,-.91],[-80.09,.77],[-79.54,.98],[-78.86,1.38],[-77.42,.4],[-76.58,.26],[-76.29,.42],[-75.8,.08],[-75.37,-.15]],[[-66.28,18.51],[-65.77,18.43],[-65.59,18.23],[-67.18,17.95],[-67.24,18.37],[-67.1,18.52],[-66.28,18.51]],[[-77.57,18.49],[-76.2,17.89],[-76.9,17.87],[-77.21,17.7],[-77.77,17.86],[-78.34,18.23],[-77.57,18.49]],[[-82.27,23.19],[-81.4,23.12],[-80.62,23.11],[-79.68,22.77],[-79.28,22.4],[-78.35,22.51],[-76.52,21.21],[-76.19,21.22],[-75.6,21.02],[-75.67,20.74],[-74.93,20.69],[-74.18,20.28],[-74.3,20.05],[-74.96,19.92],[-77.76,19.86],[-77.09,20.41],[-77.49,20.67],[-78.14,20.74],[-78.48,21.03],[-78.72,21.6],[-82.17,22.39],[-81.8,22.64],[-82.78,22.69],[-84.05,21.91],[-84.55,21.8],[-84.97,21.9],[-83.78,22.79],[-82.27,23.19]],[[31.19,-22.25],[29.43,-22.09],[28.79,-21.64],[28.02,-21.49],[27.73,-20.85],[27.72,-20.5],[27.3,-20.39],[26.16,-19.29],[25.26,-17.74],[27.04,-17.94],[28.95,-16.04],[29.52,-15.64],[30.27,-15.51],[30.34,-15.88],[31.17,-15.86],[32.85,-16.71],[32.66,-20.3],[31.19,-22.25]],[[29.43,-22.09],[28.02,-22.83],[27.12,-23.57],[26.79,-24.24],[26.49,-24.62],[25.94,-24.7],[25.77,-25.17],[25.66,-25.49],[25.03,-25.72],[24.21,-25.67],[23.73,-25.39],[23.31,-25.27],[21.61,-26.73],[20.89,-26.83],[20.67,-26.48],[20.76,-25.87],[20.17,-24.92],[19.9,-24.77],[19.9,-21.85],[20.88,-21.81],[20.91,-18.25],[21.66,-18.22],[23.2,-17.87],[23.58,-18.28],[25.26,-17.74],[26.16,-19.29],[27.3,-20.39],[27.72,-20.5],[27.73,-20.85],[28.02,-21.49],[28.79,-21.64],[29.43,-22.09]],[[19.9,-24.77],[19.89,-28.46],[19,-28.97],[18.46,-29.05],[17.84,-28.86],[17.39,-28.78],[17.22,-28.36],[16.82,-28.08],[16.34,-28.58],[15.6,-27.82],[15.21,-27.09],[14.26,-22.11],[11.79,-18.07],[11.73,-17.3],[13.46,-16.97],[14.06,-17.42],[14.21,-17.35],[18.26,-17.31],[18.96,-17.79],[21.38,-17.93],[23.22,-17.52],[24.03,-17.3],[24.68,-17.35],[25.08,-17.58],[23.58,-18.28],[23.2,-17.87],[21.66,-18.22],[20.91,-18.25],[20.88,-21.81],[19.9,-21.85],[19.9,-24.77]],[[-16.71,13.59],[-17.13,14.37],[-17.63,14.73],[-16.12,16.46],[-14.58,16.6],[-14.1,16.3],[-13.44,16.04],[-12.83,15.3],[-12.17,14.62],[-11.51,12.44],[-16.68,12.38],[-16.84,13.15],[-13.84,13.51],[-15.08,13.88],[-16.71,13.59]],[[-11.51,12.44],[-12.17,14.62],[-11.83,14.8],[-11.67,15.39],[-11.35,15.41],[-10.65,15.13],[-9.55,15.49],[-5.54,15.5],[-5.32,16.2],[-6.45,24.96],[-4.92,24.97],[3.15,19.69],[3.16,19.06],[4.27,19.16],[4.27,16.85],[3.72,16.18],[3.64,15.57],[2.75,15.41],[1.39,15.32],[1.02,14.97],[-1.07,14.97],[-3.1,13.54],[-3.52,13.34],[-4.01,13.47],[-5.22,11.71],[-5.4,10.37],[-8.03,10.21],[-9.13,12.31],[-10.17,11.84],[-11.46,12.08],[-11.51,12.44]],[[-17.06,21],[-16.85,21.33],[-12.93,21.33],[-13.12,22.77],[-12.87,23.28],[-11.94,23.37],[-11.97,25.93],[-8.69,25.88],[-8.68,27.4],[-4.92,24.97],[-6.45,24.96],[-5.32,16.2],[-5.54,15.5],[-9.55,15.49],[-10.65,15.13],[-11.35,15.41],[-11.67,15.39],[-11.83,14.8],[-12.17,14.62],[-12.83,15.3],[-13.44,16.04],[-14.1,16.3],[-14.58,16.6],[-16.46,16.14],[-16.28,20.09],[-16.54,20.57],[-17.06,21]],[[2.69,6.26],[1.87,6.14],[1.62,6.83],[1.66,9.13],[.77,10.47],[1.45,11.55],[2.85,12.24],[3.61,11.66],[3.57,11.33],[3.8,10.73],[2.72,8.51],[2.75,7.87],[2.69,6.26]],[[14.85,22.86],[15.1,21.31],[15.9,20.39],[15.25,16.63],[13.97,15.68],[13.54,14.37],[13.96,14],[13.95,13.35],[14.6,13.33],[14.18,12.48],[13.08,13.6],[12.3,13.04],[11.53,13.33],[10.99,13.39],[9.01,12.83],[7.8,13.34],[7.33,13.1],[6.82,13.12],[6.45,13.49],[5.44,13.87],[4.37,13.75],[4.11,13.53],[3.61,11.66],[2.85,12.24],[2.49,12.23],[2.15,11.94],[2.18,12.63],[1.02,12.85],[.37,14.93],[3.64,15.57],[3.72,16.18],[4.27,16.85],[4.27,19.16],[5.68,19.6],[8.57,21.57],[12,23.47],[13.58,23.04],[14.14,22.49],[14.85,22.86]],[[2.69,6.26],[2.75,7.87],[2.72,8.51],[3.71,10.06],[3.68,12.55],[4.37,13.75],[5.44,13.87],[6.45,13.49],[6.82,13.12],[7.33,13.1],[7.8,13.34],[9.01,12.83],[10.99,13.39],[11.53,13.33],[12.3,13.04],[13.08,13.6],[14.58,12.09],[13.57,10.8],[11.75,6.98],[11.06,6.64],[10.5,7.06],[10.12,7.04],[9.52,6.45],[9.23,6.44],[8.76,5.48],[8.5,4.77],[5.9,4.26],[4.33,6.27],[3.57,6.26],[2.69,6.26]],[[14.5,12.86],[15.47,9.98],[14.17,10.02],[13.95,9.55],[14.54,8.97],[14.98,8.8],[15.12,8.38],[15.44,7.69],[14.54,6.23],[14.48,4.73],[15.86,3.01],[15.94,1.73],[15.15,1.96],[14.34,2.23],[9.65,2.28],[9.8,3.07],[8.49,4.5],[8.5,4.77],[8.76,5.48],[9.23,6.44],[9.52,6.45],[10.12,7.04],[10.5,7.06],[11.06,6.64],[11.75,6.98],[13.57,10.8],[14.42,11.57],[14.47,11.9],[14.58,12.09],[14.18,12.48],[14.21,12.8],[14.5,12.86]],[[.9,11],[.77,10.47],[1.66,9.13],[1.62,6.83],[1.87,6.14],[1.06,5.93],[.84,6.28],[.57,6.91],[.37,10.19],[-.05,10.71],[.02,11.02],[.9,11]],[[.02,11.02],[.71,8.31],[.49,7.41],[.57,6.91],[.84,6.28],[1.06,5.93],[-1.96,4.71],[-2.86,4.99],[-2.81,5.39],[-3.24,6.25],[-2.98,7.38],[-2.56,8.22],[-2.94,10.96],[.02,11.02]],[[-8.03,10.21],[-6.85,10.14],[-6.21,10.52],[-6.05,10.1],[-5.82,10.22],[-5.4,10.37],[-4.33,9.61],[-3.98,9.86],[-3.51,9.9],[-2.83,9.64],[-2.56,8.22],[-2.98,7.38],[-3.24,6.25],[-2.81,5.39],[-2.86,4.99],[-4.65,5.17],[-7.71,4.36],[-7.57,5.71],[-8.6,6.47],[-8.3,8.32],[-8.2,8.46],[-7.83,8.58],[-8.08,9.38],[-8.31,9.79],[-8.23,10.13],[-8.03,10.21]],[[-13.7,12.59],[-11.51,12.44],[-11.46,12.08],[-10.17,11.84],[-9.13,12.31],[-8.03,10.21],[-8.23,10.13],[-8.31,9.79],[-8.08,9.38],[-7.83,8.58],[-8.2,8.46],[-8.3,8.32],[-8.22,8.12],[-8.28,7.69],[-9.21,7.31],[-9.76,8.54],[-10.51,8.35],[-11.12,10.05],[-12.43,9.84],[-13.25,8.9],[-15.13,11.04],[-13.74,11.81],[-13.7,12.59]],[[-16.68,12.38],[-13.7,12.59],[-13.74,11.81],[-15.13,11.04],[-15.66,11.46],[-16.09,11.52],[-16.68,12.38]],[[-8.44,7.69],[-8.6,6.47],[-7.57,5.71],[-7.71,4.36],[-7.97,4.36],[-9,4.83],[-11.44,6.79],[-10.23,8.41],[-10.02,8.43],[-9.76,8.54],[-9.21,7.31],[-8.44,7.69]],[[-13.25,8.9],[-12.43,9.84],[-11.12,10.05],[-10.51,8.35],[-10.23,8.41],[-11.44,6.79],[-12.95,7.8],[-13.12,8.16],[-13.25,8.9]],[[-5.4,10.37],[-5.22,11.71],[-4.43,12.54],[-4.28,13.23],[-3.1,13.54],[-1.07,14.97],[.37,14.93],[1.02,12.85],[2.18,12.63],[2.15,11.94],[1.94,11.64],[.9,11],[-2.94,10.96],[-2.96,10.4],[-2.83,9.64],[-3.51,9.9],[-3.98,9.86],[-4.33,9.61],[-5.4,10.37]],[[27.37,5.23],[24.41,5.11],[23.3,4.61],[22.84,4.71],[22.7,4.63],[22.41,4.03],[19.47,5.03],[18.93,4.71],[18.54,4.2],[18.45,3.5],[17.81,3.56],[17.13,3.73],[16.54,3.2],[16.01,2.27],[15.91,2.56],[15.86,3.01],[14.48,4.73],[14.56,5.03],[14.46,5.45],[15.28,7.42],[17.96,7.89],[18.39,8.28],[18.91,8.63],[18.81,8.98],[21,9.48],[21.72,10.57],[22.23,10.97],[22.86,11.14],[22.98,10.71],[23.55,10.09],[23.46,8.95],[25.11,7.83],[27.37,5.23]],[[18.45,3.5],[17.64,-.42],[16.41,-1.74],[15.97,-2.71],[16.01,-3.54],[14.58,-4.97],[14.21,-4.79],[14.14,-4.51],[13.6,-4.5],[13.26,-4.88],[13,-4.78],[12.62,-4.44],[12.32,-4.61],[11.91,-5.04],[11.09,-3.98],[11.86,-3.43],[11.48,-2.77],[11.82,-2.51],[12.5,-2.39],[12.58,-1.95],[13.11,-2.43],[13.99,-2.47],[14.3,-2],[14.43,-1.33],[14.32,-.55],[13.84,.04],[14.28,1.2],[14.03,1.4],[13.28,1.31],[13,1.83],[13.08,2.27],[15.94,1.73],[17.13,3.73],[17.81,3.56],[18.45,3.5]],[[11.28,2.26],[12.95,2.32],[13.28,1.31],[14.03,1.4],[14.28,1.2],[13.84,.04],[14.32,-.55],[14.43,-1.33],[14.3,-2],[13.99,-2.47],[13.11,-2.43],[12.58,-1.95],[12.5,-2.39],[11.82,-2.51],[11.48,-2.77],[11.86,-3.43],[11.09,-3.98],[8.8,-1.11],[9.49,1.01],[9.83,1.07],[11.29,1.06],[11.28,2.26]],[[9.65,2.28],[11.28,2.26],[11.29,1.06],[9.83,1.07],[9.49,1.01],[9.31,1.16],[9.65,2.28]],[[30.74,-8.34],[33.23,-9.68],[33.31,-12.44],[32.99,-12.78],[32.69,-13.71],[33.21,-13.97],[30.18,-14.8],[30.27,-15.51],[29.52,-15.64],[28.95,-16.04],[27.04,-17.94],[24.68,-17.35],[24.03,-17.3],[23.22,-17.52],[22.56,-16.9],[21.89,-16.08],[21.93,-12.9],[24.02,-12.91],[23.91,-10.93],[25.42,-11.33],[25.75,-11.78],[26.55,-11.92],[27.16,-11.61],[28.93,-13.25],[29.7,-13.26],[29.62,-12.18],[29.34,-12.36],[28.64,-11.97],[28.37,-11.79],[28.45,-9.16],[28.73,-8.53],[29,-8.41],[30.35,-8.24],[30.74,-8.34]],[[32.76,-9.23],[33.74,-9.42],[33.94,-9.69],[34.28,-10.16],[34.56,-13.58],[34.91,-13.57],[35.27,-13.89],[35.69,-14.61],[35.77,-15.9],[35.34,-16.11],[35.03,-16.8],[34.38,-16.18],[34.46,-14.61],[32.69,-13.71],[32.99,-12.78],[33.31,-12.44],[33.11,-11.61],[33.32,-10.8],[33.49,-10.53],[33.23,-9.68],[32.76,-9.23]],[[34.56,-11.52],[37.47,-11.57],[40.32,-10.32],[40.78,-14.69],[39.45,-16.72],[38.54,-17.1],[37.41,-17.59],[34.79,-19.78],[34.7,-20.5],[35.56,-22.09],[35.46,-24.12],[33.01,-25.36],[32.57,-25.73],[32.83,-26.74],[32.07,-26.73],[31.93,-24.37],[31.67,-23.66],[31.19,-22.25],[32.66,-20.3],[32.85,-16.71],[31.17,-15.86],[30.34,-15.88],[30.27,-15.51],[30.18,-14.8],[33.21,-13.97],[34.46,-14.61],[34.38,-16.18],[35.03,-16.8],[35.34,-16.11],[35.77,-15.9],[35.69,-14.61],[35.27,-13.89],[34.91,-13.57],[34.56,-13.58],[34.28,-12.28],[34.56,-11.52]],[[32.07,-26.73],[31.87,-27.18],[31.28,-27.29],[30.69,-26.74],[31.04,-25.73],[31.33,-25.66],[31.84,-25.84],[31.99,-26.29],[32.07,-26.73]],[[13,-4.78],[12.18,-5.79],[11.91,-5.04],[12.32,-4.61],[12.62,-4.44],[13,-4.78]],[[12.32,-6.1],[16.33,-5.88],[17.47,-8.07],[19.02,-7.99],[19.17,-7.74],[19.42,-7.16],[20.04,-7.12],[20.09,-6.94],[20.6,-6.94],[20.51,-7.3],[21.73,-7.29],[22.16,-11.08],[23.46,-10.87],[23.91,-10.93],[24.02,-11.24],[24.02,-12.91],[21.93,-12.9],[21.89,-16.08],[22.56,-16.9],[23.22,-17.52],[21.38,-17.93],[18.96,-17.79],[18.26,-17.31],[14.21,-17.35],[14.06,-17.42],[13.46,-16.97],[11.73,-17.3],[12.18,-14.45],[13.74,-11.3],[12.88,-9.17],[12.93,-8.96],[13.24,-8.56],[12.32,-6.1]],[[30.47,-2.41],[30.75,-3.36],[29.34,-4.5],[29.28,-3.29],[29.02,-2.84],[30.47,-2.41]],[[35.72,32.71],[35.55,32.39],[35.18,32.53],[34.97,31.87],[35.23,31.75],[34.97,31.62],[34.93,31.35],[35.4,31.49],[35.42,31.1],[34.92,29.5],[34.27,31.22],[35.1,33.08],[35.82,33.28],[35.72,32.71]],[[35.82,33.28],[35.13,33.09],[36,34.64],[36.45,34.59],[36.61,34.2],[36.07,33.82],[35.82,33.28]],[[49.54,-12.47],[50.38,-15.71],[50.2,-16],[49.86,-15.41],[49.67,-15.71],[49.86,-16.45],[49.77,-16.88],[47.1,-24.94],[46.28,-25.18],[45.41,-25.6],[44.83,-25.35],[44.04,-24.99],[43.35,-22.78],[43.25,-22.06],[43.43,-21.34],[43.89,-21.16],[44.46,-19.44],[43.96,-17.41],[44.31,-16.85],[44.45,-16.22],[46.31,-15.78],[46.88,-15.21],[47.71,-14.59],[48.01,-14.09],[47.87,-13.66],[48.29,-13.78],[49.19,-12.04],[49.54,-12.47]],[[35.4,31.49],[34.93,31.35],[35.18,32.53],[35.55,32.39],[35.55,31.78],[35.4,31.49]],[[-16.71,13.59],[-15.08,13.88],[-13.84,13.51],[-16.84,13.15],[-16.71,13.59]],[[9.48,30.31],[9.06,32.1],[7.61,33.34],[7.52,34.1],[8.14,34.66],[8.42,36.95],[9.51,37.35],[10.21,37.23],[10.18,36.72],[11.03,37.09],[11.1,36.9],[10.6,36.41],[10.81,34.83],[10.15,34.33],[10.34,33.79],[11.49,33.14],[11.43,32.37],[9.95,31.38],[10.06,30.96],[9.97,30.54],[9.48,30.31]],[[-8.68,27.4],[-8.67,28.84],[-5.24,30],[-4.86,30.5],[-3.69,30.9],[-3.65,31.64],[-1.31,32.26],[-1.12,32.65],[-2.17,35.17],[-1.21,35.71],[1.47,36.61],[5.32,36.72],[6.26,37.11],[8.42,36.95],[8.14,34.66],[7.52,34.1],[7.61,33.34],[9.06,32.1],[9.48,30.31],[9.81,29.42],[9.72,26.51],[9.32,26.09],[10.3,24.38],[10.77,24.56],[11.56,24.1],[12,23.47],[8.57,21.57],[5.68,19.6],[4.27,19.16],[3.16,19.06],[3.15,19.69],[-8.68,27.4]],[[35.55,32.39],[35.72,32.71],[36.83,32.31],[38.79,33.38],[39.2,32.16],[39,32.01],[37,31.51],[38,30.51],[36.07,29.2],[34.96,29.36],[34.92,29.5],[35.55,32.39]],[[51.58,24.25],[54.01,24.12],[56.07,26.06],[56.26,25.71],[56.4,24.92],[55.89,24.92],[55.8,24.27],[55.98,24.13],[55.53,23.93],[55.01,22.5],[52,23],[51.62,24.01],[51.58,24.25]],[[50.81,24.75],[50.74,25.48],[51.01,26.01],[51.29,26.11],[51.59,25.8],[51.61,25.22],[51.39,24.63],[51.11,24.56],[50.81,24.75]],[[47.97,29.98],[48.42,28.55],[46.57,29.1],[47.3,30.06],[47.97,29.98]],[[39.2,32.16],[38.79,33.38],[41.01,34.42],[41.38,35.63],[41.29,36.36],[42.78,37.39],[44.77,37.17],[45.42,35.98],[46.08,35.68],[46.15,35.09],[45.65,34.75],[45.42,33.97],[46.11,33.02],[47.33,32.47],[47.85,31.71],[47.69,30.98],[48.57,29.93],[47.97,29.98],[47.3,30.06],[46.57,29.1],[44.71,29.18],[41.89,31.19],[40.4,31.89],[39.2,32.16]],[[55.21,22.71],[55.53,23.93],[55.98,24.13],[55.8,24.27],[55.89,24.92],[56.4,24.92],[56.85,24.24],[57.4,23.88],[58.14,23.75],[58.73,23.57],[59.81,22.31],[58.49,20.43],[58.03,20.48],[57.83,20.24],[57.69,18.94],[57.23,18.95],[56.61,18.57],[56.51,18.09],[56.28,17.88],[55.66,17.88],[54.79,16.95],[53.11,16.65],[52.78,17.35],[52,19],[55,20],[55.67,22],[55.21,22.71]],[[56.26,25.71],[56.07,26.06],[56.36,26.4],[56.26,25.71]],[[167.22,-15.89],[167.84,-16.47],[167.52,-16.6],[167.18,-16.16],[167.22,-15.89]],[[166.79,-15.67],[166.65,-15.39],[166.63,-14.63],[167.11,-14.93],[167.27,-15.74],[167,-15.61],[166.79,-15.67]],[[102.58,12.19],[102.35,13.39],[102.99,14.23],[104.28,14.42],[105.22,14.27],[106.04,13.88],[106.5,14.57],[107.38,14.2],[107.61,13.54],[107.49,12.34],[105.81,11.57],[106.25,10.96],[103.5,10.63],[103.09,11.15],[102.58,12.19]],[[105.22,14.27],[104.28,14.42],[102.99,14.23],[102.35,13.39],[102.58,12.19],[101.69,12.65],[100.83,12.63],[100.98,13.41],[100.1,13.41],[99.22,9.24],[99.87,9.21],[100.28,8.3],[100.46,7.43],[102.14,6.22],[101.81,5.81],[101.15,5.69],[101.08,6.2],[100.26,6.64],[100.09,6.46],[98.5,8.38],[98.34,7.79],[98.15,8.35],[99.59,11.89],[99.1,13.83],[98.43,14.62],[98.19,15.12],[98.54,15.31],[98.9,16.18],[97.38,18.45],[97.8,18.63],[98.25,19.71],[100.12,20.42],[100.55,20.11],[100.61,19.51],[101.28,19.46],[101.04,18.41],[101.06,17.51],[102.11,18.11],[102.41,17.93],[103,17.96],[103.2,18.31],[103.96,18.24],[104.72,17.43],[104.78,16.44],[105.59,15.57],[105.54,14.72],[105.22,14.27]],[[107.38,14.2],[106.5,14.57],[106.04,13.88],[105.22,14.27],[105.54,14.72],[105.59,15.57],[103.96,18.24],[102.11,18.11],[101.06,17.51],[101.04,18.41],[101.28,19.46],[100.61,19.51],[100.55,20.11],[100.12,20.42],[100.33,20.79],[101.18,21.44],[101.27,21.2],[101.8,21.17],[101.65,22.32],[102.17,22.46],[102.75,21.68],[103.2,20.77],[104.44,20.76],[104.82,19.89],[104.18,19.62],[103.9,19.27],[105.09,18.67],[107.31,15.91],[107.56,15.2],[107.38,14.2]],[[100.12,20.42],[98.25,19.71],[97.8,18.63],[97.38,18.45],[98.9,16.18],[98.54,15.31],[98.19,15.12],[98.43,14.62],[99.1,13.83],[99.59,11.89],[99.04,10.96],[98.55,9.93],[98.51,13.12],[97.16,16.93],[96.51,16.43],[95.37,15.71],[94.81,15.8],[94.19,16.04],[94.53,17.28],[94.32,18.21],[93.54,19.37],[93.66,19.73],[93.08,19.86],[92.37,20.67],[92.3,21.48],[92.65,21.32],[92.67,22.04],[93.17,22.28],[93.33,24.08],[94.11,23.85],[95.12,26.57],[96.42,27.26],[97.13,27.08],[97.33,28.26],[97.91,28.34],[98.25,27.75],[98.68,27.51],[98.71,26.74],[98.67,25.92],[97.72,25.08],[97.6,23.9],[98.66,24.06],[98.9,23.14],[99.53,22.95],[99.24,22.12],[99.98,21.74],[100.42,21.56],[101.15,21.85],[101.18,21.44],[100.33,20.79],[100.12,20.42]],[[104.33,10.49],[105.2,10.89],[106.25,10.96],[105.81,11.57],[107.49,12.34],[107.56,15.2],[105.09,18.67],[103.9,19.27],[104.18,19.62],[104.82,19.89],[104.44,20.76],[103.2,20.77],[102.75,21.68],[102.17,22.46],[104.48,22.82],[105.33,23.35],[105.81,22.98],[106.73,22.79],[106.57,22.22],[107.04,21.81],[108.05,21.55],[106.72,20.7],[105.88,19.75],[105.66,19.06],[108.88,15.28],[109.34,13.43],[109.2,11.67],[105.16,8.6],[104.8,9.24],[105.08,9.92],[104.33,10.49]],[[130.64,42.4],[129.67,41.6],[129.71,40.88],[127.53,39.76],[127.5,39.32],[127.39,39.21],[127.78,39.05],[128.35,38.61],[128.21,38.37],[125.28,37.67],[124.71,38.11],[125.39,39.39],[124.27,39.93],[125.08,40.57],[126.18,41.11],[126.87,41.82],[127.34,41.5],[128.21,41.47],[128.05,41.99],[129.6,42.42],[129.99,42.99],[130.64,42.4]],[[126.17,37.75],[128.35,38.61],[129.21,37.43],[129.46,36.78],[129.47,35.63],[129.09,35.08],[126.49,34.39],[126.37,34.93],[126.56,35.68],[126.12,36.73],[126.86,36.89],[126.17,37.75]],[[87.75,49.3],[92.23,50.8],[97.26,49.73],[98.23,50.42],[97.83,51.01],[98.86,52.05],[102.07,51.26],[102.26,50.51],[103.68,50.09],[106.89,50.27],[107.87,49.79],[108.48,49.28],[109.4,49.29],[110.66,49.13],[111.58,49.38],[112.9,49.54],[114.36,50.25],[114.96,50.14],[115.49,49.81],[116.68,49.89],[116.19,49.13],[115.49,48.14],[115.74,47.73],[116.31,47.85],[117.3,47.7],[118.06,48.07],[118.87,47.75],[119.77,47.05],[119.66,46.69],[118.87,46.81],[117.42,46.67],[113.46,44.81],[112.44,45.01],[111.87,45.1],[111.35,44.46],[111.67,44.07],[111.83,43.74],[111.13,43.41],[110.41,42.87],[106.13,42.13],[104.96,41.6],[100.85,42.66],[96.35,42.73],[95.76,43.32],[95.31,44.24],[94.69,44.35],[93.48,44.98],[92.13,45.12],[90.95,45.29],[90.59,45.72],[90.97,46.89],[90.28,47.69],[88.85,48.07],[88.01,48.6],[87.75,49.3]],[[97.33,28.26],[97.13,27.08],[96.42,27.26],[95.12,26.57],[94.11,23.85],[93.33,24.08],[93.17,22.28],[92.67,22.04],[92.15,23.63],[91.87,23.62],[91.71,22.99],[91.16,23.5],[92.38,24.98],[89.92,25.27],[89.83,25.97],[89.36,26.01],[88.56,26.45],[88.21,25.77],[88.93,25.24],[88.31,24.87],[88.08,24.5],[88.7,24.23],[88.89,21.69],[88.21,21.7],[86.98,21.5],[87.03,20.74],[86.5,20.15],[85.06,19.48],[82.19,17.02],[82.19,16.56],[80.32,15.9],[79.86,10.36],[79.34,10.31],[78.89,9.55],[79.19,9.22],[78.28,8.93],[77.94,8.25],[77.54,7.97],[76.59,8.9],[74.86,12.74],[74.62,13.99],[74.44,14.62],[73.53,15.99],[72.63,21.36],[71.18,20.76],[70.47,20.88],[69.16,22.09],[69.64,22.45],[69.35,22.84],[68.18,23.69],[68.84,24.36],[71.04,24.36],[70.17,26.49],[69.51,26.94],[70.62,27.99],[71.78,27.91],[74.42,30.98],[74.41,31.69],[75.26,32.27],[74.45,32.76],[74.1,33.44],[73.75,34.32],[74.24,34.75],[75.76,34.5],[76.87,34.65],[77.84,35.49],[78.91,34.32],[78.81,33.51],[79.21,32.99],[79.18,32.48],[78.46,32.62],[78.74,31.52],[79.72,30.88],[81.11,30.18],[80.48,29.73],[80.09,28.79],[83.3,27.36],[88.06,26.41],[88.12,27.88],[88.73,28.09],[88.81,27.3],[88.84,27.1],[89.74,26.72],[92.03,26.84],[92.1,27.45],[91.7,27.77],[92.5,27.9],[93.41,28.64],[94.57,29.28],[95.4,29.03],[96.12,29.45],[96.59,28.83],[96.25,28.41],[97.33,28.26]],[[92.67,22.04],[92.37,20.67],[91.42,22.77],[90.5,22.81],[90.59,22.39],[90.27,21.84],[89.03,22.06],[88.88,22.88],[88.53,23.63],[88.7,24.23],[88.08,24.5],[88.31,24.87],[88.93,25.24],[88.21,25.77],[88.56,26.45],[89.36,26.01],[89.83,25.97],[89.92,25.27],[92.38,24.98],[91.16,23.5],[91.71,22.99],[91.87,23.62],[92.15,23.63],[92.67,22.04]],[[91.7,27.77],[92.1,27.45],[92.03,26.84],[89.74,26.72],[88.84,27.1],[90.02,28.3],[91.7,27.77]],[[88.12,27.88],[88.06,26.41],[87.23,26.4],[83.3,27.36],[80.09,28.79],[80.48,29.73],[81.11,30.18],[81.53,30.42],[85.82,28.2],[86.95,27.97],[88.12,27.88]],[[77.84,35.49],[76.87,34.65],[75.76,34.5],[74.24,34.75],[73.75,34.32],[74.1,33.44],[74.45,32.76],[75.26,32.27],[74.41,31.69],[74.42,30.98],[71.78,27.91],[70.62,27.99],[69.51,26.94],[70.17,26.49],[71.04,24.36],[68.84,24.36],[68.18,23.69],[67.44,23.94],[67.15,24.66],[66.37,25.43],[61.5,25.08],[61.87,26.24],[63.32,26.76],[63.23,27.22],[62.76,27.38],[62.73,28.26],[61.77,28.7],[61.37,29.3],[60.87,29.83],[62.55,29.32],[66.35,29.89],[66.38,30.74],[66.94,31.3],[69.32,31.9],[69.26,32.5],[69.69,33.11],[70.32,33.36],[69.93,34.02],[70.88,33.99],[71.61,35.15],[71.5,35.65],[71.26,36.07],[71.85,36.51],[75.16,37.13],[75.9,36.67],[76.19,35.9],[77.84,35.49]],[[66.52,37.36],[69.2,37.15],[69.52,37.61],[70.12,37.59],[70.81,38.49],[71.35,38.26],[71.45,37.07],[71.84,36.74],[73.26,37.5],[75.16,37.13],[71.85,36.51],[71.26,36.07],[71.5,35.65],[71.61,35.15],[70.88,33.99],[69.93,34.02],[70.32,33.36],[69.69,33.11],[69.26,32.5],[69.32,31.9],[66.94,31.3],[66.38,30.74],[66.35,29.89],[62.55,29.32],[60.87,29.83],[61.78,30.74],[61.7,31.38],[60.94,31.55],[60.86,32.18],[60.54,32.98],[60.96,33.53],[60.53,33.68],[60.8,34.4],[61.21,35.65],[62.23,35.27],[62.98,35.4],[63.19,35.86],[63.98,36.01],[64.55,36.31],[64.75,37.11],[65.59,37.31],[65.75,37.66],[66.22,37.39],[66.52,37.36]],[[67.83,37.14],[68.39,38.16],[68.18,38.9],[67.44,39.14],[67.7,39.58],[68.54,39.53],[69.01,40.09],[69.33,40.73],[70.67,40.96],[70.46,40.5],[70.6,40.22],[71.01,40.24],[70.65,39.94],[69.56,40.1],[69.46,39.53],[73.68,39.43],[73.93,38.51],[74.26,38.61],[74.86,38.38],[74.83,37.99],[74.98,37.42],[73.95,37.42],[73.26,37.5],[71.84,36.74],[71.45,37.07],[71.35,38.26],[70.81,38.49],[70.12,37.59],[69.52,37.61],[69.2,37.15],[67.83,37.14]],[[70.96,42.27],[71.19,42.7],[71.84,42.85],[73.49,42.5],[73.65,43.09],[74.21,43.3],[75.64,42.88],[79.14,42.86],[79.64,42.5],[80.26,42.35],[78.19,41.19],[76.9,41.07],[76.53,40.43],[75.47,40.56],[74.78,40.37],[73.82,39.89],[73.96,39.66],[73.68,39.43],[69.46,39.53],[69.56,40.1],[71.77,40.15],[73.06,40.87],[70.42,41.52],[71.26,42.17],[70.96,42.27]],[[52.5,41.78],[52.94,42.12],[54.08,42.32],[54.76,42.04],[55.46,41.26],[55.97,41.31],[57.1,41.32],[56.93,41.83],[57.79,42.17],[58.63,42.75],[59.98,42.22],[60.08,41.43],[60.47,41.22],[61.55,41.27],[61.88,41.08],[62.37,40.05],[63.52,39.36],[64.17,38.89],[65.22,38.4],[66.55,37.97],[66.52,37.36],[66.22,37.39],[65.75,37.66],[65.59,37.31],[64.75,37.11],[64.55,36.31],[62.23,35.27],[61.21,35.65],[61.12,36.49],[57.33,38.03],[55.51,37.96],[54.8,37.39],[53.92,37.2],[53.74,37.91],[53.88,38.95],[53.1,39.29],[53.36,39.98],[52.69,40.03],[52.92,40.88],[53.86,40.63],[54.74,40.95],[54.01,41.55],[53.72,42.12],[52.92,41.87],[52.81,41.14],[52.5,41.78]],[[48.57,29.93],[47.69,30.98],[47.85,31.71],[47.33,32.47],[46.11,33.02],[45.42,33.97],[45.65,34.75],[46.15,35.09],[46.08,35.68],[45.42,35.98],[44.23,37.97],[44.42,38.28],[44.11,39.43],[44.79,39.71],[44.95,39.34],[45.46,38.87],[46.14,38.74],[48.06,39.58],[48.36,39.29],[48.01,38.79],[48.63,38.27],[48.88,38.32],[49.2,37.58],[50.15,37.37],[50.84,36.87],[52.26,36.7],[53.83,36.97],[55.51,37.96],[56.18,37.94],[56.62,38.12],[61.12,36.49],[61.21,35.65],[60.8,34.4],[60.53,33.68],[60.96,33.53],[60.54,32.98],[60.86,32.18],[60.94,31.55],[61.7,31.38],[61.78,30.74],[60.87,29.83],[61.37,29.3],[61.77,28.7],[62.73,28.26],[62.76,27.38],[63.23,27.22],[63.32,26.76],[61.87,26.24],[61.5,25.08],[57.4,25.74],[56.97,26.97],[56.49,27.14],[55.72,26.96],[54.72,26.48],[53.49,26.81],[52.48,27.58],[51.52,27.87],[50.85,28.81],[50.12,30.15],[49.58,29.99],[48.94,30.32],[48.57,29.93]],[[35.72,32.71],[36.07,33.82],[36.61,34.2],[36.45,34.59],[36,34.64],[35.91,35.41],[36.74,36.82],[39.52,36.72],[42.35,37.23],[41.84,36.61],[41.29,36.36],[41.38,35.63],[41.01,34.42],[38.79,33.38],[36.83,32.31],[35.72,32.71]],[[46.51,38.77],[46.14,38.74],[45.74,39.32],[45.74,39.47],[43.66,40.25],[43.75,40.74],[43.58,41.09],[44.97,41.25],[45.18,40.99],[45.56,40.81],[45.36,40.56],[45.89,40.22],[45.61,39.9],[46.03,39.63],[46.48,39.46],[46.51,38.77]],[[11.03,58.86],[11.47,59.43],[12.3,60.12],[12.63,61.29],[11.99,61.8],[11.93,63.13],[12.58,64.07],[13.57,64.05],[13.92,64.45],[13.56,64.79],[16.77,68.01],[17.73,68.01],[17.99,68.57],[19.88,68.41],[20.03,69.07],[20.65,69.11],[21.98,68.62],[23.54,67.94],[23.57,66.4],[23.9,66.01],[22.18,65.72],[21.21,65.03],[21.37,64.41],[19.78,63.61],[17.85,62.75],[17.12,61.34],[17.83,60.64],[18.79,60.08],[17.87,58.95],[16.83,58.72],[16.45,57.04],[15.88,56.1],[14.67,56.2],[14.1,55.41],[12.94,55.36],[11.03,58.86]],[[28.18,56.17],[30.87,55.55],[30.97,55.08],[30.76,54.81],[32.69,53.35],[31.31,53.07],[31.79,52.1],[30.93,52.04],[30.62,51.82],[30.56,51.32],[25.33,51.91],[23.53,51.58],[23.51,52.02],[23.2,52.49],[23.8,52.69],[23.48,53.91],[24.45,53.91],[25.54,54.28],[25.77,54.85],[26.59,55.17],[26.49,55.62],[27.1,55.78],[28.18,56.17]],[[31.79,52.1],[33.75,52.34],[34.39,51.77],[34.14,51.57],[34.22,51.26],[35.02,51.21],[35.38,50.77],[35.36,50.58],[40.07,49.6],[39.74,47.9],[38.77,47.83],[38.26,47.55],[38.22,47.1],[34.96,46.27],[35.01,45.74],[31.74,46.33],[31.68,46.71],[30.75,46.58],[30.38,46.03],[29.6,45.29],[29.15,45.46],[28.68,45.3],[28.23,45.49],[28.86,46.44],[30.02,46.42],[28.67,48.12],[28.26,48.16],[27.52,48.47],[24.87,47.74],[22.71,47.88],[22.64,48.15],[22.09,48.42],[22.78,49.03],[22.52,49.48],[23.43,50.31],[23.92,50.42],[24.03,50.71],[23.53,51.58],[25.33,51.91],[30.56,51.32],[30.62,51.82],[30.93,52.04],[31.79,52.1]],[[23.48,53.91],[23.8,52.69],[23.2,52.49],[24.03,50.71],[22.52,49.48],[22.78,49.03],[22.56,49.09],[21.61,49.47],[19.83,49.22],[17.55,50.36],[16.18,50.42],[16.24,50.7],[15.49,50.78],[15.02,51.11],[14.07,52.98],[14.35,53.25],[14.12,53.76],[17.62,54.85],[18.62,54.68],[18.7,54.44],[22.73,54.33],[23.24,54.22],[23.48,53.91]],[[16.98,48.12],[16.9,47.71],[16.34,47.71],[16.53,47.5],[16.2,46.85],[16.01,46.68],[15.14,46.66],[14.63,46.43],[13.81,46.51],[12.38,46.77],[12.15,47.12],[11.16,46.94],[11.05,46.75],[9.48,47.1],[9.9,47.58],[10.4,47.3],[12.14,47.7],[12.62,47.67],[12.93,47.47],[13.03,47.64],[12.88,48.29],[13.24,48.42],[13.6,48.88],[14.34,48.56],[14.9,48.96],[15.25,49.04],[16.03,48.73],[16.5,48.79],[16.96,48.6],[16.88,48.47],[16.98,48.12]],[[22.09,48.42],[22.64,48.15],[22.71,47.88],[22.1,47.67],[21.63,46.99],[21.02,46.32],[18.46,45.76],[16.2,46.85],[16.53,47.5],[16.34,47.71],[16.9,47.71],[16.98,48.12],[17.49,47.87],[17.86,47.76],[20.8,48.62],[21.87,48.32],[22.09,48.42]],[[26.62,48.22],[26.86,48.37],[27.52,48.47],[28.26,48.16],[28.67,48.12],[30.02,46.42],[28.86,46.44],[28.23,45.49],[28.13,46.81],[26.62,48.22]],[[28.23,45.49],[29.6,45.29],[28.84,44.91],[28.56,43.71],[27.97,43.81],[27.24,44.18],[26.07,43.94],[25.57,43.69],[22.94,43.82],[22.66,44.23],[22.47,44.41],[22.71,44.58],[21.56,44.77],[20.22,46.13],[21.02,46.32],[21.63,46.99],[22.1,47.67],[22.71,47.88],[23.14,48.1],[24.87,47.74],[26.62,48.22],[28.13,46.81],[28.23,45.49]],[[26.49,55.62],[26.59,55.17],[25.77,54.85],[25.54,54.28],[24.45,53.91],[23.48,53.91],[23.24,54.22],[22.73,54.33],[22.65,54.58],[22.76,54.86],[22.32,55.02],[21.27,55.19],[21.06,56.03],[24.86,56.37],[26.49,55.62]],[[27.29,57.47],[27.77,57.24],[27.86,56.76],[28.18,56.17],[27.1,55.78],[26.49,55.62],[24.86,56.37],[21.06,56.03],[21.09,56.78],[21.58,57.41],[22.52,57.75],[23.32,57.01],[24.12,57.03],[24.31,57.79],[25.16,57.97],[27.29,57.47]],[[27.98,59.48],[27.42,58.72],[27.72,57.79],[27.29,57.47],[25.16,57.97],[24.31,57.79],[24.43,58.38],[24.06,58.26],[23.43,58.61],[23.34,59.19],[24.6,59.47],[25.86,59.61],[27.98,59.48]],[[14.12,53.76],[14.35,53.25],[14.07,52.98],[15.02,51.11],[12.24,50.27],[12.42,49.97],[12.52,49.55],[13.03,49.31],[13.6,48.88],[13.24,48.42],[12.88,48.29],[13.03,47.64],[12.93,47.47],[7.47,47.62],[7.59,48.33],[8.1,49.02],[6.66,49.2],[6.04,50.13],[6.16,50.8],[5.99,51.85],[6.59,51.85],[6.84,52.23],[7.1,53.69],[7.94,53.75],[8.12,53.53],[8.8,54.02],[8.57,54.4],[8.53,54.96],[9.28,54.83],[9.92,54.98],[9.94,54.6],[10.95,54.36],[10.94,54.01],[11.96,54.2],[12.52,54.47],[13.65,54.08],[14.12,53.76]],[[22.66,44.23],[22.94,43.82],[25.57,43.69],[26.07,43.94],[27.24,44.18],[27.97,43.81],[28.56,43.71],[28.04,43.29],[27.67,42.58],[28,42.01],[27.14,42.14],[26.12,41.83],[26.11,41.33],[25.2,41.23],[24.49,41.58],[23.69,41.31],[22.95,41.34],[22.88,42],[22.38,42.32],[22.99,43.21],[22.5,43.64],[22.41,44.01],[22.66,44.23]],[[26.29,35.3],[26.16,35],[24.72,34.92],[24.74,35.08],[23.51,35.28],[23.7,35.71],[26.29,35.3]],[[22.95,41.34],[23.69,41.31],[24.49,41.58],[25.2,41.23],[26.11,41.33],[26.12,41.83],[26.6,41.56],[26.29,40.94],[26.06,40.82],[23.71,40.69],[24.41,40.12],[22.63,40.26],[22.85,39.66],[23.35,39.19],[22.97,38.97],[23.53,38.51],[24.03,38.22],[24.04,37.66],[23.12,37.92],[23.41,37.41],[22.77,37.31],[23.15,36.42],[22.49,36.41],[21.67,36.84],[20.15,39.62],[21.02,40.84],[22.95,41.34]],[[44.77,37.17],[42.78,37.39],[39.52,36.72],[36.74,36.82],[36.15,35.82],[35.78,36.27],[36.16,36.65],[35.55,36.57],[34.71,36.8],[34.03,36.22],[32.51,36.11],[31.7,36.64],[30.62,36.68],[30.39,36.26],[29.7,36.14],[28.73,36.68],[27.64,36.66],[27.05,37.65],[26.32,38.21],[26.8,38.99],[26.17,39.46],[27.28,40.42],[28.82,40.46],[29.24,41.22],[31.15,41.09],[32.35,41.74],[33.51,42.02],[35.17,42.04],[36.91,41.34],[38.35,40.95],[42.62,41.58],[43.58,41.09],[43.75,40.74],[43.66,40.25],[44.4,40.01],[44.79,39.71],[44.11,39.43],[44.42,38.28],[44.23,37.97],[44.77,37.17],[44.77,37.17]],[[26.12,41.83],[27.14,42.14],[28,42.01],[28.12,41.62],[28.99,41.3],[28.81,41.05],[27.62,41],[27.19,40.69],[26.36,40.15],[26.04,40.62],[26.06,40.82],[26.29,40.94],[26.6,41.56],[26.12,41.83]],[[21.02,40.84],[20.15,39.62],[19.41,40.25],[19.3,42.2],[19.74,42.69],[20.52,42.22],[20.61,41.09],[21.02,40.84]],[[16.56,46.5],[16.88,46.38],[17.63,45.95],[18.46,45.76],[18.83,45.91],[19.07,45.52],[19.39,45.24],[19.01,44.86],[15.96,45.23],[15.75,44.82],[18.45,42.48],[16.02,43.51],[15.17,44.24],[14.9,45.08],[14.26,45.23],[13.95,44.8],[13.66,45.14],[13.68,45.48],[13.72,45.5],[15.33,45.45],[15.77,46.24],[16.56,46.5]],[[9.59,47.53],[9.63,47.35],[9.48,47.1],[9.93,46.92],[10.44,46.89],[10.36,46.48],[7.27,45.78],[6.84,45.99],[6.5,46.43],[6.02,46.27],[6.74,47.54],[8.52,47.83],[9.59,47.53]],[[6.04,50.13],[6.24,49.9],[6.19,49.46],[5.9,49.44],[5.67,49.53],[5.78,50.09],[6.04,50.13]],[[6.16,50.8],[5.67,49.53],[4.8,49.99],[4.29,49.91],[2.51,51.15],[4.97,51.48],[5.61,51.04],[6.16,50.8]],[[6.91,53.48],[7.09,53.14],[6.84,52.23],[6.59,51.85],[5.99,51.85],[6.16,50.8],[5.61,51.04],[4.97,51.48],[4.05,51.27],[3.31,51.35],[4.71,53.09],[6.07,53.51],[6.91,53.48]],[[-9.03,41.88],[-8.67,42.13],[-8.26,42.28],[-8.01,41.79],[-6.67,41.88],[-6.39,41.38],[-6.85,41.11],[-7.07,39.71],[-7.5,39.63],[-7.03,38.08],[-7.86,36.84],[-8.38,36.98],[-8.9,36.87],[-8.75,37.65],[-8.84,38.27],[-9.29,38.36],[-9.53,38.74],[-8.77,40.76],[-9.03,41.88]],[[-7.45,37.1],[-7.03,38.08],[-7.5,39.63],[-7.07,39.71],[-6.85,41.11],[-6.39,41.38],[-6.67,41.88],[-8.01,41.79],[-8.26,42.28],[-8.67,42.13],[-9.03,41.88],[-8.98,42.59],[-9.39,43.03],[-7.98,43.75],[-1.9,43.42],[-1.5,43.03],[.34,42.58],[2.99,42.47],[3.04,41.89],[2.09,41.23],[.81,41.01],[-.28,39.31],[.11,38.74],[-.47,38.29],[-.68,37.64],[-1.44,37.44],[-2.15,36.67],[-3.42,36.66],[-4.37,36.68],[-5,36.32],[-5.38,35.95],[-5.87,36.03],[-6.24,36.37],[-6.52,36.94],[-7.45,37.1]],[[-6.2,53.87],[-6.03,53.15],[-6.79,52.26],[-8.56,51.67],[-9.98,51.82],[-9.17,52.86],[-9.69,53.88],[-8.33,54.66],[-7.57,55.13],[-7.37,54.6],[-7.57,54.06],[-6.95,54.07],[-6.2,53.87]],[[165.78,-21.08],[166.6,-21.7],[167.12,-22.16],[166.74,-22.4],[166.19,-22.13],[165.47,-21.68],[164.03,-20.11],[165.78,-21.08]],[[162.12,-10.48],[162.4,-10.83],[161.7,-10.82],[161.32,-10.2],[161.92,-10.45],[162.12,-10.48]],[[161.68,-9.6],[160.58,-8.32],[160.92,-8.32],[161.28,-9.12],[161.68,-9.6]],[[160.85,-9.87],[160.46,-9.9],[159.85,-9.79],[159.64,-9.64],[159.7,-9.24],[160.85,-9.87]],[[159.64,-8.02],[159.88,-8.34],[159.92,-8.54],[158.21,-7.42],[159.64,-8.02]],[[157.14,-7.02],[157.54,-7.35],[156.54,-6.6],[157.14,-7.02]],[[176.89,-40.07],[176.51,-40.6],[176.01,-41.29],[175.24,-41.69],[175.07,-41.43],[174.65,-41.28],[175.23,-40.46],[174.9,-39.91],[173.82,-39.51],[173.85,-39.15],[174.57,-38.8],[174.74,-38.03],[174.7,-37.38],[172.64,-34.53],[174.33,-35.27],[174.61,-36.16],[175.34,-37.21],[175.36,-36.53],[175.81,-36.8],[175.96,-37.56],[176.76,-37.88],[177.44,-37.96],[178.01,-37.58],[178.52,-37.7],[178.27,-38.58],[177.97,-39.17],[177.21,-39.15],[176.89,-40.07]],[[169.67,-43.56],[170.52,-43.03],[171.13,-42.51],[172.8,-40.49],[173.02,-40.92],[173.25,-41.33],[173.96,-40.93],[174.25,-41.35],[174.25,-41.77],[172.71,-43.37],[173.08,-43.85],[172.31,-43.87],[171.45,-44.24],[171.19,-44.9],[170.62,-45.91],[169.83,-46.36],[169.33,-46.64],[166.68,-46.22],[166.51,-45.85],[167.05,-45.11],[169.67,-43.56]],[[147.69,-40.81],[148.29,-40.88],[148.36,-42.06],[148.02,-42.41],[147.91,-43.21],[147.56,-42.94],[146.87,-43.63],[146.66,-43.58],[146.05,-43.55],[144.74,-40.7],[145.4,-40.79],[146.36,-41.14],[146.91,-41],[147.69,-40.81]],[[126.15,-32.22],[125.09,-32.73],[124.22,-32.96],[124.03,-33.48],[123.66,-33.89],[119.89,-33.98],[118.02,-35.06],[117.3,-35.03],[116.63,-35.03],[115.56,-34.39],[115.03,-34.2],[115.05,-33.62],[115.55,-33.49],[115.71,-33.26],[115.68,-32.9],[115.8,-32.21],[115.04,-29.46],[113.34,-26.12],[113.78,-26.55],[113.44,-25.62],[113.94,-25.91],[114.23,-26.3],[113.39,-24.38],[113.74,-22.48],[114.15,-21.76],[114.23,-22.52],[114.65,-21.83],[116.71,-20.7],[120.86,-19.68],[122.24,-18.2],[122.29,-17.8],[122.31,-17.25],[123.01,-16.41],[123.43,-17.27],[123.86,-17.07],[123.5,-16.6],[123.82,-16.11],[124.26,-16.33],[124.38,-15.57],[125.69,-14.23],[127.07,-13.82],[127.8,-14.28],[128.36,-14.87],[128.99,-14.88],[129.62,-14.97],[129.41,-14.42],[130.62,-12.54],[132.58,-12.11],[132.56,-11.6],[131.82,-11.27],[132.36,-11.13],[135.3,-12.25],[136.49,-11.86],[136.95,-12.35],[135.96,-13.32],[135.5,-15],[140.22,-17.71],[140.88,-17.37],[141.07,-16.83],[141.27,-16.39],[141.4,-15.84],[141.7,-15.04],[141.69,-12.41],[142.52,-10.67],[143.92,-14.55],[144.56,-14.17],[144.89,-14.59],[145.37,-14.98],[146.39,-18.96],[148.85,-20.39],[149.68,-22.34],[150.73,-22.4],[150.9,-23.46],[152.86,-25.27],[153.09,-27.26],[153.57,-28.11],[152.89,-31.64],[150.33,-35.67],[150,-37.43],[149.42,-37.77],[148.3,-37.81],[146.32,-39.04],[145.49,-38.59],[144.88,-38.42],[145.03,-37.9],[144.49,-38.09],[143.61,-38.81],[140.64,-38.02],[139.99,-37.4],[139.81,-36.64],[139.57,-36.14],[139.08,-35.73],[138.12,-35.61],[138.45,-35.13],[138.21,-34.38],[137.72,-35.08],[136.83,-35.26],[137.89,-33.64],[137.81,-32.9],[137,-33.75],[136.37,-34.09],[135.99,-34.89],[135.21,-34.48],[135.24,-33.95],[134.61,-33.22],[134.09,-32.85],[134.27,-32.62],[131.33,-31.5],[126.15,-32.22]],[[81.79,7.52],[81.64,6.48],[81.22,6.2],[80.35,5.97],[79.87,6.76],[79.7,8.2],[80.15,9.82],[81.79,7.52]],[[109.48,18.2],[108.66,18.51],[108.63,19.37],[109.12,19.82],[110.21,20.1],[110.79,20.08],[111.01,19.7],[110.57,19.26],[110.34,18.68],[109.48,18.2]],[[80.26,42.35],[80.18,42.92],[80.87,43.18],[79.97,44.92],[81.95,45.32],[82.46,45.54],[83.18,47.33],[85.16,47],[85.72,47.45],[85.77,48.46],[87.75,49.3],[88.01,48.6],[88.85,48.07],[90.28,47.69],[90.97,46.89],[90.59,45.72],[90.95,45.29],[92.13,45.12],[93.48,44.98],[94.69,44.35],[95.31,44.24],[95.76,43.32],[96.35,42.73],[100.85,42.66],[104.96,41.6],[106.13,42.13],[107.74,42.48],[109.24,42.52],[111.83,43.74],[111.67,44.07],[111.35,44.46],[111.87,45.1],[112.44,45.01],[113.46,44.81],[117.42,46.67],[118.87,46.81],[119.66,46.69],[119.77,47.05],[118.87,47.75],[118.06,48.07],[117.3,47.7],[116.31,47.85],[115.74,47.73],[115.49,48.14],[116.19,49.13],[116.68,49.89],[117.88,49.51],[119.29,50.14],[119.28,50.58],[120.18,51.64],[120.74,51.96],[120.73,52.52],[120.18,52.75],[121,53.25],[122.25,53.43],[123.57,53.46],[125.07,53.16],[125.95,52.79],[127.66,49.76],[129.4,49.44],[130.58,48.73],[130.99,47.79],[132.51,47.79],[133.37,48.18],[135.03,48.48],[133.1,45.14],[131.88,45.32],[131.03,44.97],[131.29,44.11],[131.14,42.93],[130.63,42.9],[130.64,42.4],[129.99,42.99],[129.6,42.42],[128.05,41.99],[128.21,41.47],[127.34,41.5],[126.87,41.82],[124.27,39.93],[121.05,38.9],[122.17,40.42],[121.64,40.95],[119.02,39.25],[118.04,39.2],[117.53,38.74],[119.7,37.16],[120.82,37.87],[121.71,37.48],[122.36,37.45],[122.52,36.93],[121.1,36.65],[119.15,34.91],[120.23,34.36],[121.91,31.69],[121.89,30.95],[121.26,30.68],[121.5,30.14],[122.09,29.83],[121.94,29.02],[121.68,28.23],[121.13,28.14],[118.66,24.55],[117.28,23.62],[115.89,22.78],[114.76,22.67],[114.15,22.22],[113.81,22.55],[113.24,22.05],[111.84,21.55],[110.79,21.4],[110.44,20.34],[109.89,20.28],[109.63,21.01],[109.86,21.4],[107.04,21.81],[106.57,22.22],[106.73,22.79],[105.81,22.98],[105.33,23.35],[104.48,22.82],[101.65,22.32],[101.8,21.17],[101.27,21.2],[101.18,21.44],[101.15,21.85],[100.42,21.56],[99.98,21.74],[99.24,22.12],[99.53,22.95],[98.9,23.14],[98.66,24.06],[97.6,23.9],[97.72,25.08],[98.67,25.92],[98.71,26.74],[98.68,27.51],[98.25,27.75],[97.91,28.34],[97.33,28.26],[96.25,28.41],[96.59,28.83],[96.12,29.45],[95.4,29.03],[94.57,29.28],[93.41,28.64],[92.5,27.9],[91.7,27.77],[90.02,28.3],[89.48,28.04],[88.81,27.3],[88.73,28.09],[85.82,28.2],[82.33,30.12],[81.53,30.42],[81.11,30.18],[79.72,30.88],[78.74,31.52],[78.46,32.62],[79.18,32.48],[79.21,32.99],[78.81,33.51],[78.91,34.32],[77.84,35.49],[76.19,35.9],[74.98,37.42],[74.83,37.99],[74.86,38.38],[74.26,38.61],[73.93,38.51],[73.68,39.43],[73.96,39.66],[73.82,39.89],[74.78,40.37],[75.47,40.56],[76.53,40.43],[76.9,41.07],[78.19,41.19],[80.26,42.35]],[[121.78,24.39],[121.18,22.79],[120.75,21.97],[120.22,22.81],[120.11,23.56],[120.69,24.54],[121.5,25.3],[121.95,25],[121.78,24.39]],[[10.44,46.89],[12.15,47.12],[12.38,46.77],[13.81,46.51],[13.7,46.02],[13.94,45.59],[13.14,45.74],[12.33,45.38],[12.59,44.09],[15.14,41.96],[15.93,41.96],[16.17,41.74],[15.89,41.54],[18.38,40.36],[18.48,40.17],[18.29,39.81],[17.74,40.28],[16.87,40.44],[16.45,39.8],[17.17,39.42],[17.05,38.9],[15.68,37.91],[16.11,38.96],[15.72,39.54],[15.41,40.05],[11.19,42.36],[10.51,42.93],[10.2,43.92],[9.7,44.04],[8.89,44.37],[7.44,43.69],[7.55,44.13],[7.01,44.25],[6.75,45.03],[7.1,45.33],[6.8,45.71],[6.84,45.99],[8.97,46.04],[9.18,46.44],[9.92,46.31],[10.36,46.48],[10.44,46.89]],[[14.76,38.14],[15.52,38.23],[15.1,36.62],[12.43,37.61],[12.57,38.13],[13.74,38.03],[14.76,38.14]],[[8.71,40.9],[9.21,41.21],[9.81,40.5],[9.67,39.18],[9.21,39.24],[8.81,38.91],[8.43,39.17],[8.39,40.38],[8.16,40.95],[8.71,40.9]],[[9.92,54.98],[9.28,54.83],[8.53,54.96],[8.12,55.52],[8.09,56.54],[8.26,56.81],[8.54,57.11],[10.58,57.73],[10.55,57.22],[10.25,56.89],[10.37,56.61],[10.91,56.46],[9.65,55.47],[9.92,54.98]],[[12.37,56.11],[12.69,55.61],[12.09,54.8],[11.04,55.36],[10.9,55.78],[12.37,56.11]],[[-6.2,53.87],[-6.95,54.07],[-7.57,54.06],[-7.37,54.6],[-7.57,55.13],[-6.73,55.17],[-5.66,54.55],[-6.2,53.87]],[[-3.09,53.4],[-3.09,53.4],[-2.95,53.99],[-3.61,54.6],[-3.63,54.62],[-4.84,54.79],[-5.08,55.06],[-4.72,55.51],[-5.05,55.78],[-5.59,55.31],[-5.64,56.28],[-6.15,56.79],[-5.79,57.82],[-5.01,58.63],[-4.21,58.55],[-3.01,58.64],[-4.07,57.55],[-3.06,57.69],[-1.96,57.68],[-2.22,56.87],[-3.12,55.97],[-2.09,55.91],[-2.01,55.8],[-1.11,54.62],[-.43,54.46],[.18,53.33],[.47,52.93],[1.68,52.74],[1.56,52.1],[1.05,51.81],[1.45,51.29],[.55,50.77],[-2.96,50.7],[-3.62,50.23],[-5.78,50.16],[-4.31,51.21],[-3.41,51.43],[-3.42,51.43],[-4.98,51.59],[-5.27,51.99],[-4.22,52.3],[-4.77,52.84],[-4.58,53.5],[-3.09,53.4]],[[-14.51,66.46],[-14.74,65.81],[-13.61,65.13],[-14.91,64.36],[-17.79,63.68],[-18.66,63.5],[-19.97,63.64],[-22.76,63.96],[-21.78,64.4],[-23.96,64.89],[-22.18,65.08],[-22.23,65.38],[-24.33,65.61],[-23.65,66.26],[-22.13,66.41],[-20.58,65.73],[-19.06,66.28],[-17.8,65.99],[-16.17,66.53],[-14.51,66.46]],[[46.4,41.86],[47.82,41.15],[47.99,41.41],[48.58,41.81],[49.11,41.28],[49.62,40.57],[50.08,40.53],[50.39,40.26],[49.57,40.18],[48.88,38.32],[48.63,38.27],[48.01,38.79],[48.36,39.29],[48.06,39.58],[47.69,39.51],[46.51,38.77],[46.48,39.46],[46.03,39.63],[45.61,39.9],[45.89,40.22],[44.97,41.25],[46.5,41.06],[46.64,41.18],[46.15,41.72],[46.4,41.86]],[[46.14,38.74],[45.46,38.87],[44.95,39.34],[44.79,39.71],[45.74,39.47],[45.74,39.32],[46.14,38.74]],[[39.96,43.43],[45.47,42.5],[45.78,42.09],[46.4,41.86],[46.15,41.72],[46.64,41.18],[45.22,41.41],[44.97,41.25],[43.58,41.09],[42.62,41.58],[41.55,41.54],[41.7,41.96],[41.45,42.65],[39.96,43.43]],[[120.83,12.7],[120.32,13.47],[121.18,13.43],[121.53,13.07],[121.26,12.21],[120.83,12.7]],[[122.59,9.98],[122.84,10.26],[122.95,10.88],[123.5,10.94],[123.34,10.27],[124.08,11.23],[123.98,10.28],[123,9.02],[122.38,9.71],[122.59,9.98]],[[126.38,8.41],[126.48,7.75],[126.54,7.19],[126.2,6.27],[125.83,7.29],[125.36,6.79],[125.68,6.05],[125.4,5.58],[124.22,6.16],[123.94,6.89],[124.24,7.36],[123.61,7.83],[122.09,6.9],[121.92,7.19],[122.31,8.03],[122.94,8.32],[123.49,8.69],[123.84,8.24],[124.6,8.51],[124.76,8.96],[125.47,8.99],[125.41,9.76],[126.22,9.29],[126.31,8.78],[126.38,8.41]],[[118.5,9.32],[117.17,8.37],[119.51,11.37],[119.69,10.55],[119.03,10],[118.5,9.32]],[[122.34,18.22],[122.17,17.81],[122.52,17.09],[122.25,16.26],[121.66,15.93],[121.51,15.12],[121.73,14.33],[123.95,13.78],[124.08,12.54],[123.3,13.03],[122.93,13.55],[122.67,13.19],[122.03,13.78],[121.13,13.64],[120.63,13.86],[120.68,14.27],[120.99,14.53],[120.69,14.76],[120.56,14.4],[120.07,14.97],[119.92,15.41],[119.88,16.36],[120.29,16.03],[120.39,17.6],[120.72,18.51],[122.34,18.22]],[[122.04,11.42],[121.88,11.89],[122.48,11.58],[123.12,11.58],[123.1,11.17],[122.64,10.74],[122,10.44],[121.97,10.91],[122.04,11.42]],[[125.5,12.16],[125.78,11.05],[125.01,11.31],[125.03,10.98],[125.28,10.36],[124.8,10.13],[124.3,11.5],[124.89,11.42],[124.88,11.79],[124.27,12.56],[125.23,12.54],[125.5,12.16]],[[100.09,6.46],[100.26,6.64],[101.08,6.2],[101.15,5.69],[101.81,5.81],[102.14,6.22],[102.37,6.13],[102.96,5.52],[103.38,4.86],[103.5,2.79],[104.23,1.29],[103.52,1.23],[102.57,1.97],[101.39,2.76],[100.2,5.31],[100.31,6.04],[100.09,6.46]],[[117.88,4.14],[117.02,4.31],[115.87,4.31],[114.62,1.43],[113.81,1.22],[112.86,1.5],[112.38,1.41],[111.8,.9],[111.16,.98],[110.51,.77],[109.83,1.34],[109.66,2.01],[110.4,1.66],[111.17,1.85],[111.37,2.7],[111.8,2.89],[113,3.1],[113.71,3.89],[114.2,4.53],[114.66,4.01],[114.87,4.35],[115.35,4.32],[115.41,4.96],[115.45,5.45],[116.22,6.14],[116.73,6.92],[117.13,6.93],[117.64,6.42],[117.69,5.99],[118.35,5.71],[119.18,5.41],[119.11,5.02],[118.44,4.97],[118.62,4.48],[117.88,4.14]],[[115.45,5.45],[115.41,4.96],[115.35,4.32],[114.87,4.35],[114.66,4.01],[114.2,4.53],[114.6,4.9],[115.45,5.45]],[[13.81,46.51],[16.2,46.85],[16.37,46.84],[16.56,46.5],[15.77,46.24],[15.33,45.45],[13.72,45.5],[13.81,46.51]],[[28.59,69.06],[28.45,68.36],[29.98,67.7],[29.05,66.94],[30.22,65.81],[29.54,64.95],[30.44,64.2],[30.04,63.55],[31.52,62.87],[31.14,62.36],[28.07,60.5],[22.87,59.85],[22.29,60.39],[21.32,60.72],[21.54,61.71],[21.06,62.61],[21.54,63.19],[25.4,65.11],[25.29,65.53],[23.9,66.01],[23.57,66.4],[23.54,67.94],[21.98,68.62],[20.65,69.11],[21.24,69.37],[22.36,68.84],[23.66,68.89],[24.74,68.65],[25.69,69.09],[26.18,69.83],[27.73,70.16],[29.02,69.77],[28.59,69.06]],[[22.56,49.09],[21.87,48.32],[20.8,48.62],[17.86,47.76],[16.88,48.47],[18.55,49.5],[19.83,49.22],[21.61,49.47],[22.56,49.09]],[[15.02,51.11],[16.72,50.22],[16.87,50.47],[17.55,50.36],[18.85,49.5],[16.96,48.6],[15.25,49.04],[14.9,48.96],[14.34,48.56],[12.52,49.55],[12.42,49.97],[12.24,50.27],[15.02,51.11]],[[36.43,14.42],[36.85,16.96],[38.41,18],[38.99,16.84],[39.27,15.92],[43.08,12.7],[42.78,12.46],[42.35,12.54],[40.9,14.12],[40.03,14.52],[38.51,14.51],[37.91,14.96],[37.59,14.21],[36.43,14.42]],[[141.88,39.18],[140.96,38.17],[140.77,35.84],[140.25,35.14],[138.98,34.67],[137.22,34.61],[135.79,33.46],[135.12,33.85],[135.08,34.6],[130.99,33.89],[132,33.15],[131.33,31.45],[130.69,31.03],[130.2,31.42],[130.45,32.32],[129.81,32.61],[129.41,33.3],[130.35,33.6],[132.62,35.43],[134.61,35.73],[135.68,35.53],[136.72,37.3],[137.39,36.83],[138.86,37.83],[139.43,38.22],[140.05,39.44],[139.88,40.56],[140.31,41.2],[141.37,41.38],[141.91,39.99],[141.88,39.18]],[[144.61,43.96],[145.32,44.38],[145.54,43.26],[144.06,42.99],[143.18,42],[141.61,42.68],[141.07,41.58],[139.96,41.57],[139.82,42.56],[140.31,43.33],[141.38,43.39],[141.67,44.77],[141.97,45.55],[143.14,44.51],[143.91,44.17],[144.61,43.96]],[[132.37,33.46],[133.9,34.36],[134.64,34.15],[134.77,33.81],[134.2,33.2],[133.79,33.52],[133.28,33.29],[133.01,32.7],[132.36,32.99],[132.37,33.46]],[[-58.17,-20.18],[-57.87,-20.73],[-57.94,-22.09],[-55.8,-22.36],[-55.4,-23.96],[-54.29,-24.02],[-54.79,-26.62],[-55.7,-27.39],[-58.62,-27.12],[-57.63,-25.6],[-57.78,-25.16],[-60.85,-23.88],[-62.69,-22.25],[-61.79,-19.63],[-60.04,-19.34],[-59.12,-19.36],[-58.18,-19.87],[-58.17,-20.18]],[[52,19],[52.78,17.35],[53.11,16.65],[52.39,16.38],[52.19,15.94],[52.17,15.6],[51.17,15.18],[49.57,14.71],[48.68,14],[45.63,13.29],[44.99,12.7],[43.48,12.64],[42.6,15.21],[43.38,17.58],[46.75,17.28],[47,16.95],[49.12,18.62],[52,19]],[[34.96,29.36],[36.07,29.2],[36.5,29.51],[36.74,29.87],[37.5,30],[37.67,30.34],[38,30.51],[37,31.51],[39,32.01],[39.2,32.16],[40.4,31.89],[41.89,31.19],[44.71,29.18],[46.57,29.1],[47.46,29],[47.71,28.53],[48.42,28.55],[48.81,27.69],[50.15,26.69],[50.24,25.61],[50.81,24.75],[51.11,24.56],[51.39,24.63],[52,23],[55.01,22.5],[55.21,22.71],[55.67,22],[55,20],[52,19],[49.12,18.62],[47,16.95],[46.75,17.28],[43.38,17.58],[43.12,17.09],[43.22,16.67],[42.78,16.35],[40.94,19.49],[39.14,21.29],[39.02,21.99],[39.07,22.58],[38.49,23.69],[38.02,24.08],[37.48,24.29],[35.13,28.06],[34.63,28.06],[34.96,29.36]],[[-48.66,-78.05],[-48.15,-78.05],[-46.66,-77.83],[-45.15,-78.05],[-43.92,-78.48],[-43.33,-80.03],[-50.48,-81.03],[-52.85,-80.97],[-54.16,-80.63],[-53.99,-80.22],[-51.85,-79.95],[-50.99,-79.61],[-48.66,-78.05]],[[-66.29,-80.26],[-64.04,-80.29],[-61.88,-80.39],[-61.14,-79.98],[-60.61,-79.63],[-59.57,-80.04],[-59.87,-80.55],[-60.16,-81],[-62.26,-80.86],[-64.49,-80.92],[-66.29,-80.26]],[[-73.92,-71.27],[-72.07,-71.19],[-71.74,-69.51],[-71.17,-69.04],[-70.25,-68.88],[-68.33,-71.41],[-68.51,-71.8],[-68.78,-72.17],[-69.96,-72.31],[-71.08,-72.5],[-72.39,-72.48],[-71.9,-72.09],[-73.07,-72.23],[-74.19,-72.37],[-74.95,-72.07],[-75.01,-71.66],[-73.92,-71.27]],[[-102.33,-71.89],[-96.79,-71.95],[-96.2,-72.52],[-100.78,-72.5],[-101.8,-72.31],[-102.33,-71.89]],[[-122.62,-73.66],[-122.62,-73.66],[-122.41,-73.32],[-118.72,-73.48],[-119.29,-73.83],[-120.23,-74.09],[-121.62,-74.01],[-122.62,-73.66]],[[-127.28,-73.46],[-127.28,-73.46],[-126.56,-73.25],[-125.56,-73.48],[-124.03,-73.87],[-127.28,-73.46]],[[-163.71,-78.6],[-163.71,-78.6],[-163.11,-78.22],[-161.25,-78.38],[-160.25,-78.69],[-159.48,-79.05],[-159.21,-79.5],[-161.13,-79.63],[-163.71,-78.6]],[[180,-84.71],[180,-90],[-180,-90],[-180,-84.71],[-179.94,-84.72],[-179.06,-84.14],[-177.26,-84.45],[-175.83,-84.12],[-174.38,-84.53],[-173.12,-84.12],[-172.89,-84.06],[-169.95,-83.88],[-167.02,-84.57],[-158.07,-85.37],[-155.19,-85.1],[-150.94,-85.3],[-148.53,-85.61],[-145.89,-85.32],[-143.11,-85.04],[-142.89,-84.57],[-146.83,-84.53],[-150.06,-84.3],[-150.9,-83.9],[-153.59,-83.69],[-152.67,-82.45],[-152.86,-82.04],[-156.84,-81.1],[-154.41,-81.16],[-152.1,-81],[-150.65,-81.34],[-146.42,-80.34],[-146.77,-79.93],[-148.06,-79.65],[-149.53,-79.36],[-155.33,-79.06],[-158.05,-78.03],[-158.37,-76.89],[-157.88,-76.99],[-156.97,-77.3],[-155.33,-77.2],[-153.74,-77.07],[-152.92,-77.5],[-151.33,-77.4],[-146.1,-76.48],[-146.14,-76.11],[-146.5,-75.73],[-146.2,-75.38],[-144.91,-75.2],[-144.32,-75.54],[-135.21,-74.3],[-121.07,-74.52],[-117.47,-74.03],[-116.22,-74.24],[-115.02,-74.07],[-113.94,-73.71],[-112.3,-74.71],[-111.26,-74.42],[-107.56,-75.18],[-106.15,-75.13],[-104.88,-74.95],[-100.65,-75.3],[-100.12,-74.87],[-100.76,-74.54],[-101.25,-74.19],[-102.55,-74.11],[-103.68,-72.62],[-99.14,-72.91],[-98.12,-73.21],[-97.69,-73.56],[-96.34,-73.62],[-92.44,-73.17],[-91.42,-73.4],[-90.09,-73.32],[-89.23,-72.56],[-88.42,-73.01],[-81.47,-73.85],[-80.69,-73.48],[-80.3,-73.13],[-76.22,-73.97],[-74.89,-73.87],[-67.37,-72.48],[-67.13,-72.05],[-67.25,-71.64],[-68.54,-69.72],[-67.43,-68.15],[-67.62,-67.72],[-67.74,-67.33],[-63.63,-64.9],[-57.81,-63.27],[-57.22,-63.53],[-59.05,-64.37],[-59.79,-64.21],[-60.61,-64.31],[-61.3,-64.54],[-62.02,-64.8],[-62.51,-65.09],[-62.65,-65.48],[-62.59,-65.86],[-62.12,-66.19],[-62.81,-66.43],[-63.75,-66.5],[-65.67,-67.95],[-63.2,-69.23],[-61.81,-70.72],[-60.69,-73.17],[-60.83,-73.7],[-64.35,-75.26],[-70.6,-76.63],[-77.24,-76.71],[-76.93,-77.1],[-73.66,-77.91],[-77.93,-78.38],[-77.98,-78.79],[-78.02,-79.18],[-75.36,-80.26],[-59.69,-82.38],[-58.71,-82.85],[-58.22,-83.22],[-49.76,-81.73],[-42.81,-82.08],[-42.16,-81.65],[-40.77,-81.36],[-28.55,-80.34],[-29.25,-79.99],[-29.69,-79.63],[-29.69,-79.26],[-35.64,-79.46],[-35.91,-79.08],[-35.78,-78.34],[-28.88,-76.67],[-22.46,-76.11],[-17.52,-75.13],[-16.64,-74.79],[-15.7,-74.5],[-15.41,-74.11],[-16.47,-73.87],[-16.11,-73.46],[-15.45,-73.15],[-12.29,-72.4],[-10.3,-71.27],[-7.42,-71.7],[-7.38,-71.32],[-6.87,-70.93],[-4.34,-71.46],[-.66,-71.23],[-.23,-71.64],[7.74,-69.89],[8.49,-70.15],[9.53,-70.01],[10.25,-70.48],[10.82,-70.83],[13.42,-69.97],[14.73,-70.03],[15.13,-70.4],[15.95,-70.03],[19.26,-69.89],[20.38,-70.01],[21.45,-70.07],[21.92,-70.4],[22.57,-70.7],[27.09,-70.46],[31.99,-69.66],[33.87,-68.5],[38.65,-69.78],[41.96,-68.6],[46.5,-67.6],[47.44,-67.72],[50.75,-66.88],[50.95,-66.52],[51.79,-66.25],[54.53,-65.82],[55.41,-65.88],[56.36,-65.97],[58.74,-67.29],[61.43,-67.95],[62.39,-68.01],[63.19,-67.82],[64.05,-67.41],[68.89,-67.93],[69.71,-68.97],[69.67,-69.23],[69.56,-69.68],[68.6,-69.93],[67.81,-70.31],[67.95,-70.7],[69.07,-70.68],[67.95,-71.85],[68.71,-72.17],[69.87,-72.26],[71.02,-72.09],[73.86,-69.87],[77.64,-69.46],[79.11,-68.33],[82.78,-67.21],[86.75,-67.15],[87.48,-66.88],[87.99,-66.21],[89.67,-67.15],[95.78,-67.39],[99.72,-67.25],[102.83,-65.56],[106.18,-66.93],[110.24,-66.7],[113.6,-65.88],[115.6,-66.7],[119.83,-67.27],[123.22,-66.48],[128.8,-66.76],[134.76,-66.21],[135.03,-65.72],[135.07,-65.31],[136.62,-66.78],[137.46,-66.95],[145.49,-66.92],[146.65,-67.9],[147.72,-68.13],[148.84,-68.39],[152.5,-68.87],[153.64,-68.89],[154.28,-68.56],[156.81,-69.38],[158.03,-69.48],[159.18,-69.6],[161.57,-70.58],[167.31,-70.83],[171.21,-71.7],[169.29,-73.66],[166.09,-74.38],[163.57,-76.24],[163.47,-76.69],[163.49,-77.07],[164.74,-78.18],[166.6,-78.32],[167,-78.75],[161.77,-79.16],[159.79,-80.95],[163.71,-82.4],[168.9,-83.34],[169.4,-83.83],[173.22,-84.41],[175.99,-84.16],[178.28,-84.47],[180,-84.71]],[[32.73,35.14],[34.58,35.67],[33.9,35.25],[33.97,35.06],[32.73,35.14]],[[32.73,35.14],[34,34.98],[32.98,34.57],[32.49,34.7],[32.26,35.1],[32.73,35.14]],[[-2.17,35.17],[-1.12,32.65],[-1.31,32.26],[-3.65,31.64],[-3.69,30.9],[-4.86,30.5],[-5.24,30],[-8.67,28.84],[-8.79,27.12],[-11.39,26.88],[-12.5,24.77],[-13.89,23.69],[-14.75,21.5],[-17,21.42],[-17.02,21.42],[-14.44,26.25],[-12.62,28.04],[-11.69,28.15],[-9.56,29.93],[-9.81,31.18],[-8.66,33.24],[-7.65,33.7],[-6.91,34.11],[-6.24,35.15],[-5.93,35.76],[-2.17,35.17]],[[36.87,22],[25,22],[25,25.68],[25,29.24],[24.7,30.04],[25.16,31.57],[26.5,31.59],[28.91,30.87],[30.98,31.56],[31.69,31.43],[31.96,30.93],[32.19,31.26],[32.99,31.02],[33.77,30.97],[34.27,31.22],[34.27,31.22],[34.82,29.76],[34.92,29.5],[34.15,27.82],[33.92,27.65],[33.59,27.97],[33.14,28.42],[32.42,29.85],[32.32,29.76],[34.1,26.14],[35.69,23.93],[35.49,23.75],[35.53,23.1],[36.69,22.2],[36.87,22]],[[25,22],[25,20],[23.85,20],[23.84,19.58],[19.85,21.5],[15.86,23.41],[14.85,22.86],[14.14,22.49],[13.58,23.04],[12,23.47],[11.56,24.1],[10.77,24.56],[10.3,24.38],[9.32,26.09],[9.72,26.51],[9.86,28.96],[9.81,29.42],[9.48,30.31],[9.97,30.54],[10.06,30.96],[9.95,31.38],[11.43,32.37],[11.49,33.14],[15.25,32.27],[15.71,31.38],[19.09,30.27],[19.57,30.53],[20.05,30.99],[19.82,31.75],[20.13,32.24],[20.85,32.71],[21.54,32.84],[22.9,32.64],[23.24,32.19],[24.92,31.9],[25,22]],[[47.79,8],[44.96,5],[43.66,4.96],[41.86,3.92],[41.17,3.92],[40.77,4.26],[39.85,3.84],[39.56,3.42],[36.16,4.45],[34.71,6.59],[33.57,7.71],[32.95,7.78],[33.29,8.35],[33.83,8.38],[34.26,10.63],[35.86,12.58],[36.27,13.56],[36.43,14.42],[37.59,14.21],[37.91,14.96],[38.51,14.51],[40.03,14.52],[41.6,13.45],[42.01,12.87],[42.35,12.54],[42,12.1],[41.66,11.63],[41.74,11.36],[41.76,11.05],[42.78,10.93],[42.56,10.57],[43.68,9.18],[46.95,8],[47.79,8]],[[42.35,12.54],[42.78,12.46],[43.08,12.7],[43.32,12.39],[43.29,11.97],[42.72,11.74],[43.15,11.46],[42.78,10.93],[41.76,11.05],[41.74,11.36],[41.66,11.63],[42,12.1],[42.35,12.54]],[[48.95,11.41],[48.94,9.45],[48.49,8.84],[47.79,8],[46.95,8],[43.68,9.18],[42.56,10.57],[42.78,10.93],[43.15,11.46],[44.12,10.45],[48.95,11.41]],[[33.9,-.95],[29.58,-1.34],[29.88,.6],[31.17,2.2],[30.77,2.34],[30.83,3.51],[30.83,3.51],[31.25,3.78],[33.39,3.79],[34.01,4.25],[34.48,3.56],[34.6,3.05],[35.04,1.91],[33.89,.11],[33.9,-.95]],[[30.42,-1.13],[30.82,-1.7],[30.76,-2.29],[29.94,-2.35],[29.63,-2.92],[29.02,-2.84],[29.29,-1.62],[30.42,-1.13]],[[18.56,42.65],[16.46,44.04],[16.24,44.35],[15.75,44.82],[15.96,45.23],[19.37,44.86],[19.12,44.42],[19.6,44.04],[19.45,43.57],[18.71,43.2],[18.56,42.65]],[[22.38,42.32],[22.88,42],[22.95,41.34],[21.02,40.84],[20.61,41.09],[20.76,42.05],[22.38,42.32]],[[18.83,45.91],[20.22,46.13],[21.56,44.77],[22.71,44.58],[22.41,44.01],[22.5,43.64],[22.99,43.21],[22.55,42.46],[21.58,42.25],[21.78,42.68],[20.81,43.27],[20.26,42.81],[19.22,43.52],[19.45,43.57],[19.6,44.04],[19.12,44.42],[19.39,45.24],[19.07,45.52],[18.83,45.91]],[[20.07,42.59],[19.8,42.5],[19.74,42.69],[19.3,42.2],[19.37,41.88],[18.45,42.48],[19.22,43.52],[20.34,42.9],[20.26,42.81],[20.07,42.59]],[[20.59,41.86],[20.07,42.59],[20.64,43.22],[21.78,42.68],[20.59,41.86]],[[-61.68,10.76],[-61.1,10.89],[-60.89,10.86],[-60.93,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.37],[-61.68,10.76]],[[30.83,3.51],[29.95,4.17],[29.72,4.6],[27.98,4.41],[25.11,7.83],[24.57,8.23],[23.89,8.62],[24.19,8.73],[24.54,8.92],[24.79,9.81],[25.07,10.27],[25.79,10.41],[26.75,9.47],[28.97,9.4],[30,10.29],[30.84,9.71],[31.35,9.81],[31.85,10.53],[32.4,11.08],[32.31,11.68],[32.07,11.97],[33.21,12.18],[33.09,11.44],[33.21,10.72],[33.72,10.33],[33.97,8.68],[32.95,7.78],[33.57,7.71],[34.08,7.23],[35.3,5.51],[33.39,3.79],[30.83,3.51]]],Qs=Wu,Xu=Qs.map(i=>({ring:i,minX:Math.min(...i.map(e=>e[0])),maxX:Math.max(...i.map(e=>e[0])),minY:Math.min(...i.map(e=>e[1])),maxY:Math.max(...i.map(e=>e[1]))}));function qu(i,e){return Xu.some(({ring:t,minX:n,maxX:r,minY:s,maxY:a})=>{if(e<n||e>r||i<s||i>a)return!1;let o=!1;for(let c=0,l=t.length-1;c<t.length;l=c++){const[d,h]=t[c],[f,p]=t[l];h>i!=p>i&&e<(f-d)*(i-h)/(p-h)+d&&(o=!o)}return o})}function Yu(){const i=new Map;for(const t of Qs)for(let n=1;n<t.length;n++){const r=t[n-1],s=t[n],a=[r.join(","),s.join(",")].sort().join("/"),o=i.get(a);o?o.shared=!0:i.set(a,{a:r,b:s,shared:!1})}const e=[];for(const{a:t,b:n,shared:r}of i.values()){let s=n[0]-t[0];s>180&&(s-=360),s<-180&&(s+=360);const a=Math.max(1,Math.ceil(Math.max(Math.abs(s),Math.abs(n[1]-t[1]))/2));for(let o=0;o<a;o++)e.push({a:[t[0]+s*o/a,t[1]+(n[1]-t[1])*o/a],b:[t[0]+s*(o+1)/a,t[1]+(n[1]-t[1])*(o+1)/a],shared:r})}return e}const Ku=Yu(),en=1.22,nn=Math.PI/180;function gr(i,e,t){const n=(90-i)*nn,r=(e+180)*nn;return new I(-(t*Math.sin(n)*Math.cos(r)),t*Math.cos(n),t*Math.sin(n)*Math.sin(r))}function Zu(i,e){const t=[],n=[],r=(1+Math.sqrt(5))/2;for(let s=0;s<e;s++){const a=1-s/(e-1)*2,o=Math.sqrt(1-a*a),c=2*Math.PI*s/r,l=Math.cos(c)*o,d=Math.sin(c)*o,h=90-Math.acos(a)*180/Math.PI,f=Math.atan2(-d,l)*180/Math.PI;qu(h,f)?t.push(l*i,a*i,d*i):s%3===0&&n.push(l*i,a*i,d*i)}return{land:new Float32Array(t),ocean:new Float32Array(n)}}function $u(i){const e=[];for(const t of[-60,-30,0,30,60]){const n=(90-t)*nn,r=i*Math.sin(n),s=i*Math.cos(n),a=[];for(let o=0;o<=64;o++){const c=o/64*Math.PI*2;a.push(new I(Math.cos(c)*r,s,Math.sin(c)*r))}e.push(new gt().setFromPoints(a))}for(const t of[0,60,120]){const n=t*nn,r=[];for(let s=0;s<=64;s++){const a=s/64*Math.PI*2;r.push(new I(Math.sin(a)*Math.cos(n)*i,Math.cos(a)*i,Math.sin(a)*Math.sin(n)*i))}e.push(new gt().setFromPoints(r))}return e}const ju={dark:{sphere:"#080a08",rim:"#b5ff43",halo:"#00d2ff",grid:"#b5ff43",land:"#b5ff43",ocean:"#55735d",coast:"#b2c69c",border:"#6f8957",pin:"#79d8ec",pinActive:"#ffffff",torus:"#b5ff43",ambient:.5,key:"#ffffff",keyI:1.5,fill:"#00d2ff",fillI:.4},light:{sphere:"#d8e2ce",rim:"#8ca66b",halo:"#e5c582",grid:"#718c4e",land:"#3f6335",ocean:"#9ba991",coast:"#435c3c",border:"#78906b",pin:"#176c7b",pinActive:"#1f2b1d",torus:"#718c4e",ambient:.95,key:"#fff1c9",keyI:1.8,fill:"#718c4e",fillI:.18}};function Ju(i,e,t={}){let n;try{n=new ku({antialias:!0,alpha:!0})}catch{return i.classList.add("atlas-no-webgl"),null}const r=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1;n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.domElement.className="atlas-canvas",n.domElement.setAttribute("aria-hidden","true"),i.appendChild(n.domElement);const s=new Ka,a=new Lt(42,1,.1,100);a.position.set(0,0,5.35);const o=new ro("#ffffff",.5),c=new ls("#ffffff",1.5),l=new ls("#00d2ff",.4);l.position.set(-4,-3,-2),s.add(o,c,l);const d=new Kn;s.add(d);const h={torus:new mn({transparent:!0,opacity:.22}),sphere:new Qa({roughness:.88}),rim:new mn({transparent:!0,opacity:.04,side:1,blending:2}),halo:new mn({transparent:!0,opacity:.035,side:1,blending:2}),grid:new Pi({transparent:!0,opacity:.07}),land:new vr({size:.012,transparent:!0,sizeAttenuation:!0}),ocean:new vr({size:.014,transparent:!0,opacity:.08,sizeAttenuation:!0}),coast:new Pi({transparent:!0,depthWrite:!1}),border:new Pi({transparent:!0,depthWrite:!1}),pin:new mn,pinActive:new mn},f=new Et(new br(1.46,.004,6,96),h.torus);f.rotation.set(1.15,.25,.55),d.add(f),[!1,!0].forEach(le=>{const he=[];for(const Z of Ku)Z.shared===le&&he.push(...gr(Z.a[1],Z.a[0],en*1.007).toArray(),...gr(Z.b[1],Z.b[0],en*1.007).toArray());const Ce=new gt;Ce.setAttribute("position",new _t(he,3));const H=new Ja(Ce,le?h.border:h.coast);H.renderOrder=1,d.add(H)}),d.add(new Et(new _n(en,48,48),h.sphere)),d.add(new Et(new _n(en*1.015,36,36),h.rim)),d.add(new Et(new _n(en*1.12,36,36),h.halo));for(const le of $u(en*1.002))d.add(new ks(le,h.grid));const p=Zu(en*1.006,6500),g=new gt;g.setAttribute("position",new Ut(p.land,3)),d.add(new rs(g,h.land));const x=new gt;x.setAttribute("position",new Ut(p.ocean,3)),d.add(new rs(x,h.ocean));const m=new _n(.009,12,12),u=new _n(.03,16,16),b=e.map(le=>{const he=new Et(m,h.pin);return he.position.copy(gr(le.lat,le.lng,en*1.018)),he.userData.id=le.id,d.add(he),he}),y=document.createElement("div");y.className="atlas-label",i.appendChild(y);function E(le){const he=ju[le];h.torus.color.set(he.torus),h.torus.opacity=le==="light"?.2:.22,h.sphere.color.set(he.sphere),h.sphere.metalness=le==="light"?.02:.12,h.rim.color.set(he.rim),h.halo.color.set(he.halo),h.grid.color.set(he.grid),h.land.color.set(he.land),h.land.opacity=le==="light"?.42:.32,h.ocean.color.set(he.ocean),h.coast.color.set(he.coast),h.coast.opacity=le==="light"?.78:.75,h.border.color.set(he.border),h.border.opacity=le==="light"?.5:.48,h.pin.color.set(he.pin),h.pinActive.color.set(he.pinActive),o.intensity=he.ambient,c.color.set(he.key),c.intensity=he.keyI,c.position.set(le==="light"?-4:4,5,3),l.color.set(he.fill),l.intensity=he.fillI,ae()}const P=()=>document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";new MutationObserver(()=>E(P())).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let R=e[0];const w={x:R.lat*nn,y:-Math.PI/2-R.lng*nn};d.rotation.set(w.x,w.y,0);let N=!1,S=!r,M=!1,D={x:0,y:0},G=!0,V=0,q=performance.now();function Y(le){const he=e.find(Ce=>Ce.id===le);if(he){for(R=he,w.x=he.lat*nn,w.y=-Math.PI/2-he.lng*nn;w.y-d.rotation.y>Math.PI;)w.y-=Math.PI*2;for(;d.rotation.y-w.y>Math.PI;)w.y+=Math.PI*2;b.forEach(Ce=>{const H=Ce.userData.id===le;Ce.geometry=H?u:m,Ce.material=H?h.pinActive:h.pin}),y.textContent=`${he.flag} ${he.name}`,ae()}}function X(){const le=i.clientWidth,he=i.clientHeight;!le||!he||(n.setSize(le,he,!1),a.aspect=le/he,a.updateProjectionMatrix(),ae())}const J=new I;function z(){const le=b.find(Z=>Z.userData.id===R.id);if(!le)return;le.getWorldPosition(J);const he=J.clone().normalize().dot(a.position.clone().normalize())>.15;J.project(a);const Ce=(J.x*.5+.5)*i.clientWidth,H=(-J.y*.5+.5)*i.clientHeight;y.style.transform=`translate(${Math.round(Ce+10)}px, ${Math.round(H-26)}px)`,y.style.opacity=he?"1":"0"}function re(le){V=0;const he=Math.min((le-q)/1e3,.05);q=le,!N&&S&&!M&&(w.y+=he*.16);const Ce=1-Math.exp(-8*he);d.rotation.x=zi.lerp(d.rotation.x,w.x,Ce),d.rotation.y=zi.lerp(d.rotation.y,w.y,Ce),n.render(s,a),z();const H=Math.abs(d.rotation.x-w.x)+Math.abs(d.rotation.y-w.y)>.001;G&&(!N&&S||H||M)&&ae()}function ae(){V||(q=performance.now(),V=requestAnimationFrame(re))}const pe=n.domElement;pe.style.touchAction="none";pe.addEventListener("pointerdown",le=>{M=!0,S=!1,D={x:le.clientX,y:le.clientY};try{pe.setPointerCapture(le.pointerId)}catch(q){}pe.classList.add("is-dragging")}),pe.addEventListener("pointermove",le=>{M&&(w.y+=(le.clientX-D.x)*.007,w.x=zi.clamp(w.x+(le.clientY-D.y)*.007,-1.4,1.4),D={x:le.clientX,y:le.clientY},ae())});const Be=()=>{M=!1,pe.classList.remove("is-dragging")};pe.addEventListener("pointerup",Be),pe.addEventListener("pointercancel",Be),pe.addEventListener("touchstart",le=>{if(le.touches&&le.touches.length===1){M=!0,S=!1,D={x:le.touches[0].clientX,y:le.touches[0].clientY},pe.classList.add("is-dragging");if(le.cancelable)le.preventDefault()}},{passive:!1}),pe.addEventListener("touchmove",le=>{if(M&&le.touches&&le.touches.length===1){w.y+=(le.touches[0].clientX-D.x)*.007,w.x=zi.clamp(w.x+(le.touches[0].clientY-D.y)*.007,-1.4,1.4),D={x:le.touches[0].clientX,y:le.touches[0].clientY},ae();if(le.cancelable)le.preventDefault()}},{passive:!1}),pe.addEventListener("touchend",Be),pe.addEventListener("touchcancel",Be);new ResizeObserver(X).observe(i),"IntersectionObserver"in window&&new IntersectionObserver(le=>{G=le[0].isIntersecting,G&&ae()}).observe(i),E(P()),X(),Y(R.id);return{select(le){Y(le)},step(le){const he=e.findIndex(H=>H.id===R.id),Ce=e[(he+le+e.length)%e.length];Y(Ce.id),t.onHub?.(Ce.id)},togglePause(){return N=!N,N||(S=!r,ae()),N}}}export{Ju as mountAtlas};
