import React, { useEffect, useRef, useState } from 'react'
import "../cssComponent/media.css"
import yourstory from '../image/your-story.png'
import img2 from '../image/way2news.png'
import img3 from '../image/ind-stp.png'
import img4 from '../image/tedx.png'
import img5 from '../image/biz-std.png'
import img6 from '../image/hbl.png'
const Media = () => {


    return (
        <div className='container mediabody'>
            <div className='row'>
                <div className='col-lg 12 col-sm-12 mediacol'>
                    <h3>
                        Savart in media
                    </h3>
                </div>
            </div>
            <div className='row ' style={{justifyContent: "center" ,marginTop:'2rem'}}>
                <div className='col-lg-2 col-sm-12 '>
                    <img src={ yourstory} alt="" />
                </div>
                <div className='col-lg-2 col-sm-12'>
                    <img src={ img2} alt="" />
                </div>
                <div className='col-lg-2 col-sm-12'>
                    <img src={ img3} alt="" />
                </div>
                <div className='col-lg-2 col-sm-12'>
                    <img src={img4 } alt="" />
                </div>
                <div className='col-lg-2 col-sm-12'>
                    <img src={img5 } alt="" />
                </div>
            </div>
        </div>
    )
}

export default Media