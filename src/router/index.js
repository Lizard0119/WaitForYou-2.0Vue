import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import create from '@/components/interview/create'
import myInterview from '@/components/interview/myInterview'
import AllJob from "../components/job/AllJob";
import AllCompany from "../components/job/AllCompany";
import Select from "../components/job/Select";
import SelectSearch from "../components/job/SelectSearch";
import SearchCompany from "../components/job/SearchCompany";
import CompanyDesc from "../components/job/CompanyDesc";
import SearchJob from "../components/job/SearchJob";
import TestMap from "../components/job/TestMap";
// 测一下，加个

// ??
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllJob',
      component: AllJob
    }, {
      path: '/create',
      name: 'create',
      component: create
    }, {
      path: '/myInterview',
      name: 'myInterview',
      component: myInterview
    },
    {
      path: '/allJob',
      name: 'AllJob',
      component: AllJob
    },
    {
      path: '/AllCompany',
      name: 'AllCompany',
      component: AllCompany
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/SelectSearch',
      name: 'SelectSearch',
      component: SelectSearch
    },
    {
      path: '/SearchCompany',
      name: 'SearchCompany',
      component: SearchCompany
    },
    {
      path: '/CompanyDesc',
      name: 'CompanyDesc',
      component: CompanyDesc
    },
    {
      path: '/SearchJob',
      name: 'SearchJob',
      component: SearchJob
    },
    {
      path: '/TestMap',
      name: 'TestMap',
      component: TestMap
    }
  ]
})
