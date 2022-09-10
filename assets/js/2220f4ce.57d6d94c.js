"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68453],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=g(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var g=2;g<i;g++)r[g]=n[g];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32897:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return g},toc:function(){return p}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={title:"rancher-logging Helm Chart Options",shortTitle:"Helm Chart Options",weight:4},s=void 0,g={unversionedId:"explanations/integrations-in-rancher/logging/logging-helm-chart-options",id:"version-2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options",title:"rancher-logging Helm Chart Options",description:"- Enable/Disable Windows Node Logging",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options.md",sourceDirName:"explanations/integrations-in-rancher/logging",slug:"/explanations/integrations-in-rancher/logging/logging-helm-chart-options",permalink:"/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options.md",tags:[],version:"2.5",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"rancher-logging Helm Chart Options",shortTitle:"Helm Chart Options",weight:4},sidebar:"tutorialSidebar",previous:{title:"Role-based Access Control for Logging",permalink:"/v2.5/explanations/integrations-in-rancher/logging/rbac-for-logging"},next:{title:"Working with Taints and Tolerations",permalink:"/v2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations"}},d={},p=[{value:"Enable/Disable Windows Node Logging",id:"enabledisable-windows-node-logging",level:3},{value:"Working with a Custom Docker Root Directory",id:"working-with-a-custom-docker-root-directory",level:3},{value:"Adding NodeSelector Settings and Tolerations for Custom Taints",id:"adding-nodeselector-settings-and-tolerations-for-custom-taints",level:3},{value:"Enabling the Logging Application to Work with SELinux",id:"enabling-the-logging-application-to-work-with-selinux",level:3},{value:"Additional Logging Sources",id:"additional-logging-sources",level:3}],c={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enable-disable-windows-node-logging"},"Enable/Disable Windows Node Logging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#working-with-a-custom-docker-root-directory"},"Working with a Custom Docker Root Directory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enabling-the-logging-application-to-work-with-selinux"},"Enabling the Logging Application to Work with SELinux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#additional-logging-sources"},"Additional Logging Sources"))),(0,i.kt)("h3",{id:"enabledisable-windows-node-logging"},"Enable/Disable Windows Node Logging"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,i.kt)("p",null,"You can enable or disable Windows node logging by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"global.cattle.windows.enabled")," to either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,i.kt)("p",null,"By default, Windows node logging will be enabled if the Cluster Explorer UI is used to install the logging application on a Windows cluster."),(0,i.kt)("p",null,"In this scenario, setting ",(0,i.kt)("inlineCode",{parentName:"p"},"global.cattle.windows.enabled")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," will disable Windows node logging on the cluster.\nWhen disabled, logs will still be collected from Linux nodes within the Windows cluster."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Currently an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/32325"},"issue")," exists where Windows nodeAgents are not deleted when performing a ",(0,i.kt)("inlineCode",{parentName:"p"},"helm upgrade")," after disabling Windows logging in a Windows cluster. In this scenario, users may need to manually remove the Windows nodeAgents if they are already installed.")),(0,i.kt)("h3",{id:"working-with-a-custom-docker-root-directory"},"Working with a Custom Docker Root Directory"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Applies to v2.5.6+")),(0,i.kt)("p",null,"If using a custom Docker root directory, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"global.dockerRootDirectory")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,i.kt)("p",null,"This will ensure that the Logging CRs created will use your specified path rather than the default Docker ",(0,i.kt)("inlineCode",{parentName:"p"},"data-root")," location."),(0,i.kt)("p",null,"Note that this only affects Linux nodes."),(0,i.kt)("p",null,"If there are any Windows nodes in the cluster, the change will not be applicable to those nodes."),(0,i.kt)("h3",{id:"adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints"),(0,i.kt)("p",null,"You can add your own ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeSelector")," settings and add ",(0,i.kt)("inlineCode",{parentName:"p"},"tolerations")," for additional taints by editing the logging Helm chart values. For details, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations"},"this page.")),(0,i.kt)("h3",{id:"enabling-the-logging-application-to-work-with-selinux"},"Enabling the Logging Application to Work with SELinux"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Requirements:")," Logging v2 was tested with SELinux on RHEL/CentOS 7 and 8.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"Security-Enhanced Linux (SELinux)")," is a security enhancement to Linux. After being historically used by government agencies, SELinux is now industry standard and is enabled by default on CentOS 7 and 8."),(0,i.kt)("p",null,"To use Logging v2 with SELinux, we recommend installing the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM according to the instructions on ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/selinux-rpm#installing-the-rancher-selinux-rpm"},"this page.")),(0,i.kt)("p",null,"Then, when installing the logging application, configure the chart to be SELinux aware by changing ",(0,i.kt)("inlineCode",{parentName:"p"},"global.seLinux.enabled")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,i.kt)("h3",{id:"additional-logging-sources"},"Additional Logging Sources"),(0,i.kt)("p",null,"By default, Rancher collects logs for ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#control-plane-components"},"control plane components")," and ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#node-components"},"node components")," for all cluster types."),(0,i.kt)("p",null,"In some cases, Rancher may be able to collect additional logs."),(0,i.kt)("p",null,"The following table summarizes the sources where additional logs may be collected for each node types:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Logging Source"),(0,i.kt)("th",{parentName:"tr",align:null},"Linux Nodes (including in Windows cluster)"),(0,i.kt)("th",{parentName:"tr",align:null},"Windows Nodes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RKE"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RKE2"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"K3s"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AKS"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EKS"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GKE"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"To enable hosted Kubernetes providers as additional logging sources, go to ",(0,i.kt)("strong",{parentName:"p"},"Cluster Explorer > Logging > Chart Options")," and select the ",(0,i.kt)("strong",{parentName:"p"},"Enable enhanced cloud provider logging")," option."),(0,i.kt)("p",null,"When enabled, Rancher collects all additional node and control plane logs the provider has made available, which may vary between providers"),(0,i.kt)("p",null,"If you're already using a cloud provider's own logging solution such as AWS CloudWatch or Google Cloud operations suite (formerly Stackdriver), it is not necessary to enable this option as the native solution will have unrestricted access to all logs."))}u.isMDXComponent=!0}}]);