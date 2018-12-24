/*
 * @Author: luoquanquan
 * @Date: 2018-12-20 15:58:19
 * @LastEditors: luoquanquan
 * @LastEditTime: 2018-12-24 23:19:14
 */
const _ = require('lodash')
const request = require('../services/request')
const { getReqData } = require('../utils')
const {
  qqMusicCommonBaseUrl,
  qqMusicUrlBaseUrl,
  defaultHeader,
  defaultData
} = require('../../config')
module.exports = {
  /**
   * 获取首页推荐列表
   * qq音乐path: /musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg
   */
  async getRecommend (ctx, next) {
    const { data: { slider: _slider, radioList: _radioList } } = await request({
      method: 'GET',
      url: `${qqMusicCommonBaseUrl}/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg`,
      headers: defaultHeader,
      params: defaultData
    })
    const slider = _slider.map(i => i.picUrl)
    const radioList = _radioList.map(i => ({ picUrl: i.picUrl, title: i.Ftitle, id: i.radioid }))
    ctx.body = { slider, radioList }
  },
  /**
   * 获取排行榜内歌单列表
   */
  async getToplist (ctx, next) {
    const { data: { topList } } = await request({
      url: `${qqMusicCommonBaseUrl}/v8/fcg-bin/fcg_myqq_toplist.fcg`,
      headers: defaultHeader,
      params: defaultData
    })
    const data = topList.map((item) => {
      const {
        id, listenCount, picUrl, songList: _songList, topTitle: title
      } = item
      const songList = _songList.map((i, index) => Object.assign({}, i, { number: index + 1 }))
      return {
        id, title, listenCount, picUrl, songList
      }
    })

    ctx.body = data
  },
  /**
   * 获取歌单内歌曲id列表
   */
  async getSongIdlist (ctx, next) {
    const [{ id }] = getReqData(ctx)
    const {
      update_time, total_song_num, topinfo: _topinfo, songlist: _songlist
    } = await request({
      url: `${qqMusicCommonBaseUrl}/v8/fcg-bin/fcg_v8_toplist_cp.fcg`,
      headers: defaultHeader,
      params: Object.assign({}, defaultData, { topid: id })
    })
    const topinfo = _.pick(_topinfo, ['pic_album', 'ListName'])
    const songlist = _songlist.map((song) => {
      // 一个 song 对象的结构
      const { data: { songmid, singer: [{ name: singer }], songname } } = song
      return { songmid, singer, songname }
    })
    ctx.body = { update_time, total_song_num, topinfo, songlist }
  },
  /**
   * 获取歌曲id相关的歌曲url列表
   */
  async getSongUrllist (ctx, next) {
    const [{ ids }] = getReqData(ctx)
    const { req_0: { data: { midurlinfo, sip: [, baseUrl] } } } = await request({
      url: `${qqMusicUrlBaseUrl}/cgi-bin/musicu.fcg`,
      headers: defaultHeader,
      method: 'POST',
      data: {
        req_0: {
          module: 'vkey.GetVkeyServer',
          method: 'CgiGetVkey',
          param: {
            guid: '5579254314', songmid: ids.split(','), songtype: [], uin: '', loginflag: 1, platform: '23', h5to: 'speed'
          }
        },
        comm: {
          g_tk: 1679324996, uin: '', format: 'json', ct: 23, cv: 0
        }
      }
    })

    const songUrlList = midurlinfo.map((song) => {
      const { purl } = song
      return `${baseUrl}/${purl}`
    })

    ctx.body = songUrlList
  },
  /**
   * 直接获取用歌单内的歌曲url列表
   */
  async getSongList (ctx, next) {
    const [{ id }] = getReqData(ctx)

    // 重复代码 考虑优化
    // 第一步, 通过排行榜 id 获取排行榜信息
    const {
      update_time, total_song_num, topinfo: _topinfo, songlist: _songlist
    } = await request({
      url: `${qqMusicCommonBaseUrl}/v8/fcg-bin/fcg_v8_toplist_cp.fcg`,
      headers: defaultHeader,
      params: Object.assign({}, defaultData, { topid: id })
    })
    const topinfo = _.pick(_topinfo, ['pic_album', 'ListName'])
    const songlist = _songlist.map((song) => {
      // 一个 song 对象的结构
      const { data: { songmid, singer: [{ name: singer }], songname } } = song
      return { songmid, singer, songname }
    })
    // 第二步, 通过排行榜歌曲中的歌曲 id 获取每首歌的播放 url
    const { req_0: { data: { midurlinfo, sip: [, baseUrl] } } } = await request({
      url: `${qqMusicUrlBaseUrl}/cgi-bin/musicu.fcg`,
      headers: defaultHeader,
      method: 'POST',
      data: {
        req_0: {
          module: 'vkey.GetVkeyServer',
          method: 'CgiGetVkey',
          param: {
            guid: '5579254314', songmid: songlist.map(song => song.songmid), songtype: [], uin: '', loginflag: 1, platform: '23', h5to: 'speed'
          }
        },
        comm: {
          g_tk: 1679324996, uin: '', format: 'json', ct: 23, cv: 0
        }
      }
    })

    // 第三步, 整合数据
    songlist.forEach((song, index) => {
      song.src = `${baseUrl}${midurlinfo[index] && midurlinfo[index].purl}`
    })
    ctx.body = { update_time, total_song_num, topinfo, songlist }
  }
}
