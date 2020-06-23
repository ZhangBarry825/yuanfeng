import request from '@/utils/request'

export function fetchBannerList(data) {
  return request({
    url: '/webfront-index/querySlideshow',
    method: 'get',
    params: data
  })
}
export function fetchDataList(data) {
  return request({
    url: '/webfront-index/queryCompanyInfo',
    method: 'get',
    params: data
  })
}
export function fetchAboutUsList(data) {
  return request({
    url: '/webfront-index/queryAboutUs',
    method: 'get',
    params: data
  })
}
export function fetchAdvantageList(data) {
  return request({
    url: '/webfront-index/queryOurAdvantages',
    method: 'get',
    params: data
  })
}
export function fetchProductGroupList(data) {
  return request({
    url: '/webfront-index/queryProductGroup',
    method: 'get',
    params: data
  })
}
export function fetchProductList(data) {
  return request({
    url: '/webfront-index/queryProduct',
    method: 'get',
    params: data
  })
}
export function fetchCustomerList(data) {
  return request({
    url: '/webfront-index/queryClientAreaImage',
    method: 'get',
    params: data
  })
}
export function fetchCaseGroupList(data) {
  return request({
    url: '/webfront-index/queryCaseViewGroup',
    method: 'get',
    params: data
  })
}
export function fetchCaseList(data) {
  return request({
    url: '/webfront-index/queryCaseView',
    method: 'get',
    params: data
  })
}
export function fetchNewsList(data) {
  return request({
    url: '/webfront-index/queryNewsInfo',
    method: 'get',
    params: data
  })
}
export function fetchFooterList(data) {
  return request({
    url: '/webfront-index/queryContactUs',
    method: 'get',
    params: data
  })
}
