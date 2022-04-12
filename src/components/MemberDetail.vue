/* eslint-disable */
<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="member.avatar_url" height="200px" cover></v-img>
    <v-card-title>Member Name</v-card-title>
    <v-card-subtitle>
      {{ member.name }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn color="rgb(0, 38, 255)" variant="text">Explore</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          <strong>Company:</strong>
          {{ member.company }}
        </v-card-text>
        <v-card-text>
          <strong>Blog:</strong>
          {{ member.blog }}
        </v-card-text>
        <v-card-text>
          <strong>ID:</strong>
          {{ member.id }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    show: false,
  }),
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
})
</script>
