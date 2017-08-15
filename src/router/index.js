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
                path:'/',component:about
            },{
                path:'manage',component:manage
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
            var login=store.state.haslogin;
            if(!login){
                next('/loginpage')
            }else{
                next(true)
            }
        }
    },{
        name:'detail',path:'/detail/:id',component:detail
    }
  ]
})

export default router;
