<template>
  <div>
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
import foot from './components/footer'
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
  }
}
</script>
  
<style scoped>
 
</style>
