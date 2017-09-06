<template>
  <div>
    <keep-alive>
      <topbar></topbar>
    </keep-alive>
    
    <banner @showbox='show' keep-alive></banner>
    
    <div class="main w1140">
        <div class="tonggaolans">
          <div class="news">
              <ul>
                <li><a href="#">最新消息：关于4月7日02:00-03:00新浪支付停机维护的通知</a></li>
              </ul>
            </div>
            <a href="#" class="more">查看更多></a>
          </div> 
          <div class="tonggaolan">
            <div class="tonggao-wrap clearfix">
              <div class="tonggao-dl usernum">
                <dl>
                  <dd><span>28373</span></dd>
                  <dt>累计用户数(人)</dt>
                </dl>
              </div>
              <div class="tonggao-dl investernum">
                <dl>
                  <dd><span>1,512,789,888</span></dd>
                  <dt>用户累计投资（元）</dt>
                </dl>
              </div>
              <div class="tonggao-dl invester">
                <dl>
                  <dd><span>1,512,789,888</span></dd>
                  <dt>累计为用户赚取（元）</dt>
                </dl>
              </div>
            </div>
          </div>
          <div class="datadisplay">
            <div class="w1200 clearfix">
              <div class="dl">
                <dl>
                  <dt><img src="./assets/up.png" /></dt>
                  <dd class="dd"><span>超高收益</span></dd>
                  <dd>30倍银行活期利率</dd>
                </dl>
              </div>
              <div class="dl">
                <dl>
                  <dt><img src="./assets/hundred.png" /></dt>
                  <dd class="dd"><span>银行存管</span></dd>
                  
                  <dd>上海银行资金存管</dd>
                </dl>
              </div>
              <div class="dl">
                <dl>
                  <dt><img src="./assets/yushan.png" /></dt>
                  <dd class="dd"><span>风险控制</span></dd>
                  
                  <dd>银行级专业风控</dd>
                </dl>
              </div>
              <div class="dl">
                <dl>
                  <dt><img src="./assets/protect.png" /></dt>
                  <dd class="dd"><span>资产优质</span></dd>
                  <dd>精选房产赎楼</dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="xstj">
            <p class="commontit"><span>新手推荐</span><font>新手专享&nbsp;&nbsp;更高收益</font></p>
            <div class="xstj-wrap clearfix">
              <div class="xsbiao hovershadow">
                <div class="xsbiao-wrap">
                  <p>爱米理财新手标</p>
                  <div class="clearfix">
                    <dl class="shouyi">
                      <dt>10.00<span>％</span></dt>
                      <dd>预期年化收益率</dd>
                    </dl>
                    <dl>
                      <dt>1个月</dt>
                      <dd>期限</dd>
                    </dl>
                    <dl>
                      <dt>64,500000</dt>
                      <dd>剩余金额</dd>
                    </dl>
                    <div><a href="#" class="btns2">立即抢购</a></div>
                  </div>
                  <div class="advantage">
                    <dl>
                      <dd>首投加息</dd>
                      <dd>短期限</dd>
                      <dd>高收益</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="gifts">
                <div class="gifts-wrap">
                  <dl>
                    <dt>注册即送 </dt>
                    <dd><strong>998元加息券</strong></dd>
                    <dd>新手大礼包 </dd>
                  </dl>
                </div>
              </div>
            </div>
    </div>

    <div class="amdq">
       <amdq :more='true' :fenyenav='false'></amdq>
    </div>
     <div class="amdq">
       <amyx :more='true'></amyx>
    </div>
    <div class="zixun">
      <div class="clearfix">
        <div class="zxzx">
          <div class="zxzx-wrap">
            <div class="zxzx-wraps">
              <p><span>最新资讯</span><a href="#">更多资讯&gt;&gt;</a></p>
              <div class="zxlist">
                <ul>
                  <li><a href="#">重磅喜讯，爱米理财累计交易额突破14亿!</a></li>
                  <li><a href="#">爱米理财iOS版新版重磅来袭!</a></li>
                  <li><a href="#">中国人民财产保险股份有限公司为爱米理财用户账户安全承保!</a></li>
                  <li><a href="#">爱米理财iOS版新版重磅来袭!</a></li>
                  <li><a href="#">中国人民财产保险股份有限公司为爱米理财用户账户安全承保!</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="zjtz">
          <div class="zxzx-wrap">
            <div class="zxzx-wraps">
              <p><span>最新投资</span></p>
              <div class="zxlist">
                <ul>
                  <li><span>158******68 </span><span>1分钟内投资</span><span>50000</span></li>
                  <li><span>158******68 </span><span>1分钟内投资</span><span>50000</span></li>
                  <li><span>158******68 </span><span>1分钟内投资</span><span>50000</span></li>
                  <li><span>158******68 </span><span>1分钟内投资</span><span>50000</span></li>
                  <li><span>158******68 </span><span>1分钟内投资</span><span>50000</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="brand">
      <div class="left-arrow"><</div>
      <div class="brand-list">
        <ul>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_sina.png" /></span></a></li>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_sina.png" /></span></a></li>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_sina.png" /></span></a></li>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_sina.png" /></span></a></li>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_sina.png" /></span></a></li>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_picc.png" /></span></a></li>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_picc.png" /></span></a></li>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_picc.png" /></span></a></li>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_picc.png" /></span></a></li>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_picc.png" /></span></a></li>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_haodai.png" /></span></a></li>
          <li><a href="javascript:void(0);"><span><img src="http://res.yuanin.com/assets/2017/images/pic_haodai.png" /></span></a></li>
        </ul>
      </div>
      <div class="right-arrow">></div>
    </div>


    </div>
    <foot></foot>
    <loginbox v-if='seen' @showbox='show'></loginbox>

  </div>
