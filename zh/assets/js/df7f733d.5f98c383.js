"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30585],{3905:function(e,t,s){s.d(t,{Zo:function(){return c},kt:function(){return g}});var r=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,r,a=function(e,t){if(null==e)return{};var s,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var s=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(s),g=a,h=p["".concat(u,".").concat(g)]||p[g]||d[g]||n;return s?r.createElement(h,o(o({ref:t},c),{},{components:s})):r.createElement(h,o({ref:t},c))}));function g(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=s.length,o=new Array(n);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<n;l++)o[l]=s[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,s)}p.displayName="MDXCreateElement"},88359:function(e,t,s){s.r(t),s.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=s(87462),a=s(63366),n=(s(67294),s(3905)),o=["components"],i={title:"How Persistent Storage Works",weight:1,aliases:["/rancher/v2.5/en/tasks/workloads/add-persistent-volume-claim","/rancher/v2.x/en/cluster-admin/volumes-and-storage/how-storage-works/"]},u=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",id:"version-2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",title:"How Persistent Storage Works",description:"A persistent volume (PV) is a piece of storage in the Kubernetes cluster, while a persistent volume claim (PVC) is a request for storage.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage.md",tags:[],version:"2.5",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"How Persistent Storage Works",weight:1,aliases:["/rancher/v2.5/en/tasks/workloads/add-persistent-volume-claim","/rancher/v2.x/en/cluster-admin/volumes-and-storage/how-storage-works/"]},sidebar:"tutorialSidebar",previous:{title:"Manage Persistent Storage",permalink:"/zh/v2.5/pages-for-subheaders/manage-persistent-storage"},next:{title:"Setting up Existing Storage",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage"}},c={},d=[{value:"About Persistent Volume Claims",id:"about-persistent-volume-claims",level:2},{value:"PVCs are Required for Both New and Existing Persistent Storage",id:"pvcs-are-required-for-both-new-and-existing-persistent-storage",level:3},{value:"Setting up Existing Storage with a PVC and PV",id:"setting-up-existing-storage-with-a-pvc-and-pv",level:2},{value:"Binding PVs to PVCs",id:"binding-pvs-to-pvcs",level:3},{value:"Provisioning New Storage with a PVC and Storage Class",id:"provisioning-new-storage-with-a-pvc-and-storage-class",level:2}],p={toc:d};function g(e){var t=e.components,i=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A persistent volume (PV) is a piece of storage in the Kubernetes cluster, while a persistent volume claim (PVC) is a request for storage."),(0,n.kt)("p",null,"There are two ways to use persistent storage in Kubernetes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use an existing persistent volume"),(0,n.kt)("li",{parentName:"ul"},"Dynamically provision new persistent volumes")),(0,n.kt)("p",null,"To use an existing PV, your application will need to use a PVC that is bound to a PV, and the PV should include the minimum resources that the PVC requires."),(0,n.kt)("p",null,"For dynamic storage provisioning, your application will need to use a PVC that is bound to a storage class. The storage class contains the authorization to provision new persistent volumes."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Setting Up New and Existing Persistent Storage",src:s(57062).Z,width:"761",height:"706"})),(0,n.kt)("p",null,"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"official Kubernetes documentation on storage")),(0,n.kt)("h2",{id:"about-persistent-volume-claims"},"About Persistent Volume Claims"),(0,n.kt)("p",null,"Persistent volume claims (PVCs) are objects that request storage resources from your cluster. They're similar to a voucher that your deployment can redeem for storage access. A PVC is mounted into a workloads as a volume so that the workload can claim its specified share of the persistent storage."),(0,n.kt)("p",null,"To access persistent storage, a pod must have a PVC mounted as a volume. This PVC lets your deployment application store its data in an external location, so that if a pod fails, it can be replaced with a new pod and continue accessing its data stored externally, as though an outage never occurred."),(0,n.kt)("p",null,"Each Rancher project contains a list of PVCs that you've created, available from ",(0,n.kt)("strong",{parentName:"p"},"Resources > Workloads > Volumes.")," You can reuse these PVCs when creating deployments in the future."),(0,n.kt)("h3",{id:"pvcs-are-required-for-both-new-and-existing-persistent-storage"},"PVCs are Required for Both New and Existing Persistent Storage"),(0,n.kt)("p",null,"A PVC is required for pods to use any persistent storage, regardless of whether the workload is intended to use storage that already exists, or the workload will need to dynamically provision new storage on demand."),(0,n.kt)("p",null,"If you are setting up existing storage for a workload, the workload mounts a PVC, which refers to a PV, which corresponds to existing storage infrastructure."),(0,n.kt)("p",null,"If a workload should request new storage, the workload mounts PVC, which refers to a storage class, which has the capability to create a new PV along with its underlying storage infrastructure."),(0,n.kt)("p",null,"Rancher lets you create as many PVCs within a project as you'd like."),(0,n.kt)("p",null,"You can mount PVCs to a deployment as you create it, or later, after the deployment is running."),(0,n.kt)("h2",{id:"setting-up-existing-storage-with-a-pvc-and-pv"},"Setting up Existing Storage with a PVC and PV"),(0,n.kt)("p",null,"Your pods can store data in ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"volumes,")," but if the pod fails, that data is lost. To solve this issue, Kubernetes offers persistent volumes (PVs), which are Kubernetes resources that correspond to external storage disks or file systems that your pods can access. If a pod crashes, its replacement pod can access the data in persistent storage without any data loss."),(0,n.kt)("p",null,"PVs can represent a physical disk or file system that you host on premise, or a vendor-hosted storage resource, such as Amazon EBS or Azure Disk."),(0,n.kt)("p",null,"Creating a persistent volume in Rancher will not create a storage volume. It only creates a Kubernetes resource that maps to an existing volume. Therefore, before you can create a persistent volume as a Kubernetes resource, you must have storage provisioned."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important:")," PVs are created at the cluster level, which means that in a multi-tenant cluster, teams with access to separate namespaces could have access to the same PV.")),(0,n.kt)("h3",{id:"binding-pvs-to-pvcs"},"Binding PVs to PVCs"),(0,n.kt)("p",null,"When pods are set up to use persistent storage, they mount a persistent volume claim (PVC) that is mounted the same way as any other Kubernetes volume. When each PVC is created, the Kubernetes master considers it to be a request for storage and binds it to a PV that matches the minimum resource requirements of the PVC. Not every PVC is guaranteed to be bound to a PV. According to the Kubernetes ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"documentation,")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Claims will remain unbound indefinitely if a matching volume does not exist. Claims will be bound as matching volumes become available. For example, a cluster provisioned with many 50Gi PVs would not match a PVC requesting 100Gi. The PVC can be bound when a 100Gi PV is added to the cluster.")),(0,n.kt)("p",null,"In other words, you can create unlimited PVCs, but they will only be bound to PVs if the Kubernetes master can find a sufficient PVs that has at least the amount of disk space required by the PVC."),(0,n.kt)("p",null,"To dynamically provision new storage, the PVC mounted in the pod would have to correspond to a storage class instead of a persistent volume."),(0,n.kt)("h2",{id:"provisioning-new-storage-with-a-pvc-and-storage-class"},"Provisioning New Storage with a PVC and Storage Class"),(0,n.kt)("p",null,"Storage Classes allow you to create PVs dynamically without having to create persistent storage in an infrastructure provider first."),(0,n.kt)("p",null,"For example, if a workload is bound to a PVC and the PVC refers to an Amazon EBS Storage Class, the storage class can dynamically create an EBS volume and a corresponding PV."),(0,n.kt)("p",null,"The Kubernetes master will then bind the newly created PV to your workload's PVC, allowing your workload to use the persistent storage."))}g.isMDXComponent=!0},57062:function(e,t,s){t.Z=s.p+"assets/images/rancher-storage-c61fd870410492e2f0ece6773fe72f59.svg"}}]);