import request from '@/utils/request'

export function CompanyCulList (data) {
    return request({
        url: '/webfront-aboutUsSubpage/queryServiceCon',
        method: 'get',
        params: data
    })
}
