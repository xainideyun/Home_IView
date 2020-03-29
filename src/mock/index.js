import Mock from 'mockjs'
import { baseURL } from '../config'
import { user } from './response/user'

Mock.mock(`${baseURL}/user`, user)

export default Mock
