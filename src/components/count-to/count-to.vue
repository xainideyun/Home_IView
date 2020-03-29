<template>
	<div>
		<slot name="left"></slot>
		<span :id="eleId" :class="countToClass"></span>
		<slot name="right"></slot>
	</div>
</template>

<script>
import CountUp from 'countup'
export default {
	computed: {
		eleId() {
			return `count_to_${this._uid}`
		},
		countToClass() {
			return [
				'count-to', this.cpnCls
			]
		}
	},
	data() {
		return {
			counter: {}
		}
	},
	props: {
		/**
		 * @description 计数开始值
		 */
		startVal: {
			type: Number,
			default: 0
		},
		/**
		 * @description 计数截止值
		 */
		endVal: {
			type: Number,
			default: 0,
			required: true
		},
		/**
		 * @description 保留几位小数
		 */
		decimals: {
			type: Number,
			default: 0
		},
		/**
		 * @description 动画时长
		 */
		duration: {
			type: Number,
			default: 1
		},
		/**
		 * @description 是否使用变速效果
		 */
		useEasing: {
			type: Boolean,
			default: false
		},
		/**
		 * @description 是否使用分组
		 */
		useGrouping: {
			type: Boolean,
			default: true
		},
		/**
		 * @description 分组符号
		 */
		separator: {
			type: String,
			default: ','
		},
		/**
		 * @description 整数与小数的分隔符号
		 */
		decimal: {
			type: String,
			default: '.'
		},
		/**
		 * @description 动画延迟
		 */
		delay: {
			type: Number,
			default: 0
		},
		/**
		 * @description 组件样式
		 */
		cpnCls: {
			type: String,
			default: ''
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
				useEasing: this.useEasing,
				useGrouping: this.useGrouping,
				separator: this.separator,
				decimal: this.decimal
			})
			setTimeout(() => {
				this.counter.start()
			}, this.delay);
		})
	}
}
</script>

<style scoped>
	.count-to {
		color: green;
	}
</style>
