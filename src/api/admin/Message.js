import request from '@/utils/request'

export function queryByPageList (data) {
    return request({
        url: '/background-clientLeaveMessage/queryByPage',
        method: 'get',
        params: data
    })
}
