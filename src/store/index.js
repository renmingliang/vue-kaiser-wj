import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import menu from './modules/menu'
import permission from './modules/permission'
import project from './modules/project'
import question from './modules/question'
import award from './modules/award'
import other from './modules/other'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    menu,
    permission,
    project,
    question,
    award,
    other
  },
  getters
})

export default store
