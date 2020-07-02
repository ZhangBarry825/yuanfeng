import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/background-login/toLogin',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(data) {
  return request({
    url: '/background-login/outLogin',
    method: 'post',
    data
  })
}
