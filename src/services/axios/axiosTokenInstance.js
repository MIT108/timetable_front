import { GET_USER_TOKEN_GETTER } from '../../store/storeConstants'
import Axios from 'axios'
import store from '../../store'




const axiosTokenInstance = Axios.create({
    baseURL: 'http://localhost:8000/api/v1'
})

axiosTokenInstance.defaults.headers.accepts = 'application/json'

axiosTokenInstance.interceptors.request.use((config) =>{
    const token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`]

    axiosTokenInstance.defaults.header = {
        Authorization: "Bearer " + token
    }

    return config
})

export default axiosTokenInstance