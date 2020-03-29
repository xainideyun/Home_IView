<template>
	<div class="divHeight">
		<split-pane :value.sync="val">

		</split-pane>
	</div>
</template>

<script>
import SplitPane from '_c/split-pane'
export default {
	components: {
		SplitPane
	},
	data() {
		return {
			val: .3
		}
	}
}
</script>

<style scoped>
	.divHeight {
		height: 300px;
		width: 500px;
	}
</style>
