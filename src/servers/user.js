import request from '@/utils/request'
import qs from 'qs'
export const login = data => {
  return request({
    method: 'POST',
    headers: {
      // 用来设置请求头
    },
    url: '/front/user/login',
    // 3,urlencoded 格式：名=值&名=值
    data: qs.stringify(data)
})
}
