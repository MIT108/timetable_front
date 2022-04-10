import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
import { IS_USER_AUTHENTICATED_GETTER, IS_USER_VERIFIED_GETTER } from '../store/storeConstants'
//Authentication imports 
import Login from '../pages/auth/Login.vue'
import Verify from '../pages/auth/Verify.vue'
import Verified from '../pages/auth/Verified.vue'
//Dashboard imports
import Dashboard from '../pages/dashboard/Dashboard.vue'
import Notification from '../pages/dashboard/Notification.vue'

//timetable imports
//days section start 
import Days from '../pages/timeTable/Days/Days.vue'
import NewPeriod from '../pages/timeTable/Days/NewPeriod.vue'
import NewDay from '../pages/timeTable/Days/NewDay.vue'

//course section start
import Course from '../pages/timeTable/Course/Courses.vue'
import NewCourse from '../pages/timeTable/Course/NewCourse.vue'
import NewClass from '../pages/timeTable/Course/NewClass.vue'

const routes = [
  //authentication routers
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { auth: false }
  },
  {
    path: '/Verify',
    name: 'Verify',
    component: Verify
  },
  {
    path: '/Verified',
    name: 'Verified',
    component: Verified
  },//dashboard routers
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { auth: true }
  },
  {
    path: '/Notification',
    name: 'Notification',
    component: Notification,
    meta: { auth: true }
  },


  //timetable routers
  //day section start 
  
  {
    path: '/Days',
    name: 'Days',
    component: Days,
    meta: { auth: true }
  },
  {
    path: '/NewPeriod',
    name: 'NewPeriod',
    component: NewPeriod,
    meta: { auth: true }
  },
  {
    path: '/NewDay',
    name: 'NewDay',
    component: NewDay,
    meta: { auth: true }
  },
  //Course section start 
  
  {
    path: '/Courses',
    name: 'Courses',
    component: Course,
    meta: { auth: true }
  },
  {
    path: '/NewCourse',
    name: 'NewCourse',
    component: NewCourse,
    meta: { auth: true }
  },
  {
    path: '/NewClass',
    name: 'NewClass',
    component: NewClass,
    meta: { auth: true }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]);
  // console.log(to);
  if (to.meta.auth && !store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]) {
    next('/')
  }else if(!to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`] && store.getters[`auth/${IS_USER_VERIFIED_GETTER}`] != null){
    next('/dashboard')
  }else if (to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`] && store.getters[`auth/${IS_USER_VERIFIED_GETTER}`] == null){
    next('/Verify')
  }else{
    next()
  }
})

export default router
