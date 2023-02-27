import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'


const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClear, totalQty }) => {


    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
    if (cartItems.length === 0) {
        return (
            <div>
                <div className='cart'>
                    <div className='cart1'>
                        <Row className='cartrow1'>
                            <Col sm={12} lg={8}>
                                <Row className='text-center cartdetails'>
                                    <Col><h4>IMAGE</h4></Col>
                                    <Col><h4>DETAILS</h4></Col>
                                    <Col><h4>PRICE</h4></Col>
                                    <Col><h4>QUANTITY</h4></Col>
                                </Row>
                                <br />
                                <br />
                                <br />
                                <Row className='cartlistrow1 text-center'>
                                    <h4><span className='noitems'>NO ITEMS IN CART</span></h4>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div>
                <div className='cart'>
                    <div className='cart1'>
                        <Row className='cartrow1'>
                            <Col sm={12} lg={8}>
                                <Row className='text-center cartdetails'>
                                    <Col sm={3}><h4>IMAGE</h4></Col>
                                    <Col sm={3}><h4>DETAILS</h4></Col>
                                    <Col sm={3}><h4>PRICE</h4></Col>
                                    <Col sm={3}><h4>QUANTITY</h4></Col>
                                </Row>
                                {cartItems.map((item) => (
                                    <div key={item.id}>
                                        <Row className='cartlistrow text-center'>
                                            <Col sm={12} lg={3}><div className='text-center'><img
                                                className="cartproimg"
                                                src={item.images}
                                                alt={item.title}
                                            /></div></Col>
                                            <Col sm={4} lg={3} className='text-center cartcardtext'>
                                                <Card.Text><h4>{item.title}</h4></Card.Text>
                                            </Col>
                                            <Col sm={4} lg={3} className='text-center cartcardtext'><Card.Text><h5>$ {item.price}</h5></Card.Text></Col>
                                            <Col sm={4} lg={3} className='text-center cartcardtext'>
                                                <Button className='cart-item-add cartqtybtn' onClick={() => handleAddProduct(item)}> + </Button>

                                                <h5 className='qtybox'>{item.quantity}</h5>

                                                <Button className='cart-item-remove cartqtybtn' onClick={() => handleRemoveProduct(item)}> - </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </Col>
                            <Col sm={12} lg={3} className="text-center totalbox">
                                <br />
                                <Row>
                                    <br />
                                    <h4 >CART SUMMARY</h4>
                                    <br />
                                    <br />
                                    <br />
                                    <div>
                                        <div className='cartsummary1'><h5>Product</h5></div><div className='cartsummary2'><h6 className='color1'>{totalQty}</h6></div>
                                    </div>
                                    <br />
                                    <br />
                                    <div>
                                        <div className='cartsummary1'><h5>Sub Total</h5></div><div className='cartsummary2'><h6 className='color1'> <span className='color2'>$</span> {totalPrice}</h6></div>
                                    </div>
                                    <br />
                                    <br />
                                    <span ><hr className='hr' /></span>
                                    <br />
                                    <div>
                                        <div className='cartsummary3'><h3>Grand Total</h3></div><div className='cartsummary4'><h5 className='color1'><span className='color2'>$</span> {totalPrice}</h5></div>
                                    </div>
                                </Row>
                                <span><hr /></span>
                                <Row className=' clearcart'>
                                    {cartItems.length >= 1 && (
                                        <button className='clear-button clearbtn' onClick={handleCartClear}><h3><b>Clear cart</b></h3></button>
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >

        )
    }
}
export default Cart
