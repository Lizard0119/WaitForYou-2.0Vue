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
import BaiduMap from 'vue-baidu-map'

// import {ZegoExpressEngine} from 'zego-express-engine-webrtc'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios;
Vue.use(Vant);
Vue.use(VueCookie)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '1GH3AwrGWeoshqAvvmVn61y9xFHKV7LH'
});


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
