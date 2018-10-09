(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1136:function(t,e,a){"use strict";a.r(e);var n=a(2019),s=a(1584);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var o=a(0),r=a(2373),l=a.n(r),u=Object(o.a)(s.default,n.a,n.b,!1,null,null,null);"function"==typeof l.a&&l()(u),e.default=u.exports},1581:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1254);e.default={extends:n.Line,mixins:[n.mixins.reactiveProp],props:["chart","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},1582:function(t,e,a){"use strict";a.r(e);var n=a(1581),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=s.a},1583:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(a(3)),s=a(13),i=o(a(2374));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,n.default)({},(0,s.preload)("GET_BANDWIDTH_BREAKDOWN"),{components:{LineChart:i.default},data:function(){return{show:{http:!0,email:!0,ftp:!0,pop:!0,imap:!0,da:!0,other:!0},showAs:"table"}},props:{year:{type:String,required:!0},month:{type:String,required:!0}},computed:{entries:function(){return this.$state.api.GET_BANDWIDTH_BREAKDOWN.response},columns:function(){var t=[{id:"day",label:this.$gettext("Day")}];return this.show.http&&t.push({id:"http",label:this.$gettext("Apache")}),this.show.email&&t.push({id:"email",label:this.$gettext("E-mails (Incoming / Outgoing)")}),this.show.ftp&&t.push({id:"ftp",label:this.$gettext("FTP")}),this.show.pop&&t.push({id:"pop",label:this.$gettext("POP")}),this.show.imap&&t.push({id:"imap",label:this.$gettext("IMAP")}),this.show.da&&t.push({id:"da",label:this.$gettext("Direct Admin")}),this.show.other&&t.push({id:"other",label:this.$gettext("Other")}),t.push({id:"total",label:this.$gettext("Total")}),t},chartData:function(){return{labels:this.entries.map(function(t){return t.day}),datasets:[(0,n.default)({label:this.$gettext("Total")},this.datasetOptions("rgba(255, 99, 132, 1)"),this.datasetData("total")),(0,n.default)({label:this.$gettext("Apache")},this.datasetOptions("rgba(1, 147, 202, 1)"),this.datasetData("http")),(0,n.default)({label:this.$gettext("E-mails")},this.datasetOptions("rgba(228, 91, 0, 1)"),this.datasetData("email")),(0,n.default)({label:this.$gettext("FTP")},this.datasetOptions("rgba(93, 195, 127, 1)"),this.datasetData("ftp")),(0,n.default)({label:this.$gettext("POP")},this.datasetOptions("rgba(52, 56, 60, 1)"),this.datasetData("pop")),(0,n.default)({label:this.$gettext("IMAP")},this.datasetOptions("rgba(0, 131, 180, 1)"),this.datasetData("imap")),(0,n.default)({label:this.$gettext("Direct Admin")},this.datasetOptions("rgba(198, 208, 218, 1)"),this.datasetData("da")),(0,n.default)({label:this.$gettext("Other")},this.datasetOptions("rgba(95, 111, 129, 1)"),this.datasetData("Other"))]}},chartOptions:function(){var t=this;return{scales:{yAxes:[{ticks:{callback:function(e){return t.getHumanReadableVolume(e)}}}]},tooltips:{enabled:!0,mode:"nearest",intersect:!1,xPadding:10,yPadding:10,titleFontFamily:"Open Sans",bodyFontFamily:"Open Sans",footerFontFamily:"Open Sans",footerFontSize:10,callbacks:{title:function(e){return e[0].xLabel+" "+t.getMonthName(t.month)+" "+t.year},label:function(e){var a=e.datasetIndex,n=e.yLabel,s=[t.$gettext("Total"),t.$gettext("Apache"),t.$gettext("E-mails"),t.$gettext("FTP"),t.$gettext("POP"),t.$gettext("IMAP"),t.$gettext("Direct Admin"),t.$gettext("Other")][a];return s+": "+t.getHumanReadableVolume(n)}}}}}},methods:{datasetOptions:function(t){return{backgroundColor:t.replace("1)","0.2)"),borderColor:t,pointBackgroundColor:t,borderWidth:2,pointRadius:2,pointHitRadius:20,fill:!1}},datasetData:function(t){return{data:this.entries.map(function(e){return e[t]})}},getMonthName:function(t){return[this.$gettext("January"),this.$gettext("February"),this.$gettext("March"),this.$gettext("April"),this.$gettext("May"),this.$gettext("June"),this.$gettext("July"),this.$gettext("August"),this.$gettext("September"),this.$gettext("October"),this.$gettext("November"),this.$gettext("December")][parseInt(t,10)-1]},getHumanReadableVolume:function(t){return this.$options.filters.humanReadableSize(t)}}})},1584:function(t,e,a){"use strict";a.r(e);var n=a(1583),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=s.a},2019:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-page",[a("translate",{attrs:{slot:"page:title","translate-params":{month:t.getMonthName(t.month),year:t.year}},slot:"page:title"},[t._v("\n        Bandwidth Breakdown for %{month} %{year}\n    ")]),t._v(" "),a("app-page-section",{directives:[{name:"flex",rawName:"v-flex",value:{main:"between"},expression:"{ main: 'between' }"}],staticClass:"filters"},[a("div",{directives:[{name:"gutter",rawName:"v-gutter",value:[1,null],expression:"[1, null]"}]},[a("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"},{name:"gutter",rawName:"v-gutter",value:[null,1],expression:"[null, 1]"}]},[a("translate",{attrs:{tag:"strong"}},[t._v("Show As: ")]),t._v(" "),a("input-check",{attrs:{type:"radio",value:"table"},model:{value:t.showAs,callback:function(e){t.showAs=e},expression:"showAs"}},[a("translate",[t._v("Table")])],1),t._v(" "),a("input-check",{attrs:{type:"radio",value:"chart"},model:{value:t.showAs,callback:function(e){t.showAs=e},expression:"showAs"}},[a("translate",[t._v("Chart")])],1)],1),t._v(" "),"table"===t.showAs?a("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"},{name:"gutter",rawName:"v-gutter",value:[null,1],expression:"[null, 1]"}]},[a("translate",{attrs:{tag:"strong"}},[t._v("Show: ")]),t._v(" "),a("input-check",{model:{value:t.show.http,callback:function(e){t.$set(t.show,"http",e)},expression:"show.http"}},[a("translate",[t._v("Apache")])],1),t._v(" "),a("input-check",{model:{value:t.show.email,callback:function(e){t.$set(t.show,"email",e)},expression:"show.email"}},[a("translate",[t._v("E-mails")])],1),t._v(" "),a("input-check",{model:{value:t.show.ftp,callback:function(e){t.$set(t.show,"ftp",e)},expression:"show.ftp"}},[a("translate",[t._v("FTP")])],1),t._v(" "),a("input-check",{model:{value:t.show.pop,callback:function(e){t.$set(t.show,"pop",e)},expression:"show.pop"}},[a("translate",[t._v("POP")])],1),t._v(" "),a("input-check",{model:{value:t.show.imap,callback:function(e){t.$set(t.show,"imap",e)},expression:"show.imap"}},[a("translate",[t._v("IMAP")])],1),t._v(" "),a("input-check",{model:{value:t.show.da,callback:function(e){t.$set(t.show,"da",e)},expression:"show.da"}},[a("translate",[t._v("Direct Admin")])],1),t._v(" "),a("input-check",{model:{value:t.show.other,callback:function(e){t.$set(t.show,"other",e)},expression:"show.other"}},[a("translate",[t._v("Other")])],1)],1):t._e()])]),t._v(" "),"table"===t.showAs?a("app-page-section",[a("ui-table",t._b({scopedSlots:t._u([{key:"col:http",fn:function(e){var a=e.http;return[t._v("\n                "+t._s(t._f("humanReadableSize")(a))+"\n            ")]}},{key:"col:email",fn:function(e){var a=e.email,n=e.email_count_incoming,s=e.email_count_outgoing;return[t._v("\n                "+t._s(t._f("humanReadableSize")(a))+"\n                ("+t._s(n)+" / "+t._s(s)+")\n            ")]}},{key:"col:ftp",fn:function(e){var a=e.ftp;return[t._v("\n                "+t._s(t._f("humanReadableSize")(a))+"\n            ")]}},{key:"col:pop",fn:function(e){var a=e.pop;return[t._v("\n                "+t._s(t._f("humanReadableSize")(a))+"\n            ")]}},{key:"col:imap",fn:function(e){var a=e.imap;return[t._v("\n                "+t._s(t._f("humanReadableSize")(a))+"\n            ")]}},{key:"col:da",fn:function(e){var a=e.da;return[t._v("\n                "+t._s(t._f("humanReadableSize")(a))+"\n            ")]}},{key:"col:other",fn:function(e){var a=e.other;return[t._v("\n                "+t._s(t._f("humanReadableSize")(a))+"\n            ")]}},{key:"col:total",fn:function(e){var a=e.total;return[t._v("\n                "+t._s(t._f("humanReadableSize")(a))+"\n            ")]}}])},"ui-table",{rows:t.entries,columns:t.columns,isCheckable:!1,isSortable:!0,disablePagination:!0},!1))],1):a("app-page-section",[a("line-chart",t._b({},"line-chart",{chartData:t.chartData,options:t.chartOptions},!1))],1)],1)},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},2373:function(t,e){},2374:function(t,e,a){"use strict";a.r(e);var n=a(1582);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var i=a(0),o=Object(i.a)(n.default,void 0,void 0,!1,null,null,null);e.default=o.exports}}]);