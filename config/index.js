/*
 * @Author: luoquanquan
 * @Date: 2018-10-26 17:23:39
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-10-29 12:54:34
 */
const dev = require('./dev')
const prod = require('./prod')
const test = require('./test')

const tempstamp = Date.now()

// 小程序基础配置
const projectConfig = {
  defaultApiCacheValidate: 1000 * 60 * 60 * 24,
  qqMusicCommonBaseUrl: 'https://c.y.qq.com',
  qqMusicUrlBaseUrl: 'https://u.y.qq.com',
  qqMusicHtmlUrl: 'https://i.y.qq.com/v8/playsong.html?songmid=004AeIvh4ML0Bz',
  albumImgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000 .jpg',
  singerAvatarUrl: 'https://y.gtimg.cn/music/photo_new/T001R150x150M000 .jpg',
  defaultData: {
    g_tk: '5381',
    uin: '0',
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: '0',
    platform: 'h5',
    needNewCode: '1',
    _: tempstamp
  },
  defaultHeader: {
    authority: 'c.y.qq.com',
    path: 'musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=' + tempstamp,
    scheme: 'https',
    accept: 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    cookie: 'pgv_pvi=9065962496; pt2gguin=o1363693666; RK=nrwYgZLwf/; ptcz=fa62884057b1c65cf49abe3c3a59b4f496ab6b17da920c7d6d588e66bd50cdbc; pgv_pvid=8204344632; o_cookie=1363693666; tvfe_boss_uuid=4ba3dd3005b46f75; luin=o1363693666; lskey=00010000453ad87b261a19bddfcbbd9cc94d7809423cf25a85f37f25f04f7d78af40e82fc6de0f8f02fc4e42; pgv_info=ssid=s4431621626; yqq_stat=0; ts_uid=130901620; pgv_si=s8776760320; ts_refer=ADTAGmyqq',
    dnt: '1',
    origin: 'https://m.y.qq.com',
    pragma: 'no-cache',
    'Content-Type': 'application/json'
  }
}
module.exports = Object.assign({
  dev,
  prod,
  test
}[process.env.NODE_ENV || 'dev'], projectConfig)
