import React from 'react'
import Body from './Body'
import Business from './Components/Business'
import Career from './Components/Career'
import Footer from './Components/Footer'
import Footer2 from './Components/Footer2'
import Footer3 from './Components/Footer3'
import Footer4 from './Components/Footer4'
import Footer5 from './Components/Footer5'
import { GlobalStyle } from './Components/GlobalStyle'
import Icons from './Components/Icons'
import Last from './Components/Last'
import Slide from './Components/Slide'
import Utiva from './Utiva'
import Hero from "./Components/Hero"
import Pics from './Components/Pics'
import Uploads from "./Components/Uploads"



const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Utiva /> 
      <Hero />
      <Pics />
      <Body />
      <Icons />
      <Career />
      <Business />
      <Slide />
      <Last />
      <Footer />
       {/* <Uploads /> */}
    </div>
  )
}

export default App