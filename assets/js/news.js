var newsItem=[
    {
        id:'1',
        time:'2019-05-31',
        pic:'assets/img/news/pic_news1.png',
        title:'移动互联网与金融安全知识公益讲座——量意科技走进大学校园',
        abstract:'为进一步普及互联网金融安全知识，提高大学生防范金融诈骗的意识，5月24日，受四川天一学院邀请，并在绵竹市金融工作局指导下，量意智慧科技有限公司总经理吴敖以授课专家的身份，在该学院学术报告厅发表了…'
    },
    {
        id:'2',
        time:'2019-04-04',
        pic:'assets/img/news/pic_new_0.png',
        title:'量意智慧科技受邀参加成都市交子科技金融协会交子半月坛——走进冰鉴科技',
        abstract:'3月29日，量意集团旗下量意智慧科技有限公司受邀请参加由成都市交子科技金融协会主办、成都冰鉴信息科技有限公司协办的第四期交子半月坛交流会。成都市交子科技金融协会副秘书长金石、成都冰鉴信息科技有限公司总经理…'
    },
    {
        id:'3',
        time:'2018-12-27',
        pic:'assets/img/news/pic_new_5.png',
        title:'税务总局督导调研个税抵扣 确保纳税人早享新年减税红包',
        abstract:'12月26日，国家税务总局党委书记、局长王军到北京督导调研个人所得税第二步改革相关准备情况，看望慰问国家税务总局北京12366纳税服务中心工作人员，并赴中国石油化工集团有限公司实地了解个税政策…'

    },
    {
        id:'4',
        time:'2018-12-21',
        pic:'assets/img/news/pic_new_2.png',
        title:'国务院金融稳定发展委员会办公室召开资本市场改革与发展座谈会',
        abstract:'12月20日，人民银行副行长、国务院金融稳定发展委员会办公室副主任刘国强主持部分商业银行、证券公司、保险机构、信托公司、基金公司负责人座谈会，听取对当前资本市场改革发展的意见建议。银保监…'
    },
    {
        id:'5',
        time:'2018-09-05',
        pic:'assets/img/news/pic_new_4.png',
        title:'搭建对接合作平台 促进银企面对面沟通',
        abstract:'为贯彻落实党中央、国务院决策部署，深入了解民营企业、小微企业金融服务情况，搭建银企之间的沟通对接平台，2018年9月4日，人民银行和全国工商联联合召开…'


    },
    {
        id:'6',
        time:'2018-07-01',
        pic:'assets/img/news/pic_new_3.png',
        title:'综合施策 精准发力 进一步改进和深化小微企业金融服务',
        abstract:'易 纲 同志们，这次电视电话会议主题是贯彻落实党中央、国务院决策部署和6月20日国务院常务会议要求，宣传解读人民银行、银保监会、证监会、发展改革委、财政部等五部委关于进一步深化小微企业金融服务的最新政策措施…'


    },
    {
        id:'7',
        time:'2018-03-27',
        pic:'assets/img/news/pic_new_1.png',
        title:'稳中求进 积极有为 更好服务实体经济——中国人民银行行长易纲在中国发展高层论坛上的讲话',
        abstract:'女士们、先生们、各位来宾：很高兴又来到中国发展高层论坛，和大家一起分享供给侧结构性改革过程的金融政策。我愿意利用这个机会与大家分享一下我工作的一些体会和思路。首先我们欣喜地看到，当前中国经济总体…'

    }
];

var newsInit=function () {
    var html='';
    for(var i=0;i<newsItem.length;i++){
        var li = newsItem[i];
        var liOb = {
            id:li.id || '',
            time:li.time || '',
            pic:li.pic || '',
            title:li.title || '',
            abstract:li.abstract || '',
        };
        var htmLi= '<div class="news-box" id="'+liOb.id+'">'+
            '<div class="news-img-box">'+
            '<img src="'+liOb.pic+'" class="news-img" alt="">'+
            '</div>'+
            '<div class="news-text-box">'+
            '<p class="news-title">'+liOb.title+
            '</p>'+
            '<p class="news-abstract">'+liOb.abstract+
            '</p>'+
            '<p class="news-time">'+liOb.time+
            '</p>'+
            '</div>'+
            '</div>';
        html+=htmLi;
    }
    $('.news-main').append(html);
    $(".news-box").unbind("click").bind("click",function () {
        var uuid=$(this).attr("id");
        if(uuid){
            // location.href="newDetail.html?uuid="+uuid;
            window.open("newDetail.html?uuid="+uuid);
        }
    })
}

newsInit();
