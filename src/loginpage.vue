<template>
	<div>
		<topbar></topbar>
		<div class="logins">
			<login></login>
		</div>
	</div>
</template>

<script>
import login from './components/login'
import topbar from './components/topbar'
import {mapActions,mapState} from 'vuex'
import router from './router'
export default {
  data () {
    return {
    }
  },
  methods:{
  	
  },
  components:{
  	login,
  	topbar
  },
  created(){
    if(this.haslogin){
        router.push({path:'personcenter'});
      }
  },
  computed:mapState(['haslogin']),
  watch:{
    haslogin(){
      if(this.haslogin){
        router.push({path:'personcenter'});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.logins{ position: fixed; width: 100%; height: 100%;top:0;left:0;}
</style>
