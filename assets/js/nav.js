define(function (require,exports,module) {
    /******8*/
    var nav = exports;


    /******api******/

    /******page******/
    var FunUtil = {};
    var HtmlUtil = {};


    /*主站nav*/
    HtmlUtil.mianNav = function (tab) {
        var bannerHei;

        switch (tab){
            case "main":bannerHei = $(window).height();
                break;
            case "about":bannerHei = 50;
                break;
            case "business":bannerHei = 50;
                break;
            case "news":bannerHei = 50;
                break;
            case "newsd":bannerHei = 0;
                break;
            case "join":bannerHei = 50;
                break;
        }


        var navHtml = '<div class="ly-header-box">'+
            '<a href="index.html" class="ly-logo">'+
            '<img src="assets/img/logo.png" class="h-logo" alt="">'+
            '</a>'+
            '<div class="ly-nav">'+
            '<a href="index.html" class="nav-box indexnav '+(tab=="main"?'nav-active':'')+'">首页</a>'+
            '<a href="about.html" class="nav-box business-nav aboutnav '+(tab=="about"?'nav-active':'')+'">关于量意'+
            '<object class="nav-mini-content">'+
            '<a class="nav-box-mini" href="about.html">集团概况</a>'+
            '<a class="nav-box-mini" href="about.html#hxtd">核心团队</a>'+
            '<a class="nav-box-mini" href="about.html#hxjzg">核心价值观</a>'+
            '<a class="nav-box-mini" href="about.html#qybj">区域布局</a>'+
            '</object>'+
            '</a>'+
            '<a href="business.html" class="nav-box business-nav businessnav '+(tab=="business"?'nav-active':'')+'">业务服务'+
            '<object class="nav-mini-content">'+
            '<a class="nav-box-mini" href="business.html">资产管理</a>'+
            '<a class="nav-box-mini" href="business.html#tzgl">投资管理</a>'+
            '<a class="nav-box-mini" href="business.html#glzx">管理咨询</a>'+
            '<a class="nav-box-mini" href="business.html#jrkj">金融科技</a>'+
            '<a class="nav-box-mini" href="business.html#gyljr">供应链金融</a>'+
            '<a class="nav-box-mini" href="business.html#zhky">智慧康养</a>'+
            '</object>'+
            '</a>'+
            '<a href="news.html" class="nav-box newsnav '+(tab=="news"||tab=="newsd"?'nav-active':'')+'">新闻资讯</a>'+
            '<a href="join.html" class="nav-box joinnav '+(tab=="join"?'nav-active':'')+'" >加入我们</a>'+
            '</div>'+
            '</div>';
        $("#ly-header").html(navHtml);
        if (tab=="newsd") {
            $("#ly-header").css({"background": "#ffffff","boxShadow":"0 0 10px 0 rgba(0,0,0,0.1)"});
            $(".business-btn-on").css({"background": "#E34745"});
            $(".nav-box").addClass('nav-box-down');
            $(".h-logo").attr('src','assets/img/logo1.png');
            $(".nav-active").css({"borderBottom": "3px solid #E34745","color":"#E34745"});
        }

        /*滚动条监听*/
        $(document).ready(function () {//在文档加载完毕后执行
            $(window).scroll(function () {//开始监听滚动条
                //获取当前滚动条高度
                var topp = $(document).scrollTop();
                if (topp >= bannerHei) {
                    __iswhell = false;
                    $("#ly-header").css({"background": "#ffffff","boxShadow":"0 0 10px 0 rgba(0,0,0,0.1)"});
                    $(".nav-mini-content").css({"boxShadow":"0px 4px 10px 0px rgba(238,238,238,1)"});
                    $(".business-btn-on").css({"background": "#E34745"});
                    $(".nav-box").addClass('nav-box-down');
                    $(".h-logo").attr('src','assets/img/logo1.png');
                    $(".nav-active").css({"borderBottom": "3px solid #E34745","color":"#E34745"});
                } else {
                    $("#ly-header").css({"background": "transparent","boxShadow":"none"});
                    $(".nav-mini-content").css({"boxShadow":"none"});
                    $(".business-btn-on").css({"background": "#ffffff"});
                    $(".nav-box").removeClass('nav-box-down');
                    $(".h-logo").attr('src','assets/img/logo.png');
                    $(".nav-active").css({"borderBottom": "3px solid #ffffff","color":"rgba(255,255,255,1)"});
                }

                if (topp >= $(window).height()) {
                    $(".back-top").fadeIn();
                } else {
                    $(".back-top").fadeOut();

                }

            })

        })

        $(".back-top").unbind('click').bind('click',function () {
            $("html,body").animate({scrollTop:0},800);
        });

    };


    /*主站footer*/
    HtmlUtil.mianFooter = function () {
        var footHtml ='<div class="footer-box">'+
            '<div>'+
            '<p>关于量意</p>'+
            '<div class="footer-line"></div>'+
            '<a href="about.html">集团概况</a>'+
            '<a href="about.html#hxtd">核心团队</a>'+
            '<a href="about.html#hxjzg">核心价值观</a>'+
            '<a href="about.html#qybj">区域布局</a>'+
            '</div>'+
            '<div>'+
            '<p>业务服务</p>'+
            '<div class="footer-line"></div>'+
            '<a href="business.html">资产管理</a>'+
            '<a href="business.html#tzgl">投资管理</a>'+
            '<a href="business.html#glzx">管理咨询</a>'+
            '<a href="business.html#jrkj">金融科技</a>'+
            '<a href="business.html#gyljr">供应链金融</a>'+
            '<a href="business.html#zhky">智慧康养</a>'+
            '</div>'+
            '<div>'+
            '<p>新闻资讯</p>'+
            '<div class="footer-line"></div>'+
            '<a href="news.html">媒体新闻</a>'+
            '</div>'+
            '<div>'+
            '<p>加入我们</p>'+
            '<div class="footer-line"></div>'+
            '<a href="join.html">职位信息</a>'+
            '</div>'+
            '<div style="width: 320px">'+
            '<p>联系我们</p>'+
            '<div class="footer-line"></div>'+
            '<p class="lx">400-62-00001</p>'+
            '<p class="lx">四川省成都市高新区金融城蜀锦路88号47层</p>'+
            '<img src="assets/img/code.png" alt="" class="code"/>'+
            '</div>'+
            '</div>'+
            '<p class="footer-bottom">'+
            '<div class="footer-bottom-box">'+
            '版权所有（C）量意集团  蜀ICP备18037172号'+
            '<a href="http://email.liang-e.com/" class="gotocomp" target="_blank"> < 企业通道 > </a>'+
            '</div>'+
            '</p>';
        $(".footer-content").html(footHtml);

    };

    /*人口*/
    var init = function (tab) {
        HtmlUtil.mianNav(tab);
        HtmlUtil.mianFooter();
    };

    nav.navInit = init;

});


