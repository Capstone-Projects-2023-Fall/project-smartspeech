"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6789],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=p(t),h=s,g=l["".concat(c,".").concat(h)]||l[h]||u[h]||r;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=h;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[l]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),s=(t(7294),t(3905));const r={sidebar_position:3},i="Sequence Diagrams",o={unversionedId:"system-architecture/SequenceDiagrams",id:"system-architecture/SequenceDiagrams",title:"Sequence Diagrams",description:"Use Case 1: Drawing Recognition - Drawing is Recognized",source:"@site/docs/system-architecture/SequenceDiagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/SequenceDiagrams",permalink:"/project-smartspeech/docs/system-architecture/SequenceDiagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smartspeech/edit/main/documentation/docs/system-architecture/SequenceDiagrams.md",tags:[],version:"current",lastUpdatedBy:"Parth Patel",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Frontend UML",permalink:"/project-smartspeech/docs/system-architecture/Frontend UML"},next:{title:"API Specification",permalink:"/project-smartspeech/docs/category/api-specification"}},c={},p=[{value:"Use Case 1: <em>Drawing Recognition</em> - Drawing is Recognized",id:"use-case-1-drawing-recognition---drawing-is-recognized",level:2},{value:"Use Case 2: <em>Image Drawing</em> - Edit Drawing",id:"use-case-2-image-drawing---edit-drawing",level:2},{value:"Use Case 3: <em>AAC Board</em> - Add Custom Tiles",id:"use-case-3-aac-board---add-custom-tiles",level:2},{value:"Use Case 4: <em>AAC Board</em> - Use Tile Board",id:"use-case-4-aac-board---use-tile-board",level:2},{value:"Use Case 5: <em>Image Recognition &amp; Drawing</em> - Draw Rather Than Using Tiles",id:"use-case-5-image-recognition--drawing---draw-rather-than-using-tiles",level:2},{value:"Use Case 6: Download App",id:"use-case-6-download-app",level:2},{value:"Use Case 7: Account Creation",id:"use-case-7-account-creation",level:2},{value:"Use Case 8: <em>AAC Board</em> - View Custom Tiles",id:"use-case-8-aac-board---view-custom-tiles",level:2},{value:"Use Case 9: <em>PWA</em> - Connection Lost",id:"use-case-9-pwa---connection-lost",level:2}],d={toc:p};function l(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,s.kt)("h2",{id:"use-case-1-drawing-recognition---drawing-is-recognized"},"Use Case 1: ",(0,s.kt)("em",{parentName:"h2"},"Drawing Recognition")," - Drawing is Recognized"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to draw a picture to help them communicate, and it is recognized in the top options.")),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor U as User\n    participant D as Device\n    participant S as SmartSpeech\n    participant M as Model\n\n    U->>D: Open SmartSpeech app\n    activate D\n    D->>S: Start instance\n    activate S\n    S--\x3e>D: Display Home\n    \n    loop while drawing\n        U->>D: Draws\n        D->>S: Sends drawing\n        S->>+M: Sends drawing\n        M->>M: Recognize drawing\n        M--\x3e>-S: Suggest object\n        S--\x3e>D: Display suggestions\n    end\n\n    \n    U->>D: Presses suggestion\n    D->>S: Sends tile request\n    S--\x3e>D: Return tile request    \n    D--\x3e>U: Speaks word\n\n    deactivate D\n    deactivate S"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This sequence diagram details the process of a user drawing what they want to speak and then SmartSpeech recognizing and speaking the word through the device. This is the main functionality of SmartSpeech.\n\n1. User opens the app on their device\n2. User draws a picture of what they want to say on the drawing pad\n3. User is prompted with a list of suggestions describing their drawing\n5. Drawing is correctly recognized, so User taps the corresponding tile on the screen\n6. Word is spoken using the speaker on the device\n")),(0,s.kt)("h2",{id:"use-case-2-image-drawing---edit-drawing"},"Use Case 2: ",(0,s.kt)("em",{parentName:"h2"},"Image Drawing")," - Edit Drawing"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to draw a picture to help them communicate, but then changes their drawing after they come up with a different way to draw it.")),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor U as User\n    participant D as Device\n    participant S as SmartSpeech\n    participant M as Model\n\n    U->>D: Open SmartSpeech app\n    activate D\n    D->>S: Start instance\n    activate S\n    S--\x3e>D: Display Home\n    \n    loop while drawing\n        U->>D: Draws\n        D->>S: Sends drawing\n        S->>+M: Sends drawing\n        M->>M: Recognize drawing\n        M--\x3e>-S: Suggest object\n        S--\x3e>D: Display suggestions\n    end\n\n    U->>D: Presses clear canvas\n    D->>S: Sends clear canvas request\n    S--\x3e>D: Displays clear canvas\n\n\n    loop while drawing\n        U->>D: Draws\n        D->>S: Sends drawing\n        S->>+M: Sends drawing\n        M->>M: Recognize drawing\n        M--\x3e>-S: Suggest object\n        S--\x3e>D: Display suggestions\n    end\n\n    \n    U->>D: Presses suggestion\n    D->>S: Sends tile request\n    S--\x3e>D: Return tile request    \n    D--\x3e>U: Speaks word\n\n    deactivate D\n    deactivate S"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This sequence diagram details the process of clearing the drawing pad when the word the user wants to speak is either not recognized or they want to portray it in a different way. This showcases the clear drawing pad function.\n\n1. User opens the app on their device\n2. User begins to draw a picture of what they want to say on the drawing pad\n3. User clicks the clear canvas button to redraw the picture\n4. User redraws the picture\n5. User is prompted with a list of suggestions describing their drawing\n6. Drawing is correctly recognized, so User taps the corresponding tile on the screen\n7. Word is spoken using the speaker on the device\n")),(0,s.kt)("h2",{id:"use-case-3-aac-board---add-custom-tiles"},"Use Case 3: ",(0,s.kt)("em",{parentName:"h2"},"AAC Board")," - Add Custom Tiles"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to add custom tile to their tile board.")),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor U as User\n    participant D as Device\n    participant S as SmartSpeech\n\n    U->>D: Open SmartSpeech app\n    activate D\n    D->>S: Start instance\n    activate S\n    S--\x3e>D: Display Home\n    U->>D: Presses login button\n    D->>S: Requests login menu\n    S--\x3e>D: Displays login menu\n   \n    U->>D: Enters username\n    D->>S: Sends username\n    U->>D: Enters password\n    D->>S: Sends password\n    S--\x3e>S: Verifies credentials and logs user in\n    S--\x3e>D: Displays home\n\n     U->>D: Presses tile board button\n    D->>S: Requests tile board\n    S--\x3e>D: Display tile board\n\n    U->>D: Selectes create tile\n    D->>S: Requests custom tile creation UI\n    S--\x3e>D: Displays UI\n\n    U->>D: Enters a drawing or picture\n    D->>S: Sends drawing or picture\n    U->>D: Enters voice recording\n    D->>S: Sends voice recording\n    S--\x3e>S: Saves data\n    S--\x3e>D: Displays home\n    \n\n    deactivate D\n    deactivate S"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This sequence diagram details the process of adding a custom tile to a user's SmartSpeech account. Custom tiles are helpful in increasing the efficacy of AAC solutions.\n\n1. User opens the app on their device\n2. User logs in to their account\n3. User presses the tile board button on the main screen\n4. User presses the create custom tile button\n5. User enters a drawing or picture to be displayed on the tile\n6. User enters a voice recording to go with the tile\n7. User presses the save button to save their new custom tile\n")),(0,s.kt)("h2",{id:"use-case-4-aac-board---use-tile-board"},"Use Case 4: ",(0,s.kt)("em",{parentName:"h2"},"AAC Board")," - Use Tile Board"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User knows where to locate their word on the tile board, so they switch to that page.")),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor U as User\n    participant D as Device\n    participant S as SmartSpeech\n\n    U->>D: Open SmartSpeech app\n    activate D\n    D->>S: Start instance\n    activate S\n    S--\x3e>D: Display Home\n    \n    U->>D: Presses tile board button\n    D->>S: Requests tile board\n    S--\x3e>D: Display tile board\n\n    U->>D: Selectes tile category\n    D->>S: requests tile subcategory\n    S--\x3e>U: Displays subcategory\n    \n\n    \n    U->>D: Presses tile\n    D->>S: Sends tile request\n    S--\x3e>D: Return tile request    \n    D--\x3e>U: Speaks word\n\n    deactivate D\n    deactivate S"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This sequence diagram details the process of a user searching through the tile board in order to find the word they want to speak. This function is designed as a back up to the drawing pad.\n\n1. User presses the tile board button on the main screen\n2. User taps the category their word belongs to \n3. User taps the tile corresponding to their word on the screen\n4. Word is spoken using the speaker on the device\n")),(0,s.kt)("h2",{id:"use-case-5-image-recognition--drawing---draw-rather-than-using-tiles"},"Use Case 5: ",(0,s.kt)("em",{parentName:"h2"},"Image Recognition & Drawing")," - Draw Rather Than Using Tiles"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User does not know where to locate their word on the tile board, so they draw it instead.")),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor U as User\n    participant D as Device\n    participant S as SmartSpeech\n    participant M as Model\n\n    U->>D: Open SmartSpeech app\n    activate D\n    D->>S: Start instance\n    activate S\n    S--\x3e>D: Display Home\n    U->>D: Presses login button\n    D->>S: Requests login menu\n    S--\x3e>D: Displays login menu\n   \n    U->>D: Enters username\n    D->>S: Sends username\n    U->>D: Enters password\n    D->>S: Sends password\n    S--\x3e>S: Verifies credentials and logs user in\n    S--\x3e>D: Displays home\n\n    U->>D: Presses tile board button\n    D->>S: Requests tile board\n    S--\x3e>D: Display tile board\n\n    U->>D: Selectes tile category\n    D->>S: requests tile subcategory\n    S--\x3e>D: Displays subcategory\n    U->>U: unable to locate tile\n    \n    loop while drawing\n        U->>D: Draws\n        D->>S: Sends drawing\n        S->>+M: Sends drawing\n        M->>M: Recognize drawing\n        M--\x3e>-S: Suggest object\n        S--\x3e>D: Display suggestions\n    end\n\n    \n    U->>D: Presses suggestion\n    D->>S: Sends tile request\n    S--\x3e>D: Return tile request    \n    D--\x3e>U: Speaks word\n\n    deactivate D\n    deactivate S"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This sequence diagram details and highlights the intuitive function of a user drawing what they want to speak on SmartSpeech instead of finding the word in the tile menues. This highlights the defining function of SmartSpeech compared to current AAC solutions that require the use of tile menues.\n\n1. User presses tile board button on the main screen\n2. User taps the category they think their word belongs to \n3. User is unable to find the word tile they want to use, so they return to the main screen\n4. User draws a picture of what they want to say on the drawing pad\n5. User is prompted with a list of suggestions describing their drawing\n6. Drawing is correctly recognized, so User taps the corresponding tile on the screen\n7. Word is spoken using the speaker on the device\n")),(0,s.kt)("h2",{id:"use-case-6-download-app"},"Use Case 6: Download App"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to download the app")),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor User\n    participant Device\n    participant SmartSpeech\n\n    User->>+Device: Opens SmartSpeech app in browser\n    activate Device\n    Device->>+SmartSpeech: Instance of SmartSpeech started\n    activate SmartSpeech\n    SmartSpeech--\x3e>Device: Displays app\n    User->>Device: Navigates to settings tab\n    Device->>SmartSpeech: requests settings tab\n    SmartSpeech--\x3e>Device: Displays settings tab\n    User->>Device: Presses install button\n    Device->>SmartSpeech: requests install\n    SmartSpeech--\x3e>Device: Installs SmartSpeech (PWA)\n    deactivate SmartSpeech\n    User->>Device: User locally opens the app on device\n    \n    Device->>+SmartSpeech: Instance of SmartSpeech started\n    activate SmartSpeech\n    SmartSpeech--\x3e>Device: Displays app\n    deactivate SmartSpeech\n    deactivate Device"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This sequence diagram details how a user would download SmartSpeech to their device to have it more available when there is either poor or unavailable internet connection.\n\n1. User opens the website on their device\n2. User navigates to the settings of the app\n3. User chooses the install option\n4. The app is installed on the device, and the user opens the app locally by clicking the app icon\n")),(0,s.kt)("h2",{id:"use-case-7-account-creation"},"Use Case 7: Account Creation"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to create an account to begin creating tiles")),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor U as User\n    participant D as Device\n    participant S as SmartSpeech\n\n    U->>D: Open SmartSpeech app\n    activate D\n    D->>S: Start instance\n    activate S\n    S--\x3e>D: Display Home\n    U->>D: Presses login button\n    D->>S: Requests login menu\n    S--\x3e>D: Displays login menu\n    U->>D: Presses create account button\n    D->>S: Requests account creation menu\n    S->>S: Check account does not exist\n    \n    S--\x3e>D: Requests new username\n    U->>D: Enters new username\n    D->>S: Sends username\n    S--\x3e>D: Requests new password\n    U->>D: Enters new password\n    D->>S: Sends Password\n    U->>D: Presses create account\n    D->>S: Create accoutn and login request\n    S--\x3e>S: Creates and saves account, logs user in\n    S--\x3e>D: Display home\n    \n\n    deactivate D\n    deactivate S"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'This sequence diagram details how a user would create an account.\n\n1. User opens the app\n2. User selects the login button\n3. User selects the "create account" button\n4. User enters their new username and password\n5. User selects create account\n6. User\'s account is created, and they are logged into their new account where they can create their own tiles and save configurations\n')),(0,s.kt)("h2",{id:"use-case-8-aac-board---view-custom-tiles"},"Use Case 8: ",(0,s.kt)("em",{parentName:"h2"},"AAC Board")," - View Custom Tiles"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to login to view tiles")),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor U as User\n    participant D as Device\n    participant S as SmartSpeech\n\n    U->>D: Open SmartSpeech app\n    activate D\n    D->>S: Start instance\n    activate S\n    S--\x3e>D: Display Home\n    U->>D: Presses login button\n    D->>S: Requests login menu\n    S--\x3e>D: Displays login menu\n   \n   \n    U->>D: Enters username\n    D->>S: Sends username\n    U->>D: Enters password\n    D->>S: Sends password\n    S--\x3e>S: Verifies credentials and logs user in\n    S--\x3e>D: Displays home\n\n    deactivate D\n    deactivate S"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This sequence diagram displays how a user will log in to SmartSpeech to access additional functionalities like custom tiles.\n\n1. User opens the app\n2. User selects the login button\n3. User enters their password and their username\n4. User selects login\n5. User is logged into their account where they can create their own tiles and save configurations\n")),(0,s.kt)("h2",{id:"use-case-9-pwa---connection-lost"},"Use Case 9: ",(0,s.kt)("em",{parentName:"h2"},"PWA")," - Connection Lost"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User loses Wi-Fi connection during use of the app")),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor U as User\n    participant D as Device\n    participant S as SmartSpeech\n    participant I as Internet\n\n    U->>D: Open SmartSpeech app\n    activate D\n    D->>S: Start instance\n    activate S\n    S->>I: Connect\n    activate I\n    S--\x3e>D: Display Home\n    U->>D: Draws\n    D->>S: Sends drawing\n\n    I->>S: Disconnect\n    deactivate I\n    S->>S: Disable drawing pad\n    S--\x3e>D: Displays disconnect icon\n   \n   \n    U->>D: Presses manual mode tile\n    D->>S: Sends tile request (category)\n    S--\x3e>D: Return tile request (category)\n    U->>D: Presses tile\n    D->>S: Sends tile request\n    S--\x3e>D: Return tile request    \n    D--\x3e>U: Speaks word\n\n    deactivate D\n    deactivate S"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This sequence diagram displays how SmartSpeech will adapt to the loss of its drawing recognition model accessed through internet connection.\n\n1. User opens the app\n2. User begins to draw what they want to say but lose connection to the internet\n3. User is notified of the disconnection by an icon, and the drawing board disconnects\n4. User navigates the manual tile board \n5. User taps the category their word belongs to \n6. User taps the tile corresponding to their word on the screen\n7. Word is spoken using the speaker on the device\n")))}l.isMDXComponent=!0}}]);