import { GET_USER_TOKEN_GETTER, IS_USER_AUTHENTICATED_GETTER, IS_USER_VERIFIED_GETTER } from "../../storeConstants"

export default {
    [GET_USER_TOKEN_GETTER] : (state) => {return state.token},
    [IS_USER_AUTHENTICATED_GETTER] : (state) => {return !!state.token},
    [IS_USER_VERIFIED_GETTER] : (state) => {return state.verifiedAt}
}