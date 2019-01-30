const Apicache = require('../models').Apicache

const create = recommend => {
  const rec = new Apicache()
  Object.keys(recommend).forEach(prop => {
    rec[prop] = recommend[prop]
  })
  return rec.save()
}

const get = (search, opt) => Apicache.find(search, opt)

module.exports = {
  create,
  get
}
