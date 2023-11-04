import React from 'react'
import { Container } from 'react-bootstrap'
import logo from "../assets/img/footer_logo.png";
import { Au, Discord, Gallery, Git, Mail, Mm, Pdf, X, Youtube } from './Mysvg';

const Myfooter = () => {
  return (
    <div>
        <Container className='my_container'>
            <div className='text-center mt-5 pt-md-5 pt-3'>
                <a href=""><img src={logo} alt="" /></a>
                <div><a href="https://icodrops.com/efinity/" className='txt_clr_6 ff_Raleway fs_16 fw_400 pt-1'>Join Our Community</a></div>

                <div className='d-md-flex align-items-center pt-3 justify-content-center'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <a href="https://www.efi.com/about-efi/" className='txt_clr_9 ff_Raleway fs_16 fw_400'>About</a>
                        <a href="https://newdocs.eefi.finance/docs/protocol-basics/eefi_tokenomics/" className='txt_clr_9 ff_Raleway fs_16 fw_400 mx-4'>IBO Event</a>
                        <a href="https://www.coingecko.com/en/coins/efinity-token/tokenomics" className='txt_clr_9 ff_Raleway fs_16 fw_400'>EEFI Tokenomics</a>
                        <a href="https://www.efi.com/about-efi/leadership/leadership-team/" className='txt_clr_9 ff_Raleway fs_16 fw_400 mx-4'>Team</a>
                    </div>
                   <div className='d-flex align-items-center justify-content-center'>
                    <a href="https://issuu.com/cpublish/docs/july_pia_print_awards_issue/s/12892783" className='txt_clr_9 ff_Raleway fs_16 fw_400'>Roadmap</a>
                    <a href="https://www.efi.com/about-efi/partners/" className='txt_clr_9 ff_Raleway fs_16 fw_400 mx-4'>Partners</a>
                    <a href="https://www.efi.com/about-efi/contact-us/" className='txt_clr_9 ff_Raleway fs_16 fw_400'>Contact Us</a>
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
                <Container className=' '>
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