import axios from "axios";
import {apiToken, baseURL} from "../configs";

let axiosInstance = axios.create({baseURL});

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${apiToken}`;
    return config;
});

export {axiosInstance};
