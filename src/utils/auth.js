import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Message } from 'element-ui'
function getUser () {
	return Auth.currentAuthenticatedUser()
		.then(user => {
			if (user && user.signInUserSession) {
				return user
			} else {
				return null
			}
		})
		.catch(err => {
			// if (err === '')
			// eslint-disable-next-line
      console.log(err)
		})
}

function getGroups () {
	return Auth.currentAuthenticatedUser()
		.then(user => {
			if (user && user.signInUserSession) {
				return user.signInUserSession.accessToken.payload['cognito:groups']
			} else {
				return null
			}
		})
		.catch(err => {
			// eslint-disable-next-line
    console.log(err)
		})
}

function getUserName () {
	return Auth.currentAuthenticatedUser()
		.then(user => {
			if (user && user.signInUserSession) {
				return user.attributes.email.split('@')[0]
			} else {
				return null
			}
		})
		.catch(err => {
			// eslint-disable-next-line
    console.log(err)
		})
}

function getEmail () {
	return Auth.currentAuthenticatedUser()
		.then(user => {
			if (user && user.signInUserSession) {
				return user.attributes.email
			} else {
				return null
			}
		})
		.catch(err => {
			// eslint-disable-next-line
    console.log(err)
		})
}

async function getToken () {
	await Auth.currentSession()
		.then(session => {
			if (session) {
				return session.idToken.jwtToken
			} else {
				return null
			}
		})
		.catch(err => {
			// eslint-disable-next-line
			console.log(err)
			return err
		})
}

function signUp (username, password) {
	return Auth.signUp({
		username,
		password,
		attributes: {
			email: username
		}
	})
		.then(data => {
			AmplifyEventBus.$emit('localUser', data.user)
			if (data.userConfirmed === false) {
				AmplifyEventBus.$emit('authState', 'confirmSignUp')
			} else {
				AmplifyEventBus.$emit('authState', 'signIn')
			}
			return data
		})
		.catch(err => {
			// eslint-disable-next-line
    console.log(err)
		})
}

function confirmSignUp (username, code) {
	return Auth.confirmSignUp(username, code)
		.then(data => {
			AmplifyEventBus.$emit('authState', 'signIn')
			return data // 'SUCCESS'
		})
		.catch(err => {
			// eslint-disable-next-line
    console.log(err)
		})
}

function resendSignUp (username) {
	return Auth.resendSignUp(username)
		.then(() => {
			return 'SUCCESS'
		})
		.catch(err => {
			// eslint-disable-next-line
    console.log(err)
		})
}

async function signIn (username, password) {
	try {
		const user = await Auth.signIn(username, password)
		if (user) {
			AmplifyEventBus.$emit('authState', 'signedIn')
		}
	} catch (err) {
		if (err.code === 'UserNotConfirmedException') {
			console.log('Хэрэглэгчийг баталгаажуулаагүй байна.!')
			Message({
				message: 'Хэрэглэгчийг баталгаажуулаагүй байна.!',
				duration: 2500,
				type: 'error',
				showClose: 1
			})
			setTimeout(function () {
				location.reload()
			}, 3000)
			// The error happens if the user didn't finish the confirmation step when signing up
			// In this case you need to resend the code and confirm the user
			// About how to resend the code and confirm the user, please check the signUp part
		} else if (err.code === 'PasswordResetRequiredException') {
			console.log('Хэрэглэгчийг нууц үгийг сэргээх шаардлагтай.!')
			Message({
				message: 'Хэрэглэгчийг нууц үгийг сэргээх шаардлагтай.!',
				duration: 2500,
				type: 'error',
				showClose: 1
			})
			setTimeout(function () {
				location.reload()
			}, 3000)
			// The error happens when the password is reset in the Cognito console
			// In this case you need to call forgotPassword to reset the password
			// Please check the Forgot Password part.
		} else if (err.code === 'NotAuthorizedException') {
			console.log('Хэрэглэгчийн нууц үг эсвэл имайл буруу байна.!!')
			setTimeout(function () {
				location.reload()
			}, 3000)
			// The error happens when the incorrect password is provided
		} else if (err.code === 'UserNotFoundException') {
			console.log('Хэрэглэгчийн нууц үг эсвэл имайл буруу байна.!')
			Message({
				message: 'Хэрэглэгчийн нууц үг эсвэл имайл буруу байна.!!',
				duration: 2500,
				type: 'error',
				showClose: 1
			})
			setTimeout(function () {
				location.reload()
			}, 3000)
			// The error happens when the supplied username/email does not exist in the Cognito user pool
		} else {
			// console.log(err)
		}
		return err
	}
}

function signOut () {
	return Auth.signOut()
		.then(data => {
			AmplifyEventBus.$emit('authState', 'signedOut')
			return data
		})
		.catch(err => {
			// eslint-disable-next-line
    console.log(err)
		})
}

export {
	getUser,
	signUp,
	confirmSignUp,
	resendSignUp,
	signIn,
	signOut,
	getToken,
	getGroups,
	getUserName,
	getEmail
}
