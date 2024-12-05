import AxiosInstance from "../axios";

const SendImageService = (id, image) => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('image', image);

    return AxiosInstance.post(`/vehicle/image/${id}`, formData, {headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
    }},);
}

export default SendImageService;