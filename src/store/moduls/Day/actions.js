import axiosInstance from "../../../services/axios/axiosInstance";
import {
    AUTO_GET_DAY,
    CHANGE_DAY_STATUS,
    CREATE_NEW_DAY, DELETE_DAY, DISPLAY_ALL_DAYS, 
    GET_PERIOD_OF_DAY,
    SET_CURRENT_DAY,
    UPDATE_NEW_DAY
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
    async [UPDATE_NEW_DAY](__, payload){
        let postData = {
            day_id: payload.id,
            name: payload.name,
            description: payload.description
        }

        let response = ''

        try {
            response = await axiosInstance.post(
                "/timetable/days/update",
                postData
            )
        } catch (error) {
            throw error.response.data
        }

        return response

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
    }, 

    async [GET_PERIOD_OF_DAY](__, payload){
        let response = ''

        let dayId = payload.dayId

        try {
            response = await axiosInstance.get(
                "/timetable/periods/list/"+dayId
            )
        } catch (error) {
            throw error.response.data
        }

        return response

    },

    [AUTO_GET_DAY](context) {
        let Day = localStorage.getItem('timetableCurrentDay')
        if (Day) {
            context.commit(SET_CURRENT_DAY, JSON.parse(Day))
        }
    },

}