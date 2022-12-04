import React from 'react'
import Header from '../Header/Header'
import First from '../FirstHome/First'
import Second from "../SecondHome/Second"
import Third from '../ThirdHome/Third'
import Fourth from '../FourthHome/Fourth'
import Fifth from '../FifthHome/Fifth'
import Sixth from '../Sixth/Sixth'
import Footer from '../Footer/Footer'

const Home = () => {

  return (
    <>
        <Header/>
        <div className="main-home">
          <First/>
          <Second/>
          <Third/>
          <Fourth/>
          <Fifth/>
          <Sixth/>
          <Footer/>
        </div>
    </>
  )
}

export default Home