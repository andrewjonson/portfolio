<template>
    <div>
        <Navbar/>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-11">
                    <main class="py-4">
                        <router-view/>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Navbar: () => import('./includes/Navbar.vue')
    }
}
</script>