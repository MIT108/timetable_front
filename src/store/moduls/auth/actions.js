import {
    AUTH_ACTION,
    LOGOUT_ACTION,
    AUTO_LOGIN_ACTION,
    GET_USER_TOKEN_GETTER,
    IS_USER_VERIFIED_ACTION,
    LOGIN_ACTION,
    SET_USER_TOKEN_DATA_MUTATION,
    VERIFYING_USER_ACTION,
    TEST
} from '../../storeConstants'
import axiosInstance from '../../../services/axios/axiosInstance'
import store from '../../index';
import Axios from 'axios';
// import axiosTokenInstance from '../../../services/axios/axiosTokenInstance'

export default {
    async [TEST](){
        let response = ''

        try {
            response = await axiosInstance.get(
                "/test"
            )
        } catch (error) {
            throw error.response.data
        }

        return response
    },
    async [LOGIN_ACTION](context, payload) {
        return context.dispatch(AUTH_ACTION, {
            ...payload,
            url: "/login"
        })

    },
    async [IS_USER_VERIFIED_ACTION]() {
        // let response = ''

        try {
            await axiosInstance.post(
                "/email/verification-notification"
            )
        } catch (e) {
            throw e.response.data
        }


    },
    async [VERIFYING_USER_ACTION](context, payload) {
        // let response = ''
        let url = payload.url
        let response = ''

        try {
            response = await Axios.get(
                url, {
                    headers: {
                        Authorization: 'Bearer ' + store.getters[`auth/${GET_USER_TOKEN_GETTER}`],
                    }
                }
            )
        } catch (e) {
            throw e.response.data
        }

        if (response.status === 200 || response.status === 201) {
            // const userData = JSON.parse(localStorage.getItem('timetableUserData'));
            // userData.verifiedAt = response.data.user.email_verified_at
            // localStorage.setItem('timetableUserData', JSON.stringify(userData))
            // context.commit(SET_USER_VERIFIED_AT_MUTATION, {
            //   verifiedAt: response.data.user.email_verified_at})
            let token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`]
            let tokenData = {
                userEmail: response.data.user[0].email,
                userName: response.data.user[0].name,
                userId: response.data.user[0].id,
                verifiedAt: response.data.user[0].email_verified_at,
                token: token
            }
            localStorage.setItem('timetableUserData', JSON.stringify(tokenData))
            context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData)
        }
    },
    async [AUTH_ACTION](context, payload) {

        let postData = {
            email: payload.email,
            password: payload.password
        }

        let response = ''

        try {
            response = await axiosInstance.post(
                payload.url,
                postData
            )
        } catch (err) {
            throw err.response.data
        }

        if (response.status === 200 || response.status === 201) {
            let tokenData = {
                userEmail: response.data.user.email,
                userName: response.data.user.name,
                userId: response.data.user.id,
                verifiedAt: response.data.user.email_verified_at,
                token: response.data.token
            }
            localStorage.setItem('timetableUserData', JSON.stringify(tokenData))
            context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData)
            
        }
        if (response.data.user.email_verified_at != null) {
            return "verified"
        }else{
            return "unverified"

        }
    },
    [AUTO_LOGIN_ACTION](context) {
        let userData = localStorage.getItem('timetableUserData')
        if (userData) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, JSON.parse(userData))
        }
    },
    async [LOGOUT_ACTION](context) {
        let response = ''

        try {
            response = await axiosInstance.post(
                "/logout",
                {
                    headers: {
                        Authorization: 'Bearer ' + store.getters[`auth/${GET_USER_TOKEN_GETTER}`],
                    }
                }
            )
            if (response.status === 200) {
                    
                let tokenData = {
                    userEmail: '',
                    userName: '',
                    userId: '',
                    verifiedAt: '',
                    token: ''
                }
                localStorage.removeItem("timetableUserData");
                context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData)
            }else{
                throw response.data
            }
        }catch(e){
            throw e.response
        }
        return "logout"
    }
}