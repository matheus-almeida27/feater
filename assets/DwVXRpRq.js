import{d as X,H as q,I as G,t as y,v as u,z as n,A as o,T as se,x as V,J as oe,K as S,L as E,y as $,B as j,n as le,_ as z,M as Q,j as re,N as L,O as J,P as K,Q as ce,R as ie,S as ue,r as k,e as de,U as fe,V as F,W as N,X as me,Y as ve,Z as ge,$ as he}from"./B-haekj4.js";import{V as Y,a as O}from"./Ogo7Rtt8.js";import{V as A}from"./DQwfj6aW.js";import{V as P}from"./CB3oUGjE.js";import{V as T,f as pe}from"./DFN0DKfH.js";import{V as U,u as _e,a as ye}from"./CI60m_iN.js";import{V as W,a as Ve}from"./DP4A1fb_.js";import{V as xe}from"./C-ojXM-K.js";import{u as be,V as H,m as ke,a as Z}from"./mgVmWdnd.js";import"./DlWTxv-k.js";const Ee={class:"match-dialog"},we=X({__name:"MatchDialogContent",props:{matchInfo:{type:Object,default:()=>null}},emits:["close"],setup(e,{emit:w}){var _,r,f;const d=q(),i=G(),v=e;i.chats.find(t=>{var a;return t.participants.includes(Number(v.matchInfo.id))&&t.participants.includes(Number((a=d==null?void 0:d.user)==null?void 0:a.id))});const x=((_=d.user)==null?void 0:_.profileImage)||"",l=w,g=((f=(r=v.matchInfo)==null?void 0:r.name)==null?void 0:f.split(" ")[0])+" também curtiu você!";function p(){const t=i.chats.find(a=>{var m;return a.participants.includes(Number(v.matchInfo.id))&&a.participants.includes(Number((m=d==null?void 0:d.user)==null?void 0:m.id))});l("close"),le(`/messages/${t==null?void 0:t.id}`)}return(t,a)=>(u(),y("div",Ee,[n(Y,{"fill-height":""},{default:o(()=>[n(A,{variant:"text",rounded:"xl",class:"position-absolute top-0 right-0 mr-3 mt-3",icon:"mdi-close",onClick:a[0]||(a[0]=m=>t.$emit("close"))}),n(P,{align:"center",justify:"center"},{default:o(()=>[n(T,{cols:"12",class:"text-center"},{default:o(()=>[n(se,{name:"fade"},{default:o(()=>a[1]||(a[1]=[V("div",{class:"match-header"},[V("h2",null,"É um feat!")],-1)])),_:1})]),_:1})]),_:1}),n(P,{align:"center",justify:"center"},{default:o(()=>[n(T,{cols:"12",md:"6",class:"d-flex justify-center"},{default:o(()=>[n(oe,{name:"slide-fade",mode:"out-in",tag:"div",class:"avatars"},{default:o(()=>[(u(),S(O,{size:"150",class:"mx-2",key:"userPhoto"},{default:o(()=>[n(U,{contain:"",height:"150",width:"150",src:E(x),alt:"Sua foto"},null,8,["src"])]),_:1})),(u(),S(O,{size:"150",class:"mx-2",key:"matchPhoto"},{default:o(()=>{var m;return[n(U,{contain:"",height:"150",width:"150",src:(m=e.matchInfo)==null?void 0:m.profileImage,alt:"Foto do match"},null,8,["src"])]}),_:1}))]),_:1})]),_:1})]),_:1}),n(P,{align:"center",justify:"center"},{default:o(()=>[n(T,{cols:"12",class:"text-center"},{default:o(()=>[V("p",{class:"collaboration-text"},$(g)),a[2]||(a[2]=V("p",{class:"collaboration-text"},"Que tal criar uma música juntos?",-1))]),_:1})]),_:1}),n(P,{align:"center",justify:"center"},{default:o(()=>[n(T,{cols:"12",class:"text-center"},{default:o(()=>[n(A,{color:"purple-darken-2",class:"ma-4",variant:"elevated",rounded:"xl",size:"x-large",onClick:p},{default:o(()=>a[3]||(a[3]=[j(" Enviar Mensagem ")])),_:1})]),_:1})]),_:1})]),_:1})]))}}),Ie=z(we,[["__scopeId","data-v-3f7cb889"]]),Ce={class:"inner-card"},Le={class:"card-content"},Se=["src"],Be={class:"card-name"},$e={class:"card-address"},Pe={class:"card-genres"},Te={key:0,class:"card-bio"},De=X({__name:"InnerCardStack",props:{card:{type:Object,required:!0},showBio:{type:Boolean,default:!1}},setup(e){Q();const w=e,d=re(()=>w.card.favoriteGenres||[]);return(i,v)=>(u(),y("div",Ce,[V("div",Le,[e.card.profileImage?(u(),y("img",{key:0,draggable:"false",src:e.card.profileImage,alt:"Imagem",class:"card-img"},null,8,Se)):L("",!0),V("p",Be,$(e.card.name),1),V("p",$e,$(e.card.location.address),1),V("div",Pe,[(u(!0),y(J,null,K(E(d),(x,l)=>(u(),y("span",{key:l,class:"genre-tag mb-2"},$(x.nome),1))),128))])]),n(W,null,{default:o(()=>[e.showBio?L("",!0):(u(),S(xe,{key:0,size:"20"},{default:o(()=>v[0]||(v[0]=[j("mdi-chevron-down")])),_:1}))]),_:1}),n(W,null,{default:o(()=>[e.showBio?(u(),y("div",Te,[V("p",null,$(e.card.bio),1)])):L("",!0)]),_:1})]))}}),Re=z(De,[["__scopeId","data-v-1270ebdb"]]),Me=ie({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...ke({origin:"center center",scrollStrategy:"block",transition:{component:Z},zIndex:2400})},"VDialog"),je=ce()({name:"VDialog",props:Me(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,w){let{emit:d,slots:i}=w;const v=ue(e,"modelValue"),{scopeId:x}=be(),l=k();function g(r){var a,m;const f=r.relatedTarget,t=r.target;if(f!==t&&((a=l.value)!=null&&a.contentEl)&&((m=l.value)!=null&&m.globalTop)&&![document,l.value.contentEl].includes(t)&&!l.value.contentEl.contains(t)){const h=me(l.value.contentEl);if(!h.length)return;const b=h[0],I=h[h.length-1];f===b?I.focus():b.focus()}}de(()=>{document.removeEventListener("focusin",g)}),fe&&F(()=>v.value&&e.retainFocus,r=>{r?document.addEventListener("focusin",g):document.removeEventListener("focusin",g)},{immediate:!0});function p(){var r;d("afterEnter"),(r=l.value)!=null&&r.contentEl&&!l.value.contentEl.contains(document.activeElement)&&l.value.contentEl.focus({preventScroll:!0})}function _(){d("afterLeave")}return F(v,async r=>{var f;r||(await ve(),(f=l.value.activatorEl)==null||f.focus({preventScroll:!0}))}),_e(()=>{const r=H.filterProps(e),f=N({"aria-haspopup":"dialog"},e.activatorProps),t=N({tabindex:-1},e.contentProps);return n(H,N({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},r,{modelValue:v.value,"onUpdate:modelValue":a=>v.value=a,"aria-modal":"true",activatorProps:f,contentProps:t,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:p,onAfterLeave:_},x),{activator:i.activator,default:function(){for(var a=arguments.length,m=new Array(a),h=0;h<a;h++)m[h]=arguments[h];return n(ye,{root:"VDialog"},{default:()=>{var b;return[(b=i.default)==null?void 0:b.call(i,...m)]}})}})}),pe({},l)}}),Xe={class:"card-stack w-100"},Ne={key:0,class:"text-center justify-center align-center d-flex"},Ae=["onMousedown","onTouchstart"],ze=X({__name:"SwiperStack",emits:["swipe"],setup(e,{emit:w}){const d=Q(),i=q(),v=G(),x=k(d.users),l=k(!1),g=k([...x.value.filter(c=>{var s;return c.id!==((s=i==null?void 0:i.user)==null?void 0:s.id)})]),p=k(!1);let _=0,r=0,f=!1,t=k();const a=k(),m=k(),h=()=>{l.value=!l.value};function b(c,s){s===0&&(t.value=document.querySelector("#innerCardRef"),f=!0,_=c.type.includes("touch")?c.touches[0].clientX:c.clientX,r=_,document.addEventListener("mousemove",I),document.addEventListener("touchmove",I),document.addEventListener("mouseup",D),document.addEventListener("touchend",D))}function I(c){if(!f)return;r=c.type.includes("touch")?c.touches[0].clientX:c.clientX;const s=r-_;t.value.style.transform=`translateX(${s}px) rotate(${s/10}deg)`,t.value.style.opacity=1-Math.abs(s)/300}function D(){if(!f)return;f=!1;const c=r-_;if(Math.abs(c)>20&&r!=_)if(Math.abs(c)>100){const s=c>0?"R":"L";l.value=!1;const C=g.value[0];m.value={direction:s,card:C},s=="R"?i.addLikedUser(C.id):i.rmvLikedUser(C.id),t.value.style.transition="transform 0.3s, opacity 0.3s",t.value.style.transform=`translateX(${c>0?500:-500}px)`,t.value.style.opacity=0,setTimeout(()=>{g.value.shift(),l.value=!1,s=="R"&&te(C)},200)}else t.value.style.transition="transform 0.3s, opacity 0.3s",t.value.style.transform="translateX(0)",t.value.style.opacity=1;else t.value.style.transition="transform 0.3s, opacity 0.3s",t.value.style.transform="translateX(0)",t.value.style.opacity=1;document.removeEventListener("mousemove",I),document.removeEventListener("touchmove",I),document.removeEventListener("mouseup",D),document.removeEventListener("touchend",D)}function ee(){g.value=[...x.value.filter(c=>{var s;return c.id!==((s=i==null?void 0:i.user)==null?void 0:s.id)})]}const te=c=>{a.value=c,v.createChat(c),p.value=!0},ae=()=>{p.value=!1,a.value=null};return(c,s)=>{const C=Ie,ne=Re;return u(),y("div",Xe,[n(je,{modelValue:E(p),"onUpdate:modelValue":s[0]||(s[0]=B=>ge(p)?p.value=B:null),fullscreen:"",persistent:""},{default:o(()=>[E(p)?(u(),S(C,{key:0,"match-info":E(a),onClose:ae},null,8,["match-info"])):L("",!0)]),_:1},8,["modelValue"]),n(Ve,{"hide-on-leave":""},{default:o(()=>[E(g).length?L("",!0):(u(),y("div",Ne,[n(A,{class:"ma-2",size:"120",variant:"tonal",icon:"",color:"purple-darken-4",onClick:s[1]||(s[1]=B=>ee())},{default:o(()=>s[3]||(s[3]=[j("Resetar "),V("br",null,null,-1),j("Stack")])),_:1})]))]),_:1}),(u(!0),y(J,null,K(E(g),(B,R)=>(u(),y("div",{class:he(["card",{"card-active":R===0}]),key:B.id,onMousedown:M=>b(M,R),onTouchstart:M=>b(M,R)},[n(Z,null,{default:o(()=>[R===0?(u(),S(ne,{key:0,id:"innerCardRef",onClick:s[2]||(s[2]=M=>h()),card:B,"show-bio":E(l)},null,8,["card","show-bio"])):L("",!0)]),_:2},1024)],42,Ae))),128))])}}}),Fe=z(ze,[["__scopeId","data-v-de4f5ac4"]]),Ze=X({__name:"home",setup(e){return(w,d)=>{const i=Fe;return u(),S(Y,{fluid:"",class:"fill-height"},{default:o(()=>[n(P,{align:"center",justify:"center",class:"fill-height"},{default:o(()=>[n(T,{cols:"12",sm:"8",md:"6",lg:"4",xl:"3",class:"fill-height justify-center align-center d-flex"},{default:o(()=>[n(i)]),_:1})]),_:1})]),_:1})}}});export{Ze as default};
