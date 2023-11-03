import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import { Aone, Iyi } from './Mysvg';

const Sampl = () => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,      
        };
  return (
    <div className='bcg_section_3 position-relative pb-5 pt-lg-5'>
        <Container className='pb-lg-5 pb-4 pt-4 pt-lg-5 my_container'>
            <div className='text-center pt-5'>
                <h2 className='fs_46 fw_700 ff_machina text-white' data-aos="fade-up" data-aos-duration="2000">Core Strategies</h2>
                <p className='txt_clr_1 fs_16 fw_400 ff_Raleway pt-3' data-aos="fade-down" data-aos-duration="2000">Our initial strategies use powerful burgeoning trends like Real Yield, Rebase, and others to generate cutting-<span className='d-lg-block'>edged yield innovations. These yield strategies stretch beyond the drought in stable coins and set the value for</span><span className='d-lg-block'>our native protocol token $EEFI. Check them out!'</span></p>
            </div>
              <Slider {...settings}>
            <Row className='align-items-center pt-5 justify-content-center d-flex mb-5'>
          <Col md={6} xl={4} className=' d-flex justify-content-center' data-aos="fade-right" data-aos-duration="2000">
                    <div className='card_1'>
                        <div>
                            <button className='bttn_in ff_Raleway fs_14 fw_400 text-white'>Innovation</button>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                        <Aone/>
                        </div>
                        <div className='d-flex align-items-center justify-content-between pt-2'>
                            <p className='txt_clr_3 fs_16 fw_400 ff_Raleway'>Projected Yield (APY)</p>
                            <p className='fs_16 fw_700 txt_clr_4 ff_Inter'>7,777,777%</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between pt-3'>
                            <p className='txt_clr_5 fs_16 fw_400 ff_Raleway'>Current Deposits</p>
                            <p className='fs_16 fw_500 text-white ff_Inter'>0.00 AMPL</p>
                        </div>
                        <div className='line_2 mt-3'></div>
                          <div className='d-flex align-items-center justify-content-between pt-4'>
                            <p className='txt_clr_5 fs_16 fw_400 ff_Raleway'>Max Capacity</p>
                            <p className='fs_16 fw_500 text-white ff_Inter'>0.00 AMPL</p>
                        </div>
                    </div>
            </Col>
            <Col md={1}></Col>
            <Col md={12} xl={5} className='pt-4' data-aos="fade-left" data-aos-duration="2000">
                    <h2 className='fs_38 fw_400 ff_machina text-white'>Elastic Vault</h2>
                    <div className='d-flex align-items-center'>
                    <p className='fs_22 fw_500 ff_Raleway text-white me-2'>Deposit Token</p>
                    <Iyi/>
                    </div>
                    <p className='fs_16 fw_400 ff_Raleway txt_clr_2'> $AMPL</p>                  
                    <p className='fs_22 fw_500 ff_Raleway text-white'>Flagship Hedging Strategy</p>
                    <div className=' d-none d-xl-block'>
                    <p className='txt_clr_2 fs_16 fw_400 ff_Raleway'>This one-of-a-kind strategy combines the benefits of <span className='d-lg-block'>Rebase’s force multiplier effect and Real Yield’s</span> <span className='d-lg-block'>sustainability.</span></p>
                    <p className='txt_clr_2 fs_16 fw_400 ff_Raleway'>Helps users to protect against downtrends and amplify <span className='d-lg-block'>yield rewards during market up trends.</span></p>
                    </div>
                    <div className=' d-xl-none'>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s <span className='d-block'>sustainability.</span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>1. Initially utilizes both OG rebase tokens $AMPL and $OHM.  <span className='d-block'><span className='font_18 mb-5 ms-3'>.</span> Deposit $AMPL and receive $EEFI and $OHM rewards; </span> <span className='d-block'><span className='font_18 mb-5 ms-3'>.</span> Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, <span className='d-block ms-4'>$EEFI is automatically purchased and burned daily; when AMPL supply is stable or </span> <span className='d-block ms-4'>contracting, $EEFI is minted (learn more)</span></span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>2. Potentially any token can be rebase-enabled and added to this strategy (subject to <span className='d-block ms-4'>governance)</span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage<span className='d-block ms-4'>of sub-trends and viral movements within crypto)</span></p>
                    </div>
            </Col>
            </Row>
            <Row className='align-items-center pt-5 justify-content-center d-flex mb-5'>
            <Col md={6} xl={4} className=' d-flex justify-content-center' data-aos="fade-up-right" data-aos-duration="2000">
                    <div className='card_1'>
                        <div>
                            <button className='bttn_in ff_Raleway fs_14 fw_400 text-white'>Innovation</button>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                        <Aone/>
                        </div>
                        <div className='d-flex align-items-center justify-content-between pt-2'>
                            <p className='txt_clr_3 fs_16 fw_400 ff_Raleway'>Projected Yield (APY)</p>
                            <p className='fs_16 fw_700 txt_clr_4 ff_Inter'>7,777,777%</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between pt-3'>
                            <p className='txt_clr_5 fs_16 fw_400 ff_Raleway'>Current Deposits</p>
                            <p className='fs_16 fw_500 text-white ff_Inter'>0.00 AMPL</p>
                        </div>
                        <div className='line_2 mt-3'></div>
                          <div className='d-flex align-items-center justify-content-between pt-4'>
                            <p className='txt_clr_5 fs_16 fw_400 ff_Raleway'>Max Capacity</p>
                            <p className='fs_16 fw_500 text-white ff_Inter'>0.00 AMPL</p>
                        </div>
                    </div>
            </Col>
            <Col md={1}></Col>
            <Col md={12} xl={5} className='pt-4' data-aos="fade-up-left" data-aos-duration="2000">
                    <h2 className='fs_38 fw_400 ff_machina text-white'>Elastic Vault</h2>
                    <div className='d-flex align-items-center'>
                    <p className='fs_22 fw_500 ff_Raleway text-white me-2'>Deposit Token</p>
                    <Iyi/>
                    </div>
                    <p className='fs_16 fw_400 ff_Raleway txt_clr_2'> $AMPL</p>                  
                    <p className='fs_22 fw_500 ff_Raleway text-white'>Flagship Hedging Strategy</p>
                   <div className=' d-none d-xl-block'>
                   <p className='txt_clr_2 fs_16 fw_400 ff_Raleway'>This one-of-a-kind strategy combines the benefits of <span className='d-lg-block'>Rebase’s force multiplier effect and Real Yield’s</span> <span className='d-lg-block'>sustainability.</span></p>
                    <p className='txt_clr_2 fs_16 fw_400 ff_Raleway'>Helps users to protect against downtrends and amplify <span className='d-lg-block'>yield rewards during market up trends.</span></p>
                   </div>
                   <div className=' d-xl-none'>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s <span className='d-block'>sustainability.</span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>1. Initially utilizes both OG rebase tokens $AMPL and $OHM.  <span className='d-block'><span className='font_18 mb-5 ms-3'>.</span> Deposit $AMPL and receive $EEFI and $OHM rewards; </span> <span className='d-block'><span className='font_18 mb-5 ms-3'>.</span> Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, <span className='d-block ms-4'>$EEFI is automatically purchased and burned daily; when AMPL supply is stable or </span> <span className='d-block ms-4'>contracting, $EEFI is minted (learn more)</span></span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>2. Potentially any token can be rebase-enabled and added to this strategy (subject to <span className='d-block ms-4'>governance)</span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage<span className='d-block ms-4'>of sub-trends and viral movements within crypto)</span></p>
                    </div>
            </Col>
            </Row>
            <Row className='align-items-center pt-5 justify-content-center d-flex mb-5'>
            <Col md={6} xl={4} className=' d-flex justify-content-center' data-aos="fade-down-left" data-aos-duration="2000">
                    <div className='card_1'>
                        <div>
                            <button className='bttn_in ff_Raleway fs_14 fw_400 text-white'>Innovation</button>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                        <Aone/>
                        </div>
                        <div className='d-flex align-items-center justify-content-between pt-2'>
                            <p className='txt_clr_3 fs_16 fw_400 ff_Raleway'>Projected Yield (APY)</p>
                            <p className='fs_16 fw_700 txt_clr_4 ff_Inter'>7,777,777%</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between pt-3'>
                            <p className='txt_clr_5 fs_16 fw_400 ff_Raleway'>Current Deposits</p>
                            <p className='fs_16 fw_500 text-white ff_Inter'>0.00 AMPL</p>
                        </div>
                        <div className='line_2 mt-3'></div>
                          <div className='d-flex align-items-center justify-content-between pt-4'>
                            <p className='txt_clr_5 fs_16 fw_400 ff_Raleway'>Max Capacity</p>
                            <p className='fs_16 fw_500 text-white ff_Inter'>0.00 AMPL</p>
                        </div>
                    </div>
            </Col>
            <Col md={1}></Col>
            <Col md={12} xl={5} className='pt-4' data-aos="fade-down-right" data-aos-duration="2000">
                    <h2 className='fs_38 fw_400 ff_machina text-white'>Elastic Vault</h2>
                    <div className='d-flex align-items-center'>
                    <p className='fs_22 fw_500 ff_Raleway text-white me-2'>Deposit Token</p>
                    <Iyi/>
                    </div>
                    <p className='fs_16 fw_400 ff_Raleway txt_clr_2'> $AMPL</p>                  
                    <p className='fs_22 fw_500 ff_Raleway text-white'>Flagship Hedging Strategy</p>
                  <div className=' d-none d-xl-block'>
                  <p className='txt_clr_2 fs_16 fw_400 ff_Raleway'>This one-of-a-kind strategy combines the benefits of <span className='d-lg-block'>Rebase’s force multiplier effect and Real Yield’s</span> <span className='d-lg-block'>sustainability.</span></p>
                    <p className='txt_clr_2 fs_16 fw_400 ff_Raleway'>Helps users to protect against downtrends and amplify <span className='d-lg-block'>yield rewards during market up trends.</span></p>
                  </div>
                  <div className=' d-xl-none'>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s <span className='d-block'>sustainability.</span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>1. Initially utilizes both OG rebase tokens $AMPL and $OHM.  <span className='d-block'><span className='font_18 mb-5 ms-3'>.</span> Deposit $AMPL and receive $EEFI and $OHM rewards; </span> <span className='d-block'><span className='font_18 mb-5 ms-3'>.</span> Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, <span className='d-block ms-4'>$EEFI is automatically purchased and burned daily; when AMPL supply is stable or </span> <span className='d-block ms-4'>contracting, $EEFI is minted (learn more)</span></span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>2. Potentially any token can be rebase-enabled and added to this strategy (subject to <span className='d-block ms-4'>governance)</span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage<span className='d-block ms-4'>of sub-trends and viral movements within crypto)</span></p>
                    </div>
            </Col>
            </Row>
            <Row className='align-items-center pt-5 justify-content-center d-flex mb-5'>
            <Col md={6} xl={4} className=' d-flex justify-content-center' data-aos="fade-up-left    " data-aos-duration="2000">
                    <div className='card_1'>
                        <div>
                            <button className='bttn_in ff_Raleway fs_14 fw_400 text-white'>Innovation</button>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                        <Aone/>
                        </div>
                        <div className='d-flex align-items-center justify-content-between pt-2'>
                            <p className='txt_clr_3 fs_16 fw_400 ff_Raleway'>Projected Yield (APY)</p>
                            <p className='fs_16 fw_700 txt_clr_4 ff_Inter'>7,777,777%</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between pt-3'>
                            <p className='txt_clr_5 fs_16 fw_400 ff_Raleway'>Current Deposits</p>
                            <p className='fs_16 fw_500 text-white ff_Inter'>0.00 AMPL</p>
                        </div>
                        <div className='line_2 mt-3'></div>
                          <div className='d-flex align-items-center justify-content-between pt-4'>
                            <p className='txt_clr_5 fs_16 fw_400 ff_Raleway'>Max Capacity</p>
                            <p className='fs_16 fw_500 text-white ff_Inter'>0.00 AMPL</p>
                        </div>
                    </div>
            </Col>
            <Col md={1}></Col>
            <Col md={12} xl={5} className='pt-4' data-aos="fade-up-right" data-aos-duration="2000">
                    <h2 className='fs_38 fw_400 ff_machina text-white'>Elastic Vault</h2>
                    <div className='d-flex align-items-center'>
                    <p className='fs_22 fw_500 ff_Raleway text-white me-2'>Deposit Token</p>
                    <Iyi/>
                    </div>
                    <p className='fs_16 fw_400 ff_Raleway txt_clr_2'> $AMPL</p>                  
                    <p className='fs_22 fw_500 ff_Raleway text-white'>Flagship Hedging Strategy</p>
                   <div className=' d-none d-xl-block'>
                   <p className='txt_clr_2 fs_16 fw_400 ff_Raleway'>This one-of-a-kind strategy combines the benefits of <span className='d-lg-block'>Rebase’s force multiplier effect and Real Yield’s</span> <span className='d-lg-block'>sustainability.</span></p>
                    <p className='txt_clr_2 fs_16 fw_400 ff_Raleway'>Helps users to protect against downtrends and amplify <span className='d-lg-block'>yield rewards during market up trends.</span></p>
                   </div>
                   <div className=' d-xl-none'>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s <span className='d-block'>sustainability.</span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>1. Initially utilizes both OG rebase tokens $AMPL and $OHM.  <span className='d-block'><span className='font_18 mb-5 ms-3'>.</span> Deposit $AMPL and receive $EEFI and $OHM rewards; </span> <span className='d-block'><span className='font_18 mb-5 ms-3'>.</span> Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, <span className='d-block ms-4'>$EEFI is automatically purchased and burned daily; when AMPL supply is stable or </span> <span className='d-block ms-4'>contracting, $EEFI is minted (learn more)</span></span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>2. Potentially any token can be rebase-enabled and added to this strategy (subject to <span className='d-block ms-4'>governance)</span></p>
                        <p className='txt_clr_1 ff_Raleway fs_16 fw_400 pt-3'>3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage<span className='d-block ms-4'>of sub-trends and viral movements within crypto)</span></p>
                    </div>
            </Col>
            </Row>
            </Slider>
        </Container>
    </div>
  )
}

export default Sampl