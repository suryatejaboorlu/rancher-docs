"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81386],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,k=c["".concat(i,".").concat(m)]||c[m]||l[m]||o;return r?n.createElement(k,s(s({ref:t},d),{},{components:r})):n.createElement(k,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},70885:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],p={title:"\u6dfb\u52a0 Sidecar",weight:3029},i=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",title:"\u6dfb\u52a0 Sidecar",description:"sidecar \u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u7528\u4e8e\u6269\u5c55\u6216\u589e\u5f3a pod \u4e2d\u7684\u4e3b\u5bb9\u5668\u3002\u4e3b\u5bb9\u5668\u548c Sidecar \u5171\u4eab\u4e00\u4e2a pod\uff0c\u56e0\u6b64\u5171\u4eab\u76f8\u540c\u7684\u7f51\u7edc\u7a7a\u95f4\u548c\u5b58\u50a8\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u6dfb\u52a0 Sidecar \u9009\u9879\u5c06 Sidecar \u6dfb\u52a0\u5230\u73b0\u6709\u5de5\u4f5c\u8d1f\u8f7d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u6dfb\u52a0 Sidecar",weight:3029},sidebar:"tutorialSidebar",previous:{title:"\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"},next:{title:"Horizontal Pod Autoscaler",permalink:"/zh/pages-for-subheaders/horizontal-pod-autoscaler"}},d={},l=[{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}],c={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"sidecar")," \u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u7528\u4e8e\u6269\u5c55\u6216\u589e\u5f3a pod \u4e2d\u7684\u4e3b\u5bb9\u5668\u3002\u4e3b\u5bb9\u5668\u548c Sidecar \u5171\u4eab\u4e00\u4e2a pod\uff0c\u56e0\u6b64\u5171\u4eab\u76f8\u540c\u7684\u7f51\u7edc\u7a7a\u95f4\u548c\u5b58\u50a8\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"\u6dfb\u52a0 Sidecar")," \u9009\u9879\u5c06 Sidecar \u6dfb\u52a0\u5230\u73b0\u6709\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u6dfb\u52a0 Sidecar \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u627e\u5230\u8981\u6269\u5c55\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > + \u6dfb\u52a0 Sidecar"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165 Sidecar \u7684",(0,o.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u901a\u7528"),"\u4e2d\uff0c\u9009\u62e9 Sidecar \u7c7b\u578b\u3002\u6b64\u9009\u9879\u786e\u5b9a Sidecar \u5bb9\u5668\u662f\u5728\u4e3b\u5bb9\u5668\u4e4b\u524d\u8fd8\u662f\u4e4b\u540e\u90e8\u7f72\u3002"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6807\u51c6\u5bb9\u5668"),"\uff1a"),(0,o.kt)("p",{parentName:"li"}," Sidecar \u5bb9\u5668\u90e8\u7f72\u5728\u4e3b\u5bb9\u5668\u4e4b\u540e\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u5bb9\u5668"),"\uff1a"),(0,o.kt)("p",{parentName:"li"}," Sidecar \u5bb9\u5668\u90e8\u7f72\u5728\u4e3b\u5bb9\u5668\u4e4b\u524d\u3002")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u5bb9\u5668\u955c\u50cf"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165\u8981\u90e8\u7f72\u6765\u652f\u6301\u4e3b\u5bb9\u5668\u7684\u5bb9\u5668\u955c\u50cf\u7684\u540d\u79f0\u3002\u90e8\u7f72\u65f6\uff0cRancher \u4f1a\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/explore/"},"Docker Hub")," \u62c9\u53d6\u8fd9\u4e2a\u955c\u50cf\u3002\u8f93\u5165\u4e0e Docker Hub \u4e0a\u5b8c\u5168\u76f8\u540c\u7684\u540d\u79f0\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u5176\u4f59\u9009\u9879\u3002\u4f60\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d"),"\u4e2d\u4e86\u89e3\u5b83\u4eec\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u542f\u52a8"),"\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u6839\u636e\u4f60\u7684\u53c2\u6570\u90e8\u7f72 Sidecar\u3002\u90e8\u7f72\u540e\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91")," \u6765\u67e5\u770b Sidecar\u3002"),(0,o.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/"},"\u5206\u5e03\u5f0f\u7cfb\u7edf\u5de5\u5177\u5305\uff1a\u590d\u5408\u5bb9\u5668\u7684\u6a21\u5f0f"))))}m.isMDXComponent=!0}}]);