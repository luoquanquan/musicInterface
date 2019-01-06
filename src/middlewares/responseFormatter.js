/*
 * @file: 接口输出信息格式化
 * @Author: luoquanquan
 * @Date: 2019-01-04 10:20:10
 * @LastEditors: luoquanquan
 * @LastEditTime: 2019-01-06 15:51:52
 */
/**
 * 在app.use(router)之前调用
 */
module.exports = async (ctx, next) => {
  // 如果有返回数据，将返回数据添加到data中
  await next()
  if (typeof ctx.body === 'object') {
    if (!ctx.body.errno) {
      ctx.body = {
        announce: '本接口所有数据均来自 QQ 音乐, 仅供学习交流之用,' +
                  '请不要用于商业用途. 如果喜欢请下载 QQ 音乐 APP 畅听.' +
                  '如有侵权请联系微信(QQ): 1363693666, 我会第一时间删除~',
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
}
