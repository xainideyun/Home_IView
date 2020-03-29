<template>
	<div>
		<a-input v-model="mes" />
		<p>
			{{mes}}
		</p>
		<button @click="add">增加</button>
	</div>
</template>

<script>
import AInput from '_c/Ainput.vue'
export default {
	components: {
		AInput
	},
	data() {
		return {
			mes: ''
		}
	},
	methods: {
		add() {
			this.$bus.$emit("on-click", 1)
		}
	}
}
</script>

<style>

</style>
