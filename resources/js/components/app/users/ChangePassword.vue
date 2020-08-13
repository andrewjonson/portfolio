<template>
    <div class="card">
        <div class="card-header bg-primary text-white">Change Password</div>

        <div class="card-body">
            <form @submit.prevent="onSubmit">
                <div class="form-group row">
                    <label for="old" class="col-md-3 col-form-label text-md-right" :class="{ 'text-danger': errors.old }">Old Password</label>
                    <div class="col-md-8">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text mdi mdi-lock" :class="{ 'text-danger': errors.old }" id="basic-addon1"></span>
                            </div>
                            <input type="password" class="form-control" :class="{ 'is-invalid': errors.old }" v-model="user.old">
                        </div>
                        <span class="text-danger" v-if="errors.old" role="alert">
                            <strong>{{ errors.old[0] }}</strong>
                        </span>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="password" class="col-md-3 col-form-label text-md-right" :class="{ 'text-danger': errors.password }">Password</label>
                    <div class="col-md-8">
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
                    <label for="password" class="col-md-3 col-form-label text-md-right" :class="{ 'text-danger': errors.password_confirmation }">Confirm New Password</label>
                    <div class="col-md-8">
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
                    <div class="col-md-8 offset-md-3">
                        <button type="submit" @click="overlay = !overlay" class="text-white btn btn-primary btn-block">
                            <span class="mdi mdi-lock"></span>
                            Change Password
                        </button>
                        <i class="text-danger">*You will be automatically logout upon changing password.</i>
                    </div>
                </div>
            </form>
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
                old: '',
                password: '',
                password_confirmation: ''
            },
            overlay: false,
            errors: []
        }
    },
    methods: {
        ...mapActions(['changePassword']),
        onSubmit() {
            this.changePassword(this.user)
            .then(r => {
                this.overlay = true
                localStorage.removeItem('appToken')
                window.location.replace('/login')
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