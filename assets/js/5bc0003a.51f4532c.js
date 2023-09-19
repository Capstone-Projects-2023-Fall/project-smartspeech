"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="System Block Diagram",s={unversionedId:"requirements/system-block-diagram",id:"requirements/system-block-diagram",title:"System Block Diagram",description:"systemblockdiagram",source:"@site/docs/requirements/system-block-diagram.md",sourceDirName:"requirements",slug:"/requirements/system-block-diagram",permalink:"/project-smartspeech/docs/requirements/system-block-diagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smartspeech/edit/main/documentation/docs/requirements/system-block-diagram.md",tags:[],version:"current",lastUpdatedBy:"Anthony Roman",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-smartspeech/docs/requirements/system-overview"},next:{title:"General Requirements",permalink:"/project-smartspeech/docs/requirements/general-requirements"}},c={},l=[],m={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-block-diagram"},"System Block Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"system_block_diagram",src:r(4970).Z,width:"2431",height:"1180"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In this image, calls going into the the AWS Network (to backend servers) have orange arrows. Any traffic with an egress destination is labeled a shade of blue. ")),(0,a.kt)("p",null,"The backend is hosted on AWS while the user is served a Next.js frontend. Each image labeling request will enter the AWS network via an Internet Gateway. The Load Balancers will pass off the request to a viable",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," node which will either ",(0,a.kt)("em",{parentName:"p"},"compute")," the image labels or send a request to another image recognition service like Azure or OpenAI. Since each worker node is in a private subnet of the VPC, a NAT gateway",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," is required to send outbound requests. Since contacting external services may require API Keys, the AWS System Manager Parameter Store is used to hide secrets",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,a.kt)("p",null,"The network and computational load is distributed among machines via a combination of Load Balancers and an Auto Scaling Group (ASG). This allows the ASG Manager to spawn more instances if nodes report a local resource overload."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},'A "viable" node is a node that reports a healthy status on a node status check. A healthy status implies all systems (disk, connectivity, ...) are working. Checking for this status is done by the listeners on the Auto Scaling Group.',(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},'You might be thinking "Why not just put the nodes in the public subnets?". The answer is simple, nodes in a private control plane cannot be connected to without going through the load balancer and even then you cannot initiate a connection to a machine behind a NAT device. In short, this architecture allows us to maintain server integrity by never allowing any entity to access the worker nodes directly.',(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Secrets are protected by AWS KMS (Key Management Service) which allows only specified machines to decrypt encrypted keys via IAM (identity and Access Management) Rules",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},4970:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/AWS_SmartSpeech_Diagram-b624d862b9e1d43d21e2d58cbb2cca89.png"}}]);