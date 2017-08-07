<template>
 	<div class="aboutlist">
		<ul>
			<li><router-link to='/xxpl'><i></i>关于我们</router-link></li>
			<li><router-link to='/xxpl/manage'><i></i>管理团队</router-link></li>
			<li><a href="#"><i></i>平台大事件</a></li>
			<li><a href="#"><i></i>新手指引</a></li>
			<li><a href="#"><i></i>产品介绍</a></li>
			<li><a href="#"><i></i>平台公告</a></li>
			<li><a href="#"><i></i>公司动态</a></li>
			<li><a href="#"><i></i>常见问题</a></li>
			<li><a href="#"><i></i>招贤纳士</a></li>
			<li><a href="#"><i></i>联系我们</a></li>
			<li><a href="#"><i></i>法律法规</a></li>
			<li><a href="#"><i></i>网站声明</a></li>
		</ul>
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
	.aboutlist{float:left;width:160px;}
	.aboutlist ul li{ height:17px; line-height:17px; font-size:18px;margin-top:40px;}
	.aboutlist ul li a{ display:block;padding-left:30px; position:relative;color:#333;}
	.aboutlist ul li a i{ position:absolute; height:17px;width:3px; background:#FF3247;top:0;left:18px; display:none;}
	.aboutlist ul li.active a,.aboutlist ul li a:hover{color:#ff4e50;}
	.aboutlist ul li.active a i,.aboutlist ul li a:hover i{ display:block;}
	.aboutlist ul li a.router-link-exact-active{color:#ff4e50;}
	.aboutlist ul li a.router-link-exact-active i{ display: block;}
</style>
