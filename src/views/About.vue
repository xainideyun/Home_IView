<template>
  <div class="about">
    <h1>This is an about page</h1>
		<h2>{{ flag }}</h2>

		<button @click="toHome">跳转到首页</button>
  </div>
</template>

<script>
export default {
	props: {
		flag: {
			type: String,
			default: 'dsdsds'
		}
	},
	methods: {
		toHome() {
			this.$router.push({ name: "Home", query: { transitionName: 'router'}})
		}
	}
}
</script>
