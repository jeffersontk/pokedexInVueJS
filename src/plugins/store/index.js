import Vue from  'vue'
import Vuex from 'vuex'
import Modules from './modules'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules:{
      Modules
    }
  })
  return Store
}
