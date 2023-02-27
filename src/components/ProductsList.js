import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

import { useNavigate } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import prolistimg1 from '../img/prolistimg1.jpg'
import prolistimg2 from '../img/prolistimg2.jpg'
import prolistimg3 from '../img/prolistimg3.jpg'


function ProductsList() {
    const navigate = useNavigate()
    return (
        <div className='productlist'>
            <div className='productlist1'>
                <Row className='prolistbox'>
                    <Col sm={12} lg={4} className='productslist2'>
                        <Nav.Link onClick={() => { navigate("/products") }}>   <div className='imghover'>
                            <img
                                className="d-block w-100 productlistimg"
                                src={prolistimg1}
                                alt="KidsDress"
                            /><div className='imghover1'><h1 className='listh1'>Digital Watches</h1></div>
                            <div className='imghover2 text-center'><h5 style={{color:"coral"}}>click to view products</h5></div></div>
                        </Nav.Link>
                    </Col>
                    <Col sm={12} lg={4} className='productslist2'>
                        <Nav.Link onClick={() => { navigate("/products") }}>  <div className='imghover'>
                            <img
                                className="d-block w-100 productlistimg"
                                src={prolistimg2}
                                alt="BoysDress"

                            /><div className='imghover1'><h1 className='listh1'>Classic Watches</h1></div>
                            <div className='imghover2 text-center'><h5 style={{color:"coral"}}>click to view products</h5></div></div>
                        </Nav.Link>
                    </Col>
                    <Col sm={12} lg={4} className='productslist2'>
                        <Nav.Link onClick={() => { navigate("/products") }}> <div className='imghover'>
                            <img
                                className="d-block w-100 productlistimg"
                                src={prolistimg3}
                                alt="GirlsDress"
                            /><div className='imghover1'><h1 className='listh1'>Fitness Band</h1></div>
                            <div className='imghover2 text-center'><h5 style={{color:"coral"}}>click to view products</h5></div></div>
                        </Nav.Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ProductsList