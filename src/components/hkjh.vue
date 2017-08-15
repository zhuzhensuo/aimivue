<template>
<div class="amdq-data2">
		<div class="month_tit">
			<ul class="clearfix">
				<li class="first">期数</li>
				<li>还款金额</li>
				<li>还款时间</li>
				<li>还款状态</li>
			</ul>
		</div>
		<div class="allwraps">
			<div class="data_display" v-for='(item,index) in hkjh' v-if='index>=now*displayNum && index<(now+1)*displayNum'>
				<ul class="clearfix">
					<li class="time_limit"><span><a href="#">{{index+1}}</a></span></li>
					<li>{{item.money}}元</li>
					<li>{{item.date}}</li>
					<li class="last yhk" v-if='item.status==1'>已还款</li>
					<li class="last hkyq" v-else-if='item.status==2'>还款逾期</li>
					<li class="last jjdq" v-else-if='item.status==3'>即将到期</li>
					<li class="last dhk" v-else>待还款</li>
				</ul>
			</div>
		</div>
		
		<div class="index">
			<page :pageNum='5' v-show='fenyenav' :pageTotal='total' @getCurVal='getCurVal'></page>
		</div>
	</div>
</template>

<script>
import page from './page'
import {mapState,mapActions} from 'vuex'
export default {
  data () {
    return {
    	now:0,
    	displayNum:5,
    	fenyenav:true
    }
  },
  components:{
  	page
  },
  methods:{
  	...mapActions(['getHkjh']),
  	getCurVal(i){
  		this.now=i;
  	}
  },
  computed:{
  	...mapState(['hkjh']),
  	total(){
  		return Math.ceil(this.hkjh.length/this.displayNum)
  	}
  },
  created(){
  	
  },
  mounted(){
  	this.getHkjh();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{margin-top: 30px;}
.data_tit li{float:left;width:25%; background:#fff; height:60px;cursor:pointer;text-align:center; line-height:56px; font-size:20px;color:#333; position:relative;}
.data_tit li.active span{ background:white;border-bottom:2px solid #FF3248;color:#FF3248;height:60px; line-height:56px;}
.data_tit li span{ display:block;min-width:150px;margin:0 auto;max-width:175px;}
.data_tit2{border-bottom:2px solid #eee;}
.datamodel{ display:none;}
.month_tit{ background:#EFF9FE;}
.month_tit ul li{float:left; width:16.5%; text-align:center; line-height:60px; height:60px;color:#999; font-size:16px;}
.data_display ul li{float:left; width:25%; text-align:center; line-height:59px; height:59px;color:#333; font-size:18px;}
.data_display ul li span.termmonth{ line-height:23px; display:block; width:100%;padding-top:5px;}
.data_display ul li.time_limit a{color:#333;}
.data_display ul li.time_limit span{display:block;border-left:4px solid #fff;}
.data_display ul{border-bottom:1px solid #ccc;}
.data_display ul li.muji{color:#71c6f0 !important;}
.data_display ul li.full{color:#ef495f !important;}
.data_display ul li.unfull{color:#999 !important;}
.data_display ul:hover{background:#EFF9FE;}
.data_display ul:hover li.time_limit span{border-left-color:#EF4B5F;}
.data_display ul li.last{font-size:16px;}
.data_display ul li.dhk,.data_display ul li.sd{color:#ff7b05;}
.data_display ul li.zd{color:#5cb4fa;}
.data_display ul li.pc span a{padding-left:35px; background:url(../assets/pc.png) no-repeat left center;}
.data_display ul li.phone span a{padding-left:35px; background:url(../assets/phone.png) no-repeat 5px center;}

.amdq-data .month_tit,.amdq-data2 .month_tit{ background:none;border-bottom:1px solid #ccc;}
.amdq-data .data_display ul li{width:20%;*width:19.9%;}
.amdq-data .month_tit ul li{width:20%;*width:19.9%;}
.amdq-data2 .month_tit ul li{width:25%;*width:24.9%;}
.plan dl dd{ height:60px; line-height:60px;border-bottom:1px solid #ccc;padding-left:10px;}
.plan dl dd span{color:#fd7470;}
.plan dl dd.noborder{border:none;}
</style>
