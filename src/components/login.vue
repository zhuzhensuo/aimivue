<template>
	<div class="login">
		<div class="login2">
			<h3>爱米会员登录</h3>
			<form>
				<!-- 错误加个类wrong -->
				<div class="login-div2">
					<div class="phonenumber login-div">
						<dl class="clearfix">
							<dd><input type="text" class="shoujihao" placeholder='请输入您的手机号码'></dd>
						</dl>
					</div>
					<div class="wrongtips"><p>输入的手机号不正确</p></div>
				</div>
				<!-- 错误加个类wrong -->
				<div class="login-div2">
					<div class="pwd login-div">
						<dl class="clearfix">
							<dd><input type="password" class="loginpwd" placeholder='请输入登录密码'></dd>
						</dl>
					</div>
					<div class="wrongtips"><p>您输入密码不正确，请重新输入</p></div>
				</div>
				<div class="rempwd clearfix">
					<span><input type="checkbox" v-model='rempwd'>&nbsp;记住用户名</span>
					<a href="#">忘记密码？</a>
				</div>
				<div class="btns submit">
					<input type="submit" value="登录" class="loginnow button" @click='loginIn();'>
				</div>
				<div class="reg">还没账号？<a href="#">立即注册</a></div>
			</form>
		</div>
	</div>
</template>

<script>
import {mapActions,mapState,mapMutations} from 'vuex'
import Cookies from '../../static/js/index.js'
var mixin={
	watch:{
	  	haslogin(){
	  		if(this.haslogin){
	  			this.shows(false);
	  		}
	  	},
	  	rempwd(){
	  		this.$store.dispatch('rememberpwds',this.rempwd);
	  	}
  	}
}
export default {
  data () {
    return {
    	rempwd:false
    }
  },
  mixins:[mixin],
  methods:{
  	shows(b){
  		this.$emit("loadshow",b);
  	},
  	...mapActions(['loginIn']),
  },
  computed:mapState({
  	haslogin:state=>state.cart.haslogin,
  	username:state=>state.cart.username
  }),
  created(){
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_header{padding:30px 0;}
.login_header dl dt img{ display:block;}
.login_header dl dt,.login_header dl dd{float:left;}
.login_header dl dd{ line-height:24px; font-size:22px;border-left:1px solid #333;margin-left:25px;padding-left:25px;margin-top:10px;}
.logins{ height:595px; background:#4FA0FF;}
.logins-wrap{width:1400px;background:url(../assets/login_bg.png) no-repeat left bottom;height:595px; }
.login{width:380px;float:right;}
.login2{padding:0 45px;border:1px solid #ddd; background:white;padding-bottom:40px;}
.login2 div.yzm{*padding-bottom:30px;}
.login2 h3{ text-align:center;font-size:16px;line-height:70px; height:80px;}
.login-div{border:1px solid #ddd; background:white;border-radius:4px; position:relative;}
.login-div2{margin-bottom:20px;}
.wrongtips{border:1px solid #FF7779; background:#FDE3E3; line-height:24px;padding-left:10px;border-top:none;border-radius:4px;color:#F67172; display:none;}
.login-div dl dt{width:54px; height:42px;border-right:1px solid #E8E8E8; position:relative;}
.login-div dl dt i{ position:absolute; left:50%;top:50%;}
.login-div dl dt,.login-div dl dd{float:left;}
.login-div dl dd{position:relative;height:42px;}
.login-div dl dd font{ position:absolute;left:15px;top:12px;color:#bbb;}
.login-div dl dd input{border:none; outline:0 none; background:transparent; position:relative;height:19px; line-height:19px;float:left;margin:12px 0 0 15px;}
.login-div p{ position:absolute;left:0;bottom:-22px;font-size:12px;color:#ef495f;}
.wrong .login-div{border-color:#FF7779;}
.wrong .wrongtips{ display:block;}
.rempwd span{float:left;}
.rempwd a{float:right;color:#6db8fa;}
.rempwd span a{float:none;color:#81b3fe;}
.login2 .submit{padding:50px 0 22px 0;}
.login2 .submit input{font-size:16px;}
.reg{ text-align:center;}
.reg a{color:#63a0fc;}
.yanzhengma{float:left;width:150px;}
.send{float:right;width:110px;}
.send button{border:none; outline:0 none; background:#73B3FF;border-radius:2px;color:white;width:100%; height:44px; cursor:pointer; font-size:15px;}
.send a{color:white;}

.btns{ height:44px;}
.login-footer{ text-align:center;padding-bottom:50px;}
.login-footer dt span{ line-height:20px;border-left:1px solid #333;padding-right:20px;margin-left:20px;}
.login-footer dt a{color:#333;}
.login-footer dt,.login-footer dd{margin-top:25px;}
.login-footer dd{color:#999; }
.login-footer dd span{padding:0 20px;}


</style>
