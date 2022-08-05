"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9985],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7896),a=(n(2784),n(876));const i={id:"Presence",title:"Interface: Presence",sidebar_label:"Presence",sidebar_position:0,custom_edit_url:null},s=void 0,o={unversionedId:"api/interfaces/Presence",id:"api/interfaces/Presence",title:"Interface: Presence",description:"a presence object",source:"@site/docs/api/interfaces/Presence.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Presence",permalink:"/docs/api/interfaces/Presence",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Presence",title:"Interface: Presence",sidebar_label:"Presence",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"MessageInteractionOptions",permalink:"/docs/api/interfaces/MessageInteractionOptions"},next:{title:"RoleCreateOptions",permalink:"/docs/api/interfaces/RoleCreateOptions"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:"activity",id:"activity",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"afk",id:"afk",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"a presence object"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Interface"))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"activity"},"activity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"activity"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Activity"},(0,a.kt)("inlineCode",{parentName:"a"},"Activity"))),(0,a.kt)("p",null,"The user's activities"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#activity-object"},"https://discord.com/developers/docs/topics/gateway#activity-object")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"packages/libcord/src/structures/User.ts:155"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"afk"},"afk"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"afk"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Whether or not the client is afk. default false"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"packages/libcord/src/structures/User.ts:165"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"status"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules#presencestatus"},(0,a.kt)("inlineCode",{parentName:"a"},"PresenceStatus"))),(0,a.kt)("p",null,"The user's new status"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#update-status-status-types"},"https://discord.com/developers/docs/topics/gateway#update-status-status-types")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"packages/libcord/src/structures/User.ts:161"))}d.isMDXComponent=!0}}]);