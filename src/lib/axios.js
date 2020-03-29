import axios from 'axios'
import { baseURL } from '@/config'

class HttpRequest {
	constructor(baseUrl = baseURL) {
		this.baseUrl = baseUrl
		this.queue = {}		// 请求队列的标识对象，用于判断是否对个请求在同时进行
	}
	getInsideConfig() {
		const config = {
			baseURL: this.baseUrl,
			method: 'get',		// 默认get请求
			headers: {
				// 请求头
			}
		}
		return config
	}
	interceptors(instance, url) {
		instance.interceptors.request.use(config => {			// 全局的请求拦截器
			// 添加全局的loading...
			if (Object.keys(this.queue).length === 0) {
				// 如果请求队列为空，则显示加载中
				// Spin.show()
			}
			this.queue[url] = true
			return config
		}, err => {
			return Promise.reject(err)
		})
		instance.interceptors.response.use(res => {				// 全局的相应拦截器

			delete this.queue[res.url]
			if (!Object.keys(this.queue)) {
				// 如果请求列表为空，则隐藏加载中
				// Spin.hide()
			}
			const { data, status } = res
			return { data, status }
		}, err => {
			delete this.queue[url]
			return Promise.reject(err)
		})
	}
	request(options) {
		const instance = axios.create()
		options = Object.assign(this.getInsideConfig(), options)
		this.interceptors(instance, options.url)
		return instance(options)
	}
}

export default HttpRequest
