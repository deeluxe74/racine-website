import{q as A,s as x,u as m,v as b,x as y,y as G,z as V,A as $,B as q,C as z,D as H,E as U,G as W,H as j,I,J as F}from"./runtime-core.esm-bundler.DhSRhbEP.js";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const X="http://www.w3.org/2000/svg",J="http://www.w3.org/1998/Math/MathML",l=typeof document<"u"?document:null,C=l&&l.createElement("template"),Q={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?l.createElementNS(X,t):e==="mathml"?l.createElementNS(J,t):l.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{C.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const c=C.content;if(i==="svg"||i==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Y=Symbol("_vtc");function Z(t,e,n){const i=t[Y];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const E=Symbol("_vod"),k=Symbol("_vsh"),tt=Symbol(""),et=/(^|;)\s*display\s*:/;function nt(t,e,n){const i=t.style,s=m(n);let r=!1;if(n&&!s){if(e)if(m(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&d(i,c,"")}else for(const o in e)n[o]==null&&d(i,o,"");for(const o in n)o==="display"&&(r=!0),d(i,o,n[o])}else if(s){if(e!==n){const o=i[tt];o&&(n+=";"+o),i.cssText=n,r=et.test(n)}}else e&&t.removeAttribute("style");E in t&&(t[E]=r?i.display:"",t[k]&&(i.display="none"))}const w=/\s*!important$/;function d(t,e,n){if(b(n))n.forEach(i=>d(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=it(t,e);w.test(n)?t.setProperty(H(i),n.replace(w,""),"important"):t[i]=n}}const M=["Webkit","Moz","ms"],h={};function it(t,e){const n=h[e];if(n)return n;let i=U(e);if(i!=="filter"&&i in t)return h[e]=i;i=W(i);for(let s=0;s<M.length;s++){const r=M[s]+i;if(r in t)return h[e]=r}return e}const T="http://www.w3.org/1999/xlink";function st(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(T,e.slice(6,e.length)):t.setAttributeNS(T,e,n);else{const r=j(e);n==null||r&&!I(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function ot(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const f=c==="OPTION"?t.getAttribute("value")||"":t.value,v=n??"";(f!==v||!("_value"in t))&&(t.value=v),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=I(n):n==null&&f==="string"?(n="",a=!0):f==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function u(t,e,n,i){t.addEventListener(e,n,i)}function rt(t,e,n,i){t.removeEventListener(e,n,i)}const N=Symbol("_vei");function ct(t,e,n,i,s=null){const r=t[N]||(t[N]={}),o=r[e];if(i&&o)o.value=i;else{const[c,a]=at(e);if(i){const f=r[e]=ut(i,s);u(t,c,f,a)}else o&&(rt(t,c,o,a),r[e]=void 0)}}const _=/(?:Once|Passive|Capture)$/;function at(t){let e;if(_.test(t)){e={};let i;for(;i=t.match(_);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):H(t.slice(2)),e]}let g=0;const ft=Promise.resolve(),lt=()=>g||(ft.then(()=>g=0),g=Date.now());function ut(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;F(pt(i,n.value),e,5,[i])};return n.value=t,n.attached=lt(),n}function pt(t,e){if(b(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const P=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,dt=(t,e,n,i,s,r,o,c,a)=>{const f=s==="svg";e==="class"?Z(t,i,f):e==="style"?nt(t,n,i):q(e)?z(e)||ct(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mt(t,e,i,f))?ot(t,e,i,r,o,c,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),st(t,e,i,f))};function mt(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&P(e)&&x(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return P(e)&&m(n)?!1:e in t}const R=t=>{const e=t.props["onUpdate:modelValue"]||!1;return b(e)?n=>y(e,n):e};function ht(t){t.target.composing=!0}function L(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const S=Symbol("_assign"),Ct={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[S]=R(s);const r=i||s.props&&s.props.type==="number";u(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),r&&(c=A(c)),t[S](c)}),n&&u(t,"change",()=>{t.value=t.value.trim()}),e||(u(t,"compositionstart",ht),u(t,"compositionend",L),u(t,"change",L))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t[S]=R(r),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?A(t.value):t.value,c=e??"";o!==c&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===c)||(t.value=c))}},gt=["ctrl","shift","alt","meta"],St={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gt.some(n=>t[`${n}Key`]&&!e.includes(n))},Et=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const c=St[e[o]];if(c&&c(s,e))return}return t(s,...r)})},K=$({patchProp:dt},Q);let p,O=!1;function bt(){return p||(p=G(K))}function vt(){return p=O?p:V(K),O=!0,p}const wt=(...t)=>{const e=bt().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=B(i);if(!s)return;const r=e._component;!x(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,D(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Mt=(...t)=>{const e=vt().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=B(i);if(s)return n(s,!0,D(s))},e};function D(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function B(t){return m(t)?document.querySelector(t):t}export{wt as a,Mt as c,Ct as v,Et as w};
