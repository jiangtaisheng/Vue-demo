import request from '../utils/request'
//注册
export function register(data) {
  return request.post('user/register',data)
}

//注册
export function login(data) {
  return request.post('user/login',data)
}
