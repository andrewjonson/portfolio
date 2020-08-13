<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <main class="py-4">
                    <div class="card">
                        <div class="card-header bg-primary text-white"><span class="mdi mdi-account-plus"></span>&nbsp;Register</div>

                        <div class="card-body">
                            <form @submit.prevent="onSubmit">
                                <div class="form-group row">
                                    <label for="email" class="col-md-2 col-form-label text-md-right" :class="{ 'text-danger': errors.name }">Name</label>
                                    <div class="col-md-9">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text mdi mdi-account" :class="{ 'text-danger': errors.name }" id="basic-addon1"></span>
                                            </div>
                                            <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" v-model="user.name">
                                        </div>
                                        <span class="text-danger" v-if="errors.name" role="alert">
                                            <strong>{{ errors.name[0] }}</strong>
                                        </span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-2 col-form-label text-md-right" :class="{ 'text-danger': errors.email }">Email</label>
                                    <div class="col-md-9">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text mdi mdi-mail" :class="{ 'text-danger': errors.email }" id="basic-addon1"></span>
                                            </div>
                                            <input type="text" class="form-control" :class="{ 'is-invalid': errors.email }" v-model="user.email">
                                        </div>
                                        <span class="text-danger" v-if="errors.email" role="alert">
                                            <strong>{{ errors.email[0] }}</strong>
                                        </span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-2 col-form-label text-md-right" :class="{ 'text-danger': errors.password }">Password</label>
                                    <div class="col-md-9">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text mdi mdi-lock" :class="{ 'text-danger': errors.password }" id="basic-addon1"></span>
                                            </div>
                                            <input type="password" class="form-control" :class="{ 'is-invalid': errors.password }" v-model="user.password">
                                        </div>
                                        <span class="text-danger" v-if="errors.password" role="alert">
                                            <strong>{{ errors.password[0] }}</strong>
                                        </span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-2 col-form-label text-md-right" :class="{ 'text-danger': errors.password_confirmation }">Confirm Password</label>
                                    <div class="col-md-9">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text mdi mdi-lock" :class="{ 'text-danger': errors.password_confirmation }" id="basic-addon1"></span>
                                            </div>
                                            <input type="password" class="form-control" :class="{ 'is-invalid': errors.password_confirmation }" v-model="user.password_confirmation">
                                        </div>
                                        <span class="text-danger" v-if="errors.password_confirmation" role="alert">
                                            <strong>{{ errors.password_confirmation[0] }}</strong>
                                        </span>
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-9 offset-md-2">
                                        <button @click="overlay = !overlay" type="submit" class="text-white btn btn-primary btn-block">
                                            <span class="mdi mdi-account-plus"></span>
                                            Register
                                        </button>
                                        <a type="button" href="/" class="text-white btn btn-danger btn-block">
                                            <span class="mdi mdi-arrow-left"></span>
                                            Back to Home
                                        </a>
                                        <router-link :to="{ name: 'Login' }" class="btn btn-link">Already have an account?</router-link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <v-overlay :value="overlay">
            <circle8></circle8>
        </v-overlay>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Circle8 from 'vue-loading-spinner/src/components/Circle8'

export default {
    components: {
      Circle8
    },
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errors: [],
            overlay: false
        }
    },
    methods: {
        ...mapActions(['register']),
        onSubmit() {
            this.register(this.user)
            .then(r => {
                this.overlay = true
                this.$swal.fire('Registration Successfully', r.data.message, 'success')
                this.$router.push({ name: 'Login' })
            })
            .catch(e => {
                this.overlay = false
                if (e.response.status === 422) {
                    this.errors = e.response.data.errors
                }
            })
        }
    }
}
</script>