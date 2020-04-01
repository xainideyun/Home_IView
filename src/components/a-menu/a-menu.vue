<template>
	<ul>
		<a-menu-item v-for="(item, index) in list" :key="`menu_item_${index}`" :menu="item"></a-menu-item>
	</ul>
</template>

<script>
import AMenuItem from './a-menu-item.vue'
export default {
	name: 'AMenu',
	components: {
		AMenuItem
	},
	props: {
		list: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style lang="scss">
	ul {
		list-style: none;
		margin-left: 20px;
		* {
			list-style: none;
		}
		li {
			text-align: left;
		}
	}
</style>
