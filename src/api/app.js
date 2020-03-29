export default {
	getAppName() {
		return new Promise((resolve, reject) => {
			const err = false
			setTimeout(() => {
				if (!err) {
					resolve({ code: 200, msg: '简单猫科技（武汉）有限公司' })
				} else reject(err)
			}, 1000)
		})
	}
}
