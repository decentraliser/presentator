(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a8cc030"],{"097d":function(t,e,i){"use strict";var n=i("5ca1"),o=i("8378"),r=i("7726"),a=i("ebd6"),s=i("bcaa");n(n.P+n.R,"Promise",{finally:function(t){var e=a(this,o.Promise||r.Promise),i="function"==typeof t;return this.then(i?function(i){return s(e,t()).then((function(){return i}))}:t,i?function(i){return s(e,t()).then((function(){throw i}))}:t)}})},"88ff":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"full-page-flex"},[i("div",{staticClass:"flex-fill-block"}),i("div",{staticClass:"block txt-center txt-hint p-base"},[i("span",{staticClass:"loader loader-blend v-align-middle m-r-5"}),i("span",{staticClass:"txt v-align-middle"},[t._v(t._s(t.$t("Please wait."))+" "+t._s(t.$t("Redirecting...")))])]),i("div",{staticClass:"flex-fill-block"})])},o=[],r=(i("a481"),i("097d"),i("0abc")),a=i("3d48"),s=i("dd93"),c=i("f744"),l={name:"auth-callback",data(){return{isAuthorizing:!1}},beforeMount(){var t=s["a"].getQueryParams(window.location.href);this.authorize(t.code,t.state)},methods:{authorize(t,e){if(!this.isAuthorizing){var i=a["a"].getItem(r["a"].get("VUE_APP_AUTH_CLIENT_NAME_STORAGE_KEY")),n=a["a"].getItem(r["a"].get("VUE_APP_AUTH_CLIENT_STATE_STORAGE_KEY"));if(!i||!n||!e||e!==n)return this.$toast(this.$t("Invalid callback session."),"danger"),void this.cancelAuthorization();this.isAuthorizing=!0,c["a"].Users.authorizeAuthClient(i,t).then(t=>{this.$loginByResponse(t,!1),window.opener&&!window.opener.closed?(window.opener.location.reload(),window.opener.focus(),window.close()):this.$router.go({name:"home"})}).catch(t=>{this.$toast(this.$t("Invalid or expired authorization code."),"danger"),this.cancelAuthorization()}).finally(()=>{this.isAuthorizing=!1})}},cancelAuthorization(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;this.isAuthorizing=!1,setTimeout(()=>{window.opener&&!window.opener.closed?(window.opener.location.reload(),window.opener.focus(),window.close()):this.$router.replace({name:"login"})},t)}}},u=l,d=i("2877"),h=Object(d["a"])(u,n,o,!1,null,null,null);e["default"]=h.exports},a5b8:function(t,e,i){"use strict";var n=i("d8e8");function o(t){var e,i;this.promise=new t((function(t,n){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=n})),this.resolve=n(e),this.reject=n(i)}t.exports.f=function(t){return new o(t)}},bcaa:function(t,e,i){var n=i("cb7c"),o=i("d3f4"),r=i("a5b8");t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var i=r.f(t),a=i.resolve;return a(e),i.promise}}}]);