import React from 'react'
import products from "../../assets/fake-data/products";
import { useState } from 'react';
import "./Third.css"
import { useNavigate } from 'react-router-dom';

const Third = () => {
    let navigate=useNavigate();

    let burger=require("../../assets/images/hamburger.png")
    let pizza=require("../../assets/images/pizza.png")
    let bread=require("../../assets/images/bread.png")
    //console.log(products)
    let result
    const[type,setType]=useState("All")
    const[data,setData]=useState([])
    const[newArr,setnewArr]=useState([])

    function handleClick(e,value){
        console.log(e)
        console.log(value)
        navigate(`foods/id=${e.id}`);
    }


  return (
    <>
        <div className="main-third">
            <h2>Popular Foods</h2>
            <div className="categories">
                <button onClick={()=>setType("All")} className={type=="All"?'activeBtn':''}>All</button>
                <button onClick={()=>setType("Burger")} className={type=="Burger"?'activeBtn':''}> <img src={burger} alt="" /><p>Burger</p></button>
                <button onClick={()=>setType("Pizza")} className={type=="Pizza"?'activeBtn':''}><img src={pizza} alt="" /><p>Pizza</p></button>
                <button onClick={()=>setType("Bread")} className={type=="Bread"?'activeBtn':''}><img src={bread} alt="" /><p>Bread</p></button>
            </div>     
            <div className="display-foods">
               {
                    products.map((value, index ) => {
                        let results=[] 
                        if(value.category==type){
                            return (
                                <div className="food" key={index}>
                                    <img src={value.image01} alt={value.category} />
                                    <h5 onClick={(index)=>handleClick(value)}>{value.title}</h5>
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
                        }        
                        if(type=="All"){
                            return (
                                <div className="food">
                                    <img src={value.image01} alt={value.category} />
                                    <h5 onClick={(index)=>handleClick(value)}>{value.title}</h5>
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