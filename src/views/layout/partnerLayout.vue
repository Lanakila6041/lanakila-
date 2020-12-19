<template>
  <!-- <el-container class="bv-example-row">
        <sidebar-menu :menu="menu" style="width:280px">
          <span slot="toggle-icon"><i class="el-icon-arrow-left"></i></span>
          <span slot="dropdown-icon"><i class="el-icon-caret-bottom"></i></span>
        </sidebar-menu>
</el-container> -->
  <div class="body">
    <el-container :class="'wrapper-container ' + containerCollapsed">
      <sidebar-menu
        :menu="menu"
        style="position: fixed"
        class="sidebar-menu-partner"
        @toggle-collapse="onToggleCollapse"
      >
        <span slot="toggle-icon"><i class="el-icon-arrow-left"></i></span>
        <span slot="dropdown-icon"><i class="el-icon-caret-bottom"></i></span>
      </sidebar-menu>
      <el-container>
        <el-header
          style="
            text-align: right;
            font-size: 12px;
            border-bottom: 1px solid #dddddd;
          "
        >
          <el-dropdown>
			<el-avatar class="item" style="border:double" :size="35" >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9tG_NFfmLde3aA3q3p2yib1KJslRRNlJQg&usqp=CAU'/>
            </el-avatar>
            <el-dropdown-menu slot="dropdown">
				<!-- <router-link to="/PartnerEditRequestList">
				<el-dropdown-item>Хүсэлт</el-dropdown-item>
				</router-link> -->
              <el-dropdown-item>
                <el-button @click="signOut" type="text">Гарах</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>
              <!-- <el-button style="color:rgb(94, 94, 94)">{{username}}</el-button> -->
          </span>
        </el-header>
        <el-main class="mainLayout white-wrapper">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
	components: {
		SidebarMenu
	},
	created () {
		this.getUser()
	},
	data () {
		return {
			editReqCount: 0,
			containerCollapsed: '',
			username: '',
			imageURL: '',
			menu: [
				{
					header: true,
					title: 'Bujo Bujo V2',
					hiddenOnCollapse: true
				},
				{
					href: '/calendarView',
					title: 'Календар',
					icon: 'el-icon-date'
				},
				{
					href: '/MenuList',
					title: 'Хийх ажлын жагсаалт',
					icon: 'el-icon-notebook-1'
				},
				{
					href: '/PartnerEditRequestList',
					title: 'Ангиллаар харах',
					icon: 'el-icon-s-management'
				}
			]
		}
	},
	methods: {
		onToggleCollapse (collapsed) {
			if (collapsed) {
				this.containerCollapsed = 'collapsed'
			} else {
				this.containerCollapsed = ''
			}
		},
		async signOut () {
			localStorage.removeItem('token')
			localStorage.removeItem('user')
			localStorage.removeItem('outlet')
			localStorage.removeItem('loggedOutlet')
			window.location = 'partnerLogin'
		},
		async getUser () {
			this.username = JSON.parse(localStorage.getItem('user')).name
			this.$root.username = JSON.parse(localStorage.getItem('user')).name
			this.$root.email = JSON.parse(localStorage.getItem('user')).email
		}
	}
}
</script>
<style scoped>
.el-header {
  /* background-color: #ffffff; */
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.item {
  margin-top: 12px;
  margin-right: 20px;
}
</style>
