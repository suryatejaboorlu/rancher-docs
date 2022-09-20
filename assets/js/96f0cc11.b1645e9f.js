"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[7366],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=o,u=h["".concat(l,".").concat(d)]||h[d]||p[d]||n;return a?r.createElement(u,i(i({ref:t},m),{},{components:a})):r.createElement(u,i({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},45732:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=["components"],s={title:"Prometheus Federator",weight:7},l=void 0,c={unversionedId:"pages-for-subheaders/prometheus-federator",id:"pages-for-subheaders/prometheus-federator",title:"Prometheus Federator",description:"Prometheus Federator, also referred to as Project Monitoring v2, deploys a Helm Project Operator (based on the rancher/helm-project-operator), an operator that manages deploying Helm charts each containing a Project Monitoring Stack, where each stack contains:",source:"@site/docs/pages-for-subheaders/prometheus-federator.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/prometheus-federator",permalink:"/pages-for-subheaders/prometheus-federator",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/prometheus-federator.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Prometheus Federator",weight:7},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/reference-guides/monitoring-v2-configuration/examples"},next:{title:"Role-Based Access Control",permalink:"/reference-guides/prometheus-federator/rbac"}},m={},p=[{value:"How does the operator work?",id:"how-does-the-operator-work",level:2},{value:"What is a Project?",id:"what-is-a-project",level:3},{value:"Configuring the Helm release created by a ProjectHelmChart",id:"configuring-the-helm-release-created-by-a-projecthelmchart",level:3},{value:"Namespaces",id:"namespaces",level:3},{value:"Helm Resources (HelmChart, HelmRelease)",id:"helm-resources-helmchart-helmrelease",level:3},{value:"Advanced Helm Project Operator Configuration",id:"advanced-helm-project-operator-configuration",level:3},{value:"Prometheus Federator on the Local Cluster",id:"prometheus-federator-on-the-local-cluster",level:3}],h={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Prometheus Federator, also referred to as Project Monitoring v2, deploys a Helm Project Operator (based on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/helm-project-operator"},"rancher/helm-project-operator"),"), an operator that manages deploying Helm charts each containing a Project Monitoring Stack, where each stack contains:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")," (managed externally by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Alertmanager")," (managed externally by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/helm/charts/tree/master/stable/grafana"},"Grafana")," (deployed via an embedded Helm chart)"),(0,n.kt)("li",{parentName:"ul"},"Default PrometheusRules and Grafana dashboards based on the collection of community-curated resources from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/kube-prometheus/"},"kube-prometheus")),(0,n.kt)("li",{parentName:"ul"},"Default ServiceMonitors that watch the deployed resources")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Prometheus Federator is designed to be deployed alongside an existing Prometheus Operator deployment in a cluster that has already installed the Prometheus Operator CRDs."))),(0,n.kt)("h2",{id:"how-does-the-operator-work"},"How does the operator work?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On deploying this chart, users can create ProjectHelmCharts CRs with ",(0,n.kt)("inlineCode",{parentName:"li"},"spec.helmApiVersion")," set to ",(0,n.kt)("inlineCode",{parentName:"li"},"monitoring.cattle.io/v1alpha1"),' (also known as "Project Monitors" in the Rancher UI) in a ',(0,n.kt)("strong",{parentName:"li"},"Project Registration Namespace (",(0,n.kt)("inlineCode",{parentName:"strong"},"cattle-project-<id>"),")"),"."),(0,n.kt)("li",{parentName:"ol"},"On seeing each ProjectHelmChartCR, the operator will automatically deploy a Project Prometheus stack on the Project Owner's behalf in the ",(0,n.kt)("strong",{parentName:"li"},"Project Release Namespace (",(0,n.kt)("inlineCode",{parentName:"strong"},"cattle-project-<id>-monitoring"),")")," based on a HelmChart CR and a HelmRelease CR automatically created by the ProjectHelmChart controller in the ",(0,n.kt)("strong",{parentName:"li"},"Operator / System Namespace"),"."),(0,n.kt)("li",{parentName:"ol"},"RBAC will automatically be assigned in the Project Release Namespace to allow users to view the Prometheus, Alertmanager, and Grafana UIs of the Project Monitoring Stack deployed; this will be based on RBAC defined on the Project Registration Namespace against the ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authmonitoring-alerting/prometheus-federator/rbac#user-facing-roles"},"default Kubernetes user-facing roles"),". For more information, see the section on ",(0,n.kt)("a",{parentName:"li",href:"/reference-guides/prometheus-federator/rbac"},"configuring RBAC"),".")),(0,n.kt)("h3",{id:"what-is-a-project"},"What is a Project?"),(0,n.kt)("p",null,"In Prometheus Federator, a Project is a group of namespaces that can be identified by a ",(0,n.kt)("inlineCode",{parentName:"p"},"metav1.LabelSelector"),". By default, the label used to identify projects is ",(0,n.kt)("inlineCode",{parentName:"p"},"field.cattle.io/projectId"),", the label used to identify namespaces that are contained within a given Rancher Project."),(0,n.kt)("h3",{id:"configuring-the-helm-release-created-by-a-projecthelmchart"},"Configuring the Helm release created by a ProjectHelmChart"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.values")," of this ProjectHelmChart's resources will correspond to the ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," override to be supplied to the underlying Helm chart deployed by the operator on the user's behalf; to see the underlying chart's ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," spec, either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"View the chart's definition located at ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/prometheus-federator/blob/main/charts/rancher-project-monitoring"},(0,n.kt)("inlineCode",{parentName:"a"},"rancher/prometheus-federator")," under ",(0,n.kt)("inlineCode",{parentName:"a"},"charts/rancher-project-monitoring"))," (where the chart version will be tied to the version of this operator)."),(0,n.kt)("li",{parentName:"ul"},"Look for the ConfigMap named ",(0,n.kt)("inlineCode",{parentName:"li"},"monitoring.cattle.io.v1alpha1")," that is automatically created in each Project Registration Namespace, which will contain both the ",(0,n.kt)("inlineCode",{parentName:"li"},"values.yaml")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"questions.yaml")," that was used to configure the chart (which was embedded directly into the ",(0,n.kt)("inlineCode",{parentName:"li"},"prometheus-federator")," binary).")),(0,n.kt)("h3",{id:"namespaces"},"Namespaces"),(0,n.kt)("p",null,"As a Project Operator based on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/helm-project-operator"},"rancher/helm-project-operator"),", Prometheus Federator has three different classifications of namespaces that the operator looks out for:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Operator / System Namespace"),": The namespace that the operator is deployed into (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system"),"). This namespace will contain all HelmCharts and HelmReleases for all ProjectHelmCharts watched by this operator. ",(0,n.kt)("strong",{parentName:"p"},"Only Cluster Admins should have access to this namespace."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Project Registration Namespace (",(0,n.kt)("inlineCode",{parentName:"strong"},"cattle-project-<id>"),")"),": The set of namespaces that the operator watches for ProjectHelmCharts within. The RoleBindings and ClusterRoleBindings that apply to this namespace will also be the source of truth for the auto-assigned RBAC created in the Project Release Namespace. For details, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/reference-guides/prometheus-federator/rbac"},"RBAC page"),". ",(0,n.kt)("strong",{parentName:"p"},"Project Owners (admin), Project Members (edit), and Read-Only Members (view) should have access to this namespace.")),(0,n.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Project Registration Namespaces will be auto-generated by the operator and imported into the Project it is tied to if ",(0,n.kt)("inlineCode",{parentName:"p"},".Values.global.cattle.projectLabel")," is provided, which is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"field.cattle.io/projectId")," by default. This indicates that a Project Registration Namespace should be created by the operator if at least one namespace is observed with that label. The operator will not let these namespaces be deleted unless either all namespaces with that label are gone (e.g., this is the last namespace in that project, in which case the namespace will be marked with the label ",(0,n.kt)("inlineCode",{parentName:"p"},'"helm.cattle.io/helm-project-operator-orphaned": "true"'),", which signals that it can be deleted), or it is no longer watching that project because the project ID was provided under ",(0,n.kt)("inlineCode",{parentName:"p"},".Values.helmProjectOperator.otherSystemProjectLabelValues"),", which serves as a denylist for Projects. These namespaces will also never be auto-deleted to avoid destroying user data; it is recommended that users clean up these namespaces manually if desired on creating or deleting a project.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If ",(0,n.kt)("inlineCode",{parentName:"p"},".Values.global.cattle.projectLabel")," is not provided, the Operator / System Namespace will also be the Project Registration Namespace.")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Project Release Namespace (",(0,n.kt)("inlineCode",{parentName:"strong"},"cattle-project-<id>-monitoring"),"):")," The set of namespaces that the operator deploys Project Monitoring Stacks within on behalf of a ProjectHelmChart; the operator will also automatically assign RBAC to Roles created in this namespace by the Project Monitoring Stack based on bindings found in the Project Registration Namespace. ",(0,n.kt)("strong",{parentName:"p"},"Only Cluster Admins should have access to this namespace; Project Owners (admin), Project Members (edit), and Read-Only Members (view) will be assigned limited access to this namespace by the deployed Helm Chart and Prometheus Federator.")),(0,n.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Project Release Namespaces are automatically deployed and imported into the project whose ID is specified under ",(0,n.kt)("inlineCode",{parentName:"p"},".Values.helmProjectOperator.projectReleaseNamespaces.labelValue"),", which defaults to the value of ",(0,n.kt)("inlineCode",{parentName:"p"},".Values.global.cattle.systemProjectId")," if not specified, whenever a ProjectHelmChart is specified in a Project Registration Namespace.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Project Release Namespaces follow the same orphaning conventions as Project Registration Namespaces (see note above).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If ",(0,n.kt)("inlineCode",{parentName:"p"},".Values.projectReleaseNamespaces.enabled")," is false, the Project Release Namespace will be the same as the Project Registration Namespace."))))))),(0,n.kt)("h3",{id:"helm-resources-helmchart-helmrelease"},"Helm Resources (HelmChart, HelmRelease)"),(0,n.kt)("p",null,"On deploying a ProjectHelmChart, the Prometheus Federator will automatically create and manage two child custom resources that manage the underlying Helm resources in turn:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A HelmChart CR (managed via an embedded ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/helm-controller"},"k3s-io/helm-contoller")," in the operator): This custom resource automatically creates a Job in the same namespace that triggers a ",(0,n.kt)("inlineCode",{parentName:"li"},"helm install"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"helm upgrade"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"helm uninstall")," depending on the change applied to the HelmChart CR. This CR is automatically updated on changes to the ProjectHelmChart (e.g., modifying the values.yaml) or changes to the underlying Project definition (e.g., adding or removing namespaces from a project).")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If a ProjectHelmChart is not deploying or updating the underlying Project Monitoring Stack for some reason, the Job created by this resource in the Operator / System namespace should be the first place you check to see if there's something wrong with the Helm operation. However, this is generally only accessible by a ",(0,n.kt)("strong",{parentName:"p"},"Cluster Admin.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A HelmRelease CR (managed via an embedded ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/helm-locker"},"rancher/helm-locker")," in the operator): This custom resource automatically locks a deployed Helm release in place and automatically overwrites updates to underlying resources unless the change happens via a Helm operation (",(0,n.kt)("inlineCode",{parentName:"li"},"helm install"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"helm upgrade"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"helm uninstall")," performed by the HelmChart CR).")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"HelmRelease CRs emit Kubernetes Events that detect when an underlying Helm release is being modified and locks it back to place. To view these events, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl describe helmrelease <helm-release-name> -n <operator/system-namespace>"),"; you can also view the logs on this operator to see when changes are detected and which resources modifications were attempted on."))),(0,n.kt)("p",null,"Both of these resources are created for all Helm charts in the Operator / System namespaces to avoid escalation of privileges to underprivileged users."),(0,n.kt)("h3",{id:"advanced-helm-project-operator-configuration"},"Advanced Helm Project Operator Configuration"),(0,n.kt)("p",null,"For more information on advanced configurations, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/prometheus-federator/blob/main/charts/prometheus-federator/0.0.1/README.md#advanced-helm-project-operator-configuration"},"this page"),"."),(0,n.kt)("h3",{id:"prometheus-federator-on-the-local-cluster"},"Prometheus Federator on the Local Cluster"),(0,n.kt)("p",null,"Prometheus Federator is a resource intensive application. Installing it to the local cluster is possible, but ",(0,n.kt)("strong",{parentName:"p"},"not recommended"),"."))}d.isMDXComponent=!0}}]);