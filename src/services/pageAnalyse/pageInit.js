const request = require('../request')
const cheerio = require('cheerio')
class PageInit {
  constructor () {
    this.request = request
  }

  async download (url) {
    const htmlStr = await this.request(url)
    return Promise.resolve(this.cheer(htmlStr))
  }

  cheer (htmlStr) {
    return cheerio.load(htmlStr)
  }

  getData () {
    throw new Error('请在子类中重写这个方法')
  }
}

module.exports = PageInit
