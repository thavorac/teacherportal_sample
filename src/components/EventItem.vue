<template>
    <q-item class="event-item" multiline>
        <q-item-side color="light-blue-10" class="justify-center">18 <p>Today</p></q-item-side>
        <q-item-main
                label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
                label-lines="1"
                sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
                sublabel-lines="2"
        />
    </q-item>
</template>
<script>
    export default {
        name: 'EventItem',
        mounted() {
        }
    }
</script>
<style>
    .event-item .q-item-side {
        width: 80px;
        text-align: center;
        padding: 15px 10px 10px 10px;
        font-size: 13pt;
        font-weight: bold;
        border-right: 1px solid #E5ECED;
        background-color: #f0f3fb;
    }
    .event-item {
        padding: 0px;
        border: 1px solid #E5ECED;
        box-shadow: 0 11px 14px -10px #E5ECED;
        border-radius: 5px;
        margin: 0px 10px 10px 16px;
    }
    .event-item .q-item-main{
        padding: 10px;
    }
</style>