<template>
    <q-page padding>
        <div class="window-width fixed-bottom">
            <img src="~assets/cloud_background.svg"/>
            <div class="q-pb-sm" align="center">
                <span>SystemExperts © 2018</span>
            </div>
        </div>
        <div align="center">
            <img src="~assets/communication.svg"/>
            <h4>Connect with your students and colleagues</h4>
            <p>
                It is very easy to stay connect with your students so you can get notified every time something come up.
                View your agenda, student's information, Scoring and even more.
            </p>
            <q-btn @click="login" color="secondary" label="Log In"/>
        </div>

    </q-page>
</template>

<script>
    export default {
        name: 'Introduction',
        methods: {
            login () {
                this.$router.push("/login")
            }
        }
    }
</script>

<style>
</style>
