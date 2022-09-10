"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4947],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(a),f=r,d=p["".concat(o,".").concat(f)]||p[f]||c[f]||l;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(86010),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),s=a(67392),o=a(7094),u=a(12466),h="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,a,i=e.lazy,p=e.block,f=e.defaultValue,d=e.values,m=e.groupId,g=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),y=w.tabGroupChoices,R=w.setTabGroupChoices,E=(0,r.useState)(N),A=E[0],T=E[1],I=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==A&&v.some((function(e){return e.value===C}))&&T(C)}var x=function(e){var t=e.currentTarget,a=I.indexOf(t),n=v[a].value;n!==A&&(O(t),T(n),null!=m&&R(m,String(n)))},F=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=I.indexOf(e.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var l,i=I.indexOf(e.currentTarget)-1;a=null!=(l=I[i])?l:I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},v.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return I.push(e)},onKeyDown:F,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function f(e){var t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},51346:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return h},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(65488),s=a(85162),o=["components"],u={title:"Enabling Experimental Features",weight:17,aliases:["/rancher/v2.0-v2.4/en/installation/options/feature-flags/","/rancher/v2.0-v2.4/en/admin-settings/feature-flags/"]},h=void 0,c={unversionedId:"pages-for-subheaders/enable-experimental-features",id:"version-2.0-2.4/pages-for-subheaders/enable-experimental-features",title:"Enabling Experimental Features",description:"Rancher includes some features that are experimental and disabled by default. You might want to enable these features, for example, if you decide that the benefits of using an unsupported storage type outweighs the risk of using an untested feature. Feature flags were introduced to allow you to try these features that are not enabled by default.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/enable-experimental-features.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/enable-experimental-features",permalink:"/v2.0-v2.4/pages-for-subheaders/enable-experimental-features",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/enable-experimental-features.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662781870,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Enabling Experimental Features",weight:17,aliases:["/rancher/v2.0-v2.4/en/installation/options/feature-flags/","/rancher/v2.0-v2.4/en/admin-settings/feature-flags/"]},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/v2.0-v2.4/pages-for-subheaders/advanced-options"},next:{title:"Running on ARM64 (Experimental)",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"}},p={},f=[{value:"Rendering the Helm Chart for Air Gap Installations",id:"rendering-the-helm-chart-for-air-gap-installations",level:3},{value:"Disabling Features with the Rancher UI",id:"disabling-features-with-the-rancher-ui",level:3},{value:"Disabling Features with the Rancher API",id:"disabling-features-with-the-rancher-api",level:3}],d={toc:f};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rancher includes some features that are experimental and disabled by default. You might want to enable these features, for example, if you decide that the benefits of using an ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"},"unsupported storage type")," outweighs the risk of using an untested feature. Feature flags were introduced to allow you to try these features that are not enabled by default."),(0,l.kt)("p",null,"The features can be enabled in three ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabling-features-when-starting-rancher"},"Enable features when starting Rancher.")," When installing Rancher with a CLI, you can use a feature flag to enable a feature by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabling-features-with-the-rancher-ui"},"Enable features from the Rancher UI")," in Rancher v2.3.3+ by going to the ",(0,l.kt)("strong",{parentName:"li"},"Settings")," page."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabling-features-with-the-rancher-api"},"Enable features with the Rancher API")," after installing Rancher.")),(0,l.kt)("p",null,"Each feature has two values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A default value, which can be configured with a flag or environment variable from the command line"),(0,l.kt)("li",{parentName:"ul"},"A set value, which can be configured with the Rancher API or UI")),(0,l.kt)("p",null,"If no value has been set, Rancher uses the default value."),(0,l.kt)("p",null,"Because the API sets the actual value and the command line sets the default value, that means that if you enable or disable a feature with the API or UI, it will override any value set with the command line."),(0,l.kt)("p",null,"For example, if you install Rancher, then set a feature flag to true with the Rancher API, then upgrade Rancher with a command that sets the feature flag to false, the default value will still be false, but the feature will still be enabled because it was set with the Rancher API. If you then deleted the set value (true) with the Rancher API, setting it to NULL, the default value (false) would take effect. See the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/installation-references/feature-flags"},"feature flags page")," for more information."),(0,l.kt)("h1",{id:"enabling-features-when-starting-rancher"},"Enabling Features when Starting Rancher"),(0,l.kt)("p",null,"When you install Rancher, enable the feature you want with a feature flag. The command is different depending on whether you are installing Rancher on a single node or if you are doing a Kubernetes Installation of Rancher."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Values set from the Rancher API will override the value passed in through the command line.")),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Kubernetes Install",mdxType:"TabItem"},(0,l.kt)("p",null,"When installing Rancher with a Helm chart, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--features")," option. In the below example, two features are enabled by passing the feature flag names names in a comma separated list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install rancher-latest/rancher \\\n  --name rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set 'extraEnv[0].name=CATTLE_FEATURES' # Available as of v2.3.0\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true' # Available as of v2.3.0\n")),(0,l.kt)("p",null,"Note: If you are installing an alpha version, Helm requires adding the ",(0,l.kt)("inlineCode",{parentName:"p"},"--devel")," option to the command."),(0,l.kt)("h3",{id:"rendering-the-helm-chart-for-air-gap-installations"},"Rendering the Helm Chart for Air Gap Installations"),(0,l.kt)("p",null,"For an air gap installation of Rancher, you need to add a Helm chart repository and render a Helm template before installing Rancher with Helm. For details, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"air gap installation documentation.")),(0,l.kt)("p",null,"Here is an example of a command for passing in the feature flag names when rendering the Helm template. In the below example, two features are enabled by passing the feature flag names in a comma separated list."),(0,l.kt)("p",null,"The Helm 3 command is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n  --namespace cattle-system \\\n  --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n  --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n  --set ingress.tls.source=secret \\\n  --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Available as of v2.2.0, set a default private registry to be used in Rancher\n  --set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts\n  --set 'extraEnv[0].name=CATTLE_FEATURES' # Available as of v2.3.0\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true' # Available as of v2.3.0\n")),(0,l.kt)("p",null,"The Helm 2 command is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm template ./rancher-<VERSION>.tgz --output-dir . \\\n  --name rancher \\\n  --namespace cattle-system \\\n  --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n  --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n  --set ingress.tls.source=secret \\\n  --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Available as of v2.2.0, set a default private registry to be used in Rancher\n  --set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts\n  --set 'extraEnv[0].name=CATTLE_FEATURES' # Available as of v2.3.0\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true' # Available as of v2.3.0\n"))),(0,l.kt)(s.Z,{value:"Docker Install",mdxType:"TabItem"},(0,l.kt)("p",null,"When installing Rancher with Docker, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--features")," option. In the below example, two features are enabled by passing the feature flag names in a comma separated list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run -d -p 80:80 -p 443:443 \\\n  --restart=unless-stopped \\\n  rancher/rancher:rancher-latest \\\n  --features=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true # Available as of v2.3.0\n")))),(0,l.kt)("h1",{id:"enabling-features-with-the-rancher-ui"},"Enabling Features with the Rancher UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("strong",{parentName:"li"},"Global")," view and click ",(0,l.kt)("strong",{parentName:"li"},"Settings.")),(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"Feature Flags")," tab. You will see a list of experimental features."),(0,l.kt)("li",{parentName:"ol"},"To enable a feature, go to the disabled feature you want to enable and click ",(0,l.kt)("strong",{parentName:"li"},"\u22ee"," > Activate."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is enabled."),(0,l.kt)("h3",{id:"disabling-features-with-the-rancher-ui"},"Disabling Features with the Rancher UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("strong",{parentName:"li"},"Global")," view and click ",(0,l.kt)("strong",{parentName:"li"},"Settings.")),(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"Feature Flags")," tab. You will see a list of experimental features."),(0,l.kt)("li",{parentName:"ol"},"To disable a feature, go to the enabled feature you want to disable and click ",(0,l.kt)("strong",{parentName:"li"},"\u22ee"," > Deactivate."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is disabled."),(0,l.kt)("h1",{id:"enabling-features-with-the-rancher-api"},"Enabling Features with the Rancher API"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"<RANCHER-SERVER-URL>/v3/features"),"."),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("inlineCode",{parentName:"li"},"data")," section, you will see an array containing all of the features that can be turned on with feature flags. The name of the feature is in the ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," field. Click the name of the feature you want to enable."),(0,l.kt)("li",{parentName:"ol"},"In the upper left corner of the screen, under ",(0,l.kt)("strong",{parentName:"li"},"Operations,")," click ",(0,l.kt)("strong",{parentName:"li"},"Edit.")),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},"Value")," drop-down menu, click ",(0,l.kt)("strong",{parentName:"li"},"True.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Show Request.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Send Request.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Close."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is enabled."),(0,l.kt)("h3",{id:"disabling-features-with-the-rancher-api"},"Disabling Features with the Rancher API"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"<RANCHER-SERVER-URL>/v3/features"),"."),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("inlineCode",{parentName:"li"},"data")," section, you will see an array containing all of the features that can be turned on with feature flags. The name of the feature is in the ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," field. Click the name of the feature you want to enable."),(0,l.kt)("li",{parentName:"ol"},"In the upper left corner of the screen, under ",(0,l.kt)("strong",{parentName:"li"},"Operations,")," click ",(0,l.kt)("strong",{parentName:"li"},"Edit.")),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},"Value")," drop-down menu, click ",(0,l.kt)("strong",{parentName:"li"},"False.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Show Request.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Send Request.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Close."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is disabled."))}m.isMDXComponent=!0}}]);