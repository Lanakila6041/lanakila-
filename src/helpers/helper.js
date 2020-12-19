import { Notification, Message } from 'element-ui'

export function showNotification (type, title, msg) {
	if (type !== 'error') {
		Notification({
			title: title,
			message: msg,
			type: type
		})
	} else {
		Notification.error({
			title: title,
			message: msg
		})
	}
}
export function showMessage (type, msg) {
	if (type === '') {
		Message({
			showClose: true,
			center: true,
			message: msg,
			type: type
		})
	} else if (type === 'error') {
		Message.error({
			showClose: true,
			center: true,
			message: msg
		})
	} else {
		Message({
			showClose: true,
			center: true,
			message: msg,
			type: type
		})
	}
}
