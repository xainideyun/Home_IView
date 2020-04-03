<template>
  <div>
    <edit-table :columns="columns" v-model="tableData" @on-input-handle="handleInput"></edit-table>
  </div>
</template>

<script>
import { getTableData } from '@/api/data'
import EditTable from '_c/edit-table'
export default {
  components: {
    EditTable
  },
  data() {
    return {
      tableData: [],
      columns: [
        { key: 'name', title: '姓名' },
        { key: 'age', title: '年龄', editable: true },
        { key: 'email', title: '邮箱', editable: true }
      ]
    }
  },
  methods: {
    handleInput({ row, index, column, newVal }) {
			console.log(row, index, column, newVal)
		}
  },
  mounted() {
    getTableData().then(res => {
      this.tableData = res
    })
  }
}
</script>

<style>
</style>
