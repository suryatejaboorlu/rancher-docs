"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[67796],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,g=p["".concat(l,".").concat(d)]||p[d]||c[d]||s;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},46847:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],o={title:"Managing HPAs with kubectl",weight:3029,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-kubectl"]},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",title:"Managing HPAs with kubectl",description:"This section describes HPA management with kubectl. This document has instructions for how to:",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Managing HPAs with kubectl",weight:3029,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-kubectl"]},sidebar:"tutorialSidebar",previous:{title:"Managing HPAs with the Rancher UI",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"},next:{title:"Testing HPAs with kubectl",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl"}},m={},c=[{value:"Note For Rancher v2.3.x",id:"note-for-rancher-v23x",level:3},{value:"Note For Rancher Before v2.0.7",id:"note-for-rancher-before-v207",level:3},{value:"Basic kubectl Command for Managing HPAs",id:"basic-kubectl-command-for-managing-hpas",level:5},{value:"HPA Manifest Definition Example",id:"hpa-manifest-definition-example",level:5},{value:"Configuring HPA to Scale Using Resource Metrics (CPU and Memory)",id:"configuring-hpa-to-scale-using-resource-metrics-cpu-and-memory",level:5},{value:"Configuring HPA to Scale Using Custom Metrics with Prometheus",id:"configuring-hpa-to-scale-using-custom-metrics-with-prometheus",level:5}],p={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section describes HPA management with ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),". This document has instructions for how to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create an HPA"),(0,s.kt)("li",{parentName:"ul"},"Get information on HPAs"),(0,s.kt)("li",{parentName:"ul"},"Delete an HPA"),(0,s.kt)("li",{parentName:"ul"},"Configure your HPAs to scale with CPU or memory utilization"),(0,s.kt)("li",{parentName:"ul"},"Configure your HPAs to scale using custom metrics, if you use a third-party tool such as Prometheus for metrics")),(0,s.kt)("h3",{id:"note-for-rancher-v23x"},"Note For Rancher v2.3.x"),(0,s.kt)("p",null,"In Rancher v2.3.x, you can create, view, and delete HPAs from the Rancher UI. You can also configure them to scale based on CPU or memory usage from the Rancher UI. For more information, refer to ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"},"Managing HPAs with the Rancher UI"),". For scaling HPAs based on other metrics than CPU or memory, you still need ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,s.kt)("h3",{id:"note-for-rancher-before-v207"},"Note For Rancher Before v2.0.7"),(0,s.kt)("p",null,"Clusters created with older versions of Rancher don't automatically have all the requirements to create an HPA. To install an HPA on these clusters, refer to ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/hpa-for-rancher-before-2.0.7"},"Manual HPA Installation for Clusters Created Before Rancher v2.0.7"),"."),(0,s.kt)("h5",{id:"basic-kubectl-command-for-managing-hpas"},"Basic kubectl Command for Managing HPAs"),(0,s.kt)("p",null,"If you have an HPA manifest file, you can create, manage, and delete HPAs using ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Creating HPA"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"With manifest: ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl create -f <HPA_MANIFEST>"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Without manifest (Just support CPU): ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl autoscale deployment hello-world --min=2 --max=5 --cpu-percent=50"))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Getting HPA info"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Basic: ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl get hpa hello-world"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Detailed description: ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl describe hpa hello-world"))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Deleting HPA"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kubectl delete hpa hello-world"))))),(0,s.kt)("h5",{id:"hpa-manifest-definition-example"},"HPA Manifest Definition Example"),(0,s.kt)("p",null,"The HPA manifest is the config file used for managing an HPA with ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,s.kt)("p",null,"The following snippet demonstrates use of different directives in an HPA manifest. See the list below the sample to understand the purpose of each directive."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hello-world\nspec:\n  scaleTargetRef:\n    apiVersion: extensions/v1beta1\n    kind: Deployment\n    name: hello-world\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      targetAverageUtilization: 50\n  - type: Resource\n    resource:\n      name: memory\n      targetAverageValue: 100Mi\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Directive"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"apiVersion: autoscaling/v2beta1")),(0,s.kt)("td",{parentName:"tr",align:null},"The version of the Kubernetes ",(0,s.kt)("inlineCode",{parentName:"td"},"autoscaling")," API group in use. This example manifest uses the beta version, so scaling by CPU and memory is enabled.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"name: hello-world")),(0,s.kt)("td",{parentName:"tr",align:null},"Indicates that HPA is performing autoscaling for the ",(0,s.kt)("inlineCode",{parentName:"td"},"hello-word")," deployment.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"minReplicas: 1")),(0,s.kt)("td",{parentName:"tr",align:null},"Indicates that the minimum number of replicas running can't go below 1.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"maxReplicas: 10")),(0,s.kt)("td",{parentName:"tr",align:null},"Indicates the maximum number of replicas in the deployment can't go above 10.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"targetAverageUtilization: 50")),(0,s.kt)("td",{parentName:"tr",align:null},"Indicates the deployment will scale pods up when the average running pod uses more than 50% of its requested CPU.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"targetAverageValue: 100Mi")),(0,s.kt)("td",{parentName:"tr",align:null},"Indicates the deployment will scale pods up when the average running pod uses more that 100Mi of memory.")))),(0,s.kt)("br",null),(0,s.kt)("h5",{id:"configuring-hpa-to-scale-using-resource-metrics-cpu-and-memory"},"Configuring HPA to Scale Using Resource Metrics (CPU and Memory)"),(0,s.kt)("p",null,"Clusters created in Rancher v2.0.7 and higher have all the requirements needed (metrics-server and Kubernetes cluster configuration) to use Horizontal Pod Autoscaler. Run the following commands to check if metrics are available in your installation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'$ kubectl top nodes\nNAME                              CPU(cores)   CPU%      MEMORY(bytes)   MEMORY%\nnode-controlplane   196m         9%        1623Mi          42%\nnode-etcd           80m          4%        1090Mi          28%\nnode-worker         64m          3%        1146Mi          29%\n$ kubectl -n kube-system top pods\nNAME                                   CPU(cores)   MEMORY(bytes)\ncanal-pgldr                            18m          46Mi\ncanal-vhkgr                            20m          45Mi\ncanal-x5q5v                            17m          37Mi\ncanal-xknnz                            20m          37Mi\nkube-dns-7588d5b5f5-298j2              0m           22Mi\nkube-dns-autoscaler-5db9bbb766-t24hw   0m           5Mi\nmetrics-server-97bc649d5-jxrlt         0m           12Mi\n$ kubectl -n kube-system logs -l k8s-app=metrics-server\nI1002 12:55:32.172841       1 heapster.go:71] /metrics-server --source=kubernetes.summary_api:https://kubernetes.default.svc?kubeletHttps=true&kubeletPort=10250&useServiceAccount=true&insecure=true\nI1002 12:55:32.172994       1 heapster.go:72] Metrics Server version v0.2.1\nI1002 12:55:32.173378       1 configs.go:61] Using Kubernetes client with master "https://kubernetes.default.svc" and version\nI1002 12:55:32.173401       1 configs.go:62] Using kubelet port 10250\nI1002 12:55:32.173946       1 heapster.go:128] Starting with Metric Sink\nI1002 12:55:32.592703       1 serving.go:308] Generated self-signed cert (apiserver.local.config/certificates/apiserver.crt, apiserver.local.config/certificates/apiserver.key)\nI1002 12:55:32.925630       1 heapster.go:101] Starting Heapster API server...\n[restful] 2018/10/02 12:55:32 log.go:33: [restful/swagger] listing is available at https:///swaggerapi\n[restful] 2018/10/02 12:55:32 log.go:33: [restful/swagger] https:///swaggerui/ is mapped to folder /swagger-ui/\nI1002 12:55:32.928597       1 serve.go:85] Serving securely on 0.0.0.0:443\n')),(0,s.kt)("p",null,"If you have created your cluster in Rancher v2.0.6 or before, please refer to the manual installation."),(0,s.kt)("h5",{id:"configuring-hpa-to-scale-using-custom-metrics-with-prometheus"},"Configuring HPA to Scale Using Custom Metrics with Prometheus"),(0,s.kt)("p",null,"You can configure HPA to autoscale based on custom metrics provided by third-party software. The most common use case for autoscaling using third-party software is based on application-level metrics (i.e., HTTP requests per second). HPA uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"custom.metrics.k8s.io")," API to consume these metrics. This API is enabled by deploying a custom metrics adapter for the metrics collection solution."),(0,s.kt)("p",null,"For this example, we are going to use ",(0,s.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),". We are beginning with the following assumptions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Prometheus is deployed in the cluster."),(0,s.kt)("li",{parentName:"ul"},"Prometheus is configured correctly and collecting proper metrics from pods, nodes, namespaces, etc."),(0,s.kt)("li",{parentName:"ul"},"Prometheus is exposed at the following URL and port: ",(0,s.kt)("inlineCode",{parentName:"li"},"http://prometheus.mycompany.io:80"))),(0,s.kt)("p",null,"Prometheus is available for deployment in the Rancher v2.0 catalog. Deploy it from Rancher catalog if it isn't already running in your cluster."),(0,s.kt)("p",null,"For HPA to use custom metrics from Prometheus, package ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/DirectXMan12/k8s-prometheus-adapter"},"k8s-prometheus-adapter")," is required in the ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace of your cluster. To install ",(0,s.kt)("inlineCode",{parentName:"p"},"k8s-prometheus-adapter"),", we are using the Helm chart available at ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/banzaicloud/banzai-charts"},"banzai-charts"),"."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Initialize Helm in your cluster."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# kubectl -n kube-system create serviceaccount tiller\nkubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller\nhelm init --service-account tiller\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Clone the ",(0,s.kt)("inlineCode",{parentName:"p"},"banzai-charts")," repo from GitHub:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# git clone https://github.com/banzaicloud/banzai-charts\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Install the ",(0,s.kt)("inlineCode",{parentName:"p"},"prometheus-adapter")," chart, specifying the Prometheus URL and port number."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},'# helm install --name prometheus-adapter banzai-charts/prometheus-adapter --set prometheus.url="http://prometheus.mycompany.io",prometheus.port="80" --namespace kube-system\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Check that ",(0,s.kt)("inlineCode",{parentName:"p"},"prometheus-adapter")," is running properly. Check the service pod and logs in the ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Check that the service pod is ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),". Enter the following command."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# kubectl get pods -n kube-system\n")),(0,s.kt)("p",{parentName:"li"},"From the resulting output, look for a status of ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),"."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"NAME                                  READY     STATUS    RESTARTS   AGE\n...\nprometheus-adapter-prometheus-adapter-568674d97f-hbzfx   1/1       Running   0          7h\n...\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Check the service logs to make sure the service is running correctly by entering the command that follows."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# kubectl logs prometheus-adapter-prometheus-adapter-568674d97f-hbzfx -n kube-system\n")),(0,s.kt)("p",{parentName:"li"},"  Then review the log output to confirm the service is running."),(0,s.kt)("details",{id:"prometheus-logs"},(0,s.kt)("summary",null,"Prometheus Adaptor Logs"),(0,s.kt)("p",{parentName:"li"},"  ...\nI0724 10:18:45.696679       1 round_trippers.go:436] GET ",(0,s.kt)("a",{parentName:"p",href:"https://10.43.0.1:443/api/v1/namespaces/default/pods?labelSelector=app%3Dhello-world"},"https://10.43.0.1:443/api/v1/namespaces/default/pods?labelSelector=app%3Dhello-world"),' 200 OK in 2 milliseconds\nI0724 10:18:45.696695       1 round_trippers.go:442] Response Headers:\nI0724 10:18:45.696699       1 round_trippers.go:445]     Date: Tue, 24 Jul 2018 10:18:45 GMT\nI0724 10:18:45.696703       1 round_trippers.go:445]     Content-Type: application/json\nI0724 10:18:45.696706       1 round_trippers.go:445]     Content-Length: 2581\nI0724 10:18:45.696766       1 request.go:836] Response Body: {"kind":"PodList","apiVersion":"v1","metadata":{"selfLink":"/api/v1/namespaces/default/pods","resourceVersion":"6237"},"items":[{"metadata":{"name":"hello-world-54764dfbf8-q6l82","generateName":"hello-world-54764dfbf8-","namespace":"default","selfLink":"/api/v1/namespaces/default/pods/hello-world-54764dfbf8-q6l82","uid":"484cb929-8f29-11e8-99d2-067cac34e79c","resourceVersion":"4066","creationTimestamp":"2018-07-24T10:06:50Z","labels":{"app":"hello-world","pod-template-hash":"1032089694"},"annotations":{"cni.projectcalico.org/podIP":"10.42.0.7/32"},"ownerReferences":','[{"apiVersion":"extensions/v1beta1","kind":"ReplicaSet","name":"hello-world-54764dfbf8","uid":"4849b9b1-8f29-11e8-99d2-067cac34e79c","controller":true,"blockOwnerDeletion":true}]','},"spec":{"volumes":','[{"name":"default-token-ncvts","secret":{"secretName":"default-token-ncvts","defaultMode":420}}]',',"containers":[{"name":"hello-world","image":"rancher/hello-world","ports":','[{"containerPort":80,"protocol":"TCP"}]',',"resources":{"requests":{"cpu":"500m","memory":"64Mi"}},"volumeMounts":','[{"name":"default-token-ncvts","readOnly":true,"mountPath":"/var/run/secrets/kubernetes.io/serviceaccount"}]',',"terminationMessagePath":"/dev/termination-log","terminationMessagePolicy":"File","imagePullPolicy":"Always"}],"restartPolicy":"Always","terminationGracePeriodSeconds":30,"dnsPolicy":"ClusterFirst","serviceAccountName":"default","serviceAccount":"default","nodeName":"34.220.18.140","securityContext":{},"schedulerName":"default-scheduler","tolerations":','[{"key":"node.kubernetes.io/not-ready","operator":"Exists","effect":"NoExecute","tolerationSeconds":300},{"key":"node.kubernetes.io/unreachable","operator":"Exists","effect":"NoExecute","tolerationSeconds":300}]','},"status":{"phase":"Running","conditions":','[{"type":"Initialized","status":"True","lastProbeTime":null,"lastTransitionTime":"2018-07-24T10:06:50Z"},{"type":"Ready","status":"True","lastProbeTime":null,"lastTransitionTime":"2018-07-24T10:06:54Z"},{"type":"PodScheduled","status":"True","lastProbeTime":null,"lastTransitionTime":"2018-07-24T10:06:50Z"}]',',"hostIP":"34.220.18.140","podIP":"10.42.0.7","startTime":"2018-07-24T10:06:50Z","containerStatuses":','[{"name":"hello-world","state":{"running":{"startedAt":"2018-07-24T10:06:54Z"}},"lastState":{},"ready":true,"restartCount":0,"image":"rancher/hello-world:latest","imageID":"docker-pullable://rancher/hello-world@sha256:4b1559cb4b57ca36fa2b313a3c7dde774801aa3a2047930d94e11a45168bc053","containerID":"docker://cce4df5fc0408f03d4adf82c90de222f64c302bf7a04be1c82d584ec31530773"}]',',"qosClass":"Burstable"}}]}\nI0724 10:18:45.699525       1 api.go:74] GET ',(0,s.kt)("a",{parentName:"p",href:"http://prometheus-server.prometheus.34.220.18.140.sslip.io/api/v1/query?query=sum%28rate%28container_fs_read_seconds_total%7Bpod_name%3D%22hello-world-54764dfbf8-q6l82%22%2Ccontainer_name%21%3D%22POD%22%2Cnamespace%3D%22default%22%7D%5B5m%5D%29%29+by+%28pod_name%29&time=1532427525.697"},"http://prometheus-server.prometheus.34.220.18.140.sslip.io/api/v1/query?query=sum%28rate%28container_fs_read_seconds_total%7Bpod_name%3D%22hello-world-54764dfbf8-q6l82%22%2Ccontainer_name%21%3D%22POD%22%2Cnamespace%3D%22default%22%7D%5B5m%5D%29%29+by+%28pod_name%29&time=1532427525.697"),' 200 OK\nI0724 10:18:45.699620       1 api.go:93] Response Body: {"status":"success","data":{"resultType":"vector","result":[{"metric":{"pod_name":"hello-world-54764dfbf8-q6l82"},"value":','[1532427525.697,"0"]',"}]}}\nI0724 10:18:45.699939       1 wrap.go:42] GET /apis/custom.metrics.k8s.io/v1beta1/namespaces/default/pods/%2A/fs_read?labelSelector=app%3Dhello-world: (12.431262ms) 200 [","[kube-controller-manager/v1.10.1 (linux/amd64) kubernetes/d4ab475/system:serviceaccount:kube-system:horizontal-pod-autoscaler]",' 10.42.0.0:24268]\nI0724 10:18:51.727845       1 request.go:836] Request Body: {"kind":"SubjectAccessReview","apiVersion":"authorization.k8s.io/v1beta1","metadata":{"creationTimestamp":null},"spec":{"nonResourceAttributes":{"path":"/","verb":"get"},"user":"system:anonymous","group":','["system:unauthenticated"]','},"status":{"allowed":false}}\n...')))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Check that the metrics API is accessible from kubectl.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you are accessing the cluster directly, enter your Server URL in the kubectl config in the following format: ",(0,s.kt)("inlineCode",{parentName:"p"},"https://<Kubernetes_URL>:6443"),"."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1\n")),(0,s.kt)("p",{parentName:"li"},"  If the API is accessible, you should receive output that's similar to what follows."),(0,s.kt)("details",{id:"custom-metrics-api-response"},(0,s.kt)("summary",null,"API Response"),(0,s.kt)("p",{parentName:"li"},'  {"kind":"APIResourceList","apiVersion":"v1","groupVersion":"custom.metrics.k8s.io/v1beta1","resources":[{"name":"pods/fs_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_rss","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_period","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_throttled","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_time","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_read","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_sector_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_user","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/last_seen","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/tasks_state","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_quota","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/start_time_seconds","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_write","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_cache","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_throttled_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_working_set_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/network_udp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_inodes_free","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_inodes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_time_weighted","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_failures","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_swap","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_shares","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_swap_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_current","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_failcnt","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/network_tcp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_max_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_reservation_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_load_average_10s","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_system","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_sector_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]',"}]}"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you are accessing the cluster through Rancher, enter your Server URL in the kubectl config in the following format: ",(0,s.kt)("inlineCode",{parentName:"p"},"https://<RANCHER_URL>/k8s/clusters/<CLUSTER_ID>"),". Add the suffix ",(0,s.kt)("inlineCode",{parentName:"p"},"/k8s/clusters/<CLUSTER_ID>")," to API path."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# kubectl get --raw /k8s/clusters/<CLUSTER_ID>/apis/custom.metrics.k8s.io/v1beta1\n")),(0,s.kt)("p",{parentName:"li"},"  If the API is accessible, you should receive output that's similar to what follows."),(0,s.kt)("details",{id:"custom-metrics-api-response-rancher"},(0,s.kt)("summary",null,"API Response"),(0,s.kt)("p",{parentName:"li"},'  {"kind":"APIResourceList","apiVersion":"v1","groupVersion":"custom.metrics.k8s.io/v1beta1","resources":[{"name":"pods/fs_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_rss","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_period","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_throttled","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_time","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_read","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_sector_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_user","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/last_seen","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/tasks_state","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_quota","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/start_time_seconds","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_write","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_cache","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_cfs_throttled_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_working_set_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/network_udp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_inodes_free","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_inodes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_time_weighted","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_failures","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_swap","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_cpu_shares","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_swap_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_io_current","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_failcnt","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_writes_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/network_tcp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/memory_max_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/spec_memory_reservation_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_load_average_10s","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/cpu_system","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_reads_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]','},{"name":"pods/fs_sector_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":','["get"]',"}]}")))))}d.isMDXComponent=!0}}]);