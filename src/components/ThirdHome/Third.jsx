import React from 'react'
import products from "../../assets/fake-data/products";
import { useState } from 'react';
import "./Third.css"

const Third = () => {
    let burger=require("../../assets/images/hamburger.png")
    let pizza=require("../../assets/images/pizza.png")
    let bread=require("../../assets/images/bread.png")
    //console.log(products)
    let result
    const[type,setType]=useState("All")
    const[data,setData]=useState([])

    function handleClick(e){
        console.log(e.target.innerText)
        setType(e.target.innerText)
        setData(products)
        
        e.preventDefault();
    }


  return (
    <>
        <div className="main-third">
            <h2>Popular Foods</h2>
            <div className="categories">
                <button onClick={(e)=>handleClick(e)} className='activeBtn'>All</button>
                <button onClick={(e)=>handleClick(e)}> <img src={burger} alt="" /><p>Burger</p></button>
                <button onClick={(e)=>handleClick(e)}><img src={pizza} alt="" /><p>Pizza</p></button>
                <button onClick={(e)=>handleClick(e)}><img src={bread} alt="" /><p>Bread</p></button>
            </div>     
            <div className="display-foods">
               {
                    products.map((value, index ) => {
                        let results=[] 
                        if(type=="All"){
                            return (
                                <div className="food">
                                    <img src={value.image01} alt={value.category} />
                                    <h5>{value.title}</h5>
                                    <div className="info">
                                       <div className="price">
                                        ${value.price}
                                       </div>

                                       <div className="cart">
                                        <button>Add to cart</button>
                                       </div>
                                    </div>
                                    
                                </div>
                               )
                        }        
                        
                   })
                 }
         </div>



        </div>
    </>
  )
}

export default Third