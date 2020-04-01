import cookie from 'js-cookie'

export const setTitle = function(title) {
	document.title = title || '简单猫科技'
}

export const setToken = (token, key = 'token') => {
	cookie.set(key, token)
}

export const getToken = (key = 'token') => {
	return cookie.get(key)
}
