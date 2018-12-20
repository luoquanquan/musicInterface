/*
 * @Author: luoquanquan
 * @Date: 2018-10-26 17:23:39
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-10-29 12:54:34
 */
console.log(process.env.NODE_ENV)

const dev = require('./dev')
const prod = require('./prod')
const test = require('./test')
module.exports = {
  dev,
  prod,
  test
}[process.env.NODE_ENV || 'dev']
