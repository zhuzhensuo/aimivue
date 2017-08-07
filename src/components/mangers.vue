<template>
 <div class="companypos">
					<div class="commonwrap">
						<div class="manage">
							<div class="manager">
								<dl>
									<dt><i></i><span>王帅</span>董事长兼CEO</dt>
									<dd>2015年创立爱米理财，任首席执行官，公司创始人。</dd>
									<dd>2011年创立友融传媒，董事长，公司创始人。</dd>
									<dd>王帅对于财经编辑、媒体营销与金融产品设计与营销方面有独到的见解和实际成功</dd>
									<dd>的运作经验，并在企业管理和运营上有着丰富的实战经验。</dd>
								</dl>
							</div>
							<div class="manager">
								<dl>
									<dt><i></i><span>刘鹏</span>副总裁兼赎楼业务负责人</dt>
									<dd>郑州大学商学院EMBA，在中国工商银行南阳分行、中信银行郑州分行工作20年左
右。曾参与管理设计过小贷公司资产证券化，非常熟悉财富管理公司及资产管理公
司运作模式， 具备丰富的银行和金融业务经验，善长房产、汽车、票据、投行、PP
P政府融资业务。 目前全面负责房产赎楼业务。</dd>
								</dl>
							</div>
							<div class="manager">
								<dl>
									<dt><i></i><span>张思洋</span>副总裁兼车贷业务负责人</dt>
									<dd>从事金融领域工作9年，具有上市公司和跨国公司的从业经历。熟悉金融产品的设计， 
具有较强的市场分析能力和预判能力，<br>对于金融市场的变化和金融产品的风险控制有着自己独到的见解。</dd>
									
								</dl>
							</div>
							<div class="manager">
								<dl style="padding:0;">
									<dt><i></i><span>钟萍</span>董事</dt>
									<dd>友融传媒CEO，新媒体整合营销专家，擅长互联网金融平台的微信渠道投放、树立品牌
并精准获客， 具有丰富的流量资源和品牌资源。具备多年的用户洞察、品牌及品牌沟通
咨询经验， 在基于用户洞察的平台策略落地方面积累了丰富的经验。 带领团队服务过
陆金所、宜信等上百家互联网金融平台。</dd>
									
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
	.companypos{ float:right; width:980px;}
	.commonwrap{padding-top: 25px;}
	.manage{border-left:1px solid #CBCBCB;margin-left:150px;padding:50px 0;}
	.manager{padding-left:35px;}
	.manager dl{width:515px; text-align:justify;padding-bottom:120px;}
	.manager dl dt{ height:40px; position:relative;}
	.manager dl dt i{ height:18px; width:18px; background:url(../assets/discs.png) no-repeat left top; position:absolute;top:2px;left:-45px;}
	.manager dl dt span{font-size:18px;padding-right:20px;}
	.manager dl dd{ line-height:22px;}

</style>
