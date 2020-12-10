<template>
  <div>
    <v-card elevation="2">
      <v-card-text>
        <formulario :categ = 'categ' @input="add"></formulario>
      </v-card-text>
    </v-card>
    <tabla :items="items" class="mt-5"></tabla>
  </div>
</template>

<script>
import Formulario from '~/components/Formulario'
export default {
  components: { Formulario },
  data: () => ({
    categ: ['comida', 'viajes', 'ocio'],
    items: []
  }),
  methods: {
    add(v){
      this.items.push(v)
    }
  }
}
</script>

<style scoped></style>
