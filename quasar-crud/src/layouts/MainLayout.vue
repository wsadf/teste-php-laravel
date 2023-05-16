<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-pa-sm">
      <q-toolbar-title>
          Soluções de Inteligência Artificial (A1)
        </q-toolbar-title>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'

})
</script>
