<template>
  <div class="loginBody" style="text-align: -webkit-center">
    <form style="width:30%;padding:20px;align-item:center" >
      <!-- <h3>Нэвтрэх</h3> -->
      <el-image
      style="width:200px;height: 200px"
      src='https://digitalmoon.in/wp-content/uploads/2020/06/graphic-design-banner-png.png'
      ></el-image>
		<div v-if="forgetPassword">
		<h3 style="margin-top:5%"><b>Нэвтрэх</b></h3>
		<el-form ref="form"  label-width="120px" :label-position="labelPosition">
			<el-form-item >
			<el-input style="width:400px; margin-top:40px" placeholder="мэйл хаяг" v-model="username" type="email" />
			</el-form-item>
			<el-form-item >
			<el-input style="width:400px;margin-top:20px" placeholder="Нууц үг" v-model="password" type="password" />
			</el-form-item>
		</el-form>
			<el-button style="width:400px; margin-top:20px;background-image: linear-gradient(to right, #900c3f , #ffc300);font-weight:bold;" @click="onSubmit()">
				НЭВТРЭХ
			</el-button>
			<el-button type="text" style="width:200px; margin-top:30px; font-weight:bold; color:gray" @click="typeChange()" >Бүртгүүлэх</el-button>
			<el-button type="text" style="width:200px; margin-top:30px; font-weight:bold; color:gray" @click="typeChange()">нууц үг мартсан</el-button>
		</div>
			<div v-if="!forgetPassword">
		<h3 style="margin-top:5%"><b>Бүртгүүлэх</b></h3>
		<el-form ref="form"  label-width="120px" :label-position="labelPosition">
			<el-form-item >
			<el-input style="width:400px; margin-top:40px" placeholder="мэйл хаяг" v-model="username" type="email" />
			</el-form-item>
			<el-form-item >
			<el-input style="width:400px;margin-top:20px" placeholder="Нууц үг" v-model="password" type="password" />
			</el-form-item>
		</el-form>
			<el-button style="width:400px; margin-top:20px;background-image: linear-gradient(to right, #900c3f , #ffc300);font-weight:bold;" @click="adduser()">
				Бүртгүүлэх
			</el-button>
			<el-button type="text" style="width:200px; margin-top:30px; font-weight:bold; color:gray" @click="typeChange()" >Нэвтрэх</el-button>
			<el-button type="text" style="width:200px; margin-top:30px; font-weight:bold; color:gray" @click="typeChange()">Бүртгэл сэргээх</el-button>
		</div>
	</form>
  </div>
</template>

<script>
// import { signIn } from '@/utils/auth.js'
import services from '../helpers/partnerServices'
import axios from 'axios'
import toktokLogo from '../../src/assets/toktok_logo.png'
export default {
	created () {
		if (localStorage.getItem('type') === 'partner') {
			if (localStorage.getItem('token')) {
				window.location = '/main'
			}
		}
	},
	data () {
		return {
			labelPosition: 'top',
			username: '',
			password: '',
			url: toktokLogo,
			forgetData: {
				email: ''
			},
			sendData: {
				email: '',
				resetPassword: '',
				password: ''
			},
			forgetPassword: true,
			newPasswordView: false
		}
	},
	methods: {
		changePassword () {
			if (
				this.sendData.email === '' ||
				this.sendData.resetPassword === '' ||
				this.sendData.password === ''
			) {
				this.$notify.error({
					title: 'Алдаа гарлаа',
					message: 'Аль нэг талбар бөглөөгүй байна.'
				})
			} else {
				services.checkOutletResetPassword(this.sendData).then(data => {
					if (data.status === 'success') {
						this.$notify({
							title: 'Амжилттай',
							message: 'Нууц үг амжилттай сэргээгдлээ',
							type: 'success'
						})
						location.reload()
					} else {
						this.$notify({
							title: 'Алдаа',
							message:
								'Нууц үг сэргээхэд алдаа гарлаа.Мэдээллээ шалгаад дахин оролдоно уу!!!',
							type: 'Error'
						})
					}
				})
			}
		},
		changeBackStatus () {
			this.forgetPassword = true
		},
		typeChange () {
			this.forgetPassword = !this.forgetPassword
			this.newPasswordView = false
			//  setTimeout(function(){
			//      this.forgetPassword = false;
			//  }.bind(this),1000);
		},
		changeAuth () {
			localStorage.setItem('type', 'employee')
			window.location = '/login'
		},
		onSubmit () {
			var payload = {
				user_name: this.username,
				password: this.password
			}
			axios.post('http://localhost:8000/api/loginUser', payload)
				.then((res) => {
					console.log(res)
					if (res.data.status > 0) {
						this.$notify({
							title: 'Амжилттай',
							message: 'Та тавтай морилно уу',
							type: 'success'
						})
						localStorage.setItem('user', JSON.stringify(res.data.userInfo))
						// localStorage.setItem('outlet', data.outlets)
						localStorage.setItem('token', 'dsdsadsadsa256415105')
						window.location = '/main'
						// this.loadData ()
					} else {
						this.$notify({
							title: 'Анхаар',
							message: 'Нэвтрэх нэр нууц үгээ шалгана уу',
							type: 'error'
						})
					}
				})
		},
		adduser () {
			var payload = {
				user_name: this.username,
				password: this.password
			}
			axios.post('http://localhost:8000/api/addUser', payload)
				.then((res) => {
					if (res.data.status === 200) {
						this.$notify({
							title: 'Амжилттай',
							message: 'Таны бүртгэл амжилттай үүслээ',
							type: 'success'
						})
						location.reload()
					} else {
						this.$notify({
							title: 'Анхаар',
							message: 'Бүртгэл үүсгэх явцад алдаа гарлаа',
							type: 'error'
						})
					}
				})
		}
	}
}

</script>
<style scoped>
.loginBody{
  text-align: center;
  margin-top: 7%;
}
</style>
