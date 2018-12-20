/**
 * @Author: 罗圈圈
 * @Date: 2018-10-28 17:18:30
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-10-28 21:42:50
 */

/**
  * 获取请求参数 getReqData
  * @argument ctx koa 请求对象
  * @returns Array 请求参数中的 路径参数(params), 请求参数(query), 请求体(body)
  */

module.exports = (ctx) => {
  const {
    params,
    query,
    request: {
      body
    }
  } = ctx

  return [ params, query, body ]
}
