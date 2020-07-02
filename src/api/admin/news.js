import request from '@/utils/request'

export function queryByPageList (data) {
    return request({
        url: '/background-aboutUs/queryByPage',
        method: 'get',
        params: data
    })
}
