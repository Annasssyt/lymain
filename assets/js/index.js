
/*nav*/
var nav= function () {
    $('.nav-box').unbind("click").bind("click",function () {
        $(this).addClass('nav-active').siblings().removeClass('nav-active');
    });
}
// nav()
/*banner*/
var lunbo = function () {
    // 获取第一个图片 节点对象
    var firstImg = $('.lunbo-img-content li').first().clone();
    // 放在 ul 的最后
    $('.lunbo-img-content').append(firstImg);
    var i = 0;
    var timer;
    autoPlay();
    // 下一张
    $('#next').click(function(){
        i++;
        moveImg(i);
    })
    // 上一张
    $('#prev').click(function(){
        i--;
        moveImg(i);
    })
    // auto play
    function autoPlay(){
        timer = setInterval(function(){
            i++;
            moveImg(i);
        }, 4000);
    }
    function moveImg(num){
        // 如果是最后一张图片
        if(i==$('.lunbo-img-content li').length){
            i = 1;
            $('.lunbo-img-content').css({left:0});
        }
        // 移动图片
        // $('.lunbo-img-content').animate({left:i*-1920},960);
        $('.lunbo-img-content').animate({left:i*-$(window).width()},$(window).width()/2);

        // 换小点的标记
        if(i==($('.lunbo-img-content li').length-1)){
            $('.circle').eq(0).addClass('circle-active').siblings().removeClass('circle-active');
        }else{
            $('.circle').eq(i).addClass('circle-active').siblings().removeClass('circle-active');
        }
    }
    $('#play').mouseover(function(){
        $('#prev').show();
        $('#next').show();
        clearInterval(timer);
    }).mouseout(function(){
        $('#prev').hide();
        $('#next').hide();
        autoPlay();
    })
    // 点击小图标 跳转到指定的页面
    $('.circle').click(function(){
        i = $(this).index();
        moveImg(i);
    })
};
lunbo();

/*合作伙伴*/
var introduce= function () {
    $(".partners-tab").on("click",function () {
        var $this = $(this);
        var $index = $this.index();
        if($index == 0){
            $(".row").css("left","220px")
            $(".p-one").show();
            $(".p-two").hide();
            $(".p-three").hide();
        }else if($index == 1){
            $(".row").css("left","560px")
            $(".p-one").hide();
            $(".p-two").show();
            $(".p-three").hide();
        }else{
            $(".row").css("left","920px")
            $(".p-one").hide();
            $(".p-two").hide();
            $(".p-three").show();
        }
    });
}
introduce();


/*旗下业务*/
var business = function () {

    $('.business-btn').unbind('mouseover').bind('mouseover',function () {
        $(this).addClass('business-btn-on').siblings().removeClass('business-btn-on')
        // $(".business-right").addClass("zoomIn").removeClass("zoomIn");
        var index = $(this).attr("data-index");
        if(index==1){
            $(".business-right-btn").attr("href","zcgl.html");
            $('.business-title').text('资产管理')
            $('.business-detail').text('发挥综合金融优势，以资产价值实现为目的，积极开展资产增值运作，提高运营管理资产规模')
        }
        else if(index==2){
            $(".business-right-btn").attr("href","tzgl.html");
            $('.business-title').text('投资管理')
            $('.business-detail').text('遵循价值投资和产融结合理念。通过对产业链上优质企业进行财务性或战略性投资，挖掘投融资领域创新型业务机会，进行战略规划和投资布局')
        }
        else if(index==3){
            $(".business-right-btn").attr("href","glzx.html");
            $('.business-title').text('管理咨询')
            $('.business-detail').text('依托集团专业团队、资源渠道和管理经验，以客户至上的服务理念提供全面的问题解决方案')
        }
        else if(index==4){
            $(".business-right-btn").attr("href","jrkj.html");
            $('.business-title').text('金融科技')
            $('.business-detail').text('打造“科技+金融”生态圈，提供综合性金融科技解决方案')
        }
        else if(index==5){
            $(".business-right-btn").attr("href","gyl.html");
            $('.business-title').text('供应链金融')
            $('.business-detail').text('为产业链上下游企业提供全面的供应链金融解决方案，打造高效供应链生态圈，成为行业的创新和领导者')
        }
        else{
            $(".business-right-btn").attr("href","ky.html");
            $('.business-title').text('智慧康养')
            $('.business-detail').text('贯彻实施国家“健康中国”战略，结合集团及战略合作伙伴的产业基础优势，从健康管理、照护服务、社区医疗、智慧康养、医疗金融等方面加强构筑“康养+”产业投资孵化模式，加快医疗大健康产业及智慧康养事业发展')
        }
    })


}
business();

/*企业优势*/
var advantage = function () {
    $('.adv-icon').unbind("mouseover").bind("mouseover",function () {
        $(this).addClass("rubberBand")
    });
    $('.adv-icon').unbind("mouseout").bind("mouseout",function () {
        $(this).removeClass("rubberBand")
    });
}
advantage();

/*飞入效果*/
var fadeInUp = function (c,anim) {
    var timeout = 200;
    var index = 0;
    var addClassIn;
    addClassIn = setInterval(function(){
        if(index >= $(c).length){
            clearInterval(addClassIn);
            addClassIn = null;
        }else {
            $(c).eq(index++).show().css({'visibility':'visible'}).addClass(anim);
        }
    },timeout);

}

/*滚动条监听*/

    $(document).ready(function(){//在文档加载完毕后执行
        $(window).scroll(function(){//开始监听滚动条
            //获取当前滚动条高度
            var topp = $(document).scrollTop();
            if(topp > 520){
                fadeInUp(".advantage-main-box","fadeInUp")
                // $("#ly-header").css({"opacity":"1"});
            }
            // else{
            //     $("#ly-header").css({"opacity":"1"});
            // }
            if(topp > 700){
                fadeInUp(".business-icon","zoomIn")
            }
            if(topp > 1400){
                fadeInUp(".vision-main-box","fadeInUp")
            }
        })

    })






