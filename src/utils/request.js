import qs from 'qs'
import axios from 'axios'
import store from '@/vuex/store'
import { getToken } from '@/utils/auth'
// axios基础配置
const service = axios.create({
    timeout: 8000,
    baseURL: process.env.BASE_URL
})
// request拦截器，在请求之前判断处理
service.interceptors.request.use( config => {
    if (store.getters.token) {
        config.headers['Token'] = getToken();
        if (config.method == 'post') {
            config.data = qs.stringify(config.data);
        }
        return config;
    }
})
// response拦截器，只输出正确有效的数据
service.interceptors.response.use( response  => {
    // 可以在这根据后台返回的数据状态进行判断，如果不是所需要的正确有效的数据，则在这直接拦截，并警告用户
    // 例如正确有效的数据的codeNumber是200, 500是token过期
    if (response.data.codeNumber !== 200) {
        alert(respone.data.message);
        if (response.data.codeNumber == 500) {
            confirm('请重新登录')
        }
    }
    return response.data
}, error => {
    console.log(error)
    return Promise.reject(error);
})

export default service
