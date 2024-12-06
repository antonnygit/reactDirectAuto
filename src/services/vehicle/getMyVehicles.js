import AxiosInstance from "../axios";

const GetMyVehiclesService = () => {
    const token = localStorage.getItem('token');
    return AxiosInstance.get('/vehicle/my', { headers: { Authorization: `Bearer ${token}` } });
}

export default GetMyVehiclesService;