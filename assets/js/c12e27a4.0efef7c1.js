"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[13276],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18919:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",weight:2205,aliases:["/rancher/v2.0-v2.4/en/concepts/global-configuration/node-templates/"]},s=void 0,d={unversionedId:"pages-for-subheaders/use-new-nodes-in-an-infra-provider",id:"version-2.0-2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider",title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",description:"Using Rancher, you can create pools of nodes based on a node template. This node template defines the parameters you want to use to launch nodes in your infrastructure providers or cloud providers.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider",permalink:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",weight:2205,aliases:["/rancher/v2.0-v2.4/en/concepts/global-configuration/node-templates/"]},sidebar:"tutorialSidebar",previous:{title:"Launching Kubernetes with Rancher",permalink:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},next:{title:"Creating an Amazon EC2 Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"}},c={},u=[{value:"Node Labels",id:"node-labels",level:3},{value:"Node Taints",id:"node-taints",level:3},{value:"Administrator Control of Node Templates",id:"administrator-control-of-node-templates",level:3},{value:"Node Pool Taints",id:"node-pool-taints",level:3},{value:"About Node Auto-replace",id:"about-node-auto-replace",level:3},{value:"Enabling Node Auto-replace",id:"enabling-node-auto-replace",level:3},{value:"Disabling Node Auto-replace",id:"disabling-node-auto-replace",level:3}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template"),". This node template defines the parameters you want to use to launch nodes in your infrastructure providers or cloud providers."),(0,r.kt)("p",null,"One benefit of installing Kubernetes on node pools hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected."),(0,r.kt)("p",null,"The available cloud providers to create a node template are decided based on active ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-drivers"},"node drivers"),"."),(0,r.kt)("h1",{id:"node-templates"},"Node Templates"),(0,r.kt)("p",null,"A node template is the saved configuration for the parameters to use when provisioning nodes in a specific cloud provider. These nodes can be launched from the UI. Rancher uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine")," to provision these nodes. The available cloud providers to create node templates are based on the active node drivers in Rancher."),(0,r.kt)("p",null,"After you create a node template in Rancher, it's saved so that you can use this template again to create node pools. Node templates are bound to your login. After you add a template, you can remove them from your user profile."),(0,r.kt)("h3",{id:"node-labels"},"Node Labels"),(0,r.kt)("p",null,"You can add ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," on each node template, so that any nodes created from the node template will automatically have these labels on them."),(0,r.kt)("h3",{id:"node-taints"},"Node Taints"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of Rancher v2.3.0")),(0,r.kt)("p",null,"You can add ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," on each node template, so that any nodes created from the node template will automatically have these taints on them."),(0,r.kt)("p",null,"Since taints can be added at a node template and node pool, if there is no conflict with the same key and effect of the taints, all taints will be added to the nodes. If there are taints with the same key and different effect, the taints from the node pool will override the taints from the node template."),(0,r.kt)("h3",{id:"administrator-control-of-node-templates"},"Administrator Control of Node Templates"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.3.3")),(0,r.kt)("p",null,"Administrators can control all node templates. Admins can now maintain all the node templates within Rancher. When a node template owner is no longer using Rancher, the node templates created by them can be managed by administrators so the cluster can continue to be updated and maintained."),(0,r.kt)("p",null,"To access all node templates, an administrator will need to do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Rancher UI, click the user profile icon in the upper right corner."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Node Templates."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," All node templates are listed and grouped by owner. The templates can be edited or cloned by clicking the ",(0,r.kt)("strong",{parentName:"p"},"\u22ee",".")),(0,r.kt)("h1",{id:"node-pools"},"Node Pools"),(0,r.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,r.kt)("a",{parentName:"p",href:"#node-templates"},"node template"),". "),(0,r.kt)("p",null,"A node template defines the configuration of a node, like what operating system to use, number of CPUs and amount of memory."),(0,r.kt)("p",null,"The benefit of using a node pool is that if a node is destroyed or deleted, you can increase the number of live nodes to compensate for the node that was lost. The node pool helps you ensure that the count of the node pool is as expected."),(0,r.kt)("p",null,"Each node pool must have one or more nodes roles assigned. "),(0,r.kt)("p",null,"Each node role (i.e. etcd, control plane, and worker) should be assigned to a distinct node pool. Although it is possible to assign multiple node roles to a node pool, this should not be done for production clusters."),(0,r.kt)("p",null,"The recommended setup is to have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a node pool with the etcd node role and a count of three"),(0,r.kt)("li",{parentName:"ul"},"a node pool with the control plane node role and a count of at least two"),(0,r.kt)("li",{parentName:"ul"},"a node pool with the worker node role and a count of at least two")),(0,r.kt)("h3",{id:"node-pool-taints"},"Node Pool Taints"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of Rancher v2.3.0")),(0,r.kt)("p",null,"If you haven't defined ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," on your node template, you can add taints for each node pool. The benefit of adding taints at a node pool is beneficial over adding it at a node template is that you can swap out the node templates without worrying if the taint is on the node template."),(0,r.kt)("p",null,"For each taint, they will automatically be added to any created node in the node pool. Therefore, if you add taints to a node pool that have existing nodes, the taints won't apply to existing nodes in the node pool, but any new node added into the node pool will get the taint."),(0,r.kt)("p",null,"When there are taints on the node pool and node template, if there is no conflict with the same key and effect of the taints, all taints will be added to the nodes. If there are taints with the same key and different effect, the taints from the node pool will override the taints from the node template."),(0,r.kt)("h3",{id:"about-node-auto-replace"},"About Node Auto-replace"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of Rancher v2.3.0")),(0,r.kt)("p",null,"If a node is in a node pool, Rancher can automatically replace unreachable nodes. Rancher will use the existing node template for the given node pool to recreate the node if it becomes inactive for a specified number of minutes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important:")," Self-healing node pools are designed to help you replace worker nodes for ",(0,r.kt)("b",null,"stateless")," applications. It is not recommended to enable node auto-replace on a node pool of master nodes or nodes with persistent volumes attached, because VMs are treated ephemerally. When a node in a node pool loses connectivity with the cluster, its persistent volumes are destroyed, resulting in data loss for stateful applications.")),(0,r.kt)("p",null,"Node auto-replace works on top of the Kubernetes node controller. The node controller periodically checks the status of all the nodes (configurable via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-monitor-period")," flag of the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-controller"),"). When a node is unreachable, the node controller will taint that node. When this occurs, Rancher will begin its deletion countdown. You can configure the amount of time Rancher waits to delete the node. If the taint is not removed before the deletion countdown ends, Rancher will proceed to delete the node object. Rancher will then provision a node in accordance with the set quantity of the node pool."),(0,r.kt)("h3",{id:"enabling-node-auto-replace"},"Enabling Node Auto-replace"),(0,r.kt)("p",null,"When you create the node pool, you can specify the amount of time in minutes that Rancher will wait to replace an unresponsive node."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the form for creating a cluster, go to the ",(0,r.kt)("strong",{parentName:"li"},"Node Pools")," section."),(0,r.kt)("li",{parentName:"ol"},"Go to the node pool where you want to enable node auto-replace. In the ",(0,r.kt)("strong",{parentName:"li"},"Recreate Unreachable After")," field, enter the number of minutes that Rancher should wait for a node to respond before replacing the node."),(0,r.kt)("li",{parentName:"ol"},"Fill out the rest of the form for creating a cluster.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Node auto-replace is enabled for the node pool."),(0,r.kt)("p",null,"You can also enable node auto-replace after the cluster is created with the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the Global view, click the Clusters tab."),(0,r.kt)("li",{parentName:"ol"},"Go to the cluster where you want to enable node auto-replace, click the vertical ","\u22ee"," ",(0,r.kt)("strong",{parentName:"li"},"(\u2026)"),", and click ",(0,r.kt)("strong",{parentName:"li"},"Edit.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Node Pools")," section, go to the node pool where you want to enable node auto-replace. In the ",(0,r.kt)("strong",{parentName:"li"},"Recreate Unreachable After")," field, enter the number of minutes that Rancher should wait for a node to respond before replacing the node."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Node auto-replace is enabled for the node pool."),(0,r.kt)("h3",{id:"disabling-node-auto-replace"},"Disabling Node Auto-replace"),(0,r.kt)("p",null,"You can disable node auto-replace from the Rancher UI with the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the Global view, click the Clusters tab."),(0,r.kt)("li",{parentName:"ol"},"Go to the cluster where you want to enable node auto-replace, click the vertical ","\u22ee"," ",(0,r.kt)("strong",{parentName:"li"},"(\u2026)"),", and click ",(0,r.kt)("strong",{parentName:"li"},"Edit.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Node Pools")," section, go to the node pool where you want to enable node auto-replace. In the ",(0,r.kt)("strong",{parentName:"li"},"Recreate Unreachable After")," field, enter 0."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Node auto-replace is disabled for the node pool."),(0,r.kt)("h1",{id:"cloud-credentials"},"Cloud Credentials"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,r.kt)("p",null,"Node templates can use cloud credentials to store credentials for launching nodes in your cloud provider, which has some benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Credentials are stored as a Kubernetes secret, which is not only more secure, but it also allows you to edit a node template without having to enter your credentials every time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After the cloud credential is created, it can be re-used to create additional node templates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Multiple node templates can share the same cloud credential to create node pools. If your key is compromised or expired, the cloud credential can be updated in a single place, which allows all node templates that are using it to be updated at once."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," As of v2.2.0, the default ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"},"node drivers")," and any node driver, that has fields marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", are required to use cloud credentials. If you have upgraded to v2.2.0, existing node templates will continue to work with the previous account access  information, but when you edit the node template, you will be required to create a cloud credential and the node template will start using it.")),(0,r.kt)("p",null,"After cloud credentials are created, the user can start ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/user-settings/manage-cloud-credentials"},"managing the cloud credentials that they created"),"."),(0,r.kt)("h1",{id:"node-drivers"},"Node Drivers"),(0,r.kt)("p",null,"If you don't find the node driver that you want to use, you can see if it is available in Rancher's built-in ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers#activating-deactivating-node-drivers"},"node drivers and activate it"),", or you can ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers#adding-custom-node-drivers"},"add your own custom node driver"),"."))}h.isMDXComponent=!0}}]);