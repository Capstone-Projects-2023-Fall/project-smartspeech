"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=s,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(7462),s=(r(7294),r(3905));const i={sidebar_position:5},o="Use-case descriptions",a={unversionedId:"requirements/use-case-descriptions",id:"requirements/use-case-descriptions",title:"Use-case descriptions",description:"Use Case 1",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/SmartSpeech/docs/requirements/use-case-descriptions",draft:!1,editUrl:"https://github.com/undefined/SmartSpeech/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"Alex Rajasekaran",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/SmartSpeech/docs/requirements/features-and-requirements"},next:{title:"Software Development Plan",permalink:"/SmartSpeech/docs/category/software-development-plan"}},c={},l=[{value:"Use Case 1",id:"use-case-1",level:2},{value:"User wants to draw a picture to help them communicate, but it is not recognized",id:"user-wants-to-draw-a-picture-to-help-them-communicate-but-it-is-not-recognized",level:3},{value:"Use Case 2",id:"use-case-2",level:2},{value:"User wants to add custom tile to their tile board",id:"user-wants-to-add-custom-tile-to-their-tile-board",level:3},{value:"Use Case 3",id:"use-case-3",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-case-descriptions"},"Use-case descriptions"),(0,s.kt)("h2",{id:"use-case-1"},"Use Case 1"),(0,s.kt)("h3",{id:"user-wants-to-draw-a-picture-to-help-them-communicate-but-it-is-not-recognized"},"User wants to draw a picture to help them communicate, but it is not recognized"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens the app on their device"),(0,s.kt)("li",{parentName:"ol"},"User draws the picture of what they want to say on the drawing pad"),(0,s.kt)("li",{parentName:"ol"},"User is prompted with list of suggestions describing their drawing"),(0,s.kt)("li",{parentName:"ol"},"The generated suggestions are incorrect, so the user clicks the button to redraw the picture"),(0,s.kt)("li",{parentName:"ol"},"The user redraws the picture"),(0,s.kt)("li",{parentName:"ol"},"User is prompted with list of suggestions describing their drawing"),(0,s.kt)("li",{parentName:"ol"},"Drawing is correctly recognized, so user taps the corresponding tile on the screen"),(0,s.kt)("li",{parentName:"ol"},"Word is spoken using the speaker on the device")),(0,s.kt)("h2",{id:"use-case-2"},"Use Case 2"),(0,s.kt)("h3",{id:"user-wants-to-add-custom-tile-to-their-tile-board"},"User wants to add custom tile to their tile board"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens the app on their device"),(0,s.kt)("li",{parentName:"ol"},"User presses tile board button on the main screen"),(0,s.kt)("li",{parentName:"ol"},"User presses the create custom tile button"),(0,s.kt)("li",{parentName:"ol"},"User enters a drawing or picture to be displayed on the tile"),(0,s.kt)("li",{parentName:"ol"},"User enters a voice recording to go with the tile"),(0,s.kt)("li",{parentName:"ol"},"User presses the save button to save their new custom tile")),(0,s.kt)("h2",{id:"use-case-3"},"Use Case 3"),(0,s.kt)("h3",{id:""}))}u.isMDXComponent=!0}}]);