import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import create from '@/components/interview/create'
import myInterview from '@/components/interview/myInterview'
import AllJob from "../components/job/AllJob";
import faxian from "../components/job/faxian";
import Select from "../components/job/Select";
import SelectSearch from "../components/job/SelectSearch";
import SearchCompany from "../components/job/SearchCompany";
import CompanyDesc from "../components/job/CompanyDesc";

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
      path: '/faxian',
      name: 'faxian',
      component: faxian
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
    }
  ]
})
