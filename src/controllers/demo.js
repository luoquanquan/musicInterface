const { getReqData, checkParams } = require('../utils')
const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'debug'

module.exports = {
  // 增加 Demo
  async create (ctx, next) {
    const [,, { sex }] = getReqData(ctx)
    if (!sex) {
      ctx.body = {
        errno: 10001,
        msg: 'sex 参数必填'
      }
      return next()
    }
    try {
      ctx.body = {}
    } catch (error) {
      logger.error(error)
      next(new Error('创建 demo 失败'))
    }
  },
  // 删除 Demo
  async delete (ctx, next) {
    const [{ id }] = getReqData(ctx)
    const [ err ] = checkParams({ id })
    if (err) {
      ctx.body = err
      return next()
    }
    try {
      ctx.body = {}
    } catch (error) {
      ctx.body = {
        errno: 10002,
        msg: '系统错误'
      }
    }
  },
  // 修改 Demo
  async update (ctx, next) {
    const [{ id },, { sex }] = getReqData(ctx)
    const paramStatus = checkParams({ id, sex })
    if (paramStatus.length) {
      ctx.body = {
        errno: 10001,
        msg: paramStatus[0]
      }
      return next()
    }
    try {
      ctx.body = {}
    } catch (error) {
      ctx.body = {
        errno: 10002,
        msg: '系统错误'
      }
    }
  },
  // 获取 Demo
  async get (ctx, next) {
    const [{ id }] = getReqData(ctx)
    let ret = { id }
    // 如果存在 id 路径说明是要访问详情, 否则是要访问 demo 列表
    if (id) {
      // 查找某个 demo 详情
    } else {
      // 查找 demo 列表
    }
    ctx.body = ret
  }
}
