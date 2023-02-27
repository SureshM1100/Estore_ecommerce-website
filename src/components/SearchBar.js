import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';


function SearchBar({totalQty,totalqty}) {
    const navigate = useNavigate()
    return (
        <div className='sec'>
            <div className='sec1'>
                <Row className='gy-2'>
                    <Col sm={12} lg={10}>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search for products"
                                className="me-2 searchbar p-2"
                                aria-label="Search"
                            />
                            <Button className='searchbtn1' variant="dark">Search</Button>
                        </Form></Col>
                    <Col sm={12} lg={2}>
                        <Nav.Link><Button onClick={() => { navigate("/wishlist") }} className='btn1 p-2' variant="dark"><AiFillHeart fontSize="22px" /> ({totalqty})</Button></Nav.Link>
                        <Nav.Link><Button onClick={() => { navigate("/cart") }} className='btn1 p-2' variant="dark"><AiOutlineShoppingCart fontSize="22px" /> ({totalQty})</Button> </Nav.Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SearchBar