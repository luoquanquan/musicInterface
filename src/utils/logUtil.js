const log4js = require('log4js')

log4js.configure(require('../../config/logOtion'))

const logUtil = {}

const errorLogger = log4js.getLogger('errorLogger')
const resLogger = log4js.getLogger('resLogger')
// 格式化请求日志
const formatReqLog = (req, resTime) => {
  let logText = ''

  const { method } = req
  // 访问方法
  logText += `request method: ${method}\n`

  // 请求原始地址
  logText += `request originalUrl:  ${req.originalUrl}\n`

  // 客户端ip
  logText += `request client ip:  ${req.ip}\n`

  // 请求参数
  if (method === 'GET') {
    logText += `request query:  ${JSON.stringify(req.query)}\n`
  } else {
    logText += `${'request body: ' + '\n'}${JSON.stringify(req.body)}\n`
  }
  // 服务器响应时间
  logText += `response time: ${resTime}\n`

  return logText
}

// 格式化错误日志
const formatError = (ctx, err, resTime) => {
  let logText = ''

  // 错误信息开始
  logText += '\n' + '*************** error log start ***************' + '\n'

  // 添加请求日志
  logText += formatReqLog(ctx.request, resTime)

  // 错误名称
  logText += `err name: ${err.name}\n`
  // 错误信息
  logText += `err message: ${err.message}\n`
  // 错误详情
  logText += `err stack: ${err.stack}\n`

  // 错误信息结束
  logText += '*************** error log end ***************' + '\n'

  return logText
}

// 格式化响应日志
const formatRes = (ctx, resTime) => {
  let logText = ''

  // 响应日志开始
  logText += '\n' + '*************** response log start ***************' + '\n'

  // 添加请求日志
  logText += formatReqLog(ctx.request, resTime)

  // 响应状态码
  logText += `response status: ${ctx.status}\n`

  // 响应内容
  logText += `${'response body: ' + '\n'}${JSON.stringify(ctx.body)}\n`

  // 响应日志结束
  logText += '*************** response log end ***************' + '\n'

  return logText
}
// 封装错误日志
logUtil.logError = (ctx, error, resTime) => {
  if (ctx && error) {
    errorLogger.error(formatError(ctx, error, resTime))
  }
}

// 封装响应日志
logUtil.logResponse = (ctx, resTime) => {
  if (ctx) {
    resLogger.info(formatRes(ctx, resTime))
  }
}

module.exports = logUtil
