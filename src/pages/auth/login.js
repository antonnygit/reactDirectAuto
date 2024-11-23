import { Container } from "react-bootstrap";
import NavbarBottom from "../../components/navbar/navbarBottom";
import NavbarTop from "../../components/navbar/navbarTop";
import ModalLogin from "../../components/auth/modalLogin";

const Login = () => {
    return (
        <>
            <NavbarTop />
            <main>
                <Container>
                    <div>
                        <ModalLogin />
                    </div>
                </Container>
            </main>
            <NavbarBottom isFixed={true} />
        </>
    )
}

export default Login;