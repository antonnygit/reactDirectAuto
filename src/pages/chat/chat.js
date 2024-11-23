import { Col, Container, Row } from "react-bootstrap";
import NavbarTop from "../../components/navbar/navbarTop";

import '../../styles/chat.css';

import Conversation from "../../components/chat/conversation";
import ChatConversation from "../../components/chat/chat";

const Chat = ({ userToChat }) => {
    return (
        <>
            <NavbarTop />
            <main>
            <Container>
                
                <div className="chat-container my-3">

                    <Row style={{height: '100%'}}>
                        {/* Lado esquerdo */}
                        <Col className=" d-none d-md-block col-md-4 position-relative" style={{height: '100%'}}>

                            <div className="bg-white p-3">
                                <img src="user_icon.png" alt="Imagem 1" className="img-fluid rounded" width={48} />
                                <div className="input-group mt-3">
                                    <span className="input-group-text bg-transparent">
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control border-none"
                                    />
                                </div>
                            </div>

                            <div className="bg-white mt-3 position-relative" style={{ maxHeight: 'calc(100vh - 223px)', overflowY: 'auto' }}>
                                <Conversation
                                    imgUrl="user_icon.png"
                                    username="zahir"
                                    lastMessage="Olá, tudo bem?"
                                    lastMessageTime="12:00"
                                />
                                <Conversation
                                    imgUrl="user_icon.png"
                                    username="zahir"
                                    lastMessage="Olá, tudo bem?"
                                    lastMessageTime="12:00"
                                />
                                <Conversation
                                    imgUrl="user_icon.png"
                                    username="zahir"
                                    lastMessage="Olá, tudo bem?"
                                    lastMessageTime="12:00"
                                />
                                <Conversation
                                    imgUrl="user_icon.png"
                                    username="zahir"
                                    lastMessage="Olá, tudo bem?"
                                    lastMessageTime="12:00"
                                />
                                <Conversation
                                    imgUrl="user_icon.png"
                                    username="zahir"
                                    lastMessage="Olá, tudo bem?"
                                    lastMessageTime="12:00"
                                />
                                <Conversation
                                    imgUrl="user_icon.png"
                                    username="zahir"
                                    lastMessage="Olá, tudo bem?"
                                    lastMessageTime="12:00"
                                />
                                <Conversation
                                    imgUrl="user_icon.png"
                                    username="zahir"
                                    lastMessage="Olá, tudo bem?"
                                    lastMessageTime="12:00"
                                />
                                <Conversation
                                    imgUrl="user_icon.png"
                                    username="zahir"
                                    lastMessage="Olá, tudo bem?"
                                    lastMessageTime="12:00"
                                />
                                <Conversation
                                    imgUrl="user_icon.png"
                                    username="zahir"
                                    lastMessage="Olá, tudo bem?"
                                    lastMessageTime="12:00"
                                />
                                <Conversation
                                    imgUrl="user_icon.png"
                                    username="zahir"
                                    lastMessage="Olá, tudo bem?"
                                    lastMessageTime="12:00"
                                />
                            </div>
                        </Col>

                        {/* Lado direito */}
                        <Col className="" style={{height: '100%', margin: '0 !important'}}>
                            <ChatConversation username="teste" />
                        </Col>
                    </Row>

                </div>
            </Container>
            </main>
        </>
    )
}

export default Chat;