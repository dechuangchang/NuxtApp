
import qs from 'qs'
// axios 配置


export default function ({ $axios, redirect }) {
  $axios.defaults.timeout = 5000
  $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

  
  // POST传参序列化
  $axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
  }, (error) => {
  return Promise.reject(error)
  })
  // 返回状态判断
  $axios.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res
  } else {
    return Promise.reject(res)
  }
  }, (error) => {
    return Promise.reject(error)
  })
}