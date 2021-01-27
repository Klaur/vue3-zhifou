import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
axios.defaults.baseURL = '/'
axios.defaults.timeout = 50000
axios.defaults.withCredentials = false
function returnResponse(response: AxiosResponse) {
  const res = response.data
  if (res.code === 200 || Object.prototype.toString.call(res) === '[object Blob]') {
    return res.data || res
  } else {
    return false // 可以直接返回Promise,为了方便loading取消特地返回false
  }
}
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const Authorization = Cookies.get('access-token') || ''
    config.headers = {
      Authorization
    }
    return config
  },
  err => Promise.reject(err)
)
axios.interceptors.response.use(
  (response: AxiosResponse) => {
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
    alert(err.message)
    new Error(err.message || 'Error 网络异常，请稍后重试')
    return false
  }
)
export default axios
