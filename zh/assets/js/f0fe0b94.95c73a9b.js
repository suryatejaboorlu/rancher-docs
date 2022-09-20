"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[2694],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||c;return n?t.createElement(f,i(i({ref:r},l),{},{components:n})):t.createElement(f,i({ref:r},l))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73657:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var t=n(87462),a=n(63366),c=(n(67294),n(3905)),i=["components"],o={title:"\u5b89\u88c5 Rancher CIS Benchmark"},s=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark",id:"how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark",title:"\u5b89\u88c5 Rancher CIS Benchmark",description:"1. \u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb \u2630 > \u96c6\u7fa4\u7ba1\u7406\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u5b89\u88c5 Rancher CIS Benchmark"},sidebar:"tutorialSidebar",previous:{title:"CIS \u626b\u63cf\u6307\u5357",permalink:"/zh/pages-for-subheaders/cis-scan-guides"},next:{title:"\u5378\u8f7d Rancher CIS Benchmark",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark"}},l={},d=[],p={toc:d};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,c.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u5728",(0,c.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u5b89\u88c5 CIS Benchmark \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,c.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,c.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > Charts"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,c.kt)("strong",{parentName:"li"},"CIS Benchmark"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,c.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aCIS \u626b\u63cf\u5e94\u7528\u5df2\u7ecf\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u3002"))}m.isMDXComponent=!0}}]);