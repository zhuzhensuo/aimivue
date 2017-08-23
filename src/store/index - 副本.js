import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Cookies from '../../static/js/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        username:'',
        haslogin:false,
        rempwd:false,
        banner:[],
        amdq:[],
        rgjl:[],
        hkjh:[]
    },
    getters:{
    	username(state){
    		return state.username;
    	},
    	haslogin:state=>{
    		return state.haslogin
    	},
        len(state){
            return state.banner.length>0 ? true :false;
        }
    },
    mutations:{
    	changeName(state,data){
    		state.username=data;
    	},
    	changeLogin(state,data){
    		state.haslogin=data;
    	},
    	getBanData(state,context){
            axios.get('/api/ban/',{}).then(res=>{
                state.banner=res.data
            })
  		},
  		loginout(state){
  			state.username='';
  			state.haslogin=false;
            Cookies.unset('name','');
            Cookies.unset('islogin',false);
  		},
        getAmdqData(state){
            axios.get('/api/amdqData',{}).then(function(res){
                state.amdq=res.data;
            })
        },
        getRgjl(state,data){
            state.rgjl=data;
        },
        getHkjh(state,data){
            state.hkjh=data;
        },
        rememberpwd(state,data){
            state.rempwd=data;
        },
        logsuccess(state){
           //alert(state.rempwd);
          if(state.rempwd && state.haslogin){
           
            Cookies.set('islogin',state.haslogin,new Date(2020,0,1));
            Cookies.set('name',state.username,new Date(2020,0,1));
          }else if(state.haslogin && !state.rempwd ){
            Cookies.set('islogin',state.haslogin,'Session');
            Cookies.set('name',state.username,'Session');
          }
        }
    },
    actions:{
        rememberpwds({commit},b){
            commit('rememberpwd',b);
        },
        loginIn({commit}){
            var self=this;
            var sj=$('.shoujihao').val();
            var pwd=$('.loginpwd').val();
            $.post({
                url:"http://hkapi.yuanin.com/test.php",
                data:{module:'user',mothed:'login',mobile:13002172132,password:565296844},
                success:function(data){
                    if(data.result==0){
                        console.log(data.remark);
                    }else if(data.result==1){
                        commit('changeName',data['data'][0]['mobile']);
                        commit('changeLogin',true);
                        commit('logsuccess');
                       // alert(state.rempwd)
                    }
                }
            })
        },
    	getBanData({commit,dispatch}){
	    	commit('getBanData')
	    },
	    loginout({commit}){
	    	commit('loginout')
	    },
        getAmdqData({commit,dispatch}){
            commit('getAmdqData');
        },
        getRgjl({commit}){
            axios.get('/api/rgjl/',{}).then(function(res){
                commit('getRgjl',res.data)
            })
        },
        getHkjh({commit}){
            axios.get('/api/hkjh/',{}).then(function(res){
                commit('getHkjh',res.data)
            })
        }
    }

})
