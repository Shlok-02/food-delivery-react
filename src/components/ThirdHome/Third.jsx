import React from 'react'
import products from "../../assets/fake-data/products";
import { useState } from 'react';

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
                <button onClick={(e)=>handleClick(e)}>All</button>
                <button onClick={(e)=>handleClick(e)}> <img src={burger} alt="" />Burger</button>
                <button onClick={(e)=>handleClick(e)}><img src={pizza} alt="" />Pizza</button>
                <button onClick={(e)=>handleClick(e)}><img src={bread} alt="" />Bread</button>
            </div>     



                {console.log(typeof (type))}

                {
                    products.map((value, index ) => {
                        let results=[] 
                        if(type=="All"){
                            return (
                                
                                <h1 key={index}>{value.title }
                                 </h1>
                               )
                        }        
                        
                   })
                 }
        </div>
    </>
  )
}

export default Third