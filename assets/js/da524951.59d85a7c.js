"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73034],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),h=c(t),p=o,f=h["".concat(u,".").concat(p)]||h[p]||d[p]||i;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=h;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},62314:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),s=["components"],a={title:"Behavior Differences Between RKE1 and RKE2",weight:2450},u=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",title:"Behavior Differences Between RKE1 and RKE2",description:"RKE2, also known as RKE Government, is a Kubernetes distribution that focuses on security and compliance for U.S. Federal Government entities. It is considered the next iteration of the Rancher Kubernetes Engine, now known as RKE1.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/rke1-vs-rke2-differences.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/rke1-vs-rke2-differences.md",tags:[],version:"current",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Behavior Differences Between RKE1 and RKE2",weight:2450},sidebar:"tutorialSidebar",previous:{title:"Migrating vSphere In-tree Volumes to CSI",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree"},next:{title:"Rancher Agents",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents"}},l={},d=[{value:"Control Plane Components",id:"control-plane-components",level:3},{value:"Cluster API",id:"cluster-api",level:3},{value:"Terminology",id:"terminology",level:3}],h={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RKE2, also known as RKE Government, is a Kubernetes distribution that focuses on security and compliance for U.S. Federal Government entities. It is considered the next iteration of the Rancher Kubernetes Engine, now known as RKE1."),(0,i.kt)("p",null,"RKE1 and RKE2 have several slight behavioral differences to note, and this page will highlight some of these at a high level."),(0,i.kt)("h3",{id:"control-plane-components"},"Control Plane Components"),(0,i.kt)("p",null,"RKE1 uses Docker for deploying and managing control plane components, and it also uses Docker as the container runtime for Kubernetes. By contrast, RKE2 launches control plane components as static pods that are managed by the kubelet. RKE2's container runtime is containerd, which allows things such as container registry mirroring (RKE1 with Docker does not)."),(0,i.kt)("h3",{id:"cluster-api"},"Cluster API"),(0,i.kt)("p",null,"RKE2/K3s provisioning is built on top of the Cluster API (CAPI) upstream framework which often makes RKE2-provisioned clusters behave differently than RKE1-provisioned clusters. "),(0,i.kt)("p",null,"When you make changes to your cluster configuration in RKE2, this ",(0,i.kt)("strong",{parentName:"p"},"may")," result in nodes reprovisioning. This is controlled by CAPI controllers and not by Rancher itself. Note that for etcd nodes, the same behavior does not apply."),(0,i.kt)("p",null,"The following are some specific example configuration changes that may cause the described behavior:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When editing the cluster and enabling ",(0,i.kt)("inlineCode",{parentName:"p"},"drain before delete"),", the existing control plane nodes and worker are deleted and new nodes are created.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When nodes are being provisioned and a scale down operation is performed, rather than scaling down the desired number of nodes, it is possible that the currently provisioning nodes get deleted and new nodes are provisioned to reach the desired node count. Please note that this is a bug in Cluster API, and it will be fixed in an upcoming release. Once fixed, Rancher will update the documentation."))),(0,i.kt)("p",null,"Users who are used to RKE1 provisioning should take note of this new RKE2 behavior which may be unexpected."),(0,i.kt)("h3",{id:"terminology"},"Terminology"),(0,i.kt)("p",null,"You will notice that some terms have changed or gone away going from RKE1 to RKE2. For example, in RKE1 provisioning, you use ",(0,i.kt)("strong",{parentName:"p"},"node templates"),"; in RKE2 provisioning, you can configure your cluster node pools when creating or editing the cluster. Another example is that the term ",(0,i.kt)("strong",{parentName:"p"},"node pool")," in RKE1 is now known as ",(0,i.kt)("strong",{parentName:"p"},"machine pool")," in RKE2."))}p.isMDXComponent=!0}}]);