<template>
	<div>
		<topbar></topbar>
		<div class="logins">
      <div class="logins-wrap">
        <div class='w1200 clearfix'>
          <div style="padding-top:50px;"><login></login></div>
        </div>
      </div>
			
		</div>
    <foot></foot>
	</div>
</template>

<script>
import login from './components/login'
import topbar from './components/topbar'
import foot from './components/footer'
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
  	topbar,
    foot
  },

  computed:mapState({
    haslogin:state=>state.cart.haslogin
  }),
  watch:{
    haslogin(){
      if(this.haslogin){
        router.push({path:'personcenter'});
      }
    }
  },
  created(){
    if(this.haslogin){
        router.push({path:'personcenter'});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.logins{ height:595px; background:#4FA0FF;}
  .logins-wrap{width:1400px;background:url(./assets/login_bg.png) no-repeat left bottom;height:595px; }

</style>
