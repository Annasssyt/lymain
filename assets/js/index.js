
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
            $('.business-detail').text('依托集团产业基础，专业管理团队通过辨识具有价值提升空间的资产项目，为企业延伸资产管理价值链，通过债务重组、提供流动性支持......')
            // $('.business-detail').text('依托集团产业基础，专业管理团队通过辨识具有价值提升空间的资产项目，为企业延伸资产管理价值链，通过债务重组、提供流动性支持、输入先进管理、解决历史遗留问题、引入战略合作伙伴等措施，改善企业财务状况，盘活资产，提升价值，为合作伙伴创造稳健回报。 对受托管理的资产进行快速和高效处置，并在此过程中借助集团的产业渠道，最大程度实现资产价值......')
        }
        else if(index==2){
            $(".business-right-btn").attr("href","tzgl.html");
            $('.business-title').text('投资管理')
            $('.business-detail').text('以专业的运作能力、杰出的投资团队、强大的资源整合能力，致力于为目标企业提供灵活多样的投资方式......')
            // $('.business-detail').text('充分响应国家发展现代服务业的号召，以国家积极推进现代服务产业的宏观指导为依据，凭借集团自身强大的资源整合能力，依托线上投资管理平台及线下广泛合作资源的诸多大型金融机构、行业协会、地方政府投融资平台等机构，建立汇集银信证保、小贷、保理、新金融等各类型的金融产品，以其专业的运作能力、杰出的投资团队、强大的资源整合能力，致力于为目标企业提供灵活多样的投资方式......')
        }
        else if(index==3){
            $(".business-right-btn").attr("href","glzx.html");
            $('.business-title').text('管理咨询')
            $('.business-detail').text(
                // '咨询团队将深入企业和行业，和企业管理人员密切配合，应用科学的方法找出企业面临问题的症结，进行定量和确有论据的定性分析，提出切实可行的解决方案，进而指导实施方案，使企业的运行机制得到改善，提高企业的管理水平和经济效益。' +
                '为客户提供金融、财务、税务、法务等多领域咨询服务......')
            // $('.business-detail').text('依托集团拥有专业团队和丰富的管理知识和经验，以客户至上的服务理念提供的高效率的服务。咨询团队将深入企业和行业，和企业管理人员密切配合，应用科学的方法找出企业面临问题的症结，进行定量和确有论据的定性分析，提出切实可行的解决方案，进而指导实施方案，使企业的运行机制得到改善，提高企业的管理水平和经济效益。为客户提供金融、财务、税务、法务等多领域咨询服务......')
        }
        else if(index==4){
            $(".business-right-btn").attr("href","jrkj.html");
            $('.business-title').text('金融科技')
            $('.business-detail').text('服务集团业务为核心,以金融科技思维重塑银行等金融机构其经营逻辑、业务流程、服务体系、管理模式和 IT 架构等......')
            // $('.business-detail').text('服务集团业务为核心,以金融科技思维重塑银行等金融机构其经营逻辑、业务流程、服务体系、管理模式和 IT 架构等，通过“金融+科技”，打造数据化、精准化、自动化、智能化的服务模式；依靠对精准市场定位及技术、场景、服务等优势，同时从集团多元化业务出发，为企业及用户提供技术咨询、产品定制、运维支持、技术赋能等多元化服务，同时充分运用 AI 人工智能、大数据、云计算、区块链等......')
        }
        else if(index==5){
            $(".business-right-btn").attr("href","gyl.html");
            $('.business-title').text('供应链金融')
            $('.business-detail').text('基于集团已有的金融资源与优势，通过与各类核心企业、监管方合作以提升供应链协同，降低供应链运营成本为目标，基于供应商与核心企业的交易数据和应收账款的分析评估而授信融资......')
            // $('.business-detail').text('基于集团已有的金融资源与优势，通过与各类核心企业、监管方合作以提升供应链协同，降低供应链运营成本为目标，基于供应商与核心企业的交易数据和应收账款的分析评估而授信融资。相比传统融资方式，具有：无担保，无抵押，综合利率低，授信额度高，放款速度快，随借随还的特点。在供应链金融的供给端，采取与多家银行合作的方式来进行供应链金融业务，保证供应商获得安全、低息的融资......')
        }
        else{
            $(".business-right-btn").attr("href","ky.html");
            $('.business-title').text('智慧康养')
            $('.business-detail').text('贯彻实施国家“健康中国”战略，结合集团产业优势，加强构筑“康养+”产业孵化模式，推进医养结合，加快康养事业和产业发展......')
            // $('.business-detail').text('贯彻实施国家“健康中国”战略，结合集团产业优势，加强构筑“康养+”产业孵化模式，推进医养结合，加快康养事业和产业发展；从消费者的需求出发，以健康管理为核心，快乐服务为依托，利用移动互联网、物联网、云计算、可穿戴产品技术等信息化手段，通过AI人工智能、大数据等技术，重点投资和发展智慧医疗、智慧健康管理等产业......')
        }
    })



    $('.diamond').unbind("click").bind("click",function () {
        $(this).addClass('diamond-active').siblings().removeClass('diamond-active');
        $(".mask").show();
        $(".pop").show().addClass('zoomIn');
        if($(this).index() == 1){
            $(".pop-btn").attr("href","business.html#jrkj");
            $(".pop-detail").text("服务集团业务为核心，以金融科技思维重塑银行等金融机构其经营逻辑、业务流程、服务体系、管理模式和 IT 架构等，通过“金融+科技”，打造数据化、精准化、自动化、智能化的服务模式......")
        }else if($(this).index() == 2){
            $(".pop-btn").attr("href","business.html#gyl");
            $(".pop-detail").text("基于集团已有的金融资源与优势，通过与各类核心企业、监管方合作以提升供应链协同，降低供应链运营成本为目标，基于供应商与核心企业的交易数据和应收账款的分析评估而授信融资。相比传统融资方式，具有：无担保，无抵押，综合利率低，授信额度高，放款速度快，随借随还的特点......")
        }else if($(this).index() == 3){
            $(".pop-btn").attr("href","business.html#tzzx");
            $(".pop-detail").text("依托集团拥有专业团队和丰富的管理知识和经验，以客户至上的服务理念提供的高效率的服务。咨询团队将深入企业和行业，和企业管理人员密切配合，应用科学的方法找出企业面临问题的症结，进行定量和确有论据的定性分析，提出切实可行的解决方案......");

        }else if($(this).index() == 4){
            $(".pop-btn").attr("href","business.html#ky");
            $(".pop-detail").text("贯彻实施国家“健康中国”战略，结合集团产业优势，加强构筑“康养+”产业孵化模式，推进医养结合，加快康养事业和产业发展；从消费者的需求出发，以健康管理为核心，快乐服务为依托，利用移动互联网、物联网、云计算、可穿戴产品技术等信息化手段......")
        } else{
            $(".pop-btn").attr("href","business.html");
            $(".pop-detail").text("依托集团产业基础，专业管理团队通过辨识具有价值提升空间的资产项目，为企业延伸资产管理价值链，通过债务重组、提供流动性支持、输入先进管理、解决历史遗留问题、引入战略合作伙伴等措施，改善企业财务状况，盘活资产，提升价值，为合作伙伴创造稳健回报......");
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






