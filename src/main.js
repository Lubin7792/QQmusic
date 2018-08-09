import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
// Vue.config.productionTip = false
import 'common/stylus/index.styl'
import VueLazyload from 'vue-lazyload'

/* eslint-disable no-new */
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
fastclick.attach(document.body)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})