</template>
<script>
import {mapState} from 'vuex';
import topbar from './components/topbar';
import banner from './components/banner';
import amdq from './components/amdq';
import amyx from './components/amyx';
import loginbox from './components/loginbox'
import foot from './components/footer'
import router from './router'
export default {
  name: 'app',
  data (){
    return {
      seen:false,
      more:''
    }
  },
  methods:{
    show(v){
        this.seen=v;
    },
    domove(){
      var move=function(){
      var left=$(".brand").find(".left-arrow");
      var right=$(".brand").find(".right-arrow");
      var li=$(".brand").find("li");
      var ul=$(".brand").find("ul");
      var index=0,timer=null,amount=0;
      var w=$(".brand-list").outerWidth();
      ul.css("width",li.size()*li.outerWidth());
      amount=Math.ceil(ul.outerWidth()/w);
      var animation=function(){
        ul.stop(true,false).animate({left:-(index*w)},"slow");
      }
      right.click(function(){
        
        index++;
        if(index>=amount){index=0}
        animation();
        
      });
      
      left.click(function(){
        index--;
        if(index<0){index=amount-1}
        animation();
      });
      
      var auto=function(){
        timer=setInterval(function(){
          index++;
          if(index>=amount){index=0}
          animation();
        },3000);
      }
      //auto();
      $(".brand").hover(function(){
        //clearInterval(timer);
      },function(){
        //auto();
      });
  }
     move();
    }
  },
  components:{
    topbar,
    banner,
    amdq,
    amyx,
    loginbox,
    foot
  },
  computed:mapState(['haslogin']),
  mounted(){
    this.domove();
  },
  created(){
  }
}
</script>

