import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
