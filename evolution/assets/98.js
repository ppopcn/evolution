(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1158:function(t,e,n){"use strict";n.r(e);var s=n(2055),o=n(1687);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n(2451);var l=n(0),r=n(2449),i=n.n(r),c=Object(l.a)(o.default,s.a,s.b,!1,null,"010895b8",null);"function"==typeof i.a&&i()(c),e.default=c.exports},1685:function(t,e,n){var s=n(2450);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(5).default)("3c143823",s,!0,{})},1686:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c(n(8)),o=c(n(7)),a=c(n(3)),l=n(13),r=n(27),i=n(20);function c(t){return t&&t.__esModule?t:{default:t}}e.default=(0,a.default)({},(0,l.preload)("GET_SCHEDULE_RESELLER_BACKUP_OPTIONS"),{mixins:[(0,r.$bindTab)({defaultTab:"who",param:"step"})],data:function(){return{who:"all",when:"now",where:"local",whoData:{select:[],skip_suspended:!1},cron:{minute:"",hour:"",dayofmonth:"",month:"",dayofweek:""},ftp:{ip:"",username:"",password:"",path:"",port:"",secure:!1},append_to_path:"nothing",custom_append:""}},computed:(0,a.default)({},(0,i.mapState)({options:function(t){return t.api.GET_SCHEDULE_RESELLER_BACKUP_OPTIONS.response}}),{requestData:function(){var t=this.$get(["who","when","where"]),e="all"===this.who?{}:this.whoData,n="now"===this.when?{}:this.cron,s="local"===this.where?{}:{ftp_ip:this.ftp.ip,ftp_username:this.ftp.username,ftp_password:this.ftp.password,ftp_path:this.ftp.path,ftp_port:this.ftp.port,ftp_secure:this.ftp.secure};return(0,a.default)({},t,e,n,s,this.$get(["append_to_path","custom_append"]))}}),created:function(){this.ftp.ip=this.options.settings.ip,this.ftp.username=this.options.settings.username,this.ftp.password=this.options.settings.password,this.ftp.path=this.options.settings.path,this.ftp.port=this.options.settings.port,this.ftp.secure=this.options.settings.secure,this.append_to_path=this.options.settings.append.value},methods:{submit:function(){var t=this;return(0,o.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$actionRequest("SCHEDULE_RESELLER_BACKUP",t.requestData);case 2:e.sent&&t.$router.push({name:"reseller/backups"});case 4:case"end":return e.stop()}},e,t)}))()}}})},1687:function(t,e,n){"use strict";n.r(e);var s=n(1686),o=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);e.default=o.a},2055:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{id:"schedule-reseller-backup"}},[n("app-page-section",[n("ui-steps",{attrs:{steps:[{id:"who",label:t.$gettext("Step 1: Who"),desc:t.$gettext("Select users you would like to backup.")},{id:"when",label:t.$gettext("Step 2: When"),desc:t.$gettext("Select time period for backup.")},{id:"where",label:t.$gettext("Step 3: Where"),desc:t.$gettext("Select directory for backups.")}],current:t.step},on:{"update:current":function(e){t.step=e}}},[n("div",{attrs:{slot:"step:who"},slot:"step:who"},[n("ui-form-element",{class:{dimmed:"all"!==t.who}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("All Users")]),t._v(" "),n("input-check",{attrs:{slot:"content",type:"radio",value:"all"},slot:"content",model:{value:t.who,callback:function(e){t.who=e},expression:"who"}})],1),t._v(" "),n("ui-form-element",{class:{dimmed:"selected"!==t.who}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Selected Users")]),t._v(" "),n("input-check",{attrs:{slot:"content",type:"radio",value:"selected"},slot:"content",model:{value:t.who,callback:function(e){t.who=e},expression:"who"}})],1),t._v(" "),n("ui-form-element",{class:{dimmed:"except"!==t.who}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("All Users Except Selected")]),t._v(" "),n("input-check",{attrs:{slot:"content",type:"radio",value:"except"},slot:"content",model:{value:t.who,callback:function(e){t.who=e},expression:"who"}})],1),t._v(" "),"all"!==t.who?n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Users")]),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}],attrs:{slot:"content"},slot:"content"},[n("ui-form-element",[n("input-checkbox",{attrs:{slot:"content",model:t.options.users===t.whoData.select},on:{change:function(e){t.whoData.select=t.whoData.select===t.options.users?[]:t.options.users}},slot:"content"},[t._v("All Users")])],1),t._v(" "),t._l(t.options.users,function(e){return n("ui-form-element",{key:e},[n("input-checkbox",{attrs:{slot:"content",value:e},slot:"content",model:{value:t.whoData.select,callback:function(e){t.$set(t.whoData,"select",e)},expression:"whoData.select"}},[t._v("\n                                "+t._s(e)+"\n                            ")])],1)})],2)],1):t._e(),t._v(" "),"all"!==t.who?n("ui-form-element",{class:{dimmed:!t.whoData.skip_suspended}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Skip Suspended")]),t._v(" "),n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.whoData.skip_suspended,callback:function(e){t.$set(t.whoData,"skip_suspended",e)},expression:"whoData.skip_suspended"}})],1):t._e()],1),t._v(" "),n("div",{attrs:{slot:"step:when"},slot:"step:when"},[n("ui-form-element",{class:{dimmed:"now"!==t.when}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Now")]),t._v(" "),n("input-check",{attrs:{slot:"content",type:"radio",value:"now"},slot:"content",model:{value:t.when,callback:function(e){t.when=e},expression:"when"}})],1),t._v(" "),n("ui-form-element",{class:{dimmed:"cron"!==t.when}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("On Schedule")]),t._v(" "),n("input-check",{attrs:{slot:"content",type:"radio",value:"cron"},slot:"content",model:{value:t.when,callback:function(e){t.when=e},expression:"when"}})],1),t._v(" "),"cron"===t.when?n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Cron Settings")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Minute")]),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],attrs:{slot:"content"},slot:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cron.minute,expression:"cron.minute"}],attrs:{type:"text"},domProps:{value:t.cron.minute},on:{input:function(e){e.target.composing||t.$set(t.cron,"minute",e.target.value)}}}),t._v(" "),n("small",{directives:[{name:"margin",rawName:"v-margin",value:[0,1],expression:"[0, 1]"}]},[t._v("(0–59)")])])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Hour")]),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],attrs:{slot:"content"},slot:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cron.hour,expression:"cron.hour"}],attrs:{type:"text"},domProps:{value:t.cron.hour},on:{input:function(e){e.target.composing||t.$set(t.cron,"hour",e.target.value)}}}),t._v(" "),n("small",{directives:[{name:"margin",rawName:"v-margin",value:[0,1],expression:"[0, 1]"}]},[t._v("(0–23)")])])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Day of Month")]),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],attrs:{slot:"content"},slot:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cron.dayofmonth,expression:"cron.dayofmonth"}],attrs:{type:"text"},domProps:{value:t.cron.dayofmonth},on:{input:function(e){e.target.composing||t.$set(t.cron,"dayofmonth",e.target.value)}}}),t._v(" "),n("small",{directives:[{name:"margin",rawName:"v-margin",value:[0,1],expression:"[0, 1]"}]},[t._v("(1–31)")])])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Month")]),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],attrs:{slot:"content"},slot:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cron.month,expression:"cron.month"}],attrs:{type:"text"},domProps:{value:t.cron.month},on:{input:function(e){e.target.composing||t.$set(t.cron,"month",e.target.value)}}}),t._v(" "),n("small",{directives:[{name:"margin",rawName:"v-margin",value:[0,1],expression:"[0, 1]"}]},[t._v("(1–12)")])])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Day of Week")]),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],attrs:{slot:"content"},slot:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cron.dayofweek,expression:"cron.dayofweek"}],attrs:{type:"text"},domProps:{value:t.cron.dayofweek},on:{input:function(e){e.target.composing||t.$set(t.cron,"dayofweek",e.target.value)}}}),t._v(" "),n("small",{directives:[{name:"margin",rawName:"v-margin",value:[0,1],expression:"[0, 1]"}]},[t._v("(0–7)")])])],1)],1)],1):t._e()],1),t._v(" "),n("div",{attrs:{slot:"step:where"},slot:"step:where"},[n("ui-form-element",{class:{dimmed:"local"!==t.where}},[n("translate",{attrs:{slot:"title","translate-params":t.options},slot:"title"},[t._v("Local: %{ location }")]),t._v(" "),n("input-check",{attrs:{slot:"content",type:"radio",value:"local"},slot:"content",model:{value:t.where,callback:function(e){t.where=e},expression:"where"}})],1),t._v(" "),n("ui-form-element",{class:{dimmed:"ftp"!==t.where}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("FTP")]),t._v(" "),n("input-check",{attrs:{slot:"content",type:"radio",value:"ftp"},slot:"content",model:{value:t.where,callback:function(e){t.where=e},expression:"where"}})],1),t._v(" "),"ftp"===t.where?n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("FTP Settings")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("IP")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ftp.ip,expression:"ftp.ip"}],attrs:{type:"text"},domProps:{value:t.ftp.ip},on:{input:function(e){e.target.composing||t.$set(t.ftp,"ip",e.target.value)}}})])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Username")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ftp.username,expression:"ftp.username"}],attrs:{type:"text"},domProps:{value:t.ftp.username},on:{input:function(e){e.target.composing||t.$set(t.ftp,"username",e.target.value)}}})])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Password")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("input-password",{model:{value:t.ftp.password,callback:function(e){t.$set(t.ftp,"password",e)},expression:"ftp.password"}})],1)],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Remote Path")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ftp.path,expression:"ftp.path"}],attrs:{type:"text"},domProps:{value:t.ftp.path},on:{input:function(e){e.target.composing||t.$set(t.ftp,"path",e.target.value)}}})])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Port")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ftp.port,expression:"ftp.port"}],attrs:{type:"text"},domProps:{value:t.ftp.port},on:{input:function(e){e.target.composing||t.$set(t.ftp,"port",e.target.value)}}})])],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Secure FTP")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("input-checkbox",{model:{value:t.ftp.secure,callback:function(e){t.$set(t.ftp,"secure",e)},expression:"ftp.secure"}})],1)],1)],1)],1):t._e(),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Append")]),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex"}],attrs:{slot:"content"},slot:"content"},[n("input-usual-select",{attrs:{options:t.options.settings.append.options},model:{value:t.append_to_path,callback:function(e){t.append_to_path=e},expression:"append_to_path"}})],1)],1),t._v(" "),"custom"===t.append_to_path?n("ui-form-element",{attrs:{helpID:"539"}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Custom Path")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("input-text",{directives:[{name:"margin",rawName:"v-margin",value:[1,0],expression:"[1, 0]"}],attrs:{prefix:"/"},model:{value:t.custom_append,callback:function(e){t.custom_append=e},expression:"custom_append"}})],1)],1):t._e()],1)])],1),t._v(" "),n("ui-button",{attrs:{slot:"footer:buttons",theme:"safe"},on:{click:t.submit},slot:"footer:buttons"},[n("translate",[t._v("Submit")])],1)],1)},o=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o})},2449:function(t,e){},2450:function(t,e,n){(t.exports=n(6)(!0)).push([t.i,"#schedule-reseller-backup .dimmed[data-v-010895b8]{opacity:.7}#schedule-reseller-backup .ui-steps-content>div>.formElement[data-v-010895b8]{margin-left:0!important}#schedule-reseller-backup .formElement .formElement[data-v-010895b8]:last-child{border-bottom-width:0}#schedule-reseller-backup .select[data-v-010895b8],#schedule-reseller-backup input[type=text][data-v-010895b8]{width:240px}","",{version:3,sources:["/usr/local/directadmin/data/skins/evolution/src/js/pages/reseller/backups/schedule.vue"],names:[],mappings:"AAgSA,mDACc,UAAW,CADzB,8EAGQ,uBAA4B,CAHpC,gFAMQ,qBAAwB,CANhC,+GASQ,WAAY,CACf",file:"schedule.vue?vue&type=style&index=0&id=010895b8&lang=scss&scoped=true",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#schedule-reseller-backup {\n    .dimmed { opacity: .7; }\n    .ui-steps-content > div > .formElement {\n        margin-left: 0rem !important;\n    }\n    .formElement .formElement:last-child {\n        border-bottom-width: 0px;\n    }\n    input[type="text"], .select {\n        width: 240px;\n    }\n}\n'],sourceRoot:""}])},2451:function(t,e,n){"use strict";var s=n(1685);n.n(s).a}}]);