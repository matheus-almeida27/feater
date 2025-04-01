import{I as H,F as B,j as i,r as ae,aD as L,ar as R,an as K,W as Z,o as ne,ah as se,aG as le,bc as ue,e as ie,ai as F,b3 as re,H as ce,a2 as ve,U as pe,a0 as de,z as U}from"./BufbmH5c.js";import{b as fe,u as me,m as ye}from"./D8oMGO5H.js";const O=Symbol.for("vuetify:layout"),W=Symbol.for("vuetify:layout-item"),j=1e3,ge=H({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),ze=H({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function $e(r){const n=B(O);if(!n)throw new Error("[Vuetify] Could not find injected layout");const s=r.id??`layout-item-${se()}`,l=K("useLayoutItem");F(W,{id:s});const o=Z(!1);le(()=>o.value=!0),ue(()=>o.value=!1);const{layoutItemStyles:c,layoutItemScrimStyles:v}=n.register(l,{...r,active:i(()=>o.value?!1:r.active.value),id:s});return ie(()=>n.unregister(s)),{layoutItemStyles:c,layoutRect:n.layoutRect,layoutItemScrimStyles:v}}const he=(r,n,s,l)=>{let o={top:0,left:0,right:0,bottom:0};const c=[{id:"",layer:{...o}}];for(const v of r){const m=n.get(v),y=s.get(v),h=l.get(v);if(!m||!y||!h)continue;const I={...o,[m.value]:parseInt(o[m.value],10)+(h.value?parseInt(y.value,10):0)};c.push({id:v,layer:I}),o=I}return c};function Ie(r){const n=B(O,null),s=i(()=>n?n.rootZIndex.value-100:j),l=ae([]),o=L(new Map),c=L(new Map),v=L(new Map),m=L(new Map),y=L(new Map),{resizeRef:h,contentRect:I}=fe(),X=i(()=>{const t=new Map,p=r.overlaps??[];for(const e of p.filter(u=>u.includes(":"))){const[u,a]=e.split(":");if(!l.value.includes(u)||!l.value.includes(a))continue;const d=o.get(u),g=o.get(a),S=c.get(u),z=c.get(a);!d||!g||!S||!z||(t.set(a,{position:d.value,amount:parseInt(S.value,10)}),t.set(u,{position:g.value,amount:-parseInt(z.value,10)}))}return t}),b=i(()=>{const t=[...new Set([...v.values()].map(e=>e.value))].sort((e,u)=>e-u),p=[];for(const e of t){const u=l.value.filter(a=>{var d;return((d=v.get(a))==null?void 0:d.value)===e});p.push(...u)}return he(p,o,c,m)}),T=i(()=>!Array.from(y.values()).some(t=>t.value)),x=i(()=>b.value[b.value.length-1].layer),q=i(()=>({"--v-layout-left":R(x.value.left),"--v-layout-right":R(x.value.right),"--v-layout-top":R(x.value.top),"--v-layout-bottom":R(x.value.bottom),...T.value?void 0:{transition:"none"}})),w=i(()=>b.value.slice(1).map((t,p)=>{let{id:e}=t;const{layer:u}=b.value[p],a=c.get(e),d=o.get(e);return{id:e,...u,size:Number(a.value),position:d.value}})),_=t=>w.value.find(p=>p.id===t),V=K("createLayout"),k=Z(!1);ne(()=>{k.value=!0}),F(O,{register:(t,p)=>{let{id:e,order:u,position:a,layoutSize:d,elementSize:g,active:S,disableTransitions:z,absolute:Y}=p;v.set(e,u),o.set(e,a),c.set(e,d),m.set(e,S),z&&y.set(e,z);const D=re(W,V==null?void 0:V.vnode).indexOf(t);D>-1?l.value.splice(D,0,e):l.value.push(e);const E=i(()=>w.value.findIndex($=>$.id===e)),A=i(()=>s.value+b.value.length*2-E.value*2),Q=i(()=>{const $=a.value==="left"||a.value==="right",C=a.value==="right",te=a.value==="bottom",P=g.value??d.value,oe=P===0?"%":"px",N={[a.value]:0,zIndex:A.value,transform:`translate${$?"X":"Y"}(${(S.value?0:-(P===0?100:P))*(C||te?-1:1)}${oe})`,position:Y.value||s.value!==j?"absolute":"fixed",...T.value?void 0:{transition:"none"}};if(!k.value)return N;const f=w.value[E.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const M=X.value.get(e);return M&&(f[M.position]+=M.amount),{...N,height:$?`calc(100% - ${f.top}px - ${f.bottom}px)`:g.value?`${g.value}px`:void 0,left:C?void 0:`${f.left}px`,right:C?`${f.right}px`:void 0,top:a.value!=="bottom"?`${f.top}px`:void 0,bottom:a.value!=="top"?`${f.bottom}px`:void 0,width:$?g.value?`${g.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),ee=i(()=>({zIndex:A.value-1}));return{layoutItemStyles:Q,layoutItemScrimStyles:ee,zIndex:A}},unregister:t=>{v.delete(t),o.delete(t),c.delete(t),m.delete(t),y.delete(t),l.value=l.value.filter(p=>p!==t)},mainRect:x,mainStyles:q,getLayoutItem:_,items:w,layoutRect:I,rootZIndex:s});const G=i(()=>["v-layout",{"v-layout--full-height":r.fullHeight}]),J=i(()=>({zIndex:n?s.value:void 0,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:G,layoutStyles:J,getLayoutItem:_,items:w,layoutRect:I,layoutRef:h}}const Le=""+new URL("feater.DevrVcJ9.png",import.meta.url).href,be=H({...ye(),...ge({fullHeight:!0}),...de()},"VApp"),Re=ce()({name:"VApp",props:be(),setup(r,n){let{slots:s}=n;const l=ve(r),{layoutClasses:o,getLayoutItem:c,items:v,layoutRef:m}=Ie(r),{rtlClasses:y}=pe();return me(()=>{var h;return U("div",{ref:m,class:["v-application",l.themeClasses.value,o.value,y.value,r.class],style:[r.style]},[U("div",{class:"v-application__wrap"},[(h=s.default)==null?void 0:h.call(s)])])}),{getLayoutItem:c,items:v,theme:l}}});export{Re as V,Le as _,ze as m,$e as u};
