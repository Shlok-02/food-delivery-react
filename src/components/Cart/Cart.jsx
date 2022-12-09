import React from 'react'
import { CartState } from '../../Context';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import "./Cart.css"
import {AiFillDelete} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    
                            
       
    let navigate=useNavigate();
    const { cart,setCart } = CartState();
    const{subTotal,setSubTotal}=CartState();

    

    const[total,setTotal]=useState(0)
    

    function handleShopping(e){
        navigate("/foods");
        e.preventDefault()
    }

    function deleteItem(e,item){
        console.log(e)
        console.log(item)
        
        setCart((cart) => cart.filter((prod, index) => prod.id !== item.id));
    }

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
        setSubTotal(total);
      }, [cart]);

    function handleCheckout(e){  
        navigate("/checkout");
        console.log(subTotal)
    }
   

  return (
    <>
        <Header/>
        <div className="main-cart">
            <div className="your-cart">
                <h1>Your cart</h1>
                <div className="cart-detail">
                    {
                        cart.length>0? <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
    
                            {
                            
                                cart.map((item,index)=>{
                                    return (
                                        <tr>
                                            <td><img src={item.image01} alt="img" /></td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>1</td>
                                            <td onClick={(e,index)=>deleteItem(e,item)}><AiFillDelete/></td>
                                        </tr>
                                    )
                                })
                           
                            }
                            {/*  <tr>
                                <td><img src={products[0].image01} alt="img" /></td>
                                <td>"pizza"</td>
                                <td>78</td>
                                <td>1</td>
                                <td><AiFillDelete/></td>
                            </tr> */}
                        </tbody>
                        </table>
                        :<h2>Your Cart is Empty</h2>
                    }
                    
                </div>

                <div className="total">
                    <div className="top-total">
                       
                        <h6>Subtotal: $ <span>{total}</span></h6>
                        <p>Taxes and shipping will calculate at checkout</p>
                        <div className="cart-btns">
                            <button onClick={handleShopping}> Continue Shopping</button>
                            <button onClick={handleCheckout}> Proceed to Check out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Cart