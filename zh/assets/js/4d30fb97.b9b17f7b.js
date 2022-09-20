"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[39716],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return l}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=d(t),l=o,m=g["".concat(s,".").concat(l)]||g[l]||p[l]||i;return t?n.createElement(m,u(u({ref:r},c),{},{components:t})):n.createElement(m,u({ref:r},c))}));function l(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=g;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var d=2;d<i;d++)u[d]=t[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},55269:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return p}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),u=["components"],a={title:"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e Prometheus Federator",weight:4},s=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads",title:"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e Prometheus Federator",description:"\u663e\u793a\u5de5\u4f5c\u8d1f\u8f7d\u7684 CPU \u548c\u5185\u5b58\u6307\u6807",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e Prometheus Federator",weight:4},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/customize-grafana-dashboards"},next:{title:"\u5b89\u88c5 Project Monitor",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/project-monitors"}},c={},p=[{value:"\u663e\u793a\u5de5\u4f5c\u8d1f\u8f7d\u7684 CPU \u548c\u5185\u5b58\u6307\u6807",id:"\u663e\u793a\u5de5\u4f5c\u8d1f\u8f7d\u7684-cpu-\u548c\u5185\u5b58\u6307\u6807",level:3},{value:"\u8bbe\u7f6e CPU \u548c\u5185\u5b58\u4e4b\u5916\u7684\u6307\u6807",id:"\u8bbe\u7f6e-cpu-\u548c\u5185\u5b58\u4e4b\u5916\u7684\u6307\u6807",level:3}],g={toc:p};function l(e){var r=e.components,t=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u663e\u793a\u5de5\u4f5c\u8d1f\u8f7d\u7684-cpu-\u548c\u5185\u5b58\u6307\u6807"},"\u663e\u793a\u5de5\u4f5c\u8d1f\u8f7d\u7684 CPU \u548c\u5185\u5b58\u6307\u6807"),(0,i.kt)("p",null,"\u4f7f\u7528 Prometheus Federator \u663e\u793a CPU \u548c\u5185\u5b58\u6307\u6807\u7684\u65b9\u5f0f\u4e0e\u4f7f\u7528 rancher-monitoring \u76f8\u540c\u3002\u6709\u5173\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads#%E6%98%BE%E7%A4%BA%E5%B7%A5%E4%BD%9C%E8%B4%9F%E8%BD%BD%E7%9A%84-cpu-%E5%92%8C%E5%86%85%E5%AD%98%E6%8C%87%E6%A0%87"},"\u6b64\u5904"),"\u3002"),(0,i.kt)("h3",{id:"\u8bbe\u7f6e-cpu-\u548c\u5185\u5b58\u4e4b\u5916\u7684\u6307\u6807"},"\u8bbe\u7f6e CPU \u548c\u5185\u5b58\u4e4b\u5916\u7684\u6307\u6807"),(0,i.kt)("p",null,"\u4f7f\u7528 Prometheus Federator \u8bbe\u7f6e CPU \u548c\u5185\u5b58\u4e4b\u5916\u7684\u6307\u6807\u4e0e\u4f7f\u7528 rancher-monitoring \u7684\u65b9\u5f0f\u76f8\u540c\u3002\u6709\u5173\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads#%E8%AE%BE%E7%BD%AE-cpu-%E5%92%8C%E5%86%85%E5%AD%98%E4%B9%8B%E5%A4%96%E7%9A%84%E6%8C%87%E6%A0%87"},"\u6b64\u5904"),"\u3002"))}l.isMDXComponent=!0}}]);