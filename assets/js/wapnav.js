define(function (require,exports,module) {
    var nav = exports;


    /******api******/

    /******page******/
    var FunUtil = {};
    var HtmlUtil = {};


    /*手机端nav*/
    HtmlUtil.mianNav = function (tab) {

        // var hash=location.hash;
        console.log(tab);


        var navHtml='<a href="indexwap.html"><img class="nav-logo" src="../assets/img/wap/index/logo_red_black.png" alt=""></a>'+
            '<img src="../assets/img/wap/index/ic_open_nav_red.png" class="open-nav" alt="">'+
            '<div class="nav-main animated">'+
            '<img src="../assets/img/wap/index/ic_close_nav.png" class="close-nav" alt="">'+
            '<div class="nav-wapper">'+
            '<div class="nav-box">'+
            '<a href="indexwap.html" class="nav '+(tab=="wapMain"?'nav-active':'')+'">首页</a>'+
            '</div>'+
            '<div class="nav-box">'+
            '<div class="big-title-box-nav">'+
            '<div class="line-one"></div>'+
            '<div class="big-title-nav">关于量意</div>'+
            '</div>'+
            '<div class="small-title-box-nav" style="padding-bottom: 20px;">'+
            '<a href="wapabout.html" class="nav '+(tab==""?'nav-active':'')+'">集团概况</a>'+
            '<div class="line-two"></div>'+
            '<a href="wapabout.html#hxtd" class="nav '+(tab=="#hxtd"?'nav-active':'')+'">核心团队</a>'+
            '<div class="line-two"></div>'+
            '<a href="wapabout.html#hxjzg" class="nav '+(tab=="#hxjzg"?'nav-active':'')+'">核心价值观</a>'+
            '</div>'+
            '<div class="small-title-box-nav">'+
            '<a href="wapabout.html#qybj" class="nav '+(tab=="#qybj"?'nav-active':'')+'">区域布局</a>'+
            '</div>'+
            '</div>'+
            '<div class="nav-box">'+
            '<div class="big-title-box-nav">'+
            '<div class="line-one"></div>'+
            '<div class="big-title-nav">业务服务</div>'+
            '</div>'+
            '<div class="small-title-box-nav" style="padding-bottom: 20px;">'+
            '<a href="wapzcgl.html" class="nav '+(tab=="zcgl"?'nav-active':'')+'">资产管理</a>'+
            '<div class="line-two"></div>'+
            '<a href="waptzgl.html" class="nav '+(tab=="tzgl"?'nav-active':'')+'">投资管理</a>'+
            '<div class="line-two"></div>'+
            '<a href="wapglzx.html" class="nav '+(tab=="glzx"?'nav-active':'')+'">管理咨询</a>'+
            '</div>'+
            '<div class="small-title-box-nav">'+
            '<a href="wapjrkj.html" class="nav '+(tab=="jrkj"?'nav-active':'')+'">金融科技</a>'+
            '<div class="line-two"></div>'+
            '<a href="wapgyl.html" class="nav '+(tab=="gyljr"?'nav-active':'')+'">供应链金融</a>'+
            '<div class="line-two"></div>'+
            '<a href="wapzhky.html" class="nav '+(tab=="zhky"?'nav-active':'')+'">智慧康养</a>'+
            '</div>'+
            '</div>'+
            '<div class="nav-box">'+
            '<a href="wapjoin.html" class="nav '+(tab=="wapJoin"?'nav-active':'')+'">加入我们</a>'+
            '</div>'+
            '</div>'+
            '</div>';


        $(".nav-content").html(navHtml);

        // window.onhashchange = function(){
        //     hash=location.hash;
        //     console.log(hash);
        //     // $(".nav-content").html(navHtml);
        // }

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
                if (tab=="wapMain"&&topp <= 50) {
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
            $('.nav').unbind("click").bind("click",function () {
                $('.open-nav').show();
                $('.nav-main').hide();
                $('html,body').removeClass('ovfHiden'); //使网页恢复可滚
            });
            $('.open-nav').unbind("click").bind("click",function () {
                $(this).hide();
                $('.nav-main').show().addClass('bounceInLeft').removeClass('bounceOutLeft');
                $('html,body').addClass('ovfHiden'); //使网页不可滚动
            });
            $('.close-nav').unbind("click").bind("click",function () {
                $('.open-nav').show();
                $('.nav-main').addClass('bounceOutLeft').removeClass('bounceInLeft');
                $('html,body').removeClass('ovfHiden'); //使网页恢复可滚
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
            '<a href="indexwap.html" class="footer-text">首页</a>'+
            '<div class="footer-line"></div>'+
            '</div>'+
            '<div class="wap-footer-box">'+
            '<a href="wapabout.html" class="footer-text">关于量意</a>'+
            '<div class="footer-line"></div>'+
            '</div>'+
            // '<div class="wap-footer-box">'+
            // '<p class="footer-text">新闻资讯</p>'+
            // '<div class="footer-line"></div>'+
            // '</div>'+
            '<div class="wap-footer-box">'+
            '<a href="wapzcgl.html" class="footer-text">业务服务</a>'+
            '<div class="footer-line"></div>'+
            '</div>'+
            '<div class="wap-footer-box">'+
            '<a href="wapjoin.html" class="footer-text">加入我们</a>'+
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


