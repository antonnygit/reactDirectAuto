import { Container, Row } from "react-bootstrap";

const ChatConversation = ({ username, imgUrl, }) => {

    const sendMessage = () => {

    }

    return (
        <Container className="d-flex flex-column" style={{ height: '100%', backgroundColor: "#dbd9d9" }}>
            {/* Primeira Row - Fica no topo */}
            <Row className="align-items-center pb-2 bg-white pt-2">
                <div className="col-auto">
                    <i className="fa-solid fa-arrow-left icon-hover"></i>
                </div>

                <div className="col-auto">
                    <img src={imgUrl ? imgUrl : 'user_icon.png'} alt="Imagem 1" className="img-fluid rounded" width={48} />
                </div>

                <div className="col-auto">
                    <h3 className="text-danger fw-semibold m-0">{username}</h3>
                </div>
            </Row>

            {/* Espaço vazio entre as duas Rows */}
            <div className="flex-grow-1" style={{ backgroundColor: "#dbd9d9", width: "100% !important" }}>

            </div> {/* Esta div preenche o espaço restante */}

            {/* Segunda Row - Fica no fim */}
            <Row className="align-items-center py-2" style={{ backgroundColor: "#bdbbbb" }}>
                <div className="col-auto">
                    <i className="fa-solid fa-plus icon-hover"></i>
                </div>
                <div className="col">
                    <input type="text" placeholder="Digite uma mensagem..." className="form-control" />
                </div>
                <div className="col-auto">
                    <i className="fa-regular fa-paper-plane icon-hover" onClick={sendMessage}></i>
                </div>
            </Row>
        </Container>
        
    )
}

export default ChatConversation;