<template>
  <div>
    <topbar></topbar>
    <div class="main">
    	<div class="otherban">
    		<div class="detail-wrap w1140">
    			<div class="amdqing">
					<div class="amdq_wrap">
						<div class="clearfix">
							<div class="amdq_left f_l">
								<div class="amdq2">
									<div class="amdq_tit">
										<dl>
											<dt>爱米定期1月F1705064</dt>
										</dl>
									</div>
									<div class="amdq_left_wrap">
										<div class="clearfix amdq_dl">
											<dl class="lilv" style="width:40%">
												<dd><span>12.00</span><i>％</i></dd>
												<dt>预期年华收益率</dt>
											</dl>
											<dl style="width:40%">
												<dd>3个月</dd>
												<dt>理财期限</dt>
											</dl>
											<dl style="width:20%">
												<dd>100,000</dd>
												<dt>项目总金额</dt>
											</dl>
											
											
										</div>
										<div class="amdq_ul">
											<ul>
												<li class="percent clearfix"><span><i style="width:45%;"></i></span></li>
												<li class="progress"><font>进度：45%</font><span>投资10000元，每年为投资人赚取1000元理财收益</span></li>
												<li class="last-li clearfix">
													<span>剩余金额：<font>35,400元</font></span>
													<span align="center">保障方式：<font>机构代偿</font></span>
													<span align="right">计息方式：<font>先息后本</font></span>
												</li>
											</ul>
										</div>
										
									</div>
								</div>
							</div>
							<div class="amdq_right f_r">
								<div class="account_yue">
									<div class="account_yues" v-if='haslogin'>
										
										<form>
											<dl>
												<dd><i>账户余额：</i><span>727,516.00元</span></dd>
												<dd class="border"><i>投资余额：</i><input type="text" class="howmuch" value="请按100元的整数倍购买"></dd>				
												<dd class="dd border borders"><i>投资券：</i><input type="text" readonly="" class="howmuch" value="选择红包"></dd>					
												<dd class="toubiao"><input type="submit" value="立即抢购" class="tb"></dd>
												<dd class="dd-last">温馨提示：市场有风险，投资需谨慎</dd>
												<dd class="dd-last2"><input type="checkbox">&nbsp;我已阅读并同意<a href="#">《爱米理财定期投资协议》</a></dd>
											</dl>
										</form>
									</div>
									<div class="amdq_list" v-else>
										<div class="loginbox2">
											<form>
												<div class="phonenumber commoninput">
													<dl class="clearfix">
														<dd><font>请输入您的手机号码</font><input type="text" class="shoujihao"></dd>
													</dl>
													<p>您输入额信息有误，请重新输入</p>
													<i></i>
												</div>
												<div class="pwd commoninput">
													<dl class="clearfix">
														<dd><font>请输入登录密码</font><input type="password" class="loginpwd"></dd>
													</dl>
													<p>您输入额信息有误，请重新输入</p>
													<i></i>
												</div>
												<div class="btns submit"><input type="submit" @click='loginIn' value="立即登录投资" class="loginnow button"></div>
												<div class="register">
													<dl class="clearfix">
														<dt><a href="register.html">还没有账号？立即注册</a></dt>
														<dd><a href="###">忘记密码？</a></dd>
													</dl>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
    	</div>

    </div>
    <div class="licai_explain w1140">
		<h1>剩余时间：<span class="timeover">
			<a href="javascript:;" class="day">0</a>天<a href="javascript:;" class="hour">0</a>小时<a href="javascript:;" class="min">0</a>分<a href="javascript:;" class="second">0</a>秒</span>
		</h1>
		<div class="process">
			<div class="proceing">
				<dl class="clearfix">
					<dd class="active">
						<span></span>
						<div>
							<p><font>发布时间</font><br>17-03-27</p>
						</div>
					</dd>
					<dd>
						<span></span>
						<div>
							<p><font>项目满标</font><br>17-03-27</p>
						</div>
					</dd>
					<dd>
						<span></span>
						<div>
							<p><font>项目起息</font><br>17-03-27</p>
						</div>
					</dd>
					<dd>
						<span></span>
						<div>
							<p><font>项目结束</font><br>17-03-27</p>
						</div>
					</dd>
				</dl>
			</div>
		</div>
		<div class="datawrap">
			<div class="data_tit data_tit2">
				<ul class="clearfix">
					<li v-for='(item,index) in tabs' :class="{'active':index==cur}" @click='changeTab(index,item.view)'><span>{{item.tit}}</span></li>
				</ul>
			</div>
			<div>
				<component :is='currentView' keep-alive></component>
			</div>
		</div>
	</div>
	
    </div>
    <foot></foot>
  </div>
