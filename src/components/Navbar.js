import { Container, Navbar, Nav } from "react-bootstrap";
import './navbar.css'

const Navigation = () => {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Bank of React</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/debits">My Debits</Nav.Link>
                <Nav.Link href="/credits">My Credits</Nav.Link>
                <Nav.Link href="/userprofile">Profile</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;