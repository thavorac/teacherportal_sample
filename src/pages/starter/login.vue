<template>
    <q-page padding>
        <div class="window-width fixed-bottom">
            <img src="~assets/cloud_background.svg"/>
            <div class="q-pb-sm" align="center">
                <span>SystemExperts © 2018</span>
            </div>
        </div>
        <div align="center">
            <h3>Teacher Portal</h3>
        </div>
        <div class="q-pa-xl">
            <q-field
                    :error="$v.user.email.$error || error.code=='auth/user-not-found'"
                    :error-label="get_error_message(error.message,$v.user.email)"
                    label="Email">
                <q-input @blur="$v.user.email.$touch" type="email" v-model="user.email"/>
            </q-field>
            <br/>
            <q-field
                    :error="$v.user.password.$error || error.code=='auth/wrong-password'"
                    :error-label="get_error_message(error.message,$v.user.password)"
                    label="Password">
                <q-input @blur="$v.user.password.$touch" type="password" max-length="16" v-model="user.password"/>
            </q-field>
            <br/>
            <q-checkbox
                    class="full-width"
                    left-label
                    label="Remember me"
                    v-model="remember_me"
                    color="amber"/>
            <div align="center" class="q-mt-xl">
                <q-btn
                        :key="`btn_size_rd_md`"
                        rounded
                        color="primary"
                        @click="submit_credential"
                        :size="'md'"
                        :label="`LOGIN`"
                />
            </div>
        </div>
        <q-inner-loading :visible="loading">
            <q-spinner-hourglass size="50px" color="primary"></q-spinner-hourglass>
        </q-inner-loading>
    </q-page>
</template>

<script>
    import { required, email, minLength } from 'vuelidate/lib/validators'
    import { VuelidateMixins } from '../../mixins/vuelidate_mixin'
    export default {
        name: 'LogIn',
        mixins: [VuelidateMixins],
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                },
                error: {
                    code:null,
                    message:null
                },
                loading:false,
                remember_me: false,
            }
        },
        validations: {
            user: {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(6)
                }
            }
        },
        methods: {
            submit_credential() {
                this.loading = true
                let self = this
                this.$auth.signInWithEmailAndPassword(this.user.email,this.user.password).then( (user) => {
                    this.loading = false
                    self.$store.commit('user/setUser', user)
                    self.$router.push("/dashboard")
                }).catch( (e) => {
                    this.loading = false
                    this.error = e
                })
            },
            go_back() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style>
</style>
