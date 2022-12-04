import React from 'react'
import {AiOutlineMail} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.css"
import { useState } from 'react';

const Footer = () => {
    let logo=require("../../assets/images/res-logo.png")
    const[email,setEmail]=useState('')


    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    function handleChange(e){
        setEmail(e.target.value)
        //console.log(e.target.value)
    }

    function handleClick(e){
        console.log(e)
       if (!isValidEmail(email)) {
        alert("Check emial properly")
        setEmail('')
    } else {
        alert("Successfull subscribe")
        setEmail('')
    }
        e.preventDefault()
    }

  return (
    <>
        <div className="main-footer">
            <div className="footer-wrapper">
                <div className="top-footer">
                    <div className="first-top-footer">
                        <div className="footer-logo">
                            <img src={logo} alt="Logo" />
                            <h5>Tasty Treat</h5>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus
                        </p>
                    </div>

                    <div className="second-top-footer">
                        <h2>Delivery Time</h2>
                        <div className="working-time">
                            <h5>Sunday-Thursday</h5>
                            <p>10:00am - 11:00pm</p>
                        </div>
                        <div className="holiday">
                        <h5>Friday - Saturday</h5>
                            <p>Off day</p>
                        </div>
                    </div>

                    <div className="third-top-footer">
                        <div className="contact-footer">
                            <h5>Contact</h5>
                            <p>location: Pune-411033</p>
                        </div>
                        <p>Phone: 8446059173</p>
                        <p>emailID: abc@gmail.com</p>
                    </div>

                    <div className="subscribe">
                        <h3>NewsLetter</h3>
                        <p>Subscribe our newsletter</p>
                       <div className="input">
                       <input onChange={(e)=>handleChange(e)} type="email" placeholder='Enter your email'/> <AiOutlineMail onClick={(e)=>handleClick(e)}/>
                       </div>
                    </div>
                </div>
                
                <div className="footer-bottom-wrapper">
                    <div className="bottom-footer">
                        <p>Copyright - 2022, website made by Shlok Gangatirkar. All Rights Reserved</p>
                    </div>
                    <div className="footer-icons">
                        <p>Follow: </p><BsFacebook/> <AiFillGithub/> <AiFillTwitterCircle/> <AiFillInstagram/>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Footer