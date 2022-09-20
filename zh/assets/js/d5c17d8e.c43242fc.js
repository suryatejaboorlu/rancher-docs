"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27717],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31036:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"Rancher Deployment Quick Start Guides",metaDescription:"Use this section to jump start your Rancher deployment and testing. It contains instructions for a simple Rancher setup and some common use cases.","short title":"Use this section to jump start your Rancher deployment and testing. It contains instructions for a simple Rancher setup and some common use cases.",weight:2},c=void 0,u={unversionedId:"pages-for-subheaders/quick-start-guides",id:"version-2.5/pages-for-subheaders/quick-start-guides",title:"Rancher Deployment Quick Start Guides",description:"Note: The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see Installation.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/quick-start-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/quick-start-guides",permalink:"/zh/v2.5/pages-for-subheaders/quick-start-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/quick-start-guides.md",tags:[],version:"2.5",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Rancher Deployment Quick Start Guides",metaDescription:"Use this section to jump start your Rancher deployment and testing. It contains instructions for a simple Rancher setup and some common use cases.","short title":"Use this section to jump start your Rancher deployment and testing. It contains instructions for a simple Rancher setup and some common use cases.",weight:2},sidebar:"tutorialSidebar",previous:{title:"What Are Divio Docs?",permalink:"/zh/v2.5/getting-started/introduction/what-are-divio-docs"},next:{title:"Deploying Rancher Server",permalink:"/zh/v2.5/pages-for-subheaders/deploy-rancher-manager"}},p={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/installation-and-upgrade"},"Installation"),".")),(0,a.kt)("p",null,"Howdy buckaroos! Use this section of the docs to jump start your deployment and testing of Rancher 2.x! It contains instructions for a simple Rancher setup and some common use cases. We plan on adding more content to this section in the future."),(0,a.kt)("p",null,"We have Quick Start Guides for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/deploy-rancher-manager"},"Deploying Rancher Server"),": Get started running Rancher using the method most convenient for you.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/deploy-rancher-workloads"},"Deploying Workloads"),": Deploy a simple ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/"},"workload")," and expose it, letting you access it from outside the cluster."))))}m.isMDXComponent=!0}}]);