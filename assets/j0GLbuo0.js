import{_ as L}from"./mP3skVTv.js";import{d as E,H as F,W as $,I as H,r as V,a2 as K,a3 as O,j as P,o as W,a4 as C,t as p,z as a,A as s,X as k,L as n,V as b,v as f,a5 as X,B as v,y as x,Z as Y,$ as Z,x as B,Y as q,a6 as G,n as J,_ as Q}from"./cUe4mTCf.js";import{V as ee,c as te}from"./BAfAneul.js";import{V as ae,a as se}from"./Brw6ziYY.js";import{V as oe}from"./CbSqqrhY.js";import{V as ne,a as re}from"./C9RQEfCV.js";import{V as ie}from"./mS3c2bZG.js";import{V as le}from"./THLEgpz9.js";import{V as de,R as me}from"./DZuc5hJg.js";import{a as S,i as ce}from"./DfN7agZ3.js";import{V as ue}from"./CIogKmCZ.js";import"./Co0LjnBq.js";import"./Clp16afx.js";import"./Cc-TrS38.js";import"./TPuJQ0JC.js";import"./B8sux8k-.js";import"./BaYPCYCK.js";import"./BtQliLNP.js";import"./BVnzG4XD.js";const pe={key:0,class:"message-time"},fe={class:"input-wrapper"},ge=E({__name:"[chatId]",setup(Ve){const m=F(),T=$(),D=H(),u=V(!1),h=V(!1),M=V(),U=K(),R=O(),z=Number(U.params.chatId),r=D.chats.find(l=>l.id===z);r||R.push("/matches");const d=P(()=>{var i;const l=(i=m.user)==null?void 0:i.id,t=r==null?void 0:r.participants.find(e=>e!==l);return T.users.find(e=>e.id===t)}),c=V("");let g;function N(l){const t=new Date(l),i={day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"};return t.toLocaleString("pt-BR",i)}function I(){var i;if(!c.value.trim()||!r)return;const l={id:Date.now(),chatId:r.id,sender:((i=m==null?void 0:m.user)==null?void 0:i.id)||0,text:c.value.trim(),timestamp:new Date().toISOString()};r.messages.push(l),c.value="";let t=["Sim, concordo!","Beleza, bora f1 então!","Claro, bora!","Com certeza meu mano","vambora cpx!","Vamos lá!"];setTimeout(()=>{var o;const e={id:Date.now()+1,chatId:r.id,sender:((o=d.value)==null?void 0:o.id)||0,text:t[Math.floor(Math.random()*t.length)],timestamp:new Date().toISOString()};r.messages.push(e),_()},1200),_()}function _(){C(()=>{g&&g.scrollTo(0,g.scrollHeight)})}function j(){d.value&&(M.value=d.value.id,u.value=!0)}function A(){J("/messages")}return W(()=>{C(()=>{g=document.getElementById("message_container"),_()})}),(l,t)=>{const i=L;return f(),p(b,null,[a(ae,{dark:"",app:"",flat:"",style:{background:"transparent",backdropFilter:"blur(5px)"}},{default:s(()=>[a(le,{icon:"",size:"large",onClick:A},{default:s(()=>[a(de,null,{default:s(()=>t[4]||(t[4]=[v("mdi-arrow-left")])),_:1})]),_:1}),X((f(),p("div",{onClick:j,class:"d-flex w-100 h-100 align-center cursor-pointer rounde-pill"},[a(re,{size:"40",class:"ml-0 mr-3"},{default:s(()=>{var e,o;return[a(ee,{contain:"",src:((e=n(d))==null?void 0:e.profileImage)||"",alt:(o=n(d))==null?void 0:o.name},null,8,["src","alt"])]}),_:1}),a(se,{class:"font-weight-light"},{default:s(()=>{var e;return[v(x(((e=n(d))==null?void 0:e.name)||"Chat"),1)]}),_:1})])),[[me,!0]])]),_:1}),a(oe,{modelValue:n(u),"onUpdate:modelValue":t[1]||(t[1]=e=>k(u)?u.value=e:null),transition:"dialog-bottom-transition","content-class":"bg-surface d-flex justify-center align-center",class:"d-flex justify-center align-center",fullscreen:""},{default:s(()=>[a(S,{cols:"12",sm:"7",md:"6",lg:"4",xl:"3",class:"d-flex justify-center align-center ma-0 pa-0"},{default:s(()=>[a(i,{matchedUser:n(d),onClose:t[0]||(t[0]=e=>u.value=!1)},null,8,["matchedUser"])]),_:1})]),_:1},8,["modelValue"]),a(ne,{fluid:"",class:"overflow-y-auto d-flex align-center flex-column pa-0 message-container"},{default:s(()=>[a(S,{cols:"12",lg:"6",md:"8",sm:"10",class:"d-flex justify-center"},{default:s(()=>[a(ue,{class:"pa-0 bg-transparent w-100","two-line":""},{default:s(()=>{var e;return[(f(!0),p(b,null,Y(((e=n(r))==null?void 0:e.messages)||[],o=>{var w,y;return f(),p("div",{key:o.id,class:Z([{sent:o.sender===((w=n(m).user)==null?void 0:w.id),received:o.sender!==((y=n(m).user)==null?void 0:y.id)},"message-item"])},[B("div",{class:"message-text",onClick:t[2]||(t[2]=he=>h.value=!n(h))},[v(x(o.text)+" ",1),a(te,null,{default:s(()=>[n(h)?(f(),p("div",pe,x(N(o.timestamp)),1)):q("",!0)]),_:2},1024)])],2)}),128))]}),_:1})]),_:1})]),_:1}),a(ie,{app:"",class:"glass-effect",height:"auto"},{default:s(()=>[B("div",fe,[a(ce,{modelValue:n(c),"onUpdate:modelValue":t[3]||(t[3]=e=>k(c)?c.value=e:null),placeholder:"Digite sua mensagem...",variant:"solo-filled",density:"comfortable",rounded:"xl",class:"container-input",height:"30","hide-details":"",color:"purple-darken-3",onKeyup:G(I,["enter"]),"append-inner-icon":"mdi-send","onClick:appendInner":I},null,8,["modelValue"])])]),_:1})],64)}}}),Ae=Q(ge,[["__scopeId","data-v-8afc9f57"]]);export{Ae as default};
