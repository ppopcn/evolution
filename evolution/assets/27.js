(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1087:function(n,e,t){"use strict";t.r(e);var a=t(2080),s=t(1352);for(var o in s)"default"!==o&&function(n){t.d(e,n,function(){return s[n]})}(o);t(2212);var i=t(0),r=t(2210),l=t.n(r),u=Object(i.a)(s.default,a.a,a.b,!1,null,"e2b70fba",null);"function"==typeof l.a&&l()(u),e.default=u.exports},1350:function(n,e,t){var a=t(2211);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(5).default)("a45ef736",a,!0,{})},1351:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l(t(8)),s=l(t(7)),o=l(t(3)),i=t(13),r=t(20);function l(n){return n&&n.__esModule?n:{default:n}}e.default=(0,o.default)({},(0,i.preload)("GET_LOGIN_KEYS_CREATION_OPTIONS"),{data:function(){return{keyname:"",key:"",never_expires:!1,inputTest:["1","2","3"],expiry:{day:"",hour:"",minute:"",month:"",year:""},max_uses:"0",clear_key:!1,allow_htm:!1,allow:[],deny:[],ips:"",passwd:""}},computed:(0,o.default)({},(0,r.mapState)({options:function(n){return n.api.GET_LOGIN_KEYS_CREATION_OPTIONS.response}}),{requestData:function(){return{keyname:this.keyname,key:this.key,key2:this.key,never_expires:this.never_expires,hour:this.expiry.hour,minute:this.expiry.minute,day:this.expiry.day,month:(this.MONTH_LIST.indexOf(this.expiry.month)+1).toString(),year:this.expiry.year,max_uses:this.max_uses,clear_key:this.clear_key,allow_htm:this.allow_htm,select_allow:this.allow,select_deny:this.deny,ips:this.ips,passwd:this.passwd}}}),created:function(){this.MONTH_LIST=[this.$gettext("Jan"),this.$gettext("Feb"),this.$gettext("Mar"),this.$gettext("Apr"),this.$gettext("May"),this.$gettext("Jun"),this.$gettext("Jul"),this.$gettext("Aug"),this.$gettext("Sep"),this.$gettext("Oct"),this.$gettext("Nov"),this.$gettext("Dec")],this.allow=this.options.allow_table,this.deny=this.options.deny_table,this.expiry.day=this.options.expiry.day.selected,this.expiry.hour=this.options.expiry.hour.selected,this.expiry.minute=this.options.expiry.minute.selected,this.expiry.month=this.MONTH_LIST[parseInt(this.options.expiry.month.selected,10)-1],this.expiry.year=this.options.expiry.year.selected},methods:{randKey:function(){var n=["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz","0123456789","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"],e=Math.floor(10*Math.random())+5,t=Math.floor(20*Math.random())+5;return[e,t,64-(e+t)].map(function(e,t){return Array(e).fill(n[t])}).map(function(n){return n.map(function(n){return n[Math.floor(Math.random()*n.length)]})}).join(",").split(",").sort(function(){return.5-Math.random()}).join("")},setAllAllow:function(){this.allow.length===this.options.commands?this.allow=[]:(this.allow=this.options.commands,this.deny=[])},setAllDeny:function(){this.deny.length===this.options.commands?this.deny=[]:(this.deny=this.options.commands,this.allow=[])},createKey:function(){var n=this;return(0,s.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$actionRequest("CREATE_LOGIN_KEY",n.requestData);case 2:e.sent&&n.$router.back();case 4:case"end":return e.stop()}},e,n)}))()}}})},1352:function(n,e,t){"use strict";t.r(e);var a=t(1351),s=t.n(a);for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);e.default=s.a},2080:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("app-page",[t("app-page-section",[t("ui-form-element",[t("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Key Name:\n            ")]),n._v(" "),t("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],attrs:{slot:"content"},slot:"content"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.keyname,expression:"keyname"}],attrs:{type:"text"},domProps:{value:n.keyname},on:{input:function(e){e.target.composing||(n.keyname=e.target.value)}}}),n._v(" "),t("ui-tooltip",{directives:[{name:"margin",rawName:"v-margin",value:"1rem",expression:"'1rem'"}],attrs:{theme:"safe"}},[t("translate",[n._v("\n                        A label to manage the keys. This is not the login username. (a-zA-Z0-9)\n                    ")])],1)],1)],1),n._v(" "),t("ui-form-element",[t("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Key Value:\n            ")]),n._v(" "),t("input-password",{attrs:{slot:"content",externalGenerator:n.randKey,type:"text"},slot:"content",model:{value:n.key,callback:function(e){n.key=e},expression:"key"}})],1),n._v(" "),t("ui-form-element",[t("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Expires On:\n            ")]),n._v(" "),t("div",{directives:[{name:"gutter",rawName:"v-gutter",value:1,expression:"1"},{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],attrs:{slot:"content"},slot:"content"},[t("input-checkbox",{model:{value:n.never_expires,callback:function(e){n.never_expires=e},expression:"never_expires"}},[t("translate",[n._v("\n                        Never\n                    ")])],1),n._v(" "),t("input-usual-select",{attrs:{options:n.options.expiry.hour.options},model:{value:n.expiry.hour,callback:function(e){n.$set(n.expiry,"hour",e)},expression:"expiry.hour"}}),n._v(" "),t("span",[n._v(":")]),n._v(" "),t("input-usual-select",{attrs:{options:n.options.expiry.minute.options},model:{value:n.expiry.minute,callback:function(e){n.$set(n.expiry,"minute",e)},expression:"expiry.minute"}}),n._v("\n                     \n                "),t("input-usual-select",{attrs:{options:n.options.expiry.day.options},model:{value:n.expiry.day,callback:function(e){n.$set(n.expiry,"day",e)},expression:"expiry.day"}}),n._v(" "),t("span",[n._v("/")]),n._v(" "),t("input-usual-select",{attrs:{options:n.MONTH_LIST},model:{value:n.expiry.month,callback:function(e){n.$set(n.expiry,"month",e)},expression:"expiry.month"}}),n._v(" "),t("span",[n._v("/")]),n._v(" "),t("input-usual-select",{attrs:{options:n.options.expiry.year.options},model:{value:n.expiry.year,callback:function(e){n.$set(n.expiry,"year",e)},expression:"expiry.year"}})],1)],1),n._v(" "),t("ui-form-element",[t("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Uses:\n            ")]),n._v(" "),t("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],attrs:{slot:"content"},slot:"content"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.max_uses,expression:"max_uses"}],attrs:{type:"text"},domProps:{value:n.max_uses},on:{input:function(e){e.target.composing||(n.max_uses=e.target.value)}}}),n._v(" "),t("ui-tooltip",{directives:[{name:"margin",rawName:"v-margin",value:"1rem",expression:"'1rem'"}],attrs:{theme:"safe"}},[t("translate",[n._v("\n                        Number of requests allowed with this key. 0=Unlimited\n                    ")])],1)],1)],1),n._v(" "),t("ui-form-element",[t("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Clear Key:\n            ")]),n._v(" "),t("input-check",{attrs:{slot:"content"},slot:"content",model:{value:n.clear_key,callback:function(e){n.clear_key=e},expression:"clear_key"}},[t("translate",[n._v("\n                    Automatically delete the key once the key expires, or all uses are used.\n                ")])],1)],1),n._v(" "),t("ui-form-element",[t("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Allow HTM:\n            ")]),n._v(" "),t("input-check",{attrs:{slot:"content"},slot:"content",model:{value:n.allow_htm,callback:function(e){n.allow_htm=e},expression:"allow_htm"}},[t("translate",[n._v("\n                    Allows browsing of the DA interface to HTM, IMG and CSS files.\n                ")])],1)],1),n._v(" "),t("ui-form-element",[t("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Commands:\n            ")]),n._v(" "),t("div",{staticClass:"scrollable-area",attrs:{slot:"content"},slot:"content"},[t("table",{staticClass:"table-elem"},[t("thead",[t("th",[t("input-checkbox",{attrs:{model:n.options.commands.length===n.allow.length},on:{change:n.setAllAllow}},[t("translate",{attrs:{tag:"strong"}},[n._v("Allow")])],1)],1),n._v(" "),t("th",[t("input-checkbox",{attrs:{model:n.options.commands.length===n.deny.length},on:{change:n.setAllDeny}},[t("translate",{attrs:{tag:"strong"}},[n._v("Deny")])],1)],1)]),n._v(" "),t("tbody",n._l(n.options.commands,function(e){return t("tr",{staticClass:"table-row"},[t("td",[t("input-checkbox",{attrs:{value:e,label:e,disabled:n.deny.includes(e)},model:{value:n.allow,callback:function(e){n.allow=e},expression:"allow"}})],1),n._v(" "),t("td",[t("input-checkbox",{attrs:{value:e,label:e,disabled:n.allow.includes(e)},model:{value:n.deny,callback:function(e){n.deny=e},expression:"deny"}})],1)])}))])])],1),n._v(" "),t("ui-form-element",[t("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Allowed IPs:\n            ")]),n._v(" "),t("p",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{slot:"tooltip"},slot:"tooltip"},[n._v("\n                One IP per line. "),t("br"),n._v("\n                Ranges allowed: 1.2.3.4-5 "),t("br"),n._v("\n                Leave blank to allow any IP.\n            ")]),n._v(" "),t("input-textarea",{attrs:{slot:"content"},slot:"content",model:{value:n.ips,callback:function(e){n.ips=e},expression:"ips"}})],1),n._v(" "),t("ui-form-element",{attrs:{group:"createKey",validators:{required:!0}}},[t("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Current Password:\n            ")]),n._v(" "),t("input-password",{attrs:{slot:"content"},slot:"content",model:{value:n.passwd,callback:function(e){n.passwd=e},expression:"passwd"}})],1)],1),n._v(" "),t("ui-button",{attrs:{slot:"footer:buttons",theme:"safe",validateGroup:"createKey"},on:{click:n.createKey},slot:"footer:buttons"},[t("translate",[n._v("Create")])],1),n._v(" "),t("template",{slot:"footer:text"},[t("p",[t("translate",[n._v("If no commands are checked (allow and deny), all commands are allowed.")]),t("br"),n._v(" "),t("translate",[n._v("The priorities for allow and deny are ")]),n._v(" "),t("a",{attrs:{href:"http://www.directadmin.com/features.php?id=1171"}},[n._v("listed here.")]),t("br"),n._v(" "),t("translate",[n._v("The ALL_USER type commands are replaced with all commands the User is allowed, at that level.")])],1),n._v(" "),t("p",[n._v("\n            Please Note that if a key is allowed to access ALL_USER, CMD_LOGIN_KEYS, or CMD_API_LOGIN_KEYS, that key will have sufficient privileges to create another key of higher privilege.\n            "),t("br"),n._v("\n            Please keep this is mind when chosing a key's privileges.\n        ")])])],2)},s=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return s})},2210:function(n,e){},2211:function(n,e,t){(n.exports=t(6)(!0)).push([n.i,"textarea[data-v-e2b70fba]{max-height:unset!important;min-height:10rem;width:80%}.scrollable-area[data-v-e2b70fba]{width:100%;max-height:300px;overflow-y:auto}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/user/login-keys/create.vue"],names:[],mappings:"AA8TA,0BACI,2BACA,iBACA,SAAU,CACb,kCAEG,WACA,iBACA,eAAgB,CACnB",file:"create.vue?vue&type=style&index=0&id=e2b70fba&lang=scss&scoped=true",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ntextarea {\n    max-height: unset !important;\n    min-height: 10rem;\n    width: 80%;\n}\n.scrollable-area {\n    width: 100%;\n    max-height: 300px;\n    overflow-y: auto;\n}\n"],sourceRoot:""}])},2212:function(n,e,t){"use strict";var a=t(1350);t.n(a).a}}]);