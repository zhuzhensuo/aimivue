<template>
  <div style="height:2000px;">
    <topbar></topbar>
    <div class="smallban2"></div>
    <div class="aimilist">
      <div class="w1140 aimitit">
        <dl class="clearfix">
          <dd><router-link to='/aimidingqi'>爱米定期</router-link></dd>
          <dd class="active"><router-link to='/aimiyouxuan'>爱米优选</router-link></dd>
        </dl>
      </div>
    </div>
    <div class="w1140 amdqwrap">
      <amyx :more='false'></amyx>
    </div>
  </div>
</template>
<script>
import topbar from './components/topbar';
import amyx from './components/amyx'
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
    amyx
  }
}
</script>
  
<style scoped>
  .amdqwrap{margin-top: 30px;}
  .smallban2{ height:240px; background:#3CBFFC url(./assets/amyx.png) no-repeat center top;}
  .aimilist{ height:48px; border-bottom:2px solid #DCDCDC;}
  .aimitit{margin-top:20px;}
  .aimitit dd{float:left; font-size:21px;margin-right:105px;}
  .aimitit dd a{color:#333; display:block; width:100px;height:47px; text-align:center;}
  .aimitit dd.active a{color:#ff4e50;border-bottom:3px solid #FF3549;}
</style>
