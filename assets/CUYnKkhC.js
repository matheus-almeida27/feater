import{d as y,H as C,M,I as N,u as L,r as B,j as $,K as l,A as n,v as o,x as r,t as u,L as g,O as b,P as A,z as d,N as j,y as _,_ as z}from"./B-haekj4.js";import{V as F,a as P}from"./Ogo7Rtt8.js";import{V as w,a as D}from"./B_DntKQQ.js";import{V as E}from"./C-ojXM-K.js";import{V as H}from"./CI60m_iN.js";import"./DP4A1fb_.js";import"./DeYrWc4u.js";import"./Cr_TDodh.js";const K={key:0,class:"no-matches"},O={class:"match-name"},R={key:0},T={class:"match-last-msg"},U=y({__name:"index",setup(q){const i=C(),V=M(),x=N(),v=L(),k=B(x.chats),m=$(()=>{var e;const s=(e=i.user)==null?void 0:e.id;return k.value.filter(t=>t.participants.includes(s||0))});function p(s){var a;const e=(a=i.user)==null?void 0:a.id,t=s.participants.find(c=>c!==e);return V.users.find(c=>c.id===t)}function I(s){const e=p(s);return(e==null?void 0:e.profileImage)||""}function f(s){const e=p(s);return(e==null?void 0:e.name)||"Usuário"}const h=s=>{var a;let e=s.messages[s.messages.length-1],t=e?e.sender===((a=i.user)==null?void 0:a.id)?`Você: ${e.text}`:e.text:"";return t=t.length>30?`${t.substring(0,30)}...`:t,t};function S(s){v.push(`/messages/${s.id}`)}return(s,e)=>(o(),l(F,{fluid:"",class:"d-flex flex-column align-center pt-4 justify-center pb-14 fill-height"},{default:n(()=>[e[0]||(e[0]=r("h1",{class:"matches-title"},"Seus Feats",-1)),g(m).length===0?(o(),u("div",K," Nenhum feat encontrado ainda :( ")):(o(),l(w,{key:1,class:"matches-list pa-4"},{default:n(()=>[(o(!0),u(b,null,A(g(m),t=>(o(),l(D,{key:t.id,onClick:a=>S(t),class:"match-item py-2 mb-4",rounded:"xl",elevation:"5"},{prepend:n(()=>[d(P,{size:"56",class:"match-avatar"},{default:n(()=>[d(H,{contain:"",src:I(t),alt:f(t)},null,8,["src","alt"])]),_:2},1024)]),title:n(()=>[r("div",null,[r("span",O,_(f(t)),1)]),h(t)!==""?(o(),u("div",R,[r("span",T,_(h(t)),1)])):j("",!0)]),append:n(()=>[d(E,{icon:"mdi-chevron-right"})]),_:2},1032,["onClick"]))),128))]),_:1}))]),_:1}))}}),te=z(U,[["__scopeId","data-v-c714e57e"]]);export{te as default};
