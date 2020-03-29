<template>
	<div class="split-pane-cpn" ref="splitDom">
		<div class="left" :style="{ width: `${this.value * 100}%` }"></div>
		<div class="toggler" :style="{ width: `${this.togglerWidth}px`, left: `${this.togglerLeft}` }" @mousedown="handleToggler"></div>
		<div class="right" :style="{ left: `${this.value * 100}%` }"></div>
	</div>
</template>

<script>
export default {
	name: 'SplitPane',
	props: {
		value: {
			type: Number,
			default: .3
		},
		togglerWidth: {
			type: Number,
			default: 8
		},
		min: {
			type: Number,
			default: .1
		},
		max: {
			type: Number,
			default: .9
		}
	},
	computed: {
		togglerLeft() {
			return `calc(${this.value * 100}% - ${this.togglerWidth / 2}px)`
		}
	},
	data() {
		return {
			canMove: false,
			initOffset: 0
		}
	},
	methods: {
		handleToggler(event) {
			this.canMove = true
			const rect = event.target.getBoundingClientRect()
			this.initOffset = event.pageX - rect.left

			document.addEventListener("mousemove", this.handleMousemove)
			document.addEventListener("mouseup", this.handleMouseup)
		},
		handleMousemove(event) {
			if (!this.canMove) return
			const rect = this.$refs.splitDom.getBoundingClientRect()
			const offset = event.pageX - this.initOffset + this.togglerWidth / 2 - rect.left
			let offsetPercent = offset / rect.width
			if (offsetPercent > this.max) offsetPercent = this.max
			if (offsetPercent < this.min) offsetPercent = this.min
			this.$emit("update:value", offsetPercent)
		},
		handleMouseup(event) {
			this.canMove = false
			document.removeEventListener("mousemove", this.handleMousemove)
			document.removeEventListener("mouseup", this.handleMouseup)
		}
	}
}
</script>

<style lang="scss" scoped>
	.split-pane-cpn {
		height: 100%;
		position: relative;
	}
	.left {
		position: absolute;
		height: 100%;
		background-color: blue;
		left: 0;
		top: 0;
		bottom: 0;
	}
	.right {
		position: absolute;
		height: 100%;
		background-color: red;
		right: 0;
		top: 0;
		bottom: 0;
	}
	.toggler {
		position: absolute;
		height: 100%;
		background-color: yellow;
		z-index: 10;
		cursor: col-resize;
		user-select: none;
	}
</style>
