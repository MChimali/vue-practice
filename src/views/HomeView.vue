<template>
  <MemberList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Components
import MemberList from '../components/MemberList.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    MemberList,
  },
})
</script>
