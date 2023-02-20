import React, { useEffect, useState } from 'react'
import "../cssComponent/Herosection.css"
import header from "../image/header-image.png"
const texts = ["Smart Investment", "Customized Investment"];
const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    // Set the interval to 2 seconds (2000 milliseconds)
    const intervalId = setInterval(() => {
      // Update the state variable to display the next text in the array
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts.length]);
  return (
    <div className='site-banner banner-images'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 texts'>
            <h1>Make&nbsp;{texts[currentTextIndex]}</h1>
            <p>
              Build long-term wealth with our AI-based advisory services.</p>
              <button>Start Investing</button>
          </div>
          <div className='col-lg-6 image-header'>
            <img src={header} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection