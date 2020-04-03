import Home from '@/views/Home.vue'

export default [
	{
		path: '/',
		name: 'Home',		// 命名路由
		alias: '/home_page',		// 命名别名
		props: route => ({
			flag: route.query.flag
		}),
		beforeEnter: (to, from, next) => {
			// if (from.name === 'About'){
			// 	alert('这是从about页面来的')
			// } else {
			// 	alert('这不是从about页面来的')
			// }
			next()
		},
		component: Home
	},
	{
		path: '/login',
		name:'login',
		component: () => import('@/views/login.vue')
	},
	{
		path: '/about',
		name: 'About',
		props: {
			flag: 'dsadasrfe'
		},
		meta: {
			title: '关于'
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')	// 懒加载
	},
	{
		path: '/args/:name',			// 动态路由
		name: 'args',
		component: () => import('@/views/args.vue'),
		props: true
	},
	{
		path: '/parent',			// 嵌套路由
		component: () => import('@/views/parent.vue'),
		children: [
			{
				path: 'child',
				component: () => import('@/views/child.vue')
			}
		]
	},
	{
		path: '/store',
		name: 'store',
		component: () => import("@/views/store.vue")
	},
	{
		path: '/axios',
		name: 'axios',
		component: () => import("@/views/Axios.vue")
	},
	{
		path: '/countTo',
		name: 'countTo',
		component: () => import("@/views/count-to.vue")
	},
	{
		path: '/split-pane',
		name: 'splitPane',
		component: () => import("@/views/split-pane.vue")
	},
	{
		path: '/menu',
		name: 'menu',
		component: () => import("@/views/menu.vue")
	},
	{
		path: '/table',
		name: 'table',
		component: () => import("@/views/table.vue")
	},
	{
		path: '/layout',
		name: 'layout',
		component: () => import("@/views/layout.vue"),
		children: [
			{
				path: 'hehe',
				component: () => import('@/views/Home.vue')
			}
		]
	},
	{
		path: '/named_view',		// 命名视图
		components: {
			default: () => import('@/views/child.vue'),
			email: () => import('@/views/email.vue'),
			tel: () => import('@/views/tel.vue'),
		}
	},
	{
		path: '/main',					// 重定向
		// redirect: {
		// 	name: 'Home'
		// }
		redirect: to => {
			return {
				name: 'Home'
			}
		}
	},
	{
		path: '*',			// 全局匹配，当所有的页面均匹配不到时，展示本页面
		component: () => import('@/views/error_404.vue')
	}
]
