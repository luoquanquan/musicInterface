/**
 * 在app.use(router)之前调用
 */
module.exports = async (ctx, next) => {
  // 先去执行路由
  await next()

  // 如果有返回数据，将返回数据添加到data中
  if (!ctx.body.errno) {
    ctx.body = {
      errno: 0,
      msg: 'success',
      data: ctx.body
    }
  } else {
    ctx.body = {
      ...ctx.body,
      data: {}
    }
  }
}
