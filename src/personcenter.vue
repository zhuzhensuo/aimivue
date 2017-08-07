<template>
  <div style="background:#F5F5F5;">
    <topbar></topbar>
    <div class="w1140">
      <div class="clearfix">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>
<script>
import topbar from './components/topbar';
import router from './router';
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
    topbar
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
