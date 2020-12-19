let settlementSelectDataPage = JSON.parse(window.localStorage.getItem('settlementSelectData'))
let settlementDayInfo = JSON.parse(window.localStorage.getItem('settlementDayData'))
const state = {
	settlementSelectData: settlementSelectDataPage,
	settlementDayData: settlementDayInfo
}
const mutations = {
	addToSettlementSelectedData (state, settlementData) {
		state.settlementSelectData = settlementData
		this.commit('saveSettlementData')
	},
	saveSettlementData (state) {
		window.localStorage.setItem('settlementSelectData', JSON.stringify(state.settlementSelectData))
	},
	addSettlementDayData (state, dayData) {
		state.settlementDayData = dayData
		this.commit('saveSettlementDayData')
	},
	saveSettlementDayData (state) {
		window.localStorage.setItem('settlementDayData', JSON.stringify(state.settlementDayData))
	}
}
export default {
	state,
	mutations
}
