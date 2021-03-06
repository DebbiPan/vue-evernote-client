
import Vue from 'vue'
import ElementUI from 'element-ui'
import '../theme/index.css'
import App from './App'
import router from './router'
import store from './store'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
