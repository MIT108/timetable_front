import Axios from 'axios'
import store from '../../store/index'
import { GET_USER_TOKEN_GETTER } from '../../store/storeConstants';

const axiosInstance = Axios.create({
    baseURL: 'https://mit-timetable-backend.herokuapp.com/api/v1'
})

axiosInstance.defaults.headers.accept = 'application/json'

axiosInstance.defaults.headers.get['Accepts'] = 'application/json';
axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axiosInstance.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';



axiosInstance.interceptors.request.use((config) => {
    const token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`];

        if (token){
            axiosInstance.defaults.headers = {
                Authorization: "Bearer "+ token,
                headers: [
                    { "X-localization": localStorage.getItem("lan") },
                    { "Access-Control-Allow-Origin": '*' },
                    { "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept '},
                    { "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE" },
                    { "Access-Control-Max-Age": 3600 }
                ]
      
            }
        }else{
            console.log("token not exist");
        }
    return config
})

export default axiosInstance