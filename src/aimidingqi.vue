<template>
  <div>
    <topbar></topbar>
    <div class="smallban"></div>
    <div class="aimilist">
      <div class="w1140 aimitit">
        <dl class="clearfix">
          <dd class="active"><router-link to='/aimidingqi'>爱米定期</router-link></dd>
          <dd><router-link to='/aimiyouxuan'>爱米优选</router-link></dd>
        </dl>
      </div>
    </div>
    <div class="w1140 amdqwrap">
      <amdq :more='false' :fenyenav='true'></amdq>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import topbar from './components/topbar'
import amdq from './components/amdq'
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
    amdq,
    foot
  }
}
</script>
  
<style scoped>
  .amdqwrap{margin-top: 30px;}
  .smallban{ height:240px; background:#7355E9 url(./assets/amdq.png) no-repeat center top;}
  .aimilist{ height:48px; border-bottom:2px solid #DCDCDC;}
  .aimitit{margin-top:20px;}
  .aimitit dd{float:left; font-size:21px;margin-right:105px;}
  .aimitit dd a{color:#333; display:block; width:100px;height:47px; text-align:center;}
  .aimitit dd.active a{color:#ff4e50;border-bottom:3px solid #FF3549;}
</style>
