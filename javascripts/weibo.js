/**
 * 新浪微博mid与url互转实用工具
 * 作者: XiNGRZ (http://weibo.com/xingrz)
 */

var WeiboUtility = {};

/**
 * 62进制字典
 */
WeiboUtility.str62keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

/**
 * 10进制值转换为62进制
 * @param {String} int10 10进制值
 * @return {String} 62进制值
 */
WeiboUtility.int10to62 = function(int10) {
    var s62 = '';
    var r = 0;
    while (int10 !== 0)
    {
        r = int10 % 62;
        s62 = this.str62keys[r] + s62;
        int10 = Math.floor(int10 / 62);
    }
    return s62;
};

/**
 * mid转换为URL字符
 * @param {String} mid 微博mid，如 "201110410216293360"
 * @return {String} 微博URL字符，如 "wr4mOFqpbO"
 */
WeiboUtility.mid2url = function(mid) {
    if (typeof(mid) !== 'string') return false;  //mid数值较大，必须为字符串！
    
    var url = '';
    
    for (var i = mid.length - 7; i > -7; i = i - 7) //从最后往前以7字节为一组读取mid
    {
        var offset1 = i < 0 ? 0 : i;
        var offset2 = i + 7;
        var num = mid.substring(offset1, offset2);
        
        num = this.int10to62(num);
        url = num + url;
    }
    
    return url;
};

jQuery(document).ready(function($) {
    var linkify = function(text) {
            // text = text.replace(/(https?:\/\/)([\w\-:;?&=+.%#\/]+)/gi, '<a href="$1$2">$2</a>').replace(/(^|\W)@(\w+)/g, '$1<a href="http://twitter.com/$2">@$2</a>').replace(/(^|\W)#(\w+)/g, '$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>');
            text = text.replace(/(https?:\/\/)([\w\-:;?&=+.%#\/]+)/gi, '<a href="$1$2">$2</a>').replace(/(^|\W)@(\w+)/g, '$1<a href="http://weibo.com/n/$2">@$2</a>').replace(/#(\w+)#/g, '$1<a href="http://search.weibo.com/search?q=%23$2">#$2#</a>');
            return text;
        };

    $.ajax({
        // Weibo API.  调用 user_timeline.json 其他参考api文档
        url: "https://api.weibo.com/2/statuses/user_timeline.json",
        type: "GET",
        dataType: "jsonp",
        data: {
            access_token: "2.00zGyaRC0Vx_kgd39640975dlGyEdD",
            uid: "2092274257",
            count: 5
        },
        success: function(data, textStatus, xhr) {
            //读取成功后执行函数
            var weibo = data.data.statuses;
            var length = weibo.length;
            var weizhi = $('#homeweibo .content');
            //alert(weibo[1].text);  
            for(var i = 0; i < length; i++) {

                var item = $("<dl></dl>");
                var date = $.format.date(weibo[i].created_at, "MM-dd hh:mm");
                var wimg = weibo[i].thumbnail_pic ? "<img src=" + weibo[i].thumbnail_pic + " />" : "";
                var wfwimg = weibo[i].retweeted_status ? (weibo[i].retweeted_status.thumbnail_pic ? "<img src=" + weibo[i].retweeted_status.thumbnail_pic + " />" : "") : "";
                var face = "<dt class=\"touxiang\"><img src=\"" + weibo[i].user.profile_image_url + " alt=\"" + weibo[i].user.name + "\" /></dt>";
                var winfo = weibo[i].retweeted_status ? "<dd class=\"weiboinfo\">" + wfwimg + "<small>" + date + "</small><br>fw:" + linkify(weibo[i].retweeted_status.text) + "</dd>" : "<dd class=\"weiboinfo\">" + wimg + "<small>" + date + "</small><br>" + linkify(weibo[i].text) + "</dd>";
                var wurl = "http://weibo.com/" + weibo[i].user.id + "/" + WeiboUtility.mid2url(weibo[i].idstr);

                item.html(face + "<a href=\"" + wurl + "\">" + winfo + "</a>");
                i % 2 ? item.addClass('right_face') : item.addClass('left_face');
                weizhi.append(item);

            }
        }
    });

});

