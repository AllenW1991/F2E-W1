(function(t){function e(e){for(var r,o,u=e[0],i=e[1],s=e[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},c={app:0},a=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1ceaaf22":"3c962b51","chunk-255c2c27":"a62c03fa","chunk-2774cf46":"c5333390","chunk-5885328c":"ead69ec4","chunk-4d2e69aa":"10f5e2a9","chunk-fe6ad806":"58162d27"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-1ceaaf22":1,"chunk-255c2c27":1,"chunk-2774cf46":1,"chunk-5885328c":1,"chunk-4d2e69aa":1,"chunk-fe6ad806":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1ceaaf22":"f11d1e5c","chunk-255c2c27":"9c6a7b28","chunk-2774cf46":"7c0bae82","chunk-5885328c":"ce7a1ce9","chunk-4d2e69aa":"0fe66fbd","chunk-fe6ad806":"96544f96"}[t]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],p.parentNode.removeChild(p),n(a)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=a);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(t);var l=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/F2E-W1/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=f;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["i"])("TAIWAN TRAVEL"),a={class:"link"},u=Object(r["i"])("旅遊情報"),i=Object(r["i"])("景點查詢"),s=Object(r["i"])("美食推薦"),f=Object(r["i"])("旅宿資訊");function l(t,e){var n=Object(r["z"])("router-link"),l=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",o,[Object(r["j"])(n,{to:"/"},{default:Object(r["H"])((function(){return[c]})),_:1}),Object(r["g"])("div",a,[Object(r["j"])(n,{to:"/"},{default:Object(r["H"])((function(){return[u]})),_:1}),Object(r["j"])(n,{to:"/spots"},{default:Object(r["H"])((function(){return[i]})),_:1}),Object(r["j"])(n,{to:"/food"},{default:Object(r["H"])((function(){return[s]})),_:1}),Object(r["j"])(n,{to:"/hostel"},{default:Object(r["H"])((function(){return[f]})),_:1})])]),Object(r["j"])(l)],64)}n("8b70");var p=n("6b0d"),d=n.n(p);const h={},b=d()(h,[["render",l]]);var m=b,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),O=[{path:"/",name:"Home",component:function(){return n.e("chunk-fe6ad806").then(n.bind(null,"bb51"))}},{path:"/spots",name:"Spots",component:function(){return Promise.all([n.e("chunk-1ceaaf22"),n.e("chunk-2774cf46")]).then(n.bind(null,"b63a"))}},{path:"/food",name:"Food",component:function(){return n.e("chunk-4d2e69aa").then(n.bind(null,"ae7f"))}},{path:"/hostel",name:"Hostel",component:function(){return Promise.all([n.e("chunk-1ceaaf22"),n.e("chunk-5885328c")]).then(n.bind(null,"3de6"))}},{path:"/spot",name:"Spot",component:function(){return Promise.all([n.e("chunk-1ceaaf22"),n.e("chunk-255c2c27")]).then(n.bind(null,"382c"))}}],j=Object(v["a"])({history:Object(v["b"])("/F2E-W1/"),routes:O});j.afterEach((function(t,e,n){window.scrollTo({top:0,behavior:"smooth"})}));var k=j,g=n("bc3a"),y=n.n(g),S=n("130e"),w=n("5502"),T=Object(w["a"])({state:{activeData:{},wrongPic:"@/assets/wrong.png",keyWord:"",class:"",defaultUrl:"https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?%24top=20&%24format=JSON",keyWordUrl:"https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name,'')&$top=20&$format=JSON",classUrl:"https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Class1,'')&$top=20&$format=JSON",spots:[],city:"",getData:!1},mutations:{GET_DATA:function(t,e){t.activeData=e,t.getData=!0},CHANGE_URL:function(t){t.defaultUrl="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/".concat(t.city,"?%24top=20&%24format=JSON"),t.keyWordUrl="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(ScenicSpotName,'".concat(t.keyWord,"')&$top=20&$format=JSON"),t.classUrl="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Class1,'".concat(t.class,"')&$top=20&$format=JSON")},CLEAR_DATA:function(t){t.city="",t.keyWord=""}}});Object(r["d"])(m).use(T).use(k).use(S["a"],y.a).mount("#app")},"8b70":function(t,e,n){"use strict";n("9a7d")},"9a7d":function(t,e,n){}});
//# sourceMappingURL=app.5d4ba677.js.map