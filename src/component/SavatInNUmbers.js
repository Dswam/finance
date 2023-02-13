import React from 'react'
import client from '../image/investors.png'
import asset from '../image/mutual-funds.png'
import users from '../image/users.png'
import rating from '../image/rating.png'
import "../cssComponent/savartinnumbers.css"
const SavatInNUmbers = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-sm-12 numbers '>
                    <h3>Savart in numbers</h3>
                </div>
            </div>
            <div className='row  clients'>
                <div className='col-lg-3 col-sm-12 clients1'>
                    <img src={client} alt="" />
                    <p className='py'>Clients from Countries​</p>
                    <p className='pi'>33+</p>

                </div>
                <div className='col-lg-3 col-sm-12 clients1'>
                    <img src={asset} alt="" />
                    <p className='py'>Asset Under Advisory​</p>
                    <p className='pi'>₹1600Cr</p>

                </div>
                <div className='col-lg-3 col-sm-12 clients1'>
                    <img src={users} alt="" />
                    <p className='py'>Users​</p>
                    <p className='pi'>10000+</p>

                </div>
                <div className='col-lg-3 col-sm-12 clients1'>
                    <img src={rating} alt="" />
                    <p className='py'>Rating​</p>
                    <p className='pi'>4.6</p>
                </div>
            </div>
        </div>
    )
}

export default SavatInNUmbers