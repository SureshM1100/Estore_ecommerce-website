import React from 'react'
import { useNavigate } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GoThreeBars } from "react-icons/go";
import { NavLink } from 'react-bootstrap';



function Home() {
    const navigate = useNavigate()
    return (
        <div className='c'>
            <Navbar className='c1' expand="lg">
                <Navbar.Brand className='logo'><NavLink onClick={() => { navigate("/") }} >E<span className='logo1'>store</span></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"><GoThreeBars color='white' fontSize="40px" /></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => { navigate("/") }} className='liname' >Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/products") }} className='liname' >Products</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/cart") }} className='liname' >Cart</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/wishlist") }} className='liname' >WishList</Nav.Link>
                        {/* <Nav.Link onClick={() => { navigate("/contactus") }} className='liname' >ContactUs</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Home