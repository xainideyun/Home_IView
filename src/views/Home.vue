<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

		<h1>{{ flag }}</h1>

		<button @click="handleClick('type')">返回上一页</button>
		<button @click="handleClick('parent')">跳转到父页面</button>
		<p>
			<button @click="handleLogout">登出</button>
			<button @click="handleUserList">用户列表</button>
		</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserList } from '@/api/user'
import { mapActions } from 'vuex'


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
		...mapActions('user', ['logout']),
		handleClick: function(type) {
			if (type === 'type') this.$router.back()
			else this.$router.push("/parent/child")
		},
		async handleLogout() {
			await this.logout()
			this.$router.push({ name: 'login' })
		},
		handleUserList() {
			getUserList().then(res => {
				console.log(res)
			}).catch(err => {
				// console.log(err)
			})
		}
	}
}
</script>
