import request from '@/utils/request'

export function newsAdvisory (data) {
    return request({
        url: '/webfront-newsSubpage/queryNewsByPage',
        method: 'get',
        params: data
    })
}

export function queryById (data) {
    return request({
        url: '/webfront-newsSubpage/queryById',
        method: 'get',
        params: data
    })
}
