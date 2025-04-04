import{k as p,u as G,a as d,l as _,m as g}from"./D9m5MasU.js";import{P as m,Q as h,X as z,z as F,j as w,h as x,aX as f,aS as y}from"./Bcscdw8p.js";class u{constructor(n){let{x:a,y:s,width:e,height:i}=n;this.x=a,this.y=s,this.width=e,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function tt(t,n){return{x:{before:Math.max(0,n.left-t.left),after:Math.max(0,t.right-n.right)},y:{before:Math.max(0,n.top-t.top),after:Math.max(0,t.bottom-n.bottom)}}}function et(t){return Array.isArray(t)?new u({x:t[0],y:t[1],width:0,height:0}):t.getBoundingClientRect()}function nt(t){const n=t.getBoundingClientRect(),a=getComputedStyle(t),s=a.transform;if(s){let e,i,r,o,l;if(s.startsWith("matrix3d("))e=s.slice(9,-1).split(/, /),i=Number(e[0]),r=Number(e[5]),o=Number(e[12]),l=Number(e[13]);else if(s.startsWith("matrix("))e=s.slice(7,-1).split(/, /),i=Number(e[0]),r=Number(e[3]),o=Number(e[4]),l=Number(e[5]);else return new u(n);const c=a.transformOrigin,O=n.x-o-(1-i)*parseFloat(c),R=n.y-l-(1-r)*parseFloat(c.slice(c.indexOf(" ")+1)),M=i?n.width/i:t.offsetWidth+1,T=r?n.height/r:t.offsetHeight+1;return new u({x:O,y:R,width:M,height:T})}else return new u(n)}function st(t,n,a){if(typeof t.animate>"u")return{finished:Promise.resolve()};let s;try{s=t.animate(n,a)}catch{return{finished:Promise.resolve()}}return typeof s.finished>"u"&&(s.finished=new Promise(e=>{s.onfinish=()=>{e(s)}})),s}const at="cubic-bezier(0.4, 0, 0.2, 1)",it="cubic-bezier(0.0, 0, 0.2, 1)",rt="cubic-bezier(0.4, 0, 1, 1)",I=h({fluid:{type:Boolean,default:!1},...g(),..._(),...d()},"VContainer"),ot=m()({name:"VContainer",props:I(),setup(t,n){let{slots:a}=n;const{rtlClasses:s}=z(),{dimensionStyles:e}=p(t);return G(()=>F(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},s.value,t.class],style:[e.value,t.style]},a)),{}}}),v=f.reduce((t,n)=>(t[n]={type:[Boolean,String,Number],default:!1},t),{}),V=f.reduce((t,n)=>{const a="offset"+y(n);return t[a]={type:[String,Number],default:null},t},{}),k=f.reduce((t,n)=>{const a="order"+y(n);return t[a]={type:[String,Number],default:null},t},{}),N={col:Object.keys(v),offset:Object.keys(V),order:Object.keys(k)};function U(t,n,a){let s=t;if(!(a==null||a===!1)){if(n){const e=n.replace(t,"");s+=`-${e}`}return t==="col"&&(s="v-"+s),t==="col"&&(a===""||a===!0)||(s+=`-${a}`),s.toLowerCase()}}const W=["auto","start","end","center","baseline","stretch"],K=h({cols:{type:[Boolean,String,Number],default:!1},...v,offset:{type:[String,Number],default:null},...V,order:{type:[String,Number],default:null},...k,alignSelf:{type:String,default:null,validator:t=>W.includes(t)},...g(),...d()},"VCol"),lt=m()({name:"VCol",props:K(),setup(t,n){let{slots:a}=n;const s=w(()=>{const e=[];let i;for(i in N)N[i].forEach(o=>{const l=t[o],c=U(i,o,l);c&&e.push(c)});const r=e.some(o=>o.startsWith("v-col-"));return e.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),e});return()=>{var e;return x(t.tag,{class:[s.value,t.class],style:t.style},(e=a.default)==null?void 0:e.call(a))}}}),b=["start","end","center"],P=["space-between","space-around","space-evenly"];function C(t,n){return f.reduce((a,s)=>{const e=t+y(s);return a[e]=n(),a},{})}const D=[...b,"baseline","stretch"],j=t=>D.includes(t),L=C("align",()=>({type:String,default:null,validator:j})),X=[...b,...P],E=t=>X.includes(t),$=C("justify",()=>({type:String,default:null,validator:E})),H=[...b,...P,"stretch"],A=t=>H.includes(t),B=C("alignContent",()=>({type:String,default:null,validator:A})),S={align:Object.keys(L),justify:Object.keys($),alignContent:Object.keys(B)},J={align:"align",justify:"justify",alignContent:"align-content"};function Q(t,n,a){let s=J[t];if(a!=null){if(n){const e=n.replace(t,"");s+=`-${e}`}return s+=`-${a}`,s.toLowerCase()}}const Y=h({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j},...L,justify:{type:String,default:null,validator:E},...$,alignContent:{type:String,default:null,validator:A},...B,...g(),...d()},"VRow"),ct=m()({name:"VRow",props:Y(),setup(t,n){let{slots:a}=n;const s=w(()=>{const e=[];let i;for(i in S)S[i].forEach(r=>{const o=t[r],l=Q(i,r,o);l&&e.push(l)});return e.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),e});return()=>{var e;return x(t.tag,{class:["v-row",s.value,t.class],style:t.style},(e=a.default)==null?void 0:e.call(a))}}});export{u as B,ct as V,lt as a,ot as b,tt as c,st as d,rt as e,it as f,et as g,nt as n,at as s};
