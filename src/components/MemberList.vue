<template>
  <ul class="member-list">
    <li v-for="member in list" :key="member.login">
      <router-link :to="`/detail/${member.id}`">
        <div class="member-container">
          <img class="member-image member-element" :src="member.avatar_url" />
          <span>{{ member.id }}</span>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { getMembers } from '../services/members'
import { defineComponent } from 'vue'
import { Member } from '../types/types'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    list: Member[]
  }
}

export default defineComponent({
  computed: {
    console: () => console,
  },
  data() {
    return {
      list: [] as Member[],
    }
  },
  created() {
    getMembers().then((response) => (this.list = response))
  },
})
</script>

<style lang="scss" scoped>
.member-list {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0px;
}
.member-container {
  border: 1px rgb(168, 168, 255) solid;
  background-color: rgb(193, 193, 255);
  margin: 0rem 0 0.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.member-element {
  display: block;
}
.member-image {
  width: 120px;
}
</style>
