import Axios from "axios"

const state = {
    post: {},
    pagination: {}
}
const getters = {
    posts: state => state.post,
    pagination: state => state.pagination
}
const actions = {
    getPosts({commit}, page_url) {
        Axios.get(page_url)
        .then(r => {
            commit('setPosts', r.data)
            const pagination = {
                current_page: r.data.current_page,
                last_page: r.data.last_page,
                next_page_url: r.data.next_page_url,
                prev_page_url: r.data.prev_page_url
            }
            commit('setPagination', pagination)
        })
    },
    createPost({}, post) {
        return Axios.post('api/posts/create', post)
    },
    updatePost({}, post) {
        return Axios.put(`api/posts/update/${post.post_id}`, post)
    },
    deletePost({}, id) {
        return Axios.delete(`api/posts/delete/${id}`)
    }
}
const mutations = {
    setPosts: (state, posts) => state.post = posts,
    setPagination: (state, pagination) => state.pagination = pagination
}

export default {
    state,
    getters,
    actions,
    mutations
}