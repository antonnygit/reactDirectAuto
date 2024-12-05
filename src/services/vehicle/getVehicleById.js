import AxiosInstance from "../axios";

function GetVehicleByIdService(id) {
    const token = localStorage.getItem('token');
    return AxiosInstance.get(`/vehicle/${id}`, { headers: { Authorization: `Bearer ${token}` } });
}

export default GetVehicleByIdService;