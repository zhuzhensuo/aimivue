<template>
  <div>
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
  }
}
</script>
  
<style scoped>
 
</style>
