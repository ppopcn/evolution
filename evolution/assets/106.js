(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1166:function(e,t,s){"use strict";s.r(t);var n=s(2104),a=s(1734);for(var r in a)"default"!==r&&function(e){s.d(t,e,function(){return a[e]})}(r);var i=s(0),l=s(2489),o=s.n(l),u=Object(i.a)(a.default,n.a,n.b,!1,null,null,null);"function"==typeof o.a&&o()(u),t.default=u.exports},1214:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{priority:"20",subject:"",message:"",emailOnly:!1}},props:{users:{type:Array,required:!1}},computed:{priorityOptions:function(){return{10:this.$gettext("Low"),20:this.$gettext("Middle"),30:this.$gettext("High")}}},methods:{sendMessage:function(){this.$actionRequest("SEND_MESSAGE_TO_MULTIPLE_USERS",{users:this.users,priority:this.priority.value,subject:this.subject,message:this.message,emailOnly:this.emailOnly})}}}},1215:function(e,t,s){"use strict";s.r(t);var n=s(1214),a=s.n(n);for(var r in n)"default"!==r&&function(e){s.d(t,e,function(){return n[e]})}(r);t.default=a.a},1225:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ui-dialog",{attrs:{id:"CREATE_MESSAGE_DIALOG",size:"normal"},on:{"dialog:close":e.$reset}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Send a Message")]),e._v(" "),s("template",{slot:"content"},[s("ui-form-element",[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("To:")]),e._v(" "),s("div",{attrs:{slot:"content"},slot:"content"},[s("ui-grid",{attrs:{wrap:""}},e._l(e.users,function(t){return s("ui-badge",{key:t,attrs:{theme:"neutral",size:"big",icon:"person"}},[e._v("\n                        "+e._s(t)+"\n                    ")])}))],1)],1),e._v(" "),s("ui-form-element",{attrs:{group:"message",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Priority:")]),e._v(" "),s("input-usual-select",{attrs:{slot:"content",options:e.priorityOptions},slot:"content",model:{value:e.priority,callback:function(t){e.priority=t},expression:"priority"}})],1),e._v(" "),s("ui-form-element",{attrs:{group:"message",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Subject:")]),e._v(" "),s("input-text",{attrs:{slot:"content"},slot:"content",model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}})],1),e._v(" "),s("ui-form-element",{attrs:{group:"message",validators:{required:!0}}},[s("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Message:")]),e._v(" "),s("input-textarea",{attrs:{slot:"content",rows:"10"},slot:"content",model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),e._v(" "),s("ui-form-element",[s("span",{attrs:{slot:"title"},slot:"title"}),e._v(" "),s("input-check",{attrs:{slot:"content"},slot:"content",model:{value:e.emailOnly,callback:function(t){e.emailOnly=t},expression:"emailOnly"}},[s("translate",[e._v("E-mail Only")])],1)],1)],1),e._v(" "),s("ui-button",{attrs:{slot:"buttons",theme:"primary",validateGroup:"message"},on:{click:e.sendMessage},slot:"buttons"},[e._v("\n        Send Message\n    ")])],2)},a=[];s.d(t,"a",function(){return n}),s.d(t,"b",function(){return a})},1243:function(e,t,s){"use strict";s.r(t);var n=s(1225),a=s(1215);for(var r in a)"default"!==r&&function(e){s.d(t,e,function(){return a[e]})}(r);var i=s(0),l=Object(i.a)(a.default,n.a,n.b,!1,null,null,null);t.default=l.exports},1733:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(s(3)),a=s(13),r=i(s(1243));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)({},(0,a.preload)("GET_RESELLERS"),{components:{CreateMessageDialog:r.default},data:function(){return{select:[]}},methods:{getUsageProgress:function(e){var t=100*e.usage/e.limit,s="primary";return t>40&&(s="safe"),t>80&&(s="danger"),{size:"normal",theme:s,value:t}},deleteResellers:function(){this.$actionRequest("DELETE_USERS",{select:this.select,location:"CMD_RESELLER_SHOW"})},suspendResellers:function(){this.$actionRequest("SUSPEND_USERS",{select:this.select,reason:"Other",location:"CMD_RESELLER_SHOW"})},unsuspendResellers:function(){this.$actionRequest("UNSUSPEND_USERS",{select:this.select,location:"CMD_RESELLER_SHOW"})}}})},1734:function(e,t,s){"use strict";s.r(t);var n=s(1733),a=s.n(n);for(var r in n)"default"!==r&&function(e){s.d(t,e,function(){return n[e]})}(r);t.default=a.a},2104:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("app-page",[s("ui-button-link",{attrs:{slot:"header:buttons",theme:"primary",name:"admin/users/resellers/create"},slot:"header:buttons"},[s("translate",[e._v("Create Reseller")])],1),e._v(" "),s("app-page-section",[s("ui-api-table",e._b({on:{"action:message":function(t){e.$dialog("CREATE_MESSAGE_DIALOG").open()},"action:suspend":e.suspendResellers,"action:unsuspend":e.unsuspendResellers,"action:remove":function(t){e.$dialog("DELETE_ITEMS_DIALOG").open()}},scopedSlots:e._u([{key:"col:username",fn:function(t){var n=t.username,a=t.suspended;return[s("ui-link",{attrs:{name:"admin/users/resellers/view",params:{user:n}}},[e._v("\n                    "+e._s(n)+"\n                ")]),e._v(" "),a?s("ui-badge",{attrs:{theme:"danger",label:e.$gettext("Suspended")}}):e._e()]}},{key:"col:bandwidth",fn:function(t){var n=t.bandwidth;return[n.limit!==1/0?s("ui-progress",e._b({directives:[{name:"margin",rawName:"v-margin",value:[.5,null],expression:"[.5, null]"}]},"ui-progress",e.getUsageProgress(n),!1)):e._e(),e._v("\n                "+e._s(e._f("humanReadableSize")(n.usage))+"\n                /\n                "),n.limit!==1/0?[e._v("\n                    "+e._s(e._f("humanReadableSize")(n.limit))+"\n                ")]:[e._v("∞")]]}},{key:"col:quota",fn:function(t){var n=t.quota;return[n.limit!==1/0?s("ui-progress",e._b({directives:[{name:"margin",rawName:"v-margin",value:[.5,null],expression:"[.5, null]"}]},"ui-progress",e.getUsageProgress(n),!1)):e._e(),e._v("\n                "+e._s(e._f("humanReadableSize")(n.usage))+"\n                /\n                "),n.limit!==1/0?[e._v("\n                    "+e._s(e._f("humanReadableSize")(n.limit))+"\n                ")]:[e._v("∞")]]}},{key:"col:vdomains",fn:function(t){var s=t.vdomains;return[e._v("\n                "+e._s(s.usage)+"\n                /\n                "),s.limit!==1/0?[e._v("\n                    "+e._s(s.limit)+"\n                ")]:[e._v("∞")]]}}]),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},"ui-api-table",{endpoint:"GET_RESELLERS",rowID:"username",columns:{username:e.$gettext("Name"),bandwidth:{label:e.$gettext("Bandwidth"),width:"20%"},quota:{label:e.$gettext("Disk Usage"),width:"20%"},nusers:e.$gettext("# of Users"),vdomains:e.$gettext("# of domains")},actions:{message:e.$gettext("Send a Message"),suspend:e.$gettext("Suspend"),unsuspend:e.$gettext("Unsuspend"),remove:e.$gettext("Delete")},updateOn:["SUSPEND_USERS","UNSUSPEND_USERS","DELETE_USERS"]},!1))],1),e._v(" "),s("create-message-dialog",{attrs:{users:e.select}}),e._v(" "),s("ui-dialog-delete-items",{attrs:{subject:e.$ngettext("reseller","resellers",e.select.length)},on:{"click:confirm":e.deleteResellers}})],1)},a=[];s.d(t,"a",function(){return n}),s.d(t,"b",function(){return a})},2489:function(e,t){}}]);