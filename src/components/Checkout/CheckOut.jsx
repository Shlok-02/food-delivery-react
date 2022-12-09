import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { CartState } from '../../Context';
import { useState } from 'react';
import { useEffect } from 'react';
import "./CheckOut.css"

const CheckOut = () => {
 
    const { cart,setCart } = CartState();
   
    const[total,setTotal]=useState(0);
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));      
      }, [cart]);
  return (
    <>
        <Header/>
        <div className="main-checkout">
            <div className="top-checkout">
                <h1>CheckOut</h1>
            </div>
            <div className="mid-checkout">
                <div className="left-mid-checkout">
                    <form action="" className='checkout-form'>
                        <h5>Shipping Address</h5>
                        <input type="text" placeholder='Enter your Name' />
                        <input type="email" placeholder='Enter your Email' />
                        <input type="number" placeholder='Enter your Number' />
                        <input type="text" placeholder='Enter your Country' />
                        <input type="text" placeholder='Enter your City' />
                        <input type="text" placeholder='Enter your Postal Code' />
                        <button>Proceed To Pay</button>
                    </form>
                </div>
                <div className="right-mid-checkout">
                   <h6> Subtotal: <span>${total}</span></h6>
                   <h6> Shipping: <span>$30</span></h6>
                   <div className="right-total">
                    <h6>Total: <span>${total+30}</span></h6>
                   </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default CheckOut