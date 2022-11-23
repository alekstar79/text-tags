<template>
  <v-container class="mt-16">
    <v-row class="text-center">
      <v-col class="elevation-1 mb-6" cols="12">
        <h2 class="headline font-weight-bold mb-4">
          Город сыра и мира
        </h2>

        <TagsList :tags="tags"/>
      </v-col>

      <v-col class="elevation-1 mb-6" cols="12">
        <h2 class="headline font-weight-bold mb-4">
          Экскурсия в национальный парк "Куршская коса"
        </h2>

        <TagsList :tags="tags" alignment="space-between"/>
      </v-col>

      <v-col class="elevation-1 mb-6" cols="12" lg="6" sm="12">
        <h2 class="headline font-weight-bold mb-4">
          О кирхах, рыцарях и замках
        </h2>

        <TagsList :tags="tags"/>
      </v-col>

      <v-col class="elevation-1 mb-6" cols="12" lg="6" sm="12">
        <h2 class="headline font-weight-bold mb-4">
          Экскурсия в Янтарный
        </h2>

        <TagsList :tags="tags" alignment="space-between"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TagsList from '@/components/TagsList'

export default {
  name: 'HomePage',

  components: {
    TagsList
  },

  data: () => ({
    tags: [
      {
        text: '5',
        icon: 'mdi-star-outline',
      },
      {
        text: 'Историческая',
      },
      {
        text: 'На автобусе',
        icon: 'mdi-bus',
      },
      {
        text: '28 марта',
      },
      {
        text: '9 часов',
        icon: 'mdi-clock-time-three-outline'
      },
      {
        text: 'до 49',
        icon: 'mdi-account'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
@media (min-width: 1264px) {
  .container {
    max-width: 90%;
  }
}
@media (max-width: 960px) {
  .container {
    max-width: 94%;
  }
}
@media (max-width: 460px) {
  .container {
    max-width: 90%;
  }
}
@media (max-width: 320px) {
  .container {
    max-width: 86%;
  }
}
</style>
