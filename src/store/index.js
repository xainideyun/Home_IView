import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import getters from './getters'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: process.env.NODE_ENV === 'production' ? false : true,	// 生产环境关闭严格模式
	state,
	getters,
  mutations,
  actions,
  modules: {
		user
	},
	plugins: [saveInLocal]
})
