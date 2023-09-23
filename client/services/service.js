import axios from "./instance";


// get header config
// const getHeader = () => {
//     const token = JSON.parse(localStorage.getItem('userInfoToken'));
//     return {
//         headers: {
//             Authorization: `Bearer ${token.token}`
//         }
//     }
// }

export default () => {
    return {
        // http request example
        // newAsk: async(data) => {
        //     try {
        //         const res = await axios.post(`/api/publications/new/ask`, data, {
        //             ...getHeader()
        //         })
        //         return res
        //     } catch (err) {
        //         throw err.response
        //     }
        // },
    }
}