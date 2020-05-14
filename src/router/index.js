import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/login/Login'
import Second from '@/components/views/Second'


Vue.use(Router)

export default new Router({
  routes: [
    {
      //path设置为/，代表项目启动时默认打开页面
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/second',
      name: 'Second',
      component: Second
    }
  ]
})
