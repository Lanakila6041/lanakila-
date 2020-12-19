<template>
  <div>
      <div>
		<calendar-View></calendar-View>
      </div>
  </div>
</template>

<script>
// import services from '../../helpers/partnerServices'
import calendarView from '../../partnerComponents/calendarView.vue'
export default {
	components: {
		calendarView
	},
	created () {
		this.load = true
		// services.getOutletByName().then(loggedOutlet => {
		// 	// localStorage.setItem('loggedOutlet', JSON.stringify(loggedOutlet))
		// 	this.outlet = loggedOutlet
		// 	this.load = false
		// })
	},
	data () {
		return {
			load: false,
			outlet: null
		}
	},
	methods: {
	}
}
</script>
<style scoped>
.loginBody{
  margin-left: 1%;
}
</style>
