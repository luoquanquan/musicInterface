> 吃着火锅, 写着代码, 听着歌...一不小心某音乐就上市了. 趁着兴头扒了一套 api (极简, 可用, 从获取排行榜到歌曲播放 url). 现共享一下接口文档. 大家玩儿的开心. 😄

![2018-12-24-22-58-59](https://user-gold-cdn.xitu.io/2018/12/24/167e0d20c1822778?w=1120&h=472&f=png&s=827839)

## 本项目项目地址[github](https://github.com/luoquanquan/musicInterFace)

## 接口域名

> [music.niubishanshan.top](music.niubishanshan.top)

## basePath

> /api/music

## 1. 获取首页推荐信息

### 1.1 功能描述

获取网站首页的推荐信息, 包含顶部轮播和广播

### 1.2 请求说明

> 请求说明: <br>
> 请求方式 GET<br>
> 请求URL ：[/recommend](https://music.niubishanshan.top/api/music/recommend)

### 1.3 请求参数

字段 | 字段类型  | 字段说明
--- | --- | ---
无 | 无 | 无

### 1.4 返回结果

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "slider": [
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1111137.jpg",
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1109397.jpg",
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1109234.jpg",
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1109139.jpg",
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1110553.jpg"
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
> 请求URL ：[/toplist](https://music.niubishanshan.top/api/music/toplist)

### 2.3 请求参数

字段 | 字段类型  | 字段说明
--- | --- | ---
无 | 无 | 无

### 2.4 返回结果

```json
{
    "errno": 0,
    "msg": "success",
    "data": [
        {
            "id": 4,
            "title": "巅峰榜·流行指数",
            "listenCount": 19500000,
            "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000000VjrhC1PVxWS.jpg",
            "songList": [
                {
                    "singername": "薛之谦",
                    "songname": "天份",
                    "number": 1
                },
                {
                    "singername": "陈柯宇",
                    "songname": "生僻字",
                    "number": 2
                },
                {
                    "singername": "毛不易",
                    "songname": "别再闹了",
                    "number": 3
                }
            ]
        }
        ... 各种数据 ...
    ]
}
```

### 2.5 返回参数

字段 | 字段类型  | 字段说明
--- | --- | ---
errno | int | 0: 表示没有问题, 其他表示有问题. 详情参考 msg
msg | string | 接口返回状态描述
data | array | 接口返回数据主体
&nbsp;&nbsp;id | int | 歌单id
&nbsp;&nbsp;title | string | 歌单标题
&nbsp;&nbsp;listenCount | int | 歌单播放次数
&nbsp;&nbsp;picUrl | string | 歌单logo
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
> 请求URL ：[/songIdlist/{:songListId}](https://music.niubishanshan.top/api/music/songIdlist/4)

### 3.3 请求参数

字段 | 字段类型  | 字段说明
--- | --- | ---
songListId | string | 歌单id, 就是排行榜中获取的歌单条目的id字段. 用于指定用户选择的歌单

### 3.4 返回结果

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "update_time": "2018-12-24",
        "total_song_num": 100,
        "topinfo": {
            "pic_album": "http://imgcache.qq.com/music/photo_new/T002R300x300M000004KfMU92CZeAd.jpg",
            "ListName": "巅峰榜·流行指数"
        },
        "songlist": [
            {
                "songmid": "000Qepff3UyUWO",
                "singer": "薛之谦",
                "songname": "天份"
            },
           ...各种数据...
        ]
    }
}
```

### 3.5 返回参数

字段 | 字段类型  | 字段说明
--- | --- | ---
errno | int | 0: 表示没有问题, 其他表示有问题. 详情参考 msg
msg | string | 接口返回状态描述
data | object | 接口返回数据主体
&nbsp;&nbsp;update_time | string | 更新时间
&nbsp;&nbsp;total_song_num | int | 歌单中歌曲数目
&nbsp;&nbsp;topinfo | object | 歌单信息
&nbsp;&nbsp;&nbsp;&nbsp;pic_album | string | 歌单封面logo
&nbsp;&nbsp;&nbsp;&nbsp;ListName | string | 歌单名称
&nbsp;&nbsp;songlist | array | 歌曲列表
&nbsp;&nbsp;&nbsp;&nbsp;songmid | string | 歌曲id
&nbsp;&nbsp;&nbsp;&nbsp;singer | string | 歌手名称
&nbsp;&nbsp;&nbsp;&nbsp;songname | string | 歌曲名称

### 3.6 错误状态码

代码健壮的像一头牛, 不会报错~

## 4. 获取歌曲播放 url

### 4.1 功能描述

根据歌曲id, 获取播放 url(目前可用)

### 4.2 请求说明

> 请求说明: <br>
> 请求方式 GET<br>
> 请求URL ：[/songUrllist/{:songIdList}](https://music.niubishanshan.top/api/music/songUrllist/000Qepff3UyUWO,001KxFBr3ZrMIk)

### 4.3 请求参数

字段 | 字段类型  | 字段说明
--- | --- | ---
songIdList | stringArray | 歌曲 id 列表, 需要拼接成 `id1,id2,id3,id4` 的形式

### 4.4 返回结果

```json
{
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
errno | int | 0: 表示没有问题, 其他表示有问题. 详情参考 msg
msg | string | 接口返回状态描述
data | array | item 为对应音乐的

### 4.6 错误状态码

代码健壮的像一头牛, 不会报错~

#### 本接口仅用作学习交流之用, 请不要用在不正当手段. 测试服务没有做任何处理, 扛不住 ddos 等等各种攻击, 希望大佬手下留情.
