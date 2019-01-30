const mongoose = require('mongoose')
const config = require('../../config')
mongoose.connect('mongodb://localhost:27017/music', { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log('connect to %s error: ', config.db, err.message)
    process.exit(1)
  }
  console.log('数据库连接成功~')
})

// import models
require('./apicache')

// wrapper && export models
exports.Apicache = mongoose.model('Apicache')
