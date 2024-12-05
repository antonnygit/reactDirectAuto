import AxiosInstance from "../axios";

const GetBrandsService = () => {
    const token = localStorage.getItem('token');
    return AxiosInstance.get('/brand', { headers: { Authorization: `Bearer ${token}` } });
}

export default GetBrandsService;