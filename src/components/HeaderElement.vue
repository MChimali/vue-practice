<template>
  <nav class="nav">
    <div class="navElement">Logo</div>
    <div class="navElement">Carrito</div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.nav {
  min-height: 80px;
  background-color: rgb(0, 38, 255);
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
}
.navElement {
  margin: auto 0.5rem 0.5rem 0.5rem;
}
</style>
