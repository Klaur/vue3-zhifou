import axios from '@/utils/axios'
export const getUserInfo = (params: object) => {
  return axios.get('/api/user/check-login', params)
}
