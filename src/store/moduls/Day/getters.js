import { GET_CURRENT_DAY } from "../../TimetableConstants"

export default {
    [GET_CURRENT_DAY] : (state) => {return state.dayId}
}