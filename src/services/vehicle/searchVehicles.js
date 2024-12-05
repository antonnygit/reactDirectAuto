import AxiosInstance from "../axios";

const SearchVehiclesService = (search, token) => {
    return AxiosInstance.get(`/vehicle/search?search=${search}`, { headers: { Authorization: `Bearer ${token}` } });
}

export default SearchVehiclesService;