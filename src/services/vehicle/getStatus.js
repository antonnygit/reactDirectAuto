import AxiosInstance from "../axios";

const GetStatusService = () => {
    const token = localStorage.getItem('token');
    return AxiosInstance.get('/vehicleStatus', { headers: { Authorization: `Bearer ${token}` } });
}

export default GetStatusService;