<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <router-link :to="{ name: 'Dashboard' }" class="navbar-brand">
                Blog
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                            <span>
                                <v-avatar>
                                    <v-img v-if="currentUser.image" :src="`/user_images/${currentUser.image}`"></v-img>
                                    <v-img v-else :src="`/images/user_image.jpg`"></v-img>
                                </v-avatar>
                            </span>
                            {{ currentUser.name }}
                            <span class="caret"></span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <router-link :to="{ name: 'Profile' }" class="dropdown-item">Profile</router-link>
                            <router-link :to="{ name: 'ChangePassword' }" class="dropdown-item">Change Password</router-link>
                            <a href="#" @click.prevent="logout" class="dropdown-item">
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    methods: mapActions(['logout', 'getUser']),
    computed: mapGetters(['currentUser']),
    created() {
        this.getUser()
    }
}
</script>