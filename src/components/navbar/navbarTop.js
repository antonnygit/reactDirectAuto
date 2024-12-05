import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavbarTop = () => {
    const isLogged = !!localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="/logo.png"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <div className="mx-auto">
                        <Nav className="justify-content-center">
                            <Nav.Link href="/vehicles">Veículos</Nav.Link>
                            <Nav.Link href="/sell">Vender</Nav.Link>
                            <Nav.Link href="/chat">Chat</Nav.Link>
                        </Nav>
                    </div>
                    {isLogged ? (
                        <Button variant="outline-danger" onClick={handleLogout}>Sair</Button>
                    ) : (
                        <Button variant="outline-primary" href="/login">Login</Button>
                    )}
                    
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarTop;