import Axios from "axios"

const state = {
    token: localStorage.getItem('appToken'),
    user: {}
}
const getters = {
    currentUser: state => state.user,
    isAuthenticated: state => !!state.token
}
const actions = {
    login({}, user) {
        return Axios.post('/api/login', user)
    },
    register({}, user) {
        return Axios.post('/api/register', user)
    },
    getUser({commit}) {
        Axios.get('/api/user/currentUser')
        .then(r => {
            commit('setUser', r.data)
        })
    },
    logout() {
        localStorage.removeItem('appToken')
        window.location.replace('/login')
    },
    forgotPassword({}, email) {
        return Axios.post('/api/password/email', {
            email: email
        })
    },
    resetPassword({}, user) {
        return Axios.post('/api/password/reset', user)
    }
}
const mutations = {
    setUser: (state, user) => state.user = user,
    authenticated: (state, token) => state.token = token,
    validationError: (state, errors) => state.errors = errors, 
    setStatus: (state, message) => state.response = message
}

export default {
    state,
    getters,
    actions,
    mutations
}