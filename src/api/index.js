import request from '@/utils/request'

/**
 * 封装所有接口end
 */
export default {
    login(params) {
        return request({
            url: '/users/login',
            method: 'post',
            data: params,
            mock: false
        })
    }
}