<template>
 <div class="flash" id='flash'>
 	<div class="flex-prev arrow"></div>
 	<div class="flex-next arrow"></div>
	<div class="flexslide">
		<ul class="slides">
			<li v-for='obj in banner' :style='{backgroundImage:obj.url}'><a :href="obj.href" target="_blank"></a></li>
		</ul>
	</div>
</div>
</template>

<script>
import axios from 'axios';
import {mapActions,mapState} from 'vuex';

export default {
  data () {
    return {
    }
  },
  methods:{
  	...mapActions(['getBanData'])
},
computed:mapState(['banner']),
created(){
	
	this.getBanData();
  },
  mounted(){
  	var Flexslide=function(id){
  		this.el=document.getElementById(id);
  		this.ul=this.el.getElementsByClassName('slides')[0];
  		this.li=this.ul.getElementsByTagName('li');
  		this.i=0;
  		this.init.apply(this,arguments);
  	}
	Flexslide.prototype={
		init:function(){
			this.setWidth();
			this.addEvent();
			this.resize();
			this.selfEvent();
		},
		setWidth:function(){
			this.w=this.el.offsetWidth;
			[].slice.call(this.li).forEach(v=>{v.style['width']=this.w+"px"});
			//this.li[0].style['width']=w+'px';
			this.ul.style['width']=this.li.length*this.el.offsetWidth+"px";
		},
		selfEvent:function(){
			this.ul.style['left']=(-this.w*this.i)+'px';
		},
		addEvent:function(){
			var right=this.el.getElementsByClassName('flex-next')[0];
			var left=this.el.getElementsByClassName('flex-prev')[0];
			var self=this;
			right.onclick=function(){
				self.i++;
				if(self.i>self.li.length-1) self.i=0;
				self.selfEvent();

			}

			left.onclick=function(){
				self.i--;
				if(self.i<0) self.i = self.li.length-1;
				self.selfEvent();
			}
		},
		resize(){
			var self=this;
			window.onresize=function(){
				self.setWidth();
				self.selfEvent();
			}
		}
	}
	new Flexslide('flash');
	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.banner,.flash{ height:350px; overflow:hidden; position:relative; z-index:1;}
	.flash{ position: absolute;top:0;left:0; width: 100%;}
	.banner ul li{ height:350px;float:left;width:100%; overflow:hidden; background-repeat: no-repeat; background-size:auto 100%; background-position: center center;}
	.flexslide{ height:350px; position:absolute; width:100%;left:0;top:0;}
	.flexslide ul.slides{ position: absolute;left:0;top:0; height: 100%;transition: all .5s ease-out;}
	.flexslide ul.slides li{ height:350px;float:left;width:100%; overflow:hidden;}
	.flexslide ul.slides li a{ display:block; height:100%; width:100%;}
	.flex-control-nav {width:1200px; position: absolute; bottom: 10px; text-align:left; z-index:100;left:50%;margin-left:-600px;}
	.flex-control-nav li {margin: 0 10px; display: inline-block; zoom: 1; *display: inline;float:left;}
	.flex-control-paging li a {width:7px;height:7px; display: block;cursor: pointer; text-indent: -9999px;background:#fff;border-radius:50%;}
	.flex-control-paging li a.flex-active {height:18px;width:18px;position:relative;top:-6px;}
	.arrow	{color: rgba(0, 0, 0, 0.8);cursor: pointer;display: block;height: 45px;margin: -22px 0 0;opacity: 1;overflow: hidden;position: absolute;text-decoration: none;text-indent: -999em;top: 50%;width: 45px;z-index: 10;}
	
	.flex-prev {background-position: 0 0;background:url(../assets/l.png) no-repeat scroll 0 0;left:50px;}
	.flex-next {background-position: 0 0;background:url(../assets/r.png) no-repeat scroll 0 0;right:50px;}
</style>
