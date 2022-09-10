"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25991],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45735:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={title:"Roles for Nodes in Kubernetes",weight:1},l=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",title:"Roles for Nodes in Kubernetes",description:"This section describes the roles for etcd nodes, controlplane nodes, and worker nodes in Kubernetes, and how the roles work together in a cluster.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes.md",tags:[],version:"current",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Roles for Nodes in Kubernetes",weight:1},sidebar:"tutorialSidebar",previous:{title:"Recommended Cluster Architecture",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture"},next:{title:"Setting up Clusters from Hosted Kubernetes Providers",permalink:"/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"}},u={},d=[{value:"kube-apiserver",id:"kube-apiserver",level:3},{value:"kube-controller-manager",id:"kube-controller-manager",level:3},{value:"kube-scheduler",id:"kube-scheduler",level:3}],p={toc:d};function h(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section describes the roles for etcd nodes, controlplane nodes, and worker nodes in Kubernetes, and how the roles work together in a cluster."),(0,s.kt)("p",null,"This diagram is applicable to Kubernetes clusters ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"launched with Rancher using RKE."),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Cluster diagram",src:n(56492).Z,width:"772",height:"1145"}),(0,s.kt)("br",null)),(0,s.kt)("sup",null,"Lines show the traffic flow between components. Colors are used purely for visual aid"),(0,s.kt)("h1",{id:"etcd"},"etcd"),(0,s.kt)("p",null,"Nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"etcd")," role run etcd, which is a consistent and highly available key value store used as Kubernetes\u2019 backing store for all cluster data. etcd replicates the data to each node."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"etcd")," role are shown as ",(0,s.kt)("inlineCode",{parentName:"p"},"Unschedulable")," in the UI, meaning no pods will be scheduled to these nodes by default."))),(0,s.kt)("h1",{id:"controlplane"},"controlplane"),(0,s.kt)("p",null,"Nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"controlplane")," role run the Kubernetes master components (excluding ",(0,s.kt)("inlineCode",{parentName:"p"},"etcd"),", as it's a separate role). See ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#master-components"},"Kubernetes: Master Components")," for a detailed list of components."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"controlplane")," role are shown as ",(0,s.kt)("inlineCode",{parentName:"p"},"Unschedulable")," in the UI, meaning no pods will be scheduled to these nodes by default."))),(0,s.kt)("h3",{id:"kube-apiserver"},"kube-apiserver"),(0,s.kt)("p",null,"The Kubernetes API server (",(0,s.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),") scales horizontally. Each node with the role ",(0,s.kt)("inlineCode",{parentName:"p"},"controlplane")," will be added to the NGINX proxy on the nodes with components that need to access the Kubernetes API server. This means that if a node becomes unreachable, the local NGINX proxy on the node will forward the request to another Kubernetes API server in the list."),(0,s.kt)("h3",{id:"kube-controller-manager"},"kube-controller-manager"),(0,s.kt)("p",null,"The Kubernetes controller manager uses leader election using an endpoint in Kubernetes. One instance of the ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," will create an entry in the Kubernetes endpoints and updates that entry in a configured interval. Other instances will see an active leader and wait for that entry to expire (for example, when a node is unresponsive)."),(0,s.kt)("h3",{id:"kube-scheduler"},"kube-scheduler"),(0,s.kt)("p",null,"The Kubernetes scheduler uses leader election using an endpoint in Kubernetes. One instance of the ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," will create an entry in the Kubernetes endpoints and updates that entry in a configured interval. Other instances will see an active leader and wait for that entry to expire (for example, when a node is unresponsive)."),(0,s.kt)("h1",{id:"worker"},"worker"),(0,s.kt)("p",null,"Nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"worker")," role run the Kubernetes node components. See ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#node-components"},"Kubernetes: Node Components")," for a detailed list of components."),(0,s.kt)("h1",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/components/#node-components"},"Kubernetes: Node Components"))))}h.isMDXComponent=!0},56492:function(e,t,n){t.Z=n.p+"assets/images/clusterdiagram-2b66ee124fed594265b3bc07fa1f145d.svg"}}]);