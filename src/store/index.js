import { createStore } from 'vuex'
import auth from './moduls/auth/index'
import Day from './moduls/Day'
import Period from './moduls/Period'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    Day,
    Period
  }
})
