import AxiosInstance from "../axios";

const GetVehiclesService = () => {
    const token = localStorage.getItem('token');
    return AxiosInstance.get('/vehicle', { headers: { Authorization: `Bearer ${token}` } });
}

export default GetVehiclesService;