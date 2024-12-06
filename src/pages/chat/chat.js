import { Col, Container, Row, Spinner } from "react-bootstrap";
import NavbarTop from "../../components/navbar/navbarTop";

import '../../styles/chat.css';

import Conversation from "../../components/chat/conversation";
import ChatConversation from "../../components/chat/chat";
import IsAuth from "../../middlewares/isAuth";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetMyConversationsService from "../../services/chat/getConversations";
import InitConversationService from "../../services/chat/initConversation";

const Chat = ({ userToChat }) => {
    const { userId } = useParams();

    const myId = localStorage.getItem('id');

    const [loadingConversation, setLoadingConversation] = useState(true);
    const [loadingConversations, setLoadingConversations] = useState(true);
    const [conversationIsOpened, setConversationIsOpened] = useState(userId ? true : false);
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [conversations, setConversations] = useState([]);
    const [bkpConversations, setBkpConversations] = useState([]);
    const [inputSearch, setInputSearch] = useState('');

    const baseUrl = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;
    const myUserPhoto = localStorage.getItem('photo');

    useEffect(() => {
        const initConversation = async () => {
            try {
                const response = await InitConversationService(userId);
                setSelectedConversation(response.data.conversation);
            } catch (err) {
                alert("Ocorreu um erro ao iniciar a conversa!");
            } finally {
                setLoadingConversation(false);
            }
        }

        const getMyConversations = async () => {
            try {
                const response = await GetMyConversationsService();
                setConversations(response.data.data);
                setBkpConversations(response.data.data);
            } catch (err) {
                alert("Ocorreu um erro ao carregar as conversas!");
                console.log(err);
            } finally {
                setLoadingConversations(false);
            }
        }

        const openConversation = (object) => {
            debugger;
        }

        if(userId) { initConversation();}
        else setLoadingConversation(false);
        getMyConversations();
    }, []);

    const filterUsers = () => {
        if (inputSearch === '') {
            setConversations(bkpConversations);
        } else {
            const filteredUsers = bkpConversations.filter((conv) => conv.from.id != myId && conv.from.name.toLowerCase().includes(inputSearch.toLowerCase()) || conv.to.id != myId && conv.to.name.toLowerCase().includes(inputSearch.toLowerCase()));
            setConversations(filteredUsers);
        }
    }

    const handleClickConversation = (object) => {
        setSelectedConversation(object);
        setConversationIsOpened(true);
    }

    return (
        <>
            <NavbarTop />
            <main>
                <Container>

                    <div className="chat-container my-3">

                        <Row style={{ height: '100%' }}>
                            {/* Lado esquerdo */}
                            <Col className=" d-none d-md-block col-md-4 position-relative" style={{ height: '100%' }}>

                                <div className="bg-white p-3">
                                    <img src={myUserPhoto ? `${baseUrl}/${myUserPhoto}` : "/user_icon.png"} alt="Imagem 1" className="rounded-circle" width={48} height={48} />

                                    <div className="input-group mt-3">
                                        <span className="input-group-text bg-transparent">
                                            <i className="fas fa-search" onClick={filterUsers} style={{ cursor: 'pointer' }}></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control border-none"
                                            value={inputSearch}
                                            onChange={(e) => setInputSearch(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="bg-white mt-3 position-relative" style={{ maxHeight: 'calc(100vh - 223px)', overflowY: 'auto' }}>
                                    { loadingConversations ? (
                                        <div className="d-flex justify-content-center my-5">
                                            <Spinner animation="border" variant="danger" />
                                        </div>
                                    ) : (
                                        <>
                                            {conversations.map((conversation) => (
                                                <Conversation
                                                    key={conversation.id}
                                                    conversation={conversation}
                                                    myId={myId}
                                                    onClickConversation={handleClickConversation}
                                                />
                                            ))}
                                        </>
                                    )}
                                </div>
                            </Col>

                            {/* Lado direito */}
                            <Col className="" style={{ height: '100%', margin: '0 !important' }}>
                                {loadingConversation ? (
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}><Spinner animation="border" variant="danger" /></div>
                                ) : (
                                    <>
                                        {(conversationIsOpened && selectedConversation) && (
                                            <ChatConversation conversation={selectedConversation} setConversation={setSelectedConversation} setConversationOpened={setConversationIsOpened} username="teste" />
                                        )}
                                    </>
                                )}
                            </Col>
                        </Row>

                    </div>
                </Container>
            </main>
        </>
    )
}

export default IsAuth(Chat);