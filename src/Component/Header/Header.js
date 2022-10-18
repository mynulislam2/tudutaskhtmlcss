import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import Logo from "../../Assests/Logo/Logo.png"
import UserLoggedIn from "../../Assests/user.png"
import '../../Css/Header.css'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container ClassName="NavbarWrapper">
                <Navbar.Brand href="#">
                    <img src={Logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="#AboutUs">About Us</Nav.Link>
                        <Nav.Link href="#OurPrograms">Our Programs</Nav.Link>
                        <div className="userLoggedIn">
                            <img src={UserLoggedIn} alt="user LoggedIn" />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;