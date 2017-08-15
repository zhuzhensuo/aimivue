<template>
  <div style="background:#F5F5F5;">
    <topbar></topbar>
    <div class="w1140">
      <div class="clearfix">
        <router-view></router-view>
      </div>
    </div>
    <foot></foot>
  </div>

</template>
<script>
import topbar from './components/topbar';
import router from './router';
import foot from './components/footer'
import {mapState} from 'vuex'
export default {
  name: 'app',
  data (){
    return {
      
    }
  },
  methods:{
  
  },
  components:{
    topbar,
    foot
  },
  mounted(){
    $(".balancewrap").each(function(){
      $(this).hover(function(){
        $(this).addClass("balance-active");
      },function(){
        $(this).removeClass("balance-active");
      });
    });
  },
  computed:mapState(['haslogin']),
  watch:{
    haslogin(){
      if(!this.haslogin){
        router.push({path:'/'}) 
      }
    }
  }
}
</script>
  
<style scoped>
 
</style>
