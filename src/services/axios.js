import axios from "axios";

const host = process.env.REACT_APP_API_HOST;
const port = process.env.REACT_APP_API_PORT;

const AxiosInstance = axios.create({
    baseURL: `${host}:${port}/api/v1`,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default AxiosInstance;