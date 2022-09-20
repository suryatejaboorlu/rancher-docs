"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69698],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89672:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"1. \u5728 Microsoft AD FS \u4e2d\u914d\u7f6e Rancher",weight:1205},p=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher",title:"1. \u5728 Microsoft AD FS \u4e2d\u914d\u7f6e Rancher",description:"\u5728\u914d\u7f6e Rancher \u4ee5\u652f\u6301 AD FS \u7528\u6237\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5728 AD FS \u4e2d\u5c06 Rancher \u6dfb\u52a0\u4e3a relying party trust\uff08\u4fe1\u8d56\u65b9\u4fe1\u4efb\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"1. \u5728 Microsoft AD FS \u4e2d\u914d\u7f6e Rancher",weight:1205},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e Microsoft AD FS (SAML)",permalink:"/zh/pages-for-subheaders/configure-microsoft-ad-federation-service-saml"},next:{title:"2. \u5728 Rancher \u4e2d\u914d\u7f6e Microsoft AD FS",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"}},l={},d=[{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:3}],m={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u914d\u7f6e Rancher \u4ee5\u652f\u6301 AD FS \u7528\u6237\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5728 AD FS \u4e2d\u5c06 Rancher \u6dfb\u52a0\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/technical-reference/understanding-key-ad-fs-concepts"},"relying party trust"),"\uff08\u4fe1\u8d56\u65b9\u4fe1\u4efb\uff09\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4ee5\u7ba1\u7406\u7528\u6237\u8eab\u4efd\u767b\u5f55 AD \u670d\u52a1\u5668\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,i.kt)("strong",{parentName:"p"},"AD FS Management")," \u63a7\u5236\u53f0\u3002\u5728 ",(0,i.kt)("strong",{parentName:"p"},"Actions")," \u83dc\u5355\u4e2d\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"Add Relying Party Trust..."),"\u3002\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Start"),"\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(86963).Z,width:"1802",height:"1292"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"Enter data about the relying party manually")," \u4f5c\u4e3a\u83b7\u53d6\u4fe1\u8d56\u65b9\u6570\u636e\u7684\u9009\u9879\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(26269).Z,width:"2280",height:"1840"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"Relying Party Trust")," \u8bbe\u7f6e",(0,i.kt)("strong",{parentName:"p"},"\u663e\u793a\u540d\u79f0"),"\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"Rancher"),"\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(64869).Z,width:"1460",height:"1178"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"AD FS profile")," \u4f5c\u4e3a\u4fe1\u8d56\u65b9\u4fe1\u4efb\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(96377).Z,width:"2210",height:"1782"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7559\u7a7a ",(0,i.kt)("strong",{parentName:"p"},"optional token encryption certificate"),"\uff0c\u56e0\u4e3a Rancher AD FS \u4e0d\u4f1a\u4f7f\u7528\u5b83\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(59624).Z,width:"1460",height:"1178"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"Enable support for the SAML 2.0 WebSSO protocol")," \u5e76\u5728 Service URL \u5904\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<rancher-server>/v1-saml/adfs/saml/acs"),"\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(77487).Z,width:"2362",height:"1904"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<rancher-server>/v1-saml/adfs/saml/metadata")," \u6dfb\u52a0\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"Relying party trust identifier"),"\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(16864).Z,width:"1460",height:"1178"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u672c\u6559\u7a0b\u4e0d\u6d89\u53ca\u591a\u91cd\u8eab\u4efd\u9a8c\u8bc1\u3002\u5982\u679c\u4f60\u60f3\u914d\u7f6e\u591a\u91cd\u8eab\u4efd\u9a8c\u8bc1\uff0c\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/configure-additional-authentication-methods-for-ad-fs"},"Microsoft \u6587\u6863"),"\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(51097).Z,width:"2300",height:"1856"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728 ",(0,i.kt)("strong",{parentName:"p"},"Choose Issuance Authorization RUles")," \u4e2d\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u7528\u4f8b\u9009\u62e9\u4efb\u4f55\u4e00\u4e2a\u53ef\u7528\u9009\u9879\u3002\u4f46\u662f\u8003\u8651\u5230\u672c\u6307\u5357\u7684\u76ee\u7684\uff0c\u8bf7\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"Permit all users to access this relying party"),"\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(40041).Z,width:"2248",height:"1812"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u68c0\u67e5\u6240\u6709\u8bbe\u7f6e\u540e\uff0c\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"Next")," \u6765\u6dfb\u52a0\u4fe1\u8d56\u65b9\u4fe1\u4efb\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(52737).Z,width:"2468",height:"1992"})))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"Open the Edit Claim Rules..."),"\u3002\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Close"),"\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(33765).Z,width:"2468",height:"1992"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728 ",(0,i.kt)("strong",{parentName:"p"},"Issuance Transform Rules")," \u9009\u9879\u5361\u4e2d\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Add Rule..."),"\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(36445).Z,width:"1822",height:"1992"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728 ",(0,i.kt)("strong",{parentName:"p"},"Claim rule template")," \u4e2d\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"Send LDAP Attributes as Claims"),"\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(14568).Z,width:"2476",height:"1994"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06 ",(0,i.kt)("strong",{parentName:"p"},"Claim rule name")," \u8bbe\u7f6e\u4e3a\u6240\u9700\u7684\u540d\u79f0\uff08\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"Rancher Attributes"),"\uff09\u5e76\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"Active Directory")," \u4f5c\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"Attribute store"),"\u3002\u521b\u5efa\u5bf9\u5e94\u4e0b\u8868\u7684\u6620\u5c04\uff1a"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"LDAP \u5c5e\u6027"),(0,i.kt)("th",{parentName:"tr",align:null},"\u4f20\u51fa\u58f0\u660e\u7c7b\u578b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Given-Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Given Name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User-Principal-Name"),(0,i.kt)("td",{parentName:"tr",align:null},"UPN")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Token-Groups - Qualified by Long Domain Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Group")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SAM-Account-Name"),(0,i.kt)("td",{parentName:"tr",align:null},"\u540d\u79f0")))),(0,i.kt)("br",null),"![](/img/adfs/adfs-add-tcr-2.png)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4ece AD \u670d\u52a1\u5668\u7684\u4ee5\u4e0b\u4f4d\u7f6e\u4e0b\u8f7d ",(0,i.kt)("inlineCode",{parentName:"p"},"federationmetadata.xml"),"\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://<AD_SERVER>/federationmetadata/2007-06/federationmetadata.xml\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u5df2\u5c06 Rancher \u6dfb\u52a0\u4e3a\u4f9d\u8d56\u4fe1\u4efb\u65b9\u3002\u73b0\u5728\u4f60\u53ef\u4ee5\u914d\u7f6e Rancher \u6765\u4f7f\u7528 AD\u3002"),(0,i.kt)("h3",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"},"\u5728 Rancher \u4e2d\u914d\u7f6e Microsoft AD FS ")))}u.isMDXComponent=!0},52737:function(e,t,a){t.Z=a.p+"assets/images/adfs-add-rpt-10-f251c1490ea83fd5e90a136c3ca9e78e.png"},33765:function(e,t,a){t.Z=a.p+"assets/images/adfs-add-rpt-11-0b255bafa725c47abf5419e666439363.png"},26269:function(e,t,a){t.Z=a.p+"assets/images/adfs-add-rpt-2-045a7174ea30f52b5b71232c1bd12ded.png"},64869:function(e,t,a){t.Z=a.p+"assets/images/adfs-add-rpt-3-b6de253a652c53824bb45613bb0292e7.png"},96377:function(e,t,a){t.Z=a.p+"assets/images/adfs-add-rpt-4-1a78ce3171a031373bc7d2eb587bd00b.png"},59624:function(e,t,a){t.Z=a.p+"assets/images/adfs-add-rpt-5-cab07c21d066acfd871d9accf055aa28.png"},77487:function(e,t,a){t.Z=a.p+"assets/images/adfs-add-rpt-6-443b7af8916d88aae16474ad41b38f29.png"},16864:function(e,t,a){t.Z=a.p+"assets/images/adfs-add-rpt-7-801b286a6dbbd3770afe29372eac4936.png"},51097:function(e,t,a){t.Z=a.p+"assets/images/adfs-add-rpt-8-e16f001259ce86d0ac0fe2cc49c3e130.png"},40041:function(e,t,a){t.Z=a.p+"assets/images/adfs-add-rpt-9-34b5197a336bc587bb1017cf991a171c.png"},14568:function(e,t,a){t.Z=a.p+"assets/images/adfs-add-tcr-1-519ff235b85fff9d7c768bbb96646fe1.png"},36445:function(e,t,a){t.Z=a.p+"assets/images/adfs-edit-cr-be1304c7e7760b7f34abd3967cf8eb21.png"},86963:function(e,t,a){t.Z=a.p+"assets/images/adfs-overview-c81642c79ea4a6a28efd8f2574f50cfd.png"}}]);