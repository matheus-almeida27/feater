import{aI as Re,aJ as Ne,S as _e,U as j,z as D,a5 as $,T as fe,aK as Ze,j as A,a3 as F,ar as V,Z as ye,aE as H,aA as xe,r as W,a2 as q,aD as ge,ay as he,aL as De,aM as Je,aC as ae,F as He,aN as Se,as as Qe,aa as U,a9 as et,o as tt,aO as Ve,aP as nt,aq as ot,aQ as at,ac as rt,a1 as it,ae as st,a8 as lt,ag as ct,e as ut,aR as ft,$ as dt,aj as vt,ai as mt,O as yt}from"./BkTRRufQ.js";import{b as J,g as Ie,n as $e,c as gt,d as ht,s as de,B as ie,e as pe}from"./BeBEDEOU.js";import{p as Oe,f as se,c as le,d as ke,g as Pe}from"./B2sVLTB2.js";import{o as wt,n as Et,M as bt}from"./CIcrvfPF.js";import{c as xt,m as St,b as pt,u as Ot}from"./Y_UXJl72.js";import{h as kt,i as Pt}from"./D0CareZD.js";const ee=new WeakMap;function At(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Ne(t),a=ee.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[l,r]=i;l===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),ee.has(e)||ee.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ct(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Ne(t),a=ee.get(e);a==null||a.forEach(i=>{const[l,r]=i;l===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function We(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Tt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Lt(e):we(e))return e;e=e.parentElement}return document.scrollingElement}function ne(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(we(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function we(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Lt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Bt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Mt=j({target:[Object,Array]},"v-dialog-transition"),yn=_e()({name:"VDialogTransition",props:Mt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var w;await new Promise(y=>requestAnimationFrame(y)),await new Promise(y=>requestAnimationFrame(y)),a.style.visibility="";const{x:l,y:r,sx:u,sy:d,speed:s}=Ce(e.target,a),h=J(a,[{transform:`translate(${l}px, ${r}px) scale(${u}, ${d})`,opacity:0},{}],{duration:225*s,easing:ht});(w=Ae(a))==null||w.forEach(y=>{J(y,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*s,easing:de})}),h.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var w;await new Promise(y=>requestAnimationFrame(y));const{x:l,y:r,sx:u,sy:d,speed:s}=Ce(e.target,a);J(a,[{},{transform:`translate(${l}px, ${r}px) scale(${u}, ${d})`,opacity:0}],{duration:125*s,easing:gt}).finished.then(()=>i()),(w=Ae(a))==null||w.forEach(y=>{J(y,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*s,easing:de})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?D(fe,$({name:"dialog-transition"},o,{css:!1}),t):D(fe,{name:"dialog-transition"},t)}});function Ae(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ce(e,n){const t=Ie(e),o=$e(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(S=>parseFloat(S)),[l,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;l==="left"||r==="left"?u-=t.width/2:(l==="right"||r==="right")&&(u+=t.width/2);let d=t.top+t.height/2;l==="top"||r==="top"?d-=t.height/2:(l==="bottom"||r==="bottom")&&(d+=t.height/2);const s=t.width/o.width,h=t.height/o.height,w=Math.max(1,s,h),y=s/w||0,v=h/w||0,f=o.width*o.height/(window.innerWidth*window.innerHeight),k=f>.12?Math.min(1.5,(f-.12)*10+1):1;return{x:u-(a+o.left),y:d-(i+o.top),sx:y,sy:v,speed:k}}function ce(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Ft(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Te(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ce({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ce({x:a,y:i},n)}return ce({x:n.width/2,y:n.height/2},n)}const qe={static:_t,connected:Ht},Rt=j({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in qe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Nt(e,n){const t=W({}),o=W();q&&ge(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var l,r;F(()=>e.locationStrategy,i),V(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:o.value=(r=qe[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var l;(l=o.value)==null||l.call(o,i)}return{contentStyles:t,updateLocation:o}}function _t(){}function Dt(e,n){const t=$e(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Ht(e,n,t){(Array.isArray(e.target.value)||Bt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=Ze(()=>{const v=Oe(n.location,e.isRtl.value),f=n.origin==="overlap"?v:n.origin==="auto"?se(v):Oe(n.origin,e.isRtl.value);return v.side===f.side&&v.align===le(f).align?{preferredAnchor:ke(v),preferredOrigin:ke(f)}:{preferredAnchor:v,preferredOrigin:f}}),[l,r,u,d]=["minWidth","minHeight","maxWidth","maxHeight"].map(v=>A(()=>{const f=parseFloat(n[v]);return isNaN(f)?1/0:f})),s=A(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const v=n.offset.split(" ").map(parseFloat);return v.length<2&&v.push(0),v}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let h=!1;const w=new ResizeObserver(()=>{h&&y()});F([e.target,e.contentEl],(v,f)=>{let[k,S]=v,[p,x]=f;p&&!Array.isArray(p)&&w.unobserve(p),k&&!Array.isArray(k)&&w.observe(k),x&&w.unobserve(x),S&&w.observe(S)},{immediate:!0}),V(()=>{w.disconnect()});function y(){if(h=!1,requestAnimationFrame(()=>h=!0),!e.target.value||!e.contentEl.value)return;const v=Ie(e.target.value),f=Dt(e.contentEl.value,e.isRtl.value),k=ne(e.contentEl.value),S=12;k.length||(k.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=k.reduce((O,b)=>{const g=b.getBoundingClientRect(),E=new ie({x:b===document.documentElement?0:g.x,y:b===document.documentElement?0:g.y,width:b.clientWidth,height:b.clientHeight});return O?new ie({x:Math.max(O.left,E.left),y:Math.max(O.top,E.top),width:Math.min(O.right,E.right)-Math.max(O.left,E.left),height:Math.min(O.bottom,E.bottom)-Math.max(O.top,E.top)}):E},void 0);p.x+=S,p.y+=S,p.width-=S*2,p.height-=S*2;let x={anchor:a.value,origin:i.value};function T(O){const b=new ie(f),g=Te(O.anchor,v),E=Te(O.origin,b);let{x:N,y:_}=Ft(g,E);switch(O.anchor.side){case"top":_-=s.value[0];break;case"bottom":_+=s.value[0];break;case"left":N-=s.value[0];break;case"right":N+=s.value[0];break}switch(O.anchor.align){case"top":_-=s.value[1];break;case"bottom":_+=s.value[1];break;case"left":N-=s.value[1];break;case"right":N+=s.value[1];break}return b.x+=N,b.y+=_,b.width=Math.min(b.width,u.value),b.height=Math.min(b.height,d.value),{overflows:pe(b,p),x:N,y:_}}let B=0,R=0;const P={x:0,y:0},c={x:!1,y:!1};let L=-1;for(;!(L++>10);){const{x:O,y:b,overflows:g}=T(x);B+=O,R+=b,f.x+=O,f.y+=b;{const E=Pe(x.anchor),N=g.x.before||g.x.after,_=g.y.before||g.y.after;let z=!1;if(["x","y"].forEach(C=>{if(C==="x"&&N&&!c.x||C==="y"&&_&&!c.y){const I={anchor:{...x.anchor},origin:{...x.origin}},Y=C==="x"?E==="y"?le:se:E==="y"?se:le;I.anchor=Y(I.anchor),I.origin=Y(I.origin);const{overflows:K}=T(I);(K[C].before<=g[C].before&&K[C].after<=g[C].after||K[C].before+K[C].after<(g[C].before+g[C].after)/2)&&(x=I,z=c[C]=!0)}}),z)continue}g.x.before&&(B+=g.x.before,f.x+=g.x.before),g.x.after&&(B-=g.x.after,f.x-=g.x.after),g.y.before&&(R+=g.y.before,f.y+=g.y.before),g.y.after&&(R-=g.y.after,f.y-=g.y.after);{const E=pe(f,p);P.x=p.width-E.x.before-E.x.after,P.y=p.height-E.y.before-E.y.after,B+=E.x.before,f.x+=E.x.before,R+=E.y.before,f.y+=E.y.before}break}const re=Pe(x.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${x.anchor.side} ${x.anchor.align}`,transformOrigin:`${x.origin.side} ${x.origin.align}`,top:H(ue(R)),left:e.isRtl.value?void 0:H(ue(B)),right:e.isRtl.value?H(ue(-B)):void 0,minWidth:H(re==="y"?Math.min(l.value,v.width):l.value),maxWidth:H(Le(xe(P.x,l.value===1/0?0:l.value,u.value))),maxHeight:H(Le(xe(P.y,r.value===1/0?0:r.value,d.value)))}),{available:P,contentBox:f}}return F(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>y()),ye(()=>{const v=y();if(!v)return;const{available:f,contentBox:k}=v;k.height>f.y&&requestAnimationFrame(()=>{y(),requestAnimationFrame(()=>{y()})})}),{updateLocation:y}}function ue(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Le(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ve=!0;const oe=[];function Vt(e){!ve||oe.length?(oe.push(e),me()):(ve=!1,e(),me())}let Be=-1;function me(){cancelAnimationFrame(Be),Be=requestAnimationFrame(()=>{const e=oe.shift();e&&e(),oe.length?me():ve=!0})}const te={none:null,close:Wt,block:qt,reposition:jt},It=j({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in te}},"VOverlay-scroll-strategies");function $t(e,n){if(!q)return;let t;he(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=De(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=te[e.scrollStrategy])==null||o.call(te,n,e,t)}))}),V(()=>{t==null||t.stop()})}function Wt(e){function n(t){e.isActive.value=!1}je(e.targetEl.value??e.contentEl.value,n)}function qt(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...ne(e.targetEl.value,n.contained?t:void 0),...ne(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>we(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",H(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",H(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",H(a)),r.classList.add("v-overlay-scroll-blocked")}),V(()=>{o.forEach((r,u)=>{const d=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),h=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-d,r.scrollTop=-s,r.style.scrollBehavior=h}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function jt(e,n,t){let o=!1,a=-1,i=-1;function l(r){Vt(()=>{var s,h;const u=performance.now();(h=(s=e.updateLocation).value)==null||h.call(s,r),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{je(e.targetEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(r)})})):l(r)})})}),V(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function je(e,n){const t=[document,...ne(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),V(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const zt=Symbol.for("vuetify:v-menu"),Yt=j({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Kt(e,n){let t=()=>{};function o(l){t==null||t();const r=Number(l?e.openDelay:e.closeDelay);return new Promise(u=>{t=Je(r,()=>{n==null||n(l),u(l)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const Ut=j({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Yt()},"VOverlay-activator");function Xt(e,n){let{isActive:t,isTop:o,contentEl:a}=n;const i=ae("useActivator"),l=W();let r=!1,u=!1,d=!0;const s=A(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),h=A(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:w,runCloseDelay:y}=Kt(e,c=>{c===(e.openOnHover&&r||s.value&&u)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==c&&(d=!0),t.value=c)}),v=W(),f={onClick:c=>{c.stopPropagation(),l.value=c.currentTarget||c.target,t.value||(v.value=[c.clientX,c.clientY]),t.value=!t.value},onMouseenter:c=>{var L;(L=c.sourceCapabilities)!=null&&L.firesTouchEvents||(r=!0,l.value=c.currentTarget||c.target,w())},onMouseleave:c=>{r=!1,y()},onFocus:c=>{Qe(c.target,":focus-visible")!==!1&&(u=!0,c.stopPropagation(),l.value=c.currentTarget||c.target,w())},onBlur:c=>{u=!1,c.stopPropagation(),y()}},k=A(()=>{const c={};return h.value&&(c.onClick=f.onClick),e.openOnHover&&(c.onMouseenter=f.onMouseenter,c.onMouseleave=f.onMouseleave),s.value&&(c.onFocus=f.onFocus,c.onBlur=f.onBlur),c}),S=A(()=>{const c={};if(e.openOnHover&&(c.onMouseenter=()=>{r=!0,w()},c.onMouseleave=()=>{r=!1,y()}),s.value&&(c.onFocusin=()=>{u=!0,w()},c.onFocusout=()=>{u=!1,y()}),e.closeOnContentClick){const L=He(zt,null);c.onClick=()=>{t.value=!1,L==null||L.closeParents()}}return c}),p=A(()=>{const c={};return e.openOnHover&&(c.onMouseenter=()=>{d&&(r=!0,d=!1,w())},c.onMouseleave=()=>{r=!1,y()}),c});F(o,c=>{var L;c&&(e.openOnHover&&!r&&(!s.value||!u)||s.value&&!u&&(!e.openOnHover||!r))&&!((L=a.value)!=null&&L.contains(document.activeElement))&&(t.value=!1)}),F(t,c=>{c||setTimeout(()=>{v.value=void 0})},{flush:"post"});const x=Se();he(()=>{x.value&&ye(()=>{l.value=x.el})});const T=Se(),B=A(()=>e.target==="cursor"&&v.value?v.value:T.value?T.el:ze(e.target,i)||l.value),R=A(()=>Array.isArray(B.value)?void 0:B.value);let P;return F(()=>!!e.activator,c=>{c&&q?(P=De(),P.run(()=>{Gt(e,i,{activatorEl:l,activatorEvents:k})})):P&&P.stop()},{flush:"post",immediate:!0}),V(()=>{P==null||P.stop()}),{activatorEl:l,activatorRef:x,target:B,targetEl:R,targetRef:T,activatorEvents:k,contentEvents:S,scrimEvents:p}}function Gt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;F(()=>e.activator,(u,d)=>{if(d&&u!==d){const s=r(d);s&&l(s)}u&&ye(()=>i())},{immediate:!0}),F(()=>e.activatorProps,()=>{i()}),V(()=>{l()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&At(u,$(a.value,d))}function l(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ct(u,$(a.value,d))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const d=ze(u,n);return o.value=(d==null?void 0:d.nodeType)===Node.ELEMENT_NODE?d:void 0,o.value}}function ze(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Zt(){if(!q)return U(!1);const{ssr:e}=et();if(e){const n=U(!1);return tt(()=>{n.value=!0}),n}else return U(!0)}const Jt=j({eager:Boolean},"lazy");function Qt(e,n){const t=U(!1),o=A(()=>t.value||e.eager||n.value);F(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function en(){const n=ae("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Me=Symbol.for("vuetify:stack"),Z=Ve([]);function tn(e,n,t){const o=ae("useStack"),a=!t,i=He(Me,void 0),l=Ve({activeChildren:new Set});ot(Me,l);const r=U(Number(n.value));ge(e,()=>{var h;const s=(h=Z.at(-1))==null?void 0:h[1];r.value=s?s+10:Number(n.value),a&&Z.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),V(()=>{if(a){const w=at(Z).findIndex(y=>y[0]===o.uid);Z.splice(w,1)}i==null||i.activeChildren.delete(o.uid)})});const u=U(!0);a&&he(()=>{var h;const s=((h=Z.at(-1))==null?void 0:h[0])===o.uid;setTimeout(()=>u.value=s)});const d=A(()=>!l.activeChildren.size);return{globalTop:nt(u),localTop:d,stackStyles:A(()=>({zIndex:r.value}))}}function nn(e){return{teleportTarget:A(()=>{const t=e();if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=[...o.children].find(i=>i.matches(".v-overlay-container"));return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function on(){return!0}function Ye(e,n,t){if(!e||Ke(e,t)===!1)return!1;const o=We(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function Ke(e,n){return(typeof n.value=="object"&&n.value.closeConditional||on)(e)}function an(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&Ye(e,n,t)&&setTimeout(()=>{Ke(e,t)&&o&&o(e)},0)}function Fe(e,n){const t=We(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const rn={mounted(e,n){const t=a=>an(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Ye(a,e,n)};Fe(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},beforeUnmount(e,n){e._clickOutside&&(Fe(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function sn(e){const{modelValue:n,color:t,...o}=e;return D(fe,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&D("div",$({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const ln=j({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Ut(),...St(),...xt(),...Jt(),...Rt(),...It(),...rt(),...wt()},"VOverlay"),gn=_e()({name:"VOverlay",directives:{ClickOutside:rn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...ln()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,keydown:e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=ae("VOverlay"),l=W(),r=W(),u=W(),d=it(e,"modelValue"),s=A({get:()=>d.value,set:m=>{m&&e.disabled||(d.value=m)}}),{themeClasses:h}=st(e),{rtlClasses:w,isRtl:y}=lt(),{hasContent:v,onAfterLeave:f}=Qt(e,s),k=Et(A(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:S,localTop:p,stackStyles:x}=tn(s,ct(e,"zIndex"),e._disableGlobalStack),{activatorEl:T,activatorRef:B,target:R,targetEl:P,targetRef:c,activatorEvents:L,contentEvents:re,scrimEvents:O}=Xt(e,{isActive:s,isTop:p,contentEl:u}),{teleportTarget:b}=nn(()=>{var X,G,be;const m=e.attach||e.contained;if(m)return m;const M=((X=T==null?void 0:T.value)==null?void 0:X.getRootNode())||((be=(G=i.proxy)==null?void 0:G.$el)==null?void 0:be.getRootNode());return M instanceof ShadowRoot?M:!1}),{dimensionStyles:g}=pt(e),E=Zt(),{scopeId:N}=en();F(()=>e.disabled,m=>{m&&(s.value=!1)});const{contentStyles:_,updateLocation:z}=Nt(e,{isRtl:y,contentEl:u,target:R,isActive:s});$t(e,{root:l,contentEl:u,targetEl:P,isActive:s,updateLocation:z});function C(m){a("click:outside",m),e.persistent?Q():s.value=!1}function I(m){return s.value&&S.value&&(!e.scrim||m.target===r.value||m instanceof MouseEvent&&m.shadowTarget===r.value)}q&&F(s,m=>{m?window.addEventListener("keydown",Y):window.removeEventListener("keydown",Y)},{immediate:!0}),ut(()=>{q&&window.removeEventListener("keydown",Y)});function Y(m){var M,X,G;m.key==="Escape"&&S.value&&((M=u.value)!=null&&M.contains(document.activeElement)||a("keydown",m),e.persistent?Q():(s.value=!1,(X=u.value)!=null&&X.contains(document.activeElement)&&((G=T.value)==null||G.focus())))}function K(m){m.key==="Escape"&&!S.value||a("keydown",m)}const Ue=kt();ge(()=>e.closeOnBack,()=>{Pt(Ue,m=>{S.value&&s.value?(m(!1),e.persistent?Q():s.value=!1):m()})});const Ee=W();F(()=>s.value&&(e.absolute||e.contained)&&b.value==null,m=>{if(m){const M=Tt(l.value);M&&M!==document.scrollingElement&&(Ee.value=M.scrollTop)}});function Q(){e.noClickAnimation||u.value&&J(u.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:de})}function Xe(){a("afterEnter")}function Ge(){f(),a("afterLeave")}return Ot(()=>{var m;return D(yt,null,[(m=t.activator)==null?void 0:m.call(t,{isActive:s.value,targetRef:c,props:$({ref:B},L.value,e.activatorProps)}),E.value&&v.value&&D(ft,{disabled:!b.value,to:b.value},{default:()=>[D("div",$({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},h.value,w.value,e.class],style:[x.value,{"--v-overlay-opacity":e.opacity,top:H(Ee.value)},e.style],ref:l,onKeydown:K},N,o),[D(sn,$({color:k,modelValue:s.value&&!!e.scrim,ref:r},O.value),null),D(bt,{appear:!0,persisted:!0,transition:e.transition,target:R.value,onAfterEnter:Xe,onAfterLeave:Ge},{default:()=>{var M;return[dt(D("div",$({ref:u,class:["v-overlay__content",e.contentClass],style:[g.value,_.value]},re.value,e.contentProps),[(M=t.default)==null?void 0:M.call(t,{isActive:s})]),[[vt,s.value],[mt("click-outside"),{handler:C,closeConditional:I,include:()=>[T.value]}]])]}})])]})])}),{activatorEl:T,scrimEl:r,target:R,animateClick:Q,contentEl:u,globalTop:S,localTop:p,updateLocation:z}}});export{yn as V,gn as a,zt as b,Tt as g,ln as m,en as u};
