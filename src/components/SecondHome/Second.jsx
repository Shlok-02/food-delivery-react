import React from 'react'
import "./Second.css"

const Second = () => {
    let first=require("../../assets/images/category-01.png")
    let second=require("../../assets/images/category-02.png")
    let third=require("../../assets/images/category-03.png")
    let fourth=require("../../assets/images/category-04.png")

    let sfirst=require("../../assets/images/service-01.png")
    let ssecond=require("../../assets/images/service-02.png")
    let sthird=require("../../assets/images/service-03.png")
  return (
    <>
        <div className="main-second">
            <div className="top-second">
                <div className="category">
                    <img src={first} alt="" />
                    <h6>Fast Food</h6>
                </div>
                <div className="category">
                    <img src={second} alt="" />
                    <h6>Burger</h6>
                </div>
                <div className="category">
                    <img src={third} alt="" />
                    <h6>Asian</h6>
                </div>
                <div className="category">
                    <img src={fourth} alt="" />
                    <h6>Raw Meat</h6>
                </div>
            </div>

            <div className="mid-second">
                <h5>What we serve</h5>
                <h2>Just sit back at home we will <span>take care</span></h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.</p>
            </div>

            <div className="last-second">
                <div className="service">
                    <img src={sfirst} alt="" />
                    <h5>Quick Delivery</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
                </div>
                <div className="service">
                    <img src={ssecond} alt="" />
                    <h5>Super Dine In</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
                </div>
                <div className="service">
                    <img src={sthird} alt="" />
                    <h5>Easy Pick Up</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default Second