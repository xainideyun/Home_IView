import Mock from 'mockjs'
import { baseURL } from '../config'
import { user } from './response/user'
import { getTableData } from './response/data'

Mock.mock(`${baseURL}/user`, user)
Mock.mock(`${baseURL}/api/getTableData`, getTableData)

export default Mock
