<template>
  <div class="personcenter">
    <div class="accounts">
      <div class="clearfix w1140">
         <myaccountnav></myaccountnav>
         <zhzlinfo></zhzlinfo>
      </div>
    </div>  
  </div>
</template>
<script>
  import myaccountnav from './components/myaccountnav'
  import zhzlinfo from './components/zhglinfo'
  export default {
    components:{
      myaccountnav,
      zhzlinfo
    }
  }
</script>
  
<style scoped>
 .personcenter{padding-top:15px;}
</style>
