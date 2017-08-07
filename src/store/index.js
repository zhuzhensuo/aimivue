import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        username:'',
        haslogin:false,
        banner:[]
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
    		$.ajax({
				type:'post',
				url:"http://hkapi.yuanin.com/test.php",
				data:{module:'other',mothed:'bannernotice_new'},
				success:function(data){
					data['data'].forEach(function(v,k){
						state.banner[k]=v;
					});
					state.banner.forEach(function(v,k){
						for(var attr in v){
							if(attr=='src'){
								v[attr] = "url("+v[attr]+")";
							}
						}
						
					})
				}
			})
  		},
  		loginout(state){
  			state.username='';
  			state.haslogin=false;
  		}
    },
    actions:{
    	changeName(context,data){
    		context.commit('changeName',data)
    	},
    	changeLogin(context,data){
    		context.commit('changeLogin',data)
    	},
    	getBanData(context){
	    	context.commit('getBanData')
	    },
	    loginout(context){
	    	context.commit('loginout')
	    }
    }

})
