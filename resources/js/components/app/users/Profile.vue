<template>
    <div class="card">
        <div class="card-header bg-primary text-white">Profile</div>

        <div class="card-body row">
            <div class="col">
                <form enctype="multipart/form-data">
                    <div class="d-flex justify-content-center">
                        <v-avatar size="100">
                            <v-img v-if="currentUser.image" :src="`user_images/${currentUser.image}`"></v-img>
                            <v-img v-model="avatar" v-else :src="`images/user_image.jpg`"></v-img>
                        </v-avatar>
                    </div>
                    <br>
                    <div class="d-flex justify-content-center">
                        <label class="btn btn-primary">
                            Upload Image <input type="file" @change="selectFile" hidden>
                        </label>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="text-danger" v-if="errors.image" role="alert">
                            <strong>{{ errors.image[0] }}</strong>
                        </span>
                    </div>
                </form>
                <br>
                <div class="d-flex justify-content-center">
                    <strong>
                        {{ currentUser.name }}
                    </strong>
                </div>
                <div class="d-flex justify-content-center">
                    <strong>
                        {{ currentUser.email }}
                    </strong>
                </div>
            </div>
            <div class="col-md-8">
                <form @submit.prevent="onSubmit">
                    <div class="form-group row">
                        <label for="name" class="col-md-3 col-form-label" :class="{ 'text-danger': errors.name }">Name</label>
                        <div class="col-md-9">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text mdi mdi-account" :class="{ 'text-danger': errors.name }" id="basic-addon1"></span>
                                </div>
                                <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" v-model="currentUser.name">
                            </div>
                            <span class="text-danger" v-if="errors.name" role="alert">
                                <strong>{{ errors.name[0] }}</strong>
                            </span>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-md-3 col-form-label" :class="{ 'text-danger': errors.email }">Email</label>
                        <div class="col-md-9">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text mdi mdi-mail" :class="{ 'text-danger': errors.email }" id="basic-addon1"></span>
                                </div>
                                <input type="text" class="form-control" :class="{ 'is-invalid': errors.email }" v-model="currentUser.email">
                            </div>
                            <span class="text-danger" v-if="errors.email" role="alert">
                                <strong>{{ errors.email[0] }}</strong>
                            </span>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success text-white" @click="overlay = !overlay"><span class="mdi mdi-check"></span>&nbsp;Update Changes</button>
                </form>
            </div>
        </div>
        <v-overlay :value="overlay">
            <circle8></circle8>
        </v-overlay>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Circle8 from 'vue-loading-spinner/src/components/Circle8'
export default {
    components: {
      Circle8
    },
    data() {
        return {
            errors: [],
            overlay: false,
            avatar: null
        }
    },
    methods: {
        ...mapActions(['getUser', 'updateUser', 'uploadImage']),
        onSubmit() {
            this.updateUser(this.currentUser)
            .then(r => {
                this.overlay = true
                this.$swal.fire('Success', r.data.message, 'success')
                this.overlay = false
            })
            .catch(e => {
                this.overlay = false
                if (e.response.status === 422) {
                    this.errors = e.response.data.errors
                }
            })
        },
        selectFile(event) {
            this.overlay = true
            this.avatar = event.target.files[0]
            const data = new FormData();
            data.append('image', this.avatar);
            this.uploadImage(data)
            .then(r => {
                this.overlay = false
                this.getUser()
            })
            .catch(e => {
                this.overlay = false
                if (e.response.status === 422) {
                    this.errors = e.response.data.errors
                }
            })
        }
    },
    computed: mapGetters(['currentUser']),
    created() {
        this.getUser()
    }
}
</script>

<style scoped>
    [hidden] {
        display: none !important;
    }
</style>