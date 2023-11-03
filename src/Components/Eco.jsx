import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Balan, Bond, Found, Gear, Oly, Uni } from './Mysvg';

const Eco = () => {
  return (
    <div className='pb-md-5'>
        <Container className=' my_container mb-5 pb-md-5 pb-3'>
            <div className='text-center padding_text'>
                <h2 className='ff_machina fs_46 fw_700 txt_clr_6' data-aos="fade-up" >Ecosystem Partners</h2>
            </div>
            <Row className='mt-5'>
                <Col md={6} xl={4} data-aos="fade-up">
                    <div className="box_1">
                        <Oly/>
                     </div>
                </Col>
                <Col md={6} xl={4} className=' mt-4 mt-md-0' data-aos="fade-right">
                     <div className="box_1">
                        <Bond/>
                     </div>
                </Col>
                <Col md={6} xl={4} className=' mt-4 mt-xl-0' data-aos="fade-left">
                <div className="box_1">
                        <Found/>
                     </div>
                </Col>
                <Col md={6} xl={4} className='mt-4' data-aos="fade-up-right">
                <div className="box_1">
                        <Balan/>
                     </div>
                </Col>
                <Col md={6} xl={4} className='mt-4' data-aos="fade-up-left">
                <div className="box_1">
                        <Gear/>
                     </div>
                </Col>
                <Col md={6} xl={4} className='mt-4' data-aos="fade-down-right">
                <div className="box_1">
                        <Uni/>
                     </div>
                </Col>
            </Row>
            <div className='d-flex justify-content-center mt-5 pt-md-5' data-aos="fade-right" >
                <button className='bttn_more ff_Raleway fs_16 fw_600 txt_clr_6'>More To Be Announced</button>
            </div>
        </Container>
    </div>
  )
}

export default Eco