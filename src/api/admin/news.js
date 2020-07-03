import request from '@/utils/request'

export function queryByPageList (data) {
    return request({
        url: '/background-aboutUs/queryCompanyCulByPage',
        method: 'get',
        params: data
    })
}
