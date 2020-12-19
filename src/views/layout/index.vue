<template>
  <!-- <el-container class="bv-example-row">
        <sidebar-menu :menu="menu" style="width:280px">
          <span slot="toggle-icon"><i class="el-icon-arrow-left"></i></span>
          <span slot="dropdown-icon"><i class="el-icon-caret-bottom"></i></span>
        </sidebar-menu>
</el-container> -->
<el-container style="height: 100%">
         <sidebar-menu :menu="menu" style="width:280px; position:relative">
          <span slot="toggle-icon"><i class="el-icon-arrow-left"></i></span>
          <span slot="dropdown-icon"><i class="el-icon-caret-bottom"></i></span>
        </sidebar-menu>
  <el-container>
    <el-header style="text-align:right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item><el-button @click="signOut" type="text">Гарах</el-button></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span><b style="color:gray">{{username}}</b></span>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import {
	signOut, getUserName, getEmail
} from '@/utils/auth.js'
import {
	SidebarMenu
} from 'vue-sidebar-menu'
export default {
	components: {
		SidebarMenu
	},
	created () {
		this.getUser()
	},
	data () {
		return {
			username: '',
			menu: [{
				header: true,
				title: 'ТОКТОК',
				hiddenOnCollapse: true
			},
			{
				href: '/',
				title: 'Хүсэлтийн жагсаалт',
				icon: 'el-icon-bicycle'
			},
			{
				// href: '/complaints',
				title: 'Гомдолын жагсаалт',
				icon: 'el-icon-collection',
				child: [
					{
						href: '/complaints/SolvedComplaints',
						title: 'Шийдвэрлэсэн',
						icon: 'el-icon-circle-check'
					},
					{
						href: '/complaints/UnSolvedComplaints',
						title: 'Шийдвэрлээгүй',
						icon: 'el-icon-warning-outline'
					}
				]
			},
			{
				href: '/settlement-list',
				title: 'Тооцоо нийлэх',
				icon: 'el-icon-s-data',
				child: [
					{
						href: '/settlement-list',
						title: 'Тооцоо нийлэх хүсэлтүүд',
						icon: 'el-icon-tickets'
					},
					{
						href: '/settlement-history',
						title: 'Тооцооны түүх',
						icon: 'el-icon-tickets'
					}
				]
			}
			]
		}
	},
	methods: {
		async signOut () {
			const res = await signOut()
			console.log(res)
		},
		async getUser () {
			this.username = await getUserName()
			this.$root.username = await getUserName()
			this.$root.email = await getEmail()
		}

	}
}

</script>
<style scoped>
 .el-header {
    background-color: #ffffff;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
