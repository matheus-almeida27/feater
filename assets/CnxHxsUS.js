import{Q as B,R as _,bk as re,aa as ae,j as b,Z as C,aH as oe,bl as D,bm as ie,bn as le,bo as ue,z as d,aV as H,J as R,T as z,h as $,W as U,bb as q,ab as ce,ay as de,a5 as P,r as fe,V as I,aW as ve,Y as ge,e as me,ad as F,ae as ye,aA as be,O as Se,af as he,bc as _e}from"./D4JXF2sJ.js";import{b as Ce,u as M,c as xe,m as Y}from"./CMGEaCVa.js";const ke=_({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Ne=B(!1)({name:"VDefaultsProvider",props:ke(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:o,reset:i,root:s,scoped:r}=re(e);return ae(t,{reset:i,root:s,scoped:r,disabled:o}),()=>{var f;return(f=n.default)==null?void 0:f.call(n)}}});function G(e){return oe(()=>{const a=[],n={};if(e.value.background)if(D(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&ie(e.value.background)){const t=le(e.value.background);if(t.a==null||t.a===1){const o=ue(t);n.color=o,n.caretColor=o}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(D(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function je(e,a){const n=b(()=>({text:C(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:o}=G(n);return{textColorClasses:t,textColorStyles:o}}function Pe(e,a){const n=b(()=>({background:C(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:o}=G(n);return{backgroundColorClasses:t,backgroundColorStyles:o}}function Be(e){return{aspectStyles:b(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const J=_({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...Y(),...xe()},"VResponsive"),W=B()({name:"VResponsive",props:J(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=Be(e),{dimensionStyles:o}=Ce(e);return M(()=>{var i;return d("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[d("div",{class:"v-responsive__sizer",style:t.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&d("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),Te=_({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function we(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{roundedClasses:b(()=>{const t=C(e)?e.value:e.rounded,o=C(e)?e.value:e.tile,i=[];if(t===!0||t==="")i.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`rounded-${s}`);else(o||t===!1)&&i.push("rounded-0");return i})}}const Ve=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),T=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:o,group:i,...s}=e,{component:r=i?R:z,...f}=typeof t=="object"?t:{};return $(r,U(typeof t=="string"?{name:o?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:o,group:i}).filter(u=>{let[c,g]=u;return g!==void 0})),s),n)};function Ie(e,a){if(!q)return;const n=a.modifiers||{},t=a.value,{handler:o,options:i}=typeof t=="object"?t:{handler:t,options:{}},s=new IntersectionObserver(function(){var g;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const u=(g=e._observe)==null?void 0:g[a.instance.$.uid];if(!u)return;const c=r.some(S=>S.isIntersecting);o&&(!n.quiet||u.init)&&(!n.once||c||u.init)&&o(c,r,f),c&&n.once?Q(e,a):u.init=!0},i);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:s},s.observe(e)}function Q(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const Re={mounted:Ie,unmounted:Q},ze=_({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...J(),...Y(),...Te(),...Ve()},"VImg"),Oe=B()({name:"VImg",directives:{intersect:Re},props:ze(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const{backgroundColorClasses:o,backgroundColorStyles:i}=Pe(ce(e,"color")),{roundedClasses:s}=we(e),r=de("VImg"),f=P(""),u=fe(),c=P(e.eager?"loading":"idle"),g=P(),S=P(),y=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),x=b(()=>y.value.aspect||g.value/S.value||0);I(()=>e.src,()=>{w(c.value!=="idle")}),I(x,(l,v)=>{!l&&v&&u.value&&k(u.value)}),ve(()=>w());function w(l){if(!(e.eager&&l)&&!(q&&!l&&!e.eager)){if(c.value="loading",y.value.lazySrc){const v=new Image;v.src=y.value.lazySrc,k(v,null)}y.value.src&&ge(()=>{var v;n("loadstart",((v=u.value)==null?void 0:v.currentSrc)||y.value.src),setTimeout(()=>{var h;if(!r.isUnmounted)if((h=u.value)!=null&&h.complete){if(u.value.naturalWidth||E(),c.value==="error")return;x.value||k(u.value,null),c.value==="loading"&&p()}else x.value||k(u.value),N()})})}}function p(){var l;r.isUnmounted||(N(),k(u.value),c.value="loaded",n("load",((l=u.value)==null?void 0:l.currentSrc)||y.value.src))}function E(){var l;r.isUnmounted||(c.value="error",n("error",((l=u.value)==null?void 0:l.currentSrc)||y.value.src))}function N(){const l=u.value;l&&(f.value=l.currentSrc||l.src)}let V=-1;me(()=>{clearTimeout(V)});function k(l){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const h=()=>{if(clearTimeout(V),r.isUnmounted)return;const{naturalHeight:A,naturalWidth:L}=l;A||L?(g.value=L,S.value=A):!l.complete&&c.value==="loading"&&v!=null?V=window.setTimeout(h,v):(l.currentSrc.endsWith(".svg")||l.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,S.value=1)};h()}const j=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),K=()=>{var h;if(!y.value.src||c.value==="idle")return null;const l=d("img",{class:["v-img__img",j.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:y.value.src,srcset:y.value.srcset,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:u,onLoad:p,onError:E},null),v=(h=t.sources)==null?void 0:h.call(t);return d(T,{transition:e.transition,appear:!0},{default:()=>[F(v?d("picture",{class:"v-img__picture"},[v,l]):l,[[he,c.value==="loaded"]])]})},ee=()=>d(T,{transition:e.transition},{default:()=>[y.value.lazySrc&&c.value!=="loaded"&&d("img",{class:["v-img__img","v-img__img--preload",j.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:y.value.lazySrc,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),te=()=>t.placeholder?d(T,{transition:e.transition,appear:!0},{default:()=>[(c.value==="loading"||c.value==="error"&&!t.error)&&d("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,ne=()=>t.error?d(T,{transition:e.transition,appear:!0},{default:()=>[c.value==="error"&&d("div",{class:"v-img__error"},[t.error()])]}):null,se=()=>e.gradient?d("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,O=P(!1);{const l=I(x,v=>{v&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),l())})}return M(()=>{const l=W.filterProps(e);return F(d(W,U({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!O.value},o.value,s.value,e.class],style:[{width:be(e.width==="auto"?g.value:e.width)},i.value,e.style]},l,{aspectRatio:x.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>d(Se,null,[d(K,null,null),d(ee,null,null),d(se,null,null),d(te,null,null),d(ne,null,null)]),default:t.default}),[[ye("intersect"),{handler:w,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:u,state:c,naturalWidth:g,naturalHeight:S}}}),Ae=_({border:[Boolean,Number,String]},"border");function Le(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{borderClasses:b(()=>{const t=C(e)?e.value:e.border,o=[];if(t===!0||t==="")o.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))o.push(`border-${i}`);return o})}}const De=_({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function Fe(e){return{elevationClasses:b(()=>{const n=C(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const $e=_({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function m(e,a,n){return B()({name:e,props:$e({mode:n,origin:a}),setup(t,o){let{slots:i}=o;const s={onBeforeEnter(r){t.origin&&(r.style.transformOrigin=t.origin)},onLeave(r){if(t.leaveAbsolute){const{offsetTop:f,offsetLeft:u,offsetWidth:c,offsetHeight:g}=r;r._transitionInitialStyles={position:r.style.position,top:r.style.top,left:r.style.left,width:r.style.width,height:r.style.height},r.style.position="absolute",r.style.top=`${f}px`,r.style.left=`${u}px`,r.style.width=`${c}px`,r.style.height=`${g}px`}t.hideOnLeave&&r.style.setProperty("display","none","important")},onAfterLeave(r){if(t.leaveAbsolute&&(r!=null&&r._transitionInitialStyles)){const{position:f,top:u,left:c,width:g,height:S}=r._transitionInitialStyles;delete r._transitionInitialStyles,r.style.position=f||"",r.style.top=u||"",r.style.left=c||"",r.style.width=g||"",r.style.height=S||""}}};return()=>{const r=t.group?R:z;return $(r,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:s},i.default)}}})}function X(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return B()({name:e,props:{mode:{type:String,default:n},disabled:Boolean,group:Boolean},setup(t,o){let{slots:i}=o;const s=t.group?R:z;return()=>$(s,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},i.default)}})}function Z(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=_e(`offset-${n}`);return{onBeforeEnter(s){s._parent=s.parentNode,s._initialStyle={transition:s.style.transition,overflow:s.style.overflow,[n]:s.style[n]}},onEnter(s){const r=s._initialStyle;if(!r)return;s.style.setProperty("transition","none","important"),s.style.overflow="hidden";const f=`${s[t]}px`;s.style[n]="0",s.offsetHeight,s.style.transition=r.transition,e&&s._parent&&s._parent.classList.add(e),requestAnimationFrame(()=>{s.style[n]=f})},onAfterEnter:i,onEnterCancelled:i,onLeave(s){s._initialStyle={transition:"",overflow:s.style.overflow,[n]:s.style[n]},s.style.overflow="hidden",s.style[n]=`${s[t]}px`,s.offsetHeight,requestAnimationFrame(()=>s.style[n]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(s){e&&s._parent&&s._parent.classList.remove(e),i(s)}function i(s){if(!s._initialStyle)return;const r=s._initialStyle[n];s.style.overflow=s._initialStyle.overflow,r!=null&&(s.style[n]=r),delete s._initialStyle}}m("fab-transition","center center","out-in");m("dialog-bottom-transition");m("dialog-top-transition");const We=m("fade-transition"),He=m("scale-transition");m("scroll-x-transition");m("scroll-x-reverse-transition");m("scroll-y-transition");m("scroll-y-reverse-transition");m("slide-x-transition");m("slide-x-reverse-transition");const Ue=m("slide-y-transition"),qe=m("slide-y-reverse-transition"),Me=X("expand-transition",Z()),Ye=X("expand-x-transition",Z("",!0));export{Re as I,T as M,Oe as V,Me as a,Ne as b,He as c,qe as d,Ue as e,We as f,Fe as g,we as h,Ye as i,De as j,Ae as k,je as l,Te as m,Pe as n,Ve as o,G as p,Le as u};
