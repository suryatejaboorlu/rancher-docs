"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33833],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74287:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"Creating an EKS Cluster",shortTitle:"Amazon EKS",weight:2110},l=void 0,c={unversionedId:"pages-for-subheaders/amazon-eks-permissions",id:"pages-for-subheaders/amazon-eks-permissions",title:"Creating an EKS Cluster",description:"Amazon EKS provides a managed control plane for your Kubernetes cluster. Amazon EKS runs the Kubernetes control plane instances across multiple Availability Zones to ensure high availability. Rancher provides an intuitive user interface for managing and deploying the Kubernetes clusters you run in Amazon EKS. With this guide, you will use Rancher to quickly and easily launch an Amazon EKS Kubernetes cluster in your AWS account. For more information on Amazon EKS, see this documentation.",source:"@site/docs/pages-for-subheaders/amazon-eks-permissions.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/amazon-eks-permissions",permalink:"/pages-for-subheaders/amazon-eks-permissions",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/amazon-eks-permissions.md",tags:[],version:"current",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Creating an EKS Cluster",shortTitle:"Amazon EKS",weight:2110},sidebar:"tutorialSidebar",previous:{title:"Feature Flags",permalink:"/reference-guides/installation-references/feature-flags"},next:{title:"Minimum EKS Permissions",permalink:"/reference-guides/amazon-eks-permissions/minimum-eks-permissions"}},u={},m=[{value:"Amazon VPC",id:"amazon-vpc",level:3},{value:"IAM Policies",id:"iam-policies",level:3}],p={toc:m};function h(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Amazon EKS provides a managed control plane for your Kubernetes cluster. Amazon EKS runs the Kubernetes control plane instances across multiple Availability Zones to ensure high availability. Rancher provides an intuitive user interface for managing and deploying the Kubernetes clusters you run in Amazon EKS. With this guide, you will use Rancher to quickly and easily launch an Amazon EKS Kubernetes cluster in your AWS account. For more information on Amazon EKS, see this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html"},"documentation"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prerequisites-in-amazon-web-services"},"Prerequisites in Amazon Web Services"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#amazon-vpc"},"Amazon VPC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#iam-policies"},"IAM Policies")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-the-eks-cluster"},"Create the EKS Cluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#eks-cluster-configuration-reference"},"EKS Cluster Configuration Reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#architecture"},"Architecture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#aws-service-events"},"AWS Service Events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#security-and-compliance"},"Security and Compliance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tutorial"},"Tutorial")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#minimum-eks-permissions"},"Minimum EKS Permissions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#syncing"},"Syncing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#troubleshooting"},"Troubleshooting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#programmatically-creating-eks-clusters"},"Programmatically Creating EKS Clusters"))),(0,i.kt)("h1",{id:"prerequisites-in-amazon-web-services"},"Prerequisites in Amazon Web Services"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Deploying to Amazon AWS will incur charges. For more information, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/pricing/"},"EKS pricing page"),"."))),(0,i.kt)("p",null,"To set up a cluster on EKS, you will need to set up an Amazon VPC (Virtual Private Cloud). You will also need to make sure that the account you will be using to create the EKS cluster has the appropriate ",(0,i.kt)("a",{parentName:"p",href:"#minimum-eks-permissions"},"permissions.")," For details, refer to the official guide on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html#eks-prereqs"},"Amazon EKS Prerequisites"),"."),(0,i.kt)("h3",{id:"amazon-vpc"},"Amazon VPC"),(0,i.kt)("p",null,"An Amazon VPC is required to launch the EKS cluster. The VPC enables you to launch AWS resources into a virtual network that you've defined. You can set one up yourself and provide it during cluster creation in Rancher. If you do not provide one during creation, Rancher will create one. For more information, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-public-private-vpc.html"},"Tutorial: Creating a VPC with Public and Private Subnets for Your Amazon EKS Cluster"),"."),(0,i.kt)("h3",{id:"iam-policies"},"IAM Policies"),(0,i.kt)("p",null,"Rancher needs access to your AWS account in order to provision and administer your Kubernetes clusters in Amazon EKS. You'll need to create a user for Rancher in your AWS account and define what that user can access."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a user with programmatic access by following the steps ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next, create an IAM policy that defines what this user has access to in your AWS account. It's important to only grant this user minimal access within your account. The minimum permissions required for an EKS cluster are listed ",(0,i.kt)("a",{parentName:"p",href:"#minimum-eks-permissions"},"here.")," Follow the steps ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/EKS_IAM_user_policies.html"},"here")," to create an IAM policy and attach it to your user.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, follow the steps ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"here")," to create an access key and secret key for this user."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important: ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It's important to regularly rotate your access and secret keys. See this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#rotating_access_keys_console"},"documentation")," for more information."))),(0,i.kt)("p",null,"For more detailed information on IAM policies for EKS, refer to the official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/IAM_policies.html"},"documentation on Amazon EKS IAM Policies, Roles, and Permissions"),"."),(0,i.kt)("h1",{id:"create-the-eks-cluster"},"Create the EKS Cluster"),(0,i.kt)("p",null,"Use Rancher to set up and configure your Kubernetes cluster."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Amazon EKS"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a ",(0,i.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,i.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,i.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,i.kt)("li",{parentName:"ol"},"Fill out the rest of the form. For help, refer to the ",(0,i.kt)("a",{parentName:"li",href:"#eks-cluster-configuration-reference"},"configuration reference.")," "),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," "),(0,i.kt)("p",null,"Your cluster is created and assigned a state of ",(0,i.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,i.kt)("p",null,"You can access your cluster after its state is updated to ",(0,i.kt)("strong",{parentName:"p"},"Active"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,i.kt)("h1",{id:"eks-cluster-configuration-reference"},"EKS Cluster Configuration Reference"),(0,i.kt)("p",null,"For the full list of EKS cluster configuration options, see ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration"},"this page.")),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"The figure below illustrates the high-level architecture of Rancher 2.x. The figure depicts a Rancher Server installation that manages two Kubernetes clusters: one created by RKE and another created by EKS."),(0,i.kt)("figcaption",null,"Managing Kubernetes Clusters through Rancher's Authentication Proxy"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture",src:r(16904).Z,width:"766",height:"792"})),(0,i.kt)("h1",{id:"aws-service-events"},"AWS Service Events"),(0,i.kt)("p",null,"To find information on any AWS Service events, please see ",(0,i.kt)("a",{parentName:"p",href:"https://status.aws.amazon.com/"},"this page"),"."),(0,i.kt)("h1",{id:"security-and-compliance"},"Security and Compliance"),(0,i.kt)("p",null,"By default only the IAM user or role that created a cluster has access to it. Attempting to access the cluster with any other user or role without additional configuration will lead to an error. In Rancher, this means using a credential that maps to a user or role that was not used to create the cluster will cause an unauthorized error. For example, an EKSCtl cluster will not register in Rancher unless the credentials used to register the cluster match the role or user used by EKSCtl. Additional users and roles can be authorized to access a cluster by being added to the aws-auth configmap in the kube-system namespace. For a more in-depth explanation and detailed instructions, please see this ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/amazon-eks-cluster-access/"},"documentation"),"."),(0,i.kt)("p",null,"For more information on security and compliance with your Amazon EKS Kubernetes cluster, please see this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/shared-responsibilty.html"},"documentation"),"."),(0,i.kt)("h1",{id:"tutorial"},"Tutorial"),(0,i.kt)("p",null,"This ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/opensource/managing-eks-clusters-rancher/"},"tutorial")," on the AWS Open Source Blog will walk you through how to set up an EKS cluster with Rancher, deploy a publicly accessible app to test the cluster, and deploy a sample project to track real-time geospatial data using a combination of other open-source software such as Grafana and InfluxDB."),(0,i.kt)("h1",{id:"minimum-eks-permissions"},"Minimum EKS Permissions"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/amazon-eks-permissions/minimum-eks-permissions"},"this page")," for the minimum set of permissions necessary to use all functionality of the EKS driver in Rancher."),(0,i.kt)("h1",{id:"syncing"},"Syncing"),(0,i.kt)("p",null,"The EKS provisioner can synchronize the state of an EKS cluster between Rancher and the provider. For an in-depth technical explanation of how this works, see ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"},"Syncing.")),(0,i.kt)("p",null,"For information on configuring the refresh interval, refer to ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration#configuring-the-refresh-interval"},"this section.")),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If your changes were overwritten, it could be due to the way the cluster data is synced with EKS. Changes shouldn't be made to the cluster from another source, such as in the EKS console, and in Rancher within a five-minute span. For information on how this works and how to configure the refresh interval, refer to ",(0,i.kt)("a",{parentName:"p",href:"#syncing"},"Syncing.")),(0,i.kt)("p",null,"If an unauthorized error is returned while attempting to modify or register the cluster and the cluster was not created with the role or user that your credentials belong to, refer to ",(0,i.kt)("a",{parentName:"p",href:"#security-and-compliance"},"Security and Compliance.")),(0,i.kt)("p",null,"For any issues or troubleshooting details for your Amazon EKS Kubernetes cluster, please see this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/troubleshooting.html"},"documentation"),"."),(0,i.kt)("h1",{id:"programmatically-creating-eks-clusters"},"Programmatically Creating EKS Clusters"),(0,i.kt)("p",null,"The most common way to programmatically deploy EKS clusters through Rancher is by using the Rancher2 Terraform provider. The documentation for creating clusters with Terraform is ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"here.")))}h.isMDXComponent=!0},16904:function(e,t,r){t.Z=r.p+"assets/images/rancher-architecture-rancher-api-server-2743dae746c64cd2ad66711908be4108.svg"}}]);