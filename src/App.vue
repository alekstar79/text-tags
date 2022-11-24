<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          :src="require('./assets/logo.svg')"
          transition="scale-transition"
          width="40"
          contain
        />

        <h2 class="headline font-weight-bold hidden-sm-and-down">
          Текстовые теги
        </h2>
      </div>
    </v-app-bar>

    <v-main>
      <HomePage/>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from '@/pages/HomePage'

export default {
  name: 'App',

  components: {
    HomePage
  }
}
</script>
