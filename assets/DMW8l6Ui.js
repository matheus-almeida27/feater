import{u as f,m as h,n as C}from"./CaENfUg3.js";import{u as k,n as B,g as S,h as P,m as V,j as N,k as z}from"./DEGuv9sV.js";import{u as T,a as I,m as R}from"./Xmaat-PW.js";import{S as w,U as x,b6 as D,ag as t,j as a,a1 as E,af as j,ac as G,z as i,aE as L}from"./B2KtWcM2.js";import{u as U,f as _}from"./B7I3390X.js";import{u as A,m as F}from"./CCK2_sKd.js";import{u as M}from"./B0bOgvgE.js";const q=x({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...z(),...R(),..._(),...N(),...V(),...F({name:"bottom-navigation"}),...I({tag:"header"}),...h({selectedClass:"v-btn--selected"}),...G()},"VBottomNavigation"),Y=w()({name:"VBottomNavigation",props:q(),emits:{"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{slots:n}=l;const{themeClasses:r}=D(),{borderClasses:u}=k(e),{backgroundColorClasses:m,backgroundColorStyles:d}=B(t(e,"bgColor")),{densityClasses:v}=U(e),{elevationClasses:c}=S(e),{roundedClasses:g}=P(e),{ssrBootStyles:b}=M(),o=a(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),s=E(e,"active",e.active),{layoutItemStyles:y}=A({id:e.name,order:a(()=>parseInt(e.order,10)),position:a(()=>"bottom"),layoutSize:a(()=>s.value?o.value:0),elementSize:o,active:s,absolute:t(e,"absolute")});return f(e,C),j({VBtn:{baseColor:t(e,"baseColor"),color:t(e,"color"),density:t(e,"density"),stacked:a(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),T(()=>i(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":s.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},r.value,m.value,u.value,v.value,c.value,g.value,e.class],style:[d.value,y.value,{height:L(o.value)},b.value,e.style]},{default:()=>[n.default&&i("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}});export{Y as V};
