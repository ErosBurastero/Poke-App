import axios from 'axios'

axios.defaults.baseURL = process.env.POKEAPI_BASE_URL

axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    if (error.response.status === 401) {

        // const redirectUrl = process.env.MODE === 'development' ? process.env.LOCAL_BASE_URL + '/login' : process.env.WEB_URL + '/login'
    }
    return Promise.reject(error);
});

export default axios