import{F as W,a5 as M,am as X,ah as be,aN as w,R as _,r as L,S as ee,j as y,e as pe,ay as lt,ab as C,aW as ke,Q as N,z as f,aZ as it,ad as Ce,af as st,a2 as T,V as rt,a9 as ie,a_ as ut,ae as ot,W as te,a7 as se,ag as G,O as ve,y as fe,aA as me,au as ct,a$ as we,aX as Ie,a8 as dt,ax as O,ap as Ae,aa as vt,ar as ft}from"./B-haekj4.js";import{V as mt}from"./DP4A1fb_.js";import{u as D,a as ae,M as yt,b as U,m as E,c as Ve,k as Pe,d as Le,e as Oe,f as _e,g as Be,l as Te,h as je,i as Me,j as gt}from"./CI60m_iN.js";import{u as ht}from"./DeYrWc4u.js";import{c as St}from"./Cr_TDodh.js";import{R as bt,b as pt,c as kt,u as Ne,m as xe,e as Ct,f as Fe,g as wt,V as ye}from"./C-ojXM-K.js";import{a as ge}from"./Ogo7Rtt8.js";const ne=Symbol.for("vuetify:list");function De(){const e=W(ne,{hasPrepend:M(!1),updateHasPrepend:()=>null}),i={hasPrepend:M(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return X(ne,i),e}function Ee(){return W(ne,null)}const re=e=>{const i={activate:t=>{let{id:a,value:l,activated:n}=t;return a=w(a),e&&!l&&n.size===1&&n.has(a)||(l?n.add(a):n.delete(a)),n},in:(t,a,l)=>{let n=new Set;if(t!=null)for(const s of be(t))n=i.activate({id:s,value:!0,activated:new Set(n),children:a,parents:l});return n},out:t=>Array.from(t)};return i},Re=e=>{const i=re(e);return{activate:a=>{let{activated:l,id:n,...s}=a;n=w(n);const u=l.has(n)?new Set([n]):new Set;return i.activate({...s,id:n,activated:u})},in:(a,l,n)=>{let s=new Set;if(a!=null){const u=be(a);u.length&&(s=i.in(u.slice(0,1),l,n))}return s},out:(a,l,n)=>i.out(a,l,n)}},It=e=>{const i=re(e);return{activate:a=>{let{id:l,activated:n,children:s,...u}=a;return l=w(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...u})},in:i.in,out:i.out}},At=e=>{const i=Re(e);return{activate:a=>{let{id:l,activated:n,children:s,...u}=a;return l=w(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...u})},in:i.in,out:i.out}},Vt={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){const n=new Set;n.add(i);let s=l.get(i);for(;s!=null;)n.add(s),s=l.get(s);return n}else return a.delete(i),a},select:()=>null},Ge={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){let n=l.get(i);for(a.add(i);n!=null&&n!==i;)a.add(n),n=l.get(n);return a}else a.delete(i);return a},select:()=>null},Pt={open:Ge.open,select:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(!t)return a;const n=[];let s=l.get(i);for(;s!=null;)n.push(s),s=l.get(s);return new Set(n)}},ue=e=>{const i={select:t=>{let{id:a,value:l,selected:n}=t;if(a=w(a),e&&!l){const s=Array.from(n.entries()).reduce((u,c)=>{let[d,g]=c;return g==="on"&&u.push(d),u},[]);if(s.length===1&&s[0]===a)return n}return n.set(a,l?"on":"off"),n},in:(t,a,l)=>{const n=new Map;for(const s of t||[])i.select({id:s,value:!0,selected:n,children:a,parents:l});return n},out:t=>{const a=[];for(const[l,n]of t.entries())n==="on"&&a.push(l);return a}};return i},$e=e=>{const i=ue(e);return{select:a=>{let{selected:l,id:n,...s}=a;n=w(n);const u=l.has(n)?new Map([[n,l.get(n)]]):new Map;return i.select({...s,id:n,selected:u})},in:(a,l,n)=>a!=null&&a.length?i.in(a.slice(0,1),l,n):new Map,out:(a,l,n)=>i.out(a,l,n)}},Lt=e=>{const i=ue(e);return{select:a=>{let{id:l,selected:n,children:s,...u}=a;return l=w(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...u})},in:i.in,out:i.out}},Ot=e=>{const i=$e(e);return{select:a=>{let{id:l,selected:n,children:s,...u}=a;return l=w(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...u})},in:i.in,out:i.out}},Ue=e=>{const i={select:t=>{let{id:a,value:l,selected:n,children:s,parents:u}=t;a=w(a);const c=new Map(n),d=[a];for(;d.length;){const m=d.shift();n.set(w(m),l?"on":"off"),s.has(m)&&d.push(...s.get(m))}let g=w(u.get(a));for(;g;){const m=s.get(g),p=m.every(r=>n.get(w(r))==="on"),S=m.every(r=>!n.has(w(r))||n.get(w(r))==="off");n.set(g,p?"on":S?"off":"indeterminate"),g=w(u.get(g))}return e&&!l&&Array.from(n.entries()).reduce((p,S)=>{let[r,o]=S;return o==="on"&&p.push(r),p},[]).length===0?c:n},in:(t,a,l)=>{let n=new Map;for(const s of t||[])n=i.select({id:s,value:!0,selected:n,children:a,parents:l});return n},out:(t,a)=>{const l=[];for(const[n,s]of t.entries())s==="on"&&!a.has(n)&&l.push(n);return l}};return i},_t=e=>{const i=Ue(e);return{select:i.select,in:i.in,out:(a,l,n)=>{const s=[];for(const[u,c]of a.entries())if(c==="on"){if(n.has(u)){const d=n.get(u);if(a.get(d)==="on")continue}s.push(u)}return s}}},$=Symbol.for("vuetify:nested"),ze={id:M(),root:{register:()=>null,unregister:()=>null,parents:L(new Map),children:L(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:L(!1),selectable:L(!1),opened:L(new Set),activated:L(new Set),selected:L(new Map),selectedValues:L([]),getPath:()=>[]}},Bt=_({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Tt=e=>{let i=!1;const t=L(new Map),a=L(new Map),l=ee(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),n=y(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return It(e.mandatory);case"single-leaf":return At(e.mandatory);case"independent":return re(e.mandatory);case"single-independent":default:return Re(e.mandatory)}}),s=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Ot(e.mandatory);case"leaf":return Lt(e.mandatory);case"independent":return ue(e.mandatory);case"single-independent":return $e(e.mandatory);case"trunk":return _t(e.mandatory);case"classic":default:return Ue(e.mandatory)}}),u=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Pt;case"single":return Vt;case"multiple":default:return Ge}}),c=ee(e,"activated",e.activated,r=>n.value.in(r,t.value,a.value),r=>n.value.out(r,t.value,a.value)),d=ee(e,"selected",e.selected,r=>s.value.in(r,t.value,a.value),r=>s.value.out(r,t.value,a.value));pe(()=>{i=!0});function g(r){const o=[];let v=r;for(;v!=null;)o.unshift(v),v=a.value.get(v);return o}const m=lt("nested"),p=new Set,S={id:M(),root:{opened:l,activatable:C(e,"activatable"),selectable:C(e,"selectable"),activated:c,selected:d,selectedValues:y(()=>{const r=[];for(const[o,v]of d.value.entries())v==="on"&&r.push(o);return r}),register:(r,o,v)=>{if(p.has(r)){g(r).map(String).join(" -> "),g(o).concat(r).map(String).join(" -> ");return}else p.add(r);o&&r!==o&&a.value.set(r,o),v&&t.value.set(r,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],r])},unregister:r=>{if(i)return;p.delete(r),t.value.delete(r);const o=a.value.get(r);if(o){const v=t.value.get(o)??[];t.value.set(o,v.filter(h=>h!==r))}a.value.delete(r)},open:(r,o,v)=>{m.emit("click:open",{id:r,value:o,path:g(r),event:v});const h=u.value.open({id:r,value:o,opened:new Set(l.value),children:t.value,parents:a.value,event:v});h&&(l.value=h)},openOnSelect:(r,o,v)=>{const h=u.value.select({id:r,value:o,selected:new Map(d.value),opened:new Set(l.value),children:t.value,parents:a.value,event:v});h&&(l.value=h)},select:(r,o,v)=>{m.emit("click:select",{id:r,value:o,path:g(r),event:v});const h=s.value.select({id:r,value:o,selected:new Map(d.value),children:t.value,parents:a.value,event:v});h&&(d.value=h),S.root.openOnSelect(r,o,v)},activate:(r,o,v)=>{if(!e.activatable)return S.root.select(r,!0,v);m.emit("click:activate",{id:r,value:o,path:g(r),event:v});const h=n.value.activate({id:r,value:o,activated:new Set(c.value),children:t.value,parents:a.value,event:v});if(h.size!==c.value.size)c.value=h;else{for(const k of h)if(!c.value.has(k)){c.value=h;return}for(const k of c.value)if(!h.has(k)){c.value=h;return}}},children:t,parents:a,getPath:g}};return X($,S),S.root},Ke=(e,i)=>{const t=W($,ze),a=Symbol("nested item"),l=y(()=>e.value!==void 0?e.value:a),n={...t,id:l,open:(s,u)=>t.root.open(l.value,s,u),openOnSelect:(s,u)=>t.root.openOnSelect(l.value,s,u),isOpen:y(()=>t.root.opened.value.has(l.value)),parent:y(()=>t.root.parents.value.get(l.value)),activate:(s,u)=>t.root.activate(l.value,s,u),isActivated:y(()=>t.root.activated.value.has(w(l.value))),select:(s,u)=>t.root.select(l.value,s,u),isSelected:y(()=>t.root.selected.value.get(w(l.value))==="on"),isIndeterminate:y(()=>t.root.selected.value.get(w(l.value))==="indeterminate"),isLeaf:y(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return ke(()=>{!t.isGroupActivator&&t.root.register(l.value,t.id.value,i)}),pe(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&X($,n),n},jt=()=>{const e=W($,ze);X($,{...e,isGroupActivator:!0})},Mt=it({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return jt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Nt=_({activeColor:String,baseColor:String,color:String,collapseIcon:{type:T,default:"$collapse"},expandIcon:{type:T,default:"$expand"},prependIcon:T,appendIcon:T,fluid:Boolean,subgroup:Boolean,title:String,value:null,...E(),...U()},"VListGroup"),he=N()({name:"VListGroup",props:Nt(),setup(e,i){let{slots:t}=i;const{isOpen:a,open:l,id:n}=Ke(C(e,"value"),!0),s=y(()=>`v-list-group--id-${String(n.value)}`),u=Ee(),{isBooted:c}=ht();function d(S){var r;S.stopPropagation(),!["INPUT","TEXTAREA"].includes((r=S.target)==null?void 0:r.tagName)&&l(!a.value,S)}const g=y(()=>({onClick:d,class:"v-list-group__header",id:s.value})),m=y(()=>a.value?e.collapseIcon:e.expandIcon),p=y(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&m.value,appendIcon:e.appendIcon||!e.subgroup&&m.value,title:e.title,value:e.value}}));return D(()=>f(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&f(ae,{defaults:p.value},{default:()=>[f(Mt,null,{default:()=>[t.activator({props:g.value,isOpen:a.value})]})]}),f(yt,{transition:{component:mt},disabled:!c.value},{default:()=>{var S;return[Ce(f("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(S=t.default)==null?void 0:S.call(t)]),[[st,a.value]])]}})]})),{isOpen:a}}}),xt=_({opacity:[Number,String],...E(),...U()},"VListItemSubtitle"),Ft=N()({name:"VListItemSubtitle",props:xt(),setup(e,i){let{slots:t}=i;return D(()=>f(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Dt=St("v-list-item-title"),Et=_({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:T,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:T,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},value:null,onClick:G(),onClickOnce:G(),...je(),...E(),...Fe(),...Te(),...Be(),..._e(),...Ct(),...U(),...se(),...xe({variant:"text"})},"VListItem"),Se=N()({name:"VListItem",directives:{Ripple:bt},props:Et(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:a,emit:l}=i;const n=pt(e,t),s=y(()=>e.value===void 0?n.href.value:e.value),{activate:u,isActivated:c,select:d,isOpen:g,isSelected:m,isIndeterminate:p,isGroupActivator:S,root:r,parent:o,openOnSelect:v,id:h}=Ke(s,!1),k=Ee(),A=y(()=>{var b;return e.active!==!1&&(e.active||((b=n.isActive)==null?void 0:b.value)||(r.activatable.value?c.value:m.value))}),R=y(()=>e.link!==!1&&n.isLink.value),j=y(()=>!!k&&(r.selectable.value||r.activatable.value||e.value!=null)),V=y(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||j.value)),H=y(()=>e.rounded||e.nav),q=y(()=>e.color??e.activeColor),Q=y(()=>({color:A.value?q.value??e.baseColor:e.baseColor,variant:e.variant}));rt(()=>{var b;return(b=n.isActive)==null?void 0:b.value},b=>{b&&z()}),ke(()=>{var b;(b=n.isActive)!=null&&b.value&&z()});function z(){o.value!=null&&r.open(o.value,!0),v(!0)}const{themeClasses:Z}=ie(e),{borderClasses:B}=Ve(e),{colorClasses:I,colorStyles:x,variantClasses:qe}=kt(Q),{densityClasses:Qe}=Ne(e),{dimensionStyles:Ze}=Pe(e),{elevationClasses:Je}=Le(e),{roundedClasses:Ye}=Oe(H),et=y(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),J=y(()=>({isActive:A.value,select:d,isOpen:g.value,isSelected:m.value,isIndeterminate:p.value}));function tt(b){var F,K;l("click",b),!["INPUT","TEXTAREA"].includes((F=b.target)==null?void 0:F.tagName)&&V.value&&((K=n.navigate)==null||K.call(n,b),!S&&(r.activatable.value?u(!c.value,b):(r.selectable.value||e.value!=null)&&d(!m.value,b)))}function at(b){const F=b.target;["INPUT","TEXTAREA"].includes(F.tagName)||(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),b.target.dispatchEvent(new MouseEvent("click",b)))}return D(()=>{const b=R.value?"a":e.tag,F=a.title||e.title!=null,K=a.subtitle||e.subtitle!=null,oe=!!(e.appendAvatar||e.appendIcon),nt=!!(oe||a.append),ce=!!(e.prependAvatar||e.prependIcon),Y=!!(ce||a.prepend);return k==null||k.updateHasPrepend(Y),e.activeColor&&ut("active-color",["color","base-color"]),Ce(f(b,te({class:["v-list-item",{"v-list-item--active":A.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Y&&(k==null?void 0:k.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&A.value},Z.value,B.value,I.value,Qe.value,Je.value,et.value,Ye.value,qe.value,e.class],style:[x.value,Ze.value,e.style],tabindex:V.value?k?-2:0:void 0,"aria-selected":j.value?r.activatable.value?c.value:r.selectable.value?m.value:A.value:void 0,onClick:tt,onKeydown:V.value&&!R.value&&at},n.linkProps),{default:()=>{var de;return[wt(V.value||A.value,"v-list-item"),Y&&f("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?f(ae,{key:"prepend-defaults",disabled:!ce,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=a.prepend)==null?void 0:P.call(a,J.value)]}}):f(ve,null,[e.prependAvatar&&f(ge,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&f(ye,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),f("div",{class:"v-list-item__spacer"},null)]),f("div",{class:"v-list-item__content","data-no-activator":""},[F&&f(Dt,{key:"title"},{default:()=>{var P;return[((P=a.title)==null?void 0:P.call(a,{title:e.title}))??fe(e.title)]}}),K&&f(Ft,{key:"subtitle"},{default:()=>{var P;return[((P=a.subtitle)==null?void 0:P.call(a,{subtitle:e.subtitle}))??fe(e.subtitle)]}}),(de=a.default)==null?void 0:de.call(a,J.value)]),nt&&f("div",{key:"append",class:"v-list-item__append"},[a.append?f(ae,{key:"append-defaults",disabled:!oe,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=a.append)==null?void 0:P.call(a,J.value)]}}):f(ve,null,[e.appendIcon&&f(ye,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&f(ge,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),f("div",{class:"v-list-item__spacer"},null)])]}}),[[ot("ripple"),V.value&&e.ripple]])}),{activate:u,isActivated:c,isGroupActivator:S,isSelected:m,list:k,select:d,root:r,id:h,link:n}}}),Rt=_({color:String,inset:Boolean,sticky:Boolean,title:String,...E(),...U()},"VListSubheader"),Gt=N()({name:"VListSubheader",props:Rt(),setup(e,i){let{slots:t}=i;const{textColorClasses:a,textColorStyles:l}=Me(C(e,"color"));return D(()=>{const n=!!(t.default||e.title);return f(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[n&&f("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),$t=_({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...E(),...se()},"VDivider"),Ut=N()({name:"VDivider",props:$t(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:l}=ie(e),{textColorClasses:n,textColorStyles:s}=Me(C(e,"color")),u=y(()=>{const c={};return e.length&&(c[e.vertical?"height":"width"]=me(e.length)),e.thickness&&(c[e.vertical?"borderRightWidth":"borderTopWidth"]=me(e.thickness)),c});return D(()=>{const c=f("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,n.value,e.class],style:[u.value,s.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return a.default?f("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[c,f("div",{class:"v-divider__content"},[a.default()]),c]):c}),{}}}),zt=_({items:Array,returnObject:Boolean},"VListChildren"),We=N()({name:"VListChildren",props:zt(),setup(e,i){let{slots:t}=i;return De(),()=>{var a,l;return((a=t.default)==null?void 0:a.call(t))??((l=e.items)==null?void 0:l.map(n=>{var p,S;let{children:s,props:u,type:c,raw:d}=n;if(c==="divider")return((p=t.divider)==null?void 0:p.call(t,{props:u}))??f(Ut,u,null);if(c==="subheader")return((S=t.subheader)==null?void 0:S.call(t,{props:u}))??f(Gt,u,null);const g={subtitle:t.subtitle?r=>{var o;return(o=t.subtitle)==null?void 0:o.call(t,{...r,item:d})}:void 0,prepend:t.prepend?r=>{var o;return(o=t.prepend)==null?void 0:o.call(t,{...r,item:d})}:void 0,append:t.append?r=>{var o;return(o=t.append)==null?void 0:o.call(t,{...r,item:d})}:void 0,title:t.title?r=>{var o;return(o=t.title)==null?void 0:o.call(t,{...r,item:d})}:void 0},m=he.filterProps(u);return s?f(he,te({value:u==null?void 0:u.value},m),{activator:r=>{let{props:o}=r;const v={...u,...o,value:e.returnObject?d:u.value};return t.header?t.header({props:v}):f(Se,v,g)},default:()=>f(We,{items:s,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):f(Se,te(u,{value:e.returnObject?d:u.value}),g)}))}}}),Kt=_({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:Function},"list-items");function le(e,i){const t=O(i,e.itemTitle,i),a=O(i,e.itemValue,t),l=O(i,e.itemChildren),n=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?Ae(i,["children"]):i:void 0:O(i,e.itemProps),s={title:t,value:a,...n};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?Xe(e,l):void 0,raw:i}}function Xe(e,i){const t=Ie(e,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),a=[];for(const l of i)a.push(le(t,l));return a}function aa(e){const i=y(()=>Xe(e,e.items)),t=y(()=>i.value.some(u=>u.value===null)),a=M(new Map),l=M([]);ct(()=>{const u=i.value,c=new Map,d=[];for(let g=0;g<u.length;g++){const m=u[g];if(we(m.value)||m.value===null){let p=c.get(m.value);p||(p=[],c.set(m.value,p)),p.push(m)}else d.push(m)}a.value=c,l.value=d});function n(u){const c=a.value,d=i.value,g=l.value,m=t.value,p=e.returnObject,S=!!e.valueComparator,r=e.valueComparator||dt,o=Ie(e,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),v=[];e:for(const h of u){if(!m&&h===null)continue;if(p&&typeof h=="string"){v.push(le(o,h));continue}const k=c.get(h);if(S||!k){for(const A of S?d:g)if(r(h,A.value)){v.push(A);continue e}v.push(le(o,h));continue}v.push(...k)}return v}function s(u){return e.returnObject?u.map(c=>{let{raw:d}=c;return d}):u.map(c=>{let{value:d}=c;return d})}return{items:i,transformIn:n,transformOut:s}}function Wt(e,i){const t=O(i,e.itemType,"item"),a=we(i)?i:O(i,e.itemTitle),l=O(i,e.itemValue,void 0),n=O(i,e.itemChildren),s=e.itemProps===!0?Ae(i,["children"]):O(i,e.itemProps),u={title:a,value:l,...s};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&n?He(e,n):void 0,raw:i}}function He(e,i){const t=[];for(const a of i)t.push(Wt(e,a));return t}function Xt(e){return{items:y(()=>He(e,e.items))}}const Ht=_({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:T,collapseIcon:T,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":G(),"onClick:select":G(),"onUpdate:opened":G(),...Bt({selectStrategy:"single-leaf",openStrategy:"list"}),...je(),...E(),...Fe(),...Te(),...Be(),itemType:{type:String,default:"type"},...Kt(),..._e(),...U(),...se(),...xe({variant:"text"})},"VList"),na=N()({name:"VList",props:Ht(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:a}=Xt(e),{themeClasses:l}=ie(e),{backgroundColorClasses:n,backgroundColorStyles:s}=gt(C(e,"bgColor")),{borderClasses:u}=Ve(e),{densityClasses:c}=Ne(e),{dimensionStyles:d}=Pe(e),{elevationClasses:g}=Le(e),{roundedClasses:m}=Oe(e),{children:p,open:S,parents:r,select:o,getPath:v}=Tt(e),h=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),k=C(e,"activeColor"),A=C(e,"baseColor"),R=C(e,"color");De(),vt({VListGroup:{activeColor:k,baseColor:A,color:R,expandIcon:C(e,"expandIcon"),collapseIcon:C(e,"collapseIcon")},VListItem:{activeClass:C(e,"activeClass"),activeColor:k,baseColor:A,color:R,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),slim:C(e,"slim"),variant:C(e,"variant")}});const j=M(!1),V=L();function H(I){j.value=!0}function q(I){j.value=!1}function Q(I){var x;!j.value&&!(I.relatedTarget&&((x=V.value)!=null&&x.contains(I.relatedTarget)))&&B()}function z(I){const x=I.target;if(!(!V.value||["INPUT","TEXTAREA"].includes(x.tagName))){if(I.key==="ArrowDown")B("next");else if(I.key==="ArrowUp")B("prev");else if(I.key==="Home")B("first");else if(I.key==="End")B("last");else return;I.preventDefault()}}function Z(I){j.value=!0}function B(I){if(V.value)return ft(V.value,I)}return D(()=>f(e.tag,{ref:V,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,u.value,c.value,g.value,h.value,m.value,e.class],style:[s.value,d.value,e.style],tabindex:e.disabled?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:H,onFocusout:q,onFocus:Q,onKeydown:z,onMousedown:Z},{default:()=>[f(We,{items:a.value,returnObject:e.returnObject},t)]})),{open:S,select:o,focus:B,children:p,parents:r,getPath:v}}});export{na as V,Se as a,Dt as b,Ft as c,Kt as m,aa as u};
