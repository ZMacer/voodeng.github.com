jQuery(document).ready(function($) {

    //Cache some variables
    // var links = $('.navigation').find('li');
    var mywindow = $(window);

    //initialise Stellar.js 视觉落差
    mywindow.stellar({
        horizontalScrolling: false,
        verticalScrolling: true,
        horizontalOffset: 1,
        verticalOffset: 0
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


});