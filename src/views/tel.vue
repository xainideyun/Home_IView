<template>
	<div>
		电话号码：{{mes}}
	</div>
</template>

<script>
export default {
	data() {
		return {
			mes: 1
		}
	},
	mounted() {
		this.$bus.$on("on-click", val => this.mes += val)
	}
}
</script>

<style>

</style>
