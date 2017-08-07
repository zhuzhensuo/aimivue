<template>
	<div class="shadow loginbox" id="loginbox">
		<div class="shadow_bg" @click='show(false)'></div>
		<login @loadshow='loadshows'></login>
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
<style scoped>

</style>
