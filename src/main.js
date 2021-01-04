import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './quasar'

import { VCanvasController } from './canvas'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

Vue.config.productionTip = false

Vue.prototype.$vCanvasController = VCanvasController
window.z = VCanvasController
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
