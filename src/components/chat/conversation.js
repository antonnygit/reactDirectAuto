import { Container, Row } from "react-bootstrap";

const Conversation = ({imgUrl, username, lastMessage, lastMessageTime}) => { 
    return (
        <Container className="bg-white py-2">
            <Row className="align-items-center">
                <div className="col-auto">
                    <img src={imgUrl ? imgUrl : 'user_icon.png'} alt="Imagem 1" className="img-fluid rounded" width={48} />
                </div>

                <div className="col">
                    <h3 className="text-danger fw-semibold m-0">{username}</h3>
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