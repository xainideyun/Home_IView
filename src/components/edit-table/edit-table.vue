<template>
  <div>
    <Table :columns="insertColumns" :data="value"></Table>
  </div>
</template>

<script>
import cloneDeep from 'clone-deep'
export default {
  name: 'EditTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    columns() {
			this.initColumns()
		}
  },
  data() {
    return {
      insertColumns: [],
      editingId: '',
      editingContent: ''
    }
  },
  methods: {
    handleClick({ row, index, column }, event) {
      const editId = `${column.key}_${index}`
      if (editId == this.editingId) {
        const newVal = cloneDeep(this.value)
				newVal[index][column.key] = this.editingContent

				this.$emit('input', newVal)
				this.$emit('on-input-handle', { row, index, column, newVal: this.editingContent})
        this.editingId = ''
        this.editingContent = ''
      } else {
				this.editingId = `${column.key}_${index}`
				this.editingContent = row[column.key]
				this.$nextTick(() => {
					event.target.parentElement.parentElement.getElementsByTagName("input")[0].focus()
				})
      }
    },
    handleInput(val) {
      this.editingContent = val
    },
    initColumns() {
      const cols = this.columns.map(obj => {
        if (obj.render) return obj
        if (!obj.editable) return obj
        obj.render = (h, { row, index, column }) => {
          const editStatus = this.editingId === `${column.key}_${index}`
          return (
            <div>
              {editStatus ? (
                <i-input on-input={this.handleInput} value={row[column.key]} />
              ) : (
                <span>{row[column.key]}</span>
              )}
              <i-button
                on-click={this.handleClick.bind(this, { row, index, column })}
              >
                {editStatus ? '保存' : '编辑'}
              </i-button>
            </div>
          )
        }
        return obj
      })
      this.insertColumns = cols
    }
  },
  mounted() {
		this.initColumns()
	}
}
</script>

<style>
</style>
