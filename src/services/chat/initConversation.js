import AxiosInstance from "../axios";

const InitConversationService = (to) => {
    const token = localStorage.getItem('token');
    return AxiosInstance.post('/chat/init', { to }, { headers: { Authorization: `Bearer ${token}` } });
}

export default InitConversationService;