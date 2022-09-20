"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[53044],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36418:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"RKE1 \u793a\u4f8b YAML",weight:60},c=void 0,s={unversionedId:"reference-guides/rke1-template-example-yaml",id:"reference-guides/rke1-template-example-yaml",title:"RKE1 \u793a\u4f8b YAML",description:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f9b\u53c2\u8003\u7684 RKE \u6a21\u677f\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/rke1-template-example-yaml.md",sourceDirName:"reference-guides",slug:"/reference-guides/rke1-template-example-yaml",permalink:"/zh/reference-guides/rke1-template-example-yaml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rke1-template-example-yaml.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"RKE1 \u793a\u4f8b YAML",weight:60},sidebar:"tutorialSidebar",previous:{title:"\u7cfb\u7edf\u5de5\u5177",permalink:"/zh/reference-guides/system-tools"},next:{title:"\u6d41\u6c34\u7ebf",permalink:"/zh/pages-for-subheaders/pipelines"}},u={},p=[],f={toc:p};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f9b\u53c2\u8003\u7684 RKE \u6a21\u677f\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\u3002"),(0,a.kt)("p",null,"RKE \u6a21\u677f\u4e2d\u7684 YAML \u4f7f\u7528\u4e0e\u521b\u5efa RKE \u96c6\u7fa4\u65f6\u76f8\u540c\u7684\u81ea\u5b9a\u4e49\u9879\u3002\u4f46\u662f\uff0c\u7531\u4e8e YAML \u4f4d\u4e8e Rancher \u914d\u7f6e\u7684 RKE \u96c6\u7fa4\u7684\u4e0a\u4e0b\u6587\u4e2d\uff0c\u56e0\u6b64 RKE \u6587\u6863\u4e2d\u7684\u81ea\u5b9a\u4e49\u9879\u9700\u8981\u5d4c\u5957\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine")," \u6307\u4ee4\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# Cluster Config\n#\ndocker_root_dir: /var/lib/docker\n\nenable_cluster_alerting: false\n# This setting is not enforced. Clusters\n# created with this sample template\n# would have alerting turned off by default,\n# but end users could still turn alerting\n# on or off.\n\nenable_cluster_monitoring: true\n# This setting is not enforced. Clusters\n# created with this sample template\n# would have monitoring turned on\n# by default, but end users could still\n# turn monitoring on or off.\n\nenable_network_policy: false\nlocal_cluster_auth_endpoint:\n  enabled: true\n#\n# Rancher Config\n#\nrancher_kubernetes_engine_config: # Your RKE template config goes here.\n  addon_job_timeout: 30\n  authentication:\n    strategy: x509\n  ignore_docker_version: true\n#\n# # \u76ee\u524d\u4ec5\u652f\u6301 Nginx Ingress \u63d0\u4f9b\u5546\u3002\n# # \u8981\u7981\u7528 Ingress controller\uff0c\u8bbe\u7f6e `provider: none`\n# # \u8981\u5728\u6307\u5b9a\u8282\u70b9\u4e0a\u7981\u7528 Ingress\uff0c\u4f7f\u7528 node_selector\uff0c\u4f8b\u5982\uff1a\n#    provider: nginx\n#    node_selector:\n#      app: ingress\n#\n  ingress:\n    provider: nginx\n  kubernetes_version: v1.15.3-rancher3-1\n  monitoring:\n    provider: metrics-server\n#\n#   If you are using calico on AWS\n#\n#    network:\n#      plugin: calico\n#      calico_network_provider:\n#        cloud_provider: aws\n#\n# # To specify flannel interface\n#\n#    network:\n#      plugin: flannel\n#      flannel_network_provider:\n#      iface: eth1\n#\n# # To specify flannel interface for canal plugin\n#\n#    network:\n#      plugin: canal\n#      canal_network_provider:\n#        iface: eth1\n#\n  network:\n    options:\n      flannel_backend_type: vxlan\n    plugin: canal\n#\n#    services:\n#      kube-api:\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kube-controller:\n#        cluster_cidr: 10.42.0.0/16\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kubelet:\n#        cluster_domain: cluster.local\n#        cluster_dns_server: 10.43.0.10\n#\n  services:\n    etcd:\n      backup_config:\n        enabled: true\n        interval_hours: 12\n        retention: 6\n        safe_timestamp: false\n      creation: 12h\n      extra_args:\n        election-timeout: 5000\n        heartbeat-interval: 500\n      gid: 0\n      retention: 72h\n      snapshot: false\n      uid: 0\n    kube_api:\n      always_pull_images: false\n      pod_security_policy: false\n      service_node_port_range: 30000-32767\n  ssh_agent_auth: false\nwindows_prefered_cluster: false\n")))}d.isMDXComponent=!0}}]);