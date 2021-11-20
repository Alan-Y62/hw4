import { Container, Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './navbar.css'

const Navigation = () => {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/hw4">Bank of React</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/hw4">Home</Nav.Link>
                <Nav.Link as={Link} to="/hw4/debits">My Debits</Nav.Link>
                <Nav.Link as={Link} to="/hw4/credits">My Credits</Nav.Link>
                <Nav.Link as={Link} to="/hw4/userprofile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/hw4/login">Login</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;