const mongoose = require('mongoose')
const Schema = mongoose.Schema

const apicacheSchema = new Schema({
  urlKey: {
    type: String,
    required: true
  },
  createAt: {
    type: Number,
    default: Date.now
  },
  termOfValidity: {
    type: Number,
    default: Date.now
  },
  data: {
    type: String,
    required: true
  }
})

mongoose.model('Apicache', apicacheSchema)
