define(function (require,exports,module) {
    var nav = exports;


    /******api******/

    /******page******/
    var FunUtil = {};
    var HtmlUtil = {};


    /*手机端nav*/
    HtmlUtil.mianNav = function (tab) {
        var bannerHei;

        switch (tab){
            case "wapMain":bannerHei = $(window).height();
                break;
            case "wapAbout":bannerHei = 380;
                break;
            case "wapBusiness":bannerHei = 380;
                break;
            case "wapNews":bannerHei = 460;
                break;
            case "wapNewsd":bannerHei = 0;
                break;
            case "wapJoin":bannerHei = 380;
                break;
        }
        var navHtml='<img class="nav-logo" src="../assets/img/wap/index/logo_red_black.png" alt="">'+
            '<img src="../assets/img/wap/index/ic_open_nav_red.png" class="open-nav" alt="">'+
            '<div class="nav-main animated">'+
            '<img src="../assets/img/wap/index/ic_close_nav.png" class="close-nav" alt="">'+
            '<div class="nav-wapper">'+
            '<div class="nav-box '+(tab=="wapMain"?'nav-box-active':'')+'">'+
            '<div class="nav-title-one-box">'+
            '<div class="nav-line"></div>'+
            '<a href="indexwap.html" class="nav-title-one">首页</a>'+
            '</div>'+
            '<div class="nav-title-two-box"></div>'+
            '</div>'+
            '<div class="nav-box '+(tab=="wapAbout"?'nav-box-active':'')+'">'+
            '<div class="nav-title-one-box">'+
            '<div class="nav-line"></div>'+
            '<a href="wapabout.html" class="nav-title-one">关于量意</a>'+
            '<div class="nav-control-icon open">'+
            '<img src="../assets/img/wap/index/ic_open_more.png" class="nav-icon" alt="">'+
            '<img src="../assets/img/wap/index/ic_close_more.png" class="nav-icon-red" alt="">'+
            '</div>'+
            '</div>'+
            '<div class="nav-title-two-box">'+
            '<a href="wapabout.html" class="nav-title-two">集团概况</a>'+
            '<a href="wapabout.html#hxtd" class="nav-title-two">核心团队</a>'+
            '<a href="wapabout.html#hxjzg" class="nav-title-two">核心价值观</a>'+
            '<a href="wapabout.html#qybj" class="nav-title-two">区域布局</a>'+
            '</div>'+
            '</div>'+
            '<div class="nav-box '+(tab=="wapBusiness"?'nav-box-active':'')+'">'+
            '<div class="nav-title-one-box">'+
            '<div class="nav-line"></div>'+
            '<a href="wapzcgl.html" class="nav-title-one">业务服务</a>'+
            '<div class="nav-control-icon open">'+
            '<img src="../assets/img/wap/index/ic_open_more.png" class="nav-icon" alt="">'+
            '<img src="../assets/img/wap/index/ic_close_more.png" class="nav-icon-red" alt="">'+
            '</div>'+
            '</div>'+
            '<div class="nav-title-two-box">'+
            '<a href="wapzcgl.html" class="nav-title-two">资产管理</a>'+
            '<a href="waptzgl.html" class="nav-title-two">投资管理</a>'+
            '<a href="wapjrkj.html" class="nav-title-two">金融科技</a>'+
            '<a href="wapglzx.html" class="nav-title-two">管理咨询</a>'+
            '<a href="wapgyl.html" class="nav-title-two">供应链金融</a>'+
            '<a href="wapzhky.html" class="nav-title-two">智慧康养</a>'+
            '</div>'+
            '</div>'+
            '<div class="nav-box '+(tab=="wapJoin"?'nav-box-active':'')+'">'+
            '<div class="nav-title-one-box">'+
            '<div class="nav-line"></div>'+
            '<div class="nav-title-one">加入我们</div>'+
            '</div>'+
            '<div class="nav-title-two-box"></div>'+
            '</div>'+
            '</div>'+
            '</div>';


        $(".nav-content").html(navHtml);
        if (tab=="wapMain") {
            $(".nav-content").css({"background": "transparent","boxShadow":"none"});
            $(".nav-logo").attr('src','../assets/img/wap/index/logo_white.png');
            $(".open-nav").attr('src','../assets/img/wap/index/ic_open_nav_white.png');
        }

        $(document).ready(function () {//在文档加载完毕后执行
            $(window).scroll(function () {//开始监听滚动条
                //获取当前滚动条高度
                var topp = $(document).scrollTop();
                // if (topp >= 50&&topp >= 50) {
                //     $(".nav-content").css({"background": "#ffffff","boxShadow":"0 0 10px 0 rgba(0,0,0,0.1)"});
                //     $(".nav-logo").attr('src','../assets/img/wap/index/logo_red_black.png');
                //     $(".open-nav").attr('src','../assets/img/wap/index/ic_open_nav_red.png');
                // }
                if (tab=="wapMain"&&topp >= 50) {
                    $(".nav-content").css({"background": "transparent","boxShadow":"none"});
                    $(".nav-logo").attr('src','../assets/img/wap/index/logo_white.png');
                    $(".open-nav").attr('src','../assets/img/wap/index/ic_open_nav_white.png');
                } else {
                    $(".nav-content").css({"background": "#ffffff","boxShadow":"0 0 10px 0 rgba(0,0,0,0.1)"});
                    $(".nav-logo").attr('src','../assets/img/wap/index/logo_red_black.png');
                    $(".open-nav").attr('src','../assets/img/wap/index/ic_open_nav_red.png');
                }

                if (topp >= $(window).height()) {
                    $(".back-top").fadeIn();
                } else {
                    $(".back-top").fadeOut();
                }

            })

        })

        var nav= function () {
            $('.nav-title-two').unbind("click").bind("click",function () {
                $('.open-nav').show();
                $('.nav-main').hide();
            });
            $('.open-nav').unbind("click").bind("click",function () {
                $(this).hide();
                $('.nav-main').show().addClass('bounceInLeft').removeClass('bounceOutLeft');
            });
            $('.close-nav').unbind("click").bind("click",function () {
                $('.open-nav').show();
                $('.nav-main').addClass('bounceOutLeft').removeClass('bounceInLeft');

            });
            $('.nav-control-icon').unbind("click").bind("click",function () {
                if($(this).hasClass("open")){
                    $(this).addClass('close').removeClass('open');
                    $(this).parent('.nav-title-one-box').siblings('.nav-title-two-box').slideDown(500);
                    $(this).css({'transform':'rotate(180deg)'})
                }else{
                    $(this).addClass('open').removeClass('close');
                    $(this).parent('.nav-title-one-box').siblings('.nav-title-two-box').slideUp(500);
                    $(this).css({'transform':'rotate(0deg)'})
                }
            });

        }
        nav();


    };


    /*主站footer*/
    HtmlUtil.mianFooter = function () {
        var footHtml =
            '<div class="wap-footer-content content" style="padding-bottom: 0;">'+
            '<div class="wap-footer flex">'+
            '<div class="wap-footer-box">'+
            '<p class="footer-text">关于量意</p>'+
            '<div class="footer-line"></div>'+
            '</div>'+
            '<div class="wap-footer-box">'+
            '<p class="footer-text">业务服务</p>'+
            '<div class="footer-line"></div>'+
            '</div>'+
            // '<div class="wap-footer-box">'+
            // '<p class="footer-text">新闻资讯</p>'+
            // '<div class="footer-line"></div>'+
            // '</div>'+
            '<div class="wap-footer-box">'+
            '<p class="footer-text">联系我们</p>'+
            '<div class="footer-line"></div>'+
            '</div>'+
            '<div class="wap-footer-box">'+
            '<p class="footer-text">加入我们</p>'+
            '<div class="footer-line"></div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<p class="copyright">版权所有（C）量意集团 蜀ICP备18037172号</p>';

        $(".footer").html(footHtml);

    };

    /*人口*/
    var init = function (tab) {
        HtmlUtil.mianNav(tab);
        HtmlUtil.mianFooter();
    };

    nav.navInit = init;

});


