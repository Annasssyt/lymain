
var getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
};

var uuid= getUrlParam("uuid");
if(uuid==1){
    $(".one").show()
}
if(uuid==2){
    $(".two").show()
}
if(uuid==3){
    $(".three").show()
}
if(uuid==4){
    $(".four").show()
}
if(uuid==5){
    $(".five").show()
}
if(uuid==6){
    $(".six").show()
}
if(uuid==7){
    $(".seven").show()
}
if(uuid==8){
    $(".eight").show()
}
if(uuid==9){
    $(".nine").show()
}
$(document).ready(function(){
    $(window).scroll(function(){
        var topp = $(document).scrollTop();
        if(topp > 470){
            $("#ly-header").css({"opacity":"0.85"});
        }else{
            $("#ly-header").css({"opacity":"1"});
        }
    })
})