import request from '@/utils/request'

export function getBannerList(data) {
  return request({
    url: '/background-slideshow/queryByPage',
    method: 'get',
    params: data
  })
}
export function updateBanner(data){
  return request({
    url: '/background-slideshow/update',
    method: 'post',
    data
  })
}
export function deleteBanner(data){
  return request({
    url: '/background-slideshow/delete',
    method: 'post',
    data
  })
}
export function addBanner(data){
  return request({
    url: '/background-slideshow/add',
    method: 'post',
    data
  })
}
