// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import Axios from 'axios'
import VueCookie from 'vue-cookie'
import bottom from './components/public/bottom.vue'
import JobHead from "./components/job/JobHead";
import SearchBar from "./components/job/SearchBar";
import JobTop from "./components/job/JobTop";

// import {ZegoExpressEngine} from 'zego-express-engine-webrtc'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios;
Vue.use(Vant);
Vue.use(VueCookie)


Vue.component('my-bottom',bottom);
Vue.component('my-JobHead',JobHead);
Vue.component('my-searchBar',SearchBar);
Vue.component('my-JobTop',JobTop);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
