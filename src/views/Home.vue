<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

		<h1>{{ flag }}</h1>

		<button @click="handleClick('type')">返回上一页</button>
		<button @click="handleClick('parent')">跳转到父页面</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	props: {
		flag: {
			type: String,
			default: 'liyiran'
		}
	},
  components: {
    HelloWorld
	},
	methods: {
		handleClick: function(type) {
			if (type === 'type') this.$router.back()
			else this.$router.push("/parent/child")
		}
	}
}
</script>
