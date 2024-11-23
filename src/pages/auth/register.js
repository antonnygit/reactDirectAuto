import NavbarTop from "../../components/navbar/navbarTop";
import NavbarBottom from "../../components/navbar/navbarBottom";

import { Container } from "react-bootstrap";
import ModalRegister from "../../components/auth/modalRegister";

const Register = () => {
    return (
        <>
            <NavbarTop />
            <main>
                <Container>
                    <div>
                        <ModalRegister />
                    </div>
                </Container>
            </main>
            <NavbarBottom isFixed={true} />
        </>
    )
}

export default Register;