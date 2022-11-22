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
          :src="require('./assets/vuetify-logo-dark.png')"
          transition="scale-transition"
          width="40"
          contain
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          :src="require('./assets/vuetify-name-dark.png')"
          min-width="100"
          width="100"
          contain
        />
      </div>
    </v-app-bar>

    <v-main>
      <HomePage/>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage';

export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    //
  }),
};
</script>
