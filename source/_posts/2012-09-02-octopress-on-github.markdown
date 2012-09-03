---
layout: post
title: "Github page 上使用 Octopress"
date: 2012-09-02 09:47
comments: true
categories: [github,test]
author: Voodeng
---
##好处多多
相信现在这年头，写点程序的骚年们都知道这个Github了，可谓用途多多.  
1. 用它可以建立**无限个**公开的Git rep。  
2. 每个rep大约有__300mb的空间__，看到这就明白了吧，300mb对于一个bolg空间来说是足足够够的了，当然，别弄一些图片之类的东西上去咯。  
3. 版本控制，git本来就是个版本控制的东西嘛，这样文章就不用怕丢失之内的咯。  
4. 无流量限制，木有流量限制的，而且速度够快，无非法内容（程序员是相对单纯的群体哦~），具有积极的社会推动作用！（Github是开源软件的集结地）。  
5. 嗯~   

##准备好Github
首先，登入[Github](http://github.com)  
建立一个以你用户名为准的rep，类似这样的http://username.github.com
对于Github还不晓得怎么用的，先点这里搜索一下~  
[> 百度搜索：Github 使用](http://www.baidu.com/s?tn=baiduhome_pg&ie=utf-8&bs=markdown&f=3&rsv_bp=1&rsv_spt=1&wd=github+%E4%BD%BF%E7%94%A8&oq=github&rsp=0&rsv_sug2=0&inputT=2435)  
[> Google搜索：Github 使用](http://www.google.com.hk/#hl=zh-CN&newwindow=1&safe=strict&site=&source=hp&q=github+%E4%BD%BF%E7%94%A8&oq=github+%E4%BD%BF%E7%94%A8&gs_l=hp.3...3470.6688.0.6891.15.10.0.0.0.0.0.0..0.0...0.0..0.1c.zdjG5Bs-R9s&bav=on.2,or.r_gc.r_pw.&fp=f6573414b54b25d8&biw=1393&bih=907)

##Octopress的优势
+ 源自基于ruby的Jekyll - 开源，随意修改
+ 可部署到Github - 省钱嘛，能控制版本
+ md纯文本，无数据库 - 容易编辑修改，不易担心数据不可抗拒的损坏
+ Speed！！ - 纯文本的能不快嘛？
- 继续总结~

##配置Octopress
<!-- more -->
建立一个放置Oct的目录，这里是R文件夹，clone Oct程序到本地,替换username为你的自定义名称
    cd ~/R/
    git clone git://github.com/imathis/octopress.git username.github.com
    cd ~/R/username.github.com
    bundle update   //升级一下gem
    rake install    //生成相应的模板

准备部署到Github上面
    rake setup_github_pages    //配置github项目地址
    //键入你的git源 git://github.com/username/username.github.com.git

    rake new_post["心的方向"]   //建立新文章，文章存放在source/_post里面，格式为md的，现在就找个爽快点的[编辑器](#editor)来写文章了

    rake preview  //开启站点预览，动态生成， http://127.0.0.1:4000
    rake generate  //生成静态文件
    rake gen_deploy  //生成静态并部署到github

选择性的备份source文件夹到github，这样就有了文章md源文件的版本管理 
    git add .
    git commit -m "保存source文件夹，文章源文件"
    git push origin source   //建立sourch分支并保存

之后写文章就只常用到
    rake gen_deploy
    //选择性推送source吧
  

- - -
##备注：
1. <a name="editor">编辑器:</a> 推荐用 sublime text 2 这个家伙，然后搭配上它的插件 MarkdownEditing (package里没有，要自行添加rep下载) 写md文档还是蛮爽快的，HOHO。
2. 参考 Lucifr 的文章 [MarkdownEditing：Sublime Text 2 的 Markdown 利器](http://lucifr.com/2012/07/12/markdownediting-for-sublime-text-2/)。
3. 参考 [Markdown语法文档](http://markdown.tw/)。