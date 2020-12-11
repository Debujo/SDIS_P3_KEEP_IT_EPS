<template>
  <v-card
    class="mx-auto text-center"
    color="grey"
    dark
    max-width="600"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          :items="items"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thick">
        Gastos totales
      </div>
    </v-card-text>

    <v-divider></v-divider>
  </v-card>
</template>

<script>
import Tabla from '~/components/Tabla'
import { mapActions, mapState } from 'vuex'
export default {
  components: { Tabla },
  data: () => ({
  }),
  methods: {
      ...mapActions('safe', ['add'])
    },
  computed:{
      ...mapState('safe', ['items']),
      value(){
          const result = []
          let saldo = 0
          this.ordenados.forEach(x => {
              saldo = saldo - x.cantidad
              result.push(saldo)
          })
          return result
      },
      ordenados(){
          const result = [...this.items]
          result.sort((a,b) => a.fecha.localeCompare(b.fecha))
          return result
      }
  } 
  }
</script>

<style scoped></style>
