import AxiosInstance from "../axios";

const GetMyConversationsService = () => {
    // const from = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    return AxiosInstance.get('/getConversations', { headers: { Authorization: `Bearer ${token}` } });
}

export default GetMyConversationsService;