"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72263],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(r),m=a,d=k["".concat(l,".").concat(m)]||k[m]||c[m]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},88945:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"\u521b\u5efa AKS \u96c6\u7fa4",shortTitle:"Azure Kubernetes \u670d\u52a1",weight:2115},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",title:"\u521b\u5efa AKS \u96c6\u7fa4",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u521b\u5efa\u6258\u7ba1\u5728 Microsoft Azure Kubernetes \u670d\u52a1 (AKS) \u4e2d\u7684\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u521b\u5efa AKS \u96c6\u7fa4",shortTitle:"Azure Kubernetes \u670d\u52a1",weight:2115},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u7406 GKE \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke"},next:{title:"\u521b\u5efa\u963f\u91cc\u4e91 ACK \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba"}},u={},c=[{value:"Microsoft Azure \u4e2d\u7684\u5148\u51b3\u6761\u4ef6",id:"microsoft-azure-\u4e2d\u7684\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u4f7f\u7528 Azure \u547d\u4ee4\u884c\u5de5\u5177\u8bbe\u7f6e\u670d\u52a1\u4e3b\u4f53",id:"\u4f7f\u7528-azure-\u547d\u4ee4\u884c\u5de5\u5177\u8bbe\u7f6e\u670d\u52a1\u4e3b\u4f53",level:3},{value:"\u4ece Azure \u95e8\u6237\u8bbe\u7f6e\u670d\u52a1\u4e3b\u4f53",id:"\u4ece-azure-\u95e8\u6237\u8bbe\u7f6e\u670d\u52a1\u4e3b\u4f53",level:3},{value:"1. \u521b\u5efa AKS \u4e91\u51ed\u8bc1",id:"1-\u521b\u5efa-aks-\u4e91\u51ed\u8bc1",level:2},{value:"2. \u521b\u5efa AKS \u96c6\u7fa4",id:"2-\u521b\u5efa-aks-\u96c6\u7fa4",level:2},{value:"RBAC",id:"rbac",level:2},{value:"AKS \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003",id:"aks-\u96c6\u7fa4\u914d\u7f6e\u53c2\u8003",level:2},{value:"\u79c1\u6709\u96c6\u7fa4",id:"\u79c1\u6709\u96c6\u7fa4",level:2},{value:"\u540c\u6b65",id:"\u540c\u6b65",level:2},{value:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa AKS \u96c6\u7fa4",id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa-aks-\u96c6\u7fa4",level:2}],k={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u521b\u5efa\u6258\u7ba1\u5728 Microsoft Azure Kubernetes \u670d\u52a1 (AKS) \u4e2d\u7684\u96c6\u7fa4\u3002"),(0,o.kt)("h2",{id:"microsoft-azure-\u4e2d\u7684\u5148\u51b3\u6761\u4ef6"},"Microsoft Azure \u4e2d\u7684\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u90e8\u7f72\u5230 AKS \u4f1a\u4ea7\u751f\u8d39\u7528\u3002"))),(0,o.kt)("p",null,"\u82e5\u8981\u4e0e Azure API \u4ea4\u4e92\uff0cAKS \u96c6\u7fa4\u9700\u8981 Azure Active Directory (AD) \u670d\u52a1\u4e3b\u4f53\u3002\u670d\u52a1\u4e3b\u4f53\u662f\u52a8\u6001\u521b\u5efa\u548c\u7ba1\u7406\u5176\u4ed6 Azure \u8d44\u6e90\u6240\u5fc5\u9700\u7684\uff0c\u5b83\u4e3a\u96c6\u7fa4\u63d0\u4f9b\u51ed\u8bc1\u6765\u4e0e AKS \u901a\u4fe1\u3002\u6709\u5173\u670d\u52a1\u4e3b\u4f53\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-service-principal"},"AKS \u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u5728\u521b\u5efa\u670d\u52a1\u4e3b\u4f53\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Microsoft Azure \u95e8\u6237"),"\u83b7\u53d6\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8ba2\u9605 ID"),(0,o.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef ID"),(0,o.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5bc6\u7801")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Azure \u547d\u4ee4\u884c\u5de5\u5177\u6216 Azure \u95e8\u6237\u8fdb\u884c\u8bbe\u7f6e\uff0c\u4ece\u800c\u6ee1\u8db3\u5148\u51b3\u6761\u4ef6\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528-azure-\u547d\u4ee4\u884c\u5de5\u5177\u8bbe\u7f6e\u670d\u52a1\u4e3b\u4f53"},"\u4f7f\u7528 Azure \u547d\u4ee4\u884c\u5de5\u5177\u8bbe\u7f6e\u670d\u52a1\u4e3b\u4f53"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u521b\u5efa\u670d\u52a1\u4e3b\u4f53\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"az ad sp create-for-rbac --skip-assignment\n")),(0,o.kt)("p",null,"\u7ed3\u679c\u5e94\u663e\u793a\u65b0\u670d\u52a1\u4e3b\u4f53\u7684\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "appId": "xxxx--xxx",\n  "displayName": "<SERVICE-PRINCIPAL-NAME>",\n  "name": "http://<SERVICE-PRINCIPAL-NAME>",\n  "password": "<SECRET>",\n  "tenant": "<TENANT NAME>"\n}\n')),(0,o.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u5411\u670d\u52a1\u4e3b\u4f53\u6dfb\u52a0\u89d2\u8272\uff0c\u4ee5\u4fbf\u5b83\u5177\u6709\u4e0e AKS API \u901a\u4fe1\u7684\u6743\u9650\u3002\u5b83\u8fd8\u9700\u8981\u8bbf\u95ee\u6743\u9650\u624d\u80fd\u521b\u5efa\u548c\u5217\u51fa\u865a\u62df\u7f51\u7edc\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u5c06\u53c2\u4e0e\u8005\u89d2\u8272\u5206\u914d\u7ed9\u670d\u52a1\u4e3b\u4f53\u7684\u793a\u4f8b\u547d\u4ee4\u3002\u53c2\u4e0e\u8005\u53ef\u4ee5\u7ba1\u7406 AKS \u4e0a\u7684\u4efb\u4f55\u5185\u5bb9\uff0c\u4f46\u4e0d\u80fd\u6388\u4e88\u5176\u4ed6\u4eba\u8bbf\u95ee\u6743\u9650\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"az role assignment create \\\n  --assignee $appId \\\n  --scope /subscriptions/$<SUBSCRIPTION-ID>/resourceGroups/$<GROUP> \\\n  --role Contributor\n")),(0,o.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5408\u5e76\u4e24\u4e2a\u547d\u4ee4\uff0c\u6765\u521b\u5efa\u670d\u52a1\u4e3b\u4f53\u5e76\u6388\u4e88\u53c2\u4e0e\u8005\u6743\u9650\u3002\u5728\u6b64\u547d\u4ee4\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"scope")," \u9700\u8981\u63d0\u4f9b Azure \u8d44\u6e90\u7684\u5b8c\u6574\u8def\u5f84\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"az ad sp create-for-rbac \\\n  --scope /subscriptions/$<SUBSCRIPTION-ID>/resourceGroups/$<GROUP> \\\n  --role Contributor\n")),(0,o.kt)("h3",{id:"\u4ece-azure-\u95e8\u6237\u8bbe\u7f6e\u670d\u52a1\u4e3b\u4f53"},"\u4ece Azure \u95e8\u6237\u8bbe\u7f6e\u670d\u52a1\u4e3b\u4f53"),(0,o.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u6309\u7167\u8fd9\u4e9b\u8bf4\u660e\u8bbe\u7f6e\u670d\u52a1\u4e3b\u4f53\uff0c\u5e76\u4ece Azure \u95e8\u6237\u4e3a\u5b83\u6388\u4e88\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f6c\u5230 Microsoft Azure \u95e8\u6237",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"\u4e3b\u9875"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Azure Active Directory"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"App registrations"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"New registration"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u540d\u79f0\u3002\u8fd9\u5c06\u662f\u4f60\u670d\u52a1\u4e3b\u4f53\u7684\u540d\u79f0\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53ef\u9009\uff1a\u9009\u62e9\u53ef\u4ee5\u4f7f\u7528\u670d\u52a1\u4e3b\u4f53\u7684\u8d26\u53f7\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Register"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f60\u73b0\u5728\u5e94\u8be5\u80fd\u5728 ",(0,o.kt)("strong",{parentName:"p"},"Azure Active Directory > App registrations")," \u4e0b\u770b\u5230\u670d\u52a1\u4e3b\u4f53\u7684\u540d\u79f0\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb\u4f60\u7684\u670d\u52a1\u4e3b\u4f53\u7684\u540d\u79f0\u3002\u8bb0\u4e0b\u5e94\u7528 ID\uff08\u4e5f\u79f0\u4e3a\u5e94\u7528 ID \u6216\u5ba2\u6237\u7aef ID\uff09\uff0c\u4ee5\u4fbf\u5728\u9884\u914d AKS \u96c6\u7fa4\u65f6\u4f7f\u7528\u3002\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Certificates & secrets"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"New client secret"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u7b80\u77ed\u8bf4\u660e\uff0c\u9009\u62e9\u8fc7\u671f\u65f6\u95f4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Add"),"\u3002\u8bb0\u4e0b\u5ba2\u6237\u7aef\u5bc6\u7801\uff0c\u4ee5\u4fbf\u5728\u9884\u914d AKS \u96c6\u7fa4\u65f6\u4f7f\u7528\u5b83\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u670d\u52a1\u4e3b\u4f53\uff0c\u73b0\u5728\u4f60\u80fd\u591f\u5728 ",(0,o.kt)("strong",{parentName:"p"},"App registrations")," \u4e0b\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Azure Active Directory")," \u4e2d\u627e\u5230\u5b83\u3002\u4f60\u4ecd\u7136\u9700\u8981\u5411\u670d\u52a1\u4e3b\u4f53\u6388\u4e88\u5bf9 AKS \u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,o.kt)("p",null,"\u8981\u6388\u4e88\u5bf9\u670d\u52a1\u4e3b\u4f53\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u6743\u9650\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"li"},"All Services"),"\u3002\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Subscriptions"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb\u8981\u4e0e Kubernetes \u96c6\u7fa4\u5173\u8054\u7684\u8ba2\u9605\u7684\u540d\u79f0\u3002\u8bb0\u4e0b\u8ba2\u9605 ID\uff0c\u4ee5\u4fbf\u5728\u9884\u914d AKS \u96c6\u7fa4\u65f6\u4f7f\u7528\u5b83\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Access Control (IAM)"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("strong",{parentName:"li"},"Add role assignment")," \u4e2d\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Add"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("strong",{parentName:"li"},"Role")," \u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9\u5c06\u6709\u6743\u8bbf\u95ee AKS \u7684\u89d2\u8272\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"li"},"Contributor")," \u89d2\u8272\uff0c\u8be5\u89d2\u8272\u6709\u6743\u7ba1\u7406\u9664\u6388\u4e88\u5176\u4ed6\u7528\u6237\u8bbf\u95ee\u6743\u9650\u4e4b\u5916\u7684\u6240\u6709\u5185\u5bb9\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("strong",{parentName:"li"},"Assign access to")," \u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"Azure AD \u7528\u6237\u3001\u7ec4\u6216\u670d\u52a1\u4e3b\u4f53"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("strong",{parentName:"li"},"Select")," \u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9\u670d\u52a1\u4e3b\u4f53\u7684\u540d\u79f0\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Save"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u7684\u670d\u52a1\u4e3b\u4f53\u73b0\u5728\u53ef\u4ee5\u8bbf\u95ee AKS\u3002"),(0,o.kt)("h2",{id:"1-\u521b\u5efa-aks-\u4e91\u51ed\u8bc1"},"1. \u521b\u5efa AKS \u4e91\u51ed\u8bc1"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728 Rancher UI \u4e2d\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4e91\u51ed\u8bc1"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Azure"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u586b\u5199\u8868\u5355\u3002\u6709\u5173\u586b\u5199\u8868\u683c\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"li",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration#%E4%BA%91%E5%87%AD%E8%AF%81"},"\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("h2",{id:"2-\u521b\u5efa-aks-\u96c6\u7fa4"},"2. \u521b\u5efa AKS \u96c6\u7fa4"),(0,o.kt)("p",null,"\u4f7f\u7528 Rancher \u914d\u7f6e\u4f60\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Azure AKS"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u586b\u5199\u8868\u5355\u3002\u6709\u5173\u586b\u5199\u8868\u683c\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"li",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration"},"\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u96c6\u7fa4\u5df2\u521b\u5efa\uff0c\u5e76\u5904\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"Provisioning")," \u72b6\u6001\u3002Rancher \u5df2\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,o.kt)("p",null,"\u5f53\u96c6\u7fa4\u72b6\u6001\u53d8\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"Active")," \u540e\uff0c\u4f60\u53ef\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,o.kt)("h2",{id:"rbac"},"RBAC"),(0,o.kt)("p",null,"\u5728 Rancher UI \u4e2d\u914d\u7f6e AKS \u96c6\u7fa4\u65f6\uff0c\u7531\u4e8e RBAC \u9700\u8981\u542f\u7528\uff0c\u56e0\u6b64 RBAC \u4e0d\u53ef\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u6ce8\u518c\u6216\u5bfc\u5165\u5230 Rancher \u7684 AKS \u96c6\u7fa4\u9700\u8981 RBAC\u3002"),(0,o.kt)("h2",{id:"aks-\u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"},"AKS \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"),(0,o.kt)("p",null,"\u6709\u5173\u5982\u4f55\u5728 Rancher UI \u914d\u7f6e AKS \u96c6\u7fa4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration"},"\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,o.kt)("h2",{id:"\u79c1\u6709\u96c6\u7fa4"},"\u79c1\u6709\u96c6\u7fa4"),(0,o.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u65e0\u8bba\u96c6\u7fa4\u662f\u5426\u4e3a\u79c1\u6709\uff0cAKS worker \u8282\u70b9\u90fd\u4e0d\u4f1a\u83b7\u5f97\u516c\u5171 IP\u3002\u5728\u79c1\u6709\u96c6\u7fa4\u4e2d\uff0ccontrolplane \u6ca1\u6709\u516c\u5171\u7aef\u70b9\u3002"),(0,o.kt)("p",null,"Rancher \u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u4e4b\u4e00\u8fde\u63a5\u5230\u79c1\u6709 AKS \u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u6cd5\u662f\u786e\u4fdd Rancher \u8fd0\u884c\u5728\u4e0e AKS \u8282\u70b9\u76f8\u540c\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-network/nat-overview"},"NAT")," \u4e0a\u3002"),(0,o.kt)("p",null,"\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u662f\u8fd0\u884c\u547d\u4ee4\u5411 Rancher \u6ce8\u518c\u96c6\u7fa4\u3002\u914d\u7f6e\u96c6\u7fa4\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u80fd\u8fde\u63a5\u5230\u96c6\u7fa4\u7684 Kubernetes API \u7684\u5730\u65b9\u8fd0\u884c\u663e\u793a\u7684\u547d\u4ee4\u3002\u914d\u7f6e\u542f\u7528\u4e86\u79c1\u6709 API \u7aef\u70b9\u7684 AKS \u96c6\u7fa4\u65f6\uff0c\u6b64\u547d\u4ee4\u5c06\u663e\u793a\u5728\u5f39\u51fa\u7a97\u53e3\u4e2d\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6ce8\u518c\u73b0\u6709 AKS \u96c6\u7fa4\u65f6\uff0c\u96c6\u7fa4\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\uff08\u53ef\u80fd\u662f\u6570\u5c0f\u65f6\uff09\u624d\u4f1a\u51fa\u73b0\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Cluster To register")," \u4e0b\u62c9\u5217\u8868\u4e2d\u3002\u4e0d\u540c\u533a\u57df\u7684\u7ed3\u679c\u53ef\u80fd\u4e0d\u540c\u3002"))),(0,o.kt)("p",null,"\u6709\u5173\u8fde\u63a5\u5230 AKS \u4e13\u7528\u96c6\u7fa4\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/private-clusters#options-for-connecting-to-the-private-cluster"},"AKS \u6587\u6863"),"\u3002"),(0,o.kt)("h2",{id:"\u540c\u6b65"},"\u540c\u6b65"),(0,o.kt)("p",null,"AKS \u914d\u7f6e\u8005\u53ef\u4ee5\u5728 Rancher \u548c\u63d0\u4f9b\u5546\u4e4b\u95f4\u540c\u6b65 AKS \u96c6\u7fa4\u7684\u72b6\u6001\u3002\u6709\u5173\u5176\u5de5\u4f5c\u539f\u7406\u7684\u6280\u672f\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"},"\u540c\u6b65"),"\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u914d\u7f6e\u5237\u65b0\u95f4\u9694\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/gke-cluster-configuration#%E9%85%8D%E7%BD%AE%E5%88%B7%E6%96%B0%E9%97%B4%E9%9A%94"},"\u672c\u8282"),"\u3002"),(0,o.kt)("h2",{id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa-aks-\u96c6\u7fa4"},"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u521b\u5efa AKS \u96c6\u7fa4"),(0,o.kt)("p",null,"\u901a\u8fc7 Rancher \u4ee5\u7f16\u7a0b\u65b9\u5f0f\u90e8\u7f72 AKS \u96c6\u7fa4\u7684\u6700\u5e38\u89c1\u65b9\u6cd5\u662f\u4f7f\u7528 Rancher 2 Terraform Provider\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"\u4f7f\u7528 Terraform \u521b\u5efa\u96c6\u7fa4"),"\u3002"))}m.isMDXComponent=!0}}]);