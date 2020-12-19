import Vue from 'vue'
import Vuex from 'vuex'
import token from '../token'
import settlementData from '../settlementData'
import outletMenuRequestList from '../outletMenuRequestList'
import accountantForSettlement from '../accountantForSettlement'
import { authentication } from '../auth'
import outlet from '../outlet'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		authentication,
		token,
		outlet,
		settlementData,
		outletMenuRequestList,
		accountantForSettlement
	}
})
