import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'


function WishList({ wishList, handleAddProduct, handleClearWishList, handleRemoveWishList }) {
  if (wishList.length === 0) {
    return (
      <div>
        <div className='wishlist'>
          <div className='wishlist1'>
            <Row className='wishrow1'>
              <Col>
                <Row className='wishdetails text-center'>
                  <Col><h4>IMAGE</h4></Col>
                  <Col><h4>DETAILS</h4></Col>
                  <Col><h4>PRICE</h4></Col>
                  <Col><h4>ADD TO CART</h4></Col>
                  <Col><h4> REMOVE</h4></Col>
                </Row>
                <br />
                <br />
                <Row className='wishlistrow1 text-center'>
                  <h4><span className='noitems'>NO ITEMS IN WISHLIST</span></h4>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className='wishlist'>
          <div className='wishlist1'>
            <Row className='wishrow1'>
              <Col>
                <Row className='wishdetails text-center'>
                  <Col lg={3}><h4>IMAGE</h4></Col>
                  <Col lg={3}><h4>DETAILS</h4></Col>
                  <Col lg={2}><h4>PRICE</h4></Col>
                  <Col lg={2}><h4>ADD TO CART</h4></Col>
                  <Col lg={2}><h4> REMOVE</h4></Col>
                </Row>
                {wishList.map((item) => (
                  <div key={item.id}>
                    <Row className='wishlistrow'>
                      <Col sm={12} lg={3} className="text-center"><div><img
                        className="wishproimg"
                        src={item.images}
                        alt={item.title}
                      /></div></Col>
                      <Col sm={4} lg={3} className='wishcardtext'>
                        <Card.Text><h4>{item.title}</h4></Card.Text>
                      </Col>
                      <Col sm={3} lg={2} className='wishcardtext'><Card.Text><h5>$ {item.price}</h5></Card.Text></Col>
                      <Col sm={3} lg={2} className='wishcardtext'>
                        <Button className='wishbtn' onClick={() => handleAddProduct(item)}>Add To Cart</Button>
                      </Col>
                      <Col sm={3} lg={2} className='wishcardtext wishcardtext0'>
                        <Button className='wishqtybtn' onClick={() => handleRemoveWishList(item)}> Remove </Button>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Col>
            </Row>
            <Row className='clwish01' lg={3} >
              {wishList.length >= 1 && (
                <button className='clearwishbtn1' onClick={handleClearWishList}><h4 className='i'><b>Clear WishList</b></h4></button>
              )}
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default WishList