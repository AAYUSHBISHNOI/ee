import React from 'react'
import { Container } from 'react-bootstrap'
import cloud from "../assets/img/Clouds.png";
import bull from "../assets/img/bullbear.png";



const Amplify = () => {
  
  return (
    <div className='position-relative mt-md-5 pt-md-5 pt-lg-0 mt-lg-0' id='Ibo'>
    <div className='bcg_section_2'>
      <div className='text-center py-3  d-none d-md-block'>
      <h2 className=' ff_Jakarta fs_52 fw_800 text-white ' data-aos="zoom-in-up" >Amplify and <span className='text-uppercase'>stretch gains</span></h2>
      </div>
      <Container className='my_container d-flex flex-column justify-content-center min-100'>
        <p className='text-center fs_14 fw_400 text-white ff_Raleway d-none d-md-block' data-aos="zoom-in-down" >We take a different balanced approach to finding and creating yield opportunities in <span className='d-lg-block'>the everchanging crypto market. Our yield strategies help users stay protected and</span><span className='d-lg-block'> hedged during bear markets and amplify yield during bull markets without resorting</span><span className='d-lg-block'> to leverage or other dangerous techniques.</span></p>
      </Container>
      <div className=' d-md-none'>
        <div className='bg-black w-100 pt-2 pb-0 text-center'>
        <h2 className='ff_machina fs_28 fw_800 text-white pt-sm-2'>Amplify and <span className='text-uppercase'>stretch gains</span></h2>
        </div>
      <img className='w-100' src={bull} alt="" />
      </div>
      <div className='bg-black w-100 pt-3 px-2 pb-5 d-md-none'>
      <p className='text-center fs_14 fw_400 text-white ff_Raleway'>We take a different balanced approach to finding and creating yield opportunities in <span className='d-lg-block'>the everchanging crypto market. Our yield strategies help users stay protected and</span><span className='d-lg-block'> hedged during bear markets and amplify yield during bull markets without resorting to leverage or other dangerous </span><span className='d-block'>techniques.</span></p>
      </div>
      <img className='w-100 img_cloud'  src={cloud} alt="" />
    </div>
    </div>
  )
}

export default Amplify