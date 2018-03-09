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
                                    @click.native="notify">
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
                                    @click.native="notify">
                                <q-item-main label="Logout"/>
                            </q-item>
                        </q-list>
                    </q-popover>
                </q-btn>
            </q-toolbar>
        </q-layout-header>

        <!-- (Optional) The Footer -->
        <q-layout-footer>
            <!--<q-tabs>-->
                <!--<q-route-tab-->
                        <!--slot="title"-->
                        <!--icon="map"-->
                        <!--to="/your/route"-->
                        <!--replace-->
                        <!--label="One Tab"-->
                <!--/>-->
                <!--<q-route-tab-->
                        <!--slot="title"-->
                        <!--icon="assignment"-->
                        <!--to="/some/other/route"-->
                        <!--replace-->
                        <!--label="Other Tab"-->
                <!--/>-->
            <!--</q-tabs>-->
        </q-layout-footer>

        <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
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
                <q-item to="/showcase/layout-demo/play-with-layout">
                    <q-item-side icon="account circle" />
                    <q-item-main label="Play with Layout" sublabel="Learn more about it" />
                    <q-item-side right icon="thumb_up" />
                </q-item>
                <q-item to="/showcase/layout-demo/drawer-panels">
                    <q-item-side icon="view_array" />
                    <q-item-main label="Drawer Panels" sublabel="Layout left/right sides" />
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
        }
    }
</script>

<style>
</style>
