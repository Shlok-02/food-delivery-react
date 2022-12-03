import React from 'react'
import Header from '../Header/Header'
import First from '../FirstHome/First'
import Second from "../SecondHome/Second"
import Third from '../ThirdHome/Third'
const Home = () => {

  return (
    <>
        <Header/>
        <div className="main-home">
          <First/>
          <Second/>
          <Third/>
        </div>
    </>
  )
}

export default Home