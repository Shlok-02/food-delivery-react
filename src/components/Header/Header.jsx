import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { BsFillBasketFill } from 'react-icons/bs';
import {FiLogIn} from 'react-icons/fi' 
import { useLocation } from 'react-router-dom';

const Header = () => {
    const {pathname} = useLocation();
    let logo=require("../../assets/images/res-logo.png")
  return (
    <>
        <div className="main-header">
            <div className="left-header">
                <img src={logo} alt="Logo" />
                <p>Tasty Treat</p>
            </div>
            <div className="mid-header">
                <ul>
                    <Link to="/" className={(pathname === '/') ? 'active' : ''}><li>Home</li></Link>
                    <Link to="/foods" className={(pathname === '/foods') ? 'active' : ''}><li>Foods</li></Link>
                    <Link to="/cart" className={(pathname === '/cart') ? 'active' : ''}><li>Cart</li></Link>
                    <Link to="/contact" className={(pathname === '/contact') ? 'active' : ''}><li>Contact</li></Link>
                </ul>
            </div>
            <div className="right-header">
                <div>
                    <Link to="/cart" className={(pathname === '/cart') ? 'active' : ''}><BsFillBasketFill/><sup>0</sup></Link>
                </div>
                <span><Link to="/login"  className={(pathname === '/login   ') ? 'active' : ''}><FiLogIn/></Link></span>
            </div>
        </div>
    </>
  )
}

export default Header