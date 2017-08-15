<template>
	<div class="shadow loginbox" id="loginbox">
		<div class="shadow_bg" @click='show(false)'></div>
		<div class="loginn"><login @loadshow='loadshows'></login></div>
	</div> 
</template>

<script>
import login from './login'
export default {
  data () {
    return {
    }
  },
  methods:{
  	show(b) {
  		this.$emit('showbox',b);
  	},
  	loadshows(b){
  		this.show(b);
  	}
  },
  components:{
  	login
  },
  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .loginn{ position:absolute; width:380px; height:404px; left:50%;top:50%;margin:-202px 0 0 -190px;}
  .loginn .loginnow{border-radius:22px;}
</style>
