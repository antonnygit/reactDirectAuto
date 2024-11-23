import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavbarTop = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <div className="mx-auto">
                        <Nav className="justify-content-center">
                            <Nav.Link href="/vehicles">Veículos</Nav.Link>
                            <Nav.Link href="/sell">Vender</Nav.Link>
                            <Nav.Link href="/chat">Chat</Nav.Link>
                        </Nav>
                    </div>
                    <Button variant="outline-primary">Login</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarTop;