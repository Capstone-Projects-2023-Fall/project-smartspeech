"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8198],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,p=m["".concat(c,".").concat(u)]||m[u]||h[u]||o;return r?i.createElement(p,n(n({ref:t},d),{},{components:r})):i.createElement(p,n({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,n[1]=s;for(var l=2;l<o;l++)n[l]=r[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},n="Algorithms",s={unversionedId:"system-architecture/Algorithms",id:"system-architecture/Algorithms",title:"Algorithms",description:"Below are the algorithms that will be utilized in this project.",source:"@site/docs/system-architecture/Algorithms.md",sourceDirName:"system-architecture",slug:"/system-architecture/Algorithms",permalink:"/project-smartspeech/docs/system-architecture/Algorithms",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smartspeech/edit/main/documentation/docs/system-architecture/Algorithms.md",tags:[],version:"current",lastUpdatedBy:"Zahmadgit",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-smartspeech/docs/category/system-architecture"},next:{title:"Backend",permalink:"/project-smartspeech/docs/system-architecture/Backend UML"}},c={},l=[{value:"Sketch Recognition",id:"sketch-recognition",level:3},{value:"Image Recognition",id:"image-recognition",level:3},{value:"Word Similarity Search",id:"word-similarity-search",level:3}],d={toc:l};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"algorithms"},"Algorithms"),(0,a.kt)("p",null,"Below are the algorithms that will be utilized in this project. "),(0,a.kt)("h3",{id:"sketch-recognition"},"Sketch Recognition"),(0,a.kt)("p",null,"To classify drawings we have implemented a Convolutional Neural Network (CNN) with around 100,000 parameters. This neural network was constructed with the help of the TensorFlow Keras library, exported for use in TensorFlowJS. This architecture consists of three convolutional layers followed by max-pooling layers to learn hierarchical features from the input image. Then, it flattens the output and passes it through two fully connected layers, with the final layer using softmax activation for class probabilities. The training data used was from the ",(0,a.kt)("a",{parentName:"p",href:"https://quickdraw.withgoogle.com/data"},"Google Quick, Draw! dataset"),". The model currently recognizes 38 different drawings which are all directly mapped to tiles in our dictionary. The model is lightweight enough to be run on mobile devices with a quick inference time. See the model architecture below. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CNN Architecture Diagram",src:r(6685).Z,width:"1444",height:"738"})),(0,a.kt)("h3",{id:"image-recognition"},"Image Recognition"),(0,a.kt)("p",null,"To identify what objects are being captured by the devices camera, this project has implemented an image classifier to achieve this task. The model is connected to Amazon Rekognition API, which uses a pre-trained deep learning model to label and classify images in real time. Images are sent to an S3 bucket where they are analyzed and return a response with detected objects and their associated confidence values. To learn more about the model ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/rekognition/latest/dg/labels-detect-labels-image.html"},"refer to Amazon Rekognition's documentation.")),(0,a.kt)("h3",{id:"word-similarity-search"},"Word Similarity Search"),(0,a.kt)("p",null,"In AAC, one image could represent a few different (but similar) words. For example, if someone drew a circle, we would want the system to suggest tiles such as 'circle', 'shape', or even 'ball'. Our image classification model may not always capture all of these possibilities. To get around this, we have implemented natural language processing (NLP) to capture context and similarly related words. We use the spaCy library to achieve this goal. The model essentially converts words into embedded vectors. Cosine similarity can be used between vectors to extract similar words."))}m.isMDXComponent=!0},6685:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/cnn_diagram-b7604023db532b9562ba75e1465cfa1d.png"}}]);