import request from '@/utils/request'

// 数据列表
export function queryByPageList (data) {
    return request({
        url: '/background-ourAdvantages/queryByPage',
        method: 'get',
        params: data
    })
}

// 添加数据
export function addtAdvantages (data) {
    return request({
        url: '/background-ourAdvantages/add',
        method: 'post',
        params: data
    })
}

// 修改数据
export function updateAdvantages (data) {
    return request({
        url: '/background-ourAdvantages/update',
        method: 'post',
        params: data
    })
}
// 修改数据
export function deleteAdvantages (data) {
    return request({
        url: '/background-ourAdvantages/delete',
        method: 'post',
        params: data
    })
}
