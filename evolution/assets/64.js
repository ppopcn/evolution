(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1124:function(t,e,n){"use strict";n.r(e);var a=n(2038),o=n(1497);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(0),l=n(2312),s=n.n(l),u=Object(i.a)(o.default,a.a,a.b,!1,null,null,null);"function"==typeof s.a&&s()(u),e.default=u.exports},1494:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(n(8)),o=r(n(7));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{from:"",alias:!1}},methods:{createDomainPointer:function(){var t=this;return(0,o.default)(a.default.mark(function e(){var n;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.$p6e.toA(t.from))!==t.from&&t.$notifications.info({title:t.$gettext("Source domain name punycoded"),content:t.$gettext("Source domain name has been automatically converted to punycode format. Punycode is used to encode internationalized domain names (IDN) by converting Unicode characters to ASCII.")}),e.next=4,t.$actionRequest("CREATE_DOMAIN_POINTER",{from:n,alias:t.alias});case 4:e.sent&&(t.$reset(),t.$emit("created"));case 6:case"end":return e.stop()}},e,t)}))()}}}},1495:function(t,e,n){"use strict";n.r(e);var a=n(1494),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e.default=o.a},1496:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(n(3)),o=n(13),r=i(n(2313));function i(t){return t&&t.__esModule?t:{default:t}}e.default=(0,a.default)({components:{CreateDomainPointerDialog:r.default}},(0,o.preload)("GET_DOMAIN_POINTERS"),{data:function(){return{select:[]}},computed:(0,a.default)({},(0,o.mapTokens)({dnsControl:"USERDNSCONTROL"})),watch:{$domain:function(){this.$request("GET_DOMAIN_POINTERS")}},methods:{deletePointers:function(){this.$actionRequest("DELETE_DOMAIN_POINTERS",this.$get("select"),{reset:!0})}}})},1497:function(t,e,n){"use strict";n.r(e);var a=n(1496),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e.default=o.a},1924:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-dialog",{attrs:{id:"CREATE_DOMAIN_POINTER_DIALOG",theme:"safe"}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Add New Domain Pointer")]),t._v(" "),n("template",{slot:"content"},[n("ui-form-element",{attrs:{group:"domainPointer",validators:{required:!0,domain:!0},vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Source Domain")]),t._v(" "),n("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("eg. sourcedomain.com")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),t._v(" "),n("translate",{attrs:{slot:"error:domain"},slot:"error:domain"},[t._v("\n                Should be valid domain\n            ")])],1),t._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Target Domain")]),t._v(" "),n("input-text",{attrs:{slot:"content",disabled:"",value:t.$domainUnicode},slot:"content"})],1),t._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.alias,callback:function(e){t.alias=e},expression:"alias"}},[n("translate",[t._v("Create as an Alias")])],1)],1)],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"safe",validateGroup:"domainPointer"},on:{click:t.createDomainPointer},slot:"buttons"},[n("translate",[t._v("Create")])],1)],2)},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},2038:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",[n("ui-button",{attrs:{slot:"header:buttons",theme:"safe"},on:{click:function(e){t.$dialog("CREATE_DOMAIN_POINTER_DIALOG").open()}},slot:"header:buttons"},[n("translate",[t._v("Create Domain Pointer")])],1),t._v(" "),n("app-page-section",[n("ui-api-table",t._b({on:{"action:del":function(e){t.$dialog("DELETE_DOMAIN_POINTERS").open()}},scopedSlots:t._u([{key:"col:type",fn:function(e){var a=e.type;return n("ui-badge",{attrs:{theme:"primary",size:"small"}},[n("translate","alias"===a?[t._v("Alias")]:[t._v("Pointer")])],1)}},{key:"col:dns",fn:function(e){var a=e.domain_pointer;return n("ui-button-link",{attrs:{size:"small",theme:"light",name:"user/dns",query:{pointer:a}}},["user"===t.$state.app.user.level?n("translate",[t._v("\n                    View\n                ")]):n("translate",[t._v("\n                    Manage\n                ")])],1)}}]),model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},"ui-api-table",{endpoint:"GET_DOMAIN_POINTERS",rowID:"domain_pointer",columns:{domain_pointer:{label:t.$gettext("Domain Pointer"),filter:"p6e-unicode"},type:t.$gettext("Type"),dns:{label:t.$gettext("DNS"),hide:!t.dnsControl}},actions:{del:t.$gettext("Delete")},updateOn:["CREATE_DOMAIN_POINTER","DELETE_DOMAIN_POINTERS"]},!1))],1),t._v(" "),n("create-domain-pointer-dialog"),t._v(" "),n("ui-dialog-delete-items",{attrs:{id:"DELETE_DOMAIN_POINTERS",subject:t.$ngettext("Domain Pointer","Domain Pointers",t.select.length)},on:{"click:confirm":t.deletePointers}})],1)},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},2312:function(t,e){},2313:function(t,e,n){"use strict";n.r(e);var a=n(1924),o=n(1495);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(0),l=Object(i.a)(o.default,a.a,a.b,!1,null,null,null);e.default=l.exports}}]);