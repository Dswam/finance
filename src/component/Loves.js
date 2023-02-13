import React, { useEffect, useRef, useState } from 'react'
import "../cssComponent/love.css"
import  dreamup from "../image/dreamup.png"
const Loves = () => {
    const [videoSource, setVideoSource] = useState(
        "https://savart.com/wp-content/themes/digitalnests/assets/videos/video-preview1.mp4"
      );
      const videoRef = useRef(null);
    
      useEffect(() => {
        const video = videoRef.current;
        if (video) {
          video.load();
        //   video.play();
        video.pause();
        }
      }, [videoSource]);
    
      const handleClick = video => {
        setVideoSource(video);
      };
    

    return (

        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-sm-12 love'>
                    <h3>Our clients love us!</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-8 col-sm-12 marries'>
                    <p>Savart marries cutting-edge AI technology with human ingenuity
                        for providing you with consistent out-performance.​</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-8 col-sm-12 vediostyle'>
                    {videoSource && (
                          <video controls ref={videoRef} className="vsStyle" autoplay="false">
                          <source src={videoSource} type="video/mp4" />
                        </video>
                    )}
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-8 col-sm-12 btnstyles'>
                    <button onClick={() => handleClick("https://savart.com/wp-content/themes/digitalnests/assets/videos/video-preview1.mp4")}>
                    <img id="client-image1" class="client-images" src="https://savart.com/wp-content/themes/digitalnests/assets/images/client1.png" style={{border: "none",marginRight: '10px'}}/>
                    </button>
                    <button onClick={() => handleClick("https://savart.com/wp-content/themes/digitalnests/assets/videos/video-preview2.mp4")}>
                    <img id="client-image1" class="client-images" src="https://savart.com/wp-content/themes/digitalnests/assets/images/client2.png" style={{border: "none",marginRight: '10px'}}/>
                        
                    </button>
                    <button onClick={() => handleClick("https://savart.com/wp-content/themes/digitalnests/assets/videos/video-preview3.mp4")}>
                    <img id="client-image1" class="client-images" src="https://savart.com/wp-content/themes/digitalnests/assets/images/client3.png" style={{border: "none",marginRight: '10px'}}/>
                        
                    </button>
                    <button onClick={() => handleClick("https://savart.com/wp-content/themes/digitalnests/assets/videos/video-preview4.mp4")}>
                    <img id="client-image1" class="client-images" src="https://savart.com/wp-content/themes/digitalnests/assets/images/client4.png" style={{border: "none",marginRight: '10px'}}/>
                    </button>
                    <button onClick={() => handleClick("https://savart.com/wp-content/themes/digitalnests/assets/videos/video-preview5.mp4")}>
                    <img id="client-image1" class="client-images" src="https://savart.com/wp-content/themes/digitalnests/assets/images/client5.png" style={{border: "none",marginRight: '10px'}}/>
                        
                    </button>
                    <button onClick={() => handleClick("https://savart.com/wp-content/themes/digitalnests/assets/videos/video-preview6.mp4")}>
                    <img id="client-image1" class="client-images" src="https://savart.com/wp-content/themes/digitalnests/assets/images/client6.png" style={{border: "none",marginRight: '10px'}}/>
                        
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 col-sm-12 dreamup'>
                    <img src={dreamup} alt=""/>
                    <h3>DREAM UP</h3>
                    <h3>Convert your financial dreams into reality.</h3>
                </div>
            </div>
        </div>
    )
}

export default Loves