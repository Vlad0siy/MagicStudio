import React, {Component} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import For_models from "../Pages/For_models";
import Calculator from "../Pages/Calculator";
import Job_openings from "../Pages/Job_openings";
import About_us from "../Pages/About_us";
import Contacts from "../Pages/Contacts";
import FAQ from "../Pages/FAQ";
import Reviews from "../Pages/Reviews";
import Gallery from "../Pages/Gallery";
class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed={"top"} collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                            src={"/star.png"}
                            height={30}
                            width={30}
                            className="d-inline-block align-top"
                            alt="Logo"
                            /> Magic Studio
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/src/Pages/for_models">For models</Nav.Link>
                                <Nav.Link href="/src/Pages/calculator">Calculator</Nav.Link>
                                <Nav.Link href="/src/Pages/job_openings">Job openings</Nav.Link>
                                <Nav.Link href="/src/Pages/about_us">About us</Nav.Link>
                                <Nav.Link href="/src/Pages/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/src/Pages/faq">FAQ</Nav.Link>
                                <Nav.Link href="/src/Pages/reviews">Reviews</Nav.Link>
                                <Nav.Link href="/src/Pages/gallery">Gallery</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                
                <Router>
                    <Routes>
                        <Route exact pass={"/"} component={Home}/>
                        <Route exact pass={"/For_models"} component={For_models}/>
                        <Route exact pass={"/calculator"} component={Calculator}/>
                        <Route exact pass={"/job_openings"} component={Job_openings}/>
                        <Route exact pass={"/about_us"} component={About_us}/>
                        <Route exact pass={"/contacts"} component={Contacts}/>
                        <Route exact pass={"/faq"} component={FAQ}/>
                        <Route exact pass={"/reviews"} component={Reviews}/>
                        <Route exact pass={"/gallery"} component={Gallery}/>
                    </Routes>
                </Router>
            </>
        );
    }
}

export default Header;