<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
export default {
    name: 'Tabla',
    props: { items: { type: Array, default: () => []}},
    data: () => ({
        headers: [
            { text: 'Cantidad', value: 'cantidad' },
            { text: 'Categoria', value: 'categoria' },
            { text: 'Fecha', value: 'fecha' },
        ],
    })
}
</script>

<style scooped>
</style>