import { Button, Container, Form, Spinner } from "react-bootstrap";
import NavbarTop from "../../components/navbar/navbarTop";
import { useEffect, useState } from "react";
import NavbarBottom from "../../components/navbar/navbarBottom";
import IsAuth from "../../middlewares/isAuth";
import GetBrandsService from "../../services/brand/getBrands";

import * as Yup from 'yup';
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SendImageService from "../../services/vehicle/sendImage";
import GetStatusService from "../../services/vehicle/getStatus";
import CreateVehicleService from "../../services/vehicle/create";

const currentYear = new Date().getFullYear();

const validationSchema = Yup.object({
    brand: Yup.number("Marca inválida").required('Marca é obrigatório').integer("Marca deve ser um número inteiro"),
    status: Yup.number("Status inválida").required('Status é obrigatório').integer("Status deve ser um número inteiro"),
    name: Yup.string().required('Nome obrigatório').max(45, "O nome deve ter no máximo 45 caracteres"),
    model: Yup.string().required('Modelo obrigatório'),
    year_model: Yup.number("Ano do Modelo inválido").required('Modelo obrigatório').integer("O ano do Modelo deve ser um número inteiro").min(1886, "O ano do Modelo deve ser maior ou igual a 1886").max(currentYear, "O ano deve ser menor ou igual ao ano atual"),
    year_release: Yup.number("Ano de fabricação inválido").required('Ano de fabricação obrigatório').integer("O ano de fabricação deve ser um número inteiro").min(1886, "O ano de fabricação deve ser maior ou igual a 1886").max(currentYear, "Ano inválido"),
    color: Yup.string().required('Cor obrigatória'),
    km: Yup.number("Quilometragem inválida").required('Quilometragem obrigatória').integer("A quilometragem deve ser um número inteiro").min(0, "A quilometragem deve ser maior ou igual a zero"),
    description: Yup.string().required('Descrição obrigatória'),
    price: Yup.number("Preço inválido").required('Preço obrigatório').min(0, "O preço deve ser maior ou igual a 0"),
    image: Yup.mixed()
        .required("Arquivo é obrigatório")
        .test("fileType", "Somente arquivos .jpg, .jpeg e .png são permitidos", (value) => {
            if (!value) return false;
            const validTypes = ["image/jpeg", "image/png", "image/jpg"];
            return validTypes.includes(value[0]?.type);
        }),
}).required();

