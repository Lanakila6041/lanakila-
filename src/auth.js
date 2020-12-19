import { mainRequests } from './helpers/custom'
import { router } from './router'

const user = localStorage.getItem('user')
// const outlet = JSON.parse(localStorage.getItem('outlet'))
const role = localStorage.getItem('role')
const loggedOutlet = JSON.parse(localStorage.getItem('loggedOutlet'))
const initialState = user
	? {
		status: { loggedIn: true, load: false },
		user: user,
		// outlet: outlet,
		role: role,
		loggedOutlet: loggedOutlet
	}
	: {
		status: { loggedIn: false, load: false },
		user: null,
		outlet: null,
		role: null,
		loggedOutlet: null
	}

export const authentication = {
	namespaced: true,
	state: initialState,
	actions: {
		logout ({ commit }) {
			mainRequests.logout()
			commit('logout')
			router.push('/partnerLogin')
		},
		setOutlet ({ commit }, loggedOutlet) {
			commit('setOutlet', loggedOutlet)
			localStorage.setItem('loggedOutlet', JSON.stringify(loggedOutlet))
		}
	},
	mutations: {
		loginRequest (state, user) {
			state.status = { loggingIn: true, load: true }
			state.user = user
		},
		loginSuccess (state, data) {
			state.status = { loggedIn: true, load: false }
			state.user = data.data.login_name
			// state.outlet = data.data.outlets
			state.loggedOutlet = data.data.loggedOutlet
			// if (JSON.parse(data[3]).length > 15) {
			//   state.outlet = JSON.parse(data[3])
			//   state.role = 'god'
			// } else if (JSON.parse(data[3]).length > 1) {
			//   state.outlet = JSON.parse(data[3])
			//   state.role = 'master'
			// } else {
			//   state.role = 'none'
			//   state.outlet = JSON.parse(data[3])
			// }
		},
		loginFailure (state) {
			state.status = {}
			state.user = null
			// state.outlet = null
			state.loggedOutlet = null
		},
		logout (state) {
			state.status = {}
			state.user = null
			// state.outlet = null
			state.loggedOutlet = null
		},
		setOutlet (state, outlet) {
			state.loggedOutlet = outlet
		}
	},
	getters: {
		user: state => state.user,
		// outlet: state => state.outlet,
		login: state => state.status.loggedIn,
		load: state => state.status.load,
		loggedOutlet: state => state.loggedOutlet
	}
}
