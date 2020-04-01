<template>
  <div>
    <a-menu :list="list"></a-menu>
  </div>
</template>

<script>
import Menu from '_c/a-menu'
const { AMenu } = Menu
export default {
  components: {
    AMenu
  },
  data() {
    return {
      list: [
        { title: '首页' },
        { title: '关于' },
        {
          title: '组织架构',
          children: [
            { title: '公司' },
            {
              title: '部门',
              children: [
                { title: '财务部' },
                { title: '行政部' },
                {
                  title: '销售部',
                  children: [
                    { title: '小组1' },
                    { title: '小组2' },
                    { title: '小组3' }
                  ]
                }
              ]
            },
            { title: '员工' }
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>
