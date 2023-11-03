import React from 'react'
import { Col, Container } from 'react-bootstrap'

const Myform = () => {
  return (
    <div className='bcg_form pb-5 d-none d-lg-block d-flex justify-content-center'>
        <Container className=' my_container pb-5 pt-md-5'>
            <div className=' text-center pt-5 pb-3'>
                <h2 className=' ff_machina fs_46 fw_700 text-white' data-aos="fade-up" data-aos-duration="3000">Contact Us</h2>
                <p className='txt_clr_8 ff_Raleway fs_16 fw_400 pt-1' data-aos="fade-down" data-aos-duration="3000">Have a question or want to contribute? Reach out to us.</p>
            </div>
        <Col lg={12} className='pt-5 d-flex justify-content-center flex-column '>
            <div className=' d-flex justify-content-center flex-column'>
                 <div className=' d-flex justify-content-between' data-aos="fade-right" data-aos-duration="3000">
                <input className='txt_tnpt' type="text" placeholder='First Name' />
                <input className='txt_tnpt_1' type="text" placeholder='Last Name' />
                    </div>
                    <div  className=' d-flex justify-content-between pt-3' data-aos="fade-left" data-aos-duration="3000">
                <input className='txt_tnpt' type="email"  placeholder='Email'/>
                <input className='txt_tnpt_1' type="number" placeholder='Phone Number' />
                    </div>
                 <textarea className='text-area' placeholder='Message' data-aos="zoom-in" data-aos-duration="300"></textarea>
                 <div className=' d-flex justify-content-center pt-md-5 pt-3 mt-3' data-aos="zoom-out" data-aos-duration="3000">
                     <button className=' ff_Raleway fs_20 fw_500 text-white bttn_sub'>SUBMIT'</button>
                 </div>
            </div>
        </Col>
        </Container>
    </div>
  )
}

export default Myform