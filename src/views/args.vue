<template>
	<div>
		{{$route.params}}
		{{$route.query}}
		<p>{{ name }}</p>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		default: 'sunxiaoshuang'
	},
	beforeRouteUpdate: (to, from, next) => {
		console.log(to, from)
	}
}
</script>

<style>

</style>
