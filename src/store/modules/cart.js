import axios from 'axios'
import * as type from '../mutation.js'
import Cookies from '../../../static/js/index.js'
export default {
    namespace:true,
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
        [type.CHANGE_NAME](state,data){
            state.username=data;
        },
        [type.CHANGE_LOGIN](state,data){
            state.haslogin=data;
        },
        [type.GET_BAN_DATA](state,context){
            axios.get('/api/ban/').then(res=>{
                state.banner=res.data
            })
        },
        [type.LOGIN_OUT](state){
            state.username='';
            state.haslogin=false;
            Cookies.unset('name','');
            Cookies.unset('islogin',false);
        },
        [type.GET_AMDQ_DATA](state,data){
            state.amdq=data;
        },
        [type.GET_RGJL](state,data){
            state.rgjl=data;
        },
        [type.GET_HKJH](state,data){
            state.hkjh=data;
        },
        [type.REMEMBER_PWD](state,data){
            state.rempwd=data;
        },
        [type.LOG_SUCCESS](state){
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
            commit(type.REMEMBER_PWD,b);
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
                        commit(type.CHANGE_NAME,data['data'][0]['mobile']);
                        commit(type.CHANGE_LOGIN,true);
                        commit(type.LOG_SUCCESS);
                       // alert(state.rempwd)
                    }
                }
            })
        },
        getBanData({commit}){
            commit(type.GET_BAN_DATA)
        },
        loginout({commit}){
            commit(type.LOGIN_OUT)
        },
        getAmdqData({commit}){
            axios.get('/api/amdqData',{}).then(function(res){
                commit(type.GET_AMDQ_DATA,res.data);
            })
            
        },
        getRgjl({commit}){
            axios.get('/api/rgjl/',{}).then(function(res){
                commit(type.GET_RGJL,res.data)
            })
        },
        getHkjh({commit}){
            axios.get('/api/hkjh/',{}).then(function(res){
                commit(type.GET_HKJH,res.data)
            })
        }
    }
}
