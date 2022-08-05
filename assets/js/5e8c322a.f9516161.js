"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7597],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7896),a=(r(2784),r(876));const o={id:"index",title:"libcord",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"api/index",id:"api/index",title:"libcord",description:"https://nodei.co/npm/libcord.png?downloads=true&downloadRank=true&stars=true",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"libcord",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/docs/api/modules"}},c={},s=[{value:"Getting Started",id:"getting-started",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("h1",{id:"libcord"},"Libcord"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/libcord"},(0,a.kt)("img",{parentName:"a",src:"https://nodei.co/npm/libcord.png?downloads=true&downloadRank=true&stars=true",alt:"https://nodei.co/npm/libcord.png?downloads=true&downloadRank=true&stars=true"}))," ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/k672733TU3"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/976566685895114823.png?color=7289da&label=Libcord&logo=discord&style=flat-square",alt:"Discord"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tovade/libcord/blob/master/LICENSE"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/tovade/libcord.svg",alt:"GitHub license"})),"  ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/libcord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dm/arcscord",alt:"DOWNLOADS"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://libcord.js.org/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/typedoc-docs-blue.svg",alt:"DOCS"}))),(0,a.kt)("p",null,"Libcord is a library written in typescript to interact with the Discord API ",(0,a.kt)("br",null))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Client } = require(\'libcord\')\nconst client = new Client();\n\nclient.on("ready", () => {\n    console.log("I am ready")\n});\nclient.login("TOKEN")\n')))}d.isMDXComponent=!0}}]);