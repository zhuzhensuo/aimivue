<template>
 <div class="saft-right f_r">
	<div class="safe-grade clearfix">
		<div class="safe-l">
			<dl>
				<dt>您好,{{username}}</dt>
				<dd>上次登录时间：2017-06-27 13:43:52</dd>
			</dl>
		</div>
		<div class="safe-m">
			<dl>
				<dd>安全等级：</dd>
				<dd class="progress"><span><i style="width:50%;"></i></span></dd>
				<dd class="safety">低</dd>
				<dd><a href="#">管理</a></dd>
			</dl>
		</div>
		<div class="saft-r">
			<a href="#" class="btn-link redbtn">充值</a>
			<a href="#" class="btn-link whitebtn">提现</a>
		</div>
	</div>
	
	<div class="balance">
		<div class="clearfix">
			<div class="balancewrap mr5">
				<dl>
					<dt>账户余额（元）</dt>
					<dd><span>50000.00</span></dd>
					<dd><i></i></dd>
				</dl>
				<ul>
					<li><span>累计充值：</span><font>130000.00元</font></li>
					<li><span>累计提现：</span><font>20000.00元</font></li>
					<li><span>爱米定期：</span><font>30000.00元</font></li>
					<li><span>爱米优选：</span><font>30000.00元</font></li>
				</ul>
			</div>
			<div class="balancewrap mr5">
				<dl>
					<dt>帐户总资产（元）</dt>
					<dd><span>120000.00</span></dd>
					<dd><i></i></dd>
				</dl>
				<ul>
					<li><span>帐户余额：</span><font>50000.00元</font></li>
					<li><span>新手标：</span><font>10000.00元</font></li>
					<li><span>爱米定期：</span><font>30000.00元</font></li>
					<li><span>爱米优选：</span><font>30000.00元</font></li>
				</ul>
			</div>
			<div class="balancewrap">
				<dl>
					<dt>平台总收益（元）</dt>
					<dd><span>12000.00</span></dd>
					<dd><i></i></dd>
				</dl>
				<ul>
					<li><span>代收收益：</span><font>6000.00元</font></li>
					<li><span>已收收益：</span><font>6000.00元</font></li>
				</ul>
			</div>
		</div>
	</div>
	
	<div class="aimiproduct">
		<div class="clearfix">
			<div class="amproduct mr5">
				<dl>
					<dt>爱米定期</dt>
					<dd class="d">定期理财，稳定增值</dd>
					<dd><span>投资金额：</span><label>10.00元</label></dd>
					<dd><span>待收利息：</span><label> 110.00元</label></dd>
					<dd><span>已收利息：</span><label> 1110.00元</label></dd>
					
				</dl>
				<div>
					<a href="#" class="btn-link redbtn">立即投资</a>
					<a href="#" class="btn-link whitebtn">查看详情</a>
				</div>
			</div>
			<div class="amproduct">
				<dl>
					<dt>爱米优选</dt>
					<dd class="d">自主投资，期限灵活</dd>
					<dd><span>投资金额：</span><label>10.00元</label></dd>
					<dd><span>待收利息：</span><label> 110.00元</label></dd>
					<dd><span>已收利息：</span><label> 1110.00元</label></dd>
					
				</dl>
				<div>
					<a href="#" class="btn-link redbtn">立即投资</a>
					<a href="#" class="btn-link whitebtn">查看详情</a>
				</div>
			</div>
		</div>
	</div>
	
	<div class="aimiproduct">
		<div class="clearfix">
			<div class="amproduct mr5 amproduct2">
				<dl>
					<dt>奖励金额</dt>
					<dd><span>奖励金额：</span><label>10.00元</label></dd>
					<dd><span>已收奖励：</span><label> 110.00元</label></dd>
					<dd><span>待收奖励：</span><label> 1110.00元</label></dd>
					
				</dl>
				
			</div>
			<div class="amproduct amproduct2">
				<dl>
					<dt>用户余额</dt>
					<dd><span>总金额：</span><label>10.00元</label></dd>
					<dd><span>冻结中：</span><label> 110.00元</label></dd>
					<dd><span>可用余额：</span><label> 1110.00元</label></dd>
					
				</dl>
				
			</div>
		</div>
	</div>
	
</div>
</template>
	
<script>
import {mapState} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  	
  },
  computed:mapState(['username'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.saft-right{ width:920px;}
	.safe-grade{ background:white;padding:25px 30px;}
	.safe-l{float:left;width:310px;}
	.safe-l dt{color:#333;}
	.safe-l dd{color:#999; font-size:12px;margin-top:5px;}
	.safe-m {float:left;margin-top:10px;}
	.safe-m dd{float:left;}
	.safe-m dd.progress {padding-top:7px;margin:0 5px;}
	.safe-m dd.progress span{ display:block; width:86px; height:6px; background:#eee; position:relative;border-radius:3px;}
	.safe-m dd.progress span i{ position:absolute; height:100%;left:0;top:0; background:#FF3549;border-radius:3px;}
	.safe-m dd.safety{color:#FF3549;margin-right:15px;}
	.safe-m dd a{color:#333; text-decoration:underline;}
	.saft-r{float:right;margin-top:5px;}
	.saft-r a{margin-left:25px;}
	.balance{margin-top:5px;}
	.balancewrap{float:left;width:303px; background:white; text-align:center;padding:40px 0 25px; position:relative; cursor:pointer;}
	.balancewrap dt{ font-size:17px;color:#333;}
	.balancewrap dd span{color:#ff4e50; font-size:30px;}
	.balancewrap dt,.balancewrap dd{padding-bottom:8px;}
	.balancewrap dd{ position:relative;}
	.balancewrap dd i{ position:absolute; width:100%; height:10px; background:url(../assets/redarow.png) no-repeat center top;left:0;top:0;}
	.balance-active dd i{ display:none;}
	.balance-active {box-shadow:0 0 13px #ccc;}
	.balancewrap ul{ position:absolute; width:100%;left:0;top:140px; text-align:left; background:white; font-size:16px; display:none;padding-bottom:35px; box-shadow:0 6px 13px #ccc; }
	.balancewrap ul li{padding-left:55px; line-height:30px; height:30px;}
	.balancewrap ul li span{float:left; width:85px; text-align:right;}
	.balancewrap ul li font{float:left; font-size:16px;}
	.balance-active ul{display:block;}
	.aimiproduct{margin-top:5px;}
	.amproduct{float:left; width:457px; background:white; text-align:center;padding:20px 0 30px;}
	.amproduct dt{font-size:20px;}
	.amproduct dd.d{color:#bbb; height:45px; font-size:14px;}
	.amproduct dd{ height:35px; line-height:35px; font-size:16px;}
	.amproduct dd span{width:40%;float:left; text-align:right;}
	.amproduct dd label{float:right; text-align:right;padding-right:25%;}
	.amproduct div{margin-top:20px;}
	.amproduct div a{margin:0 20px;}
	.amproduct2 dt{ height:45px;}
</style>
