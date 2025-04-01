import{L as h,a8 as U,aO as ne,r as F,aG as re,e as A,V as B,aN as ae,a4 as M,j as b,aj as C,aB as se,aP as $,aQ as oe,aR as ie,aS as le,H as I,aT as ue,K as ce,a6 as y,z as l,as as de,at as ge,h as ve,S as q,aF as L,X as fe,U as P,aa as me,ac as be,Q as D,R as he,P as Se,a0 as ye}from"./m7mtEYtz.js";const G=h({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Q(e){const r=U("useRender");r.render=e}function Te(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=ne(),t=F();if(re){const a=new ResizeObserver(s=>{s.length&&(r==="content"?t.value=s[0].contentRect:t.value=s[0].target.getBoundingClientRect())});A(()=>{a.disconnect()}),B(()=>n.el,(s,c)=>{c&&(a.unobserve(c),t.value=void 0),s&&a.observe(s)},{flush:"post"})}return{resizeRef:n,contentRect:ae(t)}}const we=h({border:[Boolean,Number,String]},"border");function We(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{borderClasses:b(()=>{const t=C(e)?e.value:e.border,a=[];if(t===!0||t==="")a.push(`${r}--border`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))a.push(`border-${s}`);return a})}}const Ve=h({elevation:{type:[Number,String],validator(e){const r=parseInt(e);return!isNaN(r)&&r>=0&&r<=24}}},"elevation");function He(e){return{elevationClasses:b(()=>{const n=C(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const _e=h({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Ce(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{roundedClasses:b(()=>{const t=C(e)?e.value:e.rounded,a=C(e)?e.value:e.tile,s=[];if(t===!0||t==="")s.push(`${r}--rounded`);else if(typeof t=="string"||t===0)for(const c of String(t).split(" "))s.push(`rounded-${c}`);else(a||t===!1)&&s.push("rounded-0");return s})}}const $e=h({tag:{type:String,default:"div"}},"tag");function K(e){return se(()=>{const r=[],n={};if(e.value.background)if($(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&oe(e.value.background)){const t=ie(e.value.background);if(t.a==null||t.a===1){const a=le(t);n.color=a,n.caretColor=a}}}else r.push(`bg-${e.value.background}`);return e.value.text&&($(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):r.push(`text-${e.value.text}`)),{colorClasses:r,colorStyles:n}})}function De(e,r){const n=b(()=>({text:C(e)?e.value:r?e[r]:null})),{colorClasses:t,colorStyles:a}=K(n);return{textColorClasses:t,textColorStyles:a}}function Re(e,r){const n=b(()=>({background:C(e)?e.value:r?e[r]:null})),{colorClasses:t,colorStyles:a}=K(n);return{backgroundColorClasses:t,backgroundColorStyles:a}}const ke=h({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Ee=I(!1)({name:"VDefaultsProvider",props:ke(),setup(e,r){let{slots:n}=r;const{defaults:t,disabled:a,reset:s,root:c,scoped:g}=ue(e);return ce(t,{reset:s,root:c,scoped:g,disabled:a}),()=>{var v;return(v=n.default)==null?void 0:v.call(n)}}}),Pe=h({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function xe(e){return{dimensionStyles:b(()=>{const n={},t=y(e.height),a=y(e.maxHeight),s=y(e.maxWidth),c=y(e.minHeight),g=y(e.minWidth),v=y(e.width);return t!=null&&(n.height=t),a!=null&&(n.maxHeight=a),s!=null&&(n.maxWidth=s),c!=null&&(n.minHeight=c),g!=null&&(n.minWidth=g),v!=null&&(n.width=v),n})}}function Be(e){return{aspectStyles:b(()=>{const r=Number(e.aspectRatio);return r?{paddingBottom:String(1/r*100)+"%"}:void 0})}}const X=h({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...G(),...Pe()},"VResponsive"),E=I()({name:"VResponsive",props:X(),setup(e,r){let{slots:n}=r;const{aspectStyles:t}=Be(e),{dimensionStyles:a}=xe(e);return Q(()=>{var s;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[a.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&l("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),Ne=h({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),x=(e,r)=>{let{slots:n}=r;const{transition:t,disabled:a,group:s,...c}=e,{component:g=s?de:ge,...v}=typeof t=="object"?t:{};return ve(g,q(typeof t=="string"?{name:a?"":t}:v,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:a,group:s}).filter(i=>{let[u,m]=i;return m!==void 0})),c),n)};function ze(e,r){if(!L)return;const n=r.modifiers||{},t=r.value,{handler:a,options:s}=typeof t=="object"?t:{handler:t,options:{}},c=new IntersectionObserver(function(){var m;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const i=(m=e._observe)==null?void 0:m[r.instance.$.uid];if(!i)return;const u=g.some(_=>_.isIntersecting);a&&(!n.quiet||i.init)&&(!n.once||u||i.init)&&a(u,g,v),u&&n.once?J(e,r):i.init=!0},s);e._observe=Object(e._observe),e._observe[r.instance.$.uid]={init:!1,observer:c},c.observe(e)}function J(e,r){var t;const n=(t=e._observe)==null?void 0:t[r.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[r.instance.$.uid])}const Ie={mounted:ze,unmounted:J},je=h({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...X(),...G(),..._e(),...Ne()},"VImg"),Ue=I()({name:"VImg",directives:{intersect:Ie},props:je(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,r){let{emit:n,slots:t}=r;const{backgroundColorClasses:a,backgroundColorStyles:s}=Re(fe(e,"color")),{roundedClasses:c}=Ce(e),g=U("VImg"),v=P(""),i=F(),u=P(e.eager?"loading":"idle"),m=P(),_=P(),f=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),R=b(()=>f.value.aspect||m.value/_.value||0);B(()=>e.src,()=>{N(u.value!=="idle")}),B(R,(o,d)=>{!o&&d&&i.value&&k(i.value)}),me(()=>N());function N(o){if(!(e.eager&&o)&&!(L&&!o&&!e.eager)){if(u.value="loading",f.value.lazySrc){const d=new Image;d.src=f.value.lazySrc,k(d,null)}f.value.src&&be(()=>{var d;n("loadstart",((d=i.value)==null?void 0:d.currentSrc)||f.value.src),setTimeout(()=>{var S;if(!g.isUnmounted)if((S=i.value)!=null&&S.complete){if(i.value.naturalWidth||O(),u.value==="error")return;R.value||k(i.value,null),u.value==="loading"&&j()}else R.value||k(i.value),T()})})}}function j(){var o;g.isUnmounted||(T(),k(i.value),u.value="loaded",n("load",((o=i.value)==null?void 0:o.currentSrc)||f.value.src))}function O(){var o;g.isUnmounted||(u.value="error",n("error",((o=i.value)==null?void 0:o.currentSrc)||f.value.src))}function T(){const o=i.value;o&&(v.value=o.currentSrc||o.src)}let z=-1;A(()=>{clearTimeout(z)});function k(o){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{if(clearTimeout(z),g.isUnmounted)return;const{naturalHeight:V,naturalWidth:H}=o;V||H?(m.value=H,_.value=V):!o.complete&&u.value==="loading"&&d!=null?z=window.setTimeout(S,d):(o.currentSrc.endsWith(".svg")||o.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,_.value=1)};S()}const w=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Y=()=>{var S;if(!f.value.src||u.value==="idle")return null;const o=l("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:f.value.src,srcset:f.value.srcset,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:i,onLoad:j,onError:O},null),d=(S=t.sources)==null?void 0:S.call(t);return l(x,{transition:e.transition,appear:!0},{default:()=>[D(d?l("picture",{class:"v-img__picture"},[d,o]):o,[[ye,u.value==="loaded"]])]})},Z=()=>l(x,{transition:e.transition},{default:()=>[f.value.lazySrc&&u.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:f.value.lazySrc,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),p=()=>t.placeholder?l(x,{transition:e.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,ee=()=>t.error?l(x,{transition:e.transition,appear:!0},{default:()=>[u.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,te=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,W=P(!1);{const o=B(R,d=>{d&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{W.value=!0})}),o())})}return Q(()=>{const o=E.filterProps(e);return D(l(E,q({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!W.value},a.value,c.value,e.class],style:[{width:y(e.width==="auto"?m.value:e.width)},s.value,e.style]},o,{aspectRatio:R.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(Se,null,[l(Y,null,null),l(Z,null,null),l(te,null,null),l(p,null,null),l(ee,null,null)]),default:t.default}),[[he("intersect"),{handler:N,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:i,state:u,naturalWidth:m,naturalHeight:_}}});export{Ie as I,x as M,Ue as V,$e as a,We as b,Ce as c,Ee as d,_e as e,we as f,xe as g,He as h,Ve as i,Pe as j,Ne as k,Re as l,G as m,De as n,K as o,Te as p,Q as u};
