"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93865],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"Telemetry",weight:8008,aliases:["/rancher/v2.x/en/faq/telemetry/"]},s=void 0,c={unversionedId:"faq/telemetry",id:"version-2.5/faq/telemetry",title:"Telemetry",description:"What is Telemetry?",source:"@site/versioned_docs/version-2.5/faq/telemetry.md",sourceDirName:"faq",slug:"/faq/telemetry",permalink:"/v2.5/faq/telemetry",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/faq/telemetry.md",tags:[],version:"2.5",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Telemetry",weight:8008,aliases:["/rancher/v2.x/en/faq/telemetry/"]},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/v2.5/faq/security"},next:{title:"Container Network Interface (CNI) Providers",permalink:"/v2.5/faq/container-network-interface-providers"}},u={},d=[{value:"What is Telemetry?",id:"what-is-telemetry",level:3},{value:"What information is collected?",id:"what-information-is-collected",level:3},{value:"Can I see the information that is being sent?",id:"can-i-see-the-information-that-is-being-sent",level:3},{value:"How do I turn it on or off?",id:"how-do-i-turn-it-on-or-off",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"what-is-telemetry"},"What is Telemetry?"),(0,i.kt)("p",null,"Telemetry collects aggregate information about the size of Rancher installations, versions of components used, and which features are used.  This information is used by Rancher Labs to help make the product better and is not shared with third-parties."),(0,i.kt)("h3",{id:"what-information-is-collected"},"What information is collected?"),(0,i.kt)("p",null,"No specific identifying information like usernames, passwords, or the names or addresses of user resources will ever be collected."),(0,i.kt)("p",null,"The primary things collected include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aggregate counts (smallest, average, largest, total) of nodes per-cluster and their size (e.g. CPU cores & RAM)."),(0,i.kt)("li",{parentName:"ul"},"Aggregate counts of logical resources like Clusters, Projects, Namespaces, and Pods."),(0,i.kt)("li",{parentName:"ul"},"Counts of what driver was used to deploy clusters and nodes (e.g. GKE vs EC2 vs Imported vs Custom)."),(0,i.kt)("li",{parentName:"ul"},"Versions of Kubernetes components, Operating Systems and Docker that are deployed on nodes."),(0,i.kt)("li",{parentName:"ul"},"Whether some optional components are enabled or not (e.g. which auth providers are used)."),(0,i.kt)("li",{parentName:"ul"},"The image name & version of Rancher that is running."),(0,i.kt)("li",{parentName:"ul"},"A unique randomly-generated identifier for this installation.")),(0,i.kt)("h3",{id:"can-i-see-the-information-that-is-being-sent"},"Can I see the information that is being sent?"),(0,i.kt)("p",null,"If Telemetry is enabled, you can go to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<your rancher server>/v1-telemetry")," in your installation to see the current data."),(0,i.kt)("p",null,"If Telemetry is not enabled, the process that collects the data is not running, so there is nothing being collected to look at."),(0,i.kt)("h3",{id:"how-do-i-turn-it-on-or-off"},"How do I turn it on or off?"),(0,i.kt)("p",null,"After initial setup, an administrator can go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," page in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Global")," section of the UI and click Edit to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"telemetry-opt")," setting to either ",(0,i.kt)("inlineCode",{parentName:"p"},"in")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"out"),"."))}f.isMDXComponent=!0}}]);