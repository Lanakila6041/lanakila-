import { mainRequests } from './custom'
// import { getGroups } from '../utils/auth'
export default {
	resetPasswordOutlet (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.post('/kitchen/resetPassword', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	checkOutletResetPassword (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postLoginPartner(
					'/kitchen/checkOutletResetPassword ',
					payload
				)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getOutletByName () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/kitchen/getOutletByName')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	loginPartner (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postLoginPartner('/kitchen/login', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getPartnerInformation () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postOutletToken('/outlet/getOutletByInfo')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getCategories () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/getCategories')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getServices () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/getServices')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getSearchCategories () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/getSearchCategories')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getAllOutletName () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/getAllOutletName')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	uploadBanner (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postAdmin('/admin/uploadAppBanner', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getOutletTimeTable () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/getOutletTimeTable')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getOutletPolygon () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/getOutletPolygon')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	saveAdminEditedOutletByInfo (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postOutletToken('/outlet/saveAdminEditedOutletByInfo', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	saveAdminEditedScheduleOutlet (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postOutletToken('/kitchen/saveAdminEditedScheduleOutlet', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	updatePolygon (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/saveAdminEditedScheduleOutlet', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getMenusByOutlet () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/getMenus')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	// settlement
	getSettlementForPartner () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/partnersettlement/getSettlementForPartner')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getPartnerDailySettlements (id) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/partnersettlement/getPartnerDailySettlements?id=' + id)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getOrdersBySettlement (id) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/partnersettlement/getOrdersBySettlement?id=' + id)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	settlementhistory () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/partnersettlement/settlementhistory')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	updateBalanceNote (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postOutletToken('/partnersettlement/updateBalanceNote', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	checkAndAccept (id) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/partnersettlement/checkAndAccept?id=' + id)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getEditRequests () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/getEditRequests')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getEditedRequestHistories () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/getEditedRequestHistories')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getEditedRequestHistory (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postOutletToken('/outlet/getEditedRequestHistory', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	sendEditedMenus (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postOutletToken('/outlet/sendEditedMenus', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getWaitProducts () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/getWaitProducts')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getEditedMenuHistories  () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getOutletToken('/outlet/getEditedMenuHistories')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getEditedMenuHistory (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postOutletToken('/outlet/getEditedMenuHistory', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	}
}
