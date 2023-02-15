import React, { useEffect, useRef, useState } from 'react'
import "../cssComponent/media.css"
import yourstory from '../image/your-story.png'
import img2 from '../image/way2news.png'
import img3 from '../image/ind-stp.png'
import img4 from '../image/tedx.png'
import img5 from '../image/biz-std.png'
import subscribe from '../image/subscribe.png'
const Media = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <div className='container mediabody'>
            <div className='row'>
                <div className='col-lg 12 col-sm-12 mediacol'>
                    <h3>
                        Savart in media
                    </h3>
                </div>
            </div>
            <div className='row  ' style={{ justifyContent: "center", marginTop: '2rem' }}>
                <div className='col-lg-2 col-sm-12 '>
                    <img src={yourstory} alt="" />
                </div>
                <div className='col-lg-2 col-sm-12'>
                    <img src={img2} alt="" />
                </div>
                <div className='col-lg-2 col-sm-12'>
                    <img src={img3} alt="" />
                </div>
                <div className='col-lg-2 col-sm-12'>
                    <img src={img4} alt="" />
                </div>
                <div className='col-lg-2 col-sm-6'>
                    <img src={img5} alt="" />
                </div>
            </div>
            <div className='row subscribeheader'>
                <div className='col-lg-12 col-sm-12 subscribe'>
                    <img src={subscribe} alt="" />
                    <p>Avail limited offer on all of our Wealth Builder Services Subscribe just for ₹6499 ₹9999 for One Year and ₹14,999 ₹29,999 for Three Years</p>
                    <div className='btns' onClick={handleButtonClick}>*Taxes extra as applicable, View more details</div>
                    {showPopup && (
                        <div className="popup">
                            <div className="popup-content">
                                <strong>Our Subscription plan will help you realize your financial dreams</strong>
                                <ul>
                                    <li>24 investment advices per year from our AI system</li>
                                    <li>Goal-based wealth planning</li>
                                    <li>Customize your investments based on personal beliefs</li>
                                    <li>4 security reviews from your personal (non-Savart) portfolio</li>
                                    <li>Advice on high-performance stocks, mutual funds and bonds</li>
                                    <li>Ability to invest in India, USA and Canadian markets</li>
                                    <li>Phone/Email/Chat support</li>
                                </ul>
                                <button onClick={handlePopupClose}>Close</button>
                            </div>
                        </div>
                    )}
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Media