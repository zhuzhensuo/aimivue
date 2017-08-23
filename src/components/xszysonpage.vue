<template>
<div class="companypos">
	<div class="commonwrap">
		<div class="laws" style="height:auto;"><img src='../assets/xszy.png' /></div>
		<div class="xszy">
			<div class="xszy-wrap">
				<div class="xszys">	
					<p><span>什么是爱米理财？</span></p>
					<div class="dl">
						<i></i>
						<dl class="a">
							<dt>爱米理财简介</dt>
							<dd>爱米理财是一家为普通大众谋求高性价比理财服务平台。平台深耕赎楼、汽车质押抵押等优质金融资产业务，并依托
互联网及大数据技术将优质、安全的金融资产高效、便捷的提供给广大投资者。</dd>
						</dl>
					</div>
				</div>
				<div class="xszys">	
					<p><span>业务模式</span></p>
					<div class="dl">
						<i></i>
						<div class="mode"><img src="../assets/businessmode.png" /></div>
					</div>
				</div>
				<div class="xszys">	
					<p><span>爱米理财的产品</span></p>
					<div class="dl">
						<i></i>
						<dl class="a dq lc">
							<dt><span></span>爱米定期</dt>
							<dd>1个月、3个月、6个月、12月，固定期限理财任你选。</dd>
						</dl>
						<dl class="a yx lc">
							<dt><span></span>爱米优选</dt>
							<dd>15天到18个月，不定期理财产品，给你不一样的理财体验。</dd>
						</dl>
					</div>
				</div>
				<div class="xszys">	
					<p><span>如何投资？</span></p>
					<div class="dl">
						<i></i>
						<dl class="a">
							<dd>注册> 实名认证>绑卡> 开通新浪支付>充值</dd>
						</dl>
					</div>
				</div>
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
.laws img{width:100%; display:block;}
.xszy{margin-left:73px;border-left:2px solid #3DBEFB;padding:0 0 20px;}
.xszy-wrap{padding-left:37px;}
.xszys{padding-top:20px;}
.xszys p{ height:60px; position:relative;}
.xszys p span{ position:absolute; width:152px; height:35px; line-height:35px; text-align:center;color:white; background:#3DBEFB; font-size:16px;top:0;left:-112px;}
.xszys div.dl{border:2px solid #CBCBCB;padding:20px; position:relative;}
.xszys div.dl i{ position:absolute; background:#fff url(../assets/leftar.png) no-repeat left top; width:14px; height:14px;left:-13px; top:50%;margin-top:-7px;}
.xszys .a dt{ font-size:18px; height:28px;color:#111;}
.xszys .a dd{ font-size:16px; text-indent:2em; line-height:30px;}
.xszys .mode{ text-align:center;padding:30px 0;}
.xszys .lc dt{ position:relative; text-indent:2em;}
.lc dt span{ position:absolute; height:16px; width:16px;left:10px;top:4px;}
.dq dt span{ background:#F94233;}
.yx{margin-top:15px;}
.yx dt span{ background:#C628ED;}
</style>
