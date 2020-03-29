<template>
	<div>
		<count-up :end-val='3620' :duration='3' :use-easing="true" cpnCls="myCount">
			<span></span>
		</count-up>
	</div>
</template>

<script>
import countUp from '_c/count-to'
export default {
	components: {
		countUp
	}
}
</script>

<style lang="scss" scoped>
	.myCount {
		font-size: 20px;
	}
</style>
