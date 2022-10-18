import React, { useState } from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../Assests/Logo/Logo.png"
import UserLoggedIn from "../../Assests/user.png"
import '../../Css/Header.css'
const Header = () => {
    const [ShowMenu, setShowMenu] = useState(false)
    return (
        <nav className=''>
            <Navbar collapseOnSelect expand="lg" >
                <Container ClassName="NavbarWrapper">
                    <Link to="/">
                        <Navbar.Brand >
                            <img src={Logo} alt="logo" />
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link>About Us</Nav.Link>
                            <Nav.Link >Our Programs</Nav.Link>
                            <div className="userLoggedIn" onClick={() => setShowMenu(!ShowMenu)}>
                                <img src={UserLoggedIn} alt="user LoggedIn" />
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
            {ShowMenu ? <div className='AccountNav'>
                <ul>
                    <li>Dashboard</li>
                    <li>Bookmarks</li>
                    <li><Link to="/myAccount">My Account</Link> </li>
                    <li>Log Out</li>
                </ul>

            </div> : null

            }
        </nav>

    );
};

export default Header;