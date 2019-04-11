/*tab切换*/
var tabChange= function () {
    $(".banner-tab").on("click",function () {
        var $this = $(this);
        var $index = $this.index();
        $this.addClass('banner-tab-on').siblings().removeClass('banner-tab-on');
        $('.con').hide();
        if($index == 0){
            $(".banner-title").text("资产管理");
            $(".banner-detail").text("发挥综合金融优势，以资产价值实现为目的，积极开展资产增值运作，提高运营管理资产规模");
            $(".business-banner").css({'backgroundImage':'url("assets/img/business/services_banner_1.jpg")'});
            $('.zcgl').show();
        }else if($index == 1){
            $(".banner-title").text("投资管理");
            $(".banner-detail").text("遵循价值投资和产融结合理念。通过对产业链上优质企业进行财务性或战略性投资，挖掘投融资 领域创新型业务机会，进行战略规划和投资布局");
            $(".business-banner").css({'backgroundImage':'url("assets/img/business/services_banner_2.jpg")'});
            $('.tzgl').show();
        }else if($index == 2){
            $(".banner-title").text("管理咨询");
            $(".banner-detail").text("依托集团专业团队、资源渠道和管理经验，以客户至上的服务理念提供全面的问题解决方案");
            $(".business-banner").css({'backgroundImage':'url("assets/img/business/services_banner_3.jpg")'});
            $('.glzx').show();
        }else if($index == 3){
            $(".banner-title").text("金融科技");
            $(".banner-detail").text("打造“科技+金融”生态圈，提供综合性金融科技解决方案");
            $(".business-banner").css({'backgroundImage':'url("assets/img/business/services_banner_4.jpg")'});
            $('.jrkj').show();
        }else if($index == 4){
            $(".banner-title").text("供应链金融");
            $(".banner-detail").text("为产业链上下游企业提供全面的供应链金融解决方案，打造高效供应链生态圈，成为行业的 创新和领导者");
            $(".business-banner").css({'backgroundImage':'url("assets/img/business/services_banner_5.jpg")'});
            $('.gyljr').show();
        }else {
            $(".banner-title").text("智慧康养");
            $(".banner-detail").text("贯彻实施国家“健康中国”战略，结合集团及战略合作伙伴的产业基础优势，从健康管理、照护 服务、社区医疗、智慧康养、医疗金融等方面加强构筑“康养+”产业投资孵化模式，加快医疗大 健康产业及智慧康养事业发展");
            $(".business-banner").css({'backgroundImage':'url("assets/img/business/services_banner_6.jpg")'});
            $('.zhky').show();
        }
    });
}
tabChange();

window.onhashchange = function() {

    if (location.hash) {
        if (location.hash == '#tzgl') {
            $(".banner-tab").eq(1).trigger('click');
        }
        if (location.hash == '#glzx') {
            $(".banner-tab").eq(2).trigger('click');
        }
        if (location.hash == '#jrkj') {
            $(".banner-tab").eq(3).trigger('click');
        }
        if (location.hash == '#gyljr') {
            $(".banner-tab").eq(4).trigger('click');
        }
        if (location.hash == '#zhky') {
            $(".banner-tab").eq(5).trigger('click');
        }
        location.hash = '';
    }

}


var fadeInUp = function (c) {

    var timeout = 200;
    var index = 0;
    var addClassIn;
    addClassIn = setInterval(function(){
        if(index >= $(c).length){
            clearInterval(addClassIn);
            addClassIn = null;
            $(".b-main").css({"visibility":"visible"}).addClass("zoomIn")
        }else {
            $(c).eq(index++).show().addClass("fadeInUp");
        }
    },timeout);

}

fadeInUp(".tab-box")

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var topp = $(document).scrollTop();
//         if(topp > 400){
//             $("#ly-header").css({"opacity":"0.85"});
//         }else{
//             $("#ly-header").css({"opacity":"1"});
//         }
//     })
// })

