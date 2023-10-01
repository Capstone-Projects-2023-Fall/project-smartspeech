"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?i.createElement(h,a(a({ref:t},d),{},{components:r})):i.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},a=void 0,s={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"design",description:"Algorithms",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-smartspeech/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smartspeech/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Parth Patel",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-smartspeech/docs/category/system-architecture"},next:{title:"API Specification",permalink:"/project-smartspeech/docs/category/api-specification"}},c={},l=[{value:"Algorithms",id:"algorithms",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"algorithms"},"Algorithms"),(0,n.kt)("p",null,"An obvious algorithm required for this project is an image classification model. This is accomplished with the help of deep learning. While a custom model could be built, it would be difficult and expensive to find training data and to have sufficient hardware to effectively host this model. To solve this problem, a few different resources can be utilized. The first is Digital Ink Recognition by Google, which is a free model built specifically to recognize hand-drawn sketches. The problem with this model is that it would be difficult to implement into a PWA. Another option is OFA, which is a visual question-answering system. It takes an image and a text prompt as input and outputs text answering the question. Other API services for image recognition exist; however, they are costly and trained on images different from what we will be using. "),(0,n.kt)("p",null,"In AAC, one image could represent a few different (but similar) words. For example, if someone drew a circle, we would want the system to suggest tiles such as 'circle', 'shape', or even 'ball'. Our image classification model may not always capture all of these possibilities. To get around this, we need to implement some type of natural language processing (NLP) to capture context and similarly related words. This is not a trivial task; however, we can use FastText from Facebook Research to achieve this goal. FastText works by first preparing a dataset (which will be the dictionary of all AAC words), training the model, and then using the model. The model essentially converts words into embedded vectors. Cosine similarity can be used between vectors to extract similar words."))}p.isMDXComponent=!0}}]);