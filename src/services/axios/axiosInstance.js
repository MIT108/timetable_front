import Axios from 'axios'
import store from '../../store/index'
import {
    GET_USER_TOKEN_GETTER
} from '../../store/storeConstants';

const axiosInstance = Axios.create({
    baseURL: 'http://localhost:8000/api/v1'
})

axiosInstance.interceptors.request.use((config) => {
    const token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`];

    if (token) {
        axiosInstance.defaults.headers = {
            "Authorization": "Bearer " + token,
            "accept": "application/json",
            "Content-Type": "application/json"
        }
    } else {
        axiosInstance.defaults.headers = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    return config
})

export default axiosInstance