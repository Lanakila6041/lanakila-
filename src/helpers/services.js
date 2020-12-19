import { mainRequests } from './custom'
// import { getGroups } from '../utils/auth'
export default {
	getpendingriders (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.get('/getpendingriders', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	riderOfflineRequestEmployee (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.post('/riderofflinerequestemployee', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	riderOfflineRequestEmployeeCancel (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.post('/riderOfflineRequestEmployeeCancel', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	// Complaints Start
	getSolvedComplaints (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postComplaint('getSolvedComplaints', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getUnSolvedComplaints (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postComplaint('getUnSolvedComplaints', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	solveComplaint (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postComplaint('solveComplaint', payload)
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
				.getComplaint('getAllOutletName')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	// Complaints End
	// rider start
	getRiderRequest (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postRider('/getRiderRequest', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getComplaintTypes () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.getComplaintCC('cc/getComplaintTypes').then((res) => {
					resolve(res)
				})
				.catch((err) => {
					reject(err)
				})
		})
	},
	registerComplaint (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests.postComplaintCC('cc/registerSuggest', payload).then((res) => {
				resolve(res)
			}).catch((err) => {
				reject(err)
			})
		})
	},
	generatePDF (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests.getRider('/generatePDF?start_time=' + payload.start_time + '&end_time=' + payload.end_time + '&driver_name=' + payload.driver_name)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getSettlementsForAccountant () {
		return new Promise(function (resolve, reject) {
			mainRequests
				.get('/outlet/getSettlementsForAccountant')
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getDailySettlementsForAccountant  (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.post('/accountantSettlement/getDailySettlementsForAccountant', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	loginUser (payload) {
		return new Promise(function (resolve, reject) {
			mainRequests
				.postLocal('/loginUser', payload)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	}
}
