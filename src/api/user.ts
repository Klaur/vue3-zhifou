import axios from '@/utils/axios'
export const getUserInfo = (params = {}) => {
  return axios.get('/api/user/check-login', params)
}
