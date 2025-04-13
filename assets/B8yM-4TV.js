import"./B7I3390X.js";import{a as N,m as x}from"./Xmaat-PW.js";import{S as R,U as P,j,h as $,aX as m,aY as v}from"./B2KtWcM2.js";class g{constructor(r){let{x:s,y:o,width:e,height:n}=r;this.x=s,this.y=o,this.width=e,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Q(t,r){return{x:{before:Math.max(0,r.left-t.left),after:Math.max(0,t.right-r.right)},y:{before:Math.max(0,r.top-t.top),after:Math.max(0,t.bottom-r.bottom)}}}function Z(t){return Array.isArray(t)?new g({x:t[0],y:t[1],width:0,height:0}):t.getBoundingClientRect()}function k(t){const r=t.getBoundingClientRect(),s=getComputedStyle(t),o=s.transform;if(o){let e,n,i,a,l;if(o.startsWith("matrix3d("))e=o.slice(9,-1).split(/, /),n=Number(e[0]),i=Number(e[5]),a=Number(e[12]),l=Number(e[13]);else if(o.startsWith("matrix("))e=o.slice(7,-1).split(/, /),n=Number(e[0]),i=Number(e[3]),a=Number(e[4]),l=Number(e[5]);else return new g(r);const u=s.transformOrigin,c=r.x-a-(1-n)*parseFloat(u),f=r.y-l-(1-i)*parseFloat(u.slice(u.indexOf(" ")+1)),d=n?r.width/n:t.offsetWidth+1,h=i?r.height/i:t.offsetHeight+1;return new g({x:c,y:f,width:d,height:h})}else return new g(r)}function tt(t,r,s){if(typeof t.animate>"u")return{finished:Promise.resolve()};let o;try{o=t.animate(r,s)}catch{return{finished:Promise.resolve()}}return typeof o.finished>"u"&&(o.finished=new Promise(e=>{o.onfinish=()=>{e(o)}})),o}const et="cubic-bezier(0.4, 0, 0.2, 1)",nt="cubic-bezier(0.0, 0, 0.2, 1)",st="cubic-bezier(0.4, 0, 1, 1)",O=m.reduce((t,r)=>(t[r]={type:[Boolean,String,Number],default:!1},t),{}),V=m.reduce((t,r)=>{const s="offset"+v(r);return t[s]={type:[String,Number],default:null},t},{}),L=m.reduce((t,r)=>{const s="order"+v(r);return t[s]={type:[String,Number],default:null},t},{}),S={col:Object.keys(O),offset:Object.keys(V),order:Object.keys(L)};function F(t,r,s){let o=t;if(!(s==null||s===!1)){if(r){const e=r.replace(t,"");o+=`-${e}`}return t==="col"&&(o="v-"+o),t==="col"&&(s===""||s===!0)||(o+=`-${s}`),o.toLowerCase()}}const G=["auto","start","end","center","baseline","stretch"],U=P({cols:{type:[Boolean,String,Number],default:!1},...O,offset:{type:[String,Number],default:null},...V,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:t=>G.includes(t)},...x(),...N()},"VCol"),rt=R()({name:"VCol",props:U(),setup(t,r){let{slots:s}=r;const o=j(()=>{const e=[];let n;for(n in S)S[n].forEach(a=>{const l=t[a],u=F(n,a,l);u&&e.push(u)});const i=e.some(a=>a.startsWith("v-col-"));return e.push({"v-col":!i||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),e});return()=>{var e;return $(t.tag,{class:[o.value,t.class],style:t.style},(e=s.default)==null?void 0:e.call(s))}}}),w=["start","end","center"],E=["space-between","space-around","space-evenly"];function p(t,r){return m.reduce((s,o)=>{const e=t+v(o);return s[e]=r(),s},{})}const I=[...w,"baseline","stretch"],A=t=>I.includes(t),W=p("align",()=>({type:String,default:null,validator:A})),z=[...w,...E],_=t=>z.includes(t),B=p("justify",()=>({type:String,default:null,validator:_})),D=[...w,...E,"stretch"],M=t=>D.includes(t),T=p("alignContent",()=>({type:String,default:null,validator:M})),C={align:Object.keys(W),justify:Object.keys(B),alignContent:Object.keys(T)},K={align:"align",justify:"justify",alignContent:"align-content"};function Y(t,r,s){let o=K[t];if(s!=null){if(r){const e=r.replace(t,"");o+=`-${e}`}return o+=`-${s}`,o.toLowerCase()}}const q=P({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:A},...W,justify:{type:String,default:null,validator:_},...B,alignContent:{type:String,default:null,validator:M},...T,...x(),...N()},"VRow"),ot=R()({name:"VRow",props:q(),setup(t,r){let{slots:s}=r;const o=j(()=>{const e=[];let n;for(n in C)C[n].forEach(i=>{const a=t[i],l=Y(n,i,a);l&&e.push(l)});return e.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),e});return()=>{var e;return $(t.tag,{class:["v-row",o.value,t.class],style:t.style},(e=s.default)==null?void 0:e.call(s))}}}),b=Symbol("Forwarded refs");function y(t,r){let s=t;for(;s;){const o=Reflect.getOwnPropertyDescriptor(s,r);if(o)return o;s=Object.getPrototypeOf(s)}}function it(t){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];return t[b]=s,new Proxy(t,{get(e,n){if(Reflect.has(e,n))return Reflect.get(e,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const i of s)if(i.value&&Reflect.has(i.value,n)){const a=Reflect.get(i.value,n);return typeof a=="function"?a.bind(i.value):a}}},has(e,n){if(Reflect.has(e,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const i of s)if(i.value&&Reflect.has(i.value,n))return!0;return!1},set(e,n,i){if(Reflect.has(e,n))return Reflect.set(e,n,i);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const a of s)if(a.value&&Reflect.has(a.value,n))return Reflect.set(a.value,n,i);return!1},getOwnPropertyDescriptor(e,n){var a;const i=Reflect.getOwnPropertyDescriptor(e,n);if(i)return i;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const l of s){if(!l.value)continue;const u=y(l.value,n)??("_"in l.value?y((a=l.value._)==null?void 0:a.setupState,n):void 0);if(u)return u}for(const l of s){const u=l.value&&l.value[b];if(!u)continue;const c=u.slice();for(;c.length;){const f=c.shift(),d=y(f.value,n);if(d)return d;const h=f.value&&f.value[b];h&&c.push(...h)}}}}})}export{g as B,ot as V,rt as a,tt as b,st as c,nt as d,Q as e,it as f,Z as g,k as n,et as s};
