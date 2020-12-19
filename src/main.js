import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import routerA from './router'
import store from './store'
import settlementData from './settlementData'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import locale from 'element-ui/lib/locale/lang/mn'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
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
import ReadMore from 'vue-read-more'
import * as VueGoogleMaps from 'vue2-google-maps'
let router = routerA.router
if (localStorage.getItem('type') === 'partner') {
	router = routerA.routerPartner
}
Vue.use(VueSidebarMenu)
Vue.use(ElementUI, { locale })
Amplify.configure(awsconfig)
Vue.use(VueGoogleMaps, {
	installComponents: true,
	load: {
		key: 'AIzaSyAIns3enZwqky9L60Pfj1AmlfgIHyL6tUo',
		region: 'MN',
		language: 'mn',
		libraries: 'places'
	}
})
Vue.use(ReadMore, 'readMore')
export const bus = new Vue()

// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
new Vue({
	router,
	store,
	settlementData,
	data: {
		username: '',
		email: ''
	},
	render: h => h(App)
}).$mount('#app')
