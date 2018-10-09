(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1154:function(t,e,n){"use strict";n.r(e);var a=n(2032),r=n(1655);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var s=n(0),o=n(2423),u=n.n(o),l=Object(s.a)(r.default,a.a,a.b,!1,null,null,null);"function"==typeof u.a&&u()(l),e.default=l.exports},1219:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=u(n(1)),r=u(n(3)),i=u(n(11)),s=u(n(14)),o=n(1254);function u(t){return t&&t.__esModule?t:{default:t}}var l=s.default.extend({extends:o.Line,mixins:[o.mixins.reactiveProp],props:["chart","options"],mounted:function(){this.renderChart(this.chartData,this.options)}});e.default={components:{LineChart:l},data:function(){return{year:null,hovered:null}},props:{type:{type:String,required:!1,default:"volumes"},history:{type:Array,required:!0}},computed:{years:function(){return(0,i.default)(this.history.reduce(function(t,e){var n=e.year;return(0,r.default)((0,a.default)({},n,n),t)},{}))},rows:function(){var t=this;return this.history.filter(function(e){return e.year===t.year})},labels:function(){return this.rows.map(this.getMonthName)},chartData:function(){return this.chart[this.type].chartData},options:function(){return this.chart[this.type].options},chart:function(){var t=this,e={enabled:!0,mode:"nearest",intersect:!1,bodySpacing:6,xPadding:10,yPadding:10,titleFontFamily:"Open Sans",bodyFontFamily:"Open Sans",footerFontFamily:"Open Sans",footerFontSize:10};return{volumes:{chartData:{labels:this.labels,datasets:[(0,r.default)({label:this.$gettext("Bandwidth"),data:this.rows.map(function(t){return t.bandwidth})},this.datasetOptions("danger")),(0,r.default)({label:this.$gettext("Disk Usage"),data:this.rows.map(function(t){return t.quota})},this.datasetOptions("primary"))]},options:{onClick:this.chartsClick,scales:{yAxes:[{ticks:{callback:this.size}}]},tooltips:(0,r.default)({},e,{callbacks:{title:function(e){var n=t.rows[e[0].index];return t.getMonthName(n)+" "+n.year},label:function(e){var n=e.datasetIndex,a=e.yLabel,r=[t.$gettext("Bandwidth"),t.$gettext("Disk Usage")][n];return r+": "+t.size(a)},footer:function(e){return 0===e[0].datasetIndex?(t.$emit("hover:date",t.rows[e[0].index]),t.$gettext("Click for details")):(t.$emit("hover:clear"),"")}}})}},inodes:{chartData:{labels:this.labels,datasets:[(0,r.default)({label:this.$gettext("Inodes Count"),data:this.rows.map(function(t){return t.inode})},this.datasetOptions("safe"))]},options:{tooltips:(0,r.default)({},e,{callbacks:{title:function(e){var n=t.rows[e[0].index];return t.getMonthName(n)+" "+n.year},footer:function(){return t.$gettext("Click for details")}}})}}}}},methods:{chartsClick:function(){this.hovered&&this.$emit("click",this.hovered)},size:function(t){return this.$options.filters.humanReadableSize(t)},datasetOptions:function(t){var e=function(t){return getComputedStyle(document.body).getPropertyValue("--"+t)};return{backgroundColor:e(t+"-overlay"),borderColor:e(t),pointBackgroundColor:e(t),borderWidth:3,pointRadius:5,pointHitRadius:20}},getMonthName:function(t){var e=t.month;return[this.$gettext("January"),this.$gettext("February"),this.$gettext("March"),this.$gettext("April"),this.$gettext("May"),this.$gettext("June"),this.$gettext("July"),this.$gettext("August"),this.$gettext("September"),this.$gettext("October"),this.$gettext("November"),this.$gettext("December")][parseInt(e,10)-1]}},created:function(){var t=this;this.year=this.years[this.years.length-1],this.$on("hover:date",function(e){var n=e.year,a=e.month;t.hovered={year:n,month:a}}),this.$on("hover:clear",function(){t.hovered=null})}}},1220:function(t,e,n){"use strict";n.r(e);var a=n(1219),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=r.a},1221:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),r=n(4);e.default={data:function(){return{sort:{key:"date",order:"ASC"}}},props:{history:{type:Array,required:!0},bandwidth:{type:Boolean,required:!1,default:!0},quota:{type:Boolean,required:!1,default:!0},inode:{type:Boolean,required:!1,default:!1}},computed:{ipp:function(){var t=Number(this.$route.query.ipp)||!1;return t&&t>0?t:Number(a.IPP.default)},page:function(){var t=Number(this.$route.query.page)||!1;return t&&t>0?t:1},sortedHistory:function(){var t=r._.sortBy(this.history,{date:["year","month"]}[this.sort.key]||this.sort.key);return"DESC"===this.sort.order?t.reverse():t},rows:function(){return this.sortedHistory.slice((this.page-1)*this.ipp,this.page*this.ipp)}},methods:{getMonthName:function(t){return[this.$gettext("January"),this.$gettext("February"),this.$gettext("March"),this.$gettext("April"),this.$gettext("May"),this.$gettext("June"),this.$gettext("July"),this.$gettext("August"),this.$gettext("September"),this.$gettext("October"),this.$gettext("November"),this.$gettext("December")][parseInt(t,10)-1]}}}},1222:function(t,e,n){"use strict";n.r(e);var a=n(1221),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=r.a},1227:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page-section",[n("nav",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"},{name:"gutter",rawName:"v-gutter:padding",value:1,expression:"1",arg:"padding"},{name:"margin",rawName:"v-margin",value:[,,2],expression:"[,,2,]"}]},[n("translate",{staticClass:"txt:bold"},[t._v("Year:")]),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex"},{name:"gutter",rawName:"v-gutter",value:.5,expression:".5"}]},t._l(t.years,function(e){return n("ui-button",{key:e,attrs:{theme:e===t.year?"primary":"light",disabled:e===t.year,size:"normal"},on:{click:function(n){t.year=e}}},[t._v("\n                "+t._s(e)+"\n            ")])}))],1),t._v(" "),n("line-chart",t._b({key:t.type},"line-chart",t.chart[t.type],!1))],1)},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},1228:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page-section",[n("ui-table",{attrs:{rows:t.rows,sort:t.sort,columns:[{id:"year",label:t.$gettext("Date")},t.bandwidth?{id:"bandwidth",label:t.$gettext("Bandwidth")}:{},t.quota?{id:"quota",label:t.$gettext("Disk Usage")}:{},t.inode?{id:"inode",label:t.$gettext("Inodes Count")}:{}],rowsCount:t.history.length,isCheckable:!1,isSortable:"",externalSorting:""},on:{"update:sort":function(e){t.sort=e}},scopedSlots:t._u([{key:"col:year",fn:function(e){var a=e.year,r=e.month;return n("ui-link",{on:{click:function(e){t.$emit("click",{year:a,month:r})}}},[t._v("\n            "+t._s(t.getMonthName(r))+", "+t._s(a)+"\n        ")])}},{key:"col:bandwidth",fn:function(e){var n=e.bandwidth;return[t._v("\n            "+t._s(t._f("humanReadableSize")(n))+"\n        ")]}},{key:"col:quota",fn:function(e){var n=e.quota;return[t._v("\n            "+t._s(t._f("humanReadableSize")(n))+"\n        ")]}}])})],1)},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},1249:function(t,e,n){"use strict";n.r(e);var a=n(1227),r=n(1220);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var s=n(0),o=Object(s.a)(r.default,a.a,a.b,!1,null,null,null);e.default=o.exports},1250:function(t,e,n){"use strict";n.r(e);var a=n(1228),r=n(1222);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var s=n(0),o=Object(s.a)(r.default,a.a,a.b,!1,null,null,null);e.default=o.exports},1654:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(n(3)),r=n(13),i=o(n(1250)),s=o(n(1249));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,a.default)({},(0,r.preload)("GET_RESELLER_HISTORY"),{components:{HistoryChart:s.default,HistoryTable:i.default},data:function(){return{showAs:"table",show:{bandwidth:!0,quota:!0,inode:!1},type:"volumes"}},computed:(0,a.default)({},(0,r.mapResponse)({GET_RESELLER_HISTORY:"history"}))})},1655:function(t,e,n){"use strict";n.r(e);var a=n(1654),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=r.a},2032:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",[n("app-page-section",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center",main:"between"},expression:"{ cross: 'center', main: 'between' }"},{name:"gutter",rawName:"v-gutter:padding",value:4,expression:"4",arg:"padding"}],staticClass:"filters"},[n("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"},{name:"gutter",rawName:"v-gutter",value:1,expression:"1"}]},[n("translate",{staticClass:"txt:bold"},[t._v("Show as:")]),t._v(" "),n("input-check",{attrs:{type:"radio",value:"table"},model:{value:t.showAs,callback:function(e){t.showAs=e},expression:"showAs"}},[n("translate",[t._v("Table")])],1),t._v(" "),n("input-check",{attrs:{type:"radio",value:"chart"},model:{value:t.showAs,callback:function(e){t.showAs=e},expression:"showAs"}},[n("translate",[t._v("Chart")])],1)],1),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"},{name:"gutter",rawName:"v-gutter",value:1,expression:"1"}]},[n("translate",{staticClass:"txt:bold"},[t._v("Show:")]),t._v(" "),"table"===t.showAs?[n("input-check",{model:{value:t.show.bandwidth,callback:function(e){t.$set(t.show,"bandwidth",e)},expression:"show.bandwidth"}},[n("translate",[t._v("Bandwidth")])],1),t._v(" "),n("input-check",{model:{value:t.show.quota,callback:function(e){t.$set(t.show,"quota",e)},expression:"show.quota"}},[n("translate",[t._v("Disk Usage")])],1),t._v(" "),n("input-check",{model:{value:t.show.inode,callback:function(e){t.$set(t.show,"inode",e)},expression:"show.inode"}},[n("translate",[t._v("Inodes Count")])],1)]:[n("input-check",{attrs:{type:"radio",value:"volumes"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("translate",[t._v("Bandwidth & Disk Usage")])],1),t._v(" "),n("input-check",{attrs:{type:"radio",value:"inodes"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("translate",[t._v("Inodes Count")])],1)]],2)]),t._v(" "),"table"===t.showAs?n("history-table",t._b({attrs:{history:t.history}},"history-table",t.show,!1)):n("history-chart",t._b({},"history-chart",{history:t.history,type:t.type},!1))],1)},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},2423:function(t,e){}}]);