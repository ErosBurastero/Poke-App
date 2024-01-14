import axios from "./instance";

export default () => {
    return {
        getPokemons: async(limit, offset) => {
            try {
                const res = await axios.get(`api/v2/pokemon`, {
                    params: {
                        limit,
                        offset
                    }
                })
                return res
            } catch (err) {
                throw err.response
            }
        },
        getPokemonByName: async(name) => {
            try {
                const res = await axios.get(`api/v2/pokemon/${name}`)
                return res
            } catch (err) {
                throw err.response
            }
        },

    }
}