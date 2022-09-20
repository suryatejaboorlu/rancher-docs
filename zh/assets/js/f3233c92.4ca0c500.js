"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[44884],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=o(r),k=a,m=h["".concat(i,".").concat(k)]||h[k]||p[k]||l;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=h;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var o=2;o<l;o++)c[o]=r[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88477:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),c=["components"],u={title:"\u4e0e\u4e0b\u6e38\u96c6\u7fa4\u901a\u4fe1"},i=void 0,o={unversionedId:"reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters",id:"reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters",title:"\u4e0e\u4e0b\u6e38\u96c6\u7fa4\u901a\u4fe1",description:"\u672c\u8282\u4ecb\u7ecd Rancher \u5982\u4f55\u914d\u7f6e\u548c\u7ba1\u7406\u8fd0\u884c\u5e94\u7528\u548c\u670d\u52a1\u7684\u4e0b\u6e38\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md",sourceDirName:"reference-guides/rancher-manager-architecture",slug:"/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters",permalink:"/zh/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u4e0e\u4e0b\u6e38\u96c6\u7fa4\u901a\u4fe1"},sidebar:"tutorialSidebar",previous:{title:"Rancher Server \u548c Components",permalink:"/zh/reference-guides/rancher-manager-architecture/rancher-server-and-components"},next:{title:"\u67b6\u6784\u63a8\u8350",permalink:"/zh/reference-guides/rancher-manager-architecture/architecture-recommendations"}},s={},p=[{value:"1. \u8ba4\u8bc1\u4ee3\u7406",id:"1-\u8ba4\u8bc1\u4ee3\u7406",level:3},{value:"2. Cluster Controller \u548c Cluster Agent",id:"2-cluster-controller-\u548c-cluster-agent",level:3},{value:"3. Node Agents",id:"3-node-agents",level:3},{value:"4. \u6388\u6743\u96c6\u7fa4\u7aef\u70b9",id:"4-\u6388\u6743\u96c6\u7fa4\u7aef\u70b9",level:3},{value:"Rancher \u4e3a\u6258\u7ba1\u5728\u4e91\u63d0\u4f9b\u5546\u4e2d\u7684\u8282\u70b9\u542f\u52a8 Kubernetes",id:"rancher-\u4e3a\u6258\u7ba1\u5728\u4e91\u63d0\u4f9b\u5546\u4e2d\u7684\u8282\u70b9\u542f\u52a8-kubernetes",level:3},{value:"Rancher \u4e3a\u81ea\u5b9a\u4e49\u8282\u70b9\u542f\u52a8 Kubernetes",id:"rancher-\u4e3a\u81ea\u5b9a\u4e49\u8282\u70b9\u542f\u52a8-kubernetes",level:3},{value:"\u6258\u7ba1\u7684 Kubernetes \u63d0\u4f9b\u5546",id:"\u6258\u7ba1\u7684-kubernetes-\u63d0\u4f9b\u5546",level:3},{value:"\u5bfc\u5165\u7684 Kubernetes \u96c6\u7fa4",id:"\u5bfc\u5165\u7684-kubernetes-\u96c6\u7fa4",level:3}],h={toc:p};function k(e){var t=e.components,u=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd Rancher \u5982\u4f55\u914d\u7f6e\u548c\u7ba1\u7406\u8fd0\u884c\u5e94\u7528\u548c\u670d\u52a1\u7684\u4e0b\u6e38\u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86 Cluster Controller\u3001Cluster Agent \u548c Node Agent \u8ba9 Rancher \u63a7\u5236\u4e0b\u6e38\u96c6\u7fa4\u7684\u3002"),(0,l.kt)("figcaption",null,"\u4e0e\u4e0b\u6e38\u96c6\u7fa4\u901a\u4fe1"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Rancher \u7ec4\u4ef6",src:r(78422).Z,width:"758",height:"750"})),(0,l.kt)("p",null,"\u4ee5\u4e0b\u63cf\u8ff0\u5bf9\u5e94\u4e8e\u4e0a\u56fe\u4e2d\u7684\u6570\u5b57\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-%E8%AE%A4%E8%AF%81%E4%BB%A3%E7%90%86"},"\u8ba4\u8bc1\u4ee3\u7406")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-cluster-controller-%E5%92%8C-cluster-agent"},"Cluster Controller \u548c Cluster Agent")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-node-agents"},"Node Agents")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#4-%E6%8E%88%E6%9D%83%E9%9B%86%E7%BE%A4%E7%AB%AF%E7%82%B9"},"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9"))),(0,l.kt)("h3",{id:"1-\u8ba4\u8bc1\u4ee3\u7406"},"1. \u8ba4\u8bc1\u4ee3\u7406"),(0,l.kt)("p",null,"\u5728\u6b64\u56fe\u4e2d\uff0c\u540d\u4e3a Bob \u7684\u7528\u6237\u5e0c\u671b\u67e5\u770b\u5728\u540d\u4e3a User Cluster 1 \u7684\u4e0b\u6e38\u96c6\u7fa4\u4e0a\u8fd0\u884c\u7684\u6240\u6709 Pod\u3002\u5728 Rancher \u4e2d\uff0c\u4ed6\u53ef\u4ee5\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4\u6765\u67e5\u770b\nPod\u3002Bob \u901a\u8fc7 Rancher \u7684\u8ba4\u8bc1\u4ee3\u7406\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,l.kt)("p",null,"\u8ba4\u8bc1\u4ee3\u7406\u5c06\u6240\u6709 Kubernetes API \u8c03\u7528\u8f6c\u53d1\u5230\u4e0b\u6e38\u96c6\u7fa4\u3002\u5b83\u96c6\u6210\u4e86\u672c\u5730\u8eab\u4efd\u9a8c\u8bc1\u3001Active Directory \u548c GitHub \u7b49\u8eab\u4efd\u9a8c\u8bc1\u65b9\u5f0f\u3002\u5728\u6bcf\u4e2a Kubernetes API \u8c03\u7528\u8bf7\u6c42\u65f6\uff0c\u8ba4\u8bc1\u4ee3\u7406\u4f1a\u9a8c\u8bc1\u8bf7\u6c42\u65b9\u7684\u8eab\u4efd\uff0c\u5e76\u5728\u8f6c\u53d1\u7ed9 Kubernetes master \u8282\u70b9\u4e4b\u524d\uff0c\u8bbe\u7f6e\u6b63\u786e\u7684 Kubernetes \u6d88\u606f\u5934\u3002"),(0,l.kt)("p",null,"Rancher \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},"ServiceAccount")," \u4e0e Kubernetes \u96c6\u7fa4\u901a\u4fe1\uff0c\u8be5 ServiceAccount \u4e3a\u5728 Pod \u4e2d\u8fd0\u884c\u7684\u8fdb\u7a0b\u63d0\u4f9b\u8eab\u4efd\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u751f\u6210\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"kubeconfig \u6587\u4ef6"),"\uff0c\u6587\u4ef6\u5305\u542b\u51ed\u8bc1\u4fe1\u606f\uff0c\u7528\u4e8e\u4e3a Rancher Server \u8fde\u63a5\u4e0b\u6e38\u96c6\u7fa4\u7684 Kubernetes API Server \u7684\u4ee3\u7406\u3002kubeconfig \u6587\u4ef6 (",(0,l.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),") \u5305\u542b\u5bf9\u96c6\u7fa4\u7684\u5b8c\u5168\u8bbf\u95ee\u6743\u9650\u3002"),(0,l.kt)("h3",{id:"2-cluster-controller-\u548c-cluster-agent"},"2. Cluster Controller \u548c Cluster Agent"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\u90fd\u6709\u4e00\u4e2a Cluster Agent\uff0c\u7528\u4e8e\u6253\u5f00\u4e0e Rancher Server \u4e2d\u5bf9\u5e94\u7684 Cluster Controller \u4e4b\u95f4\u7684\u901a\u9053\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\u6709\u4e00\u4e2a Cluster Controller \u548c\u4e00\u4e2a Cluster Agent\u3002\u6bcf\u4e2a Cluster Controller \u90fd\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u68c0\u6d4b\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684\u8d44\u6e90\u53d8\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u4e0b\u6e38\u96c6\u7fa4\u7684\u5f53\u524d\u72b6\u6001\u53d8\u66f4\u5230\u76ee\u6807\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u96c6\u7fa4\u548c\u9879\u76ee\u7684\u8bbf\u95ee\u63a7\u5236\u7b56\u7565"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8c03\u7528\u6240\u9700\u7684 Docker Machine \u9a71\u52a8\u548c Kubernetes \u5f15\u64ce\uff08\u4f8b\u5982 RKE \u548c GKE\uff09\u6765\u914d\u7f6e\u96c6\u7fa4")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cCluster Controller \u8fde\u63a5\u5230 Cluster Agent\uff0cRancher \u624d\u80fd\u4e0e\u4e0b\u6e38\u96c6\u7fa4\u901a\u4fe1\u3002\u5982\u679c Cluster Agent \u4e0d\u53ef\u7528\uff0cCluster Controller \u53ef\u4ee5\u8fde\u63a5\u5230 ",(0,l.kt)("a",{parentName:"p",href:"#3-node-agents"},"Node Agent"),"\u3002"),(0,l.kt)("p",null,"Cluster Agent\uff0c\u4e5f\u53eb\u505a ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent"),"\uff0c\u662f\u8fd0\u884c\u5728\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684\u7ec4\u4ef6\u3002\u5b83\u5177\u6709\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fde\u63a5 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u4e2d\u7684 Kubernetes API\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u96c6\u7fa4\u5185\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0cpod \u521b\u5efa\u548c\u90e8\u7f72\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e\u6bcf\u4e2a\u96c6\u7fa4\u7684\u5168\u5c40\u7b56\u7565\uff0c\u5e94\u7528\u5b9a\u4e49\u7684\u89d2\u8272\u548c\u7ed1\u5b9a\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4e0e Cluster Controller \u4e4b\u95f4\u7684\u901a\u9053\uff0c\u5b9e\u73b0\u96c6\u7fa4\u548c Rancher Server \u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u5305\u62ec\u4e8b\u4ef6\uff0c\u7edf\u8ba1\u6570\u636e\uff0c\u8282\u70b9\u4fe1\u606f\u548c\u5065\u5eb7\u72b6\u51b5\u3002")),(0,l.kt)("h3",{id:"3-node-agents"},"3. Node Agents"),(0,l.kt)("p",null,"\u5982\u679c Cluster Agent\uff08\u4e5f\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent"),"\uff09\u4e0d\u53ef\u7528\uff0c\u5176\u4e2d\u4e00\u4e2a Node Agent \u4f1a\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\u5230 Cluster Controller \u7684\u901a\u9053\u4e0e Rancher \u901a\u4fe1\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")," \u8d44\u6e90\u8fdb\u884c\u90e8\u7f72\uff0c\u4ee5\u786e\u4fdd\u5b83\u80fd\u5728 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\uff0c\u7528\u4e8e\u5728\u6267\u884c\u96c6\u7fa4\u64cd\u4f5c\u65f6\u4e0e\u8282\u70b9\u4ea4\u4e92\u3002\u96c6\u7fa4\u64cd\u4f5c\u7684\u5305\u62ec\u5347\u7ea7 Kubernetes \u7248\u672c\uff0c\u521b\u5efa\u6216\u6062\u590d etcd \u5feb\u7167\u7b49\u3002"),(0,l.kt)("h3",{id:"4-\u6388\u6743\u96c6\u7fa4\u7aef\u70b9"},"4. \u6388\u6743\u96c6\u7fa4\u7aef\u70b9"),(0,l.kt)("p",null,"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\uff08ACE\uff09\u53ef\u8fde\u63a5\u5230\u4e0b\u6e38\u96c6\u7fa4\u7684 Kubernetes API Server\uff0c\u800c\u4e0d\u7528\u901a\u8fc7 Rancher \u8ba4\u8bc1\u4ee3\u7406\u8c03\u5ea6\u8bf7\u6c42\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u4ec5\u9002\u7528\u4e8e Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5373\u53ea\u9002\u7528\u4e8e Rancher ",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"\u4f7f\u7528 RKE")," \u6765\u914d\u7f6e\u7684\u96c6\u7fa4\u3002\u5b83\u4e0d\u9002\u7528\u4e8e\u5bfc\u5165\u7684\u96c6\u7fa4\uff0c\u4e5f\u4e0d\u9002\u7528\u4e8e\u6258\u7ba1\u5728 Kubernetes \u63d0\u4f9b\u5546\u4e2d\u7684\u96c6\u7fa4\uff08\u4f8b\u5982 Amazon \u7684 EKS\uff09\u3002")),(0,l.kt)("p",null,"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u4e3b\u8981\u7528\u9014\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 Rancher \u4e0d\u53ef\u7528\u65f6\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Rancher Server \u548c\u4e0e\u4e0b\u6e38\u96c6\u7fa4\u4e4b\u95f4\u76f8\u8ddd\u751a\u8fdc\u65f6\u964d\u4f4e\u5ef6\u8fdf")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," \u5fae\u670d\u52a1\u4e3a\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u63d0\u4f9b\u7528\u6237\u9a8c\u8bc1\u529f\u80fd\u3002\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4\u65f6\uff0c\u96c6\u7fa4\u7684 Kubernetes API Server \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," \u670d\u52a1\u4f5c\u4e3a webhook \u5bf9\u7528\u6237\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,l.kt)("p",null,"\u4e0e\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u4e00\u6837\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," \u7684\u8eab\u4efd\u9a8c\u8bc1\u529f\u80fd\u4e5f\u4ec5\u9002\u7528\u4e8e Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u573a\u666f\uff1a")," \u5047\u8bbe Rancher Server \u4f4d\u4e8e\u7f8e\u56fd\uff0cUser Cluster 1 \u4e0e\u7528\u6237 Alice \u5747\u4f4d\u4e8e\u6fb3\u5927\u5229\u4e9a\u3002Alice \u53ef\u4ee5\u4f7f\u7528 Rancher UI \u64cd\u4f5c User Cluster 1 \u4e2d\u7684\u8d44\u6e90\uff0c\u4f46\u5979\u7684\u8bf7\u6c42\u5fc5\u987b\u4ece\u6fb3\u5927\u5229\u4e9a\u53d1\u9001\u5230\u7f8e\u56fd\u7684 Rancher Server\uff0c\u7136\u540e\u901a\u8fc7\u4ee3\u7406\u8fd4\u56de\u6fb3\u5927\u5229\u4e9a\uff0c\u5373\u4e0b\u6e38\u96c6\u7fa4\u6240\u5728\u7684\u4f4d\u7f6e\u3002\u5730\u7406\u8ddd\u79bb\u53ef\u80fd\u5bfc\u81f4\u660e\u663e\u5ef6\u8fdf\uff0c\u56e0\u6b64\uff0cAlice \u53ef\u4ee5\u4f7f\u7528\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u6765\u964d\u4f4e\u5ef6\u8fdf\u3002")),(0,l.kt)("p",null,"\u4e3a\u4e0b\u6e38\u96c6\u7fa4\u542f\u7528\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u540e\uff0cRancher \u4f1a\u5728 kubeconfig \u6587\u4ef6\u4e2d\u989d\u5916\u751f\u6210\u4e00\u6bb5 Kubernetes \u4e0a\u4e0b\u6587\uff0c\u7528\u4e8e\u76f4\u8fde\u5230\u96c6\u7fa4\u3002\u8be5\u6587\u4ef6\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"helm"),"\u7684\u51ed\u8bc1\u3002"),(0,l.kt)("p",null,"\u5982\u679c Rancher \u51fa\u73b0\u95ee\u9898\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u6b64 kubeconfig \u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u4e0a\u4e0b\u6587\u6765\u8bbf\u95ee\u96c6\u7fa4\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u5bfc\u51fa kubeconfig \u6587\u4ef6\uff0c\u4ee5\u4fbf\u5728 Rancher \u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u4ecd\u80fd\u4f7f\u7528\u6587\u4ef6\u4e2d\u7684\u51ed\u8bc1\u8bbf\u95ee\u96c6\u7fa4\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"kubectl \u548c kubeconfig \u6587\u4ef6"),"\u8bbf\u95ee\u96c6\u7fa4\u7684\u7ae0\u8282\u3002"),(0,l.kt)("h1",{id:"\u91cd\u8981\u6587\u4ef6"},"\u91cd\u8981\u6587\u4ef6"),(0,l.kt)("p",null,"\u7ef4\u62a4\u3001\u6392\u9664\u95ee\u9898\u548c\u5347\u7ea7\u96c6\u7fa4\u9700\u8981\u7528\u5230\u4ee5\u4e0b\u6587\u4ef6\uff0c\u8bf7\u59a5\u5584\u4fdd\u7ba1\u8fd9\u4e9b\u6587\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),"\uff1aRKE \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube_config_rancher-cluster.yml"),"\uff1a\u96c6\u7fa4\u7684 Kubeconfig \u6587\u4ef6\uff0c\u5305\u542b\u5b8c\u5168\u8bbf\u95ee\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002\u5982\u679c Rancher \u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u6587\u4ef6\u8ba4\u8bc1\u7531 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),"\uff1aKubernetes \u96c6\u7fa4\u72b6\u6001\u6587\u4ef6\uff0c\u6587\u4ef6\u5305\u542b\u7528\u4e8e\u5b8c\u5168\u8bbf\u95ee\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002\u6ce8\u610f\uff1a\u4ec5\u5728\u4f7f\u7528 RKE v0.2.0 \u6216\u66f4\u9ad8\u7248\u672c\u65f6\uff0c\u624d\u4f1a\u521b\u5efa\u6b64\u8be5\u6587\u4ef6\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u540e\u4e24\u4e2a\u6587\u4ef6\u540d\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster")," \u90e8\u5206\u53d6\u51b3\u4e8e\u4f60\u547d\u540d RKE \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u3002")),(0,l.kt)("p",null,"\u6709\u5173\u5728\u6ca1\u6709 Rancher \u8ba4\u8bc1\u4ee3\u7406\u548c\u5176\u4ed6\u914d\u7f6e\u9009\u9879\u7684\u60c5\u51b5\u4e0b\u8fde\u63a5\u5230\u96c6\u7fa4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"kubeconfig \u6587\u4ef6"),"\u3002"),(0,l.kt)("h1",{id:"\u914d\u7f6e-kubernetes-\u96c6\u7fa4\u7684\u5de5\u5177"},"\u914d\u7f6e Kubernetes \u96c6\u7fa4\u7684\u5de5\u5177"),(0,l.kt)("p",null,"Rancher \u4f7f\u7528\u4ec0\u4e48\u5de5\u5177\u914d\u7f6e\u4e0b\u6e38\u96c6\u7fa4\uff0c\u53d6\u51b3\u4e8e\u96c6\u7fa4\u7684\u7c7b\u578b\u3002"),(0,l.kt)("h3",{id:"rancher-\u4e3a\u6258\u7ba1\u5728\u4e91\u63d0\u4f9b\u5546\u4e2d\u7684\u8282\u70b9\u542f\u52a8-kubernetes"},"Rancher \u4e3a\u6258\u7ba1\u5728\u4e91\u63d0\u4f9b\u5546\u4e2d\u7684\u8282\u70b9\u542f\u52a8 Kubernetes"),(0,l.kt)("p",null,"Rancher \u53ef\u4ee5\u52a8\u6001\u542f\u52a8\u4e91\u4e0a\uff08\u5982 Amazon EC2\u3001DigitalOcean\u3001Azure \u6216 vSphere \u7b49\uff09\u7684\u8282\u70b9\uff0c\u7136\u540e\u5728\u8282\u70b9\u4e0a\u5b89\u88c5 Kubernetes\u3002"),(0,l.kt)("p",null,"Rancher \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke"},"RKE")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/machine"},"docker-machine")," \u6765\u914d\u7f6e\u8fd9\u7c7b\u578b\u7684\u96c6\u7fa4\u3002"),(0,l.kt)("h3",{id:"rancher-\u4e3a\u81ea\u5b9a\u4e49\u8282\u70b9\u542f\u52a8-kubernetes"},"Rancher \u4e3a\u81ea\u5b9a\u4e49\u8282\u70b9\u542f\u52a8 Kubernetes"),(0,l.kt)("p",null,"\u5728\u914d\u7f6e\u6b64\u7c7b\u96c6\u7fa4\u65f6\uff0cRancher \u4f1a\u5728\u73b0\u6709\u8282\u70b9\u4e0a\u5b89\u88c5 Kubernetes\uff0c\u4ece\u800c\u521b\u5efa\u81ea\u5b9a\u4e49\u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"Rancher \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke"},"RKE")," \u6765\u542f\u52a8\u6b64\u7c7b\u96c6\u7fa4\u3002"),(0,l.kt)("h3",{id:"\u6258\u7ba1\u7684-kubernetes-\u63d0\u4f9b\u5546"},"\u6258\u7ba1\u7684 Kubernetes \u63d0\u4f9b\u5546"),(0,l.kt)("p",null,"\u914d\u7f6e\u6b64\u7c7b\u96c6\u7fa4\u65f6\uff0cKubernetes \u7531\u4e91\u63d0\u4f9b\u5546\u5b89\u88c5\uff0c\u5982 GKE\u3001ECS \u6216 AKS \u7b49\u3002"),(0,l.kt)("p",null,"Rancher \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/kontainer-engine"},"kontainer-engine")," \u914d\u7f6e\u6b64\u7c7b\u578b\u7684\u96c6\u7fa4\u3002"),(0,l.kt)("h3",{id:"\u5bfc\u5165\u7684-kubernetes-\u96c6\u7fa4"},"\u5bfc\u5165\u7684 Kubernetes \u96c6\u7fa4"),(0,l.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cRancher \u9700\u8981\u8fde\u63a5\u5230\u4e00\u4e2a\u8bbe\u7f6e\u597d\u7684 Kubernetes \u96c6\u7fa4\u3002\u56e0\u6b64\uff0cRancher \u4e0d\u63d0\u4f9b Kubernetes\uff0c\u53ea\u8bbe\u7f6e Rancher Agent \u5b9e\u73b0\u4e0e\u96c6\u7fa4\u901a\u4fe1\u3002"),(0,l.kt)("h1",{id:"rancher-server-\u7ec4\u4ef6\u548c\u6e90\u7801"},"Rancher Server \u7ec4\u4ef6\u548c\u6e90\u7801"),(0,l.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86 Rancher Server \u7684\u7ec4\u4ef6\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Rancher \u7ec4\u4ef6",src:r(1962).Z,width:"647",height:"276"})),(0,l.kt)("p",null,"Rancher \u7684 GitHub \u4ee3\u7801\u4ed3\u5e93\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher"},"Rancher Server \u4e3b\u4ee3\u7801\u5e93")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/ui"},"Rancher UI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/api-ui"},"Rancher API UI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/norman"},"Norman"),"\uff08Rancher \u7684 API \u6846\u67b6\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/types"},"\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/cli"},"Rancher CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/helm"},"\u5e94\u7528\u5546\u5e97"))),(0,l.kt)("p",null,"\u4ee5\u4e0a\u4ec5\u5217\u51fa\u90e8\u5206 Rancher \u6700\u91cd\u8981\u7684\u4ed3\u5e93\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/contribute-to-rancher#%E4%BB%93%E5%BA%93"},"\u53c2\u4e0e Rancher \u5f00\u6e90\u8d21\u732e"),"\u3002\u5982\u9700\u83b7\u53d6 Rancher \u4f7f\u7528\u7684\u6240\u6709\u5e93\u548c\u9879\u76ee\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," \u4ed3\u5e93\u4e2d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/master/go.mod"},(0,l.kt)("inlineCode",{parentName:"a"},"go.mod")," \u6587\u4ef6"),"\u3002"))}k.isMDXComponent=!0},78422:function(e,t,r){t.Z=r.p+"assets/images/rancher-architecture-cluster-controller-39be909f05f9b9a0e356df60dd00ea5e.svg"},1962:function(e,t,r){t.Z=r.p+"assets/images/rancher-architecture-rancher-components-64200c35eda5939f425c67f5a498f96f.svg"}}]);