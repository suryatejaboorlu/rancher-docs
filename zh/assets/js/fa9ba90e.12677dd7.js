"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63831],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=o(a),c=n,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||s;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<s;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2943:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],l={title:"\u4f7f\u7528 kubectl \u7ba1\u7406 HPA",weight:3029},u=void 0,o={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",title:"\u4f7f\u7528 kubectl \u7ba1\u7406 HPA",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 kubectl \u7ba1\u7406 HPA\u3002\u672c\u6587\u5bf9\u4ee5\u4e0b\u64cd\u4f5c\u8fdb\u884c\u4e86\u8bf4\u660e\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u4f7f\u7528 kubectl \u7ba1\u7406 HPA",weight:3029},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Rancher UI \u7ba1\u7406 HPA",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"},next:{title:"\u4f7f\u7528 kubectl \u6d4b\u8bd5 HPA",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl"}},p={},m=[{value:"\u7ba1\u7406 HPA \u7684\u57fa\u672c kubectl \u547d\u4ee4",id:"\u7ba1\u7406-hpa-\u7684\u57fa\u672c-kubectl-\u547d\u4ee4",level:2},{value:"HPA \u6e05\u5355\u5b9a\u4e49\u793a\u4f8b",id:"hpa-\u6e05\u5355\u5b9a\u4e49\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u8d44\u6e90\u6307\u6807\uff08CPU \u548c\u5185\u5b58\uff09\u914d\u7f6e HPA \u4ee5\u8fdb\u884c\u6269\u7f29",id:"\u4f7f\u7528\u8d44\u6e90\u6307\u6807cpu-\u548c\u5185\u5b58\u914d\u7f6e-hpa-\u4ee5\u8fdb\u884c\u6269\u7f29",level:2},{value:"\u914d\u7f6e HPA \u4ee5\u4f7f\u7528 Prometheus \u81ea\u5b9a\u4e49\u6307\u6807\u8fdb\u884c\u6269\u7f29",id:"\u914d\u7f6e-hpa-\u4ee5\u4f7f\u7528-prometheus-\u81ea\u5b9a\u4e49\u6307\u6807\u8fdb\u884c\u6269\u7f29",level:2}],d={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," \u7ba1\u7406 HPA\u3002\u672c\u6587\u5bf9\u4ee5\u4e0b\u64cd\u4f5c\u8fdb\u884c\u4e86\u8bf4\u660e\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u521b\u5efa HPA"),(0,s.kt)("li",{parentName:"ul"},"\u83b7\u53d6 HPA \u7684\u4fe1\u606f"),(0,s.kt)("li",{parentName:"ul"},"\u5220\u9664 HPA"),(0,s.kt)("li",{parentName:"ul"},"\u914d\u7f6e HPA \u4ee5\u6839\u636e CPU \u6216\u5185\u5b58\u5229\u7528\u7387\u8fdb\u884c\u6269\u7f29"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4f7f\u7528 Prometheus \u7b49\u7b2c\u4e09\u65b9\u5de5\u5177\u7684\u6307\u6807\uff0c\u914d\u7f6e HPA \u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u6307\u6807\u8fdb\u884c\u6269\u7f29")),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u521b\u5efa\u3001\u67e5\u770b\u548c\u5220\u9664 HPA\u3002\u4f60\u8fd8\u53ef\u4ee5\u6839\u636e Rancher UI \u4e2d\u7684 CPU/\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u8fdb\u884c\u6269\u7f29\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"},"\u4f7f\u7528 Rancher UI \u7ba1\u7406 HPA"),"\u3002\u5982\u679c\u8981\u4f7f\u7528 CPU/\u5185\u5b58\u4ee5\u5916\u7684\u6307\u6807\u6765\u6269\u7f29 HPA\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u3002"),(0,s.kt)("h2",{id:"\u7ba1\u7406-hpa-\u7684\u57fa\u672c-kubectl-\u547d\u4ee4"},"\u7ba1\u7406 HPA \u7684\u57fa\u672c kubectl \u547d\u4ee4"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u6709 HPA \u6e05\u5355\u6587\u4ef6\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6765\u521b\u5efa\u3001\u7ba1\u7406\u548c\u5220\u9664 HPA\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u521b\u5efa HPA"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u6709\u6e05\u5355\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl create -f <HPA_MANIFEST>"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u6ca1\u6709\u6e05\u5355\uff08\u4ec5\u652f\u6301 CPU\uff09\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl autoscale deployment hello-world --min=2 --max=5 --cpu-percent=50"))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u83b7\u53d6 HPA \u4fe1\u606f"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u57fa\u672c\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl get hpa hello-world"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u8be6\u7ec6\u63cf\u8ff0\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl describe hpa hello-world"))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u5220\u9664 HPA"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kubectl delete hpa hello-world"))))),(0,s.kt)("h2",{id:"hpa-\u6e05\u5355\u5b9a\u4e49\u793a\u4f8b"},"HPA \u6e05\u5355\u5b9a\u4e49\u793a\u4f8b"),(0,s.kt)("p",null,"HPA \u6e05\u5355\u662f\u7528\u4e8e\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," \u7ba1\u7406 HPA \u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u7247\u6bb5\u5728 HPA \u6e05\u5355\u4e2d\u4f7f\u7528\u4e86\u4e0d\u540c\u7684\u6307\u4ee4\u3002\u8bf7\u53c2\u9605\u793a\u4f8b\u4e0b\u65b9\u7684\u5217\u8868\u4ee5\u4e86\u89e3\u6bcf\u4e2a\u6307\u4ee4\u7684\u7528\u9014\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hello-world\nspec:\n  scaleTargetRef:\n    apiVersion: extensions/v1beta1\n    kind: Deployment\n    name: hello-world\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      targetAverageUtilization: 50\n  - type: Resource\n    resource:\n      name: memory\n      targetAverageValue: 100Mi\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"\u6307\u4ee4"),(0,s.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"apiVersion: autoscaling/v2beta1")),(0,s.kt)("td",{parentName:"tr",align:null},"\u6b63\u5728\u4f7f\u7528\u7684 Kubernetes ",(0,s.kt)("inlineCode",{parentName:"td"},"autoscaling")," API \u7ec4\u7684\u7248\u672c\u3002\u6b64\u793a\u4f8b\u6e05\u5355\u4f7f\u7528 beta \u7248\u672c\uff0c\u56e0\u6b64\u542f\u7528\u4e86\u6309 CPU./\u5185\u5b58\u8fdb\u884c\u6269\u7f29\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"name: hello-world")),(0,s.kt)("td",{parentName:"tr",align:null},"\u8868\u793a HPA \u5728\u4e3a ",(0,s.kt)("inlineCode",{parentName:"td"},"hello-word")," deployment \u6267\u884c\u81ea\u52a8\u6269\u7f29\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"minReplicas: 1")),(0,s.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u8fd0\u884c\u7684\u6700\u5c0f\u526f\u672c\u6570\u4e0d\u80fd\u4f4e\u4e8e 1\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"maxReplicas: 10")),(0,s.kt)("td",{parentName:"tr",align:null},"\u6307\u793a deployment \u4e2d\u7684\u6700\u5927\u526f\u672c\u6570\u4e0d\u80fd\u8d85\u8fc7 10\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"targetAverageUtilization: 50")),(0,s.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5f53\u5e73\u5747\u8fd0\u884c\u7684 pod \u4f7f\u7528\u8d85\u8fc7\u8bf7\u6c42 CPU \u7684 50% \u65f6\uff0cdeployment \u5c06\u6269\u5c55 pod\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"targetAverageValue: 100Mi")),(0,s.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5f53\u5e73\u5747\u8fd0\u884c\u7684 pod \u4f7f\u7528\u8d85\u8fc7 100Mi \u7684\u5185\u5b58\u65f6\uff0cdeployment \u5c06\u6269\u5c55 pod\u3002")))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"\u4f7f\u7528\u8d44\u6e90\u6307\u6807cpu-\u548c\u5185\u5b58\u914d\u7f6e-hpa-\u4ee5\u8fdb\u884c\u6269\u7f29"},"\u4f7f\u7528\u8d44\u6e90\u6307\u6807\uff08CPU \u548c\u5185\u5b58\uff09\u914d\u7f6e HPA \u4ee5\u8fdb\u884c\u6269\u7f29"),(0,s.kt)("p",null,"\u5728 Rancher 2.0.7 \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\u521b\u5efa\u7684\u96c6\u7fa4\u6ee1\u8db3\u4f7f\u7528 Horizontal Pod Autoscaler \u7684\u6240\u6709\u8981\u6c42\uff08metrics-server \u548c Kubernetes \u96c6\u7fa4\u914d\u7f6e\uff09\u3002"),(0,s.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u68c0\u67e5\u4f60\u7684\u5b89\u88c5\u4e2d\u662f\u5426\u6709\u53ef\u7528\u7684\u6307\u6807\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'$ kubectl top nodes\nNAME                              CPU(cores)   CPU%      MEMORY(bytes)   MEMORY%\nnode-controlplane   196m         9%        1623Mi          42%\nnode-etcd           80m          4%        1090Mi          28%\nnode-worker         64m          3%        1146Mi          29%\n$ kubectl -n kube-system top pods\nNAME                                   CPU(cores)   MEMORY(bytes)\ncanal-pgldr                            18m          46Mi\ncanal-vhkgr                            20m          45Mi\ncanal-x5q5v                            17m          37Mi\ncanal-xknnz                            20m          37Mi\nkube-dns-7588d5b5f5-298j2              0m           22Mi\nkube-dns-autoscaler-5db9bbb766-t24hw   0m           5Mi\nmetrics-server-97bc649d5-jxrlt         0m           12Mi\n$ kubectl -n kube-system logs -l k8s-app=metrics-server\nI1002 12:55:32.172841       1 heapster.go:71] /metrics-server --source=kubernetes.summary_api:https://kubernetes.default.svc?kubeletHttps=true&kubeletPort=10250&useServiceAccount=true&insecure=true\nI1002 12:55:32.172994       1 heapster.go:72] Metrics Server version v0.2.1\nI1002 12:55:32.173378       1 configs.go:61] Using Kubernetes client with master "https://kubernetes.default.svc" and version\nI1002 12:55:32.173401       1 configs.go:62] Using kubelet port 10250\nI1002 12:55:32.173946       1 heapster.go:128] Starting with Metric Sink\nI1002 12:55:32.592703       1 serving.go:308] Generated self-signed cert (apiserver.local.config/certificates/apiserver.crt, apiserver.local.config/certificates/apiserver.key)\nI1002 12:55:32.925630       1 heapster.go:101] Starting Heapster API server...\n[restful] 2018/10/02 12:55:32 log.go:33: [restful/swagger] listing is available at https:///swaggerapi\n[restful] 2018/10/02 12:55:32 log.go:33: [restful/swagger] https:///swaggerui/ is mapped to folder /swagger-ui/\nI1002 12:55:32.928597       1 serve.go:85] Serving securely on 0.0.0.0:443\n')),(0,s.kt)("h2",{id:"\u914d\u7f6e-hpa-\u4ee5\u4f7f\u7528-prometheus-\u81ea\u5b9a\u4e49\u6307\u6807\u8fdb\u884c\u6269\u7f29"},"\u914d\u7f6e HPA \u4ee5\u4f7f\u7528 Prometheus \u81ea\u5b9a\u4e49\u6307\u6807\u8fdb\u884c\u6269\u7f29"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06 HPA \u914d\u7f6e\u4e3a\u6839\u636e\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u63d0\u4f9b\u7684\u81ea\u5b9a\u4e49\u6307\u6807\u8fdb\u884c\u81ea\u52a8\u6269\u7f29\u3002\u4f7f\u7528\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u8fdb\u884c\u81ea\u52a8\u6269\u7f29\u7684\u6700\u5e38\u89c1\u7528\u4f8b\u662f\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u7ea7\u522b\u7684\u6307\u6807\uff08\u5373\u6bcf\u79d2 HTTP \u8bf7\u6c42\u6570\uff09\u3002HPA \u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"custom.metrics.k8s.io")," API \u6765\u4f7f\u7528\u8fd9\u4e9b\u6307\u6807\u3002\u901a\u8fc7\u4e3a\u6307\u6807\u6536\u96c6\u89e3\u51b3\u65b9\u6848\u90e8\u7f72\u81ea\u5b9a\u4e49\u6307\u6807\u9002\u914d\u5668\uff0c\u4f60\u53ef\u4ee5\u542f\u7528\u6b64 API\u3002"),(0,s.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),"\u3002\u6211\u4eec\u5047\u8bbe\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Prometheus \u90e8\u7f72\u5728\u96c6\u7fa4\u4e2d\u3002"),(0,s.kt)("li",{parentName:"ul"},"Prometheus \u914d\u7f6e\u6b63\u786e\uff0c\u5e76\u4ece pod\u3001\u8282\u70b9\u3001\u547d\u540d\u7a7a\u95f4\u7b49\u6536\u96c6\u5408\u9002\u7684\u6307\u6807\u3002"),(0,s.kt)("li",{parentName:"ul"},"Prometheus \u66b4\u9732\u5728\u4ee5\u4e0b URL \u548c\u7aef\u53e3\uff1a",(0,s.kt)("inlineCode",{parentName:"li"},"http://prometheus.mycompany.io:80"))),(0,s.kt)("p",null,"Prometheus \u53ef\u7528\u4e8e Rancher 2.0 \u5e94\u7528\u5546\u5e97\u4e2d\u7684 Deployment\u3002\u5982\u679c\u5b83\u8fd8\u6ca1\u6709\u8fd0\u884c\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\uff0c\u8bf7\u5728 Rancher \u5e94\u7528\u5546\u5e97\u4e2d\u90e8\u7f72\u5b83\u3002"),(0,s.kt)("p",null,"\u4e3a\u4e86\u8ba9 HPA \u4f7f\u7528\u6765\u81ea Prometheus \u7684\u81ea\u5b9a\u4e49\u6307\u6807\uff0c",(0,s.kt)("a",{parentName:"p",href:"https://github.com/DirectXMan12/k8s-prometheus-adapter"},"k8s-prometheus-adapter")," \u5305\u9700\u8981\u5728\u4f60\u96c6\u7fa4\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u3002\u8981\u5b89\u88c5 ",(0,s.kt)("inlineCode",{parentName:"p"},"k8s-prometheus-adapter"),"\uff0c\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/banzaicloud/banzai-charts"},"banzai-charts")," \u63d0\u4f9b\u7684 Helm Chart\u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u5728\u96c6\u7fa4\u4e2d\u521d\u59cb\u5316 Helm\u3002"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# kubectl -n kube-system create serviceaccount tiller\nkubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller\nhelm init --service-account tiller\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u4ece GitHub \u514b\u9686 ",(0,s.kt)("inlineCode",{parentName:"p"},"banzai-charts")," \u4ed3\u5e93\uff1a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# git clone https://github.com/banzaicloud/banzai-charts\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u5b89\u88c5 ",(0,s.kt)("inlineCode",{parentName:"p"},"prometheus-adapter")," Chart\uff0c\u6307\u5b9a Prometheus URL \u548c\u7aef\u53e3\u53f7\uff1a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},'# helm install --name prometheus-adapter banzai-charts/prometheus-adapter --set prometheus.url="http://prometheus.mycompany.io",prometheus.port="80" --namespace kube-system\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u68c0\u67e5 ",(0,s.kt)("inlineCode",{parentName:"p"},"prometheus-adapter")," \u662f\u5426\u6b63\u5e38\u8fd0\u884c\u3002\u68c0\u67e5\u670d\u52a1 pod \u5e76\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u767b\u5f55\u3002")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u68c0\u67e5\u670d\u52a1 pod \u662f\u5426\u5904\u4e8e ",(0,s.kt)("inlineCode",{parentName:"p"},"Running")," \u72b6\u6001\u3002\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# kubectl get pods -n kube-system\n")),(0,s.kt)("p",{parentName:"li"},"\u5728\u8f93\u51fa\u7ed3\u679c\u4e2d\u67e5\u627e ",(0,s.kt)("inlineCode",{parentName:"p"},"Running")," \u72b6\u6001\u3002"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"NAME                                  READY     STATUS    RESTARTS   AGE\n...\nprometheus-adapter-prometheus-adapter-568674d97f-hbzfx   1/1       Running   0          7h\n...\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u901a\u8fc7\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\u670d\u52a1\u65e5\u5fd7\uff0c\u786e\u4fdd\u670d\u52a1\u6b63\u5e38\u8fd0\u884c\uff1a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# kubectl logs prometheus-adapter-prometheus-adapter-568674d97f-hbzfx -n kube-system\n")),(0,s.kt)("p",{parentName:"li"},"\u7136\u540e\u67e5\u770b\u65e5\u5fd7\u8f93\u51fa\u4ee5\u786e\u8ba4\u670d\u52a1\u6b63\u5728\u8fd0\u884c\u3002"),(0,s.kt)("details",{id:"prometheus-logs"},(0,s.kt)("summary",null,"Prometheus Adaptor \u65e5\u5fd7"),(0,s.kt)("p",{parentName:"li"},"...\nI0724 10:18:45.696679       1 round_trippers.go:436] GET ",(0,s.kt)("a",{parentName:"p",href:"https://10.43.0.1:443/api/v1/namespaces/default/pods?labelSelector=app%3Dhello-world"},"https://10.43.0.1:443/api/v1/namespaces/default/pods?labelSelector=app%3Dhello-world"),' 200 OK in 2 milliseconds\nI0724 10:18:45.696695       1 round_trippers.go:442] Response Headers:\nI0724 10:18:45.696699       1 round_trippers.go:445]     Date: Tue, 24 Jul 2018 10:18:45 GMT\nI0724 10:18:45.696703       1 round_trippers.go:445]     Content-Type: application/json\nI0724 10:18:45.696706       1 round_trippers.go:445]     Content-Length: 2581\nI0724 10:18:45.696766       1 request.go:836] Response Body: {"kind":"PodList","apiVersion":"v1","metadata":{"selfLink":"/api/v1/namespaces/default/pods","resourceVersion":"6237"},"items":[{"metadata":{"name":"hello-world-54764dfbf8-q6l82","generateName":"hello-world-54764dfbf8-","namespace":"default","selfLink":"/api/v1/namespaces/default/pods/hello-world-54764dfbf8-q6l82","uid":"484cb929-8f29-11e8-99d2-067cac34e79c","resourceVersion":"4066","creationTimestamp":"2018-07-24T10:06:50Z","labels":{"app":"hello-world","pod-template-hash":"1032089694"},"annotations":{"cni.projectcalico.org/podIP":"10.42.0.7/32"},"ownerReferences":','[{"apiVersion":"extensions/v1beta1","kind":"ReplicaSet","name":"hello-world-54764dfbf8","uid":"4849b9b1-8f29-11e8-99d2-067cac34e79c","controller":true,"blockOwnerDeletion":true}]','},"spec":{"volumes":','[{"name":"default-token-ncvts","secret":{"secretName":"default-token-ncvts","defaultMode":420}}]',',"containers":[{"name":"hello-world","image":"rancher/hello-world","ports":','[{"containerPort":80,"protocol":"TCP"}]',',"resources":{"requests":{"cpu":"500m","memory":"64Mi"}},"volumeMounts":','[{"name":"default-token-ncvts","readOnly":true,"mountPath":"/var/run/secrets/kubernetes.io/serviceaccount"}]',',"terminationMessagePath":"/dev/termination-log","terminationMessagePolicy":"File","imagePullPolicy":"Always"}],"restartPolicy":"Always","terminationGracePeriodSeconds":30,"dnsPolicy":"ClusterFirst","serviceAccountName":"default","serviceAccount":"default","nodeName":"34.220.18.140","securityContext":{},"schedulerName":"default-scheduler","tolerations":','[{"key":"node.kubernetes.io/not-ready","operator":"Exists","effect":"NoExecute","tolerationSeconds":300},{"key":"node.kubernetes.io/unreachable","operator":"Exists","effect":"NoExecute","tolerationSeconds":300}]','},"status":{"phase":"Running","conditions":','[{"type":"Initialized","status":"True","lastProbeTime":null,"lastTransitionTime":"2018-07-24T10:06:50Z"},{"type":"Ready","status":"True","lastProbeTime":null,"lastTransitionTime":"2018-07-24T10:06:54Z"},{"type":"PodScheduled","status":"True","lastProbeTime":null,"lastTransitionTime":"2018-07-24T10:06:50Z"}]',',"hostIP":"34.220.18.140","podIP":"10.42.0.7","startTime":"2018-07-24T10:06:50Z","containerStatuses":','[{"name":"hello-world","state":{"running":{"startedAt":"2018-07-24T10:06:54Z"}},"lastState":{},"ready":true,"restartCount":0,"image":"rancher/hello-world:latest","imageID":"docker-pullable://rancher/hello-world@sha256:4b1559cb4b57ca36fa2b313a3c7dde774801aa3a2047930d94e11a45168bc053","containerID":"docker://cce4df5fc0408f03d4adf82c90de222f64c302bf7a04be1c82d584ec31530773"}]',',"qosClass":"Burstable"}}]}\nI0724 10:18:45.699525       1 api.go:74] GET ',(0,s.kt)("a",{parentName:"p",href:"http://prometheus-server.prometheus.34.220.18.140.xip.io/api/v1/query?query=sum%28rate%28container_fs_read_seconds_total%7Bpod_name%3D%22hello-world-54764dfbf8-q6l82%22%2Ccontainer_name%21%3D%22POD%22%2Cnamespace%3D%22default%22%7D%5B5m%5D%29%29+by+%28pod_name%29&time=1532427525.697"},"http://prometheus-server.prometheus.34.220.18.140.xip.io/api/v1/query?query=sum%28rate%28container_fs_read_seconds_total%7Bpod_name%3D%22hello-world-54764dfbf8-q6l82%22%2Ccontainer_name%21%3D%22POD%22%2Cnamespace%3D%22default%22%7D%5B5m%5D%29%29+by+%28pod_name%29&time=1532427525.697"),' 200 OK\nI0724 10:18:45.699620       1 api.go:93] Response Body: {"status":"success","data":{"resultType":"vector","result":[{"metric":{"pod_name":"hello-world-54764dfbf8-q6l82"},"value":','[1532427525.697,"0"]',"}]}}\nI0724 10:18:45.699939       1 wrap.go:42] GET /apis/custom.metrics.k8s.io/v1beta1/namespaces/default/pods/%2A/fs_read?labelSelector=app%3Dhello-world: (12.431262ms) 200 [","[kube-controller-manager/v1.10.1 (linux/amd64) kubernetes/d4ab475/system:serviceaccount:kube-system:horizontal-pod-autoscaler]",' 10.42.0.0:24268]\nI0724 10:18:51.727845       1 request.go:836] Request Body: {"kind":"SubjectAccessReview","apiVersion":"authorization.k8s.io/v1beta1","metadata":{"creationTimestamp":null},"spec":{"nonResourceAttributes":{"path":"/","verb":"get"},"user":"system:anonymous","group":','["system:unauthenticated"]','},"status":{"allowed":false}}\n...')))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u4ece kubectl \u8bbf\u95ee metrics API\u3002")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u76f4\u63a5\u8bbf\u95ee\u96c6\u7fa4\uff0c\u8bf7\u5728 kubectl \u914d\u7f6e\u4e2d\u8f93\u5165\u4f60\u7684\u670d\u52a1\u5668 URL\uff0c\u683c\u5f0f\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"https://<Kubernetes_URL>:6443"),"\uff1a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1\n")),(0,s.kt)("p",{parentName:"li"},"\u5982\u679c API \u53ef\u8bbf\u95ee\uff0c\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u5185\u5bb9\u7684\u8f93\u51fa\uff1a"),(0,s.kt)("details",{id:"custom-metrics-api-response"},(0,s.kt)("summary",null,"API \u54cd\u5e94"),(0,s.kt)("p",{parentName:"li"},'{"kind":"APIResourceList","apiVersion":"v1","groupVersion":"custom.metrics.k8s.io/v1beta1","resources":[{"name":"pods/fs_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_rss","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_period","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_throttled","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_time","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_read","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_sector_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_user","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/last_seen","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/tasks_state","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_quota","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/start_time_seconds","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_write","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_cache","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_throttled_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_working_set_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/network_udp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_inodes_free","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_inodes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_time_weighted","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_failures","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_swap","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_shares","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_swap_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_current","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_failcnt","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/network_tcp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_max_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_reservation_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_load_average_10s","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_system","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_sector_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]',"}]}"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u901a\u8fc7 Rancher \u8bbf\u95ee\u96c6\u7fa4\uff0c\u8bf7\u5728 kubectl \u914d\u7f6e\u4e2d\u8f93\u5165\u4f60\u7684\u670d\u52a1\u5668 URL\uff0c\u683c\u5f0f\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"https://<RANCHER_URL>/k8s/clusters/<CLUSTER_ID>"),"\u3002\u5c06 ",(0,s.kt)("inlineCode",{parentName:"p"},"/k8s/clusters/<CLUSTER_ID>")," \u540e\u7f00\u6dfb\u52a0\u5230 API \u8def\u5f84\uff1a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# kubectl get --raw /k8s/clusters/<CLUSTER_ID>/apis/custom.metrics.k8s.io/v1beta1\n")),(0,s.kt)("p",{parentName:"li"},"\u5982\u679c API \u53ef\u8bbf\u95ee\uff0c\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u5185\u5bb9\u7684\u8f93\u51fa\uff1a"),(0,s.kt)("details",{id:"custom-metrics-api-response-rancher"},(0,s.kt)("summary",null,"API \u54cd\u5e94"),(0,s.kt)("p",{parentName:"li"},'{"kind":"APIResourceList","apiVersion":"v1","groupVersion":"custom.metrics.k8s.io/v1beta1","resources":[{"name":"pods/fs_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_rss","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_period","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_throttled","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_time","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_read","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_sector_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_user","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/last_seen","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/tasks_state","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_quota","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/start_time_seconds","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_write","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_cache","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_throttled_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_working_set_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/network_udp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_inodes_free","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_inodes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_time_weighted","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_failures","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_swap","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_shares","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_swap_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_current","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_failcnt","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/network_tcp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_max_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_reservation_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_load_average_10s","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_system","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_sector_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]',"}]}")))))}c.isMDXComponent=!0}}]);