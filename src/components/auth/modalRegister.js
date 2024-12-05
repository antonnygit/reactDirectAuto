import { Button, Form, FormGroup, Spinner } from 'react-bootstrap';
import './../../styles/modalAuth.css';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import RegisterService from '../../services/auth/register';

const validationSchema = Yup.object({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    password: Yup.string().required('Senha obrigatória'),
}).required();

const ModalRegister = () => {
    const [loadingRegister, setLoadingRegister] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        const didRegister = async () => {
            try {
                setLoadingRegister(true);
                const response = await RegisterService(data.name, data.email, data.password);
                window.location.href = '/login';
            } catch (err) {
                alert('Erro ao cadastrar');
                console.log(err);
            } finally{
                setLoadingRegister(false);
            }
        }

        didRegister();
    }

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
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <FormGroup className="mb-3" controlId="loginForm.NameInput">
                                        <Form.Label className='text-danger fw-bolder'>Nome</Form.Label>
                                        <Form.Control {...register('name')} className={`rounded-0 ${errors.name ? 'is-invalid' : ''}`} type='text' placeholder='João' />
                                        {errors.name && (
                                            <div className="invalid-feedback d-block">
                                                {errors.name.message}
                                            </div>
                                        )}
                                    </FormGroup>
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
                                    {loadingRegister ? (
                                        <Button variant='danger' className='fw-bolder text-body-light' type='submit'><Spinner animation="border" size="sm" variant='light' /></Button>
                                    ) : (
                                        <Button variant='danger' className='fw-bolder text-body-light' type='submit'>Criar conta</Button>
                                    )}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRegister;