<template>
    <q-page padding>
        <div align="center">
            <h3>Teacher Portal</h3>
        </div>
        <div class="q-pa-xl">
            <q-field
                    label="Username">
                <q-input inverted v-model="user.name"/>
            </q-field>
            <br/>
            <q-field
                    label="Password">
                <q-input inverted v-model="user.password"/>
            </q-field>
            <br/>
            <q-checkbox
                    left-label
                    label="Remember me"
                    v-model="remember_me"
                    color="amber"/>
            <div align="center" class="q-mt-xl">
                <q-btn
                        :key="`btn_size_rd_md`"
                        rounded
                        color="primary"
                        :size="'md'"
                        :label="`LOGIN`"
                />
            </div>
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
        name: 'LogIn',
        data() {
            return {
                user: {
                    name: '',
                    password: ''
                },
                mailHasError: false,
                model: null,
                remember_me: false,
                text: ""
            }
        }
    }
</script>

<style>
</style>
