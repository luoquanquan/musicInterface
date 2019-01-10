const PageInit = require('./pageInit')
let face
class GetSrcFromMid extends PageInit {
  constructor () {
    super()
  }

  getInterface () {
    if (!face) {
      face = new GetSrcFromMid()
    }
    return face
  }
  async getData (url) {
    const $ = await this.download(url)
    console.log($('#h5audio_media').attr('src'))
  }
}

module.exports = GetSrcFromMid.prototype.getInterface()
