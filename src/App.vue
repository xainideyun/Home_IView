<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <!-- 命名路由 -->
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <transition-group :name="transitionName">
      <router-view key="default" />
      <!-- 命名视图 -->
      <router-view key="email" name="email" />
      <router-view key="tel" name="tel" />
    </transition-group>
  </div>
</template>

<script>
export default {
	data() {
		return {
			transitionName: ''
		}
	},
	watch: {
		'$route'() {
			if (this.$route.query && this.$route.query.transitionName) {
				this.transitionName = this.$route.query.transitionName
			} else {
				this.transitionName = ''
			}
		}
	}
}
</script>

<style lang="scss">
.router-enter {
	opacity: 0;
}
.router-enter-active {
	transition: opacity 1s ease;
}
.router-enter-to {
	opacity: 1;
}
.router-leave {
	opacity: 1;
}
.router-leave-active {
	transition: opacity 1s ease;
}
.router-leave-to {
	opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
