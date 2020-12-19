let token = window.localStorage.getItem('token')
let userType = window.localStorage.getItem('userType')
const state = {
	token: token,
	userType: userType
}
const mutations = {
	addToToken (state, token) {
		state.token = token
		this.commit('saveData')
	},
	saveData (state) {
		window.localStorage.setItem('token', state.token)
	},
	addToUserType (state, sendUserType) {
		state.userType = sendUserType
		this.commit('saveUserType')
	},
	saveUserType (state) {
		window.localStorage.setItem('userType', state.userType)
	}
}
export default {
	state,
	mutations
}
