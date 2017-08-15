import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        username:'',
        haslogin:false,
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
    	}
    },
    mutations:{
    	changeName(state,data){
    		state.username=data;
    	},
    	changeLogin(state,data){
    		state.haslogin=data;
    	},
    	getBanData(state){

            axios.get('/api/ban/',{}).then(res=>{
                res['data'].forEach(function(v,k){
                    state.banner[k]=v;
                });
                state.banner.forEach(function(v,k){
                     for(var attr in v){
                         if(attr=='url'){
                             v[attr] = "url("+v[attr]+")";
                         }
                     }
                        
                 })
            })
  		},
  		loginout(state){
  			state.username='';
  			state.haslogin=false;
  		},
        getAmdqData(state){
            axios.get('/api/amdqData',{}).then(function(res){
                console.log(res.data);
                res.data.forEach((v,k)=>{
                    state.amdq[k]=v;
                });
            })
        },
        getRgjl(state,data){
            data.forEach((v,k)=>{
                state.rgjl[k]=v;
            })
        },
        getHkjh(state,data){
            data.forEach((v,k)=>{
                state.hkjh[k]=v;
            })
        }
    },
    actions:{
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
                        console.log(data);
                        commit('changeName',data['data'][0]['mobile']);
                        commit('changeLogin',true)
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
