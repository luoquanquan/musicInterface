/*
 * @Author: luoquanquan
 * @Date: 2018-12-20 15:58:27
 * @LastEditors: luoquanquan
 * @LastEditTime: 2018-12-20 16:03:57
 */

const router = require('koa-router')()
const { Music } = require('../controllers')

router.get('/recommend', Music.getRecommend)
router.get('/toplist', Music.getToplist)
router.get('/songIdlist/:id', Music.getSongIdlist)
router.get('/songUrllist/:ids', Music.getSongUrllist)
router.get('/songList/:id', Music.getSongList)

module.exports = router
