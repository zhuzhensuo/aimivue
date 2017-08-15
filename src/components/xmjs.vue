<template>
	<div>
		<div class="xmjs">
			<div class="infor-table">
				<dl class="clearfix">
					<dd class="t"><span>项目金额</span></dd>
					<dd><span>240000元</span></dd>
					<dd class="t"><span>还款方式</span></dd>
					<dd><span>先息后本</span></dd>
					<dd class="t"><span>万元收益</span></dd>
					<dd><span>75.00元</span></dd>
					<dd class="t"><span>资产公司</span></dd>
					<dd><span>成都正天汽车服务有限公司</span></dd>
				</dl>
			</div>
			
			<div class="ouradvantage">
				<div class="oas bz">
					<dl>
						<dt><label>保障方式</label><font></font><span>第三方机构代偿</span></dt>
						<dd>爱米理财与第三方机构达成代偿协议。若债权或借款发生逾期或者坏账，则需先由第三方机构代偿垫付给理财用户，然后由该机构处理相关
资产。</dd>
					</dl>
				</div>
				<div class="oas xm">
					<dl>
						<dt><label>项目类型</label><font></font><span>汽车借款</span></dt>
						<dd>爱米理财寻找优质的汽车相关的个人贷款业务，主要客户群体为征信纪录良好的个人，进行车辆抵押、质押或新车分期借款。</dd>
					</dl>
				</div>
				<div class="oas hk">
					<dl>
						<dt><label>还款方式</label><font></font><span>等额本息</span></dt>
						<dd>在还款期间，每月偿还同等级额的贷款。还款日一般为起息时间的每月对应期的两天内。系统将会于还款日的14:00或18:00自动退还资金到
用户余额帐户。</dd>
					</dl>
				</div>
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
.xmjs{margin-top:40px;}
.oas{padding:40px 0;border-bottom:1px solid #ddd;}
.oas dt{ font-size:17px; color:#333;}
.oas dt span{color:#ec5c55;}
.oas dt font{ display:inline-block;margin:0 15px;height:15px;border-left:1px solid #A5A5A5;}
.oas dt font,.oas dt span,.oas dt label{float:left;}
.oas dt font{margin-top:8px;}
.oas dd{color:#666; font-size:16px; line-height:25px; letter-spacing:2px; text-align:justify;margin-top:15px;padding-left:2.2em;}
.hk{border-bottom:none;}
.oas dt{padding-left:35px;}
.bz dt{ background:url(../assets/dunpai.png) no-repeat left center; height:26px; line-height:26px;}
.xm dt{ background:url(../assets/project.png) no-repeat left center; height:26px; line-height:26px;}
.hk dt{ background:url(../assets/hk.png) no-repeat left center; height:27px; line-height:27px;}
</style>
