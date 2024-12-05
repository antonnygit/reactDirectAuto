import AxiosInstance from "../axios";

const CreateVehicleService = (brand, status, name, model, year_model, year_release, color, km, description, price) => {
    const token = localStorage.getItem('token');

    const dataToSend = {
        brand_id: brand,
        status_id: status,
        name: name,
        model: model,
        release_model: year_model.toString(),
        release_year: year_release.toString(),
        color: color,
        km: km,
        description: description,
        price: price,
    }

    return AxiosInstance.post('/vehicle', dataToSend, { headers: { Authorization: `Bearer ${token}` } });
}

export default CreateVehicleService;