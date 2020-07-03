import request from '@/utils/request'

export function getNewsList(data) {
  return request({
    url: '/background-news/queryByPage',
    method: 'get',
    params: data
  })
}
export function getNews(data) {
  return request({
    url: '/background-news/queryById',
    method: 'get',
    params: data
  })
}
export function updateNews(data) {
  return request({
    url: '/background-news/update',
    method: 'post',
    data
  })
}
export function deleteNews(data) {
  return request({
    url: '/background-news/delete',
    method: 'post',
    data
  })
}
export function addNews(data) {
  return request({
    url: '/background-news/add',
    method: 'post',
    data
  })
}
export function getAllClass(data) {
  return request({
    url: '/background-news/queryGroupByPage',
    method: 'get',
    params: data
  })
}
export function deleteClass(data) {
  return request({
    url: '/background-news/deleteGroup',
    method: 'post',
    data
  })
}
export function addClass(data) {
  return request({
    url: '/background-news/addGroup',
    method: 'post',
    data
  })
}
export function updateClass(data) {
  return request({
    url: '/background-news/updateGroup',
    method: 'post',
    data
  })
}
