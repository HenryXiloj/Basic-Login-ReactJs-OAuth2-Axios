import axios from "axios";

const restApi = axios.create({
    baseURL: 'http://localhost:9000/services'
})

const authUrl  = 'http://localhost:9000/services/oauth/token';

restApi.interceptors.request.use(function(config){
    console.log("request send");
    let token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})
export {restApi, authUrl}