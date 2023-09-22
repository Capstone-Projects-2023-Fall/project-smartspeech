"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=s,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const a={sidebar_position:5},o="Use-case descriptions",i={unversionedId:"requirements/use-case-descriptions",id:"requirements/use-case-descriptions",title:"Use-case descriptions",description:"Use Case 1: Image is Recognized",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-smartspeech/docs/requirements/use-case-descriptions",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smartspeech/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"LandenLloyd",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-smartspeech/docs/requirements/features-and-requirements"},next:{title:"Software Development Plan",permalink:"/project-smartspeech/docs/category/software-development-plan"}},l={},c=[{value:"Use Case 1: Image is Recognized",id:"use-case-1-image-is-recognized",level:2},{value:"Use Case 2: Image is not Recognized",id:"use-case-2-image-is-not-recognized",level:2},{value:"Use Case 3: Edit Drawing",id:"use-case-3-edit-drawing",level:2},{value:"Use Case 4: Add Custom Tiles",id:"use-case-4-add-custom-tiles",level:2},{value:"Use Case 5: Use Tile Board",id:"use-case-5-use-tile-board",level:2},{value:"Use Case 6: Draw Rather Than Using Tiles",id:"use-case-6-draw-rather-than-using-tiles",level:2},{value:"Use Case 7: Download App",id:"use-case-7-download-app",level:2},{value:"Use Case 8: Account Creation",id:"use-case-8-account-creation",level:2},{value:"Use Case 9: View Custom Tiles",id:"use-case-9-view-custom-tiles",level:2},{value:"Use Case 10: Connection Lost",id:"use-case-10-connection-lost",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-case-descriptions"},"Use-case descriptions"),(0,s.kt)("h2",{id:"use-case-1-image-is-recognized"},"Use Case 1: Image is Recognized"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to draw a picture to help them communicate, and it is recognized in the top options.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens the app on their device"),(0,s.kt)("li",{parentName:"ol"},"User draws a picture of what they want to say on the drawing pad"),(0,s.kt)("li",{parentName:"ol"},"User is prompted with a list of suggestions describing their drawing"),(0,s.kt)("li",{parentName:"ol"},"Drawing is correctly recognized, so User taps the corresponding tile on the screen"),(0,s.kt)("li",{parentName:"ol"},"Word is spoken using the speaker on the device")),(0,s.kt)("h2",{id:"use-case-2-image-is-not-recognized"},"Use Case 2: Image is not Recognized"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to draw a picture to help them communicate, but it is not recognized.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens the app on their device"),(0,s.kt)("li",{parentName:"ol"},"User draws a picture of what they want to say on the drawing pad"),(0,s.kt)("li",{parentName:"ol"},"User is prompted with a list of suggestions describing their drawing"),(0,s.kt)("li",{parentName:"ol"},"The generated suggestions are incorrect, so the user clicks the button to redraw the picture"),(0,s.kt)("li",{parentName:"ol"},"The user redraws the picture"),(0,s.kt)("li",{parentName:"ol"},"User is prompted with a list of suggestions describing their drawing"),(0,s.kt)("li",{parentName:"ol"},"Drawing is correctly recognized, so User taps the corresponding tile on the screen"),(0,s.kt)("li",{parentName:"ol"},"Word is spoken using the speaker on the device")),(0,s.kt)("h2",{id:"use-case-3-edit-drawing"},"Use Case 3: Edit Drawing"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to draw a picture to help them communicate, but then changes their drawing after they come up with a different way to draw it.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens the app on their device"),(0,s.kt)("li",{parentName:"ol"},"User begins to draw a picture of what they want to say on the drawing pad"),(0,s.kt)("li",{parentName:"ol"},"User clicks the button to redraw the picture"),(0,s.kt)("li",{parentName:"ol"},"User redraws the picture"),(0,s.kt)("li",{parentName:"ol"},"User is prompted with a list of suggestions describing their drawing"),(0,s.kt)("li",{parentName:"ol"},"Drawing is correctly recognized, so User taps the corresponding tile on the screen"),(0,s.kt)("li",{parentName:"ol"},"Word is spoken using the speaker on the device")),(0,s.kt)("h2",{id:"use-case-4-add-custom-tiles"},"Use Case 4: Add Custom Tiles"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to add custom tile to their tile board.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens the app on their device"),(0,s.kt)("li",{parentName:"ol"},"User logs in to their account"),(0,s.kt)("li",{parentName:"ol"},"User presses the tile board button on the main screen"),(0,s.kt)("li",{parentName:"ol"},"User presses the create custom tile button"),(0,s.kt)("li",{parentName:"ol"},"User enters a drawing or picture to be displayed on the tile"),(0,s.kt)("li",{parentName:"ol"},"User enters a voice recording to go with the tile"),(0,s.kt)("li",{parentName:"ol"},"User presses the save button to save their new custom tile")),(0,s.kt)("h2",{id:"use-case-5-use-tile-board"},"Use Case 5: Use Tile Board"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User knows where to locate their word on the tile board, so they switch to that page.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User presses the tile board button on the main screen"),(0,s.kt)("li",{parentName:"ol"},"User taps the category their word belongs to "),(0,s.kt)("li",{parentName:"ol"},"User taps the tile corresponding to their word on the screen"),(0,s.kt)("li",{parentName:"ol"},"Word is spoken using the speaker on the device")),(0,s.kt)("h2",{id:"use-case-6-draw-rather-than-using-tiles"},"Use Case 6: Draw Rather Than Using Tiles"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User does not know where to locate their word on the tile board, so they draw it instead.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User presses tile board button on the main screen"),(0,s.kt)("li",{parentName:"ol"},"User taps the category they think their word belongs to "),(0,s.kt)("li",{parentName:"ol"},"User is unable to find the word tile they want to use, so they return to the main screen"),(0,s.kt)("li",{parentName:"ol"},"User draws a picture of what they want to say on the drawing pad"),(0,s.kt)("li",{parentName:"ol"},"User is prompted with a list of suggestions describing their drawing"),(0,s.kt)("li",{parentName:"ol"},"Drawing is correctly recognized, so User taps the corresponding tile on the screen"),(0,s.kt)("li",{parentName:"ol"},"Word is spoken using the speaker on the device")),(0,s.kt)("h2",{id:"use-case-7-download-app"},"Use Case 7: Download App"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to download the app")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens the website on their device"),(0,s.kt)("li",{parentName:"ol"},"User navigates to the settings of the app"),(0,s.kt)("li",{parentName:"ol"},"User chooses the install option"),(0,s.kt)("li",{parentName:"ol"},"The app is installed on the device, and the user opens the app locally by clicking the app icon")),(0,s.kt)("h2",{id:"use-case-8-account-creation"},"Use Case 8: Account Creation"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to create an account to begin creating tiles")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens the app"),(0,s.kt)("li",{parentName:"ol"},"User selects the login button"),(0,s.kt)("li",{parentName:"ol"},'User selects the "create account" button'),(0,s.kt)("li",{parentName:"ol"},"User enters their new username and password"),(0,s.kt)("li",{parentName:"ol"},"User selects create account"),(0,s.kt)("li",{parentName:"ol"},"User's account is created, and they are logged into their new account where they can create their own tiles and save configurations")),(0,s.kt)("h2",{id:"use-case-9-view-custom-tiles"},"Use Case 9: View Custom Tiles"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to login to view tiles")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens the app"),(0,s.kt)("li",{parentName:"ol"},"User selects the login button"),(0,s.kt)("li",{parentName:"ol"},"User enters their password and their username"),(0,s.kt)("li",{parentName:"ol"},"User selects login"),(0,s.kt)("li",{parentName:"ol"},"User is logged into their account where they can create their own tiles and save configurations")),(0,s.kt)("h2",{id:"use-case-10-connection-lost"},"Use Case 10: Connection Lost"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User loses Wi-Fi during use of the app")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens the app"),(0,s.kt)("li",{parentName:"ol"},"User begins to draw what they want to say but lose connection to the internet"),(0,s.kt)("li",{parentName:"ol"},"Drawing board disconnects, and User then navigates the tile board to the tile they want"),(0,s.kt)("li",{parentName:"ol"},"User selects the tile they want"),(0,s.kt)("li",{parentName:"ol"},"Word is spoken using the speaker on the device")))}d.isMDXComponent=!0}}]);