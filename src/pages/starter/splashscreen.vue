<template>
    <q-page padding>
        <div class="fixed-center app-title" align="center">
            <h2 class="">Teacher Portal</h2>
            <q-inner-loading :visible="preparing">
                <q-spinner-puff size="50px" color="teal-4" />
                <span class="text-faded q-mt-lg">We are preparing everything. Please wait ...</span>
            </q-inner-loading>
        </div>

        <div class="window-width fixed-bottom">
            <img src="assets/cloud_background.svg"/>
            <div class="q-pb-sm" align="center">
                <span>SystemExperts © 2018</span>
            </div>
        </div>
    </q-page>
</template>

<script>
    export default {
        name: 'SplashScreen',
        data () {
            return {
                preparing: true
            }
        },
        methods: {
        },
        mounted() {
            setTimeout(() => {
                this.$router.push("/introduction")
            }, 3000)
        }
    }
</script>

<style>
    .app-title {
        padding-bottom: 200px;
        width: 300px;
    }
</style>
