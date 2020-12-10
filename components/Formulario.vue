<template>
  <v-form v-model="valid">
    <v-row>
      <v-text-field
        v-model.number="val"
        label="value"
        :rules="[required]"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-select
        v-model="select"
        :items="categ"
        :rules="[required]"
        label="Item"
        required
      ></v-select>
    </v-row>
    <v-row>
      <v-menu
        v-model="abierto"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker without buttons"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="abierto = false"></v-date-picker>
      </v-menu>
    </v-row>
    <v-row>
      <v-btn :disabled="!valid" color="success" @click="add"> Submit </v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'Formulario',
  props: {categ: { type: Array, default: () => []}},
  data: () => ({
    abierto: false,
    valid: true,
    val: 0.0,
    select: '',
    date: '',
    checkbox: false,
  }),
  methods: {
    required(v) {
      return !!v || 'required value'
    },
    add() {
      this.$emit('input', { cantidad: this.val, categoria: this.select , fecha: this.date})
    },
  },
}
</script>

<style scoped></style>
