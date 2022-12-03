import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {BiRightArrow} from 'react-icons/bi'
import {AiFillCar} from 'react-icons/ai'
import {AiOutlineFileProtect} from 'react-icons/ai'
import "./First.css"

const First = () => {
    let navigate=useNavigate();
    
    function foods(e){
        navigate("/foods");
        console.log(e)
      e.preventDefault();
    }
  
    function order(e){
        navigate("/cart");  
  
      e.preventDefault();
    }

    let delivery=require('../../assets/images/hero.png')
  return (
    <>
        
          <div className="first-home">
            <div className="left-first">
              <h5>Easy way to make an order</h5>
              <h1><span>HUNGRY?</span>Just wait food at <span>your door</span> </h1> 
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!</p>
              <div className="left-first-buttons">
                    <div className="order">
                        <button onClick={order}>Order Now <BiRightArrow/></button>
                    </div>
               
                    <div className="foods">
                     <button onClick={(e)=>foods(e)}> See All Foods</button>
                    </div>
              </div>
              <div className="left-first-features">
                  <div className="ship">
                     <p> <AiFillCar/>  No Shipping Charges </p>
                  </div>
                  <div className="checkout">
               <p>    <AiOutlineFileProtect/>  100% Secure Checkout </p>
                  </div>
              </div>
            </div>
            <div className="right-home">
                    <img src={delivery} alt="Delivery image" />
            </div>
          </div>
       
    
    </>
  )
}

export default First