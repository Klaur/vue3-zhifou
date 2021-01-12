import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
const config = {
  baseURL: '/',
  timeout: 50000,
  withCredentials: true
}
const service = axios.create(config)
function returnResponse(response: AxiosResponse) {
  const res = response.data
  if (res.status || Object.prototype.toString.call(res) === '[object Blob]') {
    // 延长token过期时间
    const token = Cookies.get('token')
    token && Cookies.set('token', token, { expires: 3 })
    return res.data || res
  } else {
    // Message({
    //   message: res.message || 'Error',
    //   customClass: 'message-danger',
    //   iconClass: 'iconfont iconjinzhi',
    //   offset: 90,
    //   duration: 5 * 1000
    // })
    return false // 可以直接返回Promise,为了方便loading取消特地返回false
  }
}
function handlerParams(param: any) {
  const data: any = {}
  Object.keys(param).forEach(key => {
    if (![undefined, null].includes(param[key]) && !['total', 'cancelToken'].includes(key)) {
      data[key] = param[key]
    }
    if (typeof param[key] === 'string') data[key] = param[key].trim()
  })
  return data
}
// 请求前request拦截器
service.interceptors.request.use(
  config => {
    const Authorization = Cookies.get('token') || ''
    config.headers = {
      Authorization
    }
    return config
  },
  err => {
    Promise.reject(err)
  }
)
// 响应后respone拦截器
service.interceptors.response.use(
  response => {
    return returnResponse(response)
  },
  err => {
    // 主动取消请求不抛出toast
    if (err && err.message === 'REQUEST_CANCEL') {
      return false
    }
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '错误请求'
          break
        case 401:
          Cookies.remove('token')
          location.href = '/login'
          err.message = '未授权，请重新登录'
          break
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = '请求错误，未找到该资源'
          break
        case 405:
          err.message = '请求方法未允许'
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '服务器内部错误'
          break
        case 501:
          err.message = '尚未实施'
          break
        case 502:
          err.message = '错误网关'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网关超时'
          break
        case 505:
          err.message = 'http版本不支持该请求'
          break
        default:
          err.message = `链接错误${err.response.status}`
      }
    } else {
      err.message = '网络异常，请稍后重试'
    }
    // Message({
    //   message: err.message,
    //   customClass: 'message-danger',
    //   iconClass: 'iconfont iconjinzhi',
    //   offset: 90,
    //   duration: 5 * 1000
    // })
    // eslint-disable-next-line
    new Error(err.message || 'Error 网络异常，请稍后重试')
    // return Promise.reject(err)
    return false
  }
)
const http = {
  get(url: string, param: object) {
    // get请求
    return new Promise(resolve => {
      service({
        method: 'get',
        url,
        params: handlerParams(param)
      }).then(res => {
        resolve(res)
      })
    })
  },
  post(url: string, param: object): Promise<any> {
    // post请求
    return new Promise(resolve => {
      service({
        method: 'post',
        url,
        data: handlerParams(param)
      }).then(res => {
        resolve(res)
      })
    })
  },
  base: service,
  config
}
export const get = http.get
export const post = http.post
export default http
