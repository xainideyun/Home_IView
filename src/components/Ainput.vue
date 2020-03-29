<template>
	<div>
		<input @input="handleInput" :value="val" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			val: ''
		}
	},
	methods: {
		handleInput(e) {
			this.$emit("input", e.target.value)
		}
	}
}
</script>

<style>

</style>
