(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1176:function(t,e,n){"use strict";n.r(e);var s=n(2117),a=n(1760);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var l=n(0),r=n(2508),o=n.n(r),u=Object(l.a)(a.default,s.a,s.b,!1,null,null,null);"function"==typeof o.a&&o()(u),e.default=u.exports},1216:function(t,e,n){var s=n(1244);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(5).default)("f4b011f2",s,!0,{})},1217:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(n(10)),a=r(n(1)),i=r(n(3)),l=n(4);function r(t){return t&&t.__esModule?t:{default:t}}e.default={props:{package:{type:String,required:!1,default:"newpackage"}},data:function(){return{limits:[],features:[],customItems:[],dns:"OFF",serverip:!0,ips:"0",homeOverride:{value:"",options:{}}}},computed:{processedData:function(){return(0,i.default)({},l._.reduce(this.limits,function(t,e,n){var s;return(0,i.default)({},t,(s={},(0,a.default)(s,n,["bandwidth","quota"].includes(n)?String(e.value/Math.pow(2,20)):e.value),(0,a.default)(s,"u"+n,e.unlimited||null),s))},{}),l._.reduce(this.customItems,function(t,e){return(0,i.default)({},t,(0,a.default)({},e.name,!0===e.value?"ON":e.value))},{}),l._.mapValues(this.features,function(t){return t?"ON":"OFF"}),{serverip:this.serverip?"ON":null,dns:this.dns,ips:this.ips,create_user_home_override:this.canOverrideHome?this.homeOverride.value:null})},canOverrideHome:function(){return this.homeOverride&&!!(0,s.default)(this.homeOverride.options).length}},methods:{checkEmptyness:function(t){t.value||(t.unlimited=!0)}},watch:{processedData:function(t){this.$emit("update",t)}},created:function(){this.limitLabels={bandwidth:this.$gettext("Bandwidth"),quota:this.$gettext("Disk Space"),inode:this.$state.app.tokens.HAVE_INODE?this.$gettext("Inode"):void 0,vdomains:this.$gettext("Domains"),nsubdomains:this.$gettext("Sub-Domains"),nemails:this.$gettext("E-mail Accounts"),nemailf:this.$gettext("E-mail Forwarders"),nemailml:this.$gettext("Mailing Lists"),nemailr:this.$gettext("AutoResponders"),mysql:this.$gettext("MySQL Databases"),domainptr:this.$gettext("Domain Pointers"),ftp:this.$gettext("FTP Accounts")},this.featureLabels={aftp:this.$gettext("Anonymous FTP Accounts"),cgi:this.$gettext("CGI Access"),php:this.$gettext("PHP Access"),spam:this.$gettext("SpamAssassin"),catchall:this.$gettext("Catch-All E-mail"),ssl:this.$gettext("SSL Access"),ssh:this.$gettext("SSH Access"),userssh:this.$gettext("SSH Access for Users"),oversell:this.$gettext("Allow Overselling"),cron:this.$gettext("Cron Jobs"),sysinfo:this.$gettext("System Info"),login_keys:this.$gettext("Login Keys"),dnscontrol:this.$gettext("DNS Control")};var t=this.$state.api.GET_RESELLER_PACKAGE.response;this.limits=l._.cloneDeep(t.limits),this.features=l._.cloneDeep(t.features),this.customItems=l._.cloneDeep(t.customItems),this.ips=t.ips,this.homeOverride=l._.cloneDeep(t.homeOverride),null===this.package&&(this.limits.bandwidth.value*=Math.pow(2,20),this.limits.quota.value*=Math.pow(2,20))}}},1218:function(t,e,n){"use strict";n.r(e);var s=n(1217),a=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e.default=a.a},1226:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reseller-package"},[t._l(t.limitLabels,function(e,s){return e&&t.limits[s]?n("ui-form-element",{key:s},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e))]),t._v(" "),n(["bandwidth","quota"].includes(s)?"input-size":"input-text",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"}],tag:"component",attrs:{slot:"content",disabled:t.limits[s].unlimited,number:""},on:{blur:function(e){t.checkEmptyness(t.limits[s])}},slot:"content",model:{value:t.limits[s].value,callback:function(e){t.$set(t.limits[s],"value",e)},expression:"limits[key].value"}},[n("ui-button",{attrs:{slot:"additions:right",tabindex:"-1"},on:{click:function(e){t.limits[s].unlimited=!t.limits[s].unlimited}},slot:"additions:right"},[n("input-checkbox",{attrs:{label:t.$gettext("Unlimited")},model:{value:t.limits[s].unlimited,callback:function(e){t.$set(t.limits[s],"unlimited",e)},expression:"limits[key].unlimited"}})],1)],1)],1):t._e()}),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("IPs")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.ips,callback:function(e){t.ips=e},expression:"ips"}})],1),t._v(" "),t._l(t.featureLabels,function(e,s){return e&&void 0!==t.features[s]?n("ui-form-element",{key:s,class:{dimmed:!t.features[s]}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e))]),t._v(" "),n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.features[s],callback:function(e){t.$set(t.features,s,e)},expression:"features[key]"}})],1):t._e()}),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Personal DNS's")]),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}],attrs:{slot:"content"},slot:"content"},[n("input-check",{attrs:{type:"radio",value:"OFF"},model:{value:t.dns,callback:function(e){t.dns=e},expression:"dns"}},[n("translate",[t._v("None")])],1),t._v(" "),n("input-check",{attrs:{type:"radio",value:"TWO"},model:{value:t.dns,callback:function(e){t.dns=e},expression:"dns"}},[n("translate",[t._v("Uses 2 IP's, domain uses one of them")])],1),t._v(" "),n("input-check",{attrs:{type:"radio",value:"Three"},model:{value:t.dns,callback:function(e){t.dns=e},expression:"dns"}},[n("translate",[t._v("Uses 3 IP's, domain gets own IP")])],1)],1)],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Share Server IP")]),t._v(" "),n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.serverip,callback:function(e){t.serverip=e},expression:"serverip"}},[n("translate",[t._v("Allow Reseller to create sites with server IP")])],1)],1),t._v(" "),t.canOverrideHome?n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Home Directory")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("input-usual-select",{attrs:{options:t.homeOverride.options},model:{value:t.homeOverride.value,callback:function(e){t.$set(t.homeOverride,"value",e)},expression:"homeOverride.value"}})],1)],1):t._e(),t._v(" "),t._l(t.customItems,function(e){return n("ui-form-element",{key:e.name},[n("span",{attrs:{slot:"title"},domProps:{textContent:t._s(e.label)},slot:"title"}),t._v(" "),"checkbox"===e.type?n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"customItem.value"}},[t._v("\n            "+t._s(e.description)+"\n        ")]):n("text"===e.type?"input-text":"input-usual-select",{tag:"component",attrs:{slot:"content",options:"listbox"===e.type?e.options:[]},slot:"content",model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"customItem.value"}},[n("ui-button",{attrs:{slot:"additions:right"},slot:"additions:right"},[t._v("\n                "+t._s(e.description)+"\n            ")])],1)],1)})],2)},a=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a})},1244:function(t,e,n){(t.exports=n(6)(!0)).push([t.i,".reseller-package .select[data-v-0aab11b6],.reseller-package input[type=text][data-v-0aab11b6]{min-width:24rem}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/admin/reseller-packages/_components/reseller-package.vue"],names:[],mappings:"AAgOA,+FACkC,eAAgB,CAAI",file:"reseller-package.vue?vue&type=style&index=0&id=0aab11b6&lang=scss&scoped=true",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.reseller-package {\n    input[type="text"], .select { min-width: 24rem; }\n}\n'],sourceRoot:""}])},1245:function(t,e,n){"use strict";var s=n(1216);n.n(s).a},1246:function(t,e,n){"use strict";n.r(e);var s=n(1226),a=n(1218);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n(1245);var l=n(0),r=Object(l.a)(a.default,s.a,s.b,!1,null,"0aab11b6",null);e.default=r.exports},1759:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(n(8)),a=o(n(7)),i=o(n(3)),l=n(13),r=o(n(1246));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,i.default)({},(0,l.preload)({GET_RESELLER_PACKAGE:function(){return{package:null}},GET_RESELLER_PACKAGES:function(){return{}}}),{components:{ResellerPackage:r.default},data:function(){return{packageName:"",packageData:""}},computed:{requestData:function(){return(0,i.default)({packagename:this.packageName},this.packageData)},packages:function(){return this.$state.api.GET_RESELLER_PACKAGES.response.rows.map(function(t){return t.package})}},methods:{validateName:function(t){return!this.packages.includes(t)},createPackage:function(){var t=this;return(0,a.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$actionRequest("UPDATE_RESELLER_PACKAGE",t.requestData);case 2:e.sent&&t.$router.push({name:"admin/reseller-packages"});case 4:case"end":return e.stop()}},e,t)}))()}}})},1760:function(t,e,n){"use strict";n.r(e);var s=n(1759),a=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e.default=a.a},2117:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",[n("translate",{attrs:{slot:"page:title"},slot:"page:title"},[t._v("Create Reseller Package")]),t._v(" "),n("app-page-section",[n("reseller-package",{attrs:{package:null},on:{update:function(e){t.packageData=e}}}),t._v(" "),n("ui-form-element",{attrs:{group:"resellerPackage",validators:{required:!0,validateName:t.validateName}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Package Name")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.packageName,callback:function(e){t.packageName=e},expression:"packageName"}}),t._v(" "),n("translate",{attrs:{slot:"error:validateName"},slot:"error:validateName"},[t._v("Reseller package with such name exists already and will be overwritten.")])],1)],1),t._v(" "),n("ui-button",{attrs:{slot:"footer:buttons",theme:"safe",validateGroup:"resellerPackage"},on:{click:t.createPackage},slot:"footer:buttons"},[n("translate",[t._v("Create")])],1)],1)},a=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a})},2508:function(t,e){}}]);