if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const f=e=>t(e,o),c={module:{uri:o},exports:r,require:f};s[o]=Promise.all(i.map((e=>c[e]||f(e)))).then((e=>(n(...e),r)))}}define(["./workbox-4723e66c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/builds/latest.json",revision:"b79f7ca7ef0d2b8d7e5870ffbd75cbdc"},{url:"assets/builds/meta/19f8f8b3-73ac-444e-a323-b518879e2515.json",revision:null},{url:"manifest.webmanifest",revision:"10efdeb8130f7eccd0c093774467d2af"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/feater/")))}));
