import axios from './index'

export const getUserInfo = ({ userId }) => {
	return axios.request({
		url: '/user',
		method: 'post',
		data: { userId }
	})
}
