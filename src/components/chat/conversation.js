import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

const Conversation = ({onClickConversation, conversation, myId}) => { 
    const baseUrl = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;

    const data = conversation.from.id == myId ? conversation.to : conversation.from;
    const imgUrl = data.photo ? `${baseUrl}/${data.photo}` : null;
    const username = data.name;
    const lastMessage = conversation.last_message ? conversation.last_message : 'Conversa iniciada'
    const lastMessageTime = conversation.lastMessageTime ? conversation.lastMessageTime : '';

    const handleClick = () => {
        onClickConversation(conversation);
    }

    return (
        <Container className="bg-white py-2">
            <Row className="align-items-center">
                <div className="col-auto">
                    <img src={imgUrl ? imgUrl : '/user_icon.png'} alt="Imagem 1" className="rounded-circle" width={48} height={48} />
                </div>

                <div className="col">
                    <h3 onClick={handleClick} style={{cursor: 'pointer'}} className="text-danger fw-semibold m-0">{username}</h3>
                    <p className="text-muted m-0 text-truncate">{lastMessage}</p>
                </div>

                <div className="col-auto text-end">
                    <p className="m-0">{lastMessageTime}</p>
                </div>
            </Row>
        </Container>
    )
}

export default Conversation;