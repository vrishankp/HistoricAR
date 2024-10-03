import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import '../assets/nav.css';

function Menu() {
    return (
        <Navbar expand="lg" style={{backgroundColor: '#2638c4'}}>
        <Container>
            {/* Logo */}
            <Navbar.Brand href="https://pbswisconsin.org">
            <img
                src="https://wisconsinpublictv.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/11/primetime-icons-desktop_pbs-wisconsin-1.png"
                alt="PBS Wisconsin Logo"
                height="30"
            />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="https://pbswisconsin.org/donate/">Donate</Nav.Link>
                <NavDropdown title="Watch" id="watch-dropdown">
                <NavDropdown.Item href="/watch-page/">On Demand</NavDropdown.Item>
                <NavDropdown.Item href="/livetv/">Live TV</NavDropdown.Item>
                <NavDropdown.Item href="/made-in-wisconsin/">Made in Wisconsin</NavDropdown.Item>
                <NavDropdown.Item href="/shows-a-z/">Shows A-Z</NavDropdown.Item>
                <NavDropdown.Item href="/passport/">
                    PBS Passport
                    <img
                    src="https://wisconsinpublictv.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/07/pbs-passport-rose-cc.png"
                    alt="PBS Passport"
                    height="20"
                    />
                </NavDropdown.Item>
                <NavDropdown.Item href="/live-tv-access-guide/">Need Help?</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="https://pbswisconsin.org/schedule/">TV Schedule</Nav.Link>
                <Nav.Link href="https://pbswisconsin.org/news/">News</Nav.Link>
                <Nav.Link href="https://pbswisconsin.org/education">Education</Nav.Link>
                <NavDropdown title="Support Us" id="support-dropdown">
                <NavDropdown.Item href="/support/">Become a Member</NavDropdown.Item>
                <NavDropdown.Item href="/support/individual-gifts/">Philanthropy</NavDropdown.Item>
                <NavDropdown.Item href="/support/corporate-support/">Sponsorship</NavDropdown.Item>
                <NavDropdown.Item href="/support/volunteer/">Volunteer</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav className="justify-content-end">
                <Nav.Link href=""> <FaSearch className="search-icon" style = {{color: 'white'}}/> </Nav.Link>
            </Nav>

           
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Menu;
