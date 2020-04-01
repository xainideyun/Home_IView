import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import {
	setTitle,
	getToken
} from '../lib/util'


Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	// mode: 'history'
})

const HAS_LOGIN = false

router.beforeEach((to, from, next) => { // 路由守卫
	to.meta && setTitle(to.meta.title)
	const token = getToken()

	if (token) {
		if (to.name === 'login') {
			next({ name: 'Home' })
		} else {
			next()
		}
	} else {
		if (to.name === 'login') {
			next()
		} else {
			next({
				name: 'login'
			})
		}
	}
})

router.afterEach((to, from) => { // 路由跳转之后
	// loading = false

})

export default router
