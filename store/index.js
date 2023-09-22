// IMPORT THE SERVICES/UTILS YOU WANNA CALL

// import { getAllCategories } from '../services/product'

export const state = () => ({

    //STATE SAMPLES
    showLoading: false,
    // userToken: '',
})

export const mutations = {

    // MUTATIONS EXAMPLES
    // setLoading(state, payload) {
    //     state.showLoading = payload
    // },
    // setUserStatus(state, payload) {
    //     if (payload === '') {
    //         state.userToken = ''
    //         state.userDb = {}
    //     } else {
    //         state.userToken = payload.token
    //         state.userDb = payload.user
    //     }
    // },
    // setLocations(state, { prov, loc }) {
    //     state.provinces = prov
    //     state.locations = loc
    // },
    // setCategories(state, payload) {
    //     state.categoriesList = payload
    //     state.parentCategories = payload.filter((category) => category.parent_category_id === null);
    //     state.childCategories = payload.filter((category) => category.parent_category_id !== null);
    // },
}

export const actions = {


    // HANDLE LOADING SAMPLE
    // handleLoading({ commit }, payload) {
    //     commit('setLoading', payload)
    // },

    // SAVE TOKEN SAMPLE
    // saveUser({ commit }, payload) {
    //     localStorage.setItem('userInfoToken', JSON.stringify(payload))
    //     commit('setUserStatus', payload)
    // },


    // HTTP REQUEST EXAMPLES
    // async getLocations({ commit }) {
    //     commit('setLoading', true)
    //     try {
    //         const provinces = await this.$getProvinces()
    //         const localities = await this.$getLocations()
    //         commit('setLocations', { prov: provinces.data.provinces, loc: localities.data.localities })
    //     } catch (error) {
    //         console.log(error)
    //     } finally {
    //         commit('setLoading', false)
    //     }
    // },


    // async handleCategories({ commit }) {
    //     commit('setLoading', true)
    //     try {
    //         const res = await getAllCategories()
    //         commit('setCategories', res.data.categories)

    //     } catch (err) {
    //         console.warn(`Store handleCategories: ${err}`)
    //     } finally {
    //         commit('setLoading', false)
    //     }
    // },

}

export const getters = {
    // isOpenOpinionsDrawer: state => state.showOpinionsDrawer,
}