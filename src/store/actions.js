import api from '@/api/app'

export default {
	async getAppName({ commit }) {
		const res = await api.getAppName().catch((e) => console.log(e))
		if (res instanceof Object)
		commit('changeAppName', res.msg)
	}
}
