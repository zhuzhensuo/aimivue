import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/shouye'
import aimidingqi from '@/aimidingqi'
import aimiyouxuan from '@/aimiyouxuan'
import xxpl from '@/xxpl'
import about from '@/about'
import manage from '@/manage'
import loginpage from '@/loginpage'
import personcenter from '@/personcenter'
import zhzl from '@/zhzl'
import store from '@/store'
import detail from '@/detail'
import xxpls from '@/xxpls'
import ptdsj from '@/ptdsj'
import xszy from '@/xszy'
import register from '@/register'
Vue.use(Router)


const router=new Router({
  routes: [
    {
      path: '/',
      component: shouye
    },{
        path:'/aimidingqi',
        component:aimidingqi
    },{
        path:'/aimiyouxuan',
        component:aimiyouxuan
    },{
        path:'/xxpl/',
        component:xxpl,
        children:[
            {
                path:'/',component:xxpls
            },{
                path:'about',component:about
            },{
                path:'manage',component:manage
            },{
                path:'ptdsj',component:ptdsj
            },{
                path:'xszy',component:xszy
            }
        ]
    },{
        path:'/loginpage',component:loginpage
    },{
        name:'personcenter',
        path:'/personcenter',component:personcenter,
        children:[
            {
                path:'/',component:zhzl
            }
        ],
        beforeEnter(from,to,next){
            var login=store.state.cart.haslogin;
            if(!login){
                next('/loginpage')
            }else{
                next(true)
            }
        }
    },{
        name:'detail',path:'/detail/:id',component:detail
    },{
        name:'register',path:'/register',component:register
    }
  ]
})

export default router;
