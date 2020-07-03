import request from '@/utils/request'

export function saveAboutUs(data) {
  return request({
    url: '/background-caseView/queryByPage',
    method: 'post',
    data
  })
}

