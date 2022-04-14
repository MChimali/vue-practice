<template>
  <button class="button" type="button" @click.prevent="changeOrg()">
    Update Organization
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    org: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeOrg(): void {
      this.$emit('update-org', this.org)
      console.log(this.org)
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  border: 1px solid black;
}
</style>
