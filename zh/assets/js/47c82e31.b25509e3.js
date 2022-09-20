"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80039],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),g=r,k=m["".concat(d,".").concat(g)]||m[g]||s[g]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6172:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"\u4f7f\u7528\u975e\u9ed8\u8ba4\u652f\u6301\u7684\u5b58\u50a8\u9a71\u52a8",weight:1},d=void 0,p={unversionedId:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers",id:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers",title:"\u4f7f\u7528\u975e\u9ed8\u8ba4\u652f\u6301\u7684\u5b58\u50a8\u9a71\u52a8",description:"\u6b64\u529f\u80fd\u5141\u8bb8\u4f60\u4f7f\u7528\u4e0d\u662f\u9ed8\u8ba4\u542f\u7528\u7684\u5b58\u50a8\u63d0\u4f9b\u5546\u548c\u5377\u63d2\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features",slug:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u4f7f\u7528\u975e\u9ed8\u8ba4\u652f\u6301\u7684\u5b58\u50a8\u9a71\u52a8",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u5728 ARM64 \u4e0a\u8fd0\u884c Rancher\uff08\u5b9e\u9a8c\u6027\uff09",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"},next:{title:"UI \u7ba1\u7406 Istio \u865a\u62df\u670d\u52a1\u548c\u76ee\u6807\u89c4\u5219",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features"}},u={},s=[{value:"\u9ed8\u8ba4\u542f\u7528\u7684\u6301\u4e45\u5377\u63d2\u4ef6",id:"\u9ed8\u8ba4\u542f\u7528\u7684\u6301\u4e45\u5377\u63d2\u4ef6",level:3},{value:"\u9ed8\u8ba4\u542f\u7528\u7684 StorageClass",id:"\u9ed8\u8ba4\u542f\u7528\u7684-storageclass",level:3}],m={toc:s};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6b64\u529f\u80fd\u5141\u8bb8\u4f60\u4f7f\u7528\u4e0d\u662f\u9ed8\u8ba4\u542f\u7528\u7684\u5b58\u50a8\u63d0\u4f9b\u5546\u548c\u5377\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u542f\u7528\u6216\u7981\u7528\u6b64\u529f\u80fd\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/enable-experimental-features"},"\u542f\u7528\u5b9e\u9a8c\u529f\u80fd\u4e3b\u9875"),"\u4e2d\u7684\u8bf4\u660e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"unsupported-storage-drivers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u975e\u9ed8\u8ba4\u542f\u7528\u7684\u5b58\u50a8\u63d0\u4f9b\u5546\u548c\u5377\u63d2\u4ef6\u3002")))),(0,l.kt)("h3",{id:"\u9ed8\u8ba4\u542f\u7528\u7684\u6301\u4e45\u5377\u63d2\u4ef6"},"\u9ed8\u8ba4\u542f\u7528\u7684\u6301\u4e45\u5377\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4e0b\u8868\u63cf\u8ff0\u4e86\u9ed8\u8ba4\u542f\u7528\u7684\u5b58\u50a8\u7c7b\u578b\u5bf9\u5e94\u7684\u6301\u4e45\u5377\u63d2\u4ef6\u3002\u542f\u7528\u6b64\u529f\u80fd\u5f00\u5173\u65f6\uff0c\u4e0d\u5728\u6b64\u5217\u8868\u4e2d\u7684\u4efb\u4f55\u6301\u4e45\u5377\u63d2\u4ef6\u5747\u88ab\u89c6\u4e3a\u5b9e\u9a8c\u529f\u80fd\uff0c\u4e14\u4e0d\u53d7\u652f\u6301\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63d2\u4ef6"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon EBS Disk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws-ebs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AzureFile"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"azure-file"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AzureDisk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"azure-disk"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google Persistent Disk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gce-pd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Longhorn"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex-volume-longhorn"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VMware vSphere Volume"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vsphere-volume"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"local"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u6587\u4ef6\u7cfb\u7edf"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nfs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host-path"))))),(0,l.kt)("h3",{id:"\u9ed8\u8ba4\u542f\u7528\u7684-storageclass"},"\u9ed8\u8ba4\u542f\u7528\u7684 StorageClass"),(0,l.kt)("p",null,"\u4e0b\u8868\u63cf\u8ff0\u4e86\u9ed8\u8ba4\u542f\u7528\u7684 StorageClass \u5bf9\u5e94\u7684\u6301\u4e45\u5377\u63d2\u4ef6\u3002\u542f\u7528\u6b64\u529f\u80fd\u5f00\u5173\u65f6\uff0c\u4e0d\u5728\u6b64\u5217\u8868\u4e2d\u7684\u4efb\u4f55\u6301\u4e45\u5377\u63d2\u4ef6\u5747\u88ab\u89c6\u4e3a\u5b9e\u9a8c\u529f\u80fd\uff0c\u4e14\u4e0d\u53d7\u652f\u6301\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63d2\u4ef6"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon EBS Disk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws-ebs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AzureFile"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"azure-file"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AzureDisk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"azure-disk"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google Persistent Disk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gce-pd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Longhorn"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex-volume-longhorn"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VMware vSphere Volume"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vsphere-volume"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"local"))))))}g.isMDXComponent=!0}}]);