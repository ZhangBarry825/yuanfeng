import request from '@/utils/request'

// 数据列表
export function queryByPageList (data) {
    return request({
        url: '/background-clientAreaImage/queryByPage',
        method: 'get',
        params: data
    })
}
// 修改图
export function updateImage (data) {
    return request({
        url: '/background-clientAreaImage/update',
        method: 'get',
        params: data
    })
}