</template>
</template>
<script>
import topbar from './components/topbar'
import foot from './components/footer'
import xmjs from './components/xmjs'
import zcxq from './components/zcxq'
import rgjl from './components/rgjl'
import hkjh from './components/hkjh'
import {mapActions,mapState} from 'vuex'
export default {
  name: 'app',
  data(){
  	return {
  		tabs:[
	  		{
	  			tit:'项目介绍',
	  			view:'xmjs'
	  		},
	  		{
	  			tit:'资产详情',
	  			view:'zcxq'
	  		},
	  		{
	  			tit:'认购纪录',
	  			view:'rgjl'
	  		},
	  		{
	  			tit:'还款计划',
	  			view:'hkjh'
	  		}
  		],
  		cur:0,
  		currentView:'xmjs'
  	}
  },
  components:{
  	topbar,
  	foot,
  	xmjs,
  	zcxq,
  	rgjl,
  	hkjh
  },
  methods:{
  	changeTab(i,view){
  		this.cur=i;
  		this.currentView=view;
  	},
  	...mapActions(['loginIn'])
  },
  computed:mapState(['haslogin'])
}
</script>

<style>
.commoninput{border:1px solid #333; background:white;border-radius:3px;margin-bottom:19px;}
.commoninput dl dt{width:54px; height:42px;border-right:1px solid #333; position:relative;}
.commoninput dl dt i{ position:absolute; left:50%;top:50%;}
.commoninput dl dt,.commoninput dl dd{float:left;}
.commoninput dl dd{position:relative;height:42px;}
.commoninput dl dd font{ position:absolute;left:15px;top:12px;color:#ccc;}
.commoninput dl dd input{border:none; outline:0 none; background:transparent; position:relative;height:19px; line-height:19px;float:left;margin:12px 0 0 15px;}
.phonenumber dl dt i{height:18px; width:18px; background-position:-270px -26px;margin:-9px 0 0 -9px;}
.phonenumber dd,.pwd dd{width:100%;}
.commoninput dd{width:170px;}
.phonenumber dd input,.pwd dd input{width:90%;}
.infoscenter dd.d input{width:100%;}
.pwd dl dt i{height:20px; width:18px; background-position:-270px 0;margin:-10px 0 0 -9px;}
.check input{outline:0 none;margin-left:2px;}
.submit{padding:22px 0;}
.btns{height:44px;}
.button{ position:relative;left:0;top:0;border:0 none;outline:0;width:100%; height:100%;color:white;border-radius:4px; background:#FF3248;
font-family:'Microsoft YaHei';font-size:14px;*height:44px;}
.register dt{float:left;}
.register dt a{color:#ff544f;}
.register dd{float:right;font-size:100%;}
.register dd a{color:#666;}

.otherban{ height:404px; background:#E8F3FD url(./assets/ban-footer.png) no-repeat center bottom;}
.detail-wrap{padding-top:40px;}
.amdq_tit{ height:40px;line-height:40px;overflow:hidden;}
.amdq_tit dt{float:left; font-size:20px;color:#333;padding-right:40px; }
.amdq_tit dd{float:right;}
.amdq_tit dd span{color:#ff544f;}
.amdq_tit dd a{color:#999;}
.amdq_left_wrap{padding:20px 0 10px 0;}
.amdq_left{width:65%; background:white;}
.amdq_left div.amdq2{padding:20px 35px 35px;}
.amdq_right{width:34%;background:white; height:319px;}
.amdq_dl dl{float:left; width:33%;}
.amdq_dl dl.noborder{border:none;}
.amdq_dl dl dt{color:#999; font-size:16px;margin-top:8px;}
.amdq_dl dl dd{color:#333;font-size:30px; height:45px; line-height:45px;}
.amdq_dl dl dd span{font-size:48px;color:#ef495f; font-family:Arial;}
.amdq_dl dl dd i{color:#ef495f;font-size:20px;}
.amdq_dl dl dd font{font-size:36px;}
.amdq_ul{color:#555;margin-top:30px;*margin-top:10px;}
.amdq_ul p{margin-top:20px;}
.amdq_ul ul li.percent span{float:left;}
.amdq_ul ul li.percent font{float:left;margin-top:5px;}
.amdq_ul ul li.percent span{width:100%;height:4px; background:#F4F4F4;margin-right:20px;border-radius:2px; position:relative; overflow:hidden; line-height:4px;}
.amdq_ul ul li.percent i{ position:absolute;left:0;top:0;height:100%; background:#33B5FF;border-radius:2px;}
.amdq_ul ul li em{font-size:24px;}
.amdq_ul ul li.progress{ height:25px; line-height:25px;margin-top:10px;}
.amdq_ul ul li.progress font{float:left;color:#999;}
.amdq_ul ul li.progress span{float:right;}
.amdq_ul ul li.last-li{margin-top:30px; vertical-align:middle;font-size:16px;}
.amdq_ul ul li.last-li span{float:left;width:33.3%;overflow:hidden;color:#999;}
.amdq_ul ul li.last-li span font{color:#333;font-size:16px;}
.account_yue .soldout{ text-align:center;padding-top:45px;}
.account_yues{padding:0px 38px 20px;}
.account_yues dl dd{color:#333;margin-top:18px; line-height:20px;}
.account_yues dl dd i{display:inline-block;width:96px; text-align:right; font-size:17px;color:#999; line-height:40px;}
.account_yues dl dd.border {height:42px;}
.account_yues dl dd.borders input.howmuch{ background:url(./assets/slectarr.png) no-repeat 180px center;}
.account_yues dl dd.border input{float:left;}
.account_yues dl dd.border i{border:1px solid #ccc;border-right:none;float:left;color:#666;border-radius:6px 0 0 6px;}
.account_yues dl dd span{color:#333;font-size:17px;}
.account_yues dl dd input.howmuch{ background:white;border:1px solid #ccc;border-left:0;outline:none 0;width:200px;padding-left:10px; height:40px; line-height:40px;color:#bbb; font-size:17px;border-radius:0 6px 6px 0;}
.account_yues dl dd.toubiao input{ width:227px; height:40px; background:#FF3248;border:0 none;border-radius:20px;color:white;font-size:16px;}
.account_yues dl dd.toubiao{margin-top:30px; text-align:center;}
.account_yues dl dd.dd{ position:relative;margin-top:15px; z-index:100;}
.account_yues dl dd.dd input{cursor:pointer;}
.account_yues dl dd.dd-last{font-size:12px;color:#999;margin-top:10px; text-align:center;}
.account_yues dl dd.dd-last a{color:#01b9ff;}
.account_yues dl dd.dd-last2{ text-align:center;margin-top:5px;}
.account_yues dl dd.dd-last2 a{color:#01b9ff;}
.loginbox2{padding:42px 62px 30px 62px;}
.loginbox2 .commoninput{border-color:#ccc;margin-bottom:26px; position:relative;}
.loginbox2 .commoninput p{ position:absolute;left:0;bottom:-20px;font-size:12px;color:#ef495f; display:none;}
.loginbox2 .commoninput i{ position:absolute;right:-30px;top:10px;height:19px;width:19px; display:none;}
.loginbox2 .wrong p,.loginbox2 .wrong i{display:block;}
.loginbox2 .correct i{ display:block;}
.loginbox2 .commoninput dl dd font{color:#999;}
.loginbox2 .submit{padding:15px 0 10px 0;}
.loginbox2 .submit input{font-size:16px;}
.loginbox2 .register a{font-size:12px;color:#666;}
.amdq_list .commoninput dd{width:100%;}

.licai_explain{margin-top:20px;}
.licai_explain h1{ line-height:42px;padding:0 20px;border:1px solid #E5E5E5;font-size:16px;}
.licai_explain h1 span{color:#ec5c55;}
.licai_explain h1 span a{color:#ec5c55;padding:0 2px;}

.process{margin-top:50px; height:150px;}
.proceing dd{float:left; width:25%; height:3px; background:#EEE; position:relative;}
.proceing dd span{ position:absolute; width:6px; height:6px;border-radius:50%; background:white;border:3px solid #DADADA;left:50%;margin-left:-6px;top:-5px;}
.proceing dd.active{ background:#FF4C4E;}
.proceing dd.active span{border-color:#FF4C4E; background:#FF4C4E;}
.proceing dd div{ position:absolute; width:96px; height:71px; background:url(./assets/tipbox.png) no-repeat center top;left:50%;margin-left:-47px;top:15px;}
.proceing dd div p{ text-align:center;color:#999;padding-top:18px; line-height:22px;}
.proceing dd div p font{color:#333;}

.data_tit li{float:left;width:25%; background:#fff; height:60px;cursor:pointer;text-align:center; line-height:56px; font-size:20px;color:#333; position:relative;}
.data_tit li.active span{ background:white;border-bottom:2px solid #FF3248;color:#FF3248;height:60px; line-height:56px;}
.data_tit li span{ display:block;min-width:150px;margin:0 auto;max-width:175px;}
.data_tit2{border-bottom:2px solid #eee;}
</style>
