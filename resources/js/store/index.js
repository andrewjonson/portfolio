import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './modules/auth'
import users from './modules/users'
import posts from './modules/posts'

export default new Vuex.Store({
    modules: {
        auth,
        users,
        posts
    }
})