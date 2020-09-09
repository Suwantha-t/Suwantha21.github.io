(function(e){function n(n){for(var r,a,c=n[0],u=n[1],s=n[2],l=0,v=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(n);while(v.length)v.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},i=[];function a(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5065ed52"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e);var s=new Error;i=function(n){u.onerror=u.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var p=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Server")]),e._v(" | "),t("router-link",{attrs:{to:"/client"}},[e._v("Client")]),e._v(" | "),t("router-link",{attrs:{to:"/manual"}},[e._v("Manual")]),e._v(" | "),t("router-link",{attrs:{to:"/roomserver"}},[e._v("RoomServer")]),e._v(" | "),t("router-link",{attrs:{to:"/room"}},[e._v("Room")]),e._v(" | ")],1),t("router-view")],1)},i=[],a=(t("034f"),t("2877")),c={},u=Object(a["a"])(c,o,i,!1,null,null,null),s=u.exports,l=(t("d3b7"),t("8c4f")),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Server")]),t("stream"),t("hr"),t("webcam")],1)},v=[],f=t("a0bc"),d=t.n(f),m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Server")]),t("br"),e._v("Connect To : "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.peerConnectTo,expression:"peerConnectTo"}],attrs:{type:"text"},domProps:{value:e.peerConnectTo},on:{input:function(n){n.target.composing||(e.peerConnectTo=n.target.value)}}}),t("button",{on:{click:e.connectPeer}},[e._v("connect")]),t("hr"),t("button",{on:{click:e.startSteam}},[e._v("start Steam")]),t("p",[e._v("Your Video")]),t("video",{ref:"video",staticStyle:{"max-height":"300px","max-width":"400px"}})])},h=[],b=(t("96cf"),t("1da1")),g={name:"Server",data:function(){return{peer:null,peerId:"Stream_1",peerConnectTo:"Stream_2"}},created:function(){this.initPeer()},methods:{initPeer:function(){this.peer=new d.a(this.peerId),this.peer.on("open",(function(e){var n=e;console.log("Ask your friend to join using your peer ID: "+n)})),this.peer.on("error",(function(e){alert(""+e)}))},connectPeer:function(){var e=this.peer.connect(this.peerConnectTo);e.on("open",(function(){e.send("hi! i'm server")})),this.peer.on("connection",(function(e){e.on("data",(function(e){console.log("server receive : ",e)}))}))},startSteam:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,navigator.mediaDevices.getDisplayMedia({video:!0});case 2:t=n.sent,r=e.peer.call(e.peerConnectTo,t),r.on("stream",(function(n){console.log(n);var r=e.$refs["video"];r.srcObject=t,r.play()}));case 5:case"end":return n.stop()}}),n)})))()}}},_=g,y=Object(a["a"])(_,m,h,!1,null,null,null),w=y.exports,x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Audio")]),t("br"),e._v("Connect To : "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.peerConnectTo,expression:"peerConnectTo"}],attrs:{type:"text"},domProps:{value:e.peerConnectTo},on:{input:function(n){n.target.composing||(e.peerConnectTo=n.target.value)}}}),t("button",{on:{click:e.connectPeer}},[e._v("connect")]),t("button",{on:{click:function(n){e.Mute=!e.Mute}}},[e._v("Mute")]),t("hr"),t("button",{on:{click:e.peerCall}},[e._v("start Steam")]),t("p",[e._v("Your Video")]),t("video",{ref:"video",staticStyle:{"max-height":"300px","max-width":"400px"}})])},C=[],O={name:"Server",data:function(){return{peer:null,Mute:!1,peerId:"audio_1",peerConnectTo:"audio_2"}},created:function(){this.initPeer()},methods:{initPeer:function(){this.peer=new d.a(this.peerId),this.peer.on("open",(function(e){var n=e;console.log("Ask your friend to join using your peer ID: "+n)})),this.peer.on("error",(function(e){console.log(""+e)}))},connectPeer:function(){var e=this.peer.connect(this.peerConnectTo);e.on("open",(function(){e.send("hi! i'm server")})),this.peer.on("connection",(function(e){e.on("data",(function(e){console.log("server receive : ",e)}))})),this.peer.on("call",this.peerCall)},peerCall:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,navigator.mediaDevices.getUserMedia({video:!1,audio:e.Mute});case 2:t=n.sent,r=e.peer.call(e.peerConnectTo,t),r.on("stream",(function(n){var t=e.$refs["video"];t.srcObject=n,t.play()}));case 5:case"end":return n.stop()}}),n)})))()}}},S=O,T=Object(a["a"])(S,x,C,!1,null,null,null),j=T.exports,k={name:"Server",components:{stream:w,webcam:j},data:function(){return{}},created:function(){},methods:{}},P=k,M=Object(a["a"])(P,p,v,!1,null,null,null),E=M.exports;r["a"].use(l["a"]);var R=[{path:"/",name:"Server",component:E},{path:"/client",name:"Client",component:function(){return t.e("about").then(t.bind(null,"7b94"))}},{path:"/manual",name:"Manual",component:function(){return t.e("about").then(t.bind(null,"d500"))}},{path:"/room",name:"Room",component:function(){return t.e("about").then(t.bind(null,"3ab1"))}},{path:"/roomserver",name:"RoomServer",component:function(){return t.e("about").then(t.bind(null,"6a79"))}}],D=new l["a"]({base:"",routes:R}),$=D;r["a"].config.productionTip=!1,new r["a"]({router:$,render:function(e){return e(s)}}).$mount("#app")},"5e11":function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="5e11"},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.f100dbc9.js.map