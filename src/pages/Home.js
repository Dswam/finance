import React from 'react'
import Beneits from '../Beneits'
import About from '../component/About'
import Login from '../component/Login'
import Loves from '../component/Loves'
import Media from '../component/Media'
import SavatInNUmbers from '../component/SavatInNUmbers'
import SecondHero from '../SecondHero'
import HeroSection from './HeroSection'

const Home = () => {
  return (
   <>
    <HeroSection/>
    <SecondHero/>
    <Beneits/>
    <SavatInNUmbers/>
    <Loves/>
    <Media/>
   </>
   
  )
}

export default Home
