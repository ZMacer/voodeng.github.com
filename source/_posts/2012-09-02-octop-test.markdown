---
layout: post
title: "Github page 上使用 Octopress"
date: 2012-09-02 09:47
comments: true
categories: [github,test]
author: Voodeng
---
#用途
相信现在这年头，写点程序的骚年们都知道这个Github了，可谓用途多多.  
用它可以建立**无限个**公开的Git rep， 每个大约有__300mb的空间__，看到这就明白了吧，300mb对于一个bolg空间来说是足足够够的了，当然，别弄一些图片之类的东西上去咯。

首先，登入[Github](http://github.com)  
建立一个以你用户名为准的rep，类似这样的http://username.github.com

##配置Octopress
<!-- more -->
建立一个放置Oct的目录，这里是R文件夹，clone Oct程序到本地
    cd ~/R/
    git clone git://github.com/imathis/octopress.git voodeng.github.com
    cd ~/R/voodeng.github.com
    bundle update   //升级一下gem
    rake install    //生成相应的模板

准备部署到Github上面
    rake setup_github_pages    //配置github项目地址
