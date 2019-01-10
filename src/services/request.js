/*
 * @Author: luoquanquan
 * @Date: 2018-12-20 16:36:56
 * @LastEditors: luoquanquan
 * @LastEditTime: 2019-01-06 13:19:11
 */
const axios = require('axios')

const service = axios.create({
  headers: {
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    referer: 'https://m.y.qq.com/'
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

module.exports = service
