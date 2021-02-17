import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'

Vue.config.productionTip = false

// directiva personalizada con 2 filters
Vue.directive('miDirectiva', {
  bind(el, binding) {
    el.style.backgroundColor = binding.value;
  }
})

Vue.filter('toUppercase', function (value) {
  return value.toUpperCase()
})

Vue.filter('toLowercase', function (value) {
  return value.toLowerCase()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
