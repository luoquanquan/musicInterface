/*
 * @file: 音乐模块路由
 * @Author: luoquanquan
 * @Date: 2019-01-04 10:20:10
 * @LastEditors: luoquanquan
 * @LastEditTime: 2019-01-09 10:33:44
 */

const router = require('koa-router')()
const { Music } = require('../controllers')

// 获取首页的推荐信息
router.get('/recommend', Music.getRecommend)
// 获取排行榜列表
router.get('/toplist', Music.getToplist)
// 获取排行榜内的歌曲列表
router.get('/songList/:id', Music.getSongList)
// 通过歌曲 id 获取歌曲的播放 url
router.get('/songUrllist/:ids', Music.getSongUrllist)
// 通过关键词搜索歌曲列表
router.get('/search/:w/:page?/:perPage?', Music.search)
// 通过音乐 id 获取歌词
router.get('/lrc/:id', Music.getLrc)
// 通过专辑 id 获取专辑封面
router.get('/albumImg/:albummid/:singerMid', Music.getAlbumImg)

module.exports = router
