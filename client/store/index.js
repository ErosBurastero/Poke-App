export const state = () => ({
    showLoading: false,
})

export const mutations = {
    setLoading(state, payload) {
        state.showLoading = payload
    },
}

export const actions = {
    handleLoading({ commit }, payload) {
        commit('setLoading', payload)
    },

}

export const getters = {
    getShowLoading: state => state.showLoading,
}