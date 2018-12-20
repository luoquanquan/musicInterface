/*
 * @Author: luoquanquan
 * @Date: 2018-10-26 17:10:43
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-10-28 23:43:08
 */
const Demo = require('../models').Demo

const createDemo = demo => {
  const dm = new Demo()
  dm.sex = demo.sex // demo.sex
  console.log(demo)
  return dm.save()
}

const remove = id => Demo.findByIdAndDelete(id)

const findDemoById = (id, opt = {}) => Demo.findById(id, opt)

const getDemoList = (search = {}, opt = {}) => Demo.find(search, opt)

module.exports = {
  createDemo,
  remove,
  findDemoById,
  getDemoList
}
