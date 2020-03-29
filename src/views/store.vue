<template>
	<div>
		<p>用户名称：{{userName}}</p>
		<p>应用名称：{{appVersionName}}</p>
		<button @click="changeName">更改当前操作用户</button>
		<h1>当前操作用户：{{ currentName }}</h1>
		<hr />
		<button @click="setAppName">更改应用名称</button>
		<h3>当前的应用名称：{{ appName }}</h3>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { createNamespacedHelpers } from 'vuex'				// 模块命名固定空间的使用方式
const { mapState } = createNamespacedHelpers('user')
export default {
	computed: {
		...mapState([
			'userName',
		]),
		...mapGetters(['appVersionName']),
		currentName() {
			return this.$store.state.currentName
		},
		appName() {
			return this.$store.state.appName
		}
	},
	methods: {
		...mapMutations([
			'changeUser'
		]),
		changeName() {
			this.$store.commit({
				type: 'changeUser', params: Math.random()
			})
		},
		...mapActions(['getAppName']),
		setAppName() {
			this.getAppName()
		}
	}
}
</script>

<style>

</style>
