import React from 'react'
import { Container } from 'react-bootstrap'
import logo from "../assets/img/footer_logo.png";
import { Au, Discord, Gallery, Git, Mail, Mm, Pdf, X, Youtube } from './Mysvg';

const Myfooter = () => {
  return (
    <div>
        <Container className='my_container'>
            <div className='text-center mt-5 pt-md-5 pt-3'>
                <img src={logo} alt="" />
                <p className='txt_clr_6 ff_Raleway fs_16 fw_400 pt-1'>Join Our Community</p>
                <div className='d-md-flex align-items-center pt-3 justify-content-center'>
                    <div className='d-flex align-items-center justify-content-center'>
                    <p className='txt_clr_9 ff_Raleway fs_16 fw_400' data-aos="zoom-out" data-aos-duration="3000">About</p>
                    <p className='txt_clr_9 ff_Raleway fs_16 fw_400 mx-3 mx-md5' data-aos="zoom-out-up" data-aos-duration="3000">IBO Event</p>
                    <p className='txt_clr_9 ff_Raleway fs_16 fw_400' data-aos="zoom-out-down" data-aos-duration="3000">EEFI Tokenomics</p>
                    <p className='txt_clr_9 ff_Raleway fs_16 fw_400 mx-3 mx-md-5' data-aos="zoom-out-right" data-aos-duration="3000">Team</p>
                    </div>
                   <div className='d-flex align-items-center justify-content-center'>
                   <p className='txt_clr_9 ff_Raleway fs_16 fw_400' data-aos="zoom-out-left" data-aos-duration="3000">Roadmap</p>
                    <p className='txt_clr_9 ff_Raleway fs_16 fw_400 mx-3 mx-md-5' data-aos="zoom-in-right" data-aos-duration="3000">Partners</p>
                    <p className='txt_clr_9 ff_Raleway fs_16 fw_400' data-aos="zoom-in-left" data-aos-duration="3000">Contact Us</p>
                   </div>
                </div>
                <div className='d-md-flex justify-content-center pt-4 pb-5 mb-3'>
                    <div>
                        <Youtube/>
                        <Git/>
                        <X/>
                        <Au/>
                        <Discord/>
                        <Mm/>
                    </div>
                    <div className='mt-3 mt-md-0'>
                        <Mail/>
                        <Gallery/>
                        <Pdf/>
                    </div>
                </div>
            </div>
        </Container>
        <div className='foter_line'>
                <Container className=' my_container'>
                    <div className='d-flex justify-content-between align-items-center pt-3'>
                    <p className='txt_clr_10 ff_Raleway fs_14 fw_400'>@Copyright 2023</p>
                    <p className='txt_clr_10 ff_Raleway fs_14 fw_400'>Privacy policy</p>
                    </div>
                </Container>
            </div>
    </div>
  )
}

export default Myfooter