<template>
	<div>
		<button @click="toRequest">请求</button>
	</div>
</template>

<script>
import { getUserInfo } from '@/api/user'
export default {
	methods: {
		toRequest() {
			let userId = +(Math.random() * 100).toFixed()
			getUserInfo({ userId }).then(res => {
				console.log(res)
			}).catch(err => {
				console.log(err)
			})
		}
	}
}
</script>

<style>

</style>
