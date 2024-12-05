import AxiosInstance from "../axios";

const RegisterService = (name, email, password) => {
    const data = {
        "name": name,
        "email": email,
        "password": password
    }
    return AxiosInstance.post('/register', data);
}

export default RegisterService;