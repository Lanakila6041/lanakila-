import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../views/Login.vue'
import partnerLogin from '../views/partnerLogin.vue'
import LayoutPartner from '../views/layout/partnerLayout.vue'
import calendarView from '../partnerComponents/calendarView.vue'
import MenuList from '../partnerComponents/MenuList.vue'
// import PartnerIndex from '../views/partnerViews/index.vue'

// let LayoutPartner = require('../views/layout/partnerLayout.vue')
// let calendarView = require('../partnerComponents/calendarView.vue')
// let partnerLogin = require('../views/partnerLogin.vue')
// let MenuList = require('../partnerComponents/MenuList.vue')

Vue.use(Router)

export const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/main',
			component: LayoutPartner,
			redirect: '/calendarView',
			children: [
				{
					path: '/calendarView',
					name: 'calendarView',
					component: calendarView
				},
				{
					path: '/LayoutPartner',
					name: 'LayoutPartner',
					component: LayoutPartner
				},
				{
					path: '/MenuList',
					name: 'MenuList',
					component: MenuList
				}
			]
		},
		// {
		//     path: '/orderHistory',
		//     name: 'orderHistory',
		//     component: InitLayout
		// },
		{ path: '/partnerLogin', name: 'partnerLogin', component: partnerLogin },
		{ path: '/', redirect: '/main' }
	]
})

router.beforeEach((to, from, next) => {
	const publicPages = ['/partnerLogin', '*']
	const authRequired = !publicPages.includes(to.path)
	const loggedIn = localStorage.getItem('user')
	if (authRequired && !loggedIn) {
		return next('/partnerLogin')
	}
	return next()
})
export default { router }
