import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import {post, request} from './api/https'
import { toThousands, isBeta } from "./api/util";
import NotSupport from "@/components/NotSupport";
import checkLocation from "@/api/checkLocation";
// import './api/rem'
// import VConsole from 'vconsole'
// new VConsole()
const development = process.env.NODE_ENV === "development"

Vue.config.devtools = development;

if (!development) {
  console.log = () => {};
}

Vue.config.productionTip = false;

Vue.filter('toThousands', toThousands)

Vue.prototype.$post = post;

Vue.prototype.$request = request;

const network = isBeta ? "beta" : "main";

if (development && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor
}

new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: h => h(App)
});
