const mongoose = require('mongoose')
const { mongo } = require('../../config')
mongoose.connect(`mongodb://${mongo.user ? `${mongo.user}:${mongo.pass}@` : ''}${mongo.host}:27017/${mongo.db}`, { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log('connect to %s error: ', mongo.db, err.message)
    process.exit(1)
  }
  console.log('数据库连接成功~')
})

// import models
require('./apicache')

// wrapper && export models
exports.Apicache = mongoose.model('Apicache')
