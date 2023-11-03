import React from 'react'
import { Container } from 'react-bootstrap'

const Total = () => {
  return (
    <div className='bcg_total pb-5 pt-lg-5'>
        <Container className='my_container pb-5 pt-5'>
            <div className='text-center'>
                <h2 className=' fs_52 ff_Jakarta fw_700 text-white' data-aos="zoom-in">170k Total Starting Supply</h2>
                <p className=' ff_Raleway fs_16 fw_500 text-white pt-3 pt-md-0' data-aos="zoom-out">Initial BONDing Offering (IBO)* Phases</p>
            </div>
            <div className=' overflow-x-scroll scroll_bttn pt-5'>
              <div className='overflow_sm_table'>
                       <div data-aos="zoom-in-up">
            <div className=' d-flex justify-content-between align-items-center'>
                <p className=' ff_Raleway fs_18 fw_400 text-white txt_total'>Round 1</p>
                <p className=' ff_Raleway fs_20 fw_500 text-white txt_total'>10,000 EEFI Bonds</p>
                <p className=' ff_Raleway fs_18 fw_400 text-white txt_total'>@ <span className=' fs_38 ff_Raleway fw_400 text-white'>$12</span></p>
            </div>
            <p className='line_bottom mt-3'></p>
            <p className=' ff_Jakarta fs_16 fw_400 text-white justify-content-end d-flex pt-2 fst-italic txt_total'>Vested (locked) for 1 Year</p>
                    </div>
                    <div data-aos="zoom-in-down">
            <div className=' d-flex justify-content-between align-items-center mt-4'>
                <p className=' ff_Raleway fs_18 fw_400 text-white txt_total'>Round 2</p>
                <p className=' ff_Raleway fs_20 fw_500 text-white txt_total'>12,777 EEFI Bonds</p>
                <p className=' ff_Raleway fs_18 fw_400 text-white txt_total'>@ <span className=' fs_38 ff_Raleway fw_400 text-white'>$18</span></p>
            </div>
            <p className='line_bottom mt-3'></p>
            <p className=' ff_Jakarta fs_16 fw_400 text-white justify-content-end d-flex pt-2 fst-italic txt_total'>Vested (locked) for six months</p>
                    </div>
                    <div>
                     <div className=' d-flex justify-content-between align-items-center mt-4' data-aos="zoom-in-left">
                <p className=' ff_Raleway fs_18 fw_400 text-white txt_total'>Round 3</p>
                <p className=' ff_Raleway fs_20 fw_500 text-white txt_total'>25,000 EEFI Bonds</p>
                <p className=' ff_Raleway fs_18 fw_400 text-white txt_total'>@ <span className=' fs_38 ff_Raleway fw_400 text-white'>$26</span></p>
                      </div>
                  <p className='line_bottom mt-3' data-aos="zoom-in-right"></p>
                 <p className=' ff_Jakarta fs_16 fw_400 text-white justify-content-end d-flex pt-2 fst-italic txt_total' data-aos="zoom-out">No vesting or lock up periods. Available at launch.</p>
                     </div>
               </div>
            </div>
            <div className=' text-center mt-5 pt-5'>
                <p className=' ff_Raleway fs_20 fw_400 text-white text-decoration-underline pb-2 txt_total' data-aos="zoom-out-up">(47,777 or around   <span className='mx-2 fs_36 text-decoration-underline'>28%</span>  of total starting supply is up for IBO)</p>
                <p className='txt_clr_7 ff_Raleway fs_14 fw_400' data-aos="zoom-out-down txt_total">Individuals who hold $EEFI will also receive an airdrop of the protocol's <span className=' d-md-block'>governance token $EFT <span className='fs_12'> ...learn more</span></span></p>
            </div>
        </Container>
    </div>
  )
}

export default Total