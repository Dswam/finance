import React from 'react'
import "./cssComponent/Benits.css"
import benefits1 from "./image/benefits-1.png"
import benefits2 from "./image/benefits-2.png"
import benefits3 from "./image/benefits-3.png"
import benefits4 from "./image/benefits-4.png"
import start from "./image/start.png"
const Beneits = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8 col-sm-12 benithead'>
          <h2>Benefits</h2>
          <p>Smart investors are goal-oriented and take a long-term approach to building wealth.
            Savart brings the discipline of savvy investors,
            combined with the power of AI to deliver a high-performance investment experience for you.​</p>
        </div>
      </div>
      <div className='row rwbenefits'>
        <div className='col-lg-4 col-sm-12 clbenefits'>
          <img src={benefits1} alt="" />
          <h3>Global Portfolio</h3>
          <p>Whether it is a thriving pharma company in Toronto,
            an electric powerhouse in New York,
            or a tech startup in Bangalore–nothing misses our radar!
          </p>
        </div>
        <div className='col-lg-4 col-sm-12 clbenefits'>
          <img src={benefits2} alt="" />
          <h3>Personalized Advice</h3>
          <p>Prefer ESG, Sharia or Jain investments? Dream to own a home,
            car or take a world tour? What’s important to you drives our advice.
          </p>
        </div>
      </div>
      <div className='row rwbenefits'>
        <div className='col-lg-4 col-sm-12 clbenefits'>
          <img src={benefits3} alt="" />
          <h3>All-in-one Wealth Creation App</h3>
          <p>Savart is an end-to-end Investment solution.
            From goal-setting to investment advice,
            and from trade execution to portfolio tracking, we offer it all.
          </p>
        </div>
        <div className='col-lg-4 col-sm-12 clbenefits'>
          <img src={benefits4} alt="" />
          <h3>AI and Expert Insights</h3>
          <p>Our research combines machine learning
            with human analysis to cover 42,000 securities globally.
          </p>
        </div>
      </div>
      <div className='row  '>
        <div className='col-lg-8 col-sm-12 w-100  benefiterowstyle'>
          <img src={start} alt="" />
          <h3>Begin your investment journey with as little as ₹1000</h3>
          {/* <p class="start-investing-button">
            <a href="https://savart.com/customer/#/login" data-type="URL">Get Started Now</a>
            <a href="http://52.146.10.116:81/#/login" data-type="URL" data-id="http://52.146.10.116:81/#/login" target="_blank">!</a>
            </p> */}
            <button className="start-investing-button">Get Started Now</button>
        </div>
      </div>
   
    </div>
  )
}

export default Beneits