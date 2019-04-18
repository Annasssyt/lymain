$(window).load(function() {
    $('#full_feature').swipeslider();
})

/*about、tab切换*/
if(location.hash){
    console.log(location.hash)
    if(location.hash == '#hxtd'){
        $(".about-banner-title").text("核心团队");
        $(".aboutbanner").addClass('hxtd').removeClass('jtgk hxjzg qybj');
        $(".introduce-content").hide();
        $(".team-content").show();
        $(".values-content").hide();
        $(".regional-content").hide();
    }
    if(location.hash == '#hxjzg'){
        $(".about-banner-title").text("核心价值观");
        $(".aboutbanner").addClass('hxjzg').removeClass('jtgk hxtd qybj');
        $(".introduce-content").hide();
        $(".team-content").hide();
        $(".values-content").show();
        $(".regional-content").hide();
    }
    if(location.hash == '#qybj'){
        $(".about-banner-title").text("区域布局");
        $(".aboutbanner").addClass('qybj').removeClass('jtgk hxtd hxjzg');
        $(".introduce-content").hide();
        $(".team-content").hide();
        $(".values-content").hide();
        $(".regional-content").show();
    }
}else{
    $(".about-banner-title").text("集团概况");
    $(".aboutbanner").addClass('jtgk').removeClass('qybj hxtd hxjzg');
    $(".introduce-content").show();
    $(".team-content").hide();
    $(".values-content").hide();
    $(".regional-content").hide();

}

// window.onhashchange = function(){
//     if(location.hash){
//         console.log(location.hash)
//         if(location.hash == '#hxtd'){
//             $(".about-banner-title").text("核心团队");
//             $(".aboutbanner").addClass('hxtd').removeClass('jtgk hxjzg qybj');
//             $(".introduce-content").hide();
//             $(".team-content").show();
//             $(".values-content").hide();
//             $(".regional-content").hide();
//         }
//         if(location.hash == '#hxjzg'){
//             $(".about-banner-title").text("核心价值观");
//             $(".aboutbanner").addClass('hxjzg').removeClass('jtgk hxtd qybj');
//             $(".introduce-content").hide();
//             $(".team-content").hide();
//             $(".values-content").show();
//             $(".regional-content").hide();
//         }
//         if(location.hash == '#qybj'){
//             $(".about-banner-title").text("区域布局");
//             $(".aboutbanner").addClass('qybj').removeClass('jtgk hxtd hxjzg');
//             $(".introduce-content").hide();
//             $(".team-content").hide();
//             $(".values-content").hide();
//             $(".regional-content").show();
//         }
//     }else{
//         $(".about-banner-title").text("集团概况");
//         $(".aboutbanner").addClass('jtgk').removeClass('qybj hxtd hxjzg');
//         $(".introduce-content").show();
//         $(".team-content").hide();
//         $(".values-content").hide();
//         $(".regional-content").hide();
//
//     }
//
// }

var team= function () {
    $('.sdown').unbind("click").bind("click",function () {
        $(this).hide();
        $(this).parent('.slide-box').parent('.team-top').siblings('.team-detail').find('.team-detail-box').find('.long-detail').slideDown(500);
        $(this).siblings('.sup').show();
    });
    $('.sup').unbind("click").bind("click",function () {
        $(this).hide();
        $(this).parent('.slide-box').parent('.team-top').siblings('.team-detail').find('.team-detail-box').find('.long-detail').slideUp(500);
        $(this).siblings('.sdown').show();
    });
}
team();


$('.job-box').unbind('click').bind('click',function () {
    $('.job-detail-box').show();
    var $index=$(this).index();
    if($index==1){
        $('.job-box-d').eq(0).show().siblings('.job-box-d').hide()
    }
    if($index==2){
        $('.job-box-d').eq(1).show().siblings('.job-box-d').hide()

    }
    if($index==3){
        $('.job-box-d').eq(2).show().siblings('.job-box-d').hide()

    }
    if($index==4){
        $('.job-box-d').eq(3).show().siblings('.job-box-d').hide()

    }
    if($index==5){
        $('.job-box-d').eq(4).show().siblings('.job-box-d').hide()

    }
    if($index==6){
        $('.job-box-d').eq(5).show().siblings('.job-box-d').hide()

    }

})
$('.close-job-detail').unbind('click').bind('click',function () {
    $('.job-detail-box').hide();
})


