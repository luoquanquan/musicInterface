/*
 * @Author: luoquanquan
 * @Date: 2018-10-26 16:23:02
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-10-29 12:51:49
 */
const mongoose = require('mongoose')
const config = require('../../config')
console.log('1234567890-')
mongoose.connect('mongodb://127.0.0.1:27017/demo', { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log('connect to %s error: ', config.db, err.message)
    process.exit(1)
  }
  console.log('数据库连接成功~')
})

// import models
require('./demo')

// wrapper && export models
exports.Demo = mongoose.model('Demo')
