import { Col, Container, Row } from "react-bootstrap";
import NavbarTop from "../../components/navbar/navbarTop";
import ShowVhc from "../../components/vehicle/showVehicle";
import NavbarBottom from "../../components/navbar/navbarBottom";

const ShowVehicle = () => {
    // const [vehicle, setVehicle] = useState(null);

    return (
        <>
        <NavbarTop />
            <main style={{ height: "100%" }}>
                <Container>
                    <Row className="justify-content-center mt-5">
                        <Col xs={12} md={4} className="mb-4">
                            <img src="corolla.jpg" alt="Imagem 1" className="img-fluid rounded" />
                        </Col>
                        <Col xs={12} md={4} className="mb-4 d-none d-md-block">
                            <img src="corolla.jpg" alt="Imagem 2" className="img-fluid rounded" />
                        </Col>
                        <Col xs={12} md={4} className="mb-4 d-none d-md-block">
                            <img src="corolla.jpg" alt="Imagem 3" className="img-fluid rounded" />
                        </Col>
                    </Row>

                    <ShowVhc
                       name="Corolla"
                       model="2.0 VVT-IE FLEX XEI DIRECT SHIFT"
                       value="129.000"
                       date="12/04/2023"
                       km="100.000"
                       color="Prata"
                       brand="Toyota"
                       description="Lorem ipsum odor amet, consectetuer adipiscing elit. Fames morbi dictum risus duis cras ac platea nascetur. Mollis nisl erat accumsan viverra inceptos."
                    />

                </Container>
            </main>
            <NavbarBottom />
        </>
    )
}

export default ShowVehicle;