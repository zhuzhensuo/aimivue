<template>
 	<div class="indexs clearfix">
 		<a href="javascript:;" class="spec" v-if='now>0' @click='getPage(now--)'>&lt;</a>
 		<a href="javascript:;" v-for='(v,k) in pages' @click="fenye(k,$event.currentTarget)" :class='{"cur":now<tmp && now==k}' ref='a' v-if=''
 		>{{v}}</a>
 		<a href="javascript:;" class="spec" v-if='now<pageTotal-1' @click='getPage(now++)'>&gt;</a>
 	</div>
</template>

<script>
export default {
  name: 'hello',
  props:{
  	pageNum:{
  		type:Number,
  		default:5
  	},
  	pageTotal:{
  		type:Number,
  		default:10
  	}
  },
  data () {
    return {
      pages:[],
      now:0
    }
  },
  methods:{
  	getPage(k){
  		if(this.pageTotal<=this.pageNum) {
	  		var pn = this.pageTotal;
	  		for(var i=0;i<pn;i++){
	  			this.pages[i]=i+1;
			}
	  		return;
  		}
  		var mid=Math.ceil((this.pageNum)/2);
  		var a=this.$refs.a;
  		this.pages=[];
  		if(this.now<this.tmp){
  			for(var i=0;i<this.pageNum;i++){
	  			this.pages[i]=i+1;
			}
			try{
				a.forEach((v,k)=>{v.className=''});
				a[i].className='cur';
			}catch(e){}
  		}else if(this.now>=this.tmp && this.now<this.pageTotal-this.tmp){

  			for(var i=this.now-this.tmp;i<this.now+mid;i++){
	  			this.pages.push(i+1);
			}
			a.forEach((v,k)=>{v.className=''});
			a[this.tmp].className='cur';
  		}else{
  			for(var i=this.pageTotal-this.pageNum;i<this.pageTotal;i++){
	  			this.pages.push(i+1);
			}
			var mo=this.pageTotal%this.pageNum;
			var i=this.now-(Math.floor(this.pageTotal/this.pageNum)-1)*this.pageNum-mo;
			a.forEach((v,k)=>{v.className=''});
			a[i].className='cur';
  		}
  	},
  	fenye(k,node){
  		var n=parseInt(node.innerHTML);
  		this.now=n-1;
  		this.getPage(k);
  	},
  	getNow(){
  		this.$emit('getCurVal',this.now);
  	}
  },
  computed:{
  	tmp(){
  		return this.pageTotal<=this.pageNum ? this.pageTotal : Math.floor((this.pageNum)/2);
  	}
  },
  watch:{
 	now(){
 		this.getNow();
 	}
  },
  created(){
  	this.getPage();
  	this.getNow();
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.indexs{ text-align:center;}
	.indexs a{display:inline-block;border:1px solid #ccc; height:21px; width:21px; line-height:21px;margin:0 3px;text-align:center;color:#666; background:#fff;font-size:12px;border-radius:2px;}
	.indexs a.active{margin:0px 8px;}
	.indexs a.cur{color:#fff;background:#2CB2EE; cursor:default;border-color:#2CB2EE;}
	.indexs a:hover{color:#fff; background:#2CB2EE;border-color:#2CB2EE;}
	.indexs a.spec{ font-family:'黑体';}
</style>
