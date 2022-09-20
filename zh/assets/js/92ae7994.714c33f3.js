"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[26243],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98327:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"1. \u914d\u7f6e\u57fa\u7840\u8bbe\u65bd",weight:100},s=void 0,u={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure",id:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure",title:"1. \u914d\u7f6e\u57fa\u7840\u8bbe\u65bd",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u4e3a Rancher Management Server \u914d\u7f6e\u5e95\u5c42\u57fa\u7840\u8bbe\u65bd\uff0c\u5e76\u4f7f\u5176\u901a\u8fc7 HTTP \u4ee3\u7406\u8bbf\u95ee\u4e92\u8054\u7f51\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"1. \u914d\u7f6e\u57fa\u7840\u8bbe\u65bd",weight:100},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 HTTP \u4ee3\u7406\u5b89\u88c5 Rancher",permalink:"/zh/pages-for-subheaders/rancher-behind-an-http-proxy"},next:{title:"2. \u5b89\u88c5 Kubernetes",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes"}},c={},p=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u4e09\u4e2a\u8282\u70b9\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u4e09\u4e2a\u8282\u70b9",level:3},{value:"1. \u914d\u7f6e Linux \u8282\u70b9",id:"1-\u914d\u7f6e-linux-\u8282\u70b9",level:3},{value:"2. \u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668",id:"2-\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668",level:3},{value:"3. \u914d\u7f6e DNS \u8bb0\u5f55",id:"3-\u914d\u7f6e-dns-\u8bb0\u5f55",level:3},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u4e3a Rancher Management Server \u914d\u7f6e\u5e95\u5c42\u57fa\u7840\u8bbe\u65bd\uff0c\u5e76\u4f7f\u5176\u901a\u8fc7 HTTP \u4ee3\u7406\u8bbf\u95ee\u4e92\u8054\u7f51\u3002"),(0,i.kt)("p",null,"\u5982\u9700\u5728\u9ad8\u53ef\u7528 RKE \u96c6\u7fa4\u4e2d\u5b89\u88c5 Rancher Management Server\uff0c\u6211\u4eec\u5efa\u8bae\u914d\u7f6e\u4ee5\u4e0b\u57fa\u7840\u8bbe\u65bd\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"3 \u4e2a Linux \u8282\u70b9"),"\uff1a\u53ef\u4ee5\u662f\u4f60\u7684\u4e91\u63d0\u4f9b\u5546\uff08\u4f8b\u5982 Amazon EC2\uff0cGCE \u6216 vSphere\uff09\u4e2d\u7684\u865a\u62df\u673a\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1 \u4e2a\u8d1f\u8f7d\u5747\u8861\u5668"),"\uff1a\u7528\u4e8e\u5c06\u524d\u7aef\u6d41\u91cf\u8f6c\u53d1\u5230\u8fd9\u4e09\u4e2a\u8282\u70b9\u4e2d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1 \u4e2a DNS \u8bb0\u5f55"),"\uff1a\u7528\u4e8e\u5c06 URL \u6620\u5c04\u5230\u8d1f\u8f7d\u5747\u8861\u5668\u3002\u6b64 DNS \u8bb0\u5f55\u5c06\u6210\u4e3a Rancher Server \u7684 URL\uff0c\u4e0b\u6e38\u96c6\u7fa4\u9700\u8981\u53ef\u4ee5\u8bbf\u95ee\u5230\u8fd9\u4e2a\u5730\u5740\u3002")),(0,i.kt)("p",null,"\u8fd9\u4e9b\u8282\u70b9\u5fc5\u987b\u4f4d\u4e8e\u540c\u4e00\u4e2a\u533a\u57df\u6216\u6570\u636e\u4e2d\u5fc3\u3002\u4f46\u662f\u4f60\u53ef\u4ee5\u628a\u8fd9\u4e9b\u670d\u52a1\u5668\u653e\u5728\u4e0d\u540c\u7684\u53ef\u7528\u533a\u3002"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u4e09\u4e2a\u8282\u70b9"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u4e09\u4e2a\u8282\u70b9\uff1f"),(0,i.kt)("p",null,"\u5728 RKE \u96c6\u7fa4\u4e2d\uff0cRancher Server \u7684\u6570\u636e\u5b58\u50a8\u5728 etcd \u4e2d\u3002\u800c\u8fd9\u4e2a etcd \u6570\u636e\u5e93\u5728\u8fd9\u4e09\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u9009\u4e3e\u51fa\u5927\u591a\u6570 etcd \u8282\u70b9\u8ba4\u53ef\u7684 etcd \u96c6\u7fa4 leader\uff0cetcd \u6570\u636e\u5e93\u9700\u8981\u5947\u6570\u4e2a\u8282\u70b9\u3002\u5982\u679c etcd \u6570\u636e\u5e93\u65e0\u6cd5\u9009\u51fa leader\uff0cetcd \u53ef\u80fd\u4f1a\u51fa\u73b0",(0,i.kt)("a",{parentName:"p",href:"https://www.quora.com/What-is-split-brain-in-distributed-systems"},"\u8111\u88c2\uff08split brain\uff09"),"\u7684\u95ee\u9898\uff0c\u6b64\u65f6\u4f60\u9700\u8981\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4\u3002\u5982\u679c\u4e09\u4e2a etcd \u8282\u70b9\u4e4b\u4e00\u53d1\u751f\u6545\u969c\uff0c\u5176\u4f59\u4e24\u4e2a\u8282\u70b9\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a leader\uff0c\u56e0\u4e3a\u5b83\u4eec\u662f etcd \u8282\u70b9\u603b\u6570\u7684\u5927\u591a\u6570\u90e8\u5206\u3002"),(0,i.kt)("h3",{id:"1-\u914d\u7f6e-linux-\u8282\u70b9"},"1. \u914d\u7f6e Linux \u8282\u70b9"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u4e3b\u673a\u5c06\u901a\u8fc7 HTTP \u4ee3\u7406\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u3002"),(0,i.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u7684\u8282\u70b9\u6ee1\u8db3",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u786c\u4ef6\u548c\u7f51\u7edc"),"\u7684\u5e38\u89c4\u8981\u6c42\u3002"),(0,i.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u914d\u7f6e Linux \u8282\u70b9\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"\u5728 Amazon EC2 \u4e2d\u914d\u7f6e\u8282\u70b9"),"\u7684\u6559\u7a0b\u3002"),(0,i.kt)("h3",{id:"2-\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668"},"2. \u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668"),(0,i.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u6765\u5c06\u6d41\u91cf\u91cd\u5b9a\u5411\u5230\u4e24\u4e2a\u8282\u70b9\u4e0a\u7684 Rancher \u526f\u672c\u3002\u914d\u7f6e\u540e\uff0c\u5f53\u5355\u4e2a\u8282\u70b9\u4e0d\u53ef\u7528\u65f6\uff0c\u7ee7\u7eed\u4fdd\u969c\u4e0e Rancher Management Server \u7684\u901a\u4fe1\u3002"),(0,i.kt)("p",null,"\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\u914d\u7f6e Kubernetes \u65f6\uff0cRKE \u5de5\u5177\u4f1a\u90e8\u7f72\u4e00\u4e2a NGINX Ingress Controller\u3002\u8be5 Controller \u5c06\u4fa6\u542c worker \u8282\u70b9\u7684 80 \u7aef\u53e3\u548c 443 \u7aef\u53e3\uff0c\u4ee5\u54cd\u5e94\u53d1\u9001\u7ed9\u7279\u5b9a\u4e3b\u673a\u540d\u7684\u6d41\u91cf\u3002"),(0,i.kt)("p",null,"\u5728\u5b89\u88c5 Rancher \u540e\uff08\u4e5f\u662f\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\uff09\uff0cRancher \u7cfb\u7edf\u5c06\u521b\u5efa\u4e00\u4e2a Ingress \u8d44\u6e90\u3002\u8be5 Ingress \u901a\u77e5 NGINX Ingress Controller \u76d1\u542c\u53d1\u5f80 Rancher \u4e3b\u673a\u540d\u7684\u6d41\u91cf\u3002NGINX Ingress Controller \u5728\u6536\u5230\u53d1\u5f80 Rancher \u4e3b\u673a\u540d\u7684\u6d41\u91cf\u65f6\uff0c\u4f1a\u5c06\u5176\u8f6c\u53d1\u5230\u96c6\u7fa4\u4e2d\u6b63\u5728\u8fd0\u884c\u7684 Rancher Server Pod\u3002"),(0,i.kt)("p",null,"\u5728\u4f60\u7684\u5b9e\u73b0\u4e2d\uff0c\u4f60\u53ef\u4ee5\u8003\u8651\u662f\u5426\u9700\u8981\u4f7f\u7528 4 \u5c42\u6216 7 \u5c42\u7684\u8d1f\u8f7d\u5747\u8861\u5668\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668"),"\uff1a\u4e24\u79cd\u9009\u62e9\u4e2d\u8f83\u4e3a\u7b80\u5355\u7684\u4e00\u79cd\uff0c\u5b83\u5c06 TCP \u6d41\u91cf\u8f6c\u53d1\u5230\u4f60\u7684\u8282\u70b9\u4e2d\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u5c06\u6d41\u91cf\u4ece TCP/80 \u7aef\u53e3\u548c TCP/443 \u7aef\u53e3\u8f6c\u53d1\u5230 Rancher Management \u96c6\u7fa4\u8282\u70b9\u4e0a\u3002\u96c6\u7fa4\u4e0a\u7684 Ingress Controller \u4f1a\u5c06 HTTP \u6d41\u91cf\u91cd\u5b9a\u5411\u5230 HTTPS\uff0c\u5e76\u5728 TCP/443 \u7aef\u53e3\u4e0a\u7ec8\u6b62 SSL/TLS\u3002Ingress Controller \u4f1a\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 Rancher deployment \u4e2d Ingress Pod \u7684 TCP/80 \u7aef\u53e3\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"7 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668"),"\uff1a\u76f8\u5bf9\u6bd4\u8f83\u590d\u6742\uff0c\u4f46\u529f\u80fd\u66f4\u5168\u9762\u3002\u4f8b\u5982\uff0c\u4e0e Rancher \u672c\u8eab\u8fdb\u884c TLS \u7ec8\u6b62\u76f8\u53cd\uff0c7 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u80fd\u591f\u5728\u8d1f\u8f7d\u5747\u8861\u5668\u5904\u5904\u7406 TLS \u7ec8\u6b62\u3002\u5982\u679c\u4f60\u9700\u8981\u96c6\u4e2d\u5728\u57fa\u7840\u8bbe\u65bd\u4e2d\u8fdb\u884c TLS \u7ec8\u6b62\uff0c7 \u5c42\u8d1f\u8f7d\u5747\u8861\u53ef\u80fd\u4f1a\u5f88\u9002\u5408\u4f60\u30027 \u5c42\u8d1f\u8f7d\u5747\u8861\u8fd8\u80fd\u8ba9\u4f60\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u57fa\u4e8e HTTP \u5c5e\u6027\uff08\u4f8b\u5982 cookie \u7b49\uff09\u505a\u51fa\u51b3\u7b56\uff0c\u800c 4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u5219\u4e0d\u80fd\u3002\u5982\u679c\u4f60\u9009\u62e9\u5728 7 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u7ec8\u6b62 SSL/TLS \u6d41\u91cf\uff0c\u5219\u5728\u5b89\u88c5 Rancher \u65f6\uff08\u540e\u7eed\u6b65\u9aa4\uff09\u9700\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"--set tls=external")," \u9009\u9879\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"/zh/reference-guides/installation-references/helm-chart-options#%E5%A4%96%E9%83%A8-tls-%E7%BB%88%E6%AD%A2"},"Rancher Helm Chart \u9009\u9879"),"\u3002")),(0,i.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u914d\u7f6e NGINX \u8d1f\u8f7d\u5747\u8861\u5668\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"\u672c\u9875"),"\u3002"),(0,i.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u5982\u4f55\u914d\u7f6e Amazon ELB \u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u6307\u5357\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"\u672c\u9875"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5b89\u88c5\u540e\uff0c\u8bf7\u52ff\u5c06\u6b64\u8d1f\u8f7d\u5747\u8861\uff08\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," \u96c6\u7fa4 Ingress\uff09\u7528\u4e8e Rancher \u4ee5\u5916\u7684\u5e94\u7528\u3002\u5982\u679c\u6b64 Ingress \u4e0e\u5176\u4ed6\u5e94\u7528\u5171\u4eab\uff0c\u5728\u5176\u4ed6\u5e94\u7528\u7684 Ingress \u914d\u7f6e\u91cd\u65b0\u52a0\u8f7d\u540e\uff0c\u53ef\u80fd\u5bfc\u81f4 Rancher \u51fa\u73b0 websocket \u9519\u8bef\u3002\u6211\u4eec\u5efa\u8bae\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," \u96c6\u7fa4\u4e13\u7528\u7ed9 Rancher\uff0c\u4e0d\u8981\u5728\u96c6\u7fa4\u5185\u90e8\u7f72\u5176\u4ed6\u5e94\u7528\u3002"))),(0,i.kt)("h3",{id:"3-\u914d\u7f6e-dns-\u8bb0\u5f55"},"3. \u914d\u7f6e DNS \u8bb0\u5f55"),(0,i.kt)("p",null,"\u914d\u7f6e\u5b8c\u8d1f\u8f7d\u5747\u8861\u5668\u540e\uff0c\u4f60\u5c06\u9700\u8981\u521b\u5efa DNS \u8bb0\u5f55\uff0c\u4ee5\u5c06\u6d41\u91cf\u53d1\u9001\u5230\u8be5\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,i.kt)("p",null,"\u6839\u636e\u4f60\u7684\u73af\u5883\uff0cDNS \u8bb0\u5f55\u53ef\u4ee5\u662f\u6307\u5411\u8d1f\u8f7d\u5747\u8861\u5668 IP \u7684 A \u8bb0\u5f55\uff0c\u4e5f\u53ef\u4ee5\u662f\u6307\u5411\u8d1f\u8f7d\u5747\u8861\u5668\u4e3b\u673a\u540d\u7684 CNAME\u3002\u65e0\u8bba\u662f\u54ea\u79cd\u60c5\u51b5\uff0c\u8bf7\u786e\u4fdd\u8be5\u8bb0\u5f55\u662f\u4f60\u8981 Rancher \u8fdb\u884c\u54cd\u5e94\u7684\u4e3b\u673a\u540d\u3002"),(0,i.kt)("p",null,"\u5728\u5b89\u88c5 Rancher \u65f6\uff08\u540e\u7eed\u6b65\u9aa4\uff09\uff0c\u4f60\u9700\u8981\u6307\u5b9a\u6b64\u4e3b\u673a\u540d\u3002\u8bf7\u77e5\u6089\uff0c\u6b64\u4e3b\u673a\u540d\u65e0\u6cd5\u4fee\u6539\u3002\u8bf7\u786e\u4fdd\u4f60\u8bbe\u7f6e\u7684\u4e3b\u673a\u540d\u662f\u4f60\u60f3\u8981\u7684\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u8bbe\u7f6e DNS \u8bb0\u5f55\u4ee5\u5c06\u57df\u6d41\u91cf\u8f6c\u53d1\u5230 Amazon ELB \u8d1f\u8f7d\u5747\u8861\u5668\u7684\u6307\u5357\uff0c\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"AWS \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,i.kt)("h3",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes"},"\u914d\u7f6e Kubernetes \u96c6\u7fa4")))}h.isMDXComponent=!0}}]);