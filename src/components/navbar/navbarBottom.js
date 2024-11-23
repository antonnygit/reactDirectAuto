import { Container, Navbar } from "react-bootstrap";

import '../../styles/navbar.css';

const NavbarBottom = ({isFixed = false}) => {
    return (
        <>
            <Navbar className={isFixed ? 'fixed-bottom navbar' : 'navbar'} bg="light" data-bs-theme="light">
                <Container className="justify-content-center">
                    <p className="text-center">&copy; 2024 DirectAuto S.A. Todos os direitos reservados.</p>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarBottom;