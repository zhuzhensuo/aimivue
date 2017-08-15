<template>
 	<div>
 		<p class="commontit commontit2"><span>爱米优选</span><font>自主投资&nbsp;&nbsp;期限灵活</font><a href="#" v-if='more'>更多理财>></a></p>
		<div class="amdq-wrap">
			<div class="amdqs">
				<p>爱米优选3月标题</p>
				<div class="clearfix">
					<dl class="rate">
						<dt>9.00<span>％</span></dt>
						<dd>预期年化收益率</dd>
					</dl>
					<dl>
						<dt>3个月</dt>
						<dd>期限</dd>
					</dl>
					<dl>
						<dt>64,500</dt>
						<dd>剩余份额</dd>
					</dl>
					<dl class="percent">
						<dt><span><i style="width:45%;">&nbsp;</i></span></dt>
						<dd>进度：45％</dd>
					</dl>
					<div><a href="#" class="btns2">立即抢购</a></div>
				</div>
			</div>
 		</div>
 	</div>
</template>

<script>
export default {
  props:['more'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.commontit{ height:30px;}
	.commontit span{ font-size:22px;float:left;}
	.commontit font{font-size:16px;color:#999;margin:6px 0 0 10px;float:left;}
	.commontit a{float:right;color:#999;margin-top:8px;font-size:16px;}
	.commontit2{border-bottom:1px solid #E6E6E6;padding-bottom:20px;}
	.amdqs .clearfix dl{float:left;}
	.amdqs .clearfix div{float:right;margin-top:5px;}
	.amdqs{padding:15px 30px 15px 15px;border-bottom:1px solid #E6E6E6;transition:0.3s;}
	.amdqs dl{width:20%;}
	.amdqs dl.rate dt{font-size:32px;color:#ff4e50;}
	.amdqs dl.rate dt span{ font-size:20px;}
	.amdqs dl dd{color:#999;}
	.amdqs dl dt{ line-height:45px; height:45px; font-size:18px;color:#333; font-family:Arial;}
	.amdqs p{color:#333; font-size:18px;}
	.amdqs p a{color:#333;}
	.amdqs dl.percent dt span{ position:relative; display:block; width:154px; height:4px; background:#EEEEEE;top:20px;border-radius:2px;}
	.amdqs dl.percent dt span i{ position:absolute;left:0;top:0; height:100%; background:#33B5FF;border-radius:2px;}
	.amdqs:hover{box-shadow:0 0 13px #ccc;border-color:white;transition:0.3s;}
</style>
