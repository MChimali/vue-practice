<template>
  <div>
    {{ member.id }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
})
</script>
