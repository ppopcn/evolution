(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1076:function(t,e,n){"use strict";n.r(e);var r=n(2092),a=n(1317);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);var l=n(0),i=n(2190),s=n.n(i),c=Object(l.a)(a.default,r.a,r.b,!1,null,null,null);"function"==typeof s.a&&s()(c),e.default=c.exports},1316:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=n(3),o=(r=a)&&r.__esModule?r:{default:r},l=n(13);e.default=(0,o.default)({},(0,l.preload)("GET_REDIRECTS"),{data:function(){return{select:[],create:{from:"/",type:"301",to:"http://"}}},methods:{createRedirect:function(){this.$actionRequest("CREATE_REDIRECT",this.create,{reset:!0})},deleteRedirects:function(){this.$actionRequest("DELETE_REDIRECTS",this.$get("select"))}}})},1317:function(t,e,n){"use strict";n.r(e);var r=n(1316),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=a.a},2092:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",[n("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:function(e){t.$dialog("CREATE_REDIRECT_DIALOG").open()}},slot:"header:buttons"},[n("translate",[t._v("Create New Redirect")])],1),t._v(" "),n("app-page-section",[n("ui-api-table",t._b({on:{"action:del":function(e){t.$dialog("DELETE_REDIRECTS_DIALOG").open()}},scopedSlots:t._u([{key:"col:local_url_path",fn:function(e){var r=e.local_url_path;return n("ui-link",{attrs:{href:"//"+t.$domain+r}},[t._v("\n                "+t._s(r)+"\n            ")])}},{key:"col:redirect_url",fn:function(e){var r=e.redirect_url;return n("ui-link",{attrs:{href:r}},[t._v("\n                "+t._s(r)+"\n            ")])}},{key:"col:type",fn:function(e){var r=e.type;return["301"===r?n("translate",[t._v("\n                    301 — Permanent\n                ")]):"302"===r?n("translate",[t._v("\n                    302 — Temporary\n                ")]):"303"===r?n("translate",[t._v("\n                    303 — Replaced\n                ")]):t._e()]}}]),model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},"ui-api-table",{endpoint:"GET_REDIRECTS",rowID:"local_url_path",columns:{local_url_path:t.$gettext("Local URL Path"),type:t.$gettext("Type"),redirect_url:t.$gettext("Redirect URL")},actions:{del:t.$gettext("Delete")},updateOn:["CREATE_REDIRECT","DELETE_REDIRECTS"]},!1))],1),t._v(" "),n("ui-dialog",{attrs:{id:"CREATE_REDIRECT_DIALOG",theme:"safe",size:"normal"}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Add New Redirect")]),t._v(" "),n("template",{slot:"content"},[n("ui-form-element",{attrs:{group:"redirect",validators:{required:!0}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Local URL Path")]),t._v(" "),n("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v('eg: "/redirect", "/"')]),t._v(" "),n("input-text",{attrs:{slot:"content",prefix:t.$domainUnicode},slot:"content",model:{value:t.create.from,callback:function(e){t.$set(t.create,"from",e)},expression:"create.from"}})],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Redirect Type")]),t._v(" "),n("input-usual-select",{attrs:{slot:"content",options:{301:t.$gettext("301 — Permanent"),302:t.$gettext("302 — Temporary"),303:t.$gettext("303 — Replaced")},width:"46.3rem"},slot:"content",model:{value:t.create.type,callback:function(e){t.$set(t.create,"type",e)},expression:"create.type"}})],1),t._v(" "),n("ui-form-element",{attrs:{validators:{required:!0}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Destination URL")]),t._v(" "),n("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v('eg: "http://www.redirected.com"')]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.create.to,callback:function(e){t.$set(t.create,"to",e)},expression:"create.to"}})],1)],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"primary",validateGroup:"redirect"},on:{click:t.createRedirect},slot:"buttons"},[n("translate",[t._v("Create")])],1)],2),t._v(" "),n("ui-dialog-delete-items",{attrs:{id:"DELETE_REDIRECTS_DIALOG",subject:t.$ngettext("Redirect","Redirects",t.select.length)},on:{"click:confirm":t.deleteRedirects}})],1)},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},2190:function(t,e){}}]);