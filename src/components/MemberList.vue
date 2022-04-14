<template>
  <div>
    <input
      type="text"
      :value="organization"
      @change="(event) => onChangeInput(event.target.value)"
    />
    <OrgUpdateButton :org="organization" @updateOrg="updateOrg" />
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
  </div>
</template>

<script lang="ts">
import { getMembers } from '../services/members'
import { defineComponent } from 'vue'
import { Member } from '../types/types'
import OrgUpdateButton from './OrgUpdateButton.vue'
import { mapActions, mapGetters } from 'vuex'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    list: Member[]
  }
}

export default defineComponent({
  components: {
    OrgUpdateButton,
  },
  computed: {
    ...mapGetters('OrganizationModule', {
      organization: 'organization',
    }),
  },
  data() {
    return {
      list: [] as Member[],
    }
  },
  created() {
    getMembers(this.organization).then((response) => (this.list = response))
  },
  methods: {
    updateOrg(): void {
      getMembers(this.organization).then((response) => (this.list = response))
    },
    ...mapActions('OrganizationModule', ['updateOrganization']),
    onChangeInput(string: string) {
      this.updateOrganization(string)
    },
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
input {
  margin: 0.2rem 0 0.2rem 0;
}
</style>
