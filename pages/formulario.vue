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
import { mapActions, mapState } from 'vuex'
export default {
  components: { Formulario },
  data: () => ({}),
  methods: {
    ...mapActions('safe', ['add'])
  },
  computed:{
      ...mapState('safe', ['items', 'categ']),
      value(){
          const result = []
          let cat = 0
          this.categ.forEach(x => {
              cat = x.categoria
              result.push(cat)
          })
          return result
      },
  }
} 
</script>
<style scoped></style>
