/**
 * @Author: 罗圈圈
 * @Date: 2018-10-28 17:06:35
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-10-28 21:43:56
 */

const path = require('path')

// 日志根目录
const baseLogPath = path.resolve(__dirname, '../../logs')

// 错误日志目录
const errorPath = '/error'
// 错误日志文件名
const errorFileName = 'error'
// 错误日志输出完整路径
const errorLogPath = `${baseLogPath + errorPath}/${errorFileName}`
// var errorLogPath = path.resolve(__dirname, "../logs/error/error");

// 响应日志目录
const responsePath = '/response'
// 响应日志文件名
const responseFileName = 'response'
// 响应日志输出完整路径
const responseLogPath = `${baseLogPath + responsePath}/${responseFileName}`

module.exports = {
  appenders: {
    // 错误日志
    errorLogger: {
      type: 'console', // 日志类型
      filename: errorLogPath, // 日志输出位置
      alwaysIncludePattern: true, // 是否总是有后缀名
      pattern: '-yyyy-MM-dd-hh.log', // 后缀，每小时创建一个新的日志文件
      path: errorPath // 自定义属性，错误日志的根目录
    },
    // 响应日志
    resLogger: {
      type: 'console',
      filename: responseLogPath,
      alwaysIncludePattern: true,
      pattern: '-yyyy-MM-dd-hh.log',
      path: responsePath
    },
    // 响应日志
    test: {
      type: 'stdout',
      filename: responseLogPath,
      alwaysIncludePattern: true,
      pattern: '-yyyy-MM-dd-hh.log',
      path: responsePath
    }
  },
  categories: {
    default: { appenders: ['test'], level: 'debug' },
    errorLogger: { appenders: ['errorLogger'], level: 'error' },
    resLogger: { appenders: ['resLogger'], level: 'debug' }
  }
}
