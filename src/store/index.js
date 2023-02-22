import { createStore } from 'vuex'

export default createStore({
    state: () => ({
        winners: [],
    }),
    getters: {},
    actions: {},
    mutations: {
        addWinner: (state, payload) => {
            state.winners.push(payload)
        },
    },
    modules: {},
})
