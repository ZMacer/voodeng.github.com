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

    $("#footer a").click(function(){
     htmlbody.animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');
     return false;
     });

});