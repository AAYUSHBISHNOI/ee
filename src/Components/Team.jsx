import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import monkey from "../assets/img/davoice.png";
import linee from "../assets/img/Line 2.png";
import solo from "../assets/img/solomon.png";
import anton from "../assets/img/anton.png";
import { Dis, Link, Twit } from './Mysvg';

const Team = () => {
  return (
    <div className='bcg_team'>
        <Container className='pt-5 my_container'>
            <div className='text-center pt-md-5'>
            <h2 className='ff_machina fs_46 fw_700 text-white' data-aos="fade-up-right" data-aos-duration="2000">Our Team</h2>
            </div>
            <Row className='pt-5 mt-5'>
                <Col md={4} data-aos="fade-right" data-aos-duration="2000">
                    <div className=' card_2'>
                      <div className=' overflow-hidden'><img className='w-100 link_Scale' src={monkey} alt="" /></div>
                          <div className='text-ceter pb-3'>
                            <h2 className='ff_Raleway fs_24 fw_500 text-black mt-4'>Davoice</h2>
                            <p className='ff_Raleway fs_16 fw_400 text-black pt-2'>Co-Founder</p>
                            <div className='d-flex align-items-center justify-content-center pt-3'>
                                <Twit/>
                                <img className=' mx-3' src={linee} alt="" />
                                <Dis/>
                            </div>
                          </div>
                    </div>
                </Col>
                <Col md={4} className='mt-3 mt-md-0'>
                    <div className=' card_2'data-aos="fade-up" data-aos-duration="2000">
                      <div className=' overflow-hidden'>
                      <img className='w-100 link_Scale' src={solo} alt="" />
                      </div>
                          <div className='text-center pb-3'>
                            <h2 className='ff_Raleway fs_24 fw_500 text-black mt-4'>Solomon Adekale</h2>
                            <p className='ff_Raleway fs_16 fw_400 text-black pt-2'>Co-Founder</p>
                            <div className='d-flex align-items-center justify-content-center pt-3'>
                                <Twit/>
                                <img className=' mx-3' src={linee} alt="" />
                                <Dis/>
                                <img className=' mx-3' src={linee} alt="" />
                                <Link/>
                            </div>
                          </div>
                    </div>
                </Col>
                <Col md={4} className='mt-3 mt-md-0'data-aos="fade-left" data-aos-duration="2000">
                    <div className=' card_2'>
                      <div className=' overflow-hidden'>
                      <img className='w-100 link_Scale' src={anton} alt="" />
                      </div>
                          <div className='text-center pb-3'>
                            <h2 className='ff_Raleway fs_24 fw_500 text-black mt-4'>Anton</h2>
                            <p className='ff_Raleway fs_16 fw_400 text-black pt-2'>Co-Founder | Lead Developer</p>
                            <div className='d-flex align-items-center justify-content-center pt-3'>
                                <Twit/>
                                <img className=' mx-3' src={linee} alt="" />
                                <Dis/>
                                <img className=' mx-3' src={linee} alt="" />
                                <Link/>
                            </div>
                          </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Team
