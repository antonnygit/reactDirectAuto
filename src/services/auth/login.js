import AxiosInstance from "../axios";

const LoginService = (email, password) => {
    const data = {
        "email": email,
        "password": password
    }

    return AxiosInstance.post(
        '/login',
        data
    );
}

export default LoginService;