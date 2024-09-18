(function(){"use strict";var e={1406:function(e,t,n){n.r(t);n(4114);var r=n(5130),o=n(7218),a=n(9325),i=n(5129),u=n(4373),c=n(6942);window.redirectTo=e=>{a["default"].push(e)},u.A.defaults.baseURL="https://portfolio.garycdev.com",u.A.defaults.headers={Accept:"application/json","content-type":"application/json"},(0,r.Ef)(o["default"]).use(i["default"]).use(a["default"]).use(c.A,u.A).mount("#app")},9325:function(e,t,n){n.r(t);var r=n(1387);const o=[{path:"/es",name:"es",component:()=>n.e(538).then(n.bind(n,9012)),meta:{locale:"es"}},{path:"/en",name:"en",component:()=>n.e(538).then(n.bind(n,7116)),meta:{locale:"en"}},{path:"/:pathMatch(.*)*",name:"404",component:()=>n.e(599).then(n.bind(n,7599))}],a=(0,r.aE)({history:(0,r.LA)("/"),routes:o});t["default"]=a},5129:function(e,t,n){n.r(t);var r=n(782);t["default"]=(0,r.y$)({state:{},getters:{},mutations:{expandCursor(){document.getElementById("cursor").classList.add("scale-cursor")},expandCursorLeave(){document.getElementById("cursor").classList.remove("scale-cursor")}},actions:{},modules:{}})},7218:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(6768);function o(e,t,n,o,a,i){const u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(u)}n(4114);var a={name:"AppView",methods:{async getStatus(){try{const e=await this.axios.get("/");console.log(e.data)}catch(e){console.log(e)}}},created(){"true"===document.getElementsByTagName("body")[0]&&document.getElementsByTagName("body")[0].append("<div class='preloader'><div><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div></div>"),this.getStatus(),this.axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=e37f8d48131e45d48ceb68dbc0103b3c").then((e=>{const t=e.data.country_code2;"MX"===t||"AR"===t||"CO"===t||"CL"===t||"PE"===t||"VE"===t||"UY"===t||"PY"===t||"BO"===t||"EC"===t?(document.getElementsByTagName("html")[0].setAttribute("lang","es"),this.$router.push("/es")):(document.getElementsByTagName("html")[0].setAttribute("lang","en"),this.$router.push("/en"))})).catch((e=>{console.error("Error fetching geolocation data:",e),document.getElementsByTagName("html")[0].setAttribute("lang","en"),this.$router.push("/en")}))}},i=n(1241);const u=(0,i.A)(a,[["render",o]]);var c=u}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{538:"ecbb61fb",599:"601e0cd3"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".c1d12f7b.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portfolio:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&n.type,u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=u,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={538:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var d=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1406)}));r=n.O(r)})();
//# sourceMappingURL=app.6cc77dfb.js.map