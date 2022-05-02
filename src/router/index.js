import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录界面',
      component: () => import('@/pages/index.vue')
    },
    {
      path: '/mainstudent',
      name: '学生界面',
      component: () => import('@/pages/mainstudent/mainstudent.vue')
    },
    {
      path: '/mainadmin',
      name: '管理员界面',
      component: () => import('@/pages/mainadmin/mainadmin.vue')
    },
    {
      path: '/mainteacher',
      name: '教师界面',
      component: () => import('@/pages/mainteacher/mainteacher.vue')
    },
  ]
})
