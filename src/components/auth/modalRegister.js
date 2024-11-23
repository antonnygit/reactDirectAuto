import { Button, Form, FormGroup } from 'react-bootstrap';
import './../../styles/modalAuth.css';


const ModalRegister = () => {
    return (
        <div className='modal-auth p-5 mx-auto mt-5 rounded-4' style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row justify-content-center">
                            {/* Lado esquerdo */}
                            <div className="col-lg-6">
                                <h1 className='fw-bold text-danger'>Já possui uma conta?</h1>
                                <Button className='fw-bolder' href='/' variant='outline-danger'>Fazer login</Button>
                            </div>

                            {/* Lado direito */}
                            <div className="col-lg-6 border-start" >
                                <h1 className='fw-bold text-danger'>Cadastre-se</h1>
                                <p>Crie uma conta com seu email</p>
                                <Form>
                                    <FormGroup className="mb-3" controlId="loginForm.NameInput">
                                        <Form.Label className='text-danger fw-bolder'>Nome</Form.Label>
                                        <Form.Control type='text' placeholder='João' />
                                    </FormGroup>
                                    <FormGroup className="mb-3" controlId="loginForm.EmailInput">
                                        <Form.Label className='text-danger fw-bolder'>Email</Form.Label>
                                        <Form.Control type='email' placeholder='example@example.com' />
                                    </FormGroup>
                                    <FormGroup className="mb-3" controlId="loginForm.PasswordInput">
                                        <Form.Label className='text-danger fw-bolder'>Senha</Form.Label>
                                        <Form.Control type='password' placeholder='**********' />
                                    </FormGroup>
                                </Form>
                                <Button variant='danger' className='fw-bolder text-body-light' type='submit'>Criar conta</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRegister;