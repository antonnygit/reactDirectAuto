import AxiosInstance from "../axios";

const SendMessageService = (conversation_id, to, message) => {
    const token = localStorage.getItem('token');
    return AxiosInstance.post(`/chat/send`, {conversation_id, to, message} ,{ headers: { Authorization: `Bearer ${token}` } });
}

export default SendMessageService;