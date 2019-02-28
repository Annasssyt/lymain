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
    $('.m-small-box').unbind("click").bind("click",function () {
        $('.m-small-box').show();
        $(this).hide();
        $('.m-big-box').hide();
        // $(this).siblings('.m-big-box').show();
        $(this).siblings('.m-big-box').animate({width: 'toggle'},600);
    });
    $('.m-small-box').unbind("mouseover").bind("mouseover",function () {
        $(this).addClass('bounce');
    });
    $('.m-small-box').unbind("mouseout").bind("mouseout",function () {
        $(this).removeClass('bounce');
    });
}
member()

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
        //if(topp > 520){
        //    fadeInUp(".team-box")
        //}
        if(topp > 520){
            fadeInUp(".team-box");
            // $("#ly-header").css({"opacity":"0.85"});
        }
        // else{
        //     $("#ly-header").css({"opacity":"1"});
        // }
    })

})

