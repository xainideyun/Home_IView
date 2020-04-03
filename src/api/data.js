import axios from './index'
export const getTableData = () => {
	return axios.request({
		url: '/api/getTableData',
		methods: 'get'
	})
}
