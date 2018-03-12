<template>
    <q-layout> <!-- Be sure to play with the Layout demo on docs -->

        <!-- (Optional) The Header -->
        <q-layout-header>
            <q-toolbar>
                <q-btn
                        flat
                        round
                        dense
                        icon="menu"
                        @click="leftDrawer = !leftDrawer"
                />
                <q-toolbar-title>
                    Teacher Portal
                    <span slot="subtitle">University of Puthisastra</span>
                </q-toolbar-title>
                <q-btn flat round dense size="17pt" icon="account circle">
                    <q-popover>
                        <q-list link separator class="scroll" style="min-width: 100px">
                            <q-item
                                    :key="`a-1`"
                                    v-close-overlay
                                    @click.native="view_profile">
                                <q-item-main label="Profile" sublabel="Application Profile" />
                            </q-item>
                            <q-item
                                    :key="`a-2`"
                                    v-close-overlay
                                    @click.native="notify">
                                <q-item-main label="Setting" sublabel="Modify general setting" />
                            </q-item>
                            <q-item
                                    :key="`a-3`"
                                    v-close-overlay
                                    @click.native="logout">
                                <q-item-main label="Logout"/>
                            </q-item>
                        </q-list>
                    </q-popover>
                </q-btn>
            </q-toolbar>
        </q-layout-header>
        <q-layout-footer>
            <q-tabs>
                <q-route-tab
                        slot="title"
                        icon="map"
                        to="/your/route"
                        replace
                />
                <q-route-tab
                        slot="title"
                        icon="assignment"
                        to="/some/other/route"
                        replace
                />
            </q-tabs>
        </q-layout-footer>
        <q-layout-drawer
                side="left"
                v-model="leftDrawer"
                :overlay="leftOverlay"
                :behavior="leftBehavior"
                :breakpoint="leftBreakpoint"
                :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null"
        >
            <q-scroll-area class="fit q-pa-sm">
                <q-list-header>Thavorac</q-list-header>
                <q-item to="/activity/course/tree">
                    <q-item-side icon="library books" />
                    <q-item-main label="My Courses" label-lines="1" sublabel="Courses you are teaching" sublabel-lines="1"/>
                </q-item>
                <q-item to="/activity/schedule/list">
                    <q-item-side icon="today" />
                    <q-item-main label="Schedule" label-lines="1" sublabel="Today schedule" sublabel-lines="1"/>
                </q-item>
                <q-item to="/activity/student/list">
                    <q-item-side icon="face" />
                    <q-item-main label="Students" label-lines="1" sublabel="Students attend my class " sublabel-lines="1" />
                </q-item>
            </q-scroll-area>
        </q-layout-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>

    </q-layout>
</template>

<script>
    export default {
         name: 'Main',
        data() {
            return {
                leftDrawer: true,
                leftOverlay:true,
                leftBehavior:"mobile",
                leftBreakpoint:20
            }
        },
        methods: {
             view_profile() {
                 this.$router.push("/activity/profile")
             },
             logout() {
                 this.$auth.signOut().then( () => {
                     this.$store.commit("user/setUser",null)
                     this.$router.replace("/login")
                 })
             }
        }
    }
</script>

<style>
</style>
