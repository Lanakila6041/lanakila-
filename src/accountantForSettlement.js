const state = {
	selectedOutletData: {}
}
const getters = {
	selectedOutletData: state => state.selectedOutletData
}
const mutations = {
	addSelectedOutletData (state, data) {
		state.selectedOutletData = data
	}
	// saveOutletData (state) {
	// 	window.localStorage.setItem('outletData', state.outletData)
	// }
}
export default {
	state,
	mutations,
	getters
}
