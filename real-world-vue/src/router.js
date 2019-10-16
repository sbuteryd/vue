import Vue from "vue";
import Router from "vue-router";
import EventList from './views/EventList'
import EventShow from './views/EventShow'
import EventCreate from './views/EventCreate'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'event-list',
      component:EventList,
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
