<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <v-img :src = "require ('~/assets/newlogo.png')"   max-height="500" max-width="500"/>
      </div>
      <v-card>
        <v-card-title class="h1">
          Bienvenido a KEEP IT EPS 
        </v-card-title>
        <v-card-title class="subtitle-1">
          ¡Cuida tus gastos!
        </v-card-title>
        <v-card-text>
          <p>De una manera fácil y sencilla vas a poder introducir la cantidad de tus gastos y de que tratan para organizar mejor tu dinero</p>
          <br /><br /><br />
          <p>"Cuida de los pequeños gastos; un pequeño agujero hunde un barco"</p>
          <div class="text-xs-right">
            <em><small>&mdash; Benjamin Franklin</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/formulario"
          >
            GET STARTED
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
  }
}
</script>
