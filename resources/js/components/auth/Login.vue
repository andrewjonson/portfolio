<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <main class="py-4">
                    <div class="card">
                        <div class="card-header bg-primary text-white"><span class="mdi mdi-account-key"></span>&nbsp;Login</div>

                        <div class="card-body">
                            <form @submit.prevent="onSubmit">
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

                                <div class="form-group row mb-0">
                                    <div class="col-md-9 offset-md-2">
                                        <button type="submit" @click="overlay = !overlay" class="text-white btn btn-primary btn-block">
                                            <span class="mdi mdi-account-key"></span>
                                            Login
                                        </button>
                                        <a type="button" href="/" class="text-white btn btn-danger btn-block">
                                            <span class="mdi mdi-arrow-left"></span>
                                            Back to Home
                                        </a>
                                        <router-link :to="{ name: 'Register' }" class="btn btn-link">
                                            Don't have an account?
                                        </router-link>
                                        <router-link class="btn btn-link float-right" :to="{ name: 'ForgotPassword' }">
                                            Forgot Password?
                                        </router-link>
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
                email: "",
                password: ""
            },
            errors: [],
            overlay: false,
        }
    },
    methods: {
        ...mapActions(['login']),
        onSubmit() {
            this.login(this.user)
            .then(r => {
                this.overlay = true
                if (r.data.message) {
                    this.overlay = false
                    this.$swal.fire('Error', r.data.message, 'error')
                    this.user.password = ''
                } else {
                    localStorage.setItem('appToken', r.data.appToken)
                    window.location.replace('/dashboard')
                }
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