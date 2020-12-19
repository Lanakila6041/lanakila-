<template>
  <div class="about" style="height:100%">
    <h1>Тавтай морилно уу</h1>
    <!-- {{username}} -->
    <!-- <DriverList/> -->
  </div>
</template>
<script>
import { getUserName } from '@/utils/auth.js'
// import DriverList from '../components/DriverList.vue'
export default {
	created () {
		this.getUser()
	},
	components: {
		// DriverList
	},
	data () {
		return {
			username: ''
		}
	},
	methods: {
		async getUser () {
			this.username = await getUserName()
		}
	}
}

</script>