<style scoped>
    .tonggaolans{border:1px solid #E5E5E5; height:40px; line-height:40px; overflow:hidden;padding:0 17px;margin-top:15px;}
    .news{ height:40px;float:left;}
    .tonggaolans a.more{float:right;color:#666;}
    .news a{color:#666;font-size:16px;}
    .news a:hover,.tonggaolans a.more:hover,.commontit a:hover{color:#FF3248;}

    .tonggao-wrap{margin-top:23px;}
    .tonggaolan{border-bottom:2px dashed #E6E6E6;padding-bottom:5px;}
    .tonggaolan .tonggao-dl,.tonggaolan .tonggao-dl2{float:left; width:33.3%; height:90px; overflow:hidden;}
    .tonggao-dl2 dd{height:40px;overflow:hidden;}
    .tonggaolan .tonggao-dl dl{padding-left:140px;}
    .tonggaolan .tonggao-dl dl dt{font-size:16px;color:#666;margin-top:3px;}
    .tonggaolan .tonggao-dl dl dd{margin-top:10px;}
    .tonggaolan .tonggao-dl dl dd span i{position:absolute;}
    .tonggaolan .tonggao-dl dl dd span{font-size:26px;color:#ff4e50; position:relative;font-family:Arial;}
    .tonggaolan .usernum{background:url(./assets/usericon.png) no-repeat 75px 15px;}
    .tonggaolan .investernum{background:url(./assets/moneyicon.png) no-repeat 75px 15px;}
    .tonggaolan .invester{background:url(./assets/moneybagicon.png) no-repeat 75px 15px;}
    .datadisplay{ background:white;padding:40px 0 50px;border-bottom:2px dashed #E6E6E6;}
    .datadisplay .dl{float:left;width:25%; position:relative;}
    .datadisplay .dl dl{padding-left:135px;}
    .datadisplay .dl dt{ position:absolute;left:35px;top:0;}
    .datadisplay .dl dd.dd{font-size:22px;color:#333;}
.datadisplay .dl dd{line-height:22px;font-size:16px;margin-top:10px;}

.xstj{margin-top:20px;}
.commontit{ height:30px;}
.commontit span{ font-size:22px;float:left;}
.commontit font{font-size:16px;color:#999;margin:6px 0 0 10px;float:left;}
.commontit a{float:right;color:#999;margin-top:8px;font-size:16px;}
.commontit2{border-bottom:1px solid #E6E6E6;padding-bottom:20px;}
.xsbiao{float:left;width:680px;border:1px solid #ddd; height:183px;}
.xstj-wrap{margin-top:15px;}
.xsbiao-wrap{padding:19px 28px 0 20px;}
.xsbiao-wrap p{color:#4898f1; font-size:17px; background:url(./assets/xsbicon.png) no-repeat left 3px;padding-left:22px;}
.hovershadow{transition:0.3s;}
.hovershadow:hover{box-shadow:0 0 13px #ccc;border-color:white;transition:0.3s;}
.xsbiao-wrap .clearfix{margin-top:12px;}
.xsbiao-wrap .clearfix div{float:right;margin-top:20px;}
.xsbiao-wrap .clearfix dl{float:left;margin-left:82px;}
.xsbiao-wrap .clearfix dl dt{height:40px; line-height:40px; font-size:24px; font-family:Arial;}
.xsbiao-wrap .clearfix dl dd{font-size:16px;color:#999;}
.xsbiao-wrap .clearfix .shouyi{margin-left:0;}
.xsbiao-wrap .clearfix .shouyi dt{font-size:40px;color:#ff4e50; font-family:Arial, sans-serif;}
.xsbiao-wrap .clearfix .shouyi dt span{font-size:24px;}

.advantage{margin-top:25px;}
.advantage dd{float:left;border:1px solid #ddd;color:#999;padding:1px 15px;margin-right:10px;border-radius:12px;}
.gifts{float:right;border: 1px solid #ddd;height: 183px;width:440px; background:url(./assets/gift.png) no-repeat 210px center;}
.gifts dl dt{ font-size:25px;color:#333;}
.gifts dl dd{font-size:20px;color:#5cb4fa;margin-top:5px;}
.gifts dl dd strong{color:#ec5c55;font-size:29px;}
.gifts-wrap{padding:30px 0 0 40px;}
.amdq{margin-top:30px;}

.zixun{margin-top:35px;}
.zxzx{width:547px;float:left;height:235px; background:#D4E8FF;}
.zjtz{width:547px;float:right;height:235px; background:#FFDBB2;}
.zxzx-wrap{padding:10px;}
.zxzx-wraps{border:1px solid #fff;padding:10px;}
.zxzx-wraps p{ position:relative;}
.zxzx-wraps p span{font-size:22px;color:#333;}
.zxzx-wraps p a{ position:absolute;right:0; top:0;color:#333;}
.zxzx-wraps p a:hover{color:#ff4e50;}
.zxlist{margin-top:10px;}
.zxlist ul li{ line-height:30px;font-size:16px; font-family:Arial;}
.zxlist ul li a{color:#333;}
.zxlist ul li a:hover{ text-decoration:underline;}
.zxlist ul li span{ display:inline-block; width:33.3%;}

.brand{ height:50px; position:relative;margin-top:30px;}
.left-arrow,.right-arrow{ font-family:'黑体'; height:50px; width:50px; line-height:50px; position:absolute;top:0; cursor:pointer;}
.left-arrow{left:0;}
.right-arrow{ right:0; text-align:right;}
.brand-list{ height:52px; width:1026px; position:relative; overflow:hidden;}
.brand-list ul{ position:absolute;left:0;top:0;}
.brand-list ul li{ width:205px;float:left;}
.brand-list ul li a{float:left; width:100%; text-align:center;}
.brand-list ul li a span{ display:block; width:85%;margin:0 auto;border:1px solid #E5E5E5;}
.brand-list ul li span img{ height:50px; display:block; margin:0 auto;}
</style>
