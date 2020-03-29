const users = ['孙小双', '华天晓', '李怡然']

export default {
	changeUser(state, params) {
		state.currentName = users[+(Math.random() * users.length).toFixed()] + params.params
		console.log(state.currentName)
	},
	changeAppName(state, params) {
		state.appName = params
	}
}
