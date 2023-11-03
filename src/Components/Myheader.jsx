import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../assets/img/head_logo.png";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import hero from "../assets/img/hero-img.png";
import robot from "../assets/img/small-roabot-img.png";
import { useState } from 'react'
import { Navdot } from './Mysvg';
import dot from '../assets/img/dotssss.png';

const Myheader = () => {
  const [show, setShow] = useState(false);
  if(show){
    document.body.classList.add("overflow-hidden")
  }else{
    document.body.classList.remove("overflow-hidden")
  }
  return (
    <div className='min_vh_100 bcg_hero d-flex flex-column position-relative pt-2'>
      <img className=' position-absolute dot_img' data-aos="zoom-in-up" data-aos-duration="2000" src={dot} alt="" />
        <nav className=' z-3' data-aos="zoom-in-up" data-aos-duration="2000">
          <Container className='my_container d-flex align-items-center justify-content-between'>
            <div>
               <img className='' src={logo} alt="" />
            </div>
          <div className=' d-flex align-items-center  me-lg-0 z-3'>
             <ul className={show ? "open": ""}>
              <li><a href="About" className='ff_Raleway fs_16 fw_500 text-white'>About</a></li>
              <li><a href="About" className='ff_Raleway fs_16 fw_500 text-white'>IBO Event</a></li>
              <li><a href="About" className='ff_Raleway fs_16 fw_500 text-white'>EEFI Tokenomics</a></li>
              <li><a href="About" className='ff_Raleway fs_16 fw_500 text-white'>Team</a></li>
              <li><a href="About" className='ff_Raleway fs_16 fw_500 text-white'>Partners</a></li>
              <li><a href="About" className='ff_Raleway fs_16 fw_500 text-white'>Roadmap</a></li>
              <Dropdown as={ButtonGroup}>
      <Button variant="success">More</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
             </Dropdown>
             <button className='nav-btn color-1 ff_Raleway fw_500 fs_16 d_none'>Enter App</button>
            </ul>
            
             <div className='ml_100 d-flex align-items-center justify-content-between'>
               <button className='open d-block d-xl-none navicon ' onClick={() => {setShow(!show); }}><Navdot/></button>
               <button className='bttn_enter color-1 ff_Raleway fw_500 fs_16 d-none d-md-block ms-5'>Enter App</button>
              </div>
          </div>
          </Container>
        </nav>
        <section className='d-lg-flex flex-grow-1'>
          <Container className='my_container'>
            <Row className='align-items-center pb-5 mb-5 mb-sm-0 mb-lg-5 pb-xl-0 mb-xl-0'>
              <Col xl={6} className='text-center pt-4 text-xl-start'>
                <h1 className='ff_machina fs_85 fw_500 text-white text-uppercase' data-aos="zoom-in" data-aos-duration="2000">Building <span className='d-l-block'>elastic</span> <span className='d-lg-block'>Protocol</span></h1>
                <p className='ff_Raleway fs_16 fw_400 text-white pt-3 pt-md-2 pt-lg-0' data-aos="zoom-in-up" data-aos-duration="2000">An ecosystem of unique yield strategies that help you earn yield, <span className='d-sm-block'>amplify, and stretch it across all market conditions</span></p>
                <div className='position-relative linee' data-aos="zoom-in-left" data-aos-duration="2000">
                <p className='ff_Raleway fw_700 fs_18 text-white pt-3 pt-lg-2 pt-lg-0' data-aos="zoom-in-down" data-aos-duration="2000">Audited by Omniscia</p>
                </div>
              </Col>
              <Col xl={6}>
                <img className='w-100 hero_img d-none d-md-block' data-aos="zoom-out-up" data-aos-duration="2000" src={hero} alt="" />
                <img className='w-100 hero_img d-md-none' data-aos="zoom-out-down" data-aos-duration="2000" src={robot} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
    </div>
  )
}

export default Myheader