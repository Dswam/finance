import React from 'react'
import Beneits from '../Beneits'
import Faq from '../component/Faq'
import HereforYou from '../component/HereforYou'
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
    <HereforYou/>
    <Faq/>
   </>
   
  )
}

export default Home
