import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { router } from './router'
import store from './store'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import locale from 'element-ui/lib/locale/lang/mn'
// import Amplify from 'aws-amplify'
// import awsconfig from './aws-exports'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/main.scss'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import '../src/assets/main.scss'
import '../src/assets/galaa.scss'

Vue.use(VueSidebarMenu)
Vue.use(ElementUI, { locale })
// Amplify.configure(awsconfig)
export const bus = new Vue()

// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
