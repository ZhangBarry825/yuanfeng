import request from '@/utils/request'

export function CompanyCulList (data) {
    return request({
        url: '/webfront-contactUsSubpage/addLeaveMessage',
        method: 'POST',
        params: data
    })
}
