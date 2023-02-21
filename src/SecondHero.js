import React from 'react'
import "./cssComponent/secondhero.css"
import stocks from "./image/bull.png"
import mutual from "./image/mutual-funds.png"
import gold from "./image/gold.png"
import bonds from "./image/bonds.png"
import countries from "./image/countries.png"
import hand from "./image/hand.png"
import chart from "./image/chart-main.png"
import main from "./image/video-main-image.png"

const SecondHero = () => {
    return (

        <div className='container-fluid'>
            <div className='row secondHeroRow'>
                <div className='col-lg-2 col-sm-12  investment-advice'>
                    <p>Get Investment Advice For</p>
                </div>
                <div className='col-lg-6 col-sm-12  stocks-mutual-gold-bonds'>
                    <div className='  stocks-img'>
                        <img src={stocks} alt="" />
                        <p className="stocks">stocks</p>
                    </div>
                    <div className='stocks-img1'>
                        <img src={mutual} alt="" />
                        <p className="MutualFunds">Mutual Funds</p>
                    </div>
                    <div className='stocks-img2'>
                        <img src={gold} alt="" />
                        <p className="Gold">Gold</p>
                    </div>
                    <div className='stocks-img3'>
                        <img src={bonds} alt="" />
                        <p className="Bonds">Bonds</p>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-12 '>
                    <div className='country'>
                        <p>In India, USA and Canada</p>
                        <img src={countries} alt="" />
                    </div>
                </div>
                <div className='col-lg-10 col-sm-12 aiDriven'>
                    <p>Our AI-driven research helps you achieve superior returns in the market. </p>
                </div>
            </div>

            <div className='savartportfolio row'>
                <div className='col-lg-6 col-sm-12 '>
                    <div className='firstInnerContainer'>
                        <img src={hand} alt="" />
                        <div className='letter'>
                            <p className='percentage1'>24.71<span>%</span></p>
                            <p className='percentage2'>Savart portfolio CAGR since inception</p>
                            <p className='percentage3'>12.28%</p>
                            <p className='percentage4'>of NIFTY</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <div className='secondInnerContainer'>
                        <img src={chart} alt="" />
                    </div>
                </div>

            </div>
            <div className='row img3231'>
                <div className='col-lg-8 col-sm-12 making'>
                    We focus on making your money work hard for you, while you focus on living a full life.
                </div>
                <div className='col-lg-8 col-sm-12 money '>
                    <img src={main} alt="" className='imgmoney1' />
                    <video controls poster="https://savart.com/wp-content/themes/digitalnests/assets/images/Walkthrough-thumbnail.png" className="imgmoney2">
                        <source src="https://savart.com/wp-content/themes/digitalnests/assets/videos/walk-through.mp4" type="video/mp4"  className='vedioss'/>
                    </video>
                </div>
            </div>
        </div>

    )
}

export default SecondHero