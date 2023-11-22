"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=s,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:3},i="Frontend",o={unversionedId:"system-architecture/Frontend UML",id:"system-architecture/Frontend UML",title:"Frontend",description:"UML",source:"@site/docs/system-architecture/Frontend UML.md",sourceDirName:"system-architecture",slug:"/system-architecture/Frontend UML",permalink:"/project-smartspeech/docs/system-architecture/Frontend UML",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smartspeech/edit/main/documentation/docs/system-architecture/Frontend UML.md",tags:[],version:"current",lastUpdatedBy:"Cynthia To",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Backend",permalink:"/project-smartspeech/docs/system-architecture/Backend UML"},next:{title:"Sequence Diagrams",permalink:"/project-smartspeech/docs/system-architecture/SequenceDiagrams"}},c={},l=[{value:"UML",id:"uml",level:3},{value:"Visual Diagram",id:"visual-diagram",level:3}],d={toc:l};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"frontend"},"Frontend"),(0,s.kt)("h3",{id:"uml"},"UML"),(0,s.kt)("mermaid",{value:'classDiagram\n    class App{\n\n    }\n\n    class Home{\n\n    }\n\n    class UtteredTilesProvider{\n        useUtteredTiles(): UtteredTilesState\n        UtteredTilesProvider(children: React.ReactNode)\n    }\n\n    class SelectedTilesActionBar{\n        - handleSpeak()\n    }\n\n    class Tiles{\n        - dataLocation: string\n        - currentFrame: TileAssets\n    }\n\n    class Canvas{\n        - color: string\n        - canvasRef: RefObject~HTMLCanvasElement~\n        - onMouseDown()\n        - clear()\n        - drawLine(ctx: CanvasRenderingContext2D, currentPoint: Point, prevPoint: Point | null)\n    }\n\n    class PWAMeta{\n\n    }\n\n    class UtteredTilesState{\n        + clear()\n        + addTile(item: TileData)\n    }\n\n    class TileData{\n        image: string\n        sound: string?\n        text: string\n        tileColor: string\n        subTiles: TileAssets?\n    }\n\n    class TileProps {\n        image: string\n        sound: string?\n        text: string\n        tileColor: string\n    }\n\n    class Tile {\n        props: TileProps\n    }\n\n\n    class TileAssets {\n        [key: string]: TileData\n    }\n\n    class Point {\n        x: number\n        y: number\n    }\n\n    class MiniTile {\n        MiniTile(image: string, text: string)\n    }\n\n    note for TileAssets "Self Referential data type"\n\n    SelectedTilesActionBar --\x3e MiniTile: uses to display selected tiles\n    Tiles --\x3e Tile: uses to display tiles that can be hit\n\n    SelectedTilesActionBar ..> UtteredTilesProvider: reads selected tiles from\n    Tile ..> UtteredTilesProvider: writes selected tiles to\n    Tile ..> SpeechSynthesisUtterance: uses the browser\'s Web Speech API to convert text to audio\n\n    App *-- Home: uses\n    App --\x3e PWAMeta: uses\n    Home --\x3e UtteredTilesProvider: instantiates\n    Home --\x3e SelectedTilesActionBar: instantiates\n    Home --\x3e Tiles: instantiates\n    Home --\x3e Canvas: instantiates'}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Classes with no relationships are used as datatypes.")),(0,s.kt)("p",null,"Our frontend is a Next.js app built using React features. Many classes in the above diagram inherit from React.JSX.Element, including App, Home, SelectedTilesActionBar, Tiles, Canvas, and PWAMeta. App is a Next.js internal class as the entry point into our application and page router, but we add headers through PWAMeta to enable PWA features for our app."),(0,s.kt)("h3",{id:"visual-diagram"},"Visual Diagram"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Alt text",src:n(9758).Z,width:"1073",height:"752"})),(0,s.kt)("p",null,"User can draw on the main canvas which will show tile suggestions at the bottom. As the user continues to draw, suggestions are updated and presented in the bottom row of tiles. When a user clicks on a tile, it is saved to the recent tiles, which are presented above the persistent 'Yes' and 'No' tiles (which are difficult to draw). When the user is ready to speak their sentence, they may press the check mark button at the top right of the screen. If the user is unhappy with their sentence, or they do not need to speak it anymore, they may press the trashcan icon to clear the action bar. The manual tile in the bottom right is used to enter the 'Manual Mode' which is the standard tile system used in current AAC solutions."))}u.isMDXComponent=!0},9758:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wireframe-de167183db887c441b85acee1253c9f8.png"}}]);