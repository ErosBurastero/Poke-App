export const state = () => ({
    showLoading: false,
    alertConfig: {
        showAlert: false,
        type: '',
        text: ''
    },
})

export const mutations = {
    setLoading(state, payload) {
        state.showLoading = payload
    },
    setAlert(state, payload) {
        state.alertConfig.showAlert = payload.showAlert
        state.alertConfig.type = payload.type
        state.alertConfig.text = payload.text
    },
}

export const actions = {
    handleLoading({ commit }, payload) {
        commit('setLoading', payload)
    },
    handleAlert({ commit }, payload) {
        commit('setAlert', payload)
    },
}

export const getters = {
    getShowLoading: state => state.showLoading,
    getAlert: state => state.alertConfig,
}