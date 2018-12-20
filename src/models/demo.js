const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DemoSchema = new Schema({
  sex: {
    type: String
  }
})

mongoose.model('Demo', DemoSchema)
