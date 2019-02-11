/*合作伙伴*/
var introduce= function () {
    $(".tab-box").on("click",function () {
        var $this = $(this);
        var $index = $this.index();
        $this.addClass('tab-box-active').siblings().removeClass('tab-box-active');
        if($index == 0){
            $(".row").css("left","100px")
            $(".b-one").show();
            $(".b-two").hide();
            $(".b-three").hide();
            $(".b-four").hide();
            $(".b-five").hide();
            $(".zg").addClass("zg-active");
            $(".bl").removeClass("bl-active");
            $(".gyl").removeClass("gyl-active");
            $(".tzzx").removeClass("tzzx-active");
            $(".ky").removeClass("ky-active");
        }else if($index == 1){
            $(".row").css("left","330px")
            $(".b-one").hide();
            $(".b-two").show();
            $(".b-three").hide();
            $(".b-four").hide();
            $(".b-five").hide();
            $(".zg").removeClass("zg-active");
            $(".bl").addClass("bl-active");
            $(".gyl").removeClass("gyl-active");
            $(".tzzx").removeClass("tzzx-active");
            $(".ky").removeClass("ky-active");
        }else if($index == 2){
            $(".row").css("left","570px")
            $(".b-one").hide();
            $(".b-two").hide();
            $(".b-three").show();
            $(".b-four").hide();
            $(".b-five").hide();
            $(".zg").removeClass("zg-active");
            $(".bl").removeClass("bl-active");
            $(".gyl").addClass("gyl-active");
            $(".tzzx").removeClass("tzzx-active");
            $(".ky").removeClass("ky-active");
        }else if($index == 3){
            $(".row").css("left","810px")
            $(".b-one").hide();
            $(".b-two").hide();
            $(".b-three").hide();
            $(".b-four").show();
            $(".b-five").hide();
            $(".zg").removeClass("zg-active");
            $(".bl").removeClass("bl-active");
            $(".gyl").removeClass("gyl-active");
            $(".tzzx").addClass("tzzx-active");
            $(".ky").removeClass("ky-active");
        }else {
            $(".row").css("left","1050px")
            $(".b-one").hide();
            $(".b-two").hide();
            $(".b-three").hide();
            $(".b-four").hide();
            $(".b-five").show();
            $(".zg").removeClass("zg-active");
            $(".bl").removeClass("bl-active");
            $(".gyl").removeClass("gyl-active");
            $(".tzzx").removeClass("tzzx-active");
            $(".ky").addClass("ky-active");
        }
    });
}
introduce();

if(location.hash){
    if(location.hash == '#jrkj'){
        $(".tab-box").eq(1).trigger('click');
    }
    if(location.hash == '#gyl'){
        $(".tab-box").eq(2).trigger('click');
    }
    if(location.hash == '#tzzx'){
        $(".tab-box").eq(3).trigger('click');
    }
    if(location.hash == '#ky'){
        $(".tab-box").eq(4).trigger('click');
    }
    location.hash = '';
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

$(document).ready(function(){
    $(window).scroll(function(){
        var topp = $(document).scrollTop();
        if(topp > 400){
            $("#ly-header").css({"opacity":"0.85"});
        }else{
            $("#ly-header").css({"opacity":"1"});
        }
    })
})

