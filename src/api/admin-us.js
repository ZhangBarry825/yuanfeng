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


export function getInformation(data) {
  return request({
    url: '/webfront-index/queryBottomInfo',
    method: 'post',
    data
  })
}
export function saveInformation(data) {
  return request({
    url: '/background-aboutUs/updateContactUs',
    method: 'post',
    data
  })
}
