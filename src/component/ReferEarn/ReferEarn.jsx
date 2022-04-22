import React from 'react'
import Header from '../ProductsPage/Header'
import hero from "./img/hero.png"
import Information from './information'
import "./style/referandearn.css"
import money from "./img/money.png";
import mobile from "./img/mobile.png";
import head from "./img/head.png";
const ReferEarn = () => {
  return (
    <>
        <Header />
        <div>
          <div className='centera'>
        <h2 className='heading1'>Refer and Earn</h2>
        </div>
        <div className='centera'>
            
        <img  src={hero} alt="hero.png"  />
        </div>
        <div className='centera'>
        <h2 className='heading2' >Share the love<br />and get 15 Credits!</h2> </div>

        <Information img={mobile} text="Invite your friends to join Pixetra" />
        <Information img={head} text="Your friend joins Pixetra to avail exciting discounts!" />
        <Information img={money} text="You and your friend both gets 50 credits!" />

        </div>
        <div className="love-box">
                <div className="love-btn">
                    <p className="blue-text"><span>💌</span> Share the love</p>
                </div>
            </div>
    </>
  )
}

export default ReferEarn