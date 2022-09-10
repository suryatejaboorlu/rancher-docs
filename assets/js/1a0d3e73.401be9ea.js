"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69466],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59680:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={title:"Services",weight:3045},c=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/create-services",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/create-services",title:"Services",description:"Pod configuration is managed by Deployments, StatefulSets and Daemonsets, whereas services direct traffic to pods using selectors.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services.md",tags:[],version:"current",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Services",weight:3045},sidebar:"tutorialSidebar",previous:{title:"Ingress Configuration",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration"},next:{title:"Encrypting HTTP Communication",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"}},u={},p=[{value:"Related Links",id:"related-links",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Pod configuration is managed by Deployments, StatefulSets and Daemonsets, whereas services direct traffic to pods using selectors."),(0,s.kt)("p",null,"For every workload (with at least one port configured) created, a complementing Service Discovery entry is created. This Service Discovery entry enables DNS resolution for the workload's pods using the following naming convention:\n",(0,s.kt)("inlineCode",{parentName:"p"},"<workload>.<namespace>.svc.cluster.local"),"."),(0,s.kt)("p",null,"You can create additional services so that a given namespace resolves with one or more external IP addresses, an external hostname, an alias to another DNS record, other workloads, or a set of pods that match a selector that you create."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the cluster where you want to add a service and click ",(0,s.kt)("strong",{parentName:"li"},"Explore"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Service Discovery > Services"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Create"),"."),(0,s.kt)("li",{parentName:"ol"},"Choose the type of service you want to create."),(0,s.kt)("li",{parentName:"ol"},"Select a ",(0,s.kt)("strong",{parentName:"li"},"Namespace")," from the drop-down list. "),(0,s.kt)("li",{parentName:"ol"},"Enter a ",(0,s.kt)("strong",{parentName:"li"},"Name")," for the service. This name is used for DNS resolution."),(0,s.kt)("li",{parentName:"ol"},"Fill out the rest of the form. For help, refer to the upstream Kubernetes documentation about ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"services.")),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Create"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," A new service is created."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You can view the record by from the project's ",(0,s.kt)("strong",{parentName:"li"},"Service Discovery")," tab."),(0,s.kt)("li",{parentName:"ul"},"When you visit the new DNS name for the new record that you created (",(0,s.kt)("inlineCode",{parentName:"li"},"<recordname>.<namespace>.svc.cluster.local"),"), it resolves the chosen namespace.")),(0,s.kt)("h2",{id:"related-links"},"Related Links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/add-entries-to-pod-etc-hosts-with-host-aliases/"},"Adding entries to Pod /etc/hosts with HostAliases"))))}m.isMDXComponent=!0}}]);