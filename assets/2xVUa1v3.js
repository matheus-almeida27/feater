import{n as Je,a as F,f as oe,g as _e,m as M,h as Se,c as we,d as xe,e as re,u as N,i as j,b as Qe,j as Q,k as Ze,l as et,V as Z}from"./D9m5MasU.js";import{b4 as H,Q as _,aV as D,j as c,K as ne,z as f,L as tt,P as z,a3 as G,a5 as W,a6 as nt,a7 as I,aq as Y,ak as at,al as Ie,F as st,e as ue,a1 as ce,aG as ae,aa as Be,o as it,b5 as lt,a4 as Ee,af as ot,b6 as rt,a8 as Le,aB as ut,au as k,r as de,b3 as ct,b7 as dt,b8 as vt,b9 as ft,W as se,Z as mt,ba as gt,av as ht,X as Ve,aC as me,a0 as Pe,aJ as bt,bb as yt,bc as ge,ai as Te,am as Ct,bd as pt,be as he,ab as kt,y as _t}from"./Bcscdw8p.js";const Re=["top","bottom"],St=["start","end","left","right"];function wt(e,t){let[a,n]=e.split(" ");return n||(n=H(Re,a)?"start":H(St,a)?"top":"center"),{side:be(a,t),align:be(n,t)}}function be(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function on(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function rn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function un(e){return{side:e.align,align:e.side}}function cn(e){return H(Re,e.side)?"y":"x"}const xt=[null,"default","comfortable","compact"],$e=_({density:{type:String,default:"default",validator:e=>xt.includes(e)}},"density");function Ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const It=["elevated","flat","tonal","outlined","text","plain"];function Bt(e,t){return f(tt,null,[e&&f("span",{key:"overlay",class:`${t}__overlay`},null),f("span",{key:"underlay",class:`${t}__underlay`},null)])}const ze=_({color:String,variant:{type:String,default:"elevated",validator:e=>It.includes(e)}},"variant");function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();const a=c(()=>{const{variant:s}=ne(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:i}=Je(c(()=>{const{variant:s,color:r}=ne(e);return{[["elevated","flat"].includes(s)?"background":"text"]:r}}));return{colorClasses:n,colorStyles:i,variantClasses:a}}const Ae=_({baseColor:String,divided:Boolean,...Se(),...M(),...$e(),..._e(),...oe(),...F(),...G(),...ze()},"VBtnGroup"),ye=z()({name:"VBtnGroup",props:Ae(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=W(e),{densityClasses:i}=Ne(e),{borderClasses:s}=we(e),{elevationClasses:r}=xe(e),{roundedClasses:d}=re(e);nt({VBtn:{height:"auto",baseColor:I(e,"baseColor"),color:I(e,"color"),density:I(e,"density"),flat:!0,variant:I(e,"variant")}}),N(()=>f(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,i.value,r.value,d.value,e.class],style:e.style},a))}}),Lt=_({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Vt=_({value:null,disabled:Boolean,selectedClass:String},"group-item");function Pt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=Y("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=at();Ie(Symbol.for(`${t.description}:id`),i);const s=st(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const r=I(e,"value"),d=c(()=>!!(s.disabled.value||e.disabled));s.register({id:i,value:r,disabled:d},n),ue(()=>{s.unregister(i)});const v=c(()=>s.isSelected(i)),b=c(()=>s.items.value[0].id===i),y=c(()=>s.items.value[s.items.value.length-1].id===i),h=c(()=>v.value&&[s.selectedClass.value,e.selectedClass]);return ce(v,l=>{n.emit("group:selected",{value:l})},{flush:"sync"}),{id:i,isSelected:v,isFirst:b,isLast:y,toggle:()=>s.select(i,!v.value),select:l=>s.select(i,l),selectedClass:h,value:r,disabled:d,group:s}}function Tt(e,t){let a=!1;const n=ae([]),i=Be(e,"modelValue",[],l=>l==null?[]:Oe(n,ot(l)),l=>{const u=$t(n,l);return e.multiple?u:u[0]}),s=Y("useGroup");function r(l,u){const m=l,o=Symbol.for(`${t.description}:id`),C=rt(o,s==null?void 0:s.vnode).indexOf(u);ne(m.value)==null&&(m.value=C,m.useIndexAsValue=!0),C>-1?n.splice(C,0,m):n.push(m)}function d(l){if(a)return;v();const u=n.findIndex(m=>m.id===l);n.splice(u,1)}function v(){const l=n.find(u=>!u.disabled);l&&e.mandatory==="force"&&!i.value.length&&(i.value=[l.id])}it(()=>{v()}),ue(()=>{a=!0}),lt(()=>{for(let l=0;l<n.length;l++)n[l].useIndexAsValue&&(n[l].value=l)});function b(l,u){const m=n.find(o=>o.id===l);if(!(u&&(m!=null&&m.disabled)))if(e.multiple){const o=i.value.slice(),g=o.findIndex(B=>B===l),C=~g;if(u=u??!C,C&&e.mandatory&&o.length<=1||!C&&e.max!=null&&o.length+1>e.max)return;g<0&&u?o.push(l):g>=0&&!u&&o.splice(g,1),i.value=o}else{const o=i.value.includes(l);if(e.mandatory&&o)return;i.value=u??!o?[l]:[]}}function y(l){if(e.multiple,i.value.length){const u=i.value[0],m=n.findIndex(C=>C.id===u);let o=(m+l)%n.length,g=n[o];for(;g.disabled&&o!==m;)o=(o+l)%n.length,g=n[o];if(g.disabled)return;i.value=[n[o].id]}else{const u=n.find(m=>!m.disabled);u&&(i.value=[u.id])}}const h={register:r,unregister:d,selected:i,select:b,disabled:I(e,"disabled"),prev:()=>y(n.length-1),next:()=>y(1),isSelected:l=>i.value.includes(l),selectedClass:c(()=>e.selectedClass),items:c(()=>n),getItemIndex:l=>Rt(n,l)};return Ie(t,h),h}function Rt(e,t){const a=Oe(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Oe(e,t){const a=[];return t.forEach(n=>{const i=e.find(r=>Ee(n,r.value)),s=e[n];(i==null?void 0:i.value)!=null?a.push(i.id):s!=null&&a.push(s.id)}),a}function $t(e,t){const a=[];return t.forEach(n=>{const i=e.findIndex(s=>s.id===n);if(~i){const s=e[i];a.push(s.value!=null?s.value:i)}}),a}const Fe=Symbol.for("vuetify:v-btn-toggle"),Nt=_({...Ae(),...Lt()},"VBtnToggle");z()({name:"VBtnToggle",props:Nt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:i,prev:s,select:r,selected:d}=Tt(e,Fe);return N(()=>{const v=ye.filterProps(e);return f(ye,Le({class:["v-btn-toggle",e.class]},v,{style:e.style}),{default:()=>{var b;return[(b=a.default)==null?void 0:b.call(a,{isSelected:n,next:i,prev:s,select:r,selected:d})]}})}),{next:i,prev:s,select:r}}});const zt=["x-small","small","default","large","x-large"],ve=_({size:{type:[String,Number],default:"default"}},"size");function fe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return ut(()=>{let a,n;return H(zt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:k(e.size),height:k(e.size)}),{sizeClasses:a,sizeStyles:n}})}const At=_({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:se,opacity:[String,Number],...M(),...ve(),...F({tag:"i"}),...G()},"VIcon"),ee=z()({name:"VIcon",props:At(),setup(e,t){let{attrs:a,slots:n}=t;const i=de(),{themeClasses:s}=ct(),{iconData:r}=dt(c(()=>i.value||e.icon)),{sizeClasses:d}=fe(e),{textColorClasses:v,textColorStyles:b}=j(I(e,"color"));return N(()=>{var l,u;const y=(l=n.default)==null?void 0:l.call(n);y&&(i.value=(u=vt(y).filter(m=>m.type===ft&&m.children&&typeof m.children=="string")[0])==null?void 0:u.children);const h=!!(a.onClick||a.onClickOnce);return f(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",s.value,d.value,v.value,{"v-icon--clickable":h,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[{"--v-icon-opacity":e.opacity},d.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},b.value,e.style],role:h?"button":void 0,"aria-hidden":!h,tabindex:h?e.disabled?-1:0:void 0},{default:()=>[y]})}),{}}});function Me(e,t){const a=de(),n=mt(!1);if(gt){const i=new IntersectionObserver(s=>{n.value=!!s.find(r=>r.isIntersecting)},t);ue(()=>{i.disconnect()}),ce(a,(s,r)=>{r&&(i.unobserve(r),n.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Ot=_({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...M(),...ve(),...F({tag:"div"}),...G()},"VProgressCircular"),Ft=z()({name:"VProgressCircular",props:Ot(),setup(e,t){let{slots:a}=t;const n=20,i=2*Math.PI*n,s=de(),{themeClasses:r}=W(e),{sizeClasses:d,sizeStyles:v}=fe(e),{textColorClasses:b,textColorStyles:y}=j(I(e,"color")),{textColorClasses:h,textColorStyles:l}=j(I(e,"bgColor")),{intersectionRef:u,isIntersecting:m}=Me(),{resizeRef:o,contentRect:g}=Qe(),C=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),B=c(()=>Number(e.width)),E=c(()=>v.value?Number(e.size):g.value?g.value.width:Math.max(B.value,32)),x=c(()=>n/(1-B.value/E.value)*2),V=c(()=>B.value/E.value*x.value),P=c(()=>k((100-C.value)/100*i));return ht(()=>{u.value=s.value,o.value=s.value}),N(()=>f(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":m.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,d.value,b.value,e.class],style:[v.value,y.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:C.value},{default:()=>[f("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${x.value} ${x.value}`},[f("circle",{class:["v-progress-circular__underlay",h.value],style:l.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),f("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":P.value},null)]),a.default&&f("div",{class:"v-progress-circular__content"},[a.default({value:C.value})])]})),{}}}),Ce={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},De=_({location:String},"location");function Ge(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Ve();return{locationStyles:c(()=>{if(!e.location)return{};const{side:s,align:r}=wt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function d(b){return a?a(b):0}const v={};return s!=="center"&&(t?v[Ce[s]]=`calc(100% - ${d(s)}px)`:v[s]=0),r!=="center"?t?v[Ce[r]]=`calc(100% - ${d(r)}px)`:v[r]=0:(s==="center"?v.top=v.left="50%":v[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",v.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),v})}}const Mt=_({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...M(),...De({location:"top"}),...oe(),...F(),...G()},"VProgressLinear"),Dt=z()({name:"VProgressLinear",props:Mt(),emits:{"update:modelValue":e=>!0},setup(e,t){var p;let{slots:a}=t;const n=Be(e,"modelValue"),{isRtl:i,rtlClasses:s}=Ve(),{themeClasses:r}=W(e),{locationStyles:d}=Ge(e),{textColorClasses:v,textColorStyles:b}=j(e,"color"),{backgroundColorClasses:y,backgroundColorStyles:h}=Q(c(()=>e.bgColor||e.color)),{backgroundColorClasses:l,backgroundColorStyles:u}=Q(c(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:m,backgroundColorStyles:o}=Q(e,"color"),{roundedClasses:g}=re(e),{intersectionRef:C,isIntersecting:B}=Me(),E=c(()=>parseFloat(e.max)),x=c(()=>parseFloat(e.height)),V=c(()=>me(parseFloat(e.bufferValue)/E.value*100,0,100)),P=c(()=>me(parseFloat(n.value)/E.value*100,0,100)),L=c(()=>i.value!==e.reverse),K=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),T=Pe&&((p=window.matchMedia)==null?void 0:p.call(window,"(forced-colors: active)").matches);function J(S){if(!C.value)return;const{left:R,right:q,width:$}=C.value.getBoundingClientRect(),X=L.value?$-S.clientX+(q-$):S.clientX-R;n.value=Math.round(X/$*E.value)}return N(()=>f(e.tag,{ref:C,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&B.value,"v-progress-linear--reverse":L.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},g.value,r.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?k(x.value):0,"--v-progress-linear-height":k(x.value),...e.absolute?d.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:Math.min(parseFloat(n.value),E.value),onClick:e.clickable&&J},{default:()=>[e.stream&&f("div",{key:"stream",class:["v-progress-linear__stream",v.value],style:{...b.value,[L.value?"left":"right"]:k(-x.value),borderTop:`${k(x.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${k(x.value/4)})`,width:k(100-V.value,"%"),"--v-progress-linear-stream-to":k(x.value*(L.value?1:-1))}},null),f("div",{class:["v-progress-linear__background",T?void 0:y.value],style:[h.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),f("div",{class:["v-progress-linear__buffer",T?void 0:l.value],style:[u.value,{opacity:parseFloat(e.bufferOpacity),width:k(V.value,"%")}]},null),f(bt,{name:K.value},{default:()=>[e.indeterminate?f("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(S=>f("div",{key:S,class:["v-progress-linear__indeterminate",S,T?void 0:m.value],style:o.value},null))]):f("div",{class:["v-progress-linear__determinate",T?void 0:m.value],style:[o.value,{width:k(P.value,"%")}]},null)]}),a.default&&f("div",{class:"v-progress-linear__content"},[a.default({value:P.value,buffer:V.value})])]})),{}}}),Gt=_({loading:[Boolean,String]},"loader");function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}function dn(e,t){var n;let{slots:a}=t;return f("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||f(Dt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Xt=["static","relative","fixed","absolute","sticky"],jt=_({position:{type:String,validator:e=>Xt.includes(e)}},"position");function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function Ut(){const e=Y("useRoute");return c(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function vn(){var e,t;return(t=(e=Y("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Wt(e,t){var h,l;const a=yt("RouterLink"),n=c(()=>!!(e.href||e.to)),i=c(()=>(n==null?void 0:n.value)||ge(t,"click")||ge(e,"click"));if(typeof a=="string"||!("useLink"in a)){const u=I(e,"href");return{isLink:n,isClickable:i,href:u,linkProps:ae({href:u})}}const s=c(()=>({...e,to:I(()=>e.to||"")})),r=a.useLink(s.value),d=c(()=>e.to?r:void 0),v=Ut(),b=c(()=>{var u,m,o;return d.value?e.exact?v.value?((o=d.value.isExactActive)==null?void 0:o.value)&&Ee(d.value.route.value.query,v.value.query):((m=d.value.isExactActive)==null?void 0:m.value)??!1:((u=d.value.isActive)==null?void 0:u.value)??!1:!1}),y=c(()=>{var u;return e.to?(u=d.value)==null?void 0:u.route.value.href:e.href});return{isLink:n,isClickable:i,isActive:b,route:(h=d.value)==null?void 0:h.route,navigate:(l=d.value)==null?void 0:l.navigate,href:y,linkProps:ae({href:y,"aria-current":c(()=>b.value?"page":void 0)})}}const Yt=_({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let te=!1;function fn(e,t){let a=!1,n,i;Pe&&(e!=null&&e.beforeEach)&&(Te(()=>{window.addEventListener("popstate",s),n=e.beforeEach((r,d,v)=>{te?a?t(v):v():setTimeout(()=>a?t(v):v()),te=!0}),i=e==null?void 0:e.afterEach(()=>{te=!1})}),Ct(()=>{window.removeEventListener("popstate",s),n==null||n(),i==null||i()}));function s(r){var d;(d=r.state)!=null&&d.replaced||(a=!0,setTimeout(()=>a=!1))}}function Kt(e,t){ce(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Te(()=>{t(!0)})},{immediate:!0})}const ie=Symbol("rippleStop"),Jt=80;function pe(e,t){e.style.transform=t,e.style.webkitTransform=t}function le(e){return e.constructor.name==="TouchEvent"}function qe(e){return e.constructor.name==="KeyboardEvent"}const Qt=function(e,t){var h;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!qe(e)){const l=t.getBoundingClientRect(),u=le(e)?e.touches[e.touches.length-1]:e;n=u.clientX-l.left,i=u.clientY-l.top}let s=0,r=.3;(h=t._ripple)!=null&&h.circle?(r=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const d=`${(t.clientWidth-s*2)/2}px`,v=`${(t.clientHeight-s*2)/2}px`,b=a.center?d:`${n-s}px`,y=a.center?v:`${i-s}px`;return{radius:s,scale:r,x:b,y,centerX:d,centerY:v}},U={show(e,t){var u;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=t==null?void 0:t._ripple)!=null&&u.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:r,x:d,y:v,centerX:b,centerY:y}=Qt(e,t,a),h=`${s*2}px`;i.className="v-ripple__animation",i.style.width=h,i.style.height=h,t.appendChild(n);const l=window.getComputedStyle(t);l&&l.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),pe(i,`translate(${d}, ${v}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),pe(i,`translate(${b}, ${y}) scale3d(1,1,1)`)})})},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var d;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((d=a.parentNode)==null?void 0:d.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function Xe(e){return typeof e>"u"||!!e}function A(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ie])){if(e[ie]=!0,le(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||qe(e),a._ripple.class&&(t.class=a._ripple.class),le(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{U.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},Jt)}else U.show(e,a,t)}}function ke(e){e[ie]=!0}function w(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),U.hide(t)}}function je(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let O=!1;function He(e){!O&&(e.keyCode===he.enter||e.keyCode===he.space)&&(O=!0,A(e))}function Ue(e){O=!1,w(e)}function We(e){O&&(O=!1,w(e))}function Ye(e,t,a){const{value:n,modifiers:i}=t,s=Xe(n);if(s||U.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,pt(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(i.stop){e.addEventListener("touchstart",ke,{passive:!0}),e.addEventListener("mousedown",ke);return}e.addEventListener("touchstart",A,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",je,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",A),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",He),e.addEventListener("keyup",Ue),e.addEventListener("blur",We),e.addEventListener("dragstart",w,{passive:!0})}else!s&&a&&Ke(e)}function Ke(e){e.removeEventListener("mousedown",A),e.removeEventListener("touchstart",A),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",je),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",He),e.removeEventListener("keyup",Ue),e.removeEventListener("dragstart",w),e.removeEventListener("blur",We)}function Zt(e,t){Ye(e,t,!1)}function en(e){delete e._ripple,Ke(e)}function tn(e,t){if(t.value===t.oldValue)return;const a=Xe(t.oldValue);Ye(e,t,a)}const nn={mounted:Zt,unmounted:en,updated:tn},an=_({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:Fe},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:se,appendIcon:se,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:{type:[String,Number,Boolean],default:void 0},...Se(),...M(),...$e(),...et(),..._e(),...Vt(),...Gt(),...De(),...jt(),...oe(),...Yt(),...ve(),...F({tag:"button"}),...G(),...ze({variant:"elevated"})},"VBtn"),mn=z()({name:"VBtn",props:an(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:i}=W(e),{borderClasses:s}=we(e),{densityClasses:r}=Ne(e),{dimensionStyles:d}=Ze(e),{elevationClasses:v}=xe(e),{loaderClasses:b}=qt(e),{locationStyles:y}=Ge(e),{positionClasses:h}=Ht(e),{roundedClasses:l}=re(e),{sizeClasses:u,sizeStyles:m}=fe(e),o=Pt(e,e.symbol,!1),g=Wt(e,a),C=c(()=>{var p;return e.active!==void 0?e.active:g.isLink.value?(p=g.isActive)==null?void 0:p.value:o==null?void 0:o.isSelected.value}),B=c(()=>C.value?e.activeColor??e.color:e.color),E=c(()=>{var S,R;return{color:(o==null?void 0:o.isSelected.value)&&(!g.isLink.value||((S=g.isActive)==null?void 0:S.value))||!o||((R=g.isActive)==null?void 0:R.value)?B.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:x,colorStyles:V,variantClasses:P}=Et(E),L=c(()=>(o==null?void 0:o.disabled.value)||e.disabled),K=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),T=c(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function J(p){var S;L.value||g.isLink.value&&(p.metaKey||p.ctrlKey||p.shiftKey||p.button!==0||a.target==="_blank")||((S=g.navigate)==null||S.call(g,p),o==null||o.toggle())}return Kt(g,o==null?void 0:o.select),N(()=>{const p=g.isLink.value?"a":e.tag,S=!!(e.prependIcon||n.prepend),R=!!(e.appendIcon||n.append),q=!!(e.icon&&e.icon!==!0);return kt(f(p,Le({type:p==="a"?void 0:"button",class:["v-btn",o==null?void 0:o.selectedClass.value,{"v-btn--active":C.value,"v-btn--block":e.block,"v-btn--disabled":L.value,"v-btn--elevated":K.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},i.value,s.value,x.value,r.value,v.value,b.value,h.value,l.value,u.value,P.value,e.class],style:[V.value,d.value,y.value,m.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:L.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:J,value:T.value},g.linkProps),{default:()=>{var $;return[Bt(!0,"v-btn"),!e.icon&&S&&f("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?f(Z,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):f(ee,{key:"prepend-icon",icon:e.prependIcon},null)]),f("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&q?f(ee,{key:"content-icon",icon:e.icon},null):f(Z,{key:"content-defaults",disabled:!q,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var X;return[((X=n.default)==null?void 0:X.call(n))??_t(e.text)]}})]),!e.icon&&R&&f("span",{key:"append",class:"v-btn__append"},[n.append?f(Z,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):f(ee,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&f("span",{key:"loader",class:"v-btn__loader"},[(($=n.loader)==null?void 0:$.call(n))??f(Ft,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[nn,!L.value&&e.ripple,"",{center:!!e.icon}]])}),{group:o}}});export{Gt as A,Fe as B,dn as L,nn as R,mn as V,ee as a,ze as b,Ne as c,fe as d,Pt as e,Wt as f,Et as g,Bt as h,ve as i,Yt as j,Vt as k,$e as l,Lt as m,on as n,rn as o,wt as p,un as q,cn as r,vn as s,fn as t,Tt as u,qt as v,Ge as w,Ht as x,jt as y,De as z};
