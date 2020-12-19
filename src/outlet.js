let outletData = window.localStorage.getItem('outletData')
let loggedOutletData = JSON.parse(localStorage.getItem('loggedOutletData'))
const state = {
	outletData: outletData,
	loggedOutletData: loggedOutletData
}
const getters = {
	loggedOutlet: state => state.loggedOutletData
}
const mutations = {
	addToOutletData (state, outletData) {
		state.outletData = outletData
		this.commit('saveOutletData')
	},
	loggedOutlet (state, outletInformation) {
		state.loggedOutletData = outletInformation
		this.commit('saveOutletData')
	},
	saveOutletData (state) {
		window.localStorage.setItem('outletData', state.outletData)
	}
}
export default {
	state,
	getters,
	mutations
}
