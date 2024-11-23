import { Button, Form, FormGroup } from 'react-bootstrap';
import './../../styles/modalAuth.css';


const ModalLogin = () => {
    const handleSuapBtnClick = () => {
        let responseType = 'token';
        let grantType = 'implicit';
        const clientId = "xDxhIYTbk9cLpdP7hR3Kvc8lx1iKzWpmrNYZovwC";
        window.location.href = `https://suap.ifrn.edu.br/o/authorize?response_type=${responseType}&grant_type=${grantType}&client_id=${clientId}`;
    }


    return (
        <div className='modal-auth p-5 mx-auto mt-5 rounded-4' style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row justify-content-center">
                            {/* Lado esquerdo */}
                            <div className="col-lg-5">
                                <h1 className='fw-bold text-danger'>Não possui uma conta?</h1>
                                <Button className='fw-bolder' href='/register' variant='outline-danger'>Cadastre-se</Button>
                            </div>
                            
                            {/* Lado direito */}
                            <div className="col-lg-6 border-start">
                                <h1 className='fw-bold text-danger'>Login</h1>
                                <p>Entre com seu email e senha</p>
                                <Form>
                                    <FormGroup className="mb-3" controlId="loginForm.EmailInput">
                                        <Form.Label className='text-danger fw-bolder'>Email</Form.Label>
                                        <Form.Control type='email' placeholder='example@example.com' className='rounded-0' />
                                    </FormGroup>
                                    <FormGroup className="mb-3" controlId="loginForm.PasswordInput">
                                        <Form.Label className='text-danger fw-bolder'>Senha</Form.Label>
                                        <Form.Control type='password' placeholder='**********' className='rounded-0' />
                                    </FormGroup>
                                    <div className='d-flex'>
                                        <Button variant='danger' className='fw-bolder text-body-light' type='submit'>Entrar</Button>
                                        <Button variant='light' className='ms-1' onClick={handleSuapBtnClick}>Entrar com suap</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLogin;