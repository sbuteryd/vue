import Vue from "vue";
import Router from "vue-router";
import EventList from './view/EventList'
import EventShow from './view/EventShow'
import EventCreate from './view/EventCreate'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'event-list',
      component:EventList,
      alias:'/about'
    },
    {
      path:'/event',
      name:'event-show',
      component:EventShow
    },
    {
      path:'/event/create',
      name:'event-create',
      component:EventCreate
    }
  ]
});
