import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	// mode: 'history'
})

const HAS_LOGIN = false

router.beforeEach((to, from, next) => {			// 路由守卫
	to.meta & setTitle(to.meta.title)

	if (to.name !== 'login') {
		if (HAS_LOGIN) {
			next()
		} else next({ name: 'login'})
	} else {
		if (HAS_LOGIN) {
			next({ name: 'Home' })
		} else {
			next()
		}
	}
})

router.afterEach((to, from) => {							// 路由跳转之后
	// loading = false

})

export default router
