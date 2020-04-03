import { doCustomTimes } from '@/lib/tools'
import Mock from 'mockjs'

export const getTableData = () => {
	const template = {
		name: '@name',
		// 'remark|5': '@cword',
		'age|18-32': 0,
		email: '@email'
	}
	let arr = []
	doCustomTimes(5, () => {
		arr.push(Mock.mock(template))
	})
	return arr
}
