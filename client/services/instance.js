import axios from 'axios'

// once you've created production mode you can set the variable 
// axios.defaults.baseURL = process.env.MODE === 'development' ? process.env.DEVELOPMENT_BASE_URL : process.env.PRODUCTION_BASE_URL

axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    if (error.response.status === 401) {
        localStorage.removeItem('userInfoToken')
        alert('Su sesión ha expirado')
            // const redirectUrl = process.env.MODE === 'development' ? process.env.LOCAL_BASE_URL + '/login' : process.env.WEB_URL + '/login'
        window.location.href = redirectUrl
    }
    return Promise.reject(error);
});

export default axios