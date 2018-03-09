/**
 * Created by chen on 2018/3/8.
 */
$(function () {
    // $('.lazy').lazyload( {
    //     threshold : -200,
    //      effect:"fadeIn"
    // });

    //banner
    let div=$('.banner');
    let banner=$('.bannerImg li',div);
    let arrowLeft=$('.bannerArrowLeft',div);
    let n=0;
    $(banner).eq(0).show().siblings(banner).hide();
    function move() {
        if (n>=banner.length) {
            n=0;
        }
        $(banner).eq(n).fadeIn().siblings(banner).fadeOut();
        n++;
    }
    let t=setInterval(move,4000);
    $(div).mouseenter(function () {
        clearInterval(t);
    });
    $(div).mouseleave(function () {
        t=setInterval(move,4000);
    });
    $(arrowLeft).click(function(){
        clearInterval(t);
        if (n<0) {
            n=banner.length-1;
        }
        $(banner).eq(n).fadeIn().siblings(banner).fadeOut();
        n--;
    }).next().click(function(){
        clearInterval(t);
        move();
    });

    //导航菜单
    let nav=$('.headerNavBer > li').not($('.main'));
    let navTimer;
    nav.each(function () {
        let that=$(this);
        $(this).on('mouseenter',function () {
            navTimer=setTimeout(function () {
                that.children().eq(1).show().animate({top:50},100);
            },100);
        }).on('mouseleave',function () {
            clearTimeout(navTimer);
            that.children().eq(1).animate({top:60},100,function () {
                $(this).hide();
            });
        })
    });

    //回到顶部
    $('.returnTop').click(function () {
        $('body,html').animate({scrollTop:0})
    });

    //侧导航
    let isHidden=true
    //侧导航滑动
    $('.asideButton').click(function () {
        if(isHidden){
            $('.asideHidden').animate({left:0},200);
        }else {
            $('.asideHidden').animate({left:-270},200);
        }
        isHidden=!isHidden;
    });
    //点击出现下拉菜单
    let isMenu=true;
    $('.asideHidden > ul').click(function () {
        if (isMenu){
            $('.asideText',this).slideDown().parent().children().eq(0).css('background','#ff9f1c').children().eq(0).css('color','#fff').next().css('transform','rotate(180deg)');
        }else{
            $('.asideText',this).slideUp().parent().children().eq(0).css('background','#fff').children().eq(0).css('color','#000').next().css('transform','rotate(0deg)');
        }
        isMenu=!isMenu;

    })


});