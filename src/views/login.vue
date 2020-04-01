<template>
  <div>
    <p>
      用户名：
      <input type="text" v-model="username" />
    </p>
    <p>
      密码：
      <input type="password" v-model="password" @keyup.enter="handleLogin" />
    </p>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
		...mapActions('user', ['login']),
    handleLogin() {
			this.login({ username: this.username, password: this.password })
			.then(() => {
				this.$router.push({ name: 'Home' })
			})
			.catch(err => {
				console.log(err)
			})
		}
  }
}
</script>

<style>
</style>
