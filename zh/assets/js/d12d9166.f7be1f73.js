"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[23446],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,g=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30379:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"\u8986\u76d6\u547d\u540d\u7a7a\u95f4\u7684\u9ed8\u8ba4\u9650\u5236",weight:2},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",id:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",title:"\u8986\u76d6\u547d\u540d\u7a7a\u95f4\u7684\u9ed8\u8ba4\u9650\u5236",description:"\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236\u4f1a\u5728\u521b\u5efa\u65f6\u4ece\u9879\u76ee\u6cbf\u7528\u5230\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u3002\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u589e\u52a0\u6216\u51cf\u5c11\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u7684\u914d\u989d\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u6765\u8986\u76d6\u9ed8\u8ba4\u9650\u5236\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u8986\u76d6\u547d\u540d\u7a7a\u95f4\u7684\u9ed8\u8ba4\u9650\u5236",weight:2},sidebar:"tutorialSidebar",previous:{title:"Rancher \u9879\u76ee\u4e2d\u8d44\u6e90\u914d\u989d\u7684\u5de5\u4f5c\u539f\u7406",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas"},next:{title:"\u8bbe\u7f6e\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits"}},p={},l=[{value:"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d",id:"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d",level:3}],d={toc:l};function m(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236"),"\u4f1a\u5728\u521b\u5efa\u65f6\u4ece\u9879\u76ee\u6cbf\u7528\u5230\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u3002\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u589e\u52a0\u6216\u51cf\u5c11\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u7684\u914d\u989d\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u6765\u8986\u76d6\u9ed8\u8ba4\u9650\u5236\u3002"),(0,o.kt)("p",null,"\u5728\u4e0b\u56fe\u4e2d\uff0cRancher \u7ba1\u7406\u5458\u7684\u9879\u76ee\u6709\u4e00\u4e2a\u5df2\u751f\u6548\u7684\u8d44\u6e90\u914d\u989d\u3002\u4f46\u662f\uff0c\u7ba1\u7406\u5458\u60f3\u8981\u8986\u76d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"Namespace 3")," \u7684\u547d\u540d\u7a7a\u95f4\u9650\u5236\uff0c\u4ee5\u4fbf\u8ba9\u8be5\u547d\u540d\u7a7a\u95f4\u4f7f\u7528\u66f4\u591a\u8d44\u6e90\u3002\u56e0\u6b64\uff0c\u7ba1\u7406\u5458",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"\u63d0\u9ad8\u4e86 ",(0,o.kt)("inlineCode",{parentName:"a"},"Namespace 3")," \u7684\u547d\u540d\u7a7a\u95f4\u9650\u5236"),"\uff0c\u4ee5\u4fbf\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u8bbf\u95ee\u66f4\u591a\u8d44\u6e90\u3002"),(0,o.kt)("sup",null,"\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236\u8986\u76d6"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236\u8986\u76d6",src:r(30681).Z,width:"1335",height:"843"})),(0,o.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"\u5982\u4f55\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"),"\u3002"),(0,o.kt)("h3",{id:"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"},"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u4e3a\u9879\u76ee\u914d\u7f6e\u4e86\u8d44\u6e90\u914d\u989d\uff0c\u4f60\u53ef\u4ee5\u8986\u76d6\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236\uff0c\u4ece\u800c\u4e3a\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u63d0\u4f9b\u5bf9\u66f4\u591a\uff08\u6216\u66f4\u5c11\uff09\u9879\u76ee\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4 > \u9879\u76ee/\u547d\u540d\u7a7a\u95f4"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u627e\u5230\u8981\u4e3a\u5176\u7f16\u8f91\u8d44\u6e90\u914d\u989d\u7684\u547d\u540d\u7a7a\u95f4\u3002\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7f16\u8f91\u8d44\u6e90\u9650\u5236\u3002\u8fd9\u4e9b\u9650\u5236\u51b3\u5b9a\u4e86\u547d\u540d\u7a7a\u95f4\u53ef\u7528\u7684\u8d44\u6e90\u3002\u5fc5\u987b\u5728\u9879\u76ee\u9650\u5236\u8303\u56f4\u5185\u914d\u7f6e\u8fd9\u4e9b\u914d\u989d\u9650\u5236\u3002"),(0,o.kt)("p",{parentName:"li"},"\u6709\u5173\u6bcf\u4e2a",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u6e90\u7c7b\u578b"),"\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types"},"\u7c7b\u578b\u53c2\u8003"),"\u3002"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u4e3a\u9879\u76ee\u914d\u7f6e\u8d44\u6e90\u914d\u989d\uff0c\u8fd9\u4e9b\u9009\u9879\u5c06\u4e0d\u53ef\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u8f93\u5165\u7684\u9650\u5236\u8d85\u8fc7\u4e86\u914d\u7f6e\u7684\u9879\u76ee\u9650\u5236\uff0c\u4f60\u5c06\u65e0\u6cd5\u4fdd\u5b58\u4fee\u6539\u3002")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u8986\u76d6\u8bbe\u7f6e\u5df2\u7ecf\u5e94\u7528\u5230\u547d\u540d\u7a7a\u95f4\u7684\u8d44\u6e90\u914d\u989d\u3002"))}m.isMDXComponent=!0},30681:function(e,t,r){t.Z=r.p+"assets/images/rancher-resource-quota-override-05542ea5daeaeb36a092ecbd8359baae.svg"}}]);