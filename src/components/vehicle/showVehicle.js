import { Button, Col, Row } from "react-bootstrap";

import '../../styles/showVehicle.css';

const ShowVhc = ({ name, model, value, date, km, color, brand, description }) => {
    return (
        <div className="mx-auto container-vehicle-show rounded-3 py-4 mb-5">
            <div className="row justify-content-center">
                {/* Lado esquerdo */}
                <div className="col-lg-5">
                    <h1 className="fw-bold text-secondary">{name}</h1>
                    <h4 className="fw-bold text-body-tertiary text-truncate">{model}</h4>

                    <Row>
                        <Col xs={4} md={3} className="mb-4">
                            <div>
                                <p className="fw-bold text-body-tertiary remove-p-margin-bottom">Ano</p>
                                <p className="fw-bold">{date}</p>
                            </div>
                        </Col>
                        <Col xs={4} md={3} className="mb-4">
                            <div>
                                <p className="fw-bold text-body-tertiary remove-p-margin-bottom">Km</p>
                                <p className="fw-bold">{km}</p>
                            </div>
                        </Col>
                        <Col xs={4} md={3} className="mb-4">
                            <div>
                                <p className="fw-bold text-body-tertiary remove-p-margin-bottom">Cor</p>
                                <p className="fw-bold">{color}</p>
                            </div>
                        </Col>
                        <Col xs={4} md={3} className="mb-4">
                            <div>
                                <p className="fw-bold text-body-tertiary remove-p-margin-bottom">Marca</p>
                                <p className="fw-bold">{brand}</p>
                            </div>
                        </Col>
                    </Row>

                    <div>
                        <p className="fw-bold text-body-tertiary remove-p-margin-bottom">Descrição</p>
                        <p className="fw-bold">{description}</p>
                    </div>
                </div>

                {/* Lado direito */}
                <div className="col-lg-5">
                    <h1 className="fw-bold text-danger">R$ {value}</h1>
                    <p className="fw-bold text-secondary">Vendedor</p>
                    <Button variant='danger' className='fw-bolder form-control text-body-light' type='submit'>Chat com vendedor</Button>
                </div>

            </div>
        </div>
    )
}

export default ShowVhc;