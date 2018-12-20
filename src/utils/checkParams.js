/**
 * @Author: 罗圈圈
 * @Date: 2018-10-28 22:54:03
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-10-28 23:11:23
 */

module.exports = params =>
  Object.keys(params)
    .filter(index => !params[index])
    .map(param => `${param} 参数缺失`)
