import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import create from '@/components/interview/create'
import myInterview from '@/components/interview/myInterview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/create',
      name: 'create',
      component: create
    }, {
      path: '/myInterview',
      name: 'myInterview',
      component: myInterview
    }
  ]
})
