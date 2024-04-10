import axios from 'axios'
import config from '@/config'
import { ElMessage } from 'element-plus'


const TOKEN_INVALID = 'Token认证失败，请重新登录'   //前端 token错误
const NETWORK_ERROR = '网络请求异常，请稍后重试'    //后端错误

// 创建axios实例
const service = axios.create({
  baseURL: config.baerApi,
  timeout: 8000,
});


// 请求拦截器
service.interceptors.request.use((req) => {
  const header = req.headers

  if (!header.Authorization) header.Authorization = 'Li'
  return req
})

// 响应拦截器
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data  // 这里的res.data适合后端商议后的，所有返回的都是data
  if (code === 200) {
    return data
  } else if (code === 50001) {  //token验证失败,跳转登录页
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 1500)
    return Promise.reject(TOKEN_INVALID)
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})



// 封装核心请求函数
function request(options) {
  //如果没有传入请求方式，默认为get
  options.method = options.method || 'get'
  //如果请求方式是get，那么给params赋值
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data;
  }



  // 重点
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = config.mockApi ? config.mockApi : config.baseApi
  }


  return service(options)
}


['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
})


export default request
