<template>
  <div class="layout">
    <Layout class="layout-wrapper">
      <Sider collapsible v-model="isCollapsed" hide-trigger :collapsed-width="78" >
        <span>菜单</span>
      </Sider>
      <Layout>
				<Header class="header-wrapper">
					<Icon type="md-menu" size="30" @click.native="collapsedHandle" :class="iconCls" />
				</Header>
				<Content class="content-wrapper">
					<Breadcrumb class="breakcrumb">
						<BreadcrumbItem>首页</BreadcrumbItem>
						<BreadcrumbItem>布局</BreadcrumbItem>
						<BreadcrumbItem>栅格</BreadcrumbItem>
					</Breadcrumb>
					<Card class="card-wrapper">
						<router-view />
					</Card>
				</Content>
			</Layout>
    </Layout>
  </div>
</template>

<script>
export default {
	data() {
		return {
			isCollapsed: false
		}
	},
	computed: {
		iconCls() {
			return this.isCollapsed ? 'icon-collapsed' : ''
		}
	},
	methods: {
		collapsedHandle() {
			this.isCollapsed = !this.isCollapsed
		}
	}
}
</script>

<style lang="scss">
	.layout {
		height: 100vh;
	}
	.layout-wrapper {
		height: 100vh;
	}
	.content-wrapper {
		padding: 10px;
	}
	.breakcrumb {
		margin-bottom: 10px;
		text-align: left;
	}
	.header-wrapper {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		color: #fff;
		padding: 0;

		i {
			cursor: pointer;
		}
		.icon-collapsed {
			transform: rotateZ(90deg);
			transition: transform .3s ease;
		}
	}
	.card-wrapper {
		min-height: calc(100vh - 120px)
	}
</style>
