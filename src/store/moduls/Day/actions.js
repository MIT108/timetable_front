import axiosInstance from "../../../services/axios/axiosInstance";
import {
    CHANGE_DAY_STATUS,
    CREATE_NEW_DAY, DELETE_DAY, DISPLAY_ALL_DAYS
} from "../../TimetableConstants";


export default {
    async [CREATE_NEW_DAY](__,payload) {
        let postData = {
            name: payload.name,
            description: payload.description
        }

        let response = ''

        try {
            response = await axiosInstance.post(
                "/timetable/days/add",
                postData
            )
        }catch(e){
            throw e.response.data;
        }
        
        return response;

    },

    async [DISPLAY_ALL_DAYS](__, payload){
        let urlData = payload.url

        let response = ''

        try {
            response = await axiosInstance.get(
                "/timetable/days"+urlData,
            )
        } catch (error) {
            throw error.response.data
        }
        return response
    },

    async [CHANGE_DAY_STATUS](__, payload){
        let response = ''

        let id = payload.id

        try{
            response = await axiosInstance.get(
                "/timetable/days/changeStatus/"+id
            )
        }catch(e){
            throw e.response.data
        }
        return response;
    },

    async [DELETE_DAY](__, payload){
        let response = ''

        let id = payload.id

        try{
            response = await axiosInstance.get(
                "/timetable/days/delete/"+id
            )
        }catch(e){
            throw e.response.data
        }
        return response
    }
}