import{b as y,m as h,o as C}from"./THLEgpz9.js";import{h as k,f as B,i as P,j as S,m as V,l as N,n as z}from"./BAfAneul.js";import{u as T,m as I}from"./TPuJQ0JC.js";import{N as R,O as w,b7 as x,aq as t,j as a,P as D,ap as j,al as E,z as i,af as G}from"./cUe4mTCf.js";import{u as L,m as _}from"./DZuc5hJg.js";import{u as q,m as A}from"./BtQliLNP.js";import{u as F}from"./BVnzG4XD.js";import{m as M}from"./B8sux8k-.js";const O=w({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...z(),...I(),..._(),...N(),...V(),...A({name:"bottom-navigation"}),...M({tag:"header"}),...h({selectedClass:"v-btn--selected"}),...E()},"VBottomNavigation"),Z=R()({name:"VBottomNavigation",props:O(),emits:{"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{slots:n}=l;const{themeClasses:r}=x(),{borderClasses:m}=k(e),{backgroundColorClasses:u,backgroundColorStyles:d}=B(t(e,"bgColor")),{densityClasses:v}=L(e),{elevationClasses:c}=P(e),{roundedClasses:g}=S(e),{ssrBootStyles:b}=F(),o=a(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),s=D(e,"active",e.active),{layoutItemStyles:f}=q({id:e.name,order:a(()=>parseInt(e.order,10)),position:a(()=>"bottom"),layoutSize:a(()=>s.value?o.value:0),elementSize:o,active:s,absolute:t(e,"absolute")});return y(e,C),j({VBtn:{baseColor:t(e,"baseColor"),color:t(e,"color"),density:t(e,"density"),stacked:a(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),T(()=>i(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":s.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},r.value,u.value,m.value,v.value,c.value,g.value,e.class],style:[d.value,f.value,{height:G(o.value)},b.value,e.style]},{default:()=>[n.default&&i("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}});export{Z as V};
