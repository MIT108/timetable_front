import Axios from 'axios'
import store from '../../store/index'
import {
    GET_USER_TOKEN_GETTER
} from '../../store/storeConstants';

const axiosInstance = Axios.create({
    baseURL: 'http://localhost:8000/api/v1'
})

// axiosInstance.defaults.headers.accept = 'application/json'


// axiosInstance.interceptors.request.use(function (request) {
//     request.headers.common['Accept'] = 'application/json'
//     request.headers.common['Content-Type'] = 'application/json'
//     request.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080' // REQUIRED!
//     return request
// })
axiosInstance.interceptors.request.use((config) => {
    const token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`];

    if (token) {
        axiosInstance.defaults.headers = {
            "Authorization": "Bearer " + token,
            "accept": "application/json",
            "Content-Type": "application/json"
        }
    } else {
        console.log("token not exist");
    }
    return config
})

export default axiosInstance