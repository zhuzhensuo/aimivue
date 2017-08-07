<template>
 	<div class="safe-left f_l">
		<div class="menu-tree">
			<dl>
				<dt class="a">我的账户</dt>
				<dd class="active"><a href="#">帐户概览</a></dd>
				<dd><a href="#">交易记录</a></dd>
				<dd><a href="#">我的收益</a></dd>
				<dd><a href="#">账户资料</a></dd>
			</dl>
			<dl>
				<dt class="b">我的投资</dt>
				<dd><a href="#">自动投资</a></dd>
				<dd><a href="#">新手标</a></dd>
				<dd><a href="#">爱米定期</a></dd>
				<dd><a href="#">爱米优选</a></dd>
			</dl>
			<dl>
				<dt class="c">会员活动</dt>
				<dd><a href="#">加息红包</a></dd>
				<dd><a href="#">体验金</a></dd>
				<dd><a href="#">邀请好友</a></dd>
			</dl>
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
	.safe-left{width:200px;border-radius:2px;background:white;}
	.safe-right{width:1000px;background:white;min-height:780px;}
	.menu-centent{ position:relative; min-height:780px;}
	.menu-tree dl{color:#A5A5A5;}
	.menu-tree dl dt{ height:52px; line-height:52px;padding-left:45px;color:#bbb;}
	.menu-tree dl dt.a{ background:#FAFAFA url(../assets/zhzl.png) no-repeat 20px center;}
	.menu-tree dl dt.b{ background:#FAFAFA url(../assets/wdtz.png) no-repeat 20px center;}
	.menu-tree dl dt.c{ background:#FAFAFA url(../assets/hyhd.png) no-repeat 20px center;}
	.menu-tree dl dd{height:52px; line-height:52px;color:#333;font-size:17px;border-bottom:1px solid #eee;}
	.menu-tree dl dd a{ display:block; height:100%;color:#323232;border-left:4px solid #fff;padding-left:42px;}
	.menu-tree dl dd a:hover{border-left:4px solid #FF3549;color:#ff4e50;}
	.menu-tree dl dd.active a{ border-left:4px solid #FF3549;color:#ff4e50;}
</style>
