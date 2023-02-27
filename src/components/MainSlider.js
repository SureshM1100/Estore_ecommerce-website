import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react'

import banner from '../img/banner.jpg'
import wristwatch from '../img/wristwatch.jpg'

import watch1 from '../img/watch1.jpg'
import watch2 from '../img/watch2.jpg'
import watch3 from '../img/watch3.jpg'


function Mainslider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='mainslide'>
            <div className='mainslide1'>
                <Row className='banner'>
                    <img
                        className="d-block w-100 bannerimg"
                        src={banner}
                        alt="watch img"
                    />
                </Row>
                <Row className='boxlist'>
                    <Col sm={12} lg={5}>
                        <div className='carousel1'>
                            <Carousel className='carousel2' activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 sliderimg"
                                        src={watch1}
                                        alt="watch img"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 sliderimg"
                                        src={watch2}
                                        alt="watch img"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 sliderimg"
                                        src={watch3}
                                        alt="watch img"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                    <Col>
                        <img
                            className="d-block w-100 wristimg"
                            src={wristwatch}
                            alt="watch img"
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Mainslider