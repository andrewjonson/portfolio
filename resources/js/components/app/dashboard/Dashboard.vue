<template>
    <div class="card">
        <div class="card-header bg-primary text-white">Dashboard</div>

        <div class="card-body">
            <vue-editor placeholder="Write post here..." v-model="post.title"></vue-editor>
            <span v-if="errors.title" class="text-danger">{{ errors.title[0] }}</span><br>
            <button @click.prevent="create" class="btn btn-primary"><span class="mdi mdi-pencil"></span>&nbsp;Save Post</button>
            <button class="btn btn-danger" @click.prevent="clear"><span class="mdi mdi-delete"></span>Clear Post</button>
            <hr>
            <nav v-if="posts.data" aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" :class="{ disabled: !pagination.prev_page_url }"><a class="page-link" @click.prevent="getPosts(pagination.prev_page_url)" href="#">Previous</a></li>
                    <li class="page-item disabled"><a class="page-link text-dark" href="#">Page {{ pagination.current_page }} of {{ pagination.last_page }}</a></li>
                    <li class="page-item" :class="{ disabled: !pagination.next_page_url }"><a class="page-link" @click.prevent="getPosts(pagination.next_page_url)" href="#">Next</a></li>
                </ul>
            </nav>
            <div class="jumbotron" v-for="post in posts.data" :key="post.id"> 
                <div class="row">
                    <div class="col-sm-4 text-center">
                        <v-avatar size="100">
                            <v-img width="100" v-if="post.user.image" :src="`user_images/${post.user.image}`"></v-img>
                            <v-img v-else :src="`images/user_image.jpg`"></v-img>
                        </v-avatar>
                        <h5 class="mt-2">{{ post.user.name }}</h5>
                        <i>{{ post.user.email }}</i><br>
                        <i>Joined: {{ post.user.created_at | formatDate }}</i>
                    </div>
                    <div class="col">
                        <p class="lead" v-html="post.title">{{ post.title }}</p>
                        <i>Created at: {{ post.created_at | formatDate }}</i><br>
                        <i>Updated at: {{ post.created_at | formatDate }}</i><br><br>
                        <button class="btn btn-success" @click.prevent="editPost(post)" v-if="currentUser.id === post.user.id"><span class="mdi mdi-pencil"></span>&nbsp;Edit Post</button>
                        <button class="btn btn-danger" @click.prevent="del(post.id)" v-if="currentUser.id === post.user.id"><span class="mdi mdi-delete"></span>&nbsp;Delete Post</button>
                    </div>
                </div>
            </div>
            <nav v-if="posts.data" aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" :class="{ disabled: !pagination.prev_page_url }"><a class="page-link" @click.prevent="getPosts(pagination.prev_page_url)" href="#">Previous</a></li>
                    <li class="page-item disabled"><a class="page-link text-dark" href="#">Page {{ pagination.current_page }} of {{ pagination.last_page }}</a></li>
                    <li class="page-item" :class="{ disabled: !pagination.next_page_url }"><a class="page-link" @click.prevent="getPosts(pagination.next_page_url)" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
        <input type="hidden" v-model="post.post_id">
        <v-overlay :value="overlay">
            <circle8></circle8>
        </v-overlay>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { mapActions, mapGetters } from 'vuex'
import Circle8 from 'vue-loading-spinner/src/components/Circle8'
export default {
    components: {
        VueEditor,
        Circle8
    },
    data() {
        return {
            post: {
                title: '',
                post_id: ''
            },
            overlay: false,
            errors: [],
            edit: false,
            interval: null,
            postOverlay: false
        }
    },
    methods: {
        ...mapActions(['getPosts', 'createPost', 'getUser', 'updatePost', 'deletePost']),
        clear() {
            this.post.title = ''
        },
        create() {
            this.overlay = true
            if (!this.edit) {
                this.createPost(this.post)
                .then(r => {
                    this.$swal.fire('Success', r.data.message, 'success')
                    this.overlay = false
                    this.post.title = ''
                    this.getPosts('api/posts')
                })
                .catch(e => {
                    this.overlay = false
                    if (e.response.status === 422) {
                        this.errors = e.response.data.errors
                    }
                })
            } else {
                this.updatePost(this.post)
                .then(r => {
                    this.$swal.fire('Success', r.data.message, 'success')
                    this.overlay = false
                    this.getPosts()
                    this.post.title = ''
                })
                .catch(e => {
                    this.overlay = false
                    if (e.response.status === 422) {
                        this.errors = e.response.data.errors
                    }
                })
            }
        },
        editPost(post) {
            this.edit = true
            this.post.title = post.title,
            this.post.post_id = post.id
            window.scrollTo(0,0);
        },
        del(id) {
            if (confirm('Are you sure? Do you really want to delete this post?')) {
                this.overlay = true
                this.deletePost(id)
                .then(r => {
                    this.$swal.fire('Success', r.data.message, 'success')
                    this.overlay = false
                    this.getPosts('api/posts')
                })
            }
        },
        fetchPosts(page_url) {
            this.interval = setInterval(() => {
                page_url = page_url || 'api/posts'
                this.getPosts(page_url)

            }, 5000)
        }
    },
    computed: mapGetters(['posts', 'currentUser', 'pagination']),
    beforeDestroy() {
        clearInterval(this.interval)
    },
    created() {
        this.fetchPosts()
        this.getUser()
    },
}
</script>