(()=>{"use strict";var e={7729:(e,t,r)=>{r(8964),r(702);var n=r(1957),o=r(1947),a=r(499),i=r(9835);function l(e,t,r,n,o,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var c=r(1639);const p=(0,c.Z)(s,[["render",l]]),d=p;var h=r(3340),u=r(3746);const f=(0,h.h)((()=>{const e=(0,u.WB)();return e}));var m=r(8339);const b=[{path:"/",component:()=>Promise.all([r.e(736),r.e(552)]).then(r.bind(r,8552)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(677)]).then(r.bind(r,6677))}]},{path:"/login",component:()=>Promise.all([r.e(736),r.e(77)]).then(r.bind(r,9947)),children:[{path:"",name:"login",component:()=>Promise.all([r.e(736),r.e(655)]).then(r.bind(r,2655))}]},{path:"/register",component:()=>Promise.all([r.e(736),r.e(77)]).then(r.bind(r,9947)),children:[{path:"",name:"register",component:()=>Promise.all([r.e(736),r.e(947)]).then(r.bind(r,7947))}]},{path:"/recipes",component:()=>Promise.all([r.e(736),r.e(77)]).then(r.bind(r,9947)),children:[{path:"",name:"recipes",component:()=>Promise.all([r.e(736),r.e(620)]).then(r.bind(r,5620))},{path:":id",name:"recipesId",component:()=>Promise.all([r.e(736),r.e(993)]).then(r.bind(r,1993))}]},{path:"/favorites",component:()=>Promise.all([r.e(736),r.e(77)]).then(r.bind(r,9947)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(234)]).then(r.bind(r,9234))}]},{path:"/fridge",component:()=>Promise.all([r.e(736),r.e(77)]).then(r.bind(r,9947)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(234)]).then(r.bind(r,9234))},{path:"search/:id",name:"fridgeSearch",component:()=>Promise.all([r.e(736),r.e(39)]).then(r.bind(r,6039))}]},{path:"/settings",component:()=>Promise.all([r.e(736),r.e(77)]).then(r.bind(r,9947)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(781)]).then(r.bind(r,5781))}]},{path:"/gall",component:()=>Promise.all([r.e(736),r.e(77)]).then(r.bind(r,9947)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(387)]).then(r.bind(r,6387))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(372)]).then(r.bind(r,6372))}],g=b,v=(0,h.BC)((function(){const e=m.PO,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("/")});return t}));async function y(e,t){const r=e(d);r.use(o.Z,t);const n="function"===typeof f?await f({}):f;r.use(n);const i=(0,a.Xl)("function"===typeof v?await v({store:n}):v);return n.use((({store:e})=>{e.router=i})),{app:r,store:n,router:i}}var P=r(6827);const w={config:{},plugins:{Notify:P.Z}},k="/";async function j({app:e,router:t,store:r},n){let o=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:l,publicPath:k})}catch(s){return s&&s.url?void i(s.url):void console.error("[Quasar] boot error:",s)}!0!==o&&(e.use(t),e.mount("#q-app"))}y(n.ri,w).then((e=>Promise.all([Promise.resolve().then(r.bind(r,9242)),Promise.resolve().then(r.bind(r,4593)),Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));j(e,r)}))))},9242:(e,t,r)=>{r.r(t)},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>l,axios:()=>a.a,axiosOpenCharge:()=>s,default:()=>p,server:()=>c});var n=r(3340),o=r(9981),a=r.n(o);const i="Bearer "+localStorage.token;a().defaults.headers.common.Authorization=i;const l=a().create({baseURL:"https://api.example.com"}),s=a().create({baseURL:"https://jsonplaceholder.typicode.com/posts"}),c=a().create({baseURL:"https://likelida.com/api"});c.defaults.withCredentials=!0;const p=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$axiosOpenCharge=s,e.config.globalProperties.$server=c,e.config.globalProperties.$api=l}))},4593:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(3276);const o={Inrgedients:"Inrgedients",Preparation:"Preparation",success:"Action was successful"},a={Inrgedients:"Ингридиенты",Preparation:"Приготовление",success:"Action was successful"},i={"en-US":o,ru:a},l=({app:e})=>{const t=(0,n.o)({locale:"ru",globalInjection:!0,messages:i});e.use(t)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(p=0;p<e.length;p++){for(var[n,o,a]=e[p],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"/likelida/js/"+e+"."+{39:"a328b66f",77:"ebb582d5",234:"41de72f9",372:"6603b8fd",387:"9d56a701",552:"b9d9f198",620:"7999fa09",655:"a76c932d",677:"1e0ab8c2",781:"03f9294f",947:"f4b30610",993:"cf728a8f"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"cede1d47",655:"f4e428f2",736:"e790c34e",947:"f4e428f2"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="likelida-project:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var d=c[p];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var h=(t,r)=>{l.onerror=l.onload=null,clearTimeout(u);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={655:1,947:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,s=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var p=s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},n=globalThis["webpackChunklikelida_project"]=globalThis["webpackChunklikelida_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(7729)));n=r.O(n)})();
