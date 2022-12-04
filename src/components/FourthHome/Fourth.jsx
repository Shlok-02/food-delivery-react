import React from 'react'
import {AiOutlineCheckCircle} from "react-icons/ai"
import "./Fourth.css"

const Fourth = () => {
    let location=require("../../assets/images/location.png");

  return (
    <>
        <div className="main-fourth">
            <div className="left-fourth">
                <img src={location} alt="" />
            </div>
            <div className="right-fourth">
                <h2>Why <span>Tasty Treat?</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>
                <div className="fourth-features">

                    <div className="fourth-feature">
                        <div className="fourth-wrappper">
                            <AiOutlineCheckCircle/>
                            <p>Fresh and tasty foods</p>
                        </div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.
                    </div>

                    <div className="fourth-feature">
                        <div className="fourth-wrappper">
                            <AiOutlineCheckCircle/>
                            <p>Quality support</p>
                        </div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.
                    </div>

                    <div className="fourth-feature">
                        <div className="fourth-wrappper">
                            <AiOutlineCheckCircle/>
                            <p>Order from any location</p>
                        </div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.
                    </div>

                </div>
            </div>

            
        </div>
        
        
    </>
  )
}

export default Fourth