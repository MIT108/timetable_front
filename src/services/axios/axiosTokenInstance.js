import { GET_USER_TOKEN_GETTER } from '../../store/storeConstants'
import Axios from 'axios'
import store from '../../store'




const axiosTokenInstance = Axios.create({
    baseURL: 'https://mit-timetable-backend.herokuapp.com/api/v1/'
})

axiosTokenInstance.defaults.headers.accept = 'application/json'

axiosTokenInstance.interceptors.request.use((config) =>{
    const token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`]
    console.log(token);

    axiosTokenInstance.defaults.headers = {
        Authorization: "Bearer " + token
    }

    return config
})

export default axiosTokenInstance