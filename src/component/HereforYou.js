import React from 'react'
import "../cssComponent/Hereforu.css"
import downloadsavart from "../image/download-savart.png"
import apple from "../image/apple.png"
import android from "../image/google-play.png"
const HereforYou = () => {
    return (
        <div className='container for'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12  foru'>
                    <img src={downloadsavart} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 houu'>
                    <h3>Download the Savart App for an
                        awesome investment experience!</h3>
                    <p>Get the link to download the app</p>
                    <div className='innerhou'>
                        <p>Enter your email id</p>
                        <input type="email"/>
                        <button>Send app link</button>
                    </div>
                    <div className="mobilelink">
                       <img src={apple} alt="" className='apple'/>
                       <img src={android} alt="" className='android'/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HereforYou