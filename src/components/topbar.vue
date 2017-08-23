<template>
	<div>
	<div class="header">
		<div class="head w1140">
			<div class="head_left f_l">
				<ul>
					<li class="mobile">客服热线：400-666-2082（08：00 - 20：00）</li>
					<li class="weibo img" @mouseover='wbshow=true' @mouseout='wbshow=false'>
						<a href="###">&nbsp;</a>
						<div v-show='wbshow'><span><img src="../assets/wb_select0228.jpg"></span></div>
					</li>
					<li class="weixin img" @mouseover='wxshow=true' @mouseout='wxshow=false'>
						<a href="###">&nbsp;</a>
						<div v-show='wxshow'>
							<dl>
								<dt>扫码关注微信公众号</dt>
								<dd><img src="../assets/wx_select0228.jpg"></dd>
							</dl>
						</div>
					</li>
				</ul>
			</div>
			<div class="head_right f_r">
				<ul>
					<li><a href="#">邀请好友</a><i></i></li>
					<li><a href="register.html">帮助中心</a></li>
					<li class="logandreg" v-if='login==false'><router-link class="loginuser" to='/loginpage'><span>登录</span><s></s></router-link><router-link to='/register'>注册</router-link></li>
					<li class="logandreg" v-else><router-link to='/personcenter' tag='span'><a href="javascript:void(0);" class="loginuser">{{name}}<s></s></a></router-link><a href="javascript:void(0);" @click='loginout();'>退出</a></li>
					<li class="app"><a href="#">APP下载</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="navwrap">
		<div class="navfix" id="nav">
			<div class="nav">
				<div class="clearfix w1140">
					<div class="logo f_l"><router-link to='/'><img src="../assets/logos.png" /></router-link></div>
					<div class="navs f_r">
						<ul>
							<li><router-link to='/'>首页</router-link></li>
							<li :class='{"active":secondmenu}'>
								<a href="javascript:void(0)"><span>我要理财</span></a>
								<div class="secondmenu">
									<dl>
										<dd><router-link to='/aimidingqi'>爱米定期</router-link></dd>
										<dd><router-link to='/aimiyouxuan'>爱米优选</router-link></dd>
									</dl>
								</div>
							</li>
							<router-link to='/xxpl' tag='li'><a>信息披露</a></router-link>
							<router-link to='/personcenter' tag='li'><a>我的账户</a></router-link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Cookies from '../../static/js/index.js'
