<template>
  <v-chip-group :show-arrows="false">
    <v-row :justify="alignment">
      <template v-for="(tag, i) in tags">
        <TagsListItem :icon="tag?.icon" :tagName="tag.text" :key="i"/>

        <v-icon v-if="i + 1 < tags.length" :key="'icon-' + i">
          mdi-circle-small
        </v-icon>
      </template>
    </v-row>
  </v-chip-group>
</template>

<script>
import TagsListItem from '@/components/TagsListItem'

export default {
  name: 'TagsList',

  components: {
    TagsListItem
  },

  props: {
    tags: {
      type: Array,
      required: false
    },
    alignment: {
      type: String,
      default: 'start'
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-slide-group__next,
::v-deep .v-slide-group__prev {
    display: none;
  }
</style>
