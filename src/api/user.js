import axios from './index'

export const getUserInfo = ({
	userId
}) => {
	return axios.request({
		url: '/api/user',
		method: 'post',
		data: {
			userId
		}
	})
}

export const login = ({
	username,
	password
}) => {
	return axios.request({
		url: '/api/token/auth',
		method: 'get',
		params: {
			username,
			password
		}
	})
}
