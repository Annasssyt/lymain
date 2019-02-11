$(".news-box").unbind("click").bind("click",function () {
    var uuid=$(this).attr("id");
    console.log(uuid)
    if(uuid){
        location.href="newDetail.html?uuid="+uuid;
    }
})
$(document).ready(function(){
    $(window).scroll(function(){
        var topp = $(document).scrollTop();
        if(topp > 520){
            $("#ly-header").css({"opacity":"0.85"});
        }else{
            $("#ly-header").css({"opacity":"1"});
        }
    })
})