"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[78477],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Uninstalling The Adapter",weight:3},c=void 0,s={unversionedId:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter",id:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter",title:"Uninstalling The Adapter",description:"1. Uninstall the adapter chart using helm.",source:"@site/docs/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter.md",sourceDirName:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace",slug:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter.md",tags:[],version:"current",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Uninstalling The Adapter",weight:3},sidebar:"tutorialSidebar",previous:{title:"Installing the Adapter",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter"},next:{title:"Common Issues",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues"}},p={},u=[{value:"1. Uninstall the adapter chart using helm.",id:"1-uninstall-the-adapter-chart-using-helm",level:3},{value:"2. Remove the namespace created for the adapter.",id:"2-remove-the-namespace-created-for-the-adapter",level:3},{value:"3. (Optional) remove any outstanding user notifications.",id:"3-optional-remove-any-outstanding-user-notifications",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-uninstall-the-adapter-chart-using-helm"},"1. Uninstall the adapter chart using helm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall rancher-csp-adapter -n cattle-csp-adapter-system\n")),(0,o.kt)("h3",{id:"2-remove-the-namespace-created-for-the-adapter"},"2. Remove the namespace created for the adapter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns cattle-csp-adapter-system\n")),(0,o.kt)("h3",{id:"3-optional-remove-any-outstanding-user-notifications"},"3. (Optional) remove any outstanding user notifications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete RancherUserNotification csp-compliance\n")))}m.isMDXComponent=!0}}]);