import AxiosInstance from "../axios";

const AuthFromSuapService = (name, email, photo) => {
    const data = {
        "name": name,
        "email": email,
        "photo": photo
    }
    return AxiosInstance.post('/suap', data);
}

export default AuthFromSuapService;