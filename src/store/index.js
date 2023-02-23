import { createStore } from 'vuex'

export default createStore({
    state: () => ({
        winners: [],
    }),
    getters: {
        getList(state) {
            return state.winners
        },
    },
    actions: {
        updateList(context, payload) {
            context.commit('addWinner', payload)
        },
    },
    mutations: {
        addWinner: (state, payload) => {
            state.winners.push(payload)
        },
    },
    modules: {},
})
