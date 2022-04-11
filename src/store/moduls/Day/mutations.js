import { SET_CURRENT_DAY } from "../../TimetableConstants";

export default { 
    [SET_CURRENT_DAY](state , payload){
        state.dayId = payload.dayId;
    }
}