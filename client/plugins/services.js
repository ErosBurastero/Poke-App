import pokemonInfo from "~/services/pokemonInfo.js";

export default ({ $axios }, inject) => {
    const allMethods = {
        ...pokemonInfo($axios),
    }
    const methods = Object.keys(allMethods)
    methods.forEach((method) => {
        inject(method, allMethods[method])
    })
}