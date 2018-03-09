<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="arrow back"
          @click="$router.go(-1)"
        />
        <q-toolbar-title>
          Secondary Menu
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
   name: 'Secondary',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
