<template>
	<div class="footer">
    <div class="w1010">
        <div class="clearfix foot_up">
            <div class="aboutus">
                <dl>
                    <dt><a href="javascript:void(0);">关于我们</a></dt>
                    <dd><a href="https://www.aimilicai.com/news/detail/105">公司简介</a></dd>
                    <dd><a href="https://www.aimilicai.com/news/detail/113">联系我们</a></dd>
                    <dd><a href="https://www.aimilicai.com/news/indexjob">招贤纳士</a></dd>
                </dl>
                <dl>
                    <dt><a href="javascript:void(0);">公司资讯</a></dt>
                    <dd><a href="https://www.aimilicai.com/news/indexgongao/41">公司动态</a></dd>
                    <dd><a href="https://www.aimilicai.com/news/indexgongao/34">最新公告</a></dd>
                    <dd><a href="https://www.aimilicai.com/news/detail/109">产品介绍</a></dd>
                </dl>
                <dl>
                    <dt><a href="javascript:void(0);">安全保障</a></dt>
                    <dd><a href="https://www.aimilicai.com/news/detail/107">风险控制</a></dd>
                    <dd><a href="https://www.aimilicai.com/news/detail/111">法律保障</a></dd>
                    <dd><a href="https://www.aimilicai.com/news/detail/106">隐私保护</a></dd>
                </dl>
                <dl>
                    <dt><a href="javascript:void(0);">帮助中心</a></dt>
                    <dd><a href="https://www.aimilicai.com/news/indexfaq">常见问题</a></dd>
                    <dd><a href="https://www.aimilicai.com/news/detail/108">体现规律</a></dd>
                    <dd><a href="https://www.aimilicai.com/news/detail/114">网站地图</a></dd>
                </dl>
            </div>
			<div class="hot_line">
                <dl>
                    <dt><span>热线电话</span>（ 服务时间：09：30 - 18：30 ）</dt>
                    <dd class="call">400-666-2082</dd>
                </dl>
                <div class="head clearfix">
                    <div class="head_left f_r">
                        <ul>
                            <li class="weibo img" @mouseover='wbshow=true' @mouseout='wbshow=false'>
                                <a href="javascript:void(0);">&nbsp;</a>

                                <div v-show='wbshow'><span><img src="https://res.aimilicai.com/assets/2016/images/wb_select0228.jpg"></span></div>
                            </li>
                            <li class="weixin img" @mouseover='wxshow=true' @mouseout='wxshow=false'>
                                <a href="javascript:void(0);">&nbsp;</a>

                                <div v-show='wxshow'>
                                    <dl>
                                        <dt>扫码关注微信公众号</dt>
                                        <dd><img src="https://res.aimilicai.com/assets/2016/images/wx_select0228.jpg"></dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="erweima">
                <dl>
                    <dt><img src="https://res.aimilicai.com/assets/2016/images/ewm.png"></dt>
                </dl>
            </div>
            
        </div>
        <div class="foot_down clearfix">
            <div class="fd_left">
                <dl>
                    <dt>©2015 爱米理财 All rights reserved |上海虎信金融信息服务有限公司 | 沪ICP备 15042727号-2号</dt>
                </dl>
            </div>            
        </div>
    </div>
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
  data(){
  	return {
  		wbshow:false,
  		wxshow:false
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer{padding:40px 0 115px; background:#262839; position:relative;margin-top:45px;}
.aboutus{float:left;*width:580px;}
.aboutus dl{float:left;width:145px;}
.aboutus dl dt{font-size:18px;color:#666;height:38px;}
.aboutus dl dt a{color:#999; display:block; line-height:18px;border-left:2px solid #999;padding-left:8px;}
.aboutus dl dd{ line-height:30px;}
.aboutus dl dd a{color:#999;}
.erweima{float:right;}
.erweima dd{ line-height:30px;}
.erweima dd a{color:#666;font-size:12px;}
.hot_line{float:left; text-align:right; width:300px;}
.hot_line dl dt{color:#999;font-size:13px;}
.hot_line dl dd.call{font-size:30px;color:#ccc;margin-top:10px;}
.foot_down{margin-top:25px;border-top:1px solid #353748;padding-top:25px;}
.fd_left{font-size:12px; text-align:center;color:#999;}
.fd_right{float:right;margin-top:10px;}
.fd_right a{margin:0 5px;}
.fd_left dd{margin-top:10px;}
.head{ position:relative; z-index:12;}
.footer .head_left{ position:absolute;right:0;top:0;}

.slidenav{position:fixed; right:0;top:0; height:100%;width:38px;z-index:1;border:1px solid #ECEDEF; background:white;}
.fixed{ position:absolute;height:162px;width:100%;left:0;top:50%;margin-top:-81px;border-top:1px solid #ECEDEF;}
.fixed ul li{ height:39px;vertical-align:middle; position:relative;border-bottom:1px solid #ECEDEF;}
.fixed ul li a{ position:absolute; width:100%; height:100%;}
.fixed ul li div{ display:none; position:absolute; width:100px; border:1px solid #EDEDED;top:-1px;right:38px; background:white; text-align:center;border-right:none;}
.fixed ul li.li1 a{ background:url(../assets/kefuer.png) no-repeat center center;}
.fixed ul li.li1 a:hover{ background:#35B5FF url(../assets/kefueractive.png) no-repeat center center;}
.fixed ul li.li2 a{ background:url(../assets/weixiner.png) no-repeat center center;}
.fixed ul li.li2 a:hover{ background:#35B5FF url(../assets/weixineractive.png) no-repeat center center;}
.fixed ul li.li3 a{ background:url(../assets/duihuaer.png) no-repeat center center;}
.fixed ul li.li3 a:hover{ background:#35B5FF url(../assets/duihuaeractive.png) no-repeat center center;}
.fixed ul li.li4 a{ background:url(../assets/toper.png) no-repeat center center;}
.fixed ul li.li4 a:hover{ background:#35B5FF url(../assets/backtopacitve.png) no-repeat center center;}

.fixed ul li.li1 div{width:130px;top:-31px;}
.fixed ul li.li1 div dl{padding:20px 0;}
.fixed ul li.li1 div dl dt{font-size:15px;}
.fixed ul li.li1 div dl dd{color:#ff4e50; font-size:15px;}
.fixed ul li.li1 div dl dd span{color:#333; font-size:12px;}
.fixed ul li.li3 div,.fixed ul li.li4 div{ line-height:39px; font-size:15px;}
.fixed ul li.li2 div { text-align:center; width:132px;top:-58px;padding:0 0 5px;}
.fixed ul li.li2 div dl{padding:5px;font-size:15px;}
.fixed ul li.li2 div dl img{ display:block;margin:0 auto;}
</style>
