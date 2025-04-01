import{u as p,m as B,V as k,_ as S}from"./B7sU7e0P.js";import{H as P,I as N,b0 as z,a4 as n,j as u,a6 as I,a3 as w,z as o,ar as x,a0 as R,d as T,r as A,u as D,Z as L,K as M,A as l,v as j,a_ as E,B as g,aO as G,L as b,N as U,n as F,_ as H}from"./BufbmH5c.js";import{c as K,u as O,m as Z,l as $,B as q,V as f,a as y}from"./B_kU800D.js";import{c as J,j as Q,d as W,e as X,u as Y,a as ee,f as ae,g as te,m as oe,h as se,o as le}from"./D8oMGO5H.js";import{u as ne}from"./BVj9egAG.js";const ue=N({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...se(),...oe(),...$(),...te(),...ae(),...B({name:"bottom-navigation"}),...ee({tag:"header"}),...Z({selectedClass:"v-btn--selected"}),...R()},"VBottomNavigation"),ie=P()({name:"VBottomNavigation",props:ue(),emits:{"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{slots:i}=s;const{themeClasses:r}=z(),{borderClasses:d}=J(e),{backgroundColorClasses:t,backgroundColorStyles:a}=Q(n(e,"bgColor")),{densityClasses:m}=K(e),{elevationClasses:C}=W(e),{roundedClasses:h}=X(e),{ssrBootStyles:_}=ne(),c=u(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),v=I(e,"active",e.active),{layoutItemStyles:V}=p({id:e.name,order:u(()=>parseInt(e.order,10)),position:u(()=>"bottom"),layoutSize:u(()=>v.value?c.value:0),elementSize:c,active:v,absolute:n(e,"absolute")});return O(e,q),w({VBtn:{baseColor:n(e,"baseColor"),color:n(e,"color"),density:n(e,"density"),stacked:u(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),Y(()=>o(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":v.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},r.value,t.value,d.value,m.value,C.value,h.value,e.class],style:[a.value,V.value,{height:x(c.value)},_.value,e.style]},{default:()=>[i.default&&o("div",{class:"v-bottom-navigation__content"},[i.default()])]})),{}}}),re=T({__name:"default",setup(e){const s=A(null),i=D(),r={messages:0,home:1,profile:2};L(()=>i.currentRoute.value.name,t=>{s.value=t?r[t]??null:null},{immediate:!0});const d=t=>{if(t===null)return;const a=["/messages","/home","/profile"];a[t]&&F(a[t])};return(t,a)=>(j(),M(k,null,{default:l(()=>[E(t.$slots,"default",{},void 0,!0),o(ie,{fixed:"",mandatory:"","onUpdate:modelValue":[d,a[0]||(a[0]=m=>U(s)?s.value=m:null)],modelValue:b(s),color:"purple",grow:""},{default:l(()=>[o(f,{ripple:!1,active:!1},{default:l(()=>[o(y,{size:"30"},{default:l(()=>a[1]||(a[1]=[g("mdi-chat")])),_:1})]),_:1}),o(f,{ripple:!1,rounded:"",active:!1},{default:l(()=>[o(le,{width:"30",contain:"",class:G({leaf:!0,off:b(s)!=1}),src:S},null,8,["class"])]),_:1}),o(f,{ripple:!1,rounded:"",active:!1},{default:l(()=>[o(y,{size:"30"},{default:l(()=>a[2]||(a[2]=[g("mdi-account")])),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3}))}}),ge=H(re,[["__scopeId","data-v-94938065"]]);export{ge as default};
