"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="System Overview",s={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-smartspeech/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smartspeech/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"Tesla",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Algorithms",permalink:"/project-smartspeech/docs/requirements/Algorithms"},next:{title:"System Block Diagram",permalink:"/project-smartspeech/docs/requirements/system-block-diagram"}},l={},p=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system-overview"},"System Overview"),(0,n.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,n.kt)("p",null,"Many groups of people cannot speak verbally or have lost the ability to do so. This includes people with conditions such as autism, cerebral palsy, ALS, stroke survivors with aphasia, traumatic brain injury, developmental disorders, and many more. One of the widespread solutions to deliver speech to these individuals are AAC apps. These apps contain a navigable grid of images paired with words that a user will select to ",(0,n.kt)("em",{parentName:"p"},"say")," the word they require. An image must be paired with the word as many of the end users of AAC apps cannot read.   "),(0,n.kt)("p",null,"However, these AAC apps are an imperfect solution to a large problem. Users are required to navigate through ",(0,n.kt)("strong",{parentName:"p"},"nested")," menus to get to the word they need making the initial learning curve for alternative communication apps steep",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". The training process involves having a Speech-Language Pathologist (SLP) onsite and extensive training for any instructor using AAC tools. "),(0,n.kt)("p",null,"SmartSpeech aims to resolve these issues by altering the AAC experience with Machine Learning (ML) and Image Recognition. Currently, the primary deterrent for AAC apps is having to navigate very complex menus to get to relevant words. The proposed solution includes a drawing canvas where a user can draw the item they wish to represent and an ML model would suggest related items to say which eliminates the need to interface with complex menus to find required words. In addition to a drawing canvas, SmartSpeech will also take images of a user's environment and suggest detected objects to make it easier to inject them into regular conversation rather than having to find them in the standard menu. The overarching goal of SmartSpeech is to reduce the reliance of AAC users on other people for communication by making it easier for them to find relevant words which will help them stay more engaged in conversations."),(0,n.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,n.kt)("p",null,"The drawing aspect of SmartSpeech will be handled with ",(0,n.kt)("inlineCode",{parentName:"p"},"HTMLCanvas")," on the fronted due to its extensive support for both mouse and touch/stylus based interactions. When a user is done drawing their image, it will be sent to the backend which will compute the drawing to word association with varying methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Custom drawing recognition model "),(0,n.kt)("li",{parentName:"ul"},"External Image Recognition provider (ex: AWS Rekognition, OpenAI)"),(0,n.kt)("li",{parentName:"ul"},"Ensemble of Image Recognition models")),(0,n.kt)("p",null,"This same method will be applied to assist in recognize the user's surroundings. The backend will be the main actor in helping users avoid large menus by suggesting appropriate words based on drawings. The backend will be containerized or run on virtual machines in the cloud to make it easy to scale.  "),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"This tool is novel in the sense that other AAC tools like Fluent AAC",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," and AssistiveWare",(0,n.kt)("sup",{parentName:"p",id:"fnref-3"},(0,n.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," are focused on adding more symbols and expressions but do not integrate intelligence into their AAC app like ",(0,n.kt)("em",{parentName:"p"},"SmartSpeech"),". Most other competitor apps are very expensive with many being nearly three hundred dollars",(0,n.kt)("sup",{parentName:"p",id:"fnref-4"},(0,n.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),". In short, ",(0,n.kt)("em",{parentName:"p"},"SmartSpeech")," aims to differentiate itself from alternative AAC Apps by taking an open-source approach of utilizing drawing and image recognition to help users utilize their AAC devices.  "),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},(0,n.kt)("a",{parentName:"li",href:"https://ussaac.org/speakup/articles/key-aac-issues/"},"https://ussaac.org/speakup/articles/key-aac-issues/"),(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Competitor - Fluent AAC: ",(0,n.kt)("a",{parentName:"li",href:"https://www.fluentaac.com/"},"https://www.fluentaac.com/"),(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-3"},"Competitor - AssistiveWare AAC: ",(0,n.kt)("a",{parentName:"li",href:"https://www.assistiveware.com/products"},"https://www.assistiveware.com/products"),(0,n.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-4"},"AAC Pricing - ",(0,n.kt)("a",{parentName:"li",href:"https://www.speechandlanguagekids.com/aac-apps-review/"},"https://www.speechandlanguagekids.com/aac-apps-review/"),(0,n.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);