---
layout: post
title: "sina的api真是要命了 | jquery读取新浪微博api"
date: 2012-09-03 02:59
comments: true
categories: [开发,api,weibo,json,js] 
---
>
1. [吐槽先](#sina)   
2. [json数据分析](#json)  
   - [自行获取的json](#json2)  
3. [使用jquery获取数据](#jquery)  
   - [注意](#wan)  
4. [常用的数据节点列表](#nodelist )  
>


##<a name="sina">用sina的孩子伤不起啊</a>
本来人就不太聪明，搞了一个下午才能把sina那个api给看完，实验玩，很久没这样了，真心要人命哟，尤其是这个js的api，官方文档那真是个简单明啊，有好些部分都没列出来，不过也基本够用了。



附上 **[Google Doc 文档记录](https://docs.google.com/document/d/1Rm7gjFcM45sE3HUA9yxW5Gtj2D7AjweGaGLo6j5K9-c/edit) **

<del>先记录下，有时间就把它们补充</del>

- - - 

##<a name="json">新浪api 以及json数据分析</a>

###官方文档 JSON示例
<!--more-->
>
    {
        "statuses": [
            {
                "created_at": "Tue May 31 17:46:55 +0800 2011",
                "id": 11488058246,
                "text": "求关注。"，
                "source": "<a href="http://weibo.com" rel="nofollow">新浪微博</a>",
                "favorited": false,
                "truncated": false,
                "in_reply_to_status_id": "",
                "in_reply_to_user_id": "",
                "in_reply_to_screen_name": "",
                "geo": null,
                "mid": "5612814510546515491",
                "reposts_count": 8,
                "comments_count": 9,
                "annotations": [],
                "user": {
                    "id": 1404376560,
                    "screen_name": "zaku",
                    "name": "zaku",
                    "province": "11",
                    "city": "5",
                    "location": "北京 朝阳区",
                    "description": "人生五十年，乃如梦如幻；有生斯有死，壮士复何憾。",
                    "url": "http://blog.sina.com.cn/zaku",
                    "profile_image_url": "http://tp1.sinaimg.cn/1404376560/50/0/1",
                    "domain": "zaku",
                    "gender": "m",
                    "followers_count": 1204,
                    "friends_count": 447,
                    "statuses_count": 2908,
                    "favourites_count": 0,
                    "created_at": "Fri Aug 28 00:00:00 +0800 2009",
                    "following": false,
                    "allow_all_act_msg": false,
                    "remark": "",
                    "geo_enabled": true,
                    "verified": false,
                    "allow_all_comment": true,
                    "avatar_large": "http://tp1.sinaimg.cn/1404376560/180/0/1",
                    "verified_reason": "",
                    "follow_me": false,
                    "online_status": 0,
                    "bi_followers_count": 215
                }
            },
            ...
        ],
        "previous_cursor": 0,
        "next_cursor": 11488013766,
        "total_number": 81655
    }

>

###<a name="json2">自行获取的节点：</a>
>
    {
      "code": 1,
      "data": 
      {
    "statuses": 
        [
          {
            "created_at": "Sun Sep 02 20:23:26 +0800 2012",
            "id": 3485907627656823,
            "mid": "3485907627656823",
            "idstr": "3485907627656823",
            "text": "唉，坑爹啊~",
            "source": "<a href=\"http://weibo.com/\" rel=\"nofollow\">新浪微博</a>",
            "favorited": false,
            "truncated": false,
            "in_reply_to_status_id": "",
            "in_reply_to_user_id": "",
            "in_reply_to_screen_name": "",
            "geo": null,
            "user": {
              "id": 2092274257,
              "idstr": "2092274257",
              "screen_name": "Voodeng",
              "name": "Voodeng",
              "province": "43",
              "city": "1",
              "location": "湖南 长沙",
              "description": "nothing but Design",
              "url": "http://voodeng.com",
              "profile_image_url": "http://tp2.sinaimg.cn/2092274257/50/5629719914/1",
              "profile_url": "voodeng",
              "domain": "voodeng",
              "weihao": "",
              "gender": "m",
              "followers_count": 97,
              "friends_count": 306,
              "statuses_count": 118,
              "favourites_count": 1,
              "created_at": "Mon Apr 18 03:53:42 +0800 2011",
              "following": false,
              "allow_all_act_msg": false,
              "geo_enabled": true,
              "verified": false,
              "verified_type": -1,
              "remark": "",
              "allow_all_comment": true,
              "avatar_large": "http://tp2.sinaimg.cn/2092274257/180/5629719914/1",
              "verified_reason": "",
              "follow_me": false,
              "online_status": 0,
              "bi_followers_count": 36,
              "lang": "zh-cn"
            },
            "retweeted_status": {
              "created_at": "Fri Aug 31 15:12:48 +0800 2012",
              "id": 3485104683296626,
              "mid": "3485104683296626",
              "idstr": "3485104683296626",
              "text": "南大学生通过拨号音破解 @周鸿祎 的手机号， @李开复 发求贤邀请。 http://weibo.com/1197161814/yzF4SCIEU —— 我想说的是，想知道 @周鸿祎 的手机号不用这么麻烦，直接搜索就行了……",
              "source": "<a href=\"http://weibo.com/\" rel=\"nofollow\">新浪微博</a>",
              "favorited": false,
              "truncated": false,
              "in_reply_to_status_id": "",
              "in_reply_to_user_id": "",
              "in_reply_to_screen_name": "",
              "thumbnail_pic": "http://ww3.sinaimg.cn/thumbnail/61df4fe4jw1dwfvu0dnhhj.jpg",
              "bmiddle_pic": "http://ww3.sinaimg.cn/bmiddle/61df4fe4jw1dwfvu0dnhhj.jpg",
              "original_pic": "http://ww3.sinaimg.cn/large/61df4fe4jw1dwfvu0dnhhj.jpg",
              "geo": null,
              "user": {
                "id": 1642024932,
                "idstr": "1642024932",
                "screen_name": "Arki",
                "name": "Arki",
                "province": "11",
                "city": "8",
                "location": "北京 海淀区",
                "description": "动物界，男子动物门，水瓶座动物纲，弧眉线目，理工科，有家属，基情种，半文青，伪程序猿，原产于长江中下游地区，现放养于汴大燕园。",
                "url": "http://www.arkiwang.com",
                "profile_image_url": "http://tp1.sinaimg.cn/1642024932/50/5602044637/1",
                "profile_url": "anonymous",
                "domain": "anonymous",
                "weihao": "",
                "gender": "m",
                "followers_count": 3378,
                "friends_count": 889,
                "statuses_count": 1971,
                "favourites_count": 80,
                "created_at": "Wed Aug 26 13:56:10 +0800 2009",
                "following": false,
                "allow_all_act_msg": false,
                "geo_enabled": true,
                "verified": false,
                "verified_type": -1,
                "remark": "",
                "allow_all_comment": true,
                "avatar_large": "http://tp1.sinaimg.cn/1642024932/180/5602044637/1",
                "verified_reason": "",
                "follow_me": false,
                "online_status": 0,
                "bi_followers_count": 537,
                "lang": "zh-cn"
              },
              "reposts_count": 198,
              "comments_count": 39,
              "attitudes_count": 0,
              "mlevel": 0,
              "visible": {
                "type": 0,
                "list_id": 0
              }
            },
            "reposts_count": 0,
            "comments_count": 0,
            "attitudes_count": 0,
            "mlevel": 0,
            "visible": {
              "type": 0,
              "list_id": 0
            }
          }
        ]
      }
    }
>

###<a name="jquery">获取方式：</a>
**jquery ajax**
>
    $.ajax({  
        // Weibo API.  
        url: "https://api.weibo.com/2/statuses/user_timeline.json",  
        type: "GET",  
        dataType: "jsonp",  
        data: {  
            source: "app key",  
            uid: "user id", 
            count: 2  
        },  
        success: function(data, textStatus, xhr){  
          var weibo = data.data.statuses;
          var length = weibo.length;
          var fragment = document.createDocumentFragment();   
          for (var i=0; i<length; i++){
          var item = document.createElement('li');
          item.innerHTML = linkify(weibo[i].text) + weibo[i].retweeted_status.text + '<small>'+weibo[i].created_at+'</small>';
          fragment.appendChild(item);}
          document.body.appendChild(fragment);
          var str= '';
          $.each(weibo,function(i){
              w=weibo[i];
              str+='<ol>';
              str+='<li>'+w.id+'</li>';
              str+='<li>'+w.text+'</li>';
              str+='</ol>'
          });
          //$("#content").html(str);
    alert(weibo.length)
           // alert(data.data.length)         
        }  
    })  
>

整理一下
>
    $.ajax({  
        // Weibo API.  调用 user_timeline.json 其他参考api文档
        url: "https://api.weibo.com/2/statuses/user_timeline.json",  
        type: "GET",  
        dataType: "jsonp",  
        data: {  
            source: "你的APP KEY",  
            uid: "目标用户id", 
            count: 获取微博条数 
        },  
        success: function(data, textStatus, xhr){  
            //读取成功后执行函数
            var weibo = data.data.statuses;
            var length = weibo.length;
            alert(weibo.length)        
        }  
    })  
>

**<a name="wan">!!这里注意一下</a>**

由于现在新浪的API升级咯，验证方式也改为Oauth2.0 的，老版本的还能用，不过建议使用新的，毕竟保证不了那天出问题。

新的WEIBO-JS SDK中，调用的都是前缀 https://api.weibo.com/2/ 这样的地址

这里我习惯是使用Jquery来用，不过 $.get() , $.getJSON() 函数获取不了数据  
**只能使用$.ajax() 并且 dataType: "jsonp"**   
应该是js的跨域访问问题

###数据存储点：

var weibo = data.data.statuses  //  这是获取的数据数组

读取数组 weibo[i].xxx   // xxx就是节点里的内容，i 代表数字，从0开始，0表示第一个

通常读取方式weibo[i].xxx.xxx

####<a name="nodelist">主要节点：</a>
    .created_at = 微博创建时间
    .id  = 微博的id
    .text = 微博内容
    .source = 微博发布来源，微博左下角的文章出处

    .user = 微博发布者的信息，是一个对象数组
    .user.id = 用户id
    .user.screen_name = 用户昵称
    .user.profile_image_url = 用户小头像 
    .user.profile_url = 用户地址 weibo.com/xxxx (xxx处的数据)

    .retweeted_status = 转发的微博数据数组，和上面的节点结构一样
    weibo[i].retweeted_status.user.id = 转发的微博源作者id

##备注:
1. 参考 新浪微博开放平台官方[API V2 文档](http://open.weibo.com/wiki/API%E6%96%87%E6%A1%A3_V2)    
2. 如果返回错误，参考[API error code](http://open.weibo.com/wiki/Error_code)
3. 新浪微博开放平台官方[JSSDK(WEIBO-JS-V2)使用示例](http://open.weibo.com/wiki/Weibo-JS_V2)