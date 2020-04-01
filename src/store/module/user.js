import { login } from '@/api/user'
import { setToken } from '@/lib/util'

const state = {
	userName: '华天晓'
}
const mutations = {

}
const actions = {
	login({ commit }, user) {
		return new Promise(function(resolve, reject){
			login(user).then(res => {
				if (res.code === 200 && res.token) {
					setToken(res.token)
					resolve()
				} else {
					reject(new Error('系统错误'))
				}
			})
			.catch(err => {
				reject(new Error(err))
			})
		})
	},
	logout() {
		return new Promise((resolve, reject) => {
			setToken('')
			resolve()
		})
	}
}
export default {
	state, mutations, actions, namespaced: true
}
