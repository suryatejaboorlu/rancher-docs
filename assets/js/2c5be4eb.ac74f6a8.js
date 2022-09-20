"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[47631],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||h[m]||o;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(67294),n=r(86010),o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(87462),n=r(67294),o=r(86010),l=r(72389),s=r(67392),i=r(7094),c=r(12466),p="tabList__CuJ",h="tabItem_LNqP";function u(e){var t,r,l=e.lazy,u=e.block,m=e.defaultValue,d=e.values,v=e.groupId,f=e.className,g=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(r=g.find((function(e){return e.props.default})))?void 0:r.props.value)?t:g[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.U)(),w=y.tabGroupChoices,R=y.setTabGroupChoices,C=(0,n.useState)(N),T=C[0],O=C[1],H=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=w[v];null!=D&&D!==T&&k.some((function(e){return e.value===D}))&&O(D)}var x=function(e){var t=e.currentTarget,r=H.indexOf(t),a=k[r].value;a!==T&&(E(t),O(a),null!=v&&R(v,String(a)))},A=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a,n=H.indexOf(e.currentTarget)+1;r=null!=(a=H[n])?a:H[0];break;case"ArrowLeft":var o,l=H.indexOf(e.currentTarget)-1;r=null!=(o=H[l])?o:H[H.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},k.map((function(e){var t=e.value,r=e.label,l=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return H.push(e)},onKeyDown:A,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),l?(0,n.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return n.createElement(u,(0,a.Z)({key:String(t)},e))}},19873:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=r(65488),s=r(85162),i=["components"],c={title:"Choosing a Rancher Version",weight:1,aliases:["/rancher/v2.0-v2.4/en/installation/options/server-tags"]},p=void 0,h={unversionedId:"getting-started/installation-and-upgrade/resources/choose-a-rancher-version",id:"version-2.0-2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version",title:"Choosing a Rancher Version",description:"This section describes how to choose a Rancher version.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/choose-a-rancher-version",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Choosing a Rancher Version",weight:1,aliases:["/rancher/v2.0-v2.4/en/installation/options/server-tags"]},sidebar:"tutorialSidebar",previous:{title:"Resources",permalink:"/v2.0-v2.4/pages-for-subheaders/resources"},next:{title:"Helm Version Requirements",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"}},u={},m=[{value:"Helm Chart Repositories",id:"helm-chart-repositories",level:3},{value:"Helm Chart Versions",id:"helm-chart-versions",level:3},{value:"Switching to a Different Helm Chart Repository",id:"switching-to-a-different-helm-chart-repository",level:3},{value:"Server Tags",id:"server-tags",level:3}],d={toc:m};function v(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how to choose a Rancher version."),(0,o.kt)("p",null,"For a high-availability installation of Rancher, which is recommended for production, the Rancher server is installed using a ",(0,o.kt)("strong",{parentName:"p"},"Helm chart")," on a Kubernetes cluster. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher."),(0,o.kt)("p",null,"For Docker installations of Rancher, which is used for development and testing, you will install Rancher as a ",(0,o.kt)("strong",{parentName:"p"},"Docker image.")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Helm Charts",mdxType:"TabItem"},(0,o.kt)("p",null,"When installing, upgrading, or rolling back Rancher Server when it is ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"installed on a Kubernetes cluster"),", Rancher server is installed using a Helm chart on a Kubernetes cluster. Therefore, as you prepare to install or upgrade a high availability Rancher configuration, you must add a Helm chart repository that contains the charts for installing Rancher."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher."),(0,o.kt)("h3",{id:"helm-chart-repositories"},"Helm Chart Repositories"),(0,o.kt)("p",null,"Rancher provides several different Helm chart repositories to choose from. We align our latest and stable Helm chart repositories with the Docker tags that are used for a Docker installation. Therefore, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-latest")," repository will contain charts for all the Rancher versions that have been tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher:latest"),". When a Rancher version has been promoted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher:stable"),", it will get added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-stable")," repository."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Command to Add the Repo"),(0,o.kt)("th",{parentName:"tr",align:null},"Description of the Repo"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rancher-latest"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a repository of Helm charts for the latest versions of Rancher. We recommend using this repo for testing out new Rancher builds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rancher-stable"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a repository of Helm charts for older, stable versions of Rancher. We recommend using this repo for production environments.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rancher-alpha"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-alpha https://releases.rancher.com/server-charts/alpha")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a repository of Helm charts for alpha versions of Rancher for previewing upcoming releases. These releases are discouraged in production environments. Upgrades ",(0,o.kt)("em",{parentName:"td"},"to")," or ",(0,o.kt)("em",{parentName:"td"},"from")," charts in the rancher-alpha repository to any other chart, regardless or repository, aren't supported.")))),(0,o.kt)("br",null),"Instructions on when to select these repos are available below in [Switching to a Different Helm Chart Repository](#switching-to-a-different-helm-chart-repository).",(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The introduction of the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-latest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-stable")," Helm Chart repositories was introduced after Rancher v2.1.0, so the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-stable")," repository contains some Rancher versions that were never marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher:stable"),". The versions of Rancher that were tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher:stable")," before v2.1.0 are v2.0.4, v2.0.6, v2.0.8. Post v2.1.0, all charts in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-stable")," repository will correspond with any Rancher version tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"stable"),".")),(0,o.kt)("h3",{id:"helm-chart-versions"},"Helm Chart Versions"),(0,o.kt)("p",null,"Rancher Helm chart versions match the Rancher version (i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"appVersion"),").  Once you've added the repo you can search it to show available versions with the following command:",(0,o.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"helm search repo --versions")),(0,o.kt)("p",null,"If you have several repos you can specify the repo name, ie. ",(0,o.kt)("inlineCode",{parentName:"p"},"helm search repo rancher-stable/rancher --versions")," ",(0,o.kt)("br",null),"\nFor more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_search_repo/"},"https://helm.sh/docs/helm/helm_search_repo/")),(0,o.kt)("p",null,"To fetch a specific version of your chosen repo, define the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version")," parameter like in the following example:",(0,o.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"helm fetch rancher-stable/rancher --version=2.4.8")),(0,o.kt)("p",null,"For the Rancher v2.1.x versions, there were some Helm charts where the version was a build number, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"yyyy.mm.<build-number>"),". These charts have been replaced with the equivalent Rancher version and are no longer available."),(0,o.kt)("h3",{id:"switching-to-a-different-helm-chart-repository"},"Switching to a Different Helm Chart Repository"),(0,o.kt)("p",null,"After installing Rancher, if you want to change which Helm chart repository to install Rancher from, you will need to follow these steps."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Because the rancher-alpha repository contains only alpha charts, switching between the rancher-alpha repository and the rancher-stable or rancher-latest repository for upgrades is not supported.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Latest: Recommended for trying out the newest features",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,o.kt)("li",{parentName:"ul"},"Stable: Recommended for production environments",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,o.kt)("li",{parentName:"ul"},"Alpha: Experimental preview of upcoming releases.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n")),"  Note: Upgrades are not supported to, from, or between Alphas.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"List the current Helm chart repositories."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo list\n\nNAME                  URL\nstable                https://charts.helm.sh/stable\nrancher-<CHART_REPO>        https://releases.rancher.com/server-charts/<CHART_REPO>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Remove the existing Helm Chart repository that contains your charts to install Rancher, which will either be ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-stable")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-latest")," depending on what you had initially added."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo remove rancher-<CHART_REPO>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the Helm chart repository that you want to start installing Rancher from."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add rancher-<CHART_REPO> https://releases.rancher.com/server-charts/<CHART_REPO>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Continue to follow the steps to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/upgrades"},"upgrade Rancher")," from the new Helm chart repository.")))),(0,o.kt)(s.Z,{value:"Docker Images",mdxType:"TabItem"},(0,o.kt)("p",null,"When performing ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker installs"),", upgrades, or rollbacks, you can use ",(0,o.kt)("em",{parentName:"p"},"tags")," to install a specific version of Rancher."),(0,o.kt)("h3",{id:"server-tags"},"Server Tags"),(0,o.kt)("p",null,"Rancher Server is distributed as a Docker image, which have tags attached to them. You can specify this tag when entering the command to deploy Rancher. Remember that if you use a tag without an explicit version (like ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"stable"),"), you must explicitly pull a new version of that image tag. Otherwise, any image cached on the host will be used."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Tag"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rancher/rancher:latest")),(0,o.kt)("td",{parentName:"tr",align:null},"Our latest development release. These builds are validated through our CI automation framework. These releases are not recommended for production environments.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rancher/rancher:stable")),(0,o.kt)("td",{parentName:"tr",align:null},"Our newest stable release. This tag is recommended for production.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rancher/rancher:<v2.X.X>")),(0,o.kt)("td",{parentName:"tr",align:null},"You can install specific versions of Rancher by using the tag from a previous release. See what's available at DockerHub.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Notes:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"master")," tag or any tag with ",(0,o.kt)("inlineCode",{parentName:"li"},"-rc")," or another suffix is meant for the Rancher testing team to validate. You should not use these tags, as these builds are not officially supported."),(0,o.kt)("li",{parentName:"ul"},"Want to install an alpha review for preview? Install using one of the alpha tags listed on our ",(0,o.kt)("a",{parentName:"li",href:"https://forums.rancher.com/c/announcements"},"announcements page")," (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"v2.2.0-alpha1"),"). Caveat: Alpha releases cannot be upgraded to or from any other release."))))))}v.isMDXComponent=!0}}]);