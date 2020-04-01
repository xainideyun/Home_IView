<template>
	<li>
		<span>{{ menu.title }}</span>
		<a-submenu v-if="menu.children && menu.children.length > 0" :list="menu.children"></a-submenu>
	</li>
</template>

<script>
import ASubmenu from './a-submenu.vue'
export default {
	name: 'AMenuItem',
	components: {
		ASubmenu
	},
	props: {
		menu: {
			type: Object,
			default: () => ({})
		}
	}
}
</script>

<style>

</style>
