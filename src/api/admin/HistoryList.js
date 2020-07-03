import request from '@/utils/request'

// 数据列表
export function queryByPageList (data) {
    return request({
        url: '/background-developHis/queryByPage',
        method: 'get',
        params: data
    })
}

// 新增发展数据
export function adddevelopHis (data) {
    return request({
        url: '/background-developHis/add',
        method: 'post',
        params: data
    })
}

// 编辑发展数据
export function updateevelopHis (data) {
    return request({
        url: '/background-developHis/update',
        method: 'post',
        params: data
    })
}
// 删除发展数据
export function deletevelopHis (data) {
    return request({
        url: '/background-developHis/delete',
        method: 'post',
        params: data
    })
}

// 通过id获取数据
export function queryById (data) {
    return request({
        url: '/background-developHis/queryById',
        method: 'get',
        params: data
    })
}
