import mutations from './mutations';
import actions from './actions';
import getters from './getters';
export default {
    namespaced: true,
    state(){
        return{
            token: '', 
            userEmail: '', 
            userId: '',
            userName: '',
            verifiedAt: ''
        }
    },
    mutations,
    actions,
    getters
}