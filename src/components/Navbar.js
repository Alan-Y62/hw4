import { Container, Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './navbar.css'

const Navigation = () => {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Bank of React</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/debits">My Debits</Nav.Link>
                <Nav.Link as={Link} to="/credits">My Credits</Nav.Link>
                <Nav.Link as={Link} to="/userprofile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;