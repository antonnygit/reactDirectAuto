import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
    timeout: 30000
});

export default AxiosInstance;