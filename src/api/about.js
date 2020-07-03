import request from '@/utils/request'


export function getUsInfo (data) {
    return request({
        url: '/webfront-aboutUsSubpage/queryAllAboutUsInfo',
        method: 'get',
        params: data
    })
}
export function getHistory (data) {
  return request({
    url: '/webfront-aboutUsSubpage/queryDevelopHis',
    method: 'get',
    params: data
  })
}
export function getAboutUs (data) {
    return request({
        url: '/webfront-index/queryAboutUs',
        method: 'get',
        params: data
    })
}

