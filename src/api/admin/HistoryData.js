import request from '@/utils/request'

// 数据列表
export function queryByPageList (data) {
    return request({
        url: '/background-aboutUs/queryCompanyInfoByPage',
        method: 'get',
        params: data
    })
}

// 添加列表
export function addCompany (data) {
    return request({
        url: '/background-aboutUs/addCompanyInfo',
        method: 'post',
        params: data
    })
}
// 修改列表
export function updateCompany (data) {
    return request({
        url: '/background-aboutUs/updateCompanyInfo',
        method: 'post',
        params: data
    })
}
// 删除列表
export function deleteCompany (data) {
    return request({
        url: '/background-aboutUs/deleteCompanyInfo',
        method: 'post',
        params: data
    })
}
