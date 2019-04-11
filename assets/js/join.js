var job= function () {
    $('.open-job').unbind("click").bind("click",function () {
        $(this).hide();
        $(this).parent('.job-top').siblings('.job-detail').slideDown(500);
        $(this).siblings('.close-job').show();
    });
    $('.close-job').unbind("click").bind("click",function () {
        $(this).hide();
        $(this).parent('.job-top').siblings('.job-detail').slideUp(500);
        $(this).siblings('.open-job').show();
    });
}
job();