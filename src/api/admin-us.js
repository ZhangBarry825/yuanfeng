import request from '@/utils/request'

export function getAboutUs(data) {
  return request({
    url: '/background-aboutUs/queryAllAboutUsInfo',
    method: 'post',
    data
  })
}
export function saveAboutUs(data) {
  return request({
    url: '/background-aboutUs/update',
    method: 'post',
    data
  })
}

