import { Button, Form, FormGroup, Spinner } from 'react-bootstrap';
import './../../styles/modalAuth.css';
import { useState } from 'react';

import * as Yup from 'yup';
import LoginService from '../../services/auth/login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const handleSuapBtnClick = () => {
    let responseType = 'token';
    let grantType = 'implicit';
    const clientId = process.env.REACT_APP_SUAP_CLIENT_ID;
    window.location.href = `https://suap.ifrn.edu.br/o/authorize?response_type=${responseType}&grant_type=${grantType}&client_id=${clientId}`;
}

const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    password: Yup.string().required('Senha obrigatória'),
}).required();

const ModalLogin = () => {
    const [loadingLogin, setLoadingLogin] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        setLoadingLogin(true);

        try {
            const response = await LoginService(data.email, data.password);
            const token = response.data.token;
            localStorage.clear();
            localStorage.setItem('token', token);
            window.location.href = '/vehicles';
        } catch (err) {
            if (err.response) {
                if (err.response.status === 401)
                    alert('Email ou senha inválidos');
            }
            else {
                console.log(err);
                alert('Erro ao fazer login');
            }
        } finally {
            setLoadingLogin(false);
        }
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
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <FormGroup className="mb-3" controlId="loginForm.EmailInput">
                                        <Form.Label className='text-danger fw-bolder'>Email</Form.Label>
                                        <Form.Control {...register('email')} className={`rounded-0 ${errors.email ? 'is-invalid' : ''}`} type='email' placeholder='example@example.com' />
                                        {errors.email && (
                                            <div className="invalid-feedback d-block">
                                                {errors.email.message}
                                            </div>
                                        )}
                                    </FormGroup>
                                    <FormGroup className="mb-3" controlId="loginForm.PasswordInput">
                                        <Form.Label className='text-danger fw-bolder'>Senha</Form.Label>
                                        <Form.Control {...register('password')} className={`rounded-0 ${errors.password ? 'is-invalid' : ''}`} type='password' placeholder='**********' />
                                        {errors.password && (
                                            <div className="invalid-feedback d-block">
                                                {errors.password.message}
                                            </div>
                                        )}
                                    </FormGroup>
                                    <div className='d-flex'>
                                        {loadingLogin ? (
                                            <Button variant='danger' className='fw-bolder text-body-light' type='submit'><Spinner animation="border" size="sm" variant='light' /></Button>
                                        ) : (
                                            <Button variant='danger' className='fw-bolder text-body-light' type='submit'>Entrar</Button>
                                        )}
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