import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

/**
 * Set title
 */
document.title = 'Text tags'

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
