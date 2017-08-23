<template>
 <div class="companypos">
	<div class="commonwrap">
		<div class="manage ptdsj">
			
			<div class="manager green">
				<dl>
					<dt><i></i><span>2015年2月6日</span></dt>
					<dd>上海虎信金融信息服务有限公司正式成立</dd>
					<dd class="arrow"></dd>
				</dl>
			</div>
			<div class="manager red">
				<dl>
					<dt><i></i><span>2015年11月11日</span></dt>
					<dd>与新浪合作，签订支付托管系统</dd>
					<dd class="arrow"></dd>
				</dl>
			</div>
			<div class="manager purple">
				<dl>
					<dt><i></i><span>2016年3月1日</span></dt>
					<dd>爱米理财2.0版上线，披露更详细的资产详情</dd>
					<dd class="arrow"></dd>
				</dl>
			</div>
			<div class="manager red">
				<dl>
					<dt><i></i><span>2017年1月20日</span></dt>
					<dd>平台交易量成功突破10亿</dd>
					<dd class="arrow"></dd>
				</dl>
			</div>
			<div class="manager">
				<dl>
					<dt><i></i><span>2017年4月13日</span></dt>
					<dd>成功签约银行资金存管</dd>
					<dd class="arrow"></dd>
				</dl>
			</div>
			<div class="manager red">
				<dl>
					<dt><i></i><span>2017年6月21日</span></dt>
					<dd>平台交易量突破20亿</dd>
					<dd class="arrow"></dd>
				</dl>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.manage{border-left:1px solid #CBCBCB;margin-left:150px;padding:50px 0;}
.manager{padding-left:35px;}
.manager dl{width:515px; text-align:justify;padding-bottom:120px;}
.manager dl dt{ height:40px; position:relative;}
.manager dl dt i{ height:18px; width:18px; background:url(../assets/discs.png) no-repeat left top; position:absolute;top:2px;left:-45px;}
.manager dl dt span{font-size:18px;padding-right:20px;}
.manager dl dd{ line-height:22px;}

.ptdsj{border-left:2px solid #CBCBCB;}
.ptdsj{padding:20px 0;}
.ptdsj .manager{padding-bottom:40px;padding-left:30px;}
.ptdsj .manager dl{border:1px solid #CBCBCB;padding:15px 5px 15px 20px; font-size:18px; position:relative; width:355px} 
.ptdsj .manager dl dt{ height:30px;}
.ptdsj .manager dl dd.arrow{position: absolute;
    background: #fff url(../assets/leftar.png) no-repeat left top;
    width: 14px;
    height: 14px;
    left: -13px;
    top: 50%;
    margin-top: -7px;}
.ptdsj .manager dl dt i{left:-61px;top:16px;}

.ptdsj .manager dl dt{color:#23A5F8;}
.ptdsj .green dl dt{color:#0AD1E8;}
.ptdsj .red dl dt{color:#F92120;}
.ptdsj .purple dl dt{color:#0AD1E8;}
.ptdsj .green dl dt i{background: url(../assets/greendisc.png) no-repeat left top;}
.ptdsj .red dl dt i{background: url(../assets/reddisc.png) no-repeat left top;}
.ptdsj .purple dl dt i{background: url(../assets/purpledisc.png) no-repeat left top;}

.ptjs dl {margin-top:40px;}
.ptjs dl dt{padding-bottom:5px;}
.ptjs dl dt,.ptjs dl dd{ text-align:center;}
.ptjs dl dd.d{ text-align:left; border:1px solid #BABABA;color:#666;padding:20px; line-height:25px;margin-top:20px;}
.ptjs dl dd span{ font-size:16px;color:#111;}
</style>
