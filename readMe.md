<!--
 * @file: readMe
 * @Author: luoquanquan
 * @Date: 2019-01-04 10:20:10
 * @LastEditors: luoquanquan
 * @LastEditTime: 2019-01-10 20:09:31
 -->
> 吃着火锅, 写着代码, 听着歌...一不小心某音乐就上市了. 趁着兴头扒了一套 api (极简, 可用, 从获取排行榜到歌曲播放 url, 歌词, 封面等信息). 现共享一下接口文档. 大家玩儿的开心. 😄

![2018-12-24-22-58-59](https://user-gold-cdn.xitu.io/2018/12/24/167e0d20c1822778?w=1120&h=472&f=png&s=827839)

## 诚邀共同维护者

由于个人的力量毕竟有限, 加之 🐧 厂的兄弟们一直致力于升级 api 上. 所以维护过程中出现心有余力不足的情况, 这里盛情邀请有精力且愿意折腾一下的小伙伴们和我一起来维护这个项目, 有兴趣的小伙伴请不吝提出 issue 和 PR.

![2019-01-06-16-05-29](http://img.blog.niubishanshan.top/2019-01-06-16-05-29.png)

## 本项目地址[github](https://github.com/luoquanquan/musicInterFace)

## 接口域名

> [music.niubishanshan.top](music.niubishanshan.top)

## basePath

> /api/v2/music

## 1. 获取首页推荐信息

### 1.1 功能描述

获取网站首页的推荐信息, 包含顶部轮播和广播

### 1.2 请求说明

> 请求说明: <br>
> 请求方式 GET<br>
> 请求URL ：[/recommend](https://music.niubishanshan.top/api/v2/music/recommend)

### 1.3 请求参数

字段 | 字段类型  | 字段说明
--- | --- | ---
无 | 无 | 无

### 1.4 返回结果

```json
{
    "announce": "本接口所有数据均来自 QQ 音乐, 仅供学习交流之用,请不要用于商业用途. 如果喜欢请下载 QQ 音乐 APP 畅听.如有侵权请联系微信(QQ): 1363693666, 我会第一时间删除~",
    "errno": 0,
    "msg": "success",
    "data": {
        "slider": [
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1121987.jpg",
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1122653.jpg",
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1121479.jpg",
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1120772.jpg",
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1123020.jpg"
        ],
        "radioList": [
            {
                "picUrl": "http://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg",
                "title": "热歌",
                "id": 199
            },
            {
                "picUrl": "http://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg",
                "title": "一人一首招牌歌",
                "id": 307
            }
        ]
    }
}
```

### 1.5 返回参数

字段 | 字段类型  | 字段说明
--- | --- | ---
announce | string | 声明文案
errno | int | 0: 表示没有问题, 其他表示有问题. 详情参考 msg
msg | string | 接口返回状态描述
data | object | 接口返回数据主体
&nbsp;&nbsp;slider | array | 轮播图信息(子条目为 string)
&nbsp;&nbsp;radioList | array | 电台列表数据(始终返回两条)
&nbsp;&nbsp;&nbsp;&nbsp;picUrl | string | 电台logo
&nbsp;&nbsp;&nbsp;&nbsp;title | string | 电台标题
&nbsp;&nbsp;&nbsp;&nbsp;id | ing | 电台id

### 1.6 错误状态码

代码健壮的像一头牛, 不会报错~

## 2. 获取排行榜信息

### 2.1 功能描述

获取排行榜数据, 获取到的是从各种维度获取的排行版歌单(比如周榜, 月榜...)

### 2.2 请求说明

> 请求说明: <br>
> 请求方式 GET<br>
> 请求URL ：[/toplist](https://music.niubishanshan.top/api/v2/music/toplist)

### 2.3 请求参数

字段 | 字段类型  | 字段说明
--- | --- | ---
无 | 无 | 无

### 2.4 返回结果

```json
{
    "announce": "本接口所有数据均来自 QQ 音乐, 仅供学习交流之用,请不要用于商业用途. 如果喜欢请下载 QQ 音乐 APP 畅听.如有侵权请联系微信(QQ): 1363693666, 我会第一时间删除~",
    "errno": 0,
    "msg": "success",
    "data": [
        {
            "id": 4,
            "title": "巅峰榜·流行指数",
            "listenCount": 19800000,
            "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000004DDmku3TdWR9.jpg",
            "songList": [
                {
                    "singerName": "林俊杰",
                    "songName": "不为谁而作的歌",
                    "number": 1
                },
                {
                    "singerName": "林俊杰",
                    "songName": "圣所",
                    "number": 2
                },
                {
                    "singerName": "GAI",
                    "songName": "永不独行",
                    "number": 3
                }
            ]
        },
        ...各种数据...
    ]
}
```

### 2.5 返回参数

字段 | 字段类型  | 字段说明
--- | --- | ---
announce | string | 声明文案
errno | int | 0: 表示没有问题, 其他表示有问题. 详情参考 msg
msg | string | 接口返回状态描述
data | array | 接口返回数据主体
&nbsp;&nbsp;id | int | 歌单id
&nbsp;&nbsp;title | string | 歌单标题
&nbsp;&nbsp;listenCount | int | 歌单播放次数
&nbsp;&nbsp;picUrl | string | 歌单 logo url
&nbsp;&nbsp;songList | array | 歌单中排行榜前三的曲目
&nbsp;&nbsp;&nbsp;&nbsp;singername | string | 歌手名称
&nbsp;&nbsp;&nbsp;&nbsp;songname | string | 歌曲名称
&nbsp;&nbsp;&nbsp;&nbsp;number | int | 排行

### 2.6 错误状态码

代码健壮的像一头牛, 不会报错~

## 3. 获取歌曲列表

### 3.1 功能描述

获取指定歌单中的曲目列表

### 3.2 请求说明

> 请求说明: <br>
> 请求方式 GET<br>
> 请求URL ：[/songList/{:songListId}](https://music.niubishanshan.top/api/v2/music/songList/4)

### 3.3 请求参数

字段 | 字段类型  | 字段说明
--- | --- | ---
songListId | string | 歌单id, 就是排行榜中获取的歌单条目的id字段. 用于指定用户选择的歌单

### 3.4 返回结果

```json
{
    "announce": "本接口所有数据均来自 QQ 音乐, 仅供学习交流之用,请不要用于商业用途. 如果喜欢请下载 QQ 音乐 APP 畅听.如有侵权请联系微信(QQ): 1363693666, 我会第一时间删除~",
    "errno": 0,
    "msg": "success",
    "data": {
        "updateTime": "2019-01-10",
        "totalSongNum": 100,
        "topInfo": {
            "picAlbum": "http://imgcache.qq.com/music/photo_new/T002R300x300M000003nbc0602Tgfx.jpg",
            "listName": "巅峰榜·流行指数"
        },
        "songList": [
            {
                "songMid": "002K4xqW4A7m7q",
                "singer": {
                    "singerName": "林俊杰",
                    "singerMid": "001BLpXF2DyJe2"
                },
                "songName": "不为谁而作的歌",
                "songId": 105095766,
                "albumMid": "003nbc0602Tgfx"
            }
            ...各种数据...
        ]
    }
}
```

### 3.5 返回参数

字段 | 字段类型  | 字段说明
--- | --- | ---
announce | string | 声明文案
errno | int | 0: 表示没有问题, 其他表示有问题. 详情参考 msg
msg | string | 接口返回状态描述
data | object | 接口返回数据主体
&nbsp;&nbsp;updateTime | string | 更新时间
&nbsp;&nbsp;totalSongNum | int | 歌单中歌曲数目
&nbsp;&nbsp;topInfo | object | 歌单信息
&nbsp;&nbsp;&nbsp;&nbsp;picAlbum | string | 歌单封面logo
&nbsp;&nbsp;&nbsp;&nbsp;listName | string | 歌单名称
&nbsp;&nbsp;songList | array | 歌曲列表
&nbsp;&nbsp;&nbsp;&nbsp;songMid | string | 歌曲id
&nbsp;&nbsp;&nbsp;&nbsp;singer | string | 歌手名称
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;singerName | string | 歌手名称
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;singerMid | string | 歌手媒体 id, 用户获取歌手头像
&nbsp;&nbsp;&nbsp;&nbsp;songName | string | 歌曲名称
&nbsp;&nbsp;&nbsp;&nbsp;songId | string | 歌曲 id, 用于获取歌词
&nbsp;&nbsp;&nbsp;&nbsp;albumMid | string | 专辑媒体 id, 用于获取专辑封面 url

### 3.6 错误状态码

代码健壮的像一头牛, 不会报错~

## 4. 获取歌曲播放 url

### 4.1 功能描述

根据歌曲id, 获取播放 url(目前可用)

### 4.2 请求说明

> 请求说明: <br>
> 请求方式 GET<br>
> 请求URL ：[/songUrllist/{:songIdList}](https://music.niubishanshan.top/api/v2/music/songUrllist/000Qepff3UyUWO,001KxFBr3ZrMIk)

### 4.3 请求参数

字段 | 字段类型  | 字段说明
--- | --- | ---
songIdList | stringArray | 歌曲 id 列表, 需要拼接成 `id1,id2,id3,id4` 的形式

### 4.4 返回结果

```json
{
  "announce": "本接口所有数据均来自 QQ 音乐, 仅供学习交流之用,请不要用于商业用途. 如果喜欢请下载 QQ 音乐 APP 畅听.如有侵权请联系微信(QQ): 1363693666, 我会第一时间删除~",
  "errno": 0,
  "msg": "success",
  "data": [
      "http://isure.stream.qqmusic.qq.com//C400000Qepff3UyUWO.m4a?guid=5579254314&vkey=70D5522DDF8F35B36B133AA0F85A9C2FA608F2FA85BCBB4EC31CC6A0047CEAB873E9E2B947A6D893C219C65781B9EFE1F00C583518290F4E&uin=0&fromtag=38",
      "http://isure.stream.qqmusic.qq.com//C400001KxFBr3ZrMIk.m4a?guid=5579254314&vkey=7DC202D78758D601A1EF4B15F5597A805C740CFCE9210870073D05247716E83D4146EE3907962645D2F7BE99071BFC0B01E73F09AFA5114D&uin=0&fromtag=38"
  ]
}
```

### 4.5 返回参数

字段 | 字段类型  | 字段说明
--- | --- | ---
announce | string | 声明文案
errno | int | 0: 表示没有问题, 其他表示有问题. 详情参考 msg
msg | string | 接口返回状态描述
data | array | item 为对应音乐的播放 url, 直接放到 audio 标签就可以播放

### 4.6 错误状态码

代码健壮的像一头牛, 不会报错~

## 5. 搜索

### 5.1 功能描述

音乐搜索功能, 可以根据音乐信息搜索出匹配的歌曲列表

### 5.2 请求说明

> 请求说明: <br>
> 请求方式 GET<br>
> 请求URL ：[/music/search/唐人/1/10](https://music.niubishanshan.top/api/v2/music/search/唐人/1/10)

### 5.3 请求参数

字段 | 字段类型  | 字段说明
--- | --- | ---
key | string | 搜索关键词
page | int | (非必须, 默认值为 1)当前页码
page | int | (非必须, 默认值为 20)每页条数

### 5.4 返回结果

```json
{
    "announce": "本接口所有数据均来自 QQ 音乐, 仅供学习交流之用,请不要用于商业用途. 如果喜欢请下载 QQ 音乐 APP 畅听.如有侵权请联系微信(QQ): 1363693666, 我会第一时间删除~",
    "errno": 0,
    "msg": "success",
    "data": {
        "page": {
            "currentNumber": 10,
            "currentPage": 1,
            "totalNumber": 397
        },
        "songList": [
            {
                "songMid": "003ALEZa186Qlq",
                "singer": {
                    "singerName": "孙子涵",
                    "singerMid": "001oXbjs29oPul"
                },
                "songName": "唐人",
                "songId": 4823575,
                "albumMid": "002CWEnV2g4m3p"
            }
            ...各种数据...
        ]
    }
}
```

### 5.5 返回参数

字段 | 字段类型  | 字段说明
--- | --- | ---
errno | int | 0: 表示没有问题, 其他表示有问题. 详情参考 msg
announce | string | 声明文案
msg | string | 接口返回状态描述
data | object | 返回数据
&nbsp;&nbsp;page | object | 分页信息
&nbsp;&nbsp;&nbsp;&nbsp;currentNumber | int | 当前返回的条目数
&nbsp;&nbsp;&nbsp;&nbsp;currentPage | int | 当前页码
&nbsp;&nbsp;&nbsp;&nbsp;totalNumber | int | 总条目数
&nbsp;&nbsp;songList | array | 歌曲列表
&nbsp;&nbsp;&nbsp;&nbsp;songMid | string | 歌曲id
&nbsp;&nbsp;&nbsp;&nbsp;singer | string | 歌手名称
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;singerName | string | 歌手名称
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;singerMid | string | 歌手媒体 id, 用户获取歌手头像
&nbsp;&nbsp;&nbsp;&nbsp;songName | string | 歌曲名称
&nbsp;&nbsp;&nbsp;&nbsp;songId | string | 歌曲 id, 用于获取歌词
&nbsp;&nbsp;&nbsp;&nbsp;albumMid | string | 专辑媒体 id, 用于获取专辑封面 url

### 5.6 错误状态码

代码健壮的像一头牛, 不会报错~

## 6. 获取歌词(基于歌曲 songid)

### 6.1 功能描述

获取歌词, 这个没啥可以描述的啦~

### 6.2 请求说明

> 请求说明: <br>
> 请求方式 GET<br>
> 请求URL ：[/music/lrc/:id](https://music.niubishanshan.top/api/v2/music/lrc/4823575)

### 6.3 请求参数

字段 | 字段类型  | 字段说明
--- | --- | ---
id | string | 歌曲 id

### 6.4 返回结果

```json
{
    "announce": "本接口所有数据均来自 QQ 音乐, 仅供学习交流之用,请不要用于商业用途. 如果喜欢请下载 QQ 音乐 APP 畅听.如有侵权请联系微信(QQ): 1363693666, 我会第一时间删除~",
    "errno": 0,
    "msg": "success",
    "data": {
        "lyric": "[ti:唐人][换行][ar:孙子涵][换行][al:唐朝好男人 电视剧原声带][换行][by:][换行][offset:0][换行][00:00.00]唐人 (《唐朝好男人》电视剧主题曲) - 孙子涵 (Niko Sun)[换行][00:09.66]词：孙子涵[换行][00:19.32]曲：孙子涵[换行][00:28.99]一如昨日烛火 伴扁舟相随[换行][00:32.46][换行][00:33.22]哪有唐人不懂得陶醉[换行][00:36.73]我孤舟 你窈窕 岸上有隐晦[换行][00:40.54][换行][00:41.24]一踏万里与谁相随[换行][00:43.91][换行][00:44.62]你穿错了嫁妆怎能有快乐[换行][00:48.50][换行][00:49.19]再上一层胭脂也不美[换行][00:52.77]一声戛然而止庭前的鞭炮[换行][00:57.10]妄想同你华发的心作废[换行][01:00.27][换行][01:00.84]你说不要自作自受自己创造伤悲[换行][01:04.77]谁都可以彻底忘记谁[换行][01:08.02][换行][01:08.71]你说过往不及回首 别后悔了才会[换行][01:12.90]想方设法的把你追回[换行][01:16.13][换行][01:16.69]你说孤独是诗人应该具有的体会[换行][01:20.81]写歌的人就该有伤悲[换行][01:24.17][换行][01:24.74]我点一丝烛火 一时泛滥了思念[换行][01:28.75]写首小调名字叫后悔[换行][01:32.32][换行][01:33.66]一如昨日烛火 伴着扁舟相随[换行][01:36.91][换行][01:37.53]哪有唐人不懂得陶醉[换行][01:40.67][换行][01:41.48]你穿错了嫁妆怎可能有快乐[换行][01:44.99][换行][01:45.54]再上一层胭脂也不美[换行][01:47.94][换行][01:48.91]你穿错了嫁妆怎能有快乐[换行][01:52.65][换行][01:53.16]再上一层胭脂也不美[换行][01:56.71]一声戛然而止庭前的鞭炮[换行][02:00.45][换行][02:01.03]妄想同你华发的心作废[换行][02:04.27][换行][02:04.88]你说不要自作自受自己创造伤悲[换行][02:08.73]谁都可以彻底忘记谁[换行][02:12.07][换行][02:12.69]你说过往不及回首 别后悔了才会[换行][02:16.90]想方设法的把你追回[换行][02:20.11][换行][02:20.68]你说孤独是诗人应该具有的体会[换行][02:24.90]写歌的人就该有伤悲[换行][02:28.75]我点一丝烛火 一时泛滥了思念[换行][02:32.74]写首小调名字叫后悔[换行][02:36.73][换行][02:40.74]你说不要自作自受自己创造伤悲[换行][02:44.85]谁都可以彻底忘记谁[换行][02:48.62]你说过往不及回首 别后悔了才会[换行][02:52.80]想方设法的把你追回[换行][02:56.10][换行][02:56.63]你说孤独是诗人应该具有的体会[换行][03:00.80]写歌的人就该有伤悲[换行][03:04.64]我点一丝烛火 一时泛滥了思念[换行][03:08.77]写首小调名字叫后悔[换行][03:12.45][换行][03:13.38]一如昨日烛火 伴着扁舟相随[换行][03:17.51]哪有唐人不懂得陶醉[换行][03:20.69][换行][03:21.48]你穿错了嫁妆怎可能有快乐[换行][03:25.56]再上一层胭脂也不美[换行][03:28.19][换行][03:29.39]一如昨日烛火 伴着扁舟相随[换行][03:32.86][换行][03:33.47]哪有唐人不懂得陶醉[换行][03:36.65][换行][03:37.48]你穿错了嫁妆怎可能有快乐[换行][03:41.46]再上一层胭脂也不美"
    }
}
```

### 6.5 返回参数

字段 | 字段类型  | 字段说明
--- | --- | ---
announce | string | 声明文案
errno | int | 0: 表示没有问题, 其他表示有问题. 详情参考 msg
msg | string | 接口返回状态描述
data | object | 返回数据
&nbsp;&nbsp;lyric | string | 歌词信息, 由于 JSON 不能添加换行, 所以直接在 lrc 文件本该换行的位置插入了换行标记`[换行]` 前端代码中直接 `lyric.replace(/\[换行\]/g, '\n')` 即可还原 lrc 文件.

### 6.6 错误状态码

代码健壮的像一头牛, 不会报错~

## 7. 获取歌曲封面图片和歌手头像图片

### 7.1 功能描述

获取歌曲封面和歌手的头像图片, 就是播放器用来转圈的那个~

### 7.2 请求说明

> 请求说明: <br>
> 请求方式 GET<br>
> 请求URL ：[/music/imgs/{:albummid}/{:singerMid}](https://music.niubishanshan.top/api/v2/music/albumImg/002CWEnV2g4m3p/001oXbjs29oPul)

### 7.3 请求参数

字段 | 字段类型  | 字段说明
--- | --- | ---
albummid | string | 歌曲所属的专辑的媒体 id
singerMid | string | 歌手的媒体 id

### 7.4 返回结果

```json
{
    "announce": "本接口所有数据均来自 QQ 音乐, 仅供学习交流之用,请不要用于商业用途. 如果喜欢请下载 QQ 音乐 APP 畅听.如有侵权请联系微信(QQ): 1363693666, 我会第一时间删除~",
    "errno": 0,
    "msg": "success",
    "data": {
        "albumImgUrl": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002CWEnV2g4m3p.jpg",
        "singerAvatarUrl": "https://y.gtimg.cn/music/photo_new/T001R150x150M000001oXbjs29oPul.jpg"
    }
}
```

### 7.5 返回参数

字段 | 字段类型  | 字段说明
--- | --- | ---
errno | int | 0: 表示没有问题, 其他表示有问题. 详情参考 msg
announce | string | 声明文案
msg | string | 接口返回状态描述
data | object | 返回数据
&nbsp;&nbsp;albumImgUrl | string | 歌曲所属的专辑封面 url
&nbsp;&nbsp;singerAvatarUrl | string | 歌手头像 url

### 7.6 错误状态码

代码健壮的像一头牛, 不会报错~

# 最后我也立个 flag: 如果这篇文章点赞超过 666, 我写文章分享爬取数据的过程和实现的方式. 感谢大家的支持...

#### 本接口仅用作学习交流之用, 请不要用在不正当手段. 测试服务没有做任何处理, 扛不住 ddos 等等各种攻击, 希望大佬手下留情
