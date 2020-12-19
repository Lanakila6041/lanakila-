import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
import partnerLogin from '../views/partnerLogin.vue'
import Main from '../views/Main.vue'
import Layout from '../views/layout/index.vue'
import LayoutPartner from '../views/layout/partnerLayout.vue'
import calendarView from '../partnerComponents/calendarView.vue'
import MenuList from '../partnerComponents/MenuList.vue'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { getUser } from '@/utils/auth.js'

import PartnerIndex from '../views/partnerViews/index.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Layout,
			redirect: '/main',
			children: [
				{
					path: '/main',
					name: 'main',
					component: Main
				}
			],
			meta: { requiresAuth: true }
		},
		// {
		// 	path: '/login',
		// 	name: 'login',
		// 	component: Login,
		// 	meta: { requiresAuth: false }
		// },
		{
			path: '/partnerLogin',
			name: 'partnerLogin',
			component: partnerLogin,
			meta: { requiresAuth: false }
		}
	]
})

export const routerPartner = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: LayoutPartner,
			redirect: '/main',
			children: [
				{
					path: '/main',
					name: 'main',
					component: PartnerIndex
				},
				{
					path: '/calendarView',
					name: 'calendarView',
					component: calendarView
				},
				{
					path: '/MenuList',
					name: 'MenuList',
					component: MenuList
				}
			],
			meta: { requiresAuth: true }
		},
		// {
		// 	path: '/login',
		// 	name: 'login',
		// 	component: Login,
		// 	meta: { requiresAuth: false }
		// },
		{
			path: '/partnerLogin',
			name: 'partnerLogin',
			component: partnerLogin,
			meta: { requiresAuth: false }
		}
	]
})
AmplifyEventBus.$on('authState', async state => {
	const pushPathes = {
		signedOut: () => {
			router.push({ path: '/partnerLogin' })
			localStorage.clear()
		},
		signUp: () => {
			router.push({ path: '/signUp' })
		},
		confirmSignUp: () => {
			router.push({ path: '/signUpConfirm' })
		},
		signIn: () => {
			router.push({ path: '/signIn' })
		},
		signedIn: () => {
			router.push({ path: '/main' })
		}
	}
	if (typeof pushPathes[state] === 'function') {
		pushPathes[state]()
	}
})

router.beforeResolve(async (to, from, next) => {
	const user = await getUser()
	if (!user) {
		if (to.matched.some(record => record.meta.requiresAuth)) {
			return next({
				path: '/login'
			})
		}
	} else {
		return next()
	}
	return next()
})

routerPartner.beforeResolve(async (to, from, next) => {
	let token = window.localStorage.getItem('token')
	if (!token) {
		if (to.matched.some(record => record.meta.requiresAuth)) {
			return next({
				path: '/partnerLogin'
			})
		}
	} else {
		return next()
	}
	return next()
})
export default { router, routerPartner }
