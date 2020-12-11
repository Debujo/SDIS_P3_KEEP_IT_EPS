export const state = () => ({
    items: [],
    categ: ['comida', 'viajes', 'ocio'],
    initialize: false 
})

export const mutations = {
    add(state, item) {
        state.items.push(item)
    },
    remove(state, item) {
        state.items.splice(state.item.indexOf(item), 1)
    },
    initialize(state){
        state.initialize = true
    }
}

export const actions = {
    async add({commit}, item){
        commit('add', item)
    },
    async remove ({commit}, item){
        commit('remove', item)
    },
    async initialize({state, commit}, item){
        if(!state.initialize){
            commit('add', item)
        }
    }
}