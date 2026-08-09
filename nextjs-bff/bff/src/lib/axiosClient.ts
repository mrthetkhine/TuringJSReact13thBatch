import axios from 'axios';
import {BASE_API} from "@/lib/config";

// 1. Create a reusable client instance
const apiClient = axios.create({
    baseURL: BASE_API,
    //timeout: 10000,
});
export default apiClient;