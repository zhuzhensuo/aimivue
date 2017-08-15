<template>
	<div>
		<div class="information">
			<div class="infor-wrap">
				<h3 class="infor-tit">借款人信息</h3>
				<div class="infor-table">
					<dl class="clearfix">
						<dd class="t"><span>借款人</span></dd>
						<dd><span>黄**</span></dd>
						<dd class="t"><span>性别</span></dd>
						<dd><span>男</span></dd>
						<dd class="t"><span>身份证号</span></dd>
						<dd><span>37** **** **** 1218</span></dd>
						<dd class="t"><span>年龄</span></dd>
						<dd><span>30</span></dd>
						<dd class="t"><span>户籍城市</span></dd>
						<dd><span>上海</span></dd>
						<dd class="t" style=" background:none;border-left:0;"><span></span></dd>
						<dd style="border-left:none;"></dd>
					</dl>
				</div>
			</div>
			<div class="infor-wrap">
				<h3 class="infor-tit">图片资料</h3>
						<ul class="clearfix" id="ul">
                                <li>
                <a class="lightbox" rel="pic" href="https://res.aimilicai.com/assets/2016/api/20170630/1816314241.jpg">
                    <img src="https://res.aimilicai.com/assets/2016/api/20170630/small_1816314241.jpg">
                </a>
            </li>
                                <li>
                <a class="lightbox" rel="pic" href="https://res.aimilicai.com/assets/2016/api/20170630/1816322127.jpg">
                    <img src="https://res.aimilicai.com/assets/2016/api/20170630/small_1816322127.jpg">
                </a>
            </li>
                                <li>
                <a class="lightbox" rel="pic" href="https://res.aimilicai.com/assets/2016/api/20170630/1816396375.jpg">
                    <img src="https://res.aimilicai.com/assets/2016/api/20170630/small_1816396375.jpg">
                </a>
            </li>
                                <li>
                <a class="lightbox" rel="pic" href="https://res.aimilicai.com/assets/2016/api/20170630/1816394461.jpg">
                    <img src="https://res.aimilicai.com/assets/2016/api/20170630/small_1816394461.jpg">
                </a>
            </li>
                                <li>
                <a class="lightbox" rel="pic" href="https://res.aimilicai.com/assets/2016/api/20170630/1816409216.jpg">
                    <img src="https://res.aimilicai.com/assets/2016/api/20170630/small_1816409216.jpg">
                </a>
            </li>
                                <li>
                <a class="lightbox" rel="pic" href="https://res.aimilicai.com/assets/2016/api/20170630/1816403373.jpg">
                    <img src="https://res.aimilicai.com/assets/2016/api/20170630/small_1816403373.jpg">
                </a>
            </li>
                                <li>
                <a class="lightbox" rel="pic" href="https://res.aimilicai.com/assets/2016/api/20170630/1816404924.jpg">
                    <img src="https://res.aimilicai.com/assets/2016/api/20170630/small_1816404924.jpg">
                </a>
            </li>
                        </ul>
			</div>
		</div>
	</div> 
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.infor-wrap{margin-top:40px;}
.infor-tit{color:#333; font-size:20px; height:50px;}
.infor-table dd{float:left; height:48px; line-height:48px;width:407px; font-size:16px;color:#333;border-left:1px solid #ddd;border-top:1px solid #ddd;}
.infor-table dl{border-right:1px solid #ddd; border-bottom:1px solid #ddd;}
.infor-table dd span{padding-left:20px;}
.infor-table dd.t{width:160px; background:#F2F2F2;}
.infor-table dd.t span{padding-left:40px;}
.infor-wrap ul{padding:50px 0;}
.infor-wrap ul li {
    float: left;
    text-align: center;
    width: 25%;
    padding-bottom: 28px;
}
</style>
