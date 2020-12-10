import Vue from 'vue'
import App from './App.vue'
// import LinaButton from './components/button.vue'
// import LinaRadio from './components/radio.vue'
import install from '../packages'
Vue.use(install)
// Vue.component(LinaButton.name, LinaButton)
// Vue.component(LinaRadio.name, LinaRadio)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