const SellVehicle = () => {
    const [step, setStep] = useState(1);
    const [brands, setBrands] = useState([]);
    const [status, setStatus] = useState([]);
    const [loadingBrands, setLoadingBrands] = useState(true);
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [loadingSend, setLoadingSend] = useState(false);

    const colors = ["vermelho", "azul", "branco", "rosa", "roxo", "preto", "cinza", "prata", "amarelo", "marrom", "laranja"]

    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const handleContinueBtn = () => {
        setStep(2);
    }

    const handleTrigger = async () => {
        const isValid = await trigger();

        if (!isValid) {
            setStep(1);
        }
    }

    const onSubmitForm = (data) => {
        console.log(data);
        const submit = async () => {
            try {
                // pegar o id
                setLoadingSend(true);
                const {brand, status, name, model, year_model, year_release, color, km, description, price} = data;
                const response = await CreateVehicleService(brand, status, name, model, year_model, year_release, color, km, description, price);
                const {id} = response.data.data;
                const responseSendImage = await SendImageService(id, data.image[0]);
                window.location.href = '/show/' + id;
            } catch (err) {
                setStep(1);
                alert("Ocorreu um erro ao cadastrar o veículo!");
                console.log(err);
            } finally{
                setLoadingSend(false);
            }
        }

        submit();
    }

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await GetBrandsService();
                setBrands(response.data.data);
                setLoadingBrands(false);
            } catch (err) {
                alert("Ocorreu um erro ao carregar as marcas!");
                window.location.href = '/';
                console.log(err);
            }
        }

        const fetchStatus = async () => {
            try {
                const response = await GetStatusService();
                setStatus(response.data.data);
                setLoadingStatus(false);
            } catch (err) {
                alert("Ocorreu um erro ao carregar os status!");
                window.location.href = '/';
                console.log(err);
            }
        }

        fetchBrands();
        fetchStatus();
    }, [])

    return (
        <>
            <NavbarTop />
            <main style={{ height: "100vh" }}>
                <Container>

                    <div className="text-center mt-5">
                        <h1 className="fw-bold" style={{ display: 'inline', borderBottom: '2px solid red', paddingBottom: '5px' }}>Preencha os dados do seu veículo!</h1>
                    </div>

                    <Form onSubmit={handleSubmit(onSubmitForm)}>
                        {step === 1 && (
                            <>
                                <Form.Group className="mb-3" controlId="formMarca">
                                    <Form.Label>Marca</Form.Label>
                                    {loadingBrands ? (
                                        <>
                                            <br />
                                            <Spinner className="mt-2" animation="border" variant="danger" />
                                        </>
                                    ) : (
                                        <>
                                            <Form.Select {...register("brand")} className={`${errors.brand ? 'is-invalid' : ''}`} placeholder="Selecione a marca" >
                                                {brands.map(brand => <option key={brand.id} value={brand.id}>{brand.brand}</option>)}
                                            </Form.Select>
                                            {errors.brand && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.brand.message}
                                                </div>
                                            )}
                                        </>

                                    )}

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control  {...register("name")} type="text" className={`${errors.name ? 'is-invalid' : ''}`} placeholder="Informe o nome do carro" />
                                    {errors.name && (
                                        <div className="invalid-feedback d-block">
                                            {errors.name.message}
                                        </div>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formModelo">
                                    <Form.Label>Modelo</Form.Label>
                                    <Form.Control  {...register("model")} type="text" className={`${errors.model ? 'is-invalid' : ''}`} placeholder="Informe o modelo do carro" />
                                    {errors.model && (
                                        <div className="invalid-feedback d-block">
                                            {errors.model.message}
                                        </div>
                                    )}
                                </Form.Group>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group controlId="formAnoModelo">
                                            <Form.Label>Ano do modelo</Form.Label>
                                            <Form.Control {...register("year_model")} type="number" defaultValue={0} className={`${errors.year_model ? 'is-invalid' : ''}`} placeholder="Informe o ano do modelo" />
                                            {errors.year_model && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.year_model.message}
                                                </div>
                                            )}
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formAnoFabricacao">
                                            <Form.Label>Ano de fabricação</Form.Label>
                                            <Form.Control {...register("year_release")} defaultValue={0} className={`${errors.year_release ? 'is-invalid' : ''}`} type="number" placeholder="Informe o ano de fabricação do carro" />
                                            {errors.year_release && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.year_release.message}
                                                </div>
                                            )}
                                        </Form.Group>
                                    </div>
                                </div>
                                <Form.Group className="mb-3" controlId="formCor">
                                    <Form.Label>Cor</Form.Label>
                                    <Form.Select {...register("color")} className={`${errors.color ? 'is-invalid' : ''}`} placeholder="Selecione a cor do carro">
                                        {colors.map(color => <option key={color} value={color}>{color}</option>)}
                                    </Form.Select>
                                    {errors.color && (
                                        <div className="invalid-feedback d-block">
                                            {errors.color.message}
                                        </div>
                                    )}
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
                                    <Form.Control {...register("km")} type="number" defaultValue={0} className={`${errors.km ? 'is-invalid' : ''}`} placeholder="Informe a quilometragem do carro" />
                                    {errors.km && (
                                        <div className="invalid-feedback d-block">
                                            {errors.km.message}
                                        </div>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formDescricao">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control {...register("description")} type="text" className={`${errors.description ? 'is-invalid' : ''}`} placeholder="Descreva um pouco o seu veículo. Não obrigatório." />
                                    {errors.description && (
                                        <div className="invalid-feedback d-block">
                                            {errors.description.message}
                                        </div>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPreco">
                                    <Form.Label>Preço</Form.Label>
                                    <Form.Control {...register("price")} type="number" defaultValue={0} className={`${errors.price ? 'is-invalid' : ''}`} placeholder="Informe o preço do veículo" />
                                    {errors.price && (
                                        <div className="invalid-feedback d-block">
                                            {errors.price.message}
                                        </div>
                                    )}
                                </Form.Group>
                                {loadingStatus ? (
                                    <>
                                        <br />
                                        <Spinner className="mt-2" animation="border" variant="danger" />
                                    </>
                                ) : (
                                    <Form.Group className="mb-3" controlId="formStatus">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select {...register("status")} className={`${errors.status ? 'is-invalid' : ''}`} placeholder="Selecione a cor do carro">
                                            {status.map(status => <option key={status.id} value={status.id}>{status.status}</option>)}
                                        </Form.Select>
                                        {errors.status && (
                                            <div className="invalid-feedback d-block">
                                                {errors.status.message}
                                            </div>
                                        )}
                                    </Form.Group>
                                )
                                }
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Default file input example</Form.Label>
                                    <Form.Control type="file" className={`${errors.image ? 'is-invalid' : ''}`} accept="image/jpeg, image/png, image/jpg" {...register("image")} />
                                    {errors.image && (
                                        <div className="invalid-feedback d-block">
                                            {errors.image.message}
                                        </div>
                                    )}
                                </Form.Group>
                                <div className="d-flex">
                                    {loadingSend ? (
                                        <Button variant='danger' className='fw-bolder text-body-light ms-auto'><Spinner animation="border" size="sm" variant='light' /></Button>
                                    ) : (
                                        <Button variant='danger' className='fw-bolder text-body-light ms-auto' onClick={handleTrigger} type="submit">Anunciar</Button>
                                    )}
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