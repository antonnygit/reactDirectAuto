import axios from "axios";

const GetUserDataSuapService = (token) => {
    return axios.get(
        'https://suap.ifrn.edu.br/api/eu',
        { headers: { Authorization: `Bearer ${token}` } });
}

export default GetUserDataSuapService;