<template>
 <div class="banner">
		<ban></ban>
		<div class="bans w1140">
			<div class="f_r zhuce_model">
				<div class="opacitys"></div>
				<div class="content nologin">
					<div class="fast_login">
						<dl>
							<dt><span>安全</span><span>稳健</span><span class="last">高收益</span></dt>
							<dd class="zhuce">最高年化收益率</dd>
							<dd class="interest-rate"><span>16</span>%</dd>
							<dd class="zhuce-btn"><a href="###" class="btns">注册领885元红包</a></dd>
							<dd class="fast">
								<span><a href="#">已有账号</a></span>
								<label><a href="javascript:;" @click='show(true)'>立即登录</a></label>
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import {mapActions,mapState} from 'vuex';
import ban from './ban'

export default {
  data () {
    return {
    }
  },
  methods:{
  	show(b){
  		if(!this.haslogin){
  			this.$emit('showbox',b);
  		}
  	}
},
components:{
	ban
},
computed:mapState({
	haslogin:state=>state.cart.haslogin
})
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.banner{ height:350px; overflow:hidden; position:relative; z-index:1;}
	.banner ul li{ height:350px;float:left;width:100%; overflow:hidden; background-repeat: no-repeat; background-size:auto 100%; background-position: center center;}
	.flexslide{ height:350px; position:absolute; width:100%;left:0;top:0;}
	.flexslide ul.slides li{ height:350px;float:left;width:100%; overflow:hidden;}
	.flexslide ul.slides li a{ display:block; height:100%; width:100%;}
	.flex-control-nav {width:1200px; position: absolute; bottom: 10px; text-align:left; z-index:100;left:50%;margin-left:-600px;}
	.flex-control-nav li {margin: 0 10px; display: inline-block; zoom: 1; *display: inline;float:left;}
	.flex-control-paging li a {width:7px;height:7px; display: block;cursor: pointer; text-indent: -9999px;background:#fff;border-radius:50%;}
	.flex-control-paging li a.flex-active {height:18px;width:18px;position:relative;top:-6px;}
	.flex-direction-nav a {color: rgba(0, 0, 0, 0.8);cursor: pointer;display: block;height: 45px;margin: -22px 0 0;opacity: 1;overflow: hidden;position: absolute;text-decoration: none;text-indent: -999em;top: 50%;width: 45px;z-index: 10;}
	.flex-direction-nav .flex-prev {background-position: 0 0;background:url(../assets/l.png) no-repeat scroll 0 0;left:50px;}
	.flex-direction-nav .flex-next {background-position: 0 0;background:url(../assets/r.png) no-repeat scroll 0 0;right:50px;}

	.zhuce_model{ height:310px; width:318px; position:relative; z-index:101;margin-top:20px;}
	.zhuce_model .opacitys{ position:absolute; height:100%; width:100%; background:#fff;left:0;top:0; opacity:0.8;filter:alpha(opacity=80);}

	.content{padding:20px 27px 27px; text-align:center;color:#333; position:relative;}
	.content a{color:white;}
	.content dl dt{font-size:18px;}
	.content dl dt font{font-size:18px;}
	.content dl dt span{padding:0 8px;border-left:1px solid #6E6362; display:inline-block; line-height:17px;}
	.content dl dt span.last{border-right:1px solid #6E6362;}
	.content dl dd.zhuce{ font-size:22px;margin-top:22px;}
	.content dl dd.interest-rate{font-size:30px; line-height:63px; height:63px;color:#ef495f;margin-top:7px;}
	.content dl dd.interest-rate span{font-size:72px;padding:0 5px 0 0; font-family:Arial;}
	.content dl dd.pozhehao{font-size:16px;margin-top:8px;}
	.content dl dd.pozhehao span{padding:0 10px;}
	.content dl dd.zhuce-btn{margin:30px auto 0;width:80%;}
	a.btns{ display:block; width:100%; height:42px; line-height:40px; text-align:center;font-size:22px;border-radius:22px; background:#EF4B5F;}
	.content dl dd.fast{margin-top:20px;}
	.content dl dd.fast span,.content dl dd.fast label{margin:0 5px;}
	.content dl dd.fast span a{color:#333;}
	.content dl dd.fast label a{text-decoration:underline;color:#333;}
	.nologin{}
	.haslogin{ display:none;}
	.fast_login{ display:block;}
	.login_box{display:none;}
</style>
