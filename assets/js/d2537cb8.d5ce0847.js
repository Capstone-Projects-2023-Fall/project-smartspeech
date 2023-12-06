"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[913],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||a;return r?n.createElement(u,i(i({ref:t},l),{},{components:r})):n.createElement(u,i({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5},i="Version Control",c={unversionedId:"system-architecture/version-control",id:"system-architecture/version-control",title:"Version Control",description:"Version control is maintained by git and GitHub. The standard workflow for any story / task is to create a branch with the issueid in the name. The team follows the [devname]/[issue_id] to create branches.",source:"@site/docs/system-architecture/version-control.md",sourceDirName:"system-architecture",slug:"/system-architecture/version-control",permalink:"/project-smartspeech/docs/system-architecture/version-control",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smartspeech/edit/main/documentation/docs/system-architecture/version-control.md",tags:[],version:"current",lastUpdatedBy:"Zahmadgit",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Development Environment",permalink:"/project-smartspeech/docs/system-architecture/development-environment"},next:{title:"API Specification",permalink:"/project-smartspeech/docs/category/api-specification"}},s={},p=[],l={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"version-control"},"Version Control"),(0,o.kt)("p",null,"Version control is maintained by ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GitHub"),". The standard workflow for any story / task is to create a branch with the ",(0,o.kt)("inlineCode",{parentName:"p"},"issue_id")," in the name. The team follows the ",(0,o.kt)("inlineCode",{parentName:"p"},"[dev_name]/[issue_id]")," to create branches",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". "),(0,o.kt)("p",null,"Deployment",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," stems from the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch of the repository. The main branch is protected from merges via ",(0,o.kt)("em",{parentName:"p"},"branch-protections"),": "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"branch-protection",src:r(2016).Z,width:"857",height:"584"})),(0,o.kt)("p",null,"Additionally, a workflow will be established where only code with a 80% or higher code coverage will be merged in with the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch.  "),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"john/SS-42"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"For both the backend and frontend",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},2016:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/branch-protection-91c8cbc15daf03b3e19122ca2cb04284.png"}}]);