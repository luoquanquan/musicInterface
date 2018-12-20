/*
 * @Author: luoquanquan
 * @Date: 2018-12-20 16:36:56
 * @LastEditors: luoquanquan
 * @LastEditTime: 2018-12-20 16:36:59
 */
const axios = require('axios')

const service = axios.create()

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
