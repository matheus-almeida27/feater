import{u as y,m as h,n as C}from"./CaRktxv0.js";import{u as k,n as B,g as S,h as P,m as V,j as N,k as z}from"./Ck1laSLb.js";import{u as T,m as I}from"./CN0dRmku.js";import{S as R,U as w,b6 as x,ag as t,j as a,a1 as D,af as E,ac as j,z as i,aE as G}from"./Bx7zmdfp.js";import{u as L,f as U}from"./DOUOzFav.js";import{u as _,m as A}from"./DjmwM0u_.js";import{u as F}from"./LhGw7hxP.js";import{m as M}from"./Clb1bcuI.js";const q=w({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...z(),...I(),...U(),...N(),...V(),...A({name:"bottom-navigation"}),...M({tag:"header"}),...h({selectedClass:"v-btn--selected"}),...j()},"VBottomNavigation"),Z=R()({name:"VBottomNavigation",props:q(),emits:{"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{slots:n}=l;const{themeClasses:r}=x(),{borderClasses:u}=k(e),{backgroundColorClasses:m,backgroundColorStyles:d}=B(t(e,"bgColor")),{densityClasses:v}=L(e),{elevationClasses:c}=S(e),{roundedClasses:g}=P(e),{ssrBootStyles:b}=F(),o=a(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),s=D(e,"active",e.active),{layoutItemStyles:f}=_({id:e.name,order:a(()=>parseInt(e.order,10)),position:a(()=>"bottom"),layoutSize:a(()=>s.value?o.value:0),elementSize:o,active:s,absolute:t(e,"absolute")});return y(e,C),E({VBtn:{baseColor:t(e,"baseColor"),color:t(e,"color"),density:t(e,"density"),stacked:a(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),T(()=>i(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":s.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},r.value,m.value,u.value,v.value,c.value,g.value,e.class],style:[d.value,f.value,{height:G(o.value)},b.value,e.style]},{default:()=>[n.default&&i("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}});export{Z as V};
