import Axios from "axios"

const state = {
    user: {}
}
const getters = {

}
const actions = {
    updateUser({}, user) {
        return Axios.put(`/api/user/update/${user.id}`, {
            name: user.name,
            email: user.email,
        })   
    },
    uploadImage({}, avatar) {
        return Axios.post('api/user/upload', avatar, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    changePassword({}, user) {
        return Axios.post('api/user/change_password', user)
    }
}
const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}