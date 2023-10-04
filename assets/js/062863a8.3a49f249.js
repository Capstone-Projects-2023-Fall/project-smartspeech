"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8198],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),p=o,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||a;return r?i.createElement(h,n(n({ref:t},d),{},{components:r})):i.createElement(h,n({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,n[1]=s;for(var l=2;l<a;l++)n[l]=r[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},n="Algorithms",s={unversionedId:"system-architecture/Algorithms",id:"system-architecture/Algorithms",title:"Algorithms",description:"Below are the algorithms that will be utilized in this project.",source:"@site/docs/system-architecture/Algorithms.md",sourceDirName:"system-architecture",slug:"/system-architecture/Algorithms",permalink:"/project-smartspeech/docs/system-architecture/Algorithms",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smartspeech/edit/main/documentation/docs/system-architecture/Algorithms.md",tags:[],version:"current",lastUpdatedBy:"LandenLloyd",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-smartspeech/docs/category/system-architecture"},next:{title:"Backend",permalink:"/project-smartspeech/docs/system-architecture/Backend UML"}},c={},l=[{value:"Image Classification",id:"image-classification",level:3},{value:"Word Similarity Search",id:"word-similarity-search",level:3}],d={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"algorithms"},"Algorithms"),(0,o.kt)("p",null,"Below are the algorithms that will be utilized in this project. "),(0,o.kt)("h3",{id:"image-classification"},"Image Classification"),(0,o.kt)("p",null,"An obvious algorithm required for this project is an image classification model. This is accomplished with the help of deep learning. While a custom model could be built, it would be difficult and expensive to find training data and to have sufficient hardware to effectively host this model. To solve this problem, a few different resources can be utilized. The first is Digital Ink Recognition by Google, which is a free model built specifically to recognize hand-drawn sketches. The problem with this model is that it would be difficult to implement into a PWA. Another option is OFA, which is a visual question-answering system. It takes an image and a text prompt as input and outputs text answering the question. Other API services for image recognition exist; however, they are costly and trained on images different from what we will be using. "),(0,o.kt)("h3",{id:"word-similarity-search"},"Word Similarity Search"),(0,o.kt)("p",null,"In AAC, one image could represent a few different (but similar) words. For example, if someone drew a circle, we would want the system to suggest tiles such as 'circle', 'shape', or even 'ball'. Our image classification model may not always capture all of these possibilities. To get around this, we need to implement some type of natural language processing (NLP) to capture context and similarly related words. This is not a trivial task; however, we can use FastText from Facebook Research to achieve this goal. FastText works by first preparing a dataset (which will be the dictionary of all AAC words), training the model, and then using the model. The model essentially converts words into embedded vectors. Cosine similarity can be used between vectors to extract similar words."))}m.isMDXComponent=!0}}]);