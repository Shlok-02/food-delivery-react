import React from 'react'
import products from '../../assets/fake-data/products'
import "./Fifth.css"

const Fifth = () => {
    const pizzas=products.filter(item=>item.category=="Pizza")
  return (
    <>
        <div className="main-fifth">
            <div className="fifth-display-foods">
                <h2>Hot Pizza</h2>
                <div className="hot-pizza">
                       
                        {
                            pizzas.map((value)=>{
                                return(
                                    <div className="fifth-food">
                                        <img src={value.image01} alt={value.category} />
                                        <h5>{value.title}</h5>
                                        <div className="fifth-info">
                                        <div className="fifth-price">
                                            ${value.price}
                                        </div>

                                        <div className="fifth-cart">
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
    </>
  )
}

export default Fifth