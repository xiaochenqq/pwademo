(function(e){function t(t){for(var n,a,u=t[0],s=t[1],c=t[2],p=0,f=[];p<u.length;p++)a=u[p],o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);i&&i(t);while(f.length)f.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},l=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var i=s;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.prompt,expression:"prompt"}],on:{click:function(t){return e.deferredPrompt(e.deferred)}}},[e._v("添加到桌面")]),n("img",{attrs:{alt:"Vue logo",src:r("9096")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},l=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],s={name:"HelloWorld",props:{msg:String}},c=s,i=(r("8663"),r("2877")),p=Object(i["a"])(c,a,u,!1,null,"699bf65d",null),f=p.exports,v={name:"app",data:function(){return{prompt:!1,deferred:null}},created:function(){var e=this;window.onbeforeinstallprompt=function(t){console.log(t),e.prompt=!0,e.deferred=t}},methods:{deferredPrompt:function(e){var t=this;e&&(e.prompt(),e.prompt(),e.userChoice.then(function(e){console.log(e.outcome),"dismissed"===e.outcome?console.log("用户取消了安装"):(console.log("用户已安装程序"),t.prompt=!1,t.deferred=null)}))}},components:{HelloWorld:f}},d=v,h=(r("7c55"),Object(i["a"])(d,o,l,!1,null,null,null)),g=h.exports,m=r("9483");Object(m["a"])("".concat("","service-worker.js"),{ready:function(){console.log("准备完成")},registered:function(){console.log("注册成功")},cached:function(){console.log("缓存")},updatefound:function(){console.log("正在下载新内容.")},updated:function(){console.log("新内容可用；请刷新.")},offline:function(){console.log("找不到Internet连接。应用程序正在脱机模式下运行")},error:function(e){console.error("服务工作者注册过程中出错:",e)}}),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(g)}}).$mount("#app")},"580c":function(e,t,r){},"5c48":function(e,t,r){},"7c55":function(e,t,r){"use strict";var n=r("5c48"),o=r.n(n);o.a},8663:function(e,t,r){"use strict";var n=r("580c"),o=r.n(n);o.a},9096:function(e,t,r){e.exports=r.p+"img/timg.3f40beb9.jpg"}});
//# sourceMappingURL=app.43e7c660.js.map