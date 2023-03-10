import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

const Topnavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <NavLink to="/" className={(Active) => Active.Active  ?  "activeClassName navLink  " : "navLink" }>Addcategory</NavLink>
                  <NavLink to="/CategoryList" className={(Active) => Active.Active  ?  "activeClassName navLink  " : "navLink" }>CategoryList</NavLink>
                  <NavLink to="/AddProduct" className={(Active) => Active.Active  ?  "activeClassName navLink  " : "navLink" }>AddProduct</NavLink>
                  <NavLink to="/ProductList" className={(Active) => Active.Active  ?  "activeClassName navLink  " : "navLink" }>ProductList</NavLink>
                </Container>
            </Navbar>

        </>

    )
}

export default Topnavbar