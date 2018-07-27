import service from '../../utils/request'
import { setToken } from '../../utils/auth'

const state = {
    token: ''
}

const actions = {
    getLogin({commit}, userInfo) {
        return new Promise((resolve, reject) => {
            service({
                methods: 'post',
                data: userInfo
            }).then(res => {
                commit('TOKEN', res.data.token);
                setToken(res.data.token);
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
    }
}

const getters = {
    token: state => state.token
}

const mutations = {
    TOKEN: (state, token) =>{
        state.token = token
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
