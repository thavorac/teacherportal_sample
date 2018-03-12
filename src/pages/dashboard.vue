<template>
    <q-page padding>
        <q-list highlight no-border>
            <q-list-header>Recent News <span class="float-right">See All (4)</span></q-list-header>
            <q-item multiline>
                <q-item-main
                        label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
                        label-lines="1"
                        sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
                        sublabel-lines="2"
                />
            </q-item>
            <q-item-separator />
            <q-item multiline>
                <q-item-main
                        label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
                        label-lines="1"
                        sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
                />
            </q-item>
        </q-list>
        <q-list highlight no-border>
            <q-list-header>Recent Event <span class="float-right">See All (10)</span></q-list-header>
            <EventItem></EventItem>
            <EventItem></EventItem>
            <EventItem></EventItem>
        </q-list>
    </q-page>
</template>

<script>
    import EventItem from "../components/EventItem.vue"
    export default {
        name: 'Dashboard',
        mounted() {
        },
        components: {
            EventItem
        }
    }
</script>

<style>

</style>
