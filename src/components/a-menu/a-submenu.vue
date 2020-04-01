<template>
	<ul>
		<li v-for="(item, index) in list" :key="`menu_item_${index}`">
			<span>{{ item.title }}</span>
			<a-submenu v-if="item.children && item.children.length > 0" :list="item.children"></a-submenu>
		</li>
		<!-- <a-menu-item v-for="(item, index) in list" :key="`menu_item_${index}`" :menu="item"></a-menu-item> -->
	</ul>
</template>

<script>
// import AMenuItem from './a-menu-item.vue'
export default {
	name: 'ASubmenu',
	// components: {
	// 	AMenuItem
	// },
	props: {
		list: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style>

</style>
