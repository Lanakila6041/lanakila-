import { Notification } from 'element-ui'
// let outletData = window.localStorage.getItem('outletData')
// let loggedOutletData = JSON.parse(localStorage.getItem('loggedOutletData'))
const state = {
	outletMenuEditRequestList: []
}
const getters = {
	outletMenuEditRequestList: state => state.outletMenuEditRequestList
}
const mutations = {
	removeEditedMenuItem (state, item) {
		let index = state.outletMenuEditRequestList.indexOf(item)
		state.outletMenuEditRequestList.splice(index, 1)
	},
	clearDataOutletMenuRequestData (state) {
		state.outletMenuEditRequestList = []
	},
	addOutletMenuEditedData (state, firstMenuEditData) {
		let diffCount = 0
		if (state.outletMenuEditRequestList.length === 0) {
			state.outletMenuEditRequestList.push(firstMenuEditData)
			Notification({
				title: 'Амжилттай',
				showClose: true,
				center: true,
				message: 'Илгээх хүсэлтийн жагсаалтанд нэмэгдлээ',
				type: 'success'
			})
		} else if (state.outletMenuEditRequestList.length > 0) {
			state.outletMenuEditRequestList.forEach(element => {
				if (element.id === firstMenuEditData.id) {
					diffCount = diffCount + 1
				}
			})
			if (diffCount > 0) {
				Notification({
					title: 'Алдаа',
					showClose: true,
					center: true,
					message: 'Энэхүү бүтээгдэхүүнийг засахаар оруулсан тул дахин оруулах боломжгүй',
					type: 'error',
					position: 'top-left'
				})
			} else if (diffCount === 0) {
				state.outletMenuEditRequestList.push(firstMenuEditData)
				Notification({
					title: 'Амжилттай',
					showClose: true,
					center: true,
					message: 'Илгээх хүсэлтийн жагсаалтанд нэмэгдлээ',
					type: 'success',
					position: 'top-left'
				})
			}
		}
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
