import{_ as n}from"./CmG-38F6.js";import{d as g,r as h,u as x,H as B,a3 as R,j as w,K as N,A as r,v as S,z as t,x as u,y as k,L as l,b5 as y,B as f,R as z,Q as A,Z as C,n as I,_ as M}from"./BkTRRufQ.js";import{v as T}from"./Co0LjnBq.js";import{V as j}from"./BV3YfY79.js";import{V as p}from"./CIcrvfPF.js";import{V as F}from"./DkIr4_4k.js";import{V as P}from"./BmlY74Xl.js";import{V as U}from"./C9l55oTS.js";import{V as i}from"./B2sVLTB2.js";import{V as m}from"./D0CareZD.js";import{V as b}from"./BtxwkmF9.js";import"./Y_UXJl72.js";import"./BDiKfVPS.js";import"./Ca3fPFZW.js";import"./ClqsAOHr.js";import"./B20kug3P.js";const D={class:"d-flex align-center justify-center"},H={class:"text-h6 font-weight-light ml-3"},K=g({__name:"default",setup(L){const o=h(null),s=x(),d=B(),c={messages:0,home:1,profile:2};R(()=>s.currentRoute.value.name,e=>{o.value=e?c[e]??null:null},{immediate:!0});const V=e=>{if(e===null)return;if(s.currentRoute.value.path=="/profile"&&!T(d.user)){alert("Você precisa completar seu perfil antes de continuar."),C(()=>{o.value=2});return}const a=["/messages","/home","/profile"];a[e]&&I(a[e])},_=w(()=>{const e=s.currentRoute.value.name;return e==="messages"?"Feats":e==="home"?"Feater":e==="profile"?"Perfil":""});return(e,a)=>(S(),N(j,null,{default:r(()=>[t(P,{class:"px-3"},{default:r(()=>[u("div",D,[t(p,{height:"35",width:"40",contain:"",src:n}),u("span",H,k(l(_)),1)]),t(F)]),_:1}),t(U,null,{default:r(()=>[y(e.$slots,"default",{},void 0,!0)]),_:3}),t(b,{fixed:"",mandatory:"","onUpdate:modelValue":[V,a[0]||(a[0]=v=>A(o)?o.value=v:null)],modelValue:l(o),color:"purple",grow:""},{default:r(()=>[t(i,{ripple:!1,active:!1},{default:r(()=>[t(m,{size:"30"},{default:r(()=>a[1]||(a[1]=[f("mdi-chat")])),_:1})]),_:1}),t(i,{ripple:!1,rounded:"",active:!1},{default:r(()=>[t(p,{width:"30",contain:"",class:z({leaf:!0,off:l(o)!=1}),src:n},null,8,["class"])]),_:1}),t(i,{ripple:!1,rounded:"",active:!1},{default:r(()=>[t(m,{size:"30"},{default:r(()=>a[2]||(a[2]=[f("mdi-account")])),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3}))}}),se=M(K,[["__scopeId","data-v-4f95faee"]]);export{se as default};
