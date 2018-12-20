/*
 * @Author: luoquanquan
 * @Date: 2018-10-26 15:57:56
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-10-29 11:56:34
 */

const router = require('koa-router')()
const demo = require('./demo')

router.prefix('/api')

router.use('/demo', demo.routes(), demo.allowedMethods())

module.exports = router
