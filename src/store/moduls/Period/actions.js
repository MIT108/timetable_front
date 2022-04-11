import axiosInstance from "../../../services/axios/axiosInstance";
import {
    CREATE_NEW_PERIOD, DELETE_PERIOD, UPDATE_PERIOD
} from "../../TimetableConstants";

export default {
    async [CREATE_NEW_PERIOD](__, payload) {
        let postData = {
            name: payload.name,
            description: payload.description,
            day_id: payload.day_id
        };

        let response = ''

        try {
            response = await axiosInstance.post(
                "/timetable/periods/adds",
                postData
            )
        } catch (error) {
            throw error.response.data
        }

        return response;
    },
    async [UPDATE_PERIOD](__, payload) {
        let postData = {
            name: payload.name,
            description: payload.description,
            period_id: payload.id
        }

        let response = ''

        try {
            response = await axiosInstance.post(
                "/timetable/periods/update",
                postData
            )
        } catch (error) {
            throw error.response.data
        }
        return response

    },
    async [DELETE_PERIOD](__, payload) {
        let id = payload.id
        let response = ''

        try {
            response = await axiosInstance.get(
                "/timetable/periods/delete/"+id
            )
        } catch (error) {
            throw error.response.data
        }

        return response
    }
}