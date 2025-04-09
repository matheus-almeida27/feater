import{aF as Re,aG as Ne,Q as _e,R as j,z as H,W as $,T as fe,r as W,U as q,az as ye,aH as Je,j as A,V as M,an as D,Y as ge,aA as V,aw as xe,au as he,aI as He,aJ as Qe,ay as ae,F as Ve,aK as Se,ao as Ze,a5 as U,a4 as et,o as tt,aL as De,aM as nt,am as ot,aN as at,S as rt,a9 as it,a3 as st,ab as lt,e as ct,aO as ut,ad as ft,af as dt,ae as vt,O as mt,a7 as yt}from"./B-haekj4.js";import{a as Q,b as gt,s as de,d as ht,g as Ie,n as $e,B as ie,c as pe}from"./DFN0DKfH.js";import{p as Oe,f as se,c as le,d as ke,g as Pe}from"./DQwfj6aW.js";import{j as wt,k as Et,u as bt,M as xt,n as St,l as pt,m as Ot}from"./CI60m_iN.js";import{h as kt,i as Pt}from"./C-ojXM-K.js";const ee=new WeakMap;function At(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Ne(t),a=ee.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[l,r]=i;l===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),ee.has(e)||ee.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ct(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Ne(t),a=ee.get(e);a==null||a.forEach(i=>{const[l,r]=i;l===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function We(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Tt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Lt(e):we(e))return e;e=e.parentElement}return document.scrollingElement}function ne(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(we(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function we(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Lt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Bt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Ft=j({target:[Object,Array]},"v-dialog-transition"),mn=_e()({name:"VDialogTransition",props:Ft(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var w;await new Promise(y=>requestAnimationFrame(y)),await new Promise(y=>requestAnimationFrame(y)),a.style.visibility="";const{x:l,y:r,sx:u,sy:d,speed:s}=Ce(e.target,a),h=Q(a,[{transform:`translate(${l}px, ${r}px) scale(${u}, ${d})`,opacity:0},{}],{duration:225*s,easing:ht});(w=Ae(a))==null||w.forEach(y=>{Q(y,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*s,easing:de})}),h.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var w;await new Promise(y=>requestAnimationFrame(y));const{x:l,y:r,sx:u,sy:d,speed:s}=Ce(e.target,a);Q(a,[{},{transform:`translate(${l}px, ${r}px) scale(${u}, ${d})`,opacity:0}],{duration:125*s,easing:gt}).finished.then(()=>i()),(w=Ae(a))==null||w.forEach(y=>{Q(y,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*s,easing:de})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?H(fe,$({name:"dialog-transition"},o,{css:!1}),t):H(fe,{name:"dialog-transition"},t)}});function Ae(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ce(e,n){const t=Ie(e),o=$e(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(S=>parseFloat(S)),[l,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;l==="left"||r==="left"?u-=t.width/2:(l==="right"||r==="right")&&(u+=t.width/2);let d=t.top+t.height/2;l==="top"||r==="top"?d-=t.height/2:(l==="bottom"||r==="bottom")&&(d+=t.height/2);const s=t.width/o.width,h=t.height/o.height,w=Math.max(1,s,h),y=s/w||0,v=h/w||0,f=o.width*o.height/(window.innerWidth*window.innerHeight),k=f>.12?Math.min(1.5,(f-.12)*10+1):1;return{x:u-(a+o.left),y:d-(i+o.top),sx:y,sy:v,speed:k}}function ce(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Mt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Te(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ce({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ce({x:a,y:i},n)}return ce({x:n.width/2,y:n.height/2},n)}const qe={static:_t,connected:Vt},Rt=j({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in qe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Nt(e,n){const t=W({}),o=W();q&&ye(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var l,r;M(()=>e.locationStrategy,i),D(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:o.value=(r=qe[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var l;(l=o.value)==null||l.call(o,i)}return{contentStyles:t,updateLocation:o}}function _t(){}function Ht(e,n){const t=$e(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Vt(e,n,t){(Array.isArray(e.target.value)||Bt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=Je(()=>{const v=Oe(n.location,e.isRtl.value),f=n.origin==="overlap"?v:n.origin==="auto"?se(v):Oe(n.origin,e.isRtl.value);return v.side===f.side&&v.align===le(f).align?{preferredAnchor:ke(v),preferredOrigin:ke(f)}:{preferredAnchor:v,preferredOrigin:f}}),[l,r,u,d]=["minWidth","minHeight","maxWidth","maxHeight"].map(v=>A(()=>{const f=parseFloat(n[v]);return isNaN(f)?1/0:f})),s=A(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const v=n.offset.split(" ").map(parseFloat);return v.length<2&&v.push(0),v}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let h=!1;const w=new ResizeObserver(()=>{h&&y()});M([e.target,e.contentEl],(v,f)=>{let[k,S]=v,[p,x]=f;p&&!Array.isArray(p)&&w.unobserve(p),k&&!Array.isArray(k)&&w.observe(k),x&&w.unobserve(x),S&&w.observe(S)},{immediate:!0}),D(()=>{w.disconnect()});function y(){if(h=!1,requestAnimationFrame(()=>h=!0),!e.target.value||!e.contentEl.value)return;const v=Ie(e.target.value),f=Ht(e.contentEl.value,e.isRtl.value),k=ne(e.contentEl.value),S=12;k.length||(k.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=k.reduce((O,b)=>{const g=b.getBoundingClientRect(),E=new ie({x:b===document.documentElement?0:g.x,y:b===document.documentElement?0:g.y,width:b.clientWidth,height:b.clientHeight});return O?new ie({x:Math.max(O.left,E.left),y:Math.max(O.top,E.top),width:Math.min(O.right,E.right)-Math.max(O.left,E.left),height:Math.min(O.bottom,E.bottom)-Math.max(O.top,E.top)}):E},void 0);p.x+=S,p.y+=S,p.width-=S*2,p.height-=S*2;let x={anchor:a.value,origin:i.value};function T(O){const b=new ie(f),g=Te(O.anchor,v),E=Te(O.origin,b);let{x:N,y:_}=Mt(g,E);switch(O.anchor.side){case"top":_-=s.value[0];break;case"bottom":_+=s.value[0];break;case"left":N-=s.value[0];break;case"right":N+=s.value[0];break}switch(O.anchor.align){case"top":_-=s.value[1];break;case"bottom":_+=s.value[1];break;case"left":N-=s.value[1];break;case"right":N+=s.value[1];break}return b.x+=N,b.y+=_,b.width=Math.min(b.width,u.value),b.height=Math.min(b.height,d.value),{overflows:pe(b,p),x:N,y:_}}let B=0,R=0;const P={x:0,y:0},c={x:!1,y:!1};let L=-1;for(;!(L++>10);){const{x:O,y:b,overflows:g}=T(x);B+=O,R+=b,f.x+=O,f.y+=b;{const E=Pe(x.anchor),N=g.x.before||g.x.after,_=g.y.before||g.y.after;let z=!1;if(["x","y"].forEach(C=>{if(C==="x"&&N&&!c.x||C==="y"&&_&&!c.y){const I={anchor:{...x.anchor},origin:{...x.origin}},Y=C==="x"?E==="y"?le:se:E==="y"?se:le;I.anchor=Y(I.anchor),I.origin=Y(I.origin);const{overflows:K}=T(I);(K[C].before<=g[C].before&&K[C].after<=g[C].after||K[C].before+K[C].after<(g[C].before+g[C].after)/2)&&(x=I,z=c[C]=!0)}}),z)continue}g.x.before&&(B+=g.x.before,f.x+=g.x.before),g.x.after&&(B-=g.x.after,f.x-=g.x.after),g.y.before&&(R+=g.y.before,f.y+=g.y.before),g.y.after&&(R-=g.y.after,f.y-=g.y.after);{const E=pe(f,p);P.x=p.width-E.x.before-E.x.after,P.y=p.height-E.y.before-E.y.after,B+=E.x.before,f.x+=E.x.before,R+=E.y.before,f.y+=E.y.before}break}const re=Pe(x.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${x.anchor.side} ${x.anchor.align}`,transformOrigin:`${x.origin.side} ${x.origin.align}`,top:V(ue(R)),left:e.isRtl.value?void 0:V(ue(B)),right:e.isRtl.value?V(ue(-B)):void 0,minWidth:V(re==="y"?Math.min(l.value,v.width):l.value),maxWidth:V(Le(xe(P.x,l.value===1/0?0:l.value,u.value))),maxHeight:V(Le(xe(P.y,r.value===1/0?0:r.value,d.value)))}),{available:P,contentBox:f}}return M(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>y()),ge(()=>{const v=y();if(!v)return;const{available:f,contentBox:k}=v;k.height>f.y&&requestAnimationFrame(()=>{y(),requestAnimationFrame(()=>{y()})})}),{updateLocation:y}}function ue(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Le(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ve=!0;const oe=[];function Dt(e){!ve||oe.length?(oe.push(e),me()):(ve=!1,e(),me())}let Be=-1;function me(){cancelAnimationFrame(Be),Be=requestAnimationFrame(()=>{const e=oe.shift();e&&e(),oe.length?me():ve=!0})}const te={none:null,close:Wt,block:qt,reposition:jt},It=j({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in te}},"VOverlay-scroll-strategies");function $t(e,n){if(!q)return;let t;he(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=He(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=te[e.scrollStrategy])==null||o.call(te,n,e,t)}))}),D(()=>{t==null||t.stop()})}function Wt(e){function n(t){e.isActive.value=!1}je(e.targetEl.value??e.contentEl.value,n)}function qt(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...ne(e.targetEl.value,n.contained?t:void 0),...ne(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>we(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",V(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",V(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",V(a)),r.classList.add("v-overlay-scroll-blocked")}),D(()=>{o.forEach((r,u)=>{const d=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),h=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-d,r.scrollTop=-s,r.style.scrollBehavior=h}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function jt(e,n,t){let o=!1,a=-1,i=-1;function l(r){Dt(()=>{var s,h;const u=performance.now();(h=(s=e.updateLocation).value)==null||h.call(s,r),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{je(e.targetEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(r)})})):l(r)})})}),D(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function je(e,n){const t=[document,...ne(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),D(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const zt=Symbol.for("vuetify:v-menu"),Yt=j({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Kt(e,n){let t=()=>{};function o(l){t==null||t();const r=Number(l?e.openDelay:e.closeDelay);return new Promise(u=>{t=Qe(r,()=>{n==null||n(l),u(l)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const Ut=j({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Yt()},"VOverlay-activator");function Xt(e,n){let{isActive:t,isTop:o,contentEl:a}=n;const i=ae("useActivator"),l=W();let r=!1,u=!1,d=!0;const s=A(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),h=A(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:w,runCloseDelay:y}=Kt(e,c=>{c===(e.openOnHover&&r||s.value&&u)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==c&&(d=!0),t.value=c)}),v=W(),f={onClick:c=>{c.stopPropagation(),l.value=c.currentTarget||c.target,t.value||(v.value=[c.clientX,c.clientY]),t.value=!t.value},onMouseenter:c=>{var L;(L=c.sourceCapabilities)!=null&&L.firesTouchEvents||(r=!0,l.value=c.currentTarget||c.target,w())},onMouseleave:c=>{r=!1,y()},onFocus:c=>{Ze(c.target,":focus-visible")!==!1&&(u=!0,c.stopPropagation(),l.value=c.currentTarget||c.target,w())},onBlur:c=>{u=!1,c.stopPropagation(),y()}},k=A(()=>{const c={};return h.value&&(c.onClick=f.onClick),e.openOnHover&&(c.onMouseenter=f.onMouseenter,c.onMouseleave=f.onMouseleave),s.value&&(c.onFocus=f.onFocus,c.onBlur=f.onBlur),c}),S=A(()=>{const c={};if(e.openOnHover&&(c.onMouseenter=()=>{r=!0,w()},c.onMouseleave=()=>{r=!1,y()}),s.value&&(c.onFocusin=()=>{u=!0,w()},c.onFocusout=()=>{u=!1,y()}),e.closeOnContentClick){const L=Ve(zt,null);c.onClick=()=>{t.value=!1,L==null||L.closeParents()}}return c}),p=A(()=>{const c={};return e.openOnHover&&(c.onMouseenter=()=>{d&&(r=!0,d=!1,w())},c.onMouseleave=()=>{r=!1,y()}),c});M(o,c=>{var L;c&&(e.openOnHover&&!r&&(!s.value||!u)||s.value&&!u&&(!e.openOnHover||!r))&&!((L=a.value)!=null&&L.contains(document.activeElement))&&(t.value=!1)}),M(t,c=>{c||setTimeout(()=>{v.value=void 0})},{flush:"post"});const x=Se();he(()=>{x.value&&ge(()=>{l.value=x.el})});const T=Se(),B=A(()=>e.target==="cursor"&&v.value?v.value:T.value?T.el:ze(e.target,i)||l.value),R=A(()=>Array.isArray(B.value)?void 0:B.value);let P;return M(()=>!!e.activator,c=>{c&&q?(P=He(),P.run(()=>{Gt(e,i,{activatorEl:l,activatorEvents:k})})):P&&P.stop()},{flush:"post",immediate:!0}),D(()=>{P==null||P.stop()}),{activatorEl:l,activatorRef:x,target:B,targetEl:R,targetRef:T,activatorEvents:k,contentEvents:S,scrimEvents:p}}function Gt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;M(()=>e.activator,(u,d)=>{if(d&&u!==d){const s=r(d);s&&l(s)}u&&ge(()=>i())},{immediate:!0}),M(()=>e.activatorProps,()=>{i()}),D(()=>{l()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&At(u,$(a.value,d))}function l(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ct(u,$(a.value,d))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const d=ze(u,n);return o.value=(d==null?void 0:d.nodeType)===Node.ELEMENT_NODE?d:void 0,o.value}}function ze(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Jt(){if(!q)return U(!1);const{ssr:e}=et();if(e){const n=U(!1);return tt(()=>{n.value=!0}),n}else return U(!0)}const Qt=j({eager:Boolean},"lazy");function Zt(e,n){const t=U(!1),o=A(()=>t.value||e.eager||n.value);M(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function en(){const n=ae("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Fe=Symbol.for("vuetify:stack"),J=De([]);function tn(e,n,t){const o=ae("useStack"),a=!t,i=Ve(Fe,void 0),l=De({activeChildren:new Set});ot(Fe,l);const r=U(Number(n.value));ye(e,()=>{var h;const s=(h=J.at(-1))==null?void 0:h[1];r.value=s?s+10:Number(n.value),a&&J.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),D(()=>{if(a){const w=at(J).findIndex(y=>y[0]===o.uid);J.splice(w,1)}i==null||i.activeChildren.delete(o.uid)})});const u=U(!0);a&&he(()=>{var h;const s=((h=J.at(-1))==null?void 0:h[0])===o.uid;setTimeout(()=>u.value=s)});const d=A(()=>!l.activeChildren.size);return{globalTop:nt(u),localTop:d,stackStyles:A(()=>({zIndex:r.value}))}}function nn(e){return{teleportTarget:A(()=>{const t=e();if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=[...o.children].find(i=>i.matches(".v-overlay-container"));return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function on(){return!0}function Ye(e,n,t){if(!e||Ke(e,t)===!1)return!1;const o=We(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function Ke(e,n){return(typeof n.value=="object"&&n.value.closeConditional||on)(e)}function an(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&Ye(e,n,t)&&setTimeout(()=>{Ke(e,t)&&o&&o(e)},0)}function Me(e,n){const t=We(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const rn={mounted(e,n){const t=a=>an(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Ye(a,e,n)};Me(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},beforeUnmount(e,n){e._clickOutside&&(Me(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function sn(e){const{modelValue:n,color:t,...o}=e;return H(fe,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&H("div",$({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const ln=j({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Ut(),...Ot(),...pt(),...Qt(),...Rt(),...It(),...yt(),...St()},"VOverlay"),yn=_e()({name:"VOverlay",directives:{ClickOutside:rn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...ln()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,keydown:e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=ae("VOverlay"),l=W(),r=W(),u=W(),d=rt(e,"modelValue"),s=A({get:()=>d.value,set:m=>{m&&e.disabled||(d.value=m)}}),{themeClasses:h}=it(e),{rtlClasses:w,isRtl:y}=st(),{hasContent:v,onAfterLeave:f}=Zt(e,s),k=wt(A(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:S,localTop:p,stackStyles:x}=tn(s,lt(e,"zIndex"),e._disableGlobalStack),{activatorEl:T,activatorRef:B,target:R,targetEl:P,targetRef:c,activatorEvents:L,contentEvents:re,scrimEvents:O}=Xt(e,{isActive:s,isTop:p,contentEl:u}),{teleportTarget:b}=nn(()=>{var X,G,be;const m=e.attach||e.contained;if(m)return m;const F=((X=T==null?void 0:T.value)==null?void 0:X.getRootNode())||((be=(G=i.proxy)==null?void 0:G.$el)==null?void 0:be.getRootNode());return F instanceof ShadowRoot?F:!1}),{dimensionStyles:g}=Et(e),E=Jt(),{scopeId:N}=en();M(()=>e.disabled,m=>{m&&(s.value=!1)});const{contentStyles:_,updateLocation:z}=Nt(e,{isRtl:y,contentEl:u,target:R,isActive:s});$t(e,{root:l,contentEl:u,targetEl:P,isActive:s,updateLocation:z});function C(m){a("click:outside",m),e.persistent?Z():s.value=!1}function I(m){return s.value&&S.value&&(!e.scrim||m.target===r.value||m instanceof MouseEvent&&m.shadowTarget===r.value)}q&&M(s,m=>{m?window.addEventListener("keydown",Y):window.removeEventListener("keydown",Y)},{immediate:!0}),ct(()=>{q&&window.removeEventListener("keydown",Y)});function Y(m){var F,X,G;m.key==="Escape"&&S.value&&((F=u.value)!=null&&F.contains(document.activeElement)||a("keydown",m),e.persistent?Z():(s.value=!1,(X=u.value)!=null&&X.contains(document.activeElement)&&((G=T.value)==null||G.focus())))}function K(m){m.key==="Escape"&&!S.value||a("keydown",m)}const Ue=kt();ye(()=>e.closeOnBack,()=>{Pt(Ue,m=>{S.value&&s.value?(m(!1),e.persistent?Z():s.value=!1):m()})});const Ee=W();M(()=>s.value&&(e.absolute||e.contained)&&b.value==null,m=>{if(m){const F=Tt(l.value);F&&F!==document.scrollingElement&&(Ee.value=F.scrollTop)}});function Z(){e.noClickAnimation||u.value&&Q(u.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:de})}function Xe(){a("afterEnter")}function Ge(){f(),a("afterLeave")}return bt(()=>{var m;return H(mt,null,[(m=t.activator)==null?void 0:m.call(t,{isActive:s.value,targetRef:c,props:$({ref:B},L.value,e.activatorProps)}),E.value&&v.value&&H(ut,{disabled:!b.value,to:b.value},{default:()=>[H("div",$({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},h.value,w.value,e.class],style:[x.value,{"--v-overlay-opacity":e.opacity,top:V(Ee.value)},e.style],ref:l,onKeydown:K},N,o),[H(sn,$({color:k,modelValue:s.value&&!!e.scrim,ref:r},O.value),null),H(xt,{appear:!0,persisted:!0,transition:e.transition,target:R.value,onAfterEnter:Xe,onAfterLeave:Ge},{default:()=>{var F;return[ft(H("div",$({ref:u,class:["v-overlay__content",e.contentClass],style:[g.value,_.value]},re.value,e.contentProps),[(F=t.default)==null?void 0:F.call(t,{isActive:s})]),[[dt,s.value],[vt("click-outside"),{handler:C,closeConditional:I,include:()=>[T.value]}]])]}})])]})])}),{activatorEl:T,scrimEl:r,target:R,animateClick:Z,contentEl:u,globalTop:S,localTop:p,updateLocation:z}}});export{yn as V,mn as a,zt as b,Tt as g,ln as m,en as u};
