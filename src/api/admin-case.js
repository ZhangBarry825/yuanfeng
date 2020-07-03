import request from '@/utils/request'

export function getCaseList(data) {
  return request({
    url: '/background-caseView/queryByPage',
    method: 'get',
    params: data
  })
}
export function getCase(data) {
  return request({
    url: '/background-caseView/queryById',
    method: 'get',
    params: data
  })
}
export function updateCase(data) {
  return request({
    url: '/background-caseView/update',
    method: 'post',
    data
  })
}
export function deleteCase(data) {
  return request({
    url: '/background-caseView/delete',
    method: 'post',
    data
  })
}
export function addCase(data) {
  return request({
    url: '/background-caseView/add',
    method: 'post',
    data
  })
}
export function getAllClass(data) {
  return request({
    url: '/background-caseView/queryGroupByPage',
    method: 'get',
    params: data
  })
}
export function deleteClass(data) {
  return request({
    url: '/background-caseView/deleteGroup',
    method: 'post',
    data
  })
}
export function addClass(data) {
  return request({
    url: '/background-caseView/addGroup',
    method: 'post',
    data
  })
}
export function updateClass(data) {
  return request({
    url: '/background-caseView/updateGroup',
    method: 'post',
    data
  })
}
