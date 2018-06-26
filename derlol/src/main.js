// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/dd-reset.css'
import './assets/css/dd-init.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(VueAxios,axios)
// Vue.prototype.domain="http://www.derlol.top";
Vue.prototype.domain="http://localhost:2999";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
