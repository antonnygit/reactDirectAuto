import { Container } from "react-bootstrap";
import NavbarBottom from "../../components/navbar/navbarBottom";
import NavbarTop from "../../components/navbar/navbarTop";
import ModalLogin from "../../components/auth/modalLogin";

const isLogged = !!localStorage.getItem('token');

const Login = () => {
    if(isLogged) window.location.href = '/vehicles';

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