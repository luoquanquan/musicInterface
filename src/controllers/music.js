/*
 * @file: 音乐模块控制器
 * @Author: luoquanquan
 * @Date: 2018-12-20 15:58:19
 * @LastEditors: luoquanquan
 * @LastEditTime: 2019-01-10 19:30:13
 */

const _ = require('lodash')
const request = require('../services/request')
const { getReqData } = require('../utils')
const {
  qqMusicCommonBaseUrl,
  qqMusicUrlBaseUrl,
  singerAvatarUrl,
  defaultHeader,
  defaultData,
  albumImgUrl
} = require('../../config')

const n = e => {
  if (e > 65535) {
    return String.fromCodePoint(e)
  } else {
    return String.fromCharCode(e)
  }
}

const getSougListInfo = songlist => songlist.map((song) => {
  let songMid, singerName, singerMid, songName, songId, albumMid
  try {
    ({
      data: {
        songmid: songMid,
        singer: [{
          name: singerName,
          mid: singerMid
        }],
        songname: songName,
        songid: songId,
        albummid: albumMid
      }
    } = song)
  } catch (e) {
    ({
      songmid: songMid,
      singer: [{
        name: singerName,
        mid: singerMid
      }],
      songname: songName,
      songid: songId,
      albummid: albumMid
    } = song)
  }

  return {
    songMid,
    singer: {
      singerName,
      singerMid
    },
    songName,
    songId,
    albumMid
  }
})

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
  async getSongList (ctx, next) {
    const [{ id }] = getReqData(ctx)
    const {
      update_time: updateTime, total_song_num: totalSongNum, topinfo: _topinfo, songlist
    } = await request({
      url: `${qqMusicCommonBaseUrl}/v8/fcg-bin/fcg_v8_toplist_cp.fcg`,
      headers: defaultHeader,
      params: Object.assign({}, defaultData, { topid: id })
    })
    const topInfo = {
      picAlbum: _topinfo.pic_album,
      listName: _topinfo.ListName
    }
    ctx.body = {
      updateTime,
      totalSongNum,
      topInfo,
      songList: getSougListInfo(songlist)
    }
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
  async search (ctx) {
    const [{
      w,
      page: p = 1,
      perPage: n = 20
    }] = getReqData(ctx)
    let {
      data: {
        song: {
          curnum: currentNumber,
          curpage: currentPage,
          totalnum: totalNumber,
          list
        }
      }
    } = await request({
      url: `${qqMusicCommonBaseUrl}/soso/fcgi-bin/search_for_qq_cp`,
      headers: defaultHeader,
      method: 'GET',
      params: Object.assign({}, defaultData, { w, p, n })
    })

    ctx.body = {
      page: {
        currentNumber,
        currentPage,
        totalNumber
      },
      songList: getSougListInfo(list)
    }
  },
  getAlbumImg (ctx) {
    const [{ albummid, singerMid }] = getReqData(ctx)
    ctx.body = {
      albumImgUrl: albumImgUrl.replace(/ /, albummid),
      singerAvatarUrl: singerAvatarUrl.replace(/ /, singerMid)
    }
  },
  async getLrc (ctx) {
    const [{ id: musicid }] = getReqData(ctx)
    const reg = /jsonp1\((.*)\)/
    const data = await request({
      url: `${qqMusicCommonBaseUrl}/lyric/fcgi-bin/fcg_query_lyric.fcg`,
      headers: defaultHeader,
      params: Object.assign({}, defaultData, {
        musicid,
        nobase64: 1,
        jsonpCallback: 'jsonp1'
      })
    })
    const lrcContent = data.match(reg)[1]

    if (lrcContent) {
      let { lyric } = JSON.parse(lrcContent)
      lyric = lyric.replace(/&amp;/g, '&#38;').replace(/&lt;/g, '&#60;').replace(/&gt;/g, '&#62;').replace(/&quot;/g, '&#34;').replace(/&apos;/g, '&#39;').replace(/&nbsp;/g, '&#160;').replace(/&#(\d+);?/g, function (e, t) {
        if (+t === 10) return '[换行]'
        return n(t)
      }).replace(/&#x([0-9a-f]+);?/gi, function (e, t) {
        return n(parseInt(t, 16))
      })
      ctx.body = { lyric }
    } else {
      ctx.body = {
        code: 3000,
        msg: '歌词检索失败'
      }
    }
  }
}
