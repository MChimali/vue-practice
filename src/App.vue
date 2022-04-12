<template>
  <v-app>
    <v-main>
      <HeaderElement />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderElement from './components/HeaderElement.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderElement,
  },
})
</script>
