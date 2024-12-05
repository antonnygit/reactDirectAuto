import { Col, Container, Row, Spinner } from "react-bootstrap";
import NavbarTop from "../../components/navbar/navbarTop";
import ShowVhc from "../../components/vehicle/showVehicle";
import NavbarBottom from "../../components/navbar/navbarBottom";
import IsAuth from "../../middlewares/isAuth";
import { useParams } from "react-router-dom";
import GetVehicleByIdService from "../../services/vehicle/getVehicleById";
import { useEffect, useState } from "react";

const baseURL = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;

const ShowVehicle = () => {
    const { id } = useParams();

    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getVehicle = async () => {
            try {
                const response = await GetVehicleByIdService(id);
                setVehicle(response.data.data);
            } catch (err) {
                alert("Ocorreu um erro ao carregar o veículo!");
                setError(true);
                console.log(err);
            }finally{
                setLoading(false);
            }
        }
        getVehicle();
    }, []);

    return (
        <>
            <NavbarTop />
            <main style={{ height: "100%" }}>
                <Container>
                    {loading || error ? (
                        <div className="d-flex justify-content-center align-items-center">
                            <Spinner animation="border" variant="danger" />
                        </div>
                    ) : (
                        <>
                            <Row className="justify-content-center mt-5">
                                <Col xs={12} md={4} className="mb-4">
                                    <img src={baseURL + vehicle.image} alt="Imagem 1" className="img-fluid rounded" />
                                </Col>
                                <Col xs={12} md={4} className="mb-4 d-none d-md-block">
                                    <img src={baseURL + vehicle.image} alt="Imagem 2" className="img-fluid rounded" />
                                </Col>
                                <Col xs={12} md={4} className="mb-4 d-none d-md-block">
                                    <img src={baseURL + vehicle.image} alt="Imagem 3" className="img-fluid rounded" />
                                </Col>
                            </Row>

                            <ShowVhc
                                name={vehicle.name}
                                model={vehicle.model}
                                value={vehicle.price}
                                date={vehicle.release_year}
                                km={vehicle.km}
                                color={vehicle.color}
                                brand={vehicle.brand.brand}
                                description={vehicle.description}
                            />
                        </>
                    )}

                </Container >
            </main >
            <NavbarBottom />
        </>
    )
}

export default IsAuth(ShowVehicle);