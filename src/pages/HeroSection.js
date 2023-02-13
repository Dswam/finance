import React from 'react'
import "../cssComponent/Herosection.css"
import banner from "../image/banner-2.jpg"
import header from "../image/header-image.png"
const HeroSection = () => {
  return (
    <div className='site-banner banner-images'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'></div>
          <div className='col-lg-6 image-header'>
            <img src={header} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection