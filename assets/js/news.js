$(".news-box").unbind("click").bind("click",function () {
    var uuid=$(this).attr("id");
    console.log(uuid)
    if(uuid){
        location.href="newDetail.html?uuid="+uuid;
    }
})