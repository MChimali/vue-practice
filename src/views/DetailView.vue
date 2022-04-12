/* eslint-disable */
<template>
  <MemberDetail :member="member" />
</template>

<script lang="ts">
import { getMember } from '../services'
import { RouteLocation } from 'vue-router'
import { defineComponent } from 'vue'
import MemberDetail from '../components/MemberDetail.vue'
import { Member } from '../types/types'

export default defineComponent({
  components: {
    MemberDetail,
  },
  data() {
    return {
      member: {} as Member,
    }
  },
  computed: {
    id(): string {
      return String((this.$route as RouteLocation).params.id)
    },
  },
  created() {
    getMember(this.id).then((response) => (this.member = response))
  },
})
</script>
