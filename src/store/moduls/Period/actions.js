import axiosInstance from "../../../services/axios/axiosInstance";
import {
    CREATE_NEW_PERIOD
} from "../../TimetableConstants";

export default {
    async [CREATE_NEW_PERIOD](__, payload) {
        let postData = {
            name: payload.name,
            description: payload.description
        };

        let response = ''

        try {
            response = await axiosInstance.post(
                "/timetable/periods/adds",
                postData
            )
        } catch (error) {
            console.log(error);
            throw error.response.data
        }
        console.log(response);

        return response;
    }
}