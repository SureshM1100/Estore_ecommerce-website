import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'


const Product = ({ handleAddProduct, handleWishList }) => {

    const [productItems, setProductItems] = useState(null);
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories/2/products?offset=0&limit=24').then(data => data.json())
            .then(data => { setProductItems(data) });
    }, []);

    // https://api.escuelajs.co/api/v1/products/?categoryId=2

    return (
        <div>
            <div className='productsec'>
                <div className='productsec1'>
                    <Row className='mainrow'>
                        <Col sm={12} lg={12}>
                            <Row>
                                {(productItems) ?
                                    productItems.map((productItem) => {
                                        return (

                                            <Col sm={12} lg={3} className="cardcol text-center">
                                                <div><img
                                                    className="d-block w-100 productlistimg"
                                                    src={productItem.images[0]}
                                                    alt={productItem.title}
                                                /></div>
                                                <Card.Title className='cardtitle'>{productItem.title}</Card.Title>
                                                <Card.Text className='cardtext'><h5>$ {productItem.price}</h5></Card.Text>
                                                <Button className='cardbtn' onClick={() => handleAddProduct(productItem)}>Add To Cart</Button>
                                                <Button className='cardbtn1' onClick={() => handleWishList(productItem)}>Add To WishList</Button>
                                            </Col>
                                        )
                                    })
                                    :

                                    <div className='spinner1'>
                                        <div className="spinner-box">
                                            <div className='loadingtext'>
                                                <h3><i>Loading</i></h3>
                                            </div>
                                            <div className="pulse-container">
                                                <div className="pulse-bubble pulse-bubble-1 bubble01"></div>
                                                <div className="pulse-bubble pulse-bubble-2 bubble02"></div>
                                                <div className="pulse-bubble pulse-bubble-3 bubble03"></div>
                                            </div>
                                        </div>
                                    </div>

                                }
                            </Row>
                            <Col sm={12} lg={12}>
                                <div className='displaybox'>

                                </div>
                            </Col>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    )
}

export default Product



