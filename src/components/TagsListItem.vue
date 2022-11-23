<template>
  <v-chip
    class="ma-3"
    color="transparent"
    disabled
    text-color="gray"
  >
    <v-avatar v-if="icon" left size="16px !important">
      <v-icon>{{ icon }}</v-icon>
    </v-avatar>
    {{ tagName }}
  </v-chip>
</template>

<script>
export default {
  name: 'TagsListItem',

  props: {
    icon: {
      type: String,
      required: false
    },
    tagName: {
      type: String,
      required: true
    }
  }
}
</script>
