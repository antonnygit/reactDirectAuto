import AxiosInstance from "../axios";

const GetMessagesService = (conversation_id) => {
    const token = localStorage.getItem('token');
    return AxiosInstance.post(`/chat`, {conversation_id} ,{ headers: { Authorization: `Bearer ${token}` } });
}

export default GetMessagesService;