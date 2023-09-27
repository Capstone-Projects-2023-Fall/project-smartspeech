"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:4},s="Features and Requirements",l={unversionedId:"requirements/features-and-requirements",id:"requirements/features-and-requirements",title:"Features and Requirements",description:"Functional Requirements",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-smartspeech/docs/requirements/features-and-requirements",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smartspeech/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"ruuffian",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-smartspeech/docs/requirements/general-requirements"},next:{title:"Use-case descriptions",permalink:"/project-smartspeech/docs/requirements/use-case-descriptions"}},o={},u=[{value:"Functional Requirements",id:"functional-requirements",level:2},{value:"Non-Functional Requirements",id:"non-functional-requirements",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"features-and-requirements"},"Features and Requirements"),(0,n.kt)("h2",{id:"functional-requirements"},"Functional Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Upon first launch, the system will allow the user to sign up for an account."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The system must allow users to login by entering their email and password."),(0,n.kt)("li",{parentName:"ul"},"An external identity provider service will store and maintain user identity information while also providing security for personal information."),(0,n.kt)("li",{parentName:"ul"},"The user has the option to not create an account, however this may limit functionality and personalization."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After account setup (regardless of whether an account was created), the system will present the primary interface, enabling the user to instantly access key functionalities."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The user can draw an object, prompting the system to display tiles that resemble the perceived object based on the drawing."),(0,n.kt)("li",{parentName:"ul"},"If a tile correctly represents the drawn object, users can select it, causing the system to audibly announce the object's name."),(0,n.kt)("li",{parentName:"ul"},"If the system fails to recognize the user input or the user doesn't identify a correct tile, they have options to partially erase their drawing or restart from scratch."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If a tile is not in the system's database, users have the capability to manually add it."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Recognizing that certain users may have limitations, the process can be facilitated with the assistance of a caregiver. "),(0,n.kt)("li",{parentName:"ul"},"The user will illustrate the object and assign a label, enabling the system to identity it in future interactions."),(0,n.kt)("li",{parentName:"ul"},"This feature is exclusive to users that created accounts, ensuring consistent reference across different devices. "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If a user permits camera usage, the system can recognize objects through the devices camera."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The user has the option to disable this setting.")))),(0,n.kt)("h3",{id:"non-functional-requirements"},"Non-Functional Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User accounts will not be required for the drawing, camera, or tile features."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Accounts will allow users to save custom tiles, but access to AAC features will not be inhibited."),(0,n.kt)("li",{parentName:"ul"},"Performance will NOT be affected by an account- every user can expect the same load times (as per their internet connection)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The UI will be accessible to those who cannot read"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All major buttons will be represented with pictures such as checkmarks, red crosses, smiley faces and more."),(0,n.kt)("li",{parentName:"ul"},"Account setup will require some reading power, but this feature will be aimed at speech pathologists/supervising adults rather than an actual AAC user. "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We will use a form of lazy-loading to ensure that the app is not slowed down by loading a large number of custom tiles. A tile will be loaded when it is selected, meaning subsequent uses after the first will also be sped up."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A cache of user tiles may be used to improve performance, but the actual aduio data will be lazily-loaded."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User login information will be properly salt + peppered to keep the information safe from malicious entites.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The entire application will exist as a single-page app. This is to improve usability for AAC users- multiple pages may become confusing or irritating to navigate."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Account Creation/Account Logins/Custom Tile Creation/Tile Navigation will all be popups that appear overtop of the main screen, ensuring the app is not confusing to navigate."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The image recognition feature will be performant with respect to the users internet connection- a user can expect a result in 4-5 seconds.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When a user presses a tile for audio output, the audio will play slowly and clearly. It is important for this audio to be understandable for users with varying levels of language mastery."))))}p.isMDXComponent=!0}}]);