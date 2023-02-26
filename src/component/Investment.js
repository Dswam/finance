import React from 'react'
import { NavLink } from 'react-router-dom'
import "../cssComponent/investment.css"
const data = [


  {
    url: "https://zerodha.com/static/images/investments-stocks.png",
    des: "Trade stocks for delivery or intraday on over 5000 stocks listed on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)."
  },
  {
    url: "https://zerodha.com/static/images/investments-mf.png",
    des: "Invest in over 2000 direct mutual funds directly without a distributor. Save up to 1.5% in commissions every year."
  },
  {
    url: "https://zerodha.com/static/images/investments-fo.png",
    des: "Trade metals, oil, and agri commodities on MCX and stock and index futures and options on NSE."
  },
  {
    url: "https://zerodha.com/static/images/ipo-products.png",
    des: "Now apply online and invest in companies listing on the Indian exchanges with an IPO (Initial Public Offering) with your BHIM UPI app."
  },
  {
    url: "https://zerodha.com/static/images/ipo-products.png",
    des: "Introduce your friends and family to the habit of investing for the long term by gifting them stocks, ETFs, mutual funds and gold bonds. A gift that keeps on giving."
  },
  {
    url: "https://zerodha.com/static/images/investments-income.png",
    des: "Invest in bonds with yields better than bank FDs guaranteed by the Government of India."
  }
]
const Investment = () => {
  return (
    <div className='container investconatin'>
      <div className='row'>
        <div className='col-1g-12 col-sm-12 investcol'>
          <h1>Investments</h1>
          <h5>Everything from equities and derivatives to mutual funds and fixed income</h5>
          <p>Check out our <NavLink to="/products">technology offerings →</NavLink></p>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-sm-12 mainimgcol'>
          <img src="https://zerodha.com/static/images/investments-head.png" alt="" />
        </div>
      </div>
      <div className='row'>
      {data.map((val, index) => {
            return (
              <div className='col-lg-10 prodcol3'>
                <div className='prodcol3'>
                  {index % 2 === 0 ? (
                    <>
                      <img src={val.url} alt={val.title} />
                      <div className='innercol3'>
                        <h3>{val.title}</h3>
                        <p>{val.des}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='prodcol4'>
                        <h3>{val.title}</h3>
                        <p>{val.des}</p>
                      </div>
                      <img src={val.url} alt={val.title} />
                    </>
                  )}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Investment