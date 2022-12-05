import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Food.css"
import products from '../../assets/fake-data/products'
const Food = () => {
  return (
    <>
        <Header/>
        <div className="main-foods">
            <div className="food-wrapper">
              <div className="img-wrapper">
                <div className="all-foods">
                  <h1>All Foods</h1>
                </div>
                <div className="display-foods">
                {
                    products.map((value, index ) => {
                            return (
                                <div className="food">
                                    <img src={value.image01} alt={value.category} />
                                    <h5>{value.title}</h5>
                                    <div className="info">
                                       <div className="price">
                                       <h5> ${value.price} </h5>
                                       </div>

                                       <div className="cart">
                                        <button>Add to cart</button>
                                       </div>
                                    </div>
                                    
                                </div>
                              )  
                   })
                 }
                </div>
              </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Food