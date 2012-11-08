// JavaScript Document
jQuery.fn.anchorGoWhere = function(options){
    var obj = jQuery(this);
    var defaults = {target:1, timer:1000};
    var o = jQuery.extend(defaults,options);
    /*
    var scrollPos;
    if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') { 
        scrollPos = document.documentElement; 
    }else if (typeof document.body != 'undefined') { 
        scrollPos = document.body; 
    }*/

    obj.each(function(i){
        jQuery(obj[i]).click(function(){
            var _rel = jQuery(this).attr("href").substr(1);
            switch(o.target){
                case 1: 
                    var targetTop = jQuery("#"+_rel).offset().top;
                    jQuery("html,body").animate({scrollTop:targetTop}, o.timer);
                    break;
                case 2:
                    var targetLeft = jQuery("#"+_rel).offset().left;
                    jQuery("html,body").animate({scrollLeft:targetLeft}, o.timer);
                    break;
            }
            return false;
        });
    });
};

jQuery(document).ready(function($) {
    $(".caselist li,#homeweibo .content h2").after("<img src='img/svwloader.gif' class='ldrgif' alt='loading...' />");

    //Cache some variables
    // var links = $('.navigation').find('li');
    var mywindow = $(window);
    var htmlbody = $('html,body');

    //initialise Stellar.js 视觉落差
    mywindow.stellar({
        horizontalScrolling: false
    });

    //initialise spectragram.js  获取Instagram照片
    jQuery.fn.spectragram.accessData = {
        accessToken: '17883077.f448560.66ad3c903f1b4796a7c728091c2084ca',
        clientID: 'f448560296f441e5ab23ce31697aa579'
    };

    $('.caselist').spectragram('getUserFeed', {
        query: 'voodeng',
        max: 8,
        size: 'small'
    });

    // $("#wrapper a").click(function(){
    //  htmlbody.animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');
    //  return false;
    //  });

$("#wrapper a").anchorGoWhere({target:1});

});