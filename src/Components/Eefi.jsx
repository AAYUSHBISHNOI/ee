import React from 'react'

import { Afive, Afour, Asix, Athree, Atwo } from './Mysvg';

const Eefi = () => {
  return (
    <div className=''>
      <div className='d-lg-flex'>
        <div className='my_width pt-lg-5 mt-5 pb-5 mb-lg-5 bcg_graph'>
        <div className='custom-width mx-auto mt-lg-5 mb-5 pt-4'>
            <h2 className='fs_46 fw_700 ff_machina text-black' data-aos="zoom-in" data-aos-duration="2000">EEFI Tokenomics</h2>
            <p className='font_16 fw_400 ff_Raleway text-black pt-1 pb-4' data-aos="zoom-in-up" data-aos-duration="2000">EEFI is the special rewards token of the protocol that is <span className='d-lg-block'>minted and distributed in a decentralized fashion. It</span><span className='d-lg-block'> produces amplified yield during uptrends and protects from</span><span className='d-lg-block'>downside action during downtrends.</span></p>
            <button className='fs_16 fw_500 ff_Raleway text-white bttn_view' data-aos="zoom-in-down" data-aos-duration="2000">View Contract Address</button>
            <p className='fs_24 fw_700 ff_machina text-black pt-lg-5 pt-3' data-aos="zoom-in-left" data-aos-duration="2000">IBO TOKENOMICS</p>
            <p className='fs_18 fw_700 ff_Raleway text-black pt-3' data-aos="zoom-in-right" data-aos-duration="2000">IBO Round 1 Price</p>
            <p className='fs_16 fw_600 ff_Raleway txt_clr_6 pt-2' data-aos="zoom-out" data-aos-duration="2000">1 EEFI = $12</p>
            <p className='fs_18 fw_700 ff_Raleway text-black pt-3' data-aos="zoom-out-up" data-aos-duration="2000">IBO Round 2 Price</p>
            <p className='fs_16 fw_600 ff_Raleway txt_clr_6 pt-2' data-aos="zoom-out-down" data-aos-duration="2000">1 EEFI = $18</p>
            <p className='fs_18 fw_700 ff_Raleway text-black pt-3' data-aos="zoom-out-right" data-aos-duration="2000">IBO Round 3 Price</p>
            <p className='fs_16 fw_600 ff_Raleway txt_clr_6 pt-2' data-aos="zoom-out-left" data-aos-duration="2000">1 EEFI = $26</p>
            <p className='fs_18 fw_700 ff_Raleway text-black pt-3' data-aos="zoom-in-down" data-aos-duration="2000">TOTAL SUPPLY</p>
            <p className='fs_16 fw_600 ff_Raleway text-black pt-2' data-aos="zoom-in-left" data-aos-duration="2000">170,000</p>
        </div>
        </div>
        <div className='col_gradieant my_width pt-5 '>
          <div className=' pt-3 pt-lg-5 mt-lg-5 pb-5 pb-lg-0 bcg_graph custom-width-1'>
            <div className='mt-lg-4 ms-sm-2 ms-md-5 ms-lg-4  pb-3 pb-lg-0'>
                <div className='d-flex align-items-center' data-aos="fade-up" data-aos-duration="2000">
                  <Atwo/>
                  <div>
                    <p className='fs_24 fw_700 ff_machina text-white'>Decentralized Yield</p>
                    <p className='fonts_16 ff_Raleway fw_400 txt_clr_8'>Protocol’s native utility | rewards token</p>
                  </div>
                </div>
                <div className='d-flex align-items-center' data-aos="fade-down" data-aos-duration="2000">
                  <Athree/>
                  <div>
                    <p className='fs_24 fw_700 ff_machina text-white'>Extra Value</p>
                    <p className='fonts_16 ff_Raleway fw_400 txt_clr_8'>Can be highly deflationary during market uptrends</p>
                  </div>
                </div>
                <div className='d-flex align-items-center' data-aos="fade-right" data-aos-duration="2000">
                  <Afour/>
                  <div>
                    <p className='fs_24 fw_700 ff_machina text-white'>Smart Index</p>
                    <p className='fonts_16 ff_Raleway fw_400 txt_clr_8'>Token can be viewed as an index of all strategy <span className='d-block'>performance on the protocol</span></p>
                  </div>
                </div>
                <div className='d-flex align-items-center' data-aos="fade-left" data-aos-duration="2000">
                  <Afive/>
                  <div>
                    <p className='fs_24 fw_700 ff_machina text-white'>Social Coordination (E,E)</p>
                    <p className='fonts_16 ff_Raleway fw_400 txt_clr_8'>Promotes hyper social coordination around all <span className='d-block'>strategies on the protocol (E,E) ( makes hedging fun and</span><span className='d-block'> working together produces more benefits to all vault</span><span className='d-block'>users )</span></p>
                  </div>
                </div>
                <div className='d-flex align-items-center' data-aos="fade-up-right" data-aos-duration="2000">
                  <Asix/>
                  <div>
                    <p className='fs_24 fw_700 ff_machina text-white'>Expansive Utility Dimensions</p>
                    <p className='fonts_16 ff_Raleway fw_400 txt_clr_8'>EEFI’s utility will expand as more strategies are <span className='d-block'>added to the protocol.</span></p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eefi