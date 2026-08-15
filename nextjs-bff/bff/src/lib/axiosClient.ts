import axios from 'axios';
import {cookies} from "next/headers";
import {BASE_API} from "@/lib/config";

// 1. Create a reusable client instance
const apiClient = axios.create({
    baseURL: BASE_API,
    //timeout: 10000,
});
apiClient.interceptors.request.use(async (config) => {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');
    if (token){
        console.log('axios add token', token);
        config.headers.Authorization = `Bearer ${token.value}`;
    }
    return config;
}, error => Promise.reject(error));
export default apiClient;