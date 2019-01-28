
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
        $('.lunbo-img-content').animate({left:i*-1920},960);

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
    console.log("合作伙伴")
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
    $('.diamond').unbind("click").bind("click",function () {
        $(this).addClass('diamond-active').siblings().removeClass('diamond-active');
        $(".mask").show();
        $(".pop").show().addClass('zoomIn');
        // $(".pop").addClass('zoomIn');
        if($(this).index() == 1){
            $(".pop-btn").attr("href","business.html#jrkj");
            $(".pop-detail").text("服务集团业务为核心，以金融科技思维重塑银行等金融机构其经营逻辑、业务流程、服务体系、管理模式和 IT 架构等，通过“金融+科技”，打造数据化、精准化、自动化、智能化的服务模式......")
        }else if($(this).index() == 2){
            $(".pop-btn").attr("href","business.html#gyl");
            $(".pop-detail").text("基于集团已有的金融资源与优势，通过与各类核心企业、监管方合作以提升供应链协同，降低供应链运营成本为目标，基于供应商与核心企业的交易数据和应收账款的分析评估而授信融资。相比传统融资方式，具有：无担保，无抵押，综合利率低，授信额度高，放款速度快，随借随还的特点......")
        }else if($(this).index() == 3){
            $(".pop-btn").attr("href","business.html#tzzx");
            $(".pop-detail").text("为客户提供金融、财务、税务、法务等多领域咨询服务，提供全面的问题解决方案。对于有投融资需求的客户，通过集团的第三方平台的优质服务，让双方能快速获取相应信息，在最短时间达到最优匹配。通过优质的咨询中介服务，优化企业资金资源配置......")
        }else if($(this).index() == 4){
            $(".pop-btn").attr("href","business.html#ky");
            $(".pop-detail").text("积极响应国家号召，构建养老、孝老、敬老政策体系和社会环境推进医养结合，加快老龄事业和产业发展；以消费者的需求出发以健康管理为核心，快乐服务为依托，利用互联网信息化手段、AI人工智能、大数据等技术，为中国社区及老人提供智慧康养产品及服务......")
        } else{
            $(".pop-btn").attr("href","business.html");
            $(".pop-detail").text("依托集团产业能力，运用专业专长，辨识具有价值提升空间的资产项目，延伸资产管理价值链，通过债务重组、提供流动性支持、输入先进管理、解决历史遗留问题、引入战略合作伙伴等措施，改善项目财务状况，盘活资产，提升价值，为合作伙伴创造稳健回报......");
        }
    });
    $('.close-pop').unbind("click").bind("click",function () {
        $('.diamond').removeClass('diamond-active');
        $(".mask").hide();
        $(".pop").hide();
    });
}
business();

/*企业优势*/
var advantage = function () {
    console.log("企业优势")
    $('.d').unbind("mouseover").bind("mouseover",function () {
        $(this).find('.diamond-text-up').css({'top':'-60px'})
        $(this).find('.diamond-text-down').css({'top':'70px'})
    })
    $('.d').unbind("mouseout").bind("mouseout",function () {
        $(this).find('.diamond-text-up').css({'top':'110px'})
        $(this).find('.diamond-text-down').css({'top':'250px'})
    })
}
advantage();

/*飞入效果*/
var fadeInUp = function (c) {

    var timeout = 300;
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

/*滚动条监听*/

    $(document).ready(function(){//在文档加载完毕后执行
        $(window).scroll(function(){//开始监听滚动条
            //获取当前滚动条高度
            var topp = $(document).scrollTop();
            console.log(topp)
            if(topp > 520){
                fadeInUp(".advantage-main-box")
            }
            if(topp > 1600){
                fadeInUp(".vision-main-box")
            }
            if(topp > 2500){
                $(".diamond").show().addClass("zoomIn");
            }
        })

    })






