import{d as R,H as U,I as q,t as u,v as r,z as t,A as s,T as ee,x as d,J as te,K as I,L as h,y as L,B as D,n as se,_ as N,M as F,j as ae,N as C,O as G,P as Q,r as x,Q as ne,R as oe}from"./BkTRRufQ.js";import{V as H,a as A}from"./3JEDIJf7.js";import{V as X}from"./B2sVLTB2.js";import{V as S,a as T}from"./BeBEDEOU.js";import{V as O,a as P,b as re}from"./CIcrvfPF.js";import{V as le}from"./D0CareZD.js";import{V as ce}from"./DHeiaESn.js";import{V as ie}from"./aQwbHRV_.js";import"./Y_UXJl72.js";import"./Ca3fPFZW.js";const ue={class:"match-dialog"},de=R({__name:"MatchDialogContent",props:{matchInfo:{type:Object,default:()=>null}},emits:["close"],setup(c,{emit:w}){var v,_,k;const i=U(),l=q(),f=c;l.chats.find(a=>{var o;return a.participants.includes(Number(f.matchInfo.id))&&a.participants.includes(Number((o=i==null?void 0:i.user)==null?void 0:o.id))});const V=((v=i.user)==null?void 0:v.profileImage)||"",m=w,y=((k=(_=f.matchInfo)==null?void 0:_.name)==null?void 0:k.split(" ")[0])+" também curtiu você!";function p(){const a=l.chats.find(o=>{var g;return o.participants.includes(Number(f.matchInfo.id))&&o.participants.includes(Number((g=i==null?void 0:i.user)==null?void 0:g.id))});m("close"),se(`/messages/${a==null?void 0:a.id}`)}return(a,o)=>(r(),u("div",ue,[t(H,{"fill-height":""},{default:s(()=>[t(X,{variant:"text",rounded:"xl",class:"position-absolute top-0 right-0 mr-3 mt-3",icon:"mdi-close",onClick:o[0]||(o[0]=g=>a.$emit("close"))}),t(S,{align:"center",justify:"center"},{default:s(()=>[t(T,{cols:"12",class:"text-center"},{default:s(()=>[t(ee,{name:"fade"},{default:s(()=>o[1]||(o[1]=[d("div",{class:"match-header"},[d("h2",null,"É um feat!")],-1)])),_:1})]),_:1})]),_:1}),t(S,{align:"center",justify:"center"},{default:s(()=>[t(T,{cols:"12",md:"6",class:"d-flex justify-center"},{default:s(()=>[t(te,{name:"slide-fade",mode:"out-in",tag:"div",class:"avatars"},{default:s(()=>[(r(),I(A,{size:"150",class:"mx-2",key:"userPhoto"},{default:s(()=>[t(O,{contain:"",height:"150",width:"150",src:h(V),alt:"Sua foto"},null,8,["src"])]),_:1})),(r(),I(A,{size:"150",class:"mx-2",key:"matchPhoto"},{default:s(()=>{var g;return[t(O,{contain:"",height:"150",width:"150",src:(g=c.matchInfo)==null?void 0:g.profileImage,alt:"Foto do match"},null,8,["src"])]}),_:1}))]),_:1})]),_:1})]),_:1}),t(S,{align:"center",justify:"center"},{default:s(()=>[t(T,{cols:"12",class:"text-center"},{default:s(()=>[d("p",{class:"collaboration-text"},L(y)),o[2]||(o[2]=d("p",{class:"collaboration-text"},"Que tal criar uma música juntos?",-1))]),_:1})]),_:1}),t(S,{align:"center",justify:"center"},{default:s(()=>[t(T,{cols:"12",class:"text-center"},{default:s(()=>[t(X,{class:"ma-4 border",style:{color:"#fff",background:"#170015"},variant:"elevated",rounded:"xl",size:"x-large",onClick:p},{default:s(()=>o[3]||(o[3]=[D(" Enviar Mensagem ")])),_:1})]),_:1})]),_:1})]),_:1})]))}}),me=N(de,[["__scopeId","data-v-3eb453df"]]),fe={class:"inner-card"},pe={class:"card-content"},ve=["src"],_e={class:"card-name"},ge={class:"card-address"},he={class:"card-genres"},ye={key:0,class:"card-bio"},ke=R({__name:"InnerCardStack",props:{card:{type:Object,required:!0},showBio:{type:Boolean,default:!1}},setup(c){F();const w=c,i=ae(()=>w.card.favoriteGenres||[]);return(l,f)=>(r(),u("div",fe,[d("div",pe,[c.card.profileImage?(r(),u("img",{key:0,draggable:"false",src:c.card.profileImage,alt:"Imagem",class:"card-img"},null,8,ve)):C("",!0),d("p",_e,L(c.card.name),1),d("p",ge,L(c.card.location.address),1),d("div",he,[(r(!0),u(G,null,Q(h(i),(V,m)=>(r(),u("span",{key:m,class:"genre-tag mb-2"},L(V.nome),1))),128))])]),t(P,null,{default:s(()=>[c.showBio?C("",!0):(r(),I(le,{key:0,size:"20"},{default:s(()=>f[0]||(f[0]=[D("mdi-chevron-down")])),_:1}))]),_:1}),t(P,null,{default:s(()=>[c.showBio?(r(),u("div",ye,[d("p",null,L(c.card.bio),1)])):C("",!0)]),_:1})]))}}),xe=N(ke,[["__scopeId","data-v-461d93c7"]]),Ve={class:"card-stack w-100"},be={key:0,class:"text-center justify-center align-center d-flex"},Ce=["onMousedown","onTouchstart"],Ie=R({__name:"SwiperStack",emits:["swipe"],setup(c,{emit:w}){const i=F(),l=U(),f=q(),V=x(i.users),m=x(!1),y=x([...V.value.filter(n=>{var e;return n.id!==((e=l==null?void 0:l.user)==null?void 0:e.id)})]),p=x(!1);let v=0,_=0,k=!1,a=x();const o=x(),g=x(),J=()=>{m.value=!m.value};function z(n,e){e===0&&(a.value=document.querySelector("#innerCardRef"),k=!0,v=n.type.includes("touch")?n.touches[0].clientX:n.clientX,_=v,document.addEventListener("mousemove",j),document.addEventListener("touchmove",j),document.addEventListener("mouseup",B),document.addEventListener("touchend",B))}function j(n){if(!k)return;_=n.type.includes("touch")?n.touches[0].clientX:n.clientX;const e=_-v;a.value.style.transform=`translateX(${e}px) rotate(${e/10}deg)`,a.value.style.opacity=1-Math.abs(e)/300}function B(){if(!k)return;k=!1;const n=_-v;if(Math.abs(n)>20&&_!=v)if(Math.abs(n)>100){const e=n>0?"R":"L";m.value=!1;const b=y.value[0];g.value={direction:e,card:b},e=="R"?l.addLikedUser(b.id):l.rmvLikedUser(b.id),a.value.style.transition="transform 0.3s, opacity 0.3s",a.value.style.transform=`translateX(${n>0?500:-500}px)`,a.value.style.opacity=0,setTimeout(()=>{y.value.shift(),m.value=!1,e=="R"&&W(b)},200)}else a.value.style.transition="transform 0.3s, opacity 0.3s",a.value.style.transform="translateX(0)",a.value.style.opacity=1;else a.value.style.transition="transform 0.3s, opacity 0.3s",a.value.style.transform="translateX(0)",a.value.style.opacity=1;document.removeEventListener("mousemove",j),document.removeEventListener("touchmove",j),document.removeEventListener("mouseup",B),document.removeEventListener("touchend",B)}function K(){y.value=[...V.value.filter(n=>{var e;return n.id!==((e=l==null?void 0:l.user)==null?void 0:e.id)})]}const W=n=>{o.value=n,f.createChat(n),p.value=!0},Y=()=>{p.value=!1,o.value=null};return(n,e)=>{const b=me,Z=xe;return r(),u("div",Ve,[t(ce,{modelValue:h(p),"onUpdate:modelValue":e[0]||(e[0]=$=>ne(p)?p.value=$:null),fullscreen:"",persistent:""},{default:s(()=>[h(p)?(r(),I(b,{key:0,"match-info":h(o),onClose:Y},null,8,["match-info"])):C("",!0)]),_:1},8,["modelValue"]),t(re,{"hide-on-leave":""},{default:s(()=>[h(y).length?C("",!0):(r(),u("div",be,[t(X,{class:"ma-2",size:"120",variant:"tonal",icon:"",color:"purple-darken-4",onClick:e[1]||(e[1]=$=>K())},{default:s(()=>e[3]||(e[3]=[D("Resetar "),d("br",null,null,-1),D("Stack")])),_:1})]))]),_:1}),(r(!0),u(G,null,Q(h(y),($,M)=>(r(),u("div",{class:oe(["card",{"card-active":M===0}]),key:$.id,onMousedown:E=>z(E,M),onTouchstart:E=>z(E,M)},[t(ie,null,{default:s(()=>[M===0?(r(),I(Z,{key:0,id:"innerCardRef",onClick:e[2]||(e[2]=E=>J()),card:$,"show-bio":h(m)},null,8,["card","show-bio"])):C("",!0)]),_:2},1024)],42,Ce))),128))])}}}),we=N(Ie,[["__scopeId","data-v-de4f5ac4"]]),Xe=R({__name:"home",setup(c){return(w,i)=>{const l=we;return r(),I(H,{fluid:"",class:"fill-height"},{default:s(()=>[t(S,{align:"center",justify:"center",class:"fill-height"},{default:s(()=>[t(T,{cols:"12",sm:"8",md:"6",lg:"4",xl:"3",class:"fill-height justify-center align-center d-flex"},{default:s(()=>[t(l)]),_:1})]),_:1})]),_:1})}}});export{Xe as default};
