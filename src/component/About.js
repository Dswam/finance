import React from 'react'
import HeroSection from '../pages/HeroSection'
import "../cssComponent/about.css"
const About = () => {
  return (
    <>
      <HeroSection />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 aboutcol1'>
            <h3 > We pioneered the discount broking model in India.
              Now, we are breaking ground with our technology.</h3>
          </div>
          <hr />
        </div>
        <div className='row'>
          <div className='col-lg-6 aboutcol2'>
            <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

            <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India in terms of active retail clients.</p>

            <p>  Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
          </div>
          <div className='col-lg-6 aboutcol2'>
            <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.

              Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

            <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-8 aboutcol4'>
            <h3>people</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 aboutcol5'>
            <img src="https://zerodha.com/static/images/nithin-kamath.jpg" alt="" />
          </div>
          <div className='col-lg-4 aboutcol6'>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

            Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
    </>

  )
}

export default About