import { login } from '@/api/user'

const state = {
	userName: '华天晓'
}
const mutations = {

}
const actions = {
	login() {
		login().then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
	}
}
export default {
	state, mutations, actions, namespaced: true
}
