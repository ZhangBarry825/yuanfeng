import request from '@/utils/request'

export function fetchCaseGroupList(data) {
  return request({
    url: '/webfront-index/queryCaseViewGroup',
    method: 'get',
    params: data
  })
}
export function fetchCaseList(data) {
  return request({
    url: '/webfront-caseViewSubpage/queryCaseViewByPage',
    method: 'get',
    params: data
  })
}
export function fetchCaseDetail(data) {
  return request({
    url: '/webfront-caseViewSubpage/queryById',
    method: 'get',
    params: data
  })
}
