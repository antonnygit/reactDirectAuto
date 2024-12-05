import { Button, Container, Form } from "react-bootstrap";
import NavbarTop from "../../components/navbar/navbarTop";
import { useState } from "react";
import NavbarBottom from "../../components/navbar/navbarBottom";
import IsAuth from "../../middlewares/isAuth";

const SellVehicle = () => {
    const [step, setStep] = useState(1);

    const handleContinueBtn = () => {
        setStep(2);
    }

    const handleSubmitForm = () => {
        window.location.href = '/vehicles';
    }

    return (
        <>
            <NavbarTop />
            <main>
            <Container>
                
                    <div className="text-center mt-5">
                        <h1 className="fw-bold" style={{ display: 'inline', borderBottom: '2px solid red', paddingBottom: '5px' }}>Preencha os dados do seu veículo!</h1>
                    </div>

                    <Form>
                        {step === 1 && (
                            <>
                                <Form.Group className="mb-3" controlId="formMarca">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Select placeholder="Selecione a marca" required={true} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formModelo">
                                    <Form.Label>Modelo</Form.Label>
                                    <Form.Control type="text" placeholder="Informe o modelo do carro" required={true} />
                                </Form.Group>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group controlId="formAnoModelo">
                                            <Form.Label>Ano do modelo</Form.Label>
                                            <Form.Control type="text" placeholder="Informe o ano do modelo" />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formAnoFabricacao">
                                            <Form.Label>Ano de fabricação</Form.Label>
                                            <Form.Control type="text" placeholder="Informe o ano de fabricação do carro" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <Form.Group className="mb-3" controlId="formCor">
                                    <Form.Label>Cor</Form.Label>
                                    <Form.Select placeholder="Selecione a cor do carro" required={true} />
                                </Form.Group>
                                <div className="d-flex">
                                    <Button variant='danger' className='fw-bolder text-body-light ms-auto' onClick={handleContinueBtn}>Continuar</Button>
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <Form.Group className="mb-3" controlId="formQuilometragem">
                                    <Form.Label>Quilometragem</Form.Label>
                                    <Form.Control type="number" placeholder="Informe a quilometragem do carro" required={true} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formDescricao">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control type="text" placeholder="Descreva um pouco o seu veículo. Não obrigatório." required={true} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPreco">
                                    <Form.Label>Preço</Form.Label>
                                    <Form.Control type="number" placeholder="Informe o preço do veículo" required={true} />
                                </Form.Group>
                                <div className="d-flex">
                                    <Button variant='danger' className='fw-bolder text-body-light ms-auto' onClick={handleSubmitForm}>Anunciar</Button>
                                </div>
                            </>
                        )}
                    </Form>
                
            </Container>
            </main>
            <NavbarBottom isFixed={true} />
        </>
    )
}

export default IsAuth(SellVehicle);