export default {
  data () {
    return {
     	wbshow:false,
     	wxshow:false,
     	secondmenu:false
    }
  },
  methods:{
  	...mapActions(['loginout']),
  	changeNam(data){
  		this.$store.commit('CHANGE_NAME',data)
  	},
  	changeLogi(data){
  		this.$store.commit('CHANGE_LOGIN',data)
  	}
  },
  computed:mapState({
  	name:state=>state.cart.username,
  	login:state=>state.cart.haslogin
  }),
  created(){
	document.documentElement.scrollTop=0;
	var name=Cookies.getCookie('name');
	var islogin=Cookies.getCookie('islogin');
	
	if(name!=null && islogin!=null){
		this.changeNam(name);
		this.changeLogi(islogin);
	}
  },
  beforeRouteLeave(){
  },
  mounted(){
  	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
  	var setMenu=function(){
		var li=$(".navs").find("li");
		li.each(function(){
			var div=$(this).find("div");
			$(this).hover(function(){
				if(div.size()>0){
					$(this).addClass("active");
					div.css({display:"block",opacity:0}).stop(true,false).animate({top:40,opacity:1},300);
				}
			},function(){
				$(this).removeClass("active");
				div.stop(true,false).animate({top:20,opacity:0},300,function(){
					$(this).hide();																  
				});
			});
		});
	}
	setMenu();

	function GetFixed(id,className,a){
		this.id=$("#"+id);
		this.a=$("."+a);
		this.div=$("."+className);
		this.init.apply(this,arguments);
	}
	GetFixed.prototype={
		init:function(){
			if (!this.a.length) {
				return;
			}
			this.addEvent();
			this.resize();
		},
		addEvent:function(){
			var t=this.a.offset().top,that=this;
			
			var fn=function(){
				var top=$(document).scrollTop();
				if(top>=t){
					that.id.addClass("fix-active");
				}else{
					that.id.removeClass("fix-active");
				}
			}
			fn();
			$(window).scroll(function(){
				fn();	
			});
		},
		resize:function(){
			var that=this;
			$(window).resize(function(){
				that.addEvent();
			});
		}
	}
	new GetFixed("nav","navwrap","navwrap");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.header{ height:49px;border-bottom:1px solid #eee;line-height:49px; background:white;}
	.head_left{ }
	.head_left ul li{float:left;margin-right:13px;}
	.head_left ul li a{color:#666;display:block;}
	.head ul li.weibo a{ width:30px; height:30px; background:url(../assets/weibo.png) no-repeat center center;}
	.head ul li.weibo a:hover{background:url(../assets/weibo_active.png) no-repeat center center;}
	.head ul li.weixin a{ width:30px; height:30px; background:url(../assets/weixin.png) no-repeat center center;}
	.head ul li.weixin a:hover{background:url(../assets/weixin_active.png) no-repeat center center;} 
	.head_left ul li.img{margin-top:10px; position:relative; z-index:100; width:30px; height:30px;border:1px solid #ccc;border-radius:4px;}
	.head_left ul li.img div{ position:absolute;top:35px;left:-57px;width:154px; height:180px; background:url(../assets/arrowbg.png) no-repeat left top;text-align:center; z-index:10;}
	.head_left ul li.img div span{padding-top:35px;display:block;}
	.head_left ul li.img div img{display:inline-block;}
	.head_left ul li.img div dl{ font-size:12px; line-height:normal;padding-top:30px;}
</style>
<style scoped>
	
	.head_right ul li{float:left; position:relative; z-index: 10;}
	.head_right ul li i,.head_right ul li.logandreg a s{ position:absolute; height:12px; width:1px; background:#DCDCDC;right:0;top:19px;}
	.head_right ul li.logandreg a s{top:3px;}
	.head_right ul li a{ height:100%;padding:0 14px;color:#666; position:relative;}
	.head_right ul li.logandreg{border:1px solid #ccc; line-height:normal;padding:4px 0;border-radius:4px;margin-top:10px;}
	.head_right ul li.logandreg a.loginuser{padding-left:35px; background:url(../assets/loginuser.png) no-repeat 10px center;}
	.head_right ul li.app{line-height:normal;padding:5px 10px;border-radius:4px;margin-top:10px; background:#FF3248;margin-left:20px;}
	.head_right ul li.app a{color:white; display:block;}
	.head_right ul li.app a:hover{color:white;}

	.head_right ul li a:hover{color:#FF3248;}
	.navwrap{height:82px; position:sticky; z-index:11;top:0;}
	.navfix{ position:absolute;left:0;top:0; width:100%;height:82px;z-index:999; background:white;}
	.fix-active{ position:fixed;box-shadow:0 0 5px #888;filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000');}
	.navs{ height:62px;}
	.nav{font-size:16px;padding-top:20px; background:white;*height:72px;}
	.logo{margin-top:0px;}
	.navs ul li{float:left; position:relative; text-align:center;margin:0 7px;z-index:999;height:42px;border-bottom:2px solid white;line-height:40px;padding:0 25px;border:1px solid white; background: white;}
	.navs ul li.on a,.navs ul li a:hover{color:#ff4e50;}
	.navs ul li.active{border-color:#F3F3F3;border-bottom-color:white;}
	.navs ul li a{color:#000; position:relative; font-size:19px;}
	.navs ul li.active a{color:#FF3248;}
	.navs ul li a i{ position:absolute;width:15px; height:8px;background-position:-128px -26px;right:-18px;top:7px;}
	.navs ul li.on a i{background-position:-128px 0px;}
	.navs ul li .secondmenu{ position:absolute; width:100%;left:-1px;top:20px;border:1px solid #F3F3F3;border-top:none;background:white; display: none;}
	.navs ul li .secondmenu dl dd{ line-height:35px;position:relative;height:35px;}
	.navs ul li .secondmenu dl dd a{ display:block;height:35px; font-size:15px;color:#666;}
	.navs ul li .secondmenu dl dd a:hover{ background:#E9F7FF;color:#ff4e50;}
	.navs ul li a.router-link-exact-active,.navs ul li.router-link-active a{color:#ff4e50; }
	.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .3s ease;
	}
	.slide-fade-enter, .slide-fade-leave-active {
	  transform: translateY(-20px);
	  opacity: 0;
	}
</style>
