import React from 'react'

import Form from 'react-bootstrap/Form';

function ContactUs() {
    return (
        <div className='contactus'>
            <div className='contactus1'>
                <div className='contact1'>
                    <Form className='contactform'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h4>Email address</h4></Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h4>Email address</h4></Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label><h4>Message</h4></Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs