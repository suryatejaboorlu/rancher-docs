"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73706],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},31838:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"K3s Cluster Configuration Reference",shortTitle:"K3s Cluster Configuration",weight:6},l=void 0,c={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration",id:"reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration",title:"K3s Cluster Configuration Reference",description:"This section covers the configuration options that are available in Rancher for a new or existing K3s Kubernetes cluster.",source:"@site/docs/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"K3s Cluster Configuration Reference",shortTitle:"K3s Cluster Configuration",weight:6},sidebar:"tutorialSidebar",previous:{title:"RKE2 Cluster Configuration Reference",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration"},next:{title:"EKS Cluster Configuration Reference",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Configuration Options in the Rancher UI",id:"configuration-options-in-the-rancher-ui",level:2},{value:"Basics",id:"basics",level:3},{value:"Kubernetes Version",id:"kubernetes-version",level:4},{value:"Encrypt Secrets",id:"encrypt-secrets",level:4},{value:"Project Network Isolation",id:"project-network-isolation",level:4},{value:"SELinux",id:"selinux",level:4},{value:"CoreDNS",id:"coredns",level:4},{value:"Klipper Service LB",id:"klipper-service-lb",level:4},{value:"Traefik Ingress",id:"traefik-ingress",level:4},{value:"Local Storage",id:"local-storage",level:4},{value:"Metrics Server",id:"metrics-server",level:4},{value:"Add-On Config",id:"add-on-config",level:3},{value:"Agent Environment Vars",id:"agent-environment-vars",level:3},{value:"etcd",id:"etcd",level:3},{value:"Automatic Snapshots",id:"automatic-snapshots",level:4},{value:"Metrics",id:"metrics",level:4},{value:"Networking",id:"networking",level:3},{value:"Cluster CIDR",id:"cluster-cidr",level:4},{value:"Service CIDR",id:"service-cidr",level:4},{value:"Cluster DNS",id:"cluster-dns",level:4},{value:"Cluster Domain",id:"cluster-domain",level:4},{value:"NodePort Service Port Range",id:"nodeport-service-port-range",level:4},{value:"TLS Alternate Names",id:"tls-alternate-names",level:4},{value:"Authorized Cluster Endpoint",id:"authorized-cluster-endpoint",level:4},{value:"Registries",id:"registries",level:3},{value:"Upgrade Strategy",id:"upgrade-strategy",level:3},{value:"Controle Plane Concurrency",id:"controle-plane-concurrency",level:4},{value:"Worker Concurrency",id:"worker-concurrency",level:4},{value:"Drain Nodes (Control Plane)",id:"drain-nodes-control-plane",level:4},{value:"Drain Nodes (Worker Nodes)",id:"drain-nodes-worker-nodes",level:4},{value:"Advanced",id:"advanced",level:3},{value:"Cluster Config File",id:"cluster-config-file",level:2}],p={toc:d};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section covers the configuration options that are available in Rancher for a new or existing K3s Kubernetes cluster."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"You can configure the Kubernetes options one of two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuration-options-in-the-rancher-ui"},"Rancher UI"),": Use the Rancher UI to select options that are commonly customized when setting up a Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#cluster-config-file"},"Cluster Config File"),": Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create a K3s config file. Using a config file allows you to set any of the ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"},"options")," available in an K3s installation.")),(0,a.kt)("h2",{id:"configuration-options-in-the-rancher-ui"},"Configuration Options in the Rancher UI"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Some advanced configuration options are not exposed in the Rancher UI forms, but they can be enabled by editing the K3s cluster configuration file in YAML. For the complete reference of configurable options for K3s clusters in YAML, see the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"},"K3s documentation.")))),(0,a.kt)("h3",{id:"basics"},"Basics"),(0,a.kt)("h4",{id:"kubernetes-version"},"Kubernetes Version"),(0,a.kt)("p",null,"The version of Kubernetes installed on your cluster nodes. Rancher packages its own version of Kubernetes based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/hyperkube"},"hyperkube"),"."),(0,a.kt)("p",null,"For more detail, see ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"Upgrading Kubernetes"),"."),(0,a.kt)("h4",{id:"encrypt-secrets"},"Encrypt Secrets"),(0,a.kt)("p",null,"Option to enable or disable secrets encryption. When enabled, secrets will be encrypted using a AES-CBC key. If disabled, any previously secrets will not be readable until encryption is enabled again. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#secrets-encryption-config-experimental"},"K3s documentation")," for details."),(0,a.kt)("h4",{id:"project-network-isolation"},"Project Network Isolation"),(0,a.kt)("p",null,"If your network provider allows project network isolation, you can choose whether to enable or disable inter-project communication. "),(0,a.kt)("h4",{id:"selinux"},"SELinux"),(0,a.kt)("p",null,"Option to enable or disable ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#selinux-support"},"SELinux")," support."),(0,a.kt)("h4",{id:"coredns"},"CoreDNS"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("a",{parentName:"p",href:"https://coredns.io/"},"CoreDNS")," is installed as the default DNS provider. If CoreDNS is not installed, an alternate DNS provider must be installed yourself. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/networking/#coredns"},"K3s documentation")," for details.."),(0,a.kt)("h4",{id:"klipper-service-lb"},"Klipper Service LB"),(0,a.kt)("p",null,"Option to enable or disable the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/klipper-lb"},"Klipper")," service load balancer. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/networking/#service-load-balancer"},"K3s documentation")," for details."),(0,a.kt)("h4",{id:"traefik-ingress"},"Traefik Ingress"),(0,a.kt)("p",null,"Option to enable or disable the ",(0,a.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik")," HTTP reverse proxy and load balancer. For more details and configuration options, see the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/networking/#traefik-ingress-controller"},"K3s documentation"),"."),(0,a.kt)("h4",{id:"local-storage"},"Local Storage"),(0,a.kt)("p",null,"Option to enable or disable ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/storage/"},"local storage")," on the node(s)."),(0,a.kt)("h4",{id:"metrics-server"},"Metrics Server"),(0,a.kt)("p",null,"Option to enable or disable the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-incubator/metrics-server"},"metrics server"),". If enabled, ensure port 10250 is opened for inbound TCP traffic."),(0,a.kt)("h3",{id:"add-on-config"},"Add-On Config"),(0,a.kt)("p",null,"Additional Kubernetes manifests, managed as a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/addons/"},"Add-on"),", to apply to the cluster on startup. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/helm/#automatically-deploying-manifests-and-helm-charts"},"K3s documentation")," for details."),(0,a.kt)("h3",{id:"agent-environment-vars"},"Agent Environment Vars"),(0,a.kt)("p",null,"Option to set environment variables for ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/architecture/"},"K3s agents"),". The environment variables can be set using key value pairs. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/agent-config/"},"K3 documentation")," for more details."),(0,a.kt)("h3",{id:"etcd"},"etcd"),(0,a.kt)("h4",{id:"automatic-snapshots"},"Automatic Snapshots"),(0,a.kt)("p",null,"Option to enable or disable recurring etcd snapshots. If enabled, users have the option to configure the frequency of snapshots. For details, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/backup-restore/#creating-snapshots"},"K3s documentation"),"."),(0,a.kt)("h4",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Option to choose whether to expose etcd metrics to the public or only within the cluster."),(0,a.kt)("h3",{id:"networking"},"Networking"),(0,a.kt)("h4",{id:"cluster-cidr"},"Cluster CIDR"),(0,a.kt)("p",null,"IPv4/IPv6 network CIDRs to use for pod IPs (default: 10.42.0.0/16)."),(0,a.kt)("h4",{id:"service-cidr"},"Service CIDR"),(0,a.kt)("p",null,"IPv4/IPv6 network CIDRs to use for service IPs (default: 10.43.0.0/16)."),(0,a.kt)("h4",{id:"cluster-dns"},"Cluster DNS"),(0,a.kt)("p",null,"IPv4 Cluster IP for coredns service. Should be in your service-cidr range (default: 10.43.0.10)."),(0,a.kt)("h4",{id:"cluster-domain"},"Cluster Domain"),(0,a.kt)("p",null,"Select the domain for the cluster. The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.local"),"."),(0,a.kt)("h4",{id:"nodeport-service-port-range"},"NodePort Service Port Range"),(0,a.kt)("p",null,"Option to change the range of ports that can be used for ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort services"),". The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"30000-32767"),"."),(0,a.kt)("h4",{id:"tls-alternate-names"},"TLS Alternate Names"),(0,a.kt)("p",null,"Add additional hostnames or IPv4/IPv6 addresses as Subject Alternative Names on the server TLS cert."),(0,a.kt)("h4",{id:"authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),(0,a.kt)("p",null,"Authorized Cluster Endpoint can be used to directly access the Kubernetes API server, without requiring communication through Rancher."),(0,a.kt)("p",null,"For more detail on how an authorized cluster endpoint works and why it is used, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"architecture section.")),(0,a.kt)("p",null,"We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/reference-guides/rancher-manager-architecture/architecture-recommendations#architecture-for-an-authorized-cluster-endpoint"},"recommended architecture section.")),(0,a.kt)("h3",{id:"registries"},"Registries"),(0,a.kt)("p",null,"Select the image repository to pull Rancher images from. For more details and configuration options, see the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/"},"K3s documentation"),"."),(0,a.kt)("h3",{id:"upgrade-strategy"},"Upgrade Strategy"),(0,a.kt)("h4",{id:"controle-plane-concurrency"},"Controle Plane Concurrency"),(0,a.kt)("p",null,"Select how many nodes can be upgraded at the same time. Can be a fixed number or percentage."),(0,a.kt)("h4",{id:"worker-concurrency"},"Worker Concurrency"),(0,a.kt)("p",null,"Select how many nodes can be upgraded at the same time. Can be a fixed number or percentage."),(0,a.kt)("h4",{id:"drain-nodes-control-plane"},"Drain Nodes (Control Plane)"),(0,a.kt)("p",null,"Option to remove all pods from the node prior to upgrading."),(0,a.kt)("h4",{id:"drain-nodes-worker-nodes"},"Drain Nodes (Worker Nodes)"),(0,a.kt)("p",null,"Option to remove all pods from the node prior to upgrading."),(0,a.kt)("h3",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"Option to set kubelet options for different nodes. For available options, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"Kubernetes documentation"),"."),(0,a.kt)("h2",{id:"cluster-config-file"},"Cluster Config File"),(0,a.kt)("p",null,"Instead of using the Rancher UI forms to choose Kubernetes options for the cluster, advanced users can create an K3s config file. Using a config file allows you to set any of the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"},"options")," available in an K3s installation."),(0,a.kt)("p",null,"To edit an K3s config file directly from the Rancher UI, click ",(0,a.kt)("strong",{parentName:"p"},"Edit as YAML"),"."))}h.isMDXComponent=!0}}]);