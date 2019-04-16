var team= function () {
    $('.sdown').unbind("click").bind("click",function () {
        $(this).hide();
        $(this).parent('.slide-box').siblings('.team-detail-box').find('.long-detail').slideDown(500);
        $(this).siblings('.sup').show();
    });
    $('.sup').unbind("click").bind("click",function () {
        $(this).hide();
        $(this).parent('.slide-box').siblings('.team-detail-box').find('.long-detail').slideUp(500);
        $(this).siblings('.sdown').show();
    });
}
team()

var member= function () {
    $('.member-box').unbind("hover").bind("hover",function () {
        $(this).find('.member-text-box').addClass('member-on');
        $(this).siblings().find('.member-text-box').removeClass('member-on');
    });
}
member()


/*tab切换*/
var tabChange= function () {
    $(".banner-tab").on("click",function () {
        var $this = $(this);
        var $index = $this.index();
        $this.addClass('banner-tab-on').siblings().removeClass('banner-tab-on');
        if($index == 0){
            $(".banner-text").text("集团概况");
            $(".about-banner").css({'backgroundImage':'url("assets/img/about/about_banner_1.jpg")'});
            $(".introduce-content").show();
            $(".team-content").hide();
            $(".member-content").hide();
            $(".map-content").hide();
        }else if($index == 1){
            $(".banner-text").text("核心团队");
            $(".about-banner").css({'backgroundImage':'url("assets/img/about/about_banner_2.jpg")'});
            $(".introduce-content").hide();
            $(".team-content").show();
            $(".member-content").hide();
            $(".map-content").hide();
        }else if($index == 2){
            $(".banner-text").text("核心价值观");
            $(".about-banner").css({'backgroundImage':'url("assets/img/about/about_banner_3.jpg")'});
            $(".introduce-content").hide();
            $(".team-content").hide();
            $(".member-content").show();
            $(".map-content").hide();
        }else {
            $(".banner-text").text("区域布局");
            $(".about-banner").css({'backgroundImage':'url("assets/img/about/about_banner_4.jpg")'});
            $(".introduce-content").hide();
            $(".team-content").hide();
            $(".member-content").hide();
            $(".map-content").show();
        }
    });
}
tabChange();

if(location.hash){
    console.log("hash")
    if(location.hash == '#hxtd'){
        $(".banner-tab").eq(1).trigger('click');
    }
    if(location.hash == '#hxjzg'){
        $(".banner-tab").eq(2).trigger('click');
    }
    if(location.hash == '#qybj'){
        $(".banner-tab").eq(3).trigger('click');
    }
    location.hash = '';
}

window.onhashchange = function(){
    if(location.hash){
        console.log("hash")
        if(location.hash == '#hxtd'){
            $(".banner-tab").eq(1).trigger('click');
        }
        if(location.hash == '#hxjzg'){
            $(".banner-tab").eq(2).trigger('click');
        }
        if(location.hash == '#qybj'){
            $(".banner-tab").eq(3).trigger('click');
        }
        location.hash = '';
    }
}



/*飞入效果*/
var fadeInUp = function (c) {

    var timeout = 400; //每隔1000ms
    var index = 0;
    var addClassIn;
    addClassIn = setInterval(function(){
        if(index >= $(c).length){
            clearInterval(addClassIn);
            addClassIn = null;
        }else {
            $(c).eq(index++).show().addClass("fadeInUp");
        }
    },timeout);

}

$(document).ready(function(){//在文档加载完毕后执行
    $(window).scroll(function(){//开始监听滚动条
        //获取当前滚动条高度
        var topp = $(document).scrollTop();
        if(topp > 100){
            fadeInUp(".team-box");
        }
    })

})

