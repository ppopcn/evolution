(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1111:function(n,t,e){"use strict";e.r(t);var r=e(2051),a=e(1454);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);var o=e(0),s=e(2281),l=e.n(s),u=Object(o.a)(a.default,r.a,r.b,!1,null,null,null);"function"==typeof l.a&&l()(u),t.default=u.exports},1447:function(n,t,e){var r=e(2282);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(5).default)("6af4e61c",r,!0,{})},1448:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(e(8)),a=i(e(7));function i(n){return n&&n.__esModule?n:{default:n}}t.default={props:{name:{type:String,required:!0},value:{type:Array,required:!0}},data:function(){return{emails:[""]}},methods:{loadEmails:function(){this.emails=this.value.map(this.$p6e.email2unicode)},modifyForwarder:function(){var n=this;return(0,a.default)(r.default.mark(function t(){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$actionRequest("MODIFY_EMAIL_FORWARDER",{user:n.name,email:n.emails.map(n.$p6e.email2ascii).join(",")},{reset:!0});case 2:n.$request("GET_EMAIL_FORWARDERS"),n.$emit("modified");case 4:case"end":return t.stop()}},t,n)}))()}}}},1449:function(n,t,e){"use strict";e.r(t);var r=e(1448),a=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);t.default=a.a},1450:function(n,t,e){var r=e(2285);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(5).default)("2536099c",r,!0,{})},1451:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(e(8)),a=i(e(7));function i(n){return n&&n.__esModule?n:{default:n}}t.default={data:function(){return{names:[""],emails:[""]}},methods:{createForwarders:function(){var n=this;return(0,a.default)(r.default.mark(function t(){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$actionRequest("CREATE_EMAIL_FORWARDERS",{user:n.names.join(","),email:n.emails.map(n.$p6e.email2ascii).join(",")},{reset:!0});case 2:n.$request("GET_EMAIL_FORWARDERS");case 3:case"end":return t.stop()}},t,n)}))()}}}},1452:function(n,t,e){"use strict";e.r(t);var r=e(1451),a=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);t.default=a.a},1453:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(e(15)),a=c(e(8)),i=c(e(7)),o=c(e(3)),s=e(13),l=c(e(2287)),u=c(e(2284));function c(n){return n&&n.__esModule?n:{default:n}}t.default=(0,o.default)({},(0,s.preload)("GET_EMAIL_FORWARDERS"),{components:{CreateForwardersDialog:l.default,ModifyForwarderDialog:u.default},data:function(){return{checkedRows:[],modify:{name:"",value:[]}}},computed:(0,o.default)({},(0,s.mapResponse)({GET_EMAIL_FORWARDERS:"rows"}),{checkedForwarders:function(){return this.checkedRows.map(function(n){return n.name})}}),watch:{$domain:function(){this.$request("GET_EMAIL_FORWARDERS")}},methods:{deleteForwarders:function(){var n=this;return(0,i.default)(a.default.mark(function t(){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$actionRequest("DELETE_EMAIL_FORWARDERS",{select:n.checkedForwarders});case 2:t.sent&&(n.checkedRows=[],n.$request("GET_EMAIL_FORWARDERS"));case 4:case"end":return t.stop()}},t,n)}))()},modifyForwarderDialog:function(n){var t=this;return(0,i.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.modify.name=n.name,t.modify.value=[].concat((0,r.default)(n.value)),t.$dialog("MODIFY_FORWARDER_DIALOG").open();case 3:case"end":return e.stop()}},e,t)}))()}}})},1454:function(n,t,e){"use strict";e.r(t);var r=e(1453),a=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);t.default=a.a},1931:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ui-dialog",{attrs:{id:"CREATE_FORWARDERS_DIALOG"}},[e("translate",{attrs:{slot:"title","translate-n":n.names.length,"translate-plural":"Create Forwarders"},slot:"title"},[n._v("\n        Create Forwarder\n    ")]),n._v(" "),e("template",{slot:"content"},[e("ui-form-element",{attrs:{vertical:""}},[e("translate",{attrs:{slot:"title","translate-n":n.names.length,"translate-plural":"Forwarders Names:"},slot:"title"},[n._v("\n                Forwarder Name:\n            ")]),n._v(" "),e("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}],attrs:{slot:"content"},slot:"content"},n._l(n.names,function(t,r){return e("ui-form-element",{directives:[{name:"margin",rawName:"v-margin",value:[1,0],expression:"[1, 0]"},{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true}"}],key:r,attrs:{vertical:"",group:"createForwarder",validators:{required:!0}}},[e("ui-input-group",{attrs:{slot:"content"},slot:"content"},[e("input-text",{attrs:{slot:"input"},slot:"input",model:{value:n.names[r],callback:function(t){n.$set(n.names,r,t)},expression:"names[index]"}}),n._v(" "),e("ui-button",{attrs:{slot:"additions:right",theme:"light",size:"normal",disabled:""},slot:"additions:right"},[n._v("\n                            @"+n._s(n.$domainUnicode)+"\n                        ")]),n._v(" "),e("ui-button",0!==r?{attrs:{slot:"additions:right",icon:"close",theme:"light",size:"normal"},on:{click:function(t){n.names.splice(r,1)}},slot:"additions:right"}:{attrs:{slot:"additions:right",icon:"plus-fill",theme:"light",size:"normal",title:n.$gettext("Add Forwarder Name")},on:{click:function(t){n.names.push("")}},slot:"additions:right"})],1)],1)}))],1),n._v(" "),e("ui-form-element",{attrs:{vertical:""}},[e("translate",{attrs:{slot:"title","translate-n":n.emails.length,"translate-plural":"Destination E-mails:"},slot:"title"},[n._v("\n                Destination E-mail:\n            ")]),n._v(" "),e("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}],attrs:{slot:"content"},slot:"content"},n._l(n.emails,function(t,r){return e("ui-form-element",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"},{name:"margin",rawName:"v-margin",value:[1,0],expression:"[1, 0]"}],key:r,attrs:{vertical:"",group:"createForwarder",validators:{required:!0,email:!0}}},[e("ui-input-group",{attrs:{slot:"content"},slot:"content"},[e("input-text",{attrs:{slot:"input"},slot:"input",model:{value:n.emails[r],callback:function(t){n.$set(n.emails,r,t)},expression:"emails[index]"}}),n._v(" "),e("ui-button",0!==r?{attrs:{slot:"additions:right",icon:"close",theme:"light",size:"normal"},on:{click:function(t){n.emails.splice(r,1)}},slot:"additions:right"}:{attrs:{slot:"additions:right",icon:"plus-fill",theme:"light",size:"normal",title:n.$gettext("Add Destination E-mail")},on:{click:function(t){n.emails.push("")}},slot:"additions:right"})],1),n._v(" "),e("translate",{attrs:{slot:"error:email"},slot:"error:email"},[n._v("Should be valid email address")])],1)}))],1)],1),n._v(" "),e("ui-button",{attrs:{slot:"buttons",theme:"primary",validateGroup:"createForwarder"},on:{click:n.createForwarders},slot:"buttons"},[n._v("\n        Create\n    ")])],2)},a=[];e.d(t,"a",function(){return r}),e.d(t,"b",function(){return a})},1933:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ui-dialog",{attrs:{id:"MODIFY_FORWARDER_DIALOG"},on:{"dialog:open":n.loadEmails}},[e("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n        Modify Forwarder\n    ")]),n._v(" "),e("template",{slot:"content"},[e("ui-form-element",{attrs:{vertical:""}},[e("translate",{attrs:{slot:"title"},slot:"title"},[n._v("\n                Forwarder Name:\n            ")]),n._v(" "),e("input-text",{attrs:{slot:"content",value:n.name+"@"+n.$domainUnicode,disabled:""},slot:"content"})],1),n._v(" "),e("ui-form-element",{attrs:{vertical:""}},[e("translate",{attrs:{slot:"title","translate-n":n.emails.length,"translate-plural":"Destination E-mails:"},slot:"title"},[n._v("\n                Destination E-mail:\n            ")]),n._v(" "),e("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}],attrs:{slot:"content"},slot:"content"},n._l(n.emails,function(t,r){return e("ui-form-element",{directives:[{name:"flex-item",rawName:"v-flex-item",value:{grow:!0},expression:"{ grow: true }"},{name:"margin",rawName:"v-margin",value:[1,0],expression:"[1, 0]"}],key:r,attrs:{vertical:"",group:"modifyForwarder",validators:{required:!0,email:!0}}},[e("ui-input-group",{attrs:{slot:"content"},slot:"content"},[e("input-text",{attrs:{slot:"input"},slot:"input",model:{value:n.emails[r],callback:function(t){n.$set(n.emails,r,t)},expression:"emails[index]"}}),n._v(" "),e("ui-button",0!==r?{attrs:{slot:"additions:right",icon:"close",theme:"light",size:"normal"},on:{click:function(t){n.emails.splice(r,1)}},slot:"additions:right"}:{attrs:{slot:"additions:right",icon:"plus-fill",theme:"light",size:"normal",title:n.$gettext("Add Destination E-mail")},on:{click:function(t){n.emails.push("")}},slot:"additions:right"})],1),n._v(" "),e("translate",{attrs:{slot:"error:email"},slot:"error:email"},[n._v("Should be valid email address")])],1)}))],1)],1),n._v(" "),e("ui-button",{attrs:{slot:"buttons",theme:"primary",validateGroup:"modifyForwarder"},on:{click:n.modifyForwarder},slot:"buttons"},[e("translate",[n._v("Modify")])],1)],2)},a=[];e.d(t,"a",function(){return r}),e.d(t,"b",function(){return a})},2051:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("app-page",[e("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:function(t){n.$dialog("CREATE_FORWARDERS_DIALOG").open()}},slot:"header:buttons"},[e("translate",[n._v("Create E-mail Forwarder")])],1),n._v(" "),e("app-page-section",[e("ui-table",n._b({attrs:{disablePagination:""},on:{"update:checkedRows":function(t){n.checkedRows=t}},scopedSlots:n._u([{key:"col:name",fn:function(t){var e=t.name;return[n._v("\n                "+n._s(e)+"@"+n._s(n.$domainUnicode)+"\n            ")]}},{key:"col:value",fn:function(t){var r=t.value;return n._l(r,function(t){return e("div",[n._v("\n                    "+n._s(n._f("p6e-unicode-email")(t))+"\n                ")])})}},{key:"col:actions",fn:function(t){var r=t.item;return[e("ui-button-icon",{attrs:{icon:"pencil",title:n.$gettext("Edit")},on:{click:function(t){n.modifyForwarderDialog(r)}}})]}}])},"ui-table",{rows:n.rows,checkedRows:n.checkedRows,columns:[{id:"name",label:n.$gettext("Forwarder")},{id:"value",label:n.$gettext("Value")},{id:"actions",label:"",width:"5%"}]},!1),[e("template",{slot:"table:actions"},[e("ui-table-action",{on:{click:function(t){n.$dialog("DELETE_ITEMS_DIALOG").open()}}},[e("translate",[n._v("Delete")])],1)],1)],2)],1),n._v(" "),e("create-forwarders-dialog"),n._v(" "),e("modify-forwarder-dialog",n._b({on:{modified:n.$reset}},"modify-forwarder-dialog",n.modify,!1)),n._v(" "),e("ui-dialog-delete-items",{attrs:{subject:n.$ngettext("forwarder","forwarders",n.checkedRows.length)},on:{"click:confirm":n.deleteForwarders}})],1)},a=[];e.d(t,"a",function(){return r}),e.d(t,"b",function(){return a})},2281:function(n,t){},2282:function(n,t,e){(n.exports=e(6)(!0)).push([n.i,"#MODIFY_FORWARDERS_DIALOG .formElement-content{padding-left:0!important;margin-left:0!important;width:100%}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/user/email/_components/modify-forwarder-dialog.vue"],names:[],mappings:"AAqGA,+CAEQ,yBACA,wBACA,UAAW,CACd",file:"modify-forwarder-dialog.vue?vue&type=style&index=0&lang=scss",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#MODIFY_FORWARDERS_DIALOG {\n    .formElement-content {\n        padding-left: 0 !important;\n        margin-left: 0 !important;\n        width: 100%;\n    }\n}\n"],sourceRoot:""}])},2283:function(n,t,e){"use strict";var r=e(1447);e.n(r).a},2284:function(n,t,e){"use strict";e.r(t);var r=e(1933),a=e(1449);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);e(2283);var o=e(0),s=Object(o.a)(a.default,r.a,r.b,!1,null,null,null);t.default=s.exports},2285:function(n,t,e){(n.exports=e(6)(!0)).push([n.i,"#CREATE_FORWARDERS_DIALOG .formElement-content{padding-left:0!important;margin-left:0!important;width:100%}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/user/email/_components/create-forwarder-dialog.vue"],names:[],mappings:"AAqIA,+CAEQ,yBACA,wBACA,UAAW,CACd",file:"create-forwarder-dialog.vue?vue&type=style&index=0&lang=scss",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#CREATE_FORWARDERS_DIALOG {\n    .formElement-content {\n        padding-left: 0 !important;\n        margin-left: 0 !important;\n        width: 100%;\n    }\n}\n"],sourceRoot:""}])},2286:function(n,t,e){"use strict";var r=e(1450);e.n(r).a},2287:function(n,t,e){"use strict";e.r(t);var r=e(1931),a=e(1452);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);e(2286);var o=e(0),s=Object(o.a)(a.default,r.a,r.b,!1,null,null,null);t.default=s.exports}}]);