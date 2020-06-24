import request from '@/utils/request'

export function CompanyCulList (data) {
    return request({
        url: '/webfront-aboutUsSubpage/queryServiceCon',
        method: 'get',
        params: data
    })
}

export function getDamn (data) {
    return request({
        url: '/webfront-aboutUsSubpage/queryCompanyCul',
        method: 'get',
        params: data
    })
}
export function getCulture (data) {
    return request({
        url: '/webfront-aboutUsSubpage/queryDevelopHis',
        method: 'get',
        params: data
    })
}

export function queryAboutUs (data) {
    return request({
        url: '/webfront-index/queryAboutUs',
        method: 'get',
        params: data
    })
}

// GET /webfront-index/queryAboutUs
