import request from '@/utils/request'

export function fetchProductGroupList(data) {
  return request({
    url: '/webfront-index/queryProductGroup',
    method: 'get',
    params: data
  })
}
export function fetchProductList(data) {
  return request({
    url: '/webfront-productSubpage/queryProductByPage',
    method: 'get',
    params: data
  })
}
export function fetchProductDetail(data) {
  return request({
    url: '/webfront-productSubpage/queryById',
    method: 'get',
    params: data
  })
}
