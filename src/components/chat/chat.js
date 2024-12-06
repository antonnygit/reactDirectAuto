import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import GetMessagesService from "../../services/chat/getMessages";
import SendMessageService from "../../services/chat/sendMessage";

const ChatConversation = ({ conversation, setConversation, setConversationOpened }) => {
    const myId = localStorage.getItem('id');
    // get username, imgUrl
    const [loadingMessages, setLoadingMessages] = useState(true);
    const [messages, setMessages] = useState([]);

    const [newMessage, setNewMessage] = useState('');

    const userThatIamConversation = conversation.from.id == myId ? conversation.to : conversation.from;

    const baseUrl = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;

    const imgUrl = userThatIamConversation.photo ? `${baseUrl}/${userThatIamConversation.photo}` : null;
    const username = userThatIamConversation.name;

    useEffect(() => {
        async function getMessages() {
            try {
                const response = await GetMessagesService(conversation.id);
                setMessages(response.data.data);
            } catch (err) {
                alert('Ocorreu um erro ao carregar as mensagens!');
                console.log(err);
            } finally {
                setLoadingMessages(false);
            }
        }

        getMessages();

        const intervalId = setInterval(getMessages, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const sendMessage = () => {
        const toId = userThatIamConversation.id;

        const sendMessage = async () => {
            try {
                const response = await SendMessageService(conversation.id, toId, newMessage);
                setNewMessage('');
            } catch (err) {
                alert('Ocorreu um erro ao enviar a mensagem!');
                console.log(err);
            }
        }

        if (newMessage.trim !== "") {
            console.log("Mensagem enviada: " + newMessage);

            sendMessage();
        }
    }

    const renderMessage = (message) => {
        return (
            <div key={message.id} className={message.from == myId ? 'd-flex justify-content-end' : 'd-flex justify-content-start'}>
                <div className={message.from == myId ? 'my-2 py-2 px-2 message message-my' : 'my-2 py-2 px-2 message message-from'}>
                    <div>
                        {message.message}
                    </div>
                </div>
            </div>
            )
    }

    const closeChat = () => {
        setConversationOpened(false);
        setConversation(null);
        setLoadingMessages(true);
        setNewMessage('');
    }

    return (
        <>
            {!conversation ? (
                <></>
            ) : (
                <Container className="d-flex flex-column" style={{ height: '100%', backgroundColor: "#dbd9d9" }}>
                    {/* Primeira Row - Fica no topo */}
                    <Row className="align-items-center pb-2 bg-white pt-2">
                        <div className="col-auto">
                            <i className="fa-solid fa-arrow-left icon-hover" onClick={closeChat}></i>
                        </div>

                        <div className="col-auto">
                            <img src={imgUrl ? imgUrl : '/user_icon.png'} alt="Imagem 1" className="rounded-circle" width={48} height={48} />
                        </div>

                        <div className="col-auto">
                            <h3 className="text-danger fw-semibold m-0">{username}</h3>
                        </div>
                    </Row>

                    {/* Espaço vazio entre as duas Rows */}
                    <div className="flex-grow-1" style={{ backgroundColor: "#dbd9d9", width: "100% !important" }}>
                        <div className="px-3" style={{ height: "100%", overflowY: "auto", maxHeight: "calc(100vh - 160px)" }}>
                            {loadingMessages ? (
                                <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                    <Spinner animation="border" variant="danger" />
                                </div>
                            ) : (
                                messages.map((message, index) => renderMessage(message, index))
                            )}
                        </div>
                    </div> {/* Esta div preenche o espaço restante */}

                    {/* Segunda Row - Fica no fim */}
                    <Row className="align-items-center py-2" style={{ backgroundColor: "#bdbbbb" }}>
                        <div className="col-auto">
                            <i className="fa-solid fa-plus icon-hover"></i>
                        </div>
                        <div className="col">
                            <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Digite uma mensagem..." className="form-control" />
                        </div>
                        <div className="col-auto">
                            <i className="fa-regular fa-paper-plane icon-hover" onClick={sendMessage}></i>
                        </div>
                    </Row>
                </Container>
            )}
        </>
    )
}

export default ChatConversation;