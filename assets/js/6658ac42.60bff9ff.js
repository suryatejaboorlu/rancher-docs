"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[20080],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),k=n,d=h["".concat(i,".").concat(k)]||h[k]||u[k]||o;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},18317:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],s={title:"Rollbacks",weight:3,aliases:["/rancher/v2.x/en/upgrades/rollbacks","/rancher/v2.x/en/installation/upgrades-rollbacks/rollbacks","/rancher/v2.x/en/upgrades/ha-server-rollbacks","/rancher/v2.x/en/upgrades/rollbacks/ha-server-rollbacks","/rancher/v2.x/en/installation/upgrades-rollbacks/rollbacks/ha-server-rollbacks","/rancher/v2.x/en/installation/install-rancher-on-k8s/upgrades-rollbacks/rollbacks","/rancher/v2.x/en/installation/install-rancher-on-k8s/rollbacks/"]},i=void 0,c={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",id:"version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",title:"Rollbacks",description:"- Rolling Back to Rancher v2.5.0+",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",permalink:"/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks.md",tags:[],version:"2.5",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Rollbacks",weight:3,aliases:["/rancher/v2.x/en/upgrades/rollbacks","/rancher/v2.x/en/installation/upgrades-rollbacks/rollbacks","/rancher/v2.x/en/upgrades/ha-server-rollbacks","/rancher/v2.x/en/upgrades/rollbacks/ha-server-rollbacks","/rancher/v2.x/en/installation/upgrades-rollbacks/rollbacks/ha-server-rollbacks","/rancher/v2.x/en/installation/install-rancher-on-k8s/upgrades-rollbacks/rollbacks","/rancher/v2.x/en/installation/install-rancher-on-k8s/rollbacks/"]},sidebar:"tutorialSidebar",previous:{title:"Install/Upgrade Rancher on a Kubernetes Cluster",permalink:"/v2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},next:{title:"Upgrades",permalink:"/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"}},p={},u=[{value:"Scale the Rancher Deployment to 0",id:"scale-the-rancher-deployment-to-0",level:3},{value:"Create the Restore Custom Resource",id:"create-the-restore-custom-resource",level:3},{value:"Roll back to a previous Rancher version",id:"roll-back-to-a-previous-rancher-version",level:3}],h={toc:u};function k(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rolling-back-to-rancher-v2-5-0"},"Rolling Back to Rancher v2.5.0+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rolling-back-to-rancher-v2-2-v2-4"},"Rolling Back to Rancher v2.2-v2.4+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rolling-back-to-rancher-v2-0-v2-1"},"Rolling Back to Rancher v2.0-v2.1"))),(0,o.kt)("h1",{id:"rolling-back-to-rancher-v250"},"Rolling Back to Rancher v2.5.0+"),(0,o.kt)("p",null,"To roll back to Rancher v2.5.0+, use the ",(0,o.kt)("strong",{parentName:"p"},"Rancher Backups")," application and restore Rancher from backup."),(0,o.kt)("p",null,"Rancher has to be started with the lower/previous version after a rollback."),(0,o.kt)("p",null,"A restore is performed by creating a Restore custom resource."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Follow the instructions from this page for restoring rancher on the same cluster where it was backed up from. In order to migrate rancher to a new cluster, follow the steps to ",(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"migrate rancher.")),(0,o.kt)("li",{parentName:"ul"},"While restoring Rancher on the same setup, the Rancher deployment is manually scaled down before the restore starts, then the operator will scale it back up once the restore completes. As a result, Rancher and its UI will be unavailable until the restore is complete. While the UI is unavailable, use the original cluster kubeconfig with the restore YAML file: ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl create -f restore.yaml"),"."))),(0,o.kt)("h3",{id:"scale-the-rancher-deployment-to-0"},"Scale the Rancher Deployment to 0"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, hover over the ",(0,o.kt)("strong",{parentName:"li"},"local")," cluster."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Projects in local"),", click on ",(0,o.kt)("strong",{parentName:"li"},"System"),"."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"cattle-system")," namespace section, find the ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher")," deployment."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("strong",{parentName:"li"},"Scalable deployment of _ pods")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,o.kt)("li",{parentName:"ol"},"Scroll to the bottom and click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("h3",{id:"create-the-restore-custom-resource"},"Create the Restore Custom Resource"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer,")," go to the dropdown menu in the upper left corner and click ",(0,o.kt)("strong",{parentName:"p"},"Rancher Backups.")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Note:")," If the Rancher Backups app is not visible in the dropdown, you will need to install it from the Charts page in ",(0,o.kt)("strong",{parentName:"li"},"Apps & Marketplace"),". Refer ",(0,o.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/helm-charts-in-rancher#charts"},"here")," for more information."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Restore."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the Restore with the form or with YAML. For help creating the Restore resource using the online form, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/backup-restore-configuration/restore-configuration"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/backup-restore-configuration/examples"},"examples."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To use the YAML editor, you can click ",(0,o.kt)("strong",{parentName:"p"},"Create > Create from YAML.")," Enter the Restore YAML. The following is an example Restore custom resource:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: rancher\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,o.kt)("p",{parentName:"li"},"For help configuring the Restore, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/backup-restore-configuration/restore-configuration"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/backup-restore-configuration/examples"},"examples."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The backup file is created and updated to the target storage location. The resources are restored in this order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Custom Resource Definitions (CRDs)"),(0,o.kt)("li",{parentName:"ol"},"Cluster-scoped resources"),(0,o.kt)("li",{parentName:"ol"},"Namespaced resources")),(0,o.kt)("p",null,"To check how the restore is progressing, you can check the logs of the operator. Follow these steps to get the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl get pods -n cattle-resources-system\nkubectl logs -n cattle-resources-system -f\n")),(0,o.kt)("h3",{id:"roll-back-to-a-previous-rancher-version"},"Roll back to a previous Rancher version"),(0,o.kt)("p",null,"Rancher can be rolled back using the Helm CLI. To roll back to the previous version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"helm rollback rancher -n cattle-system\n")),(0,o.kt)("p",null,"If the previous revision is not the intended target, you can specify a revision to roll back to. To see the deployment history:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"helm history rancher -n cattle-system\n")),(0,o.kt)("p",null,"When the target revision is determined, perform the rollback. This example will roll back to revision ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"helm rollback rancher 3 -n cattle-system\n")),(0,o.kt)("h1",{id:"rolling-back-to-rancher-v22-v24"},"Rolling Back to Rancher v2.2-v2.4+"),(0,o.kt)("p",null,"To roll back to Rancher before v2.5, follow the procedure detailed here: ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"Restoring Backups \u2014 Kubernetes installs")," Restoring a snapshot of the Rancher server cluster will revert Rancher to the version and state at the time of the snapshot."),(0,o.kt)("p",null,"For information on how to roll back Rancher installed with Docker, refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher"},"this page.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Managed clusters are authoritative for their state. This means restoring the rancher server will not revert workload deployments or changes made on managed clusters after the snapshot was taken.")),(0,o.kt)("h1",{id:"rolling-back-to-rancher-v20-v21"},"Rolling Back to Rancher v2.0-v2.1"),(0,o.kt)("p",null,"Rolling back to Rancher v2.0-v2.1 is no longer supported. The instructions for rolling back to these versions are preserved ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"here")," and are intended to be used only in cases where upgrading to Rancher v2.2+ is not feasible."))}k.isMDXComponent=!0}}]);