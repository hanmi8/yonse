$(function(){
    // 자막
    $('.controller').find('.subtitle').click(function(){
        $('.subtitleWrap').show();
    });
    $('.subtitleWrap').find('.subtitleClose').click(function(){
        $(this).parent('.subtitleWrap').hide();
    });
    // 녹음
    $('.branding').click(function(){
        $('.popup').show();
    });
    $('.reRecord').find('a').click(function(){
        $('.step03').hide();
        $('.step01').show();
        setInterval(function() {

        });
        setTimeout(function() {
            $('.step01').hide()
            $('.step02').show()
        }, 3000);
    });

    $('.popup').find('.close').click(function(){
        $('.popup').hide();
    })

    // menu
    $('.index').find('a').click(function(){
        $('.menu').show();
    })
    $('.menu').find('.close').click(function(){
        $(this).parents('.menu').hide();
    })
    // 014 VR
    $('.vr').click(function(){
        console.log("click")
        $('.vrView').show();
        $('.floatingBtnWrap').show();
    })
    $('.vrView').find('.close').click(function(){
        $(this).parent('.vrView').hide();
        $('.floatingBtnWrap').hide();
    });
})