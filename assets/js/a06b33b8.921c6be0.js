"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[5385],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6869:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:6},a="How to create Tiles",c={unversionedId:"system-architecture/Tile",id:"system-architecture/Tile",title:"How to create Tiles",description:"Following is the process for creating tiles in the SmartSpeech app.",source:"@site/docs/system-architecture/Tile.md",sourceDirName:"system-architecture",slug:"/system-architecture/Tile",permalink:"/project-smartspeech/docs/system-architecture/Tile",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smartspeech/edit/main/documentation/docs/system-architecture/Tile.md",tags:[],version:"current",lastUpdatedBy:"Zahmadgit",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Version Control",permalink:"/project-smartspeech/docs/system-architecture/version-control"},next:{title:"API Specification",permalink:"/project-smartspeech/docs/category/api-specification"}},s={},p=[{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-tiles"},"How to create Tiles"),(0,o.kt)("p",null,"Following is the process for creating tiles in the SmartSpeech app."),(0,o.kt)("h3",{id:"step-1"},"Step 1"),(0,o.kt)("p",null,"Add an image asset under appropriate category in ","[C:\\Users\\borpu\\Documents\\GitHub\\project-smartspeech\\frontend\\public\\AAC_assets\\img]"),(0,o.kt)("h3",{id:"step-2"},"Step 2"),(0,o.kt)("p",null,"In ","[C:\\Users\\borpu\\Documents\\GitHub\\project-smartspeech\\frontend\\src\\data\\AAC]",", create an entry in the appropriate "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'butterfly: {\n        image: "/AAC_assets/img/animals/butterfly.png",\n        text: "Butterfly",\n        sound: "Butterfly",\n        tileColor: THINGS_TILES_COLOR,\n      },')),(0,o.kt)("h3",{id:"step-3"},"Step 3"))}u.isMDXComponent=!0}}]);