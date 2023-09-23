// import questions from "~/services/productInformation/questions.js";

export default ({ $axios }, inject) => {
    const allMethods = {
        // ...questions($axios),
    }
    const methods = Object.keys(allMethods)
    methods.forEach((method) => {
        inject(method, allMethods[method])
    })
}