"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1350],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(r),k=o,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||a;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91014:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),p=["components"],s={title:"Kubernetes \u5de5\u4f5c\u8d1f\u8f7d\u548c Pod",description:"\u4e86\u89e3\u5728 Kubernetes \u4e2d\u6784\u5efa\u590d\u6742\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u4e24\u79cd\u7ed3\u6784\uff1aKubernetes \u5de5\u4f5c\u8d1f\u8f7d\u548c Pod",weight:3025},l=void 0,i={unversionedId:"pages-for-subheaders/workloads-and-pods",id:"pages-for-subheaders/workloads-and-pods",title:"Kubernetes \u5de5\u4f5c\u8d1f\u8f7d\u548c Pod",description:"\u4e86\u89e3\u5728 Kubernetes \u4e2d\u6784\u5efa\u590d\u6742\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u4e24\u79cd\u7ed3\u6784\uff1aKubernetes \u5de5\u4f5c\u8d1f\u8f7d\u548c Pod",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/workloads-and-pods.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/workloads-and-pods",permalink:"/zh/pages-for-subheaders/workloads-and-pods",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/workloads-and-pods.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Kubernetes \u5de5\u4f5c\u8d1f\u8f7d\u548c Pod",description:"\u4e86\u89e3\u5728 Kubernetes \u4e2d\u6784\u5efa\u590d\u6742\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u4e24\u79cd\u7ed3\u6784\uff1aKubernetes \u5de5\u4f5c\u8d1f\u8f7d\u548c Pod",weight:3025},sidebar:"tutorialSidebar",previous:{title:"Kubernetes \u8d44\u6e90",permalink:"/zh/pages-for-subheaders/kubernetes-resources-setup"},next:{title:"\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"}},u={},c=[{value:"Pod",id:"pod",level:3},{value:"\u5de5\u4f5c\u8d1f\u8f7d",id:"\u5de5\u4f5c\u8d1f\u8f7d",level:3},{value:"\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b",id:"\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b",level:4},{value:"Services",id:"services",level:3},{value:"Service \u7c7b\u578b",id:"service-\u7c7b\u578b",level:4},{value:"\u5de5\u4f5c\u8d1f\u8f7d\u9009\u9879",id:"\u5de5\u4f5c\u8d1f\u8f7d\u9009\u9879",level:2},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2},{value:"\u5916\u90e8\u94fe\u63a5",id:"\u5916\u90e8\u94fe\u63a5",level:3}],d={toc:c};function k(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u57fa\u672c\u7ed3\u6784\uff08pod \u548c\u5de5\u4f5c\u8d1f\u8f7d\uff09\u5728 Kubernetes \u4e2d\u6784\u5efa\u590d\u6742\u7684\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u3002\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u79cd\u7ed3\u6784\uff08service\uff09\u5728\u96c6\u7fa4\u4e2d\u6216\u4e92\u8054\u7f51\u4e0a\u516c\u5f00\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("h3",{id:"pod"},"Pod"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/"},(0,a.kt)("em",{parentName:"a"},"Pod"))," \u662f\u4e00\u4e2a\u6216\u591a\u4e2a\u5171\u4eab\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\u548c\u5b58\u50a8\u5377\u7684\u5bb9\u5668\u3002\u5927\u591a\u6570 pod \u53ea\u6709\u4e00\u4e2a\u5bb9\u5668\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u8ba8\u8bba\u7684 ",(0,a.kt)("em",{parentName:"p"},"pod")," \u901a\u5e38\u7b49\u540c\u4e8e ",(0,a.kt)("em",{parentName:"p"},"\u5bb9\u5668"),"\u3002\u6269\u5c55 pod \u7684\u65b9\u5f0f\u4e0e\u6269\u5c55\u5bb9\u5668\u7684\u65b9\u5f0f\u76f8\u540c\uff0c\u5373\u914d\u7f6e\u5b9e\u73b0\u670d\u52a1\u7684\u540c\u4e00 pod \u7684\u591a\u4e2a\u5b9e\u4f8b\u3002\u901a\u5e38\uff0cPod \u4f1a\u6839\u636e\u5de5\u4f5c\u8d1f\u8f7d\u8fdb\u884c\u6269\u5c55\u548c\u7ba1\u7406\u3002"),(0,a.kt)("h3",{id:"\u5de5\u4f5c\u8d1f\u8f7d"},"\u5de5\u4f5c\u8d1f\u8f7d"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u5de5\u4f5c\u8d1f\u8f7d")," \u662f\u4e3a pod \u8bbe\u7f6e\u90e8\u7f72\u89c4\u5219\u7684\u5bf9\u8c61\u3002Kubernetes \u57fa\u4e8e\u8fd9\u4e9b\u89c4\u5219\u6267\u884c\u90e8\u7f72\uff0c\u5e76\u6839\u636e\u5e94\u7528\u7a0b\u5e8f\u7684\u5f53\u524d\u72b6\u6001\u6765\u66f4\u65b0\u5de5\u4f5c\u8d1f\u8f7d\u3002\n\u5de5\u4f5c\u8d1f\u8f7d\u8ba9\u4f60\u53ef\u4ee5\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u8c03\u5ea6\u3001\u6269\u5c55\u548c\u5347\u7ea7\u7684\u89c4\u5219\u3002"),(0,a.kt)("h4",{id:"\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b"},"\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b"),(0,a.kt)("p",null,"Kubernetes \u5c06\u5de5\u4f5c\u8d1f\u8f7d\u5206\u4e3a\u4e0d\u540c\u7684\u7c7b\u578b\u3002Kubernetes \u652f\u6301\u7684\u6700\u6d41\u884c\u7684\u7c7b\u578b\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("em",{parentName:"p"},"Deployment")," \u6700\u9002\u5408\u7528\u4e8e\u65e0\u72b6\u6001\u5e94\u7528\u7a0b\u5e8f\uff08\u5373\u4e0d\u9700\u8981\u7ef4\u62a4\u5de5\u4f5c\u8d1f\u8f7d\u7684\u72b6\u6001\uff09\u3002\u7531 Deployment \u7c7b\u578b\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406\u7684 Pod \u662f\u72ec\u7acb\u4e14\u4e00\u6b21\u6027\u7684\u3002\u5982\u679c pod \u4e2d\u65ad\u4e86\uff0cKubernetes \u4f1a\u5220\u9664\u8be5 pod \u7136\u540e\u91cd\u65b0\u521b\u5efa\u5b83\u3002\u4e00\u4e2a\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u662f Nginx Web \u670d\u52a1\u5668\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet")),(0,a.kt)("p",{parentName:"li"}," \u4e0e Deployment \u76f8\u6bd4\uff0c",(0,a.kt)("em",{parentName:"p"},"StatefulSet")," \u6700\u9002\u5408\u5728\u9700\u8981\u7ef4\u62a4\u8eab\u4efd\u548c\u5b58\u50a8\u6570\u636e\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u3002\u9002\u7528\u7684\u5e94\u7528\u7a0b\u5e8f\u7c7b\u4f3c\u4e8e Zookeeper\uff08\u4e00\u4e2a\u9700\u8981\u6570\u636e\u5e93\u8fdb\u884c\u5b58\u50a8\u7684\u5e94\u7528\u7a0b\u5e8f\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("em",{parentName:"p"},"Daemonset")," \u786e\u4fdd\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u8fd0\u884c pod \u7684\u526f\u672c\u3002\u5982\u679c\u4f60\u9700\u8981\u6536\u96c6\u65e5\u5fd7\u6216\u76d1\u63a7\u8282\u70b9\u6027\u80fd\uff0c\u8fd9\u79cd\u7c7b\u4f3c daemon \u7684\u5de5\u4f5c\u8d1f\u8f7d\u6548\u679c\u662f\u6700\u597d\u7684\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"},"Job")),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("em",{parentName:"p"},"Job")," \u542f\u52a8\u4e00\u4e2a\u6216\u591a\u4e2a Pod \u5e76\u786e\u4fdd\u6307\u5b9a\u6570\u91cf\u7684 Pod \u80fd\u6210\u529f\u7ec8\u6b62\u3002Job \u6700\u597d\u7528\u4e8e\u8fd0\u884c\u6709\u9650\u4efb\u52a1\u81f3\u5b8c\u6210\u72b6\u6001\uff0c\u800c\u4e0d\u662f\u7ba1\u7406\u6b63\u5728\u8fdb\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u6240\u9700\u72b6\u6001\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"},"CronJob")),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("em",{parentName:"p"},"CronJobs")," \u4e0e Job \u7c7b\u4f3c\u3002\u4f46\u662f\uff0cCronJob \u4f1a\u57fa\u4e8e cron \u7684\u8ba1\u5212\u8fd0\u884c\u5230\u5b8c\u6210\u72b6\u6001\u3002"))),(0,a.kt)("h3",{id:"services"},"Services"),(0,a.kt)("p",null,"\u5728\u8bb8\u591a\u7528\u4f8b\u4e2d\uff0c\u5de5\u4f5c\u8d1f\u8f7d\u5fc5\u987b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7531\u96c6\u7fa4\u4e2d\u7684\u5176\u4ed6\u5de5\u4f5c\u8d1f\u8f7d\u8bbf\u95ee\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u66b4\u9732\u7ed9\u5916\u90e8\u3002")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("em",{parentName:"p"},"Service")," \u5b9e\u73b0\u8fd9\u4e9b\u76ee\u7684\u3002Service \u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#service-and-replicationcontroller"},"\u9009\u62e9\u5668/\u6807\u7b7e\uff08\u67e5\u770b\u4ee3\u7801\u793a\u4f8b\uff09"),"\u6765\u6620\u5c04\u5230\u5e95\u5c42\u5de5\u4f5c\u8d1f\u8f7d\u7684 pod\u3002Rancher UI \u4f7f\u7528\u4f60\u9009\u62e9\u7684\u670d\u52a1\u7aef\u53e3\u548c\u7c7b\u578b\u6765\u81ea\u52a8\u521b\u5efa service \u4ee5\u53ca\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u4ece\u800c\u7b80\u5316\u6b64\u6620\u5c04\u8fc7\u7a0b\u3002"),(0,a.kt)("h4",{id:"service-\u7c7b\u578b"},"Service \u7c7b\u578b"),(0,a.kt)("p",null,"Rancher \u4e2d\u6709\u51e0\u79cd\u53ef\u7528\u7684 Service \u7c7b\u578b\u3002\u4ee5\u4e0b\u63cf\u8ff0\u6765\u81ea ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"},"Kubernetes \u6587\u6863"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ClusterIP")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u96c6\u7fa4\u5185\u90e8 IP \u4e0a\u516c\u5f00 Service\u3002\u5982\u679c\u4f60\u9009\u62e9\u6b64\u503c\uff0cService \u53ea\u80fd\u4ece\u96c6\u7fa4\u5185\u8bbf\u95ee\u3002\u8fd9\u662f\u9ed8\u8ba4\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceType"),"\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"NodePort")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u6bcf\u4e2a\u8282\u70b9 IP \u4e0a\u7684\u9759\u6001\u7aef\u53e3\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort"),"\uff09\u4e0a\u66b4\u9732 Service\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterIP")," service \u662f\u81ea\u52a8\u521b\u5efa\u7684\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort")," service \u4f1a\u8def\u7531\u5230 ClusterIP service\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bf7\u6c42 ",(0,a.kt)("inlineCode",{parentName:"p"},"<NodeIP>:<NodePort>")," \u5728\u96c6\u7fa4\u5916\u90e8\u8054\u7cfb ",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort")," service\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"LoadBalancer")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u4e91\u63d0\u4f9b\u5546\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u5411\u5916\u90e8\u516c\u5f00\u670d\u52a1\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterIP")," service \u662f\u81ea\u52a8\u521b\u5efa\u7684\uff0c\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668\u4f1a\u8def\u7531\u5230\u8fd9\u4e9b service\u3002")))),(0,a.kt)("h2",{id:"\u5de5\u4f5c\u8d1f\u8f7d\u9009\u9879"},"\u5de5\u4f5c\u8d1f\u8f7d\u9009\u9879"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u548c\u4f7f\u7528\u5de5\u4f5c\u8d1f\u8f7d\u9009\u9879\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"},"\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads"},"\u56de\u6eda\u5de5\u4f5c\u8d1f\u8f7d"))),(0,a.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,a.kt)("h3",{id:"\u5916\u90e8\u94fe\u63a5"},"\u5916\u90e8\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service"))))}k.isMDXComponent=!0}}]);