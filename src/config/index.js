/** 
 * 环境配置封装
 */

const env = import.meta.env.MODE || 'prod' // 如果import.meta.env.MODE不存在或为空，那么代码会使用'pord'作为默认值

const EnvConfig = {  //开发、测试、生产
    dev: {
        baseApi: '/',
        mockApi: 'https://mock.apifox.com/m1/4068509-0-default/api'
    },
    test: {
        baseApi: '//test.future.com/api',
        mockApi: 'https://mock.apifox.com/m1/4068509-0-default/api'
    },
    prod: {
        baseApi: '//future.com/api',
        mockApi: 'https://mock.apifox.com/m1/4068509-0-default/api'
    }
}


export default {
    env,
    mock: true,
    namespace: 'manager',
    ...EnvConfig[env]
}