(()=>{"use strict";var e,a,d,f,t,r={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var d=c[e]={id:e,loaded:!1,exports:{}};return r[e].call(d.exports,d,d.exports,b),d.loaded=!0,d.exports}b.m=r,b.c=c,e=[],b.O=(a,d,f,t)=>{if(!d){var r=1/0;for(i=0;i<e.length;i++){d=e[i][0],f=e[i][1],t=e[i][2];for(var c=!0,o=0;o<d.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](d[o])))?d.splice(o--,1):(c=!1,t<r&&(r=t));if(c){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[d,f,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,d({}),d([]),d(d)];for(var c=2&f&&e;"object"==typeof c&&!~a.indexOf(c);c=d(c))Object.getOwnPropertyNames(c).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var d in a)b.o(a,d)&&!b.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,d)=>(b.f[d](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",525:"c4ef60dc",686:"debda829",713:"b5fae9ec",738:"8e6b3daa",740:"986fb218",1028:"59ed80ba",1270:"f85a1a6c",1286:"4d4c5f79",1324:"1f31c671",1439:"ff35f1fc",1587:"c5110154",1650:"fc3d0314",1947:"8feb6780",1996:"9ca7995a",3085:"1f391b9e",3196:"a854a899",3206:"f8409a7e",3211:"83adae89",3470:"97b83a15",3669:"080c1936",3783:"208c22c0",3860:"fb650936",3864:"ca0370bc",3961:"ed7b2b8d",4033:"72dce597",4195:"c4f5d8e4",4557:"6ad63dfe",4655:"726a7029",5216:"863266b1",5509:"61dd07e5",6225:"c0b1a2d5",6582:"f8907193",6585:"61760bca",6654:"5410c81d",6680:"d405feaa",6711:"ecf98249",6789:"d382fc43",6937:"c28e829f",7340:"a2b15435",7349:"db8db704",7414:"393be207",7607:"651d1379",7799:"fdeefd99",7918:"17896441",8003:"e0684f18",8321:"8952a0bd",8525:"8c39825e",8612:"f0ad3fbb",8794:"5bc0003a",9514:"1be78505",9617:"bafd4460",9817:"14eb3368"}[e]||e)+"."+{53:"98578b7d",525:"415e43ff",686:"e13ffe17",713:"aa44bf05",738:"d4dc3274",740:"b058a5dd",1028:"dd41fa24",1270:"d6cb96fd",1286:"51cbd536",1324:"7ad682b8",1439:"5cf21b36",1587:"08d5474c",1650:"c9df18eb",1947:"f1d4596f",1996:"d1845439",2547:"d212db1e",3085:"3108908b",3196:"761d84b4",3206:"7aaa732d",3211:"5229bb1d",3470:"307343cf",3669:"f8683bb4",3783:"5dc01be3",3860:"e1472e9c",3864:"fca4c88a",3961:"0e1d31f7",4033:"84b9d57f",4195:"181d05c0",4557:"21a27b43",4655:"b1174455",4912:"7511b8d6",4972:"e70ff803",5216:"2345ce57",5509:"8d66c793",6225:"19aa689c",6582:"f02f8267",6585:"df8d33a2",6654:"493daff9",6680:"435a5f75",6711:"67bc6468",6789:"38e7dfa2",6937:"f5fc739f",7340:"2d180f6d",7349:"286ab557",7414:"853060ee",7607:"c8ae8e18",7799:"bb621444",7918:"5061b133",8003:"cd2534b7",8321:"cba31e20",8525:"b3415265",8612:"31e0dc56",8794:"6ad02ba2",9514:"ce69a6d8",9617:"0e3ba98c",9817:"6e502322"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},t="create-project-docs:",b.l=(e,a,d,r)=>{if(f[e])f[e].push(a);else{var c,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+d){c=l;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",t+d),c.src=e),f[e]=[a];var u=(a,d)=>{c.onerror=c.onload=null,clearTimeout(s);var t=f[e];if(delete f[e],c.parentNode&&c.parentNode.removeChild(c),t&&t.forEach((e=>e(d))),a)return a(d)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/project-smartspeech/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53",c4ef60dc:"525",debda829:"686",b5fae9ec:"713","8e6b3daa":"738","986fb218":"740","59ed80ba":"1028",f85a1a6c:"1270","4d4c5f79":"1286","1f31c671":"1324",ff35f1fc:"1439",c5110154:"1587",fc3d0314:"1650","8feb6780":"1947","9ca7995a":"1996","1f391b9e":"3085",a854a899:"3196",f8409a7e:"3206","83adae89":"3211","97b83a15":"3470","080c1936":"3669","208c22c0":"3783",fb650936:"3860",ca0370bc:"3864",ed7b2b8d:"3961","72dce597":"4033",c4f5d8e4:"4195","6ad63dfe":"4557","726a7029":"4655","863266b1":"5216","61dd07e5":"5509",c0b1a2d5:"6225",f8907193:"6582","61760bca":"6585","5410c81d":"6654",d405feaa:"6680",ecf98249:"6711",d382fc43:"6789",c28e829f:"6937",a2b15435:"7340",db8db704:"7349","393be207":"7414","651d1379":"7607",fdeefd99:"7799",e0684f18:"8003","8952a0bd":"8321","8c39825e":"8525",f0ad3fbb:"8612","5bc0003a":"8794","1be78505":"9514",bafd4460:"9617","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,d)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)d.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((d,t)=>f=e[a]=[d,t]));d.push(f[2]=t);var r=b.p+b.u(a),c=new Error;b.l(r,(d=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var t=d&&("load"===d.type?"missing":d.type),r=d&&d.target&&d.target.src;c.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",c.name="ChunkLoadError",c.type=t,c.request=r,f[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,d)=>{var f,t,r=d[0],c=d[1],o=d[2],n=0;if(r.some((a=>0!==e[a]))){for(f in c)b.o(c,f)&&(b.m[f]=c[f]);if(o)var i=o(b)}for(a&&a(d);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},d=self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})(),b.nc=void 0})();