import React from 'react'
import HeroSection from '../pages/HeroSection'
import "../cssComponent/prod.css"
import { NavLink } from 'react-router-dom'

const prod = [


  {
    img: "https://zerodha.com/static/images/products-kite.png",
    title: "Kite",
    des: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    gapy: "https://zerodha.com/static/images/google-play-badge.svg",
    ios: "https://zerodha.com/static/images/appstore-badge.svg"

  },
  {
    img: "https://zerodha.com/static/images/products-console.png",
    title: "Console",
    des: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisation"
  },
  {
    img: "https://zerodha.com/static/images/products-coin.png",
    title: "Coin",
    des: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
    gapy: "https://zerodha.com/static/images/google-play-badge.svg",
    ios: "https://zerodha.com/static/images/appstore-badge.svg"

  },
  {
    img: "https://zerodha.com/static/images/products-kiteconnect.png",
    title: "Kite Connect API",
    des: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
  },
  {
    img: "https://zerodha.com/static/images/varsity-products.png",
    title: "Varsity mobile",
    des: "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
    gapy: "https://zerodha.com/static/images/google-play-badge.svg",
    ios: "https://zerodha.com/static/images/appstore-badge.svg"



  }
]
const Login = () => {
  return (
    <>
      <HeroSection />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 prodcol1'>
            <h1>Technology</h1>
            <p>Sleek, modern, and intuitive trading platforms</p>
            <p>Check out our <NavLink to='/investment'>investment offerings →</NavLink> </p>
          </div>
          <hr />
        </div>
        <div className='row prodrow1'>
          {prod.map((val, index) => {
            return (
              <div className='col-lg-10 prodcol3'>
                <div className='prodcol3'>
                  {index % 2 === 0 ? (
                    <>
                      <img src={val.img} alt={val.title} />
                      <div className='innercol3'>
                        <h3>{val.title}</h3>
                        <p>{val.des}</p>
                        {val.gapy && <img src={val.gapy} alt="" />}
                        {val.ios && <img src={val.ios} alt="" />}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='prodcol4'>
                        <h3>{val.title}</h3>
                        <p>{val.des}</p>
                        {val.gapy && <img src={val.gapy} alt="" />}
                        {val.ios && <img src={val.ios} alt="" />}
                      </div>
                      <img src={val.img} alt={val.title} />
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        <div className='row'>
          <div className='col-1g-12 col-sm-12 prodcol7'>
         <p>Want to know more about our technology stack? Check out the<NavLink to="/blog"> Zerodha.tech </NavLink> blog.</p> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
