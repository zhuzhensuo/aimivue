<template>
 <div>
 	<p class="commontit commontit2"><span>爱米定期</span><font>定期理财&nbsp;&nbsp;稳定增值</font>
 		<router-link to='/aimidingqi' v-if='more'>更多理财>></router-link>
 	</p>
 	<div class="amdq-wrap">
		<div class="amdqs" v-for='(data,k) in amdq' v-if='k<(now+1)*displayNum && k>=(now)*displayNum'>
			<p>{{data.decs}}</p>
			<div class="clearfix">
				<dl class="rate">
					<dt>{{data.rate}}<span>％</span></dt>
					<dd>预期年化收益率</dd>
				</dl>
				<dl>
					<dt>{{data.month}}个月</dt>
					<dd>期限</dd>
				</dl>
				<dl>
					<dt>{{data.amount}}</dt>
					<dd>剩余份额</dd>
				</dl>
				<dl class="percent">
					<dt><span><i :style="{'width':data.progress+'%'}">&nbsp;</i></span></dt>
					<dd>进度：{{data.progress}}％</dd>
				</dl>
				<div>
					<router-link v-if='data.soldout==false' :to='{name:"detail",params:{"id":data.id}}'><a href="#" class="btns2">立即抢购</a></router-link>
					<a v-else href="javascript:void(0)" class="btns2 btns_disable">立即抢购</a>

				</div>
			</div>

		</div>
				
	</div>
	<div class="indexs">
		<page :pageNum='5' v-show='fenyenav' :pageTotal='total' @getCurVal='getCurVal'></page>
	</div>
 </div>
</template>

<script>
import {mapActions,mapState,mapMutations} from 'vuex'
import axios from 'axios'
import page from './page'
import Mock from 'mockjs'
//import faker from 'faker'
export default {
  props:['more','fenyenav'],
  data () {
    return {
    	now:0,
    	displayNum:5
    }
  },
  components:{
  	page
  },
  methods:{
  	getCurVal(now){
  		this.now=now;
  	},
  	...mapActions(['getAmdqData'])
  },
  computed:{
  	...mapState({
  		amdq:state=>state.cart.amdq
  	}),
  	total(){
  		return Math.ceil(this.amdq.length/this.displayNum);
  	}
  },
  created(){
  	this.getAmdqData();
  	var random=Mock.Random;
  	//var img=random.image('1903x350' ,'#cc0000','Mockjs');
  	// axios.get('/api/address/',{}).then(function(res){
  	// 	console.log(res.data);
  	// })
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
	.indexs{margin-top: 40px;}
</style>
