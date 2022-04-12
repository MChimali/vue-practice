/* eslint-disable */
<template>
  <div>
    <HeaderElement />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderElement from './components/HeaderElement.vue'

export default defineComponent({
  components: {
    HeaderElement,
  },
})
</script>
