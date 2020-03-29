<template>
	<div>
		<count-to ref="countCpn" :end-val='3620' :duration='3' :use-easing="true" cpnCls="myCount">
			<span></span>
		</count-to>
		<button @click="change">更新</button>
	</div>
</template>

<script>
import countTo from '_c/count-to'
export default {
	components: {
		countTo
	},
	methods: {
		change() {
			this.$refs.countCpn.update(300000)
		}
	}
}
</script>

<style lang="scss" >
	.myCount {
		font-size: 20px;
	}
</style>
