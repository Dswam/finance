import React from 'react'
import "../cssComponent/footer.css"
const Footer = () => {
    return (

        <div className='container-fluid footerbacck'>
            <div className='row footerrow'>
                <div className='col-lg-4 col-sm-12 footercol1 '>
                    <img src="https://savart.com/wp-content/themes/digitalnests/assets/images/footer-logo.png" alt="" />
                    <p>Our intelligent research systems ensure you
                        receive the best investment advice, whether the
                        investment is a rupee or a million. Know more</p>
                    <h3>Subscribe to our Savart Newsletter</h3>
                    <input type="text" />
                    <button>Submit</button>
                </div>
                <div className='col-lg-4 col-sm-12 footercol2' >
                    <h3>
                        Quick Links</h3>
                    <p>FAQ</p>
                    <p>Blog</p>
                    <p>Contact Info & Locations</p>
                    <p>APART</p>
                </div>
                <div className='col-lg-4 col-sm-12 footercol3'>
                    <h3>Connect with Us</h3>
                    <div>
                    <img src="https://savart.com/wp-content/themes/digitalnests/assets/images/facebook.png" alt="" />
                    </div>
                    <div><img src="https://savart.com/wp-content/themes/digitalnests/assets/images/instagram.png" alt="" /></div>
                    <div><img src="https://savart.com/wp-content/themes/digitalnests/assets/images/youtube.png" alt="" /></div>
                    <div><img src="https://savart.com/wp-content/themes/digitalnests/assets/images/instagram.png" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer