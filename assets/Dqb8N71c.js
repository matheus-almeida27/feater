import{u as _,m as k,V as B,_ as S}from"./DdsiiYze.js";import{H as P,I as x,b3 as z,a6 as n,j as u,a8 as I,a5 as N,z as o,at as T,a2 as w,d as R,r as A,u as M,J as D,a0 as L,L as U,A as l,v as j,b1 as E,B as b,aQ as G,M as h,O as F,ah as H,n as J,_ as O}from"./D2dfyNpS.js";import{d as Q,u as $,m as q,l as K,C as W,V as g,a as y,v as X}from"./DBRPP3qg.js";import{c as Y,j as Z,d as ee,e as ae,u as te,a as oe,f as se,g as le,m as ne,h as ue,o as re}from"./DPIxVtgw.js";import{u as ie}from"./DzoRMGvL.js";const de=x({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...ue(),...ne(),...K(),...le(),...se(),...k({name:"bottom-navigation"}),...oe({tag:"header"}),...q({selectedClass:"v-btn--selected"}),...w()},"VBottomNavigation"),me=P()({name:"VBottomNavigation",props:de(),emits:{"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{slots:r}=s;const{themeClasses:i}=z(),{borderClasses:d}=Y(e),{backgroundColorClasses:m,backgroundColorStyles:t}=Z(n(e,"bgColor")),{densityClasses:a}=Q(e),{elevationClasses:c}=ee(e),{roundedClasses:C}=ae(e),{ssrBootStyles:p}=ie(),v=u(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),f=I(e,"active",e.active),{layoutItemStyles:V}=_({id:e.name,order:u(()=>parseInt(e.order,10)),position:u(()=>"bottom"),layoutSize:u(()=>f.value?v.value:0),elementSize:v,active:f,absolute:n(e,"absolute")});return $(e,W),N({VBtn:{baseColor:n(e,"baseColor"),color:n(e,"color"),density:n(e,"density"),stacked:u(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),te(()=>o(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":f.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},i.value,m.value,d.value,a.value,c.value,C.value,e.class],style:[t.value,V.value,{height:T(v.value)},p.value,e.style]},{default:()=>[r.default&&o("div",{class:"v-bottom-navigation__content"},[r.default()])]})),{}}}),ce=R({__name:"default",setup(e){const s=A(null),r=M(),i=D(),d={messages:0,home:1,profile:2};L(()=>r.currentRoute.value.name,t=>{s.value=t?d[t]??null:null},{immediate:!0});const m=t=>{if(t===null)return;if(!X(i.user)){alert("Você precisa completar seu perfil antes de continuar."),H(()=>{s.value=2});return}const a=["/messages","/home","/profile"];a[t]&&J(a[t])};return(t,a)=>(j(),U(B,null,{default:l(()=>[E(t.$slots,"default",{},void 0,!0),o(me,{fixed:"",mandatory:"","onUpdate:modelValue":[m,a[0]||(a[0]=c=>F(s)?s.value=c:null)],modelValue:h(s),color:"purple",grow:""},{default:l(()=>[o(g,{ripple:!1,active:!1},{default:l(()=>[o(y,{size:"30"},{default:l(()=>a[1]||(a[1]=[b("mdi-chat")])),_:1})]),_:1}),o(g,{ripple:!1,rounded:"",active:!1},{default:l(()=>[o(re,{width:"30",contain:"",class:G({leaf:!0,off:h(s)!=1}),src:S},null,8,["class"])]),_:1}),o(g,{ripple:!1,rounded:"",active:!1},{default:l(()=>[o(y,{size:"30"},{default:l(()=>a[2]||(a[2]=[b("mdi-account")])),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3}))}}),ye=O(ce,[["__scopeId","data-v-3ac3467d"]]);export{ye as default};
