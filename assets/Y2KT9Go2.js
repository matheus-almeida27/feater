import{l as j,p as W}from"./CnxHxsUS.js";import{u as X,a as M,m as K}from"./CMGEaCVa.js";import{R as w,aV as S,aH as U,b8 as Q,aA as g,Q as G,r as J,b7 as Z,bd as ee,j as p,ab as b,be as te,bf as ne,z as E,a7 as ie,a2 as se,L as x,O as ae,bg as re,bh as R,aL as z,a8 as oe,ay as I,U as le,Y as ce,an as ue,bi as de,bj as P}from"./D4JXF2sJ.js";const pe=["x-small","small","default","large","x-large"],me=w({size:{type:[String,Number],default:"default"}},"size");function fe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:S();return U(()=>{let n,i;return Q(pe,e.size)?n=`${t}--size-${e.size}`:e.size&&(i={width:g(e.size),height:g(e.size)}),{sizeClasses:n,sizeStyles:i}})}const ve=w({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:se,opacity:[String,Number],...K(),...me(),...M({tag:"i"}),...ie()},"VIcon"),Se=G()({name:"VIcon",props:ve(),setup(e,t){let{attrs:n,slots:i}=t;const s=J(),{themeClasses:a}=Z(),{iconData:o}=ee(p(()=>s.value||e.icon)),{sizeClasses:r}=fe(e),{textColorClasses:c,textColorStyles:v}=j(b(e,"color"));return X(()=>{var m,l;const f=(m=i.default)==null?void 0:m.call(i);f&&(s.value=(l=te(f).filter(h=>h.type===ne&&h.children&&typeof h.children=="string")[0])==null?void 0:l.children);const u=!!(n.onClick||n.onClickOnce);return E(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",a.value,r.value,c.value,{"v-icon--clickable":u,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[{"--v-icon-opacity":e.opacity},r.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},v.value,e.style],role:u?"button":void 0,"aria-hidden":!u,tabindex:u?e.disabled?-1:0:void 0},{default:()=>[f]})}),{}}}),he=[null,"default","comfortable","compact"],$e=w({density:{type:String,default:"default",validator:e=>he.includes(e)}},"density");function xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:S();return{densityClasses:p(()=>`${t}--density-${e.density}`)}}const ge=["elevated","flat","tonal","outlined","text","plain"];function Re(e,t){return E(ae,null,[e&&E("span",{key:"overlay",class:`${t}__overlay`},null),E("span",{key:"underlay",class:`${t}__underlay`},null)])}const ze=w({color:String,variant:{type:String,default:"elevated",validator:e=>ge.includes(e)}},"variant");function Pe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:S();const n=p(()=>{const{variant:a}=x(e);return`${t}--variant-${a}`}),{colorClasses:i,colorStyles:s}=W(p(()=>{const{variant:a,color:o}=x(e);return{[["elevated","flat"].includes(a)?"background":"text"]:o}}));return{colorClasses:i,colorStyles:s,variantClasses:n}}function ye(){const e=I("useRoute");return p(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Ne(){var e,t;return(t=(e=I("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Ve(e,t){var u,m;const n=re("RouterLink"),i=p(()=>!!(e.href||e.to)),s=p(()=>(i==null?void 0:i.value)||R(t,"click")||R(e,"click"));if(typeof n=="string"||!("useLink"in n)){const l=b(e,"href");return{isLink:i,isClickable:s,href:l,linkProps:z({href:l})}}const a=p(()=>({...e,to:b(()=>e.to||"")})),o=n.useLink(a.value),r=p(()=>e.to?o:void 0),c=ye(),v=p(()=>{var l,h,$;return r.value?e.exact?c.value?(($=r.value.isExactActive)==null?void 0:$.value)&&oe(r.value.route.value.query,c.value.query):((h=r.value.isExactActive)==null?void 0:h.value)??!1:((l=r.value.isActive)==null?void 0:l.value)??!1:!1}),f=p(()=>{var l;return e.to?(l=r.value)==null?void 0:l.route.value.href:e.href});return{isLink:i,isClickable:s,isActive:v,route:(u=r.value)==null?void 0:u.route,navigate:(m=r.value)==null?void 0:m.navigate,href:f,linkProps:z({href:f,"aria-current":p(()=>v.value?"page":void 0)})}}const Ie=w({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let L=!1;function Be(e,t){let n=!1,i,s;le&&(e!=null&&e.beforeEach)&&(ce(()=>{window.addEventListener("popstate",a),i=e.beforeEach((o,r,c)=>{L?n?t(c):c():setTimeout(()=>n?t(c):c()),L=!0}),s=e==null?void 0:e.afterEach(()=>{L=!1})}),ue(()=>{window.removeEventListener("popstate",a),i==null||i(),s==null||s()}));function a(o){var r;(r=o.state)!=null&&r.replaced||(n=!0,setTimeout(()=>n=!1))}}const k=Symbol("rippleStop"),_e=80;function N(e,t){e.style.transform=t,e.style.webkitTransform=t}function T(e){return e.constructor.name==="TouchEvent"}function B(e){return e.constructor.name==="KeyboardEvent"}const we=function(e,t){var u;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,s=0;if(!B(e)){const m=t.getBoundingClientRect(),l=T(e)?e.touches[e.touches.length-1]:e;i=l.clientX-m.left,s=l.clientY-m.top}let a=0,o=.3;(u=t._ripple)!=null&&u.circle?(o=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt((i-a)**2+(s-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const r=`${(t.clientWidth-a*2)/2}px`,c=`${(t.clientHeight-a*2)/2}px`,v=n.center?r:`${i-a}px`,f=n.center?c:`${s-a}px`;return{radius:a,scale:o,x:v,y:f,centerX:r,centerY:c}},C={show(e,t){var l;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((l=t==null?void 0:t._ripple)!=null&&l.enabled))return;const i=document.createElement("span"),s=document.createElement("span");i.appendChild(s),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:a,scale:o,x:r,y:c,centerX:v,centerY:f}=we(e,t,n),u=`${a*2}px`;s.className="v-ripple__animation",s.style.width=u,s.style.height=u,t.appendChild(i);const m=window.getComputedStyle(t);m&&m.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),N(s,`translate(${r}, ${c}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),N(s,`translate(${v}, ${f}) scale3d(1,1,1)`)})})},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),s=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=n.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function H(e){return typeof e>"u"||!!e}function y(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[k])){if(e[k]=!0,T(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||B(e),n._ripple.class&&(t.class=n._ripple.class),T(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{C.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var i;(i=n==null?void 0:n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},_e)}else C.show(e,n,t)}}function V(e){e[k]=!0}function d(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{d(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),C.hide(t)}}function q(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let _=!1;function A(e){!_&&(e.keyCode===P.enter||e.keyCode===P.space)&&(_=!0,y(e))}function D(e){_=!1,d(e)}function O(e){_&&(_=!1,d(e))}function Y(e,t,n){const{value:i,modifiers:s}=t,a=H(i);if(a||C.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=s.center,e._ripple.circle=s.circle,de(i)&&i.class&&(e._ripple.class=i.class),a&&!n){if(s.stop){e.addEventListener("touchstart",V,{passive:!0}),e.addEventListener("mousedown",V);return}e.addEventListener("touchstart",y,{passive:!0}),e.addEventListener("touchend",d,{passive:!0}),e.addEventListener("touchmove",q,{passive:!0}),e.addEventListener("touchcancel",d),e.addEventListener("mousedown",y),e.addEventListener("mouseup",d),e.addEventListener("mouseleave",d),e.addEventListener("keydown",A),e.addEventListener("keyup",D),e.addEventListener("blur",O),e.addEventListener("dragstart",d,{passive:!0})}else!a&&n&&F(e)}function F(e){e.removeEventListener("mousedown",y),e.removeEventListener("touchstart",y),e.removeEventListener("touchend",d),e.removeEventListener("touchmove",q),e.removeEventListener("touchcancel",d),e.removeEventListener("mouseup",d),e.removeEventListener("mouseleave",d),e.removeEventListener("keydown",A),e.removeEventListener("keyup",D),e.removeEventListener("dragstart",d),e.removeEventListener("blur",O)}function Ee(e,t){Y(e,t,!1)}function Ce(e){delete e._ripple,F(e)}function Le(e,t){if(t.value===t.oldValue)return;const n=H(t.oldValue);Y(e,t,n)}const He={mounted:Ee,unmounted:Ce,updated:Le};export{He as R,Se as V,fe as a,Ve as b,Pe as c,me as d,Ie as e,$e as f,Re as g,Ne as h,Be as i,ze as m,xe as u};
