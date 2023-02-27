import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

import { FaGreaterThan } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer'>
      <div className='footer1'>
        <Row className='footerrow '>
          <Col sm={12} lg={3} className='footercol2'><h3><b>GET IN TOUCH</b></h3>
            <br />
            <Row >
              <li className='footerli'>
                <h6 className='footericon'><span className='footerspan5'><HiLocationMarker fontSize='28px' /></span>  123 E Store, Cbe, India</h6>
              </li>
              <li className='footerli'>
                <h6 className='footericon'><span className='footerspan5'><AiOutlineMail fontSize="28px" /></span> estore@example.com</h6>
              </li>
              <li className='footerli'>
                <h6 className='footericon'><span className='footerspan5'><BsFillTelephoneFill fontSize="28px" /></span>  +19 233-456-7890</h6>
              </li>
            </Row>
          </Col>
          <Col sm={12} lg={3} className='footercol2'><h3><b>FOLLOW US</b></h3>
            <br />

            <div className='footericon1'><h6 className='arrow'><FaGreaterThan fontSize='15' color='coral' /><FaGreaterThan fontSize='15' color='coral' /></h6><span className='footerspan'>< AiOutlineTwitter fontSize='32px' /></span></div>
            <div className='footericon2'><h6 className='arrow'><FaGreaterThan fontSize='15' color='coral' /><FaGreaterThan fontSize='15' color='coral' /></h6><span className='footerspan2'><RiFacebookFill fontSize='32px' /></span></div>
            <div className='footericon2'><h6 className='arrow'><FaGreaterThan fontSize='15' color='coral' /><FaGreaterThan fontSize='15' color='coral' /></h6><span className='footerspan3'><AiFillInstagram fontSize='32px' /></span></div>
            <div className='footericon2'><h6 className='arrow'><FaGreaterThan fontSize='15' color='coral' /><FaGreaterThan fontSize='15' color='coral' /></h6><span className='footerspan4'><AiFillYoutube fontSize='32px' /></span></div>
          </Col>
          <Col sm={12} lg={3} className='footercol2'><h3><b>COMPANY INFO</b></h3>
            <br />
            <Row className='footerinfo'>
              <div className='footerinfo2'><FaGreaterThan fontSize='10' color='coral' /><span className='footerinfo3'><FaGreaterThan fontSize='10' color='coral' /></span> ContactUs</div>
              <div className='footerinfo2'><FaGreaterThan fontSize='10' color='coral' /><span className='footerinfo3'><FaGreaterThan fontSize='10' color='coral' /></span> Privacy Policy</div>
              <div className='footerinfo2'><FaGreaterThan fontSize='10' color='coral' /><span className='footerinfo3'><FaGreaterThan fontSize='10' color='coral' /></span> Terms & Condition</div>
            </Row>
          </Col>
          <Col sm={12} lg={3} className='footercol2'><h3><b>PURCHASE INFO</b></h3>
            <br />
            <Row className='footerinfo'>
              <div className='footerinfo2'><FaGreaterThan fontSize='10' color='coral' /><span className='footerinfo3'><FaGreaterThan fontSize='10' color='coral' /></span> Payment Policy</div>
              <div className='footerinfo2'><FaGreaterThan fontSize='10' color='coral' /><span className='footerinfo3'><FaGreaterThan fontSize='10' color='coral' /></span> Payment Policy</div>
              <div className='footerinfo2'><FaGreaterThan fontSize='10' color='coral' /><span className='footerinfo3'><FaGreaterThan fontSize='10' color='coral' /></span> Payment Policy</div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer