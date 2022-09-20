"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64348],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),g=o,d=m["".concat(i,".").concat(g)]||m[g]||c[g]||r;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),o=n(86010),r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(87462),o=n(67294),r=n(86010),l=n(72389),u=n(67392),i=n(7094),s=n(12466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,g=e.defaultValue,d=e.values,f=e.groupId,h=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,u.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===g?g:null!=(t=null!=g?g:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.U)(),C=b.tabGroupChoices,O=b.setTabGroupChoices,w=(0,o.useState)(N),x=w[0],T=w[1],F=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var _=C[f];null!=_&&_!==x&&y.some((function(e){return e.value===_}))&&T(_)}var S=function(e){var t=e.currentTarget,n=F.indexOf(t),a=y[n].value;a!==x&&(E(t),T(a),null!=f&&O(f,String(a)))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=F.indexOf(e.currentTarget)+1;n=null!=(a=F[o])?a:F[0];break;case"ArrowLeft":var r,l=F.indexOf(e.currentTarget)-1;n=null!=(r=F[l])?r:F[F.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},h)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return F.push(e)},onKeyDown:z,onFocus:S,onClick:S},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function g(e){var t=(0,l.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},33763:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(65488),u=n(85162),i=["components"],s={title:"Outputs and ClusterOutputs",weight:2},p=void 0,c={unversionedId:"explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",id:"version-2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",title:"Outputs and ClusterOutputs",description:"For the full details on configuring Outputs and ClusterOutputs, see the Banzai Cloud Logging operator documentation.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs.md",sourceDirName:"explanations/integrations-in-rancher/logging/custom-resource-configuration",slug:"/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",permalink:"/zh/v2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs.md",tags:[],version:"2.5",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Outputs and ClusterOutputs",weight:2},sidebar:"tutorialSidebar",previous:{title:"Flows and ClusterFlows",permalink:"/zh/v2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows"},next:{title:"Monitoring and Alerting",permalink:"/zh/v2.5/pages-for-subheaders/monitoring-and-alerting"}},m={},g=[{value:"Configuration",id:"configuration",level:2},{value:"Changes in v2.5.8",id:"changes-in-v258",level:2},{value:"ClusterOutputs",id:"clusteroutputs",level:2},{value:"ClusterOutputs",id:"clusteroutputs-1",level:2},{value:"YAML Examples",id:"yaml-examples",level:2},{value:"Cluster Output to ElasticSearch",id:"cluster-output-to-elasticsearch",level:3},{value:"Output to Splunk",id:"output-to-splunk",level:3},{value:"Output to Syslog",id:"output-to-syslog",level:3},{value:"Unsupported Outputs",id:"unsupported-outputs",level:3}],d={toc:g};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For the full details on configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", see the ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/output/"},"Banzai Cloud Logging operator documentation.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"v2.5.8+",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#outputs-2-5-8"},"Outputs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clusteroutputs-2-5-8"},"ClusterOutputs"))),(0,r.kt)("h2",{id:"changes-in-v258"},"Changes in v2.5.8"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutputs")," can now be configured by filling out forms in the Rancher UI."),(0,r.kt)("a",{id:"outputs-2-5-8"}),"# Outputs",(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," resource defines where your ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows")," can send the log messages. ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," are the final stage for a logging ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," is a namespaced resource, which means only a ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," within the same namespace can access it."),(0,r.kt)("p",null,"You can use secrets in these definitions, but they must also be in the same namespace."),(0,r.kt)("p",null,"For the details of ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," custom resource, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/output_types/"},"OutputSpec.")),(0,r.kt)("p",null,"The Rancher UI provides forms for configuring the following ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amazon ElasticSearch"),(0,r.kt)("li",{parentName:"ul"},"Azure Storage"),(0,r.kt)("li",{parentName:"ul"},"Cloudwatch"),(0,r.kt)("li",{parentName:"ul"},"Datadog"),(0,r.kt)("li",{parentName:"ul"},"Elasticsearch"),(0,r.kt)("li",{parentName:"ul"},"File"),(0,r.kt)("li",{parentName:"ul"},"Fluentd"),(0,r.kt)("li",{parentName:"ul"},"GCS"),(0,r.kt)("li",{parentName:"ul"},"Kafka"),(0,r.kt)("li",{parentName:"ul"},"Kinesis Stream"),(0,r.kt)("li",{parentName:"ul"},"LogDNA"),(0,r.kt)("li",{parentName:"ul"},"LogZ"),(0,r.kt)("li",{parentName:"ul"},"Loki"),(0,r.kt)("li",{parentName:"ul"},"New Relic"),(0,r.kt)("li",{parentName:"ul"},"Splunk"),(0,r.kt)("li",{parentName:"ul"},"SumoLogic"),(0,r.kt)("li",{parentName:"ul"},"Syslog")),(0,r.kt)("p",null,"The Rancher UI provides forms for configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," type, target, and access credentials if applicable."),(0,r.kt)("p",null,"For example configuration for each logging plugin supported by the logging operator, see the ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/outputs/"},"logging operator documentation.")),(0,r.kt)("a",{id:"clusteroutputs-2-5-8"}),(0,r.kt)("h2",{id:"clusteroutputs"},"ClusterOutputs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," defines an ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," without namespace restrictions. It is only effective when deployed in the same namespace as the logging operator."),(0,r.kt)("p",null,"For the details of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," custom resource, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/clusteroutput_types/"},"ClusterOutput."))),(0,r.kt)(u.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#outputs-2-5-0"},"Outputs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clusteroutputs-2-5-0"},"ClusterOutputs"))),(0,r.kt)("a",{id:"outputs-2-5-0"}),"# Outputs",(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," resource defines where your ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows")," can send the log messages. ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," are the final stage for a logging ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," is a namespaced resource, which means only a ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," within the same namespace can access it."),(0,r.kt)("p",null,"You can use secrets in these definitions, but they must also be in the same namespace."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," are configured in YAML. For the details of ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," custom resource, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/output_types/"},"OutputSpec.")),(0,r.kt)("p",null,"For examples of configuration for each logging plugin supported by the logging operator, see the ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/outputs/"},"logging operator documentation.")),(0,r.kt)("a",{id:"clusteroutputs-2-5-0"}),(0,r.kt)("h2",{id:"clusteroutputs-1"},"ClusterOutputs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," defines an ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," without namespace restrictions. It is only effective when deployed in the same namespace as the logging operator."),(0,r.kt)("p",null,"The Rancher UI provides forms for configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," type, target, and access credentials if applicable."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutputs")," are configured in YAML. For the details of ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," custom resource, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/clusteroutput_types/"},"ClusterOutput.")),(0,r.kt)("p",null,"For example configuration for each logging plugin supported by the logging operator, see the ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/outputs/"},"logging operator documentation.")))),(0,r.kt)("h2",{id:"yaml-examples"},"YAML Examples"),(0,r.kt)("p",null,"Once logging is installed, you can use these examples to help craft your own logging pipeline."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cluster-output-to-elasticsearch"},"Cluster Output to ElasticSearch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#output-to-splunk"},"Output to Splunk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#output-to-syslog"},"Output to Syslog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#unsupported-outputs"},"Unsupported Outputs"))),(0,r.kt)("h3",{id:"cluster-output-to-elasticsearch"},"Cluster Output to ElasticSearch"),(0,r.kt)("p",null,"Let's say you wanted to send all logs in your cluster to an ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch")," cluster. First, we create a cluster ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: "example-es"\n  namespace: "cattle-logging-system"\nspec:\n  elasticsearch:\n    host: elasticsearch.example.com\n    port: 9200\n    scheme: http\n')),(0,r.kt)("p",null,"We have created this ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),", without elasticsearch configuration, in the same namespace as our operator: ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-logging-system."),". Any time we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),", we have to put it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-logging-system")," namespace."),(0,r.kt)("p",null,"Now that we have configured where we want the logs to go, let's configure all logs to go to that ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: "all-logs"\n  namespace: "cattle-logging-system"\nspec:\n  globalOutputRefs:\n    - "example-es"\n')),(0,r.kt)("p",null,"We should now see our configured index with logs in it."),(0,r.kt)("h3",{id:"output-to-splunk"},"Output to Splunk"),(0,r.kt)("p",null,"What if we have an application team who only wants logs from a specific namespaces sent to a ",(0,r.kt)("inlineCode",{parentName:"p"},"splunk")," server? For this case, we can use namespaced ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows"),"."),(0,r.kt)("p",null,"Before we start, let's set up that team's application: ",(0,r.kt)("inlineCode",{parentName:"p"},"coolapp"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: devteam\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: coolapp\n  namespace: devteam\n  labels:\n    app: coolapp\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: coolapp\n  template:\n    metadata:\n      labels:\n        app: coolapp\n    spec:\n      containers:\n        - name: generator\n          image: paynejacob/loggenerator:latest\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"coolapp")," running, we will follow a similar path as when we created a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),". However, unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", we create our ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," in our application's namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: Output\nmetadata:\n  name: "devteam-splunk"\n  namespace: "devteam"\nspec:\n  splunkHec:\n    hec_host: splunk.example.com\n    hec_port: 8088\n    protocol: http\n')),(0,r.kt)("p",null,"Once again, let's feed our ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," some logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: Flow\nmetadata:\n  name: "devteam-logs"\n  namespace: "devteam"\nspec:\n  localOutputRefs:\n    - "devteam-splunk"\n')),(0,r.kt)("h3",{id:"output-to-syslog"},"Output to Syslog"),(0,r.kt)("p",null,"Let's say you wanted to send all logs in your cluster to an ",(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," server. First, we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: "example-syslog"\n  namespace: "cattle-logging-system"\nspec:\n  syslog:\n    buffer:\n      timekey: 30s\n      timekey_use_utc: true\n      timekey_wait: 10s\n      flush_interval: 5s\n    format:\n      type: json\n      app_name_field: test\n    host: syslog.example.com\n    insecure: true\n    port: 514\n    transport: tcp\n')),(0,r.kt)("p",null,"Now that we have configured where we want the logs to go, let's configure all logs to go to that ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: "all-logs"\n  namespace: cattle-logging-system\nspec:\n  globalOutputRefs:\n    - "example-syslog"\n')),(0,r.kt)("h3",{id:"unsupported-outputs"},"Unsupported Outputs"),(0,r.kt)("p",null,"For the final example, we create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," to write logs to a destination that is not supported out of the box:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note on syslog")," As of Rancher v2.5.4, ",(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," is a supported ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),". However, this example still provides an overview on using unsupported plugins.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: syslog-config\n  namespace: cattle-logging-system\ntype: Opaque\nstringData:\n  fluent-bit.conf: |\n    [INPUT]\n        Name              forward\n        Port              24224\n\n    [OUTPUT]\n        Name              syslog\n        InstanceName      syslog-output\n        Match             *\n        Addr              syslog.example.com\n        Port              514\n        Cluster           ranchers\n\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: fluentbit-syslog-forwarder\n  namespace: cattle-logging-system\n  labels:\n    output: syslog\nspec:\n  selector:\n    matchLabels:\n      output: syslog\n  template:\n    metadata:\n      labels:\n        output: syslog\n    spec:\n      containers:\n      - name: fluentbit\n        image: paynejacob/fluent-bit-out-syslog:latest\n        ports:\n          - containerPort: 24224\n        volumeMounts:\n          - mountPath: "/fluent-bit/etc/"\n            name: configuration\n      volumes:\n      - name: configuration\n        secret:\n          secretName: syslog-config\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: syslog-forwarder\n  namespace: cattle-logging-system\nspec:\n  selector:\n    output: syslog\n  ports:\n    - protocol: TCP\n      port: 24224\n      targetPort: 24224\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: all-logs\n  namespace: cattle-logging-system\nspec:\n  globalOutputRefs:\n    - syslog\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: syslog\n  namespace: cattle-logging-system\nspec:\n  forward:\n    servers:\n      - host: "syslog-forwarder.cattle-logging-system"\n    require_ack_response: false\n    ignore_network_errors_at_startup: false\n')),(0,r.kt)("p",null,"Let's break down what is happening here. First, we create a deployment of a container that has the additional ",(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," plugin and accepts logs forwarded from another ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentd"),". Next we create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," configured as a forwarder to our deployment. The deployment ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentd")," will then forward all logs to the configured ",(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," destination."))}f.isMDXComponent=!0}}]);