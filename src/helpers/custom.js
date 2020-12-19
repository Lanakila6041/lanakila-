import config from '@/config/index'
export const mainRequests = {
	post,
	get,
	postLocal,
	postComplaint,
	getComplaint,
	getRider,
	postRider,
	getComplaintCC,
	postComplaintCC,
	postLoginPartner,
	getOutletToken,
	postOutletToken,
	postAdmin
}
function handleResponseToken (response) {
	return response
		.text()
		.then(text => {
			const data = text && JSON.parse(text)
			if (!response.ok) {
				if (response.status === 401) {
					logout()
					// location.reload(true)
				}
				const error = (data && data.message) || response.statusText
				return Promise.reject(error)
			}

			return data
		})
		.catch(err => {
			return Promise.reject(err)
		})
}
function handleResponse (response) {
	return response
		.text()
		.then(text => {
			const data = text && JSON.parse(text)
			if (!response.ok) {
				if (response.status === 401) {
					//   logout()npm run serve
					location.reload(true)
				}

				const error = (data && data.message) || response.statusText
				return Promise.reject(error)
			}

			return data
		})
		.catch(err => {
			return Promise.reject(err)
		})
}
async function postLoginPartner (url, payload) {
	let promise = new Promise((resolve, reject) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		}
		fetch(`${config.MANAGE_PATH}` + url, requestOptions)
			.then(handleResponse)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error)
			})
	})
	let result = await promise
	return result
}
async function post (url, payload) {
	const promise = new Promise((resolve, reject) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		}
		fetch(`${config.BASE_SERVER_MANAGE_PATH}` + url, requestOptions)
			.then(handleResponse)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error)
			})
	})
	const result = await promise
	return result
}
async function postAdmin (url, payload) {
	const promise = new Promise((resolve, reject) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		}
		fetch(`${'https://rest.toktok.mn'}` + url, requestOptions)
			.then(handleResponse)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error)
			})
	})
	const result = await promise
	return result
}
async function get (url) {
	const promise = new Promise((resolve, reject) => {
		// const requestOptions = {
		//   method: 'POST',
		//   headers: { 'Content-Type': 'application/json' }
		// }
		fetch(`${config.BASE_SERVER_MANAGE_PATH}` + url)
			.then(handleResponse)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error)
			})
	})
	const result = await promise
	return result
}

async function postComplaint (url, payload) {
	const promise = new Promise((resolve, reject) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		}
		fetch(`${config.COMPLAINT_SERVER}` + url, requestOptions)
			.then(handleResponse)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error)
			})
	})
	const result = await promise
	return result
}
async function postComplaintCC (url, payload) {
	const promise = new Promise((resolve, reject) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		}
		fetch(`${config.COMPLAINT_SERVER_CC}` + url, requestOptions)
			.then(handleResponse)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error)
			})
	})
	const result = await promise
	return result
}
async function getComplaint (url) {
	const promise = new Promise((resolve, reject) => {
		// const requestOptions = {
		//   method: 'POST',
		//   headers: { 'Content-Type': 'application/json' }
		// }
		fetch(`${config.COMPLAINT_SERVER}` + url)
			.then(handleResponse)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error)
			})
	})
	const result = await promise
	return result
}
async function getComplaintCC (url) {
	const promise = new Promise((resolve, reject) => {
		// const requestOptions = {
		//   method: 'POST',
		//   headers: { 'Content-Type': 'application/json' }
		// }
		fetch(`${config.COMPLAINT_SERVER_CC}` + url)
			.then(handleResponse)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error)
			})
	})
	const result = await promise
	return result
}
async function getRider (url) {
	const promise = new Promise((resolve, reject) => {
		// const requestOptions = {
		//   method: 'POST',
		//   headers: { 'Content-Type': 'application/json' }
		// }
		fetch(`${config.BASE_SERVER_RIDER_PATH}` + url)
			.then(handleResponse)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error)
			})
	})
	const result = await promise
	return result
}
async function postRider (url, payload) {
	const promise = new Promise((resolve, reject) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		}
		fetch(`${config.BASE_SERVER_RIDER_PATH}` + url, requestOptions)
			.then(handleResponse)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error)
			})
	})
	const result = await promise
	return result
}
async function getOutletToken (url) {
	let promise = new Promise((resolve, reject) => {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer '
			}
		}
		var token = window.localStorage.getItem('token')
		if (token) {
			requestOptions.headers.Authorization = 'Bearer ' + token
			fetch(`${config.MANAGE_PATH}` + url, requestOptions)
				.then(handleResponseToken)
				.then(data => {
					resolve(data)
				})
		} else {
			alert('token awch chadsangvi')
		}
	})
	let result = await promise
	return result
}
async function postOutletToken (url, payload) {
	let promise = new Promise((resolve, reject) => {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'no-cache, private, proxy-revalidate',
				Authorization: 'Bearer '
			},
			body: JSON.stringify(payload)
		}
		var token = window.localStorage.getItem('token')
		if (token) {
			requestOptions.headers.Authorization = 'Bearer ' + token
			fetch(`${config.MANAGE_PATH}` + url, requestOptions)
				.then(handleResponseToken)
				.then(data => {
					resolve(data)
				})
				.catch(error => {
					reject(error)
				})
		} else {
			alert('token awch chadsangvi', reject)
		}
	})
	let result = await promise
	return result
}
async function postLocal (url, payload) {
	const promise = new Promise((resolve, reject) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		}
		fetch(`${config.local}` + url, requestOptions)
			.then(handleResponse)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error)
			})
	})
	const result = await promise
	return result
}

function logout () {
	localStorage.removeItem('loggedOutlet')
	localStorage.removeItem('user')
	localStorage.removeItem('outlet')
	localStorage.removeItem('userType')
	localStorage.removeItem('outletData')
	localStorage.clear()
}
