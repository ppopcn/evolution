(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1182:function(t,n,e){"use strict";e.r(n);var a=e(2123),o=e(1776);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e(2522);var s=e(0),r=e(2520),u=e.n(r),c=Object(s.a)(o.default,a.a,a.b,!1,null,"092e8c53",null);"function"==typeof u.a&&u()(c),n.default=c.exports},1774:function(t,n,e){var a=e(2521);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(5).default)("59f863a4",a,!0,{})},1775:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=r(e(1)),o=r(e(3)),i=e(13),s=e(20);function r(t){return t&&t.__esModule?t:{default:t}}n.default=(0,o.default)({},(0,i.preload)("GET_MAIL_QUEUE_ITEM"),{props:{id:String},computed:(0,o.default)({},(0,s.mapState)({data:function(t){return t.api.GET_MAIL_QUEUE_ITEM.response}})),methods:{doAction:function(t){var n;this.$actionRequest("DO_MAIL_QUEUE_ACTION",(n={},(0,a.default)(n,t,!0),(0,a.default)(n,"select",[this.id]),n))}}})},1776:function(t,n,e){"use strict";e.r(n);var a=e(1775),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n.default=o.a},2123:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("app-page",[e("translate",{attrs:{slot:"page:title"},slot:"page:title"},[t._v("\n        View %{id}\n    ")]),t._v(" "),e("app-page-section",[e("translate",{attrs:{slot:"section:title"},slot:"section:title"},[t._v("E-mail Headers")]),t._v(" "),e("textarea",{domProps:{value:t.data.headers}})],1),t._v(" "),e("app-page-section",[e("translate",{attrs:{slot:"section:title"},slot:"section:title"},[t._v("E-mail Body Chunk")]),t._v(" "),e("textarea",{domProps:{value:t.data.body}})],1),t._v(" "),e("app-page-section",[e("translate",{attrs:{slot:"section:title"},slot:"section:title"},[t._v("Log")]),t._v(" "),e("textarea",{domProps:{value:t.data.logs}})],1),t._v(" "),e("template",{slot:"footer:buttons"},[e("ui-button",{attrs:{theme:"safe"},on:{click:function(n){t.doAction("thaw")}}},[e("translate",[t._v("Thaw")])],1),t._v(" "),e("ui-button",{attrs:{theme:"safe"},on:{click:function(n){t.doAction("freeze")}}},[e("translate",[t._v("Freeze")])],1),t._v(" "),e("ui-button",{attrs:{theme:"safe"},on:{click:function(n){t.doAction("retry")}}},[e("translate",[t._v("Retry")])],1),t._v(" "),e("ui-button",{attrs:{theme:"safe"},on:{click:function(n){t.doAction("bounce")}}},[e("translate",[t._v("Bounce")])],1),t._v(" "),e("ui-button",{attrs:{theme:"safe"},on:{click:function(n){t.doAction("delete")}}},[e("translate",[t._v("Delete")])],1)],1)],2)},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},2520:function(t,n){},2521:function(t,n,e){(t.exports=e(6)(!0)).push([t.i,"textarea[data-v-092e8c53]{max-height:unset!important;min-height:12rem;width:100%!important}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/admin/mail-queue/view.vue"],names:[],mappings:"AA2EA,0BACI,2BACA,iBACA,oBAAsB,CACzB",file:"view.vue?vue&type=style&index=0&id=092e8c53&lang=scss&scoped=true",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ntextarea {\n    max-height: unset !important;\n    min-height: 12rem;\n    width: 100% !important;\n}\n"],sourceRoot:""}])},2522:function(t,n,e){"use strict";var a=e(1774);e.n(a).a}}]);