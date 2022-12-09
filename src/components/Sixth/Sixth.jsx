import React from 'react'
import "./Sixth.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Sixth = () => {
    let person1=require("../../assets/images/ava-1.jpg")
    let person2=require("../../assets/images/ava-2.jpg")
    let person3=require("../../assets/images/ava-3.jpg")
    let network=require("../../assets/images/network.png")
  return (
    <>
        <div className="main-sixth">
            <div className="left-sixth">
                <h5>Testimonial</h5>
                <h2>What our <span>customers </span> are saying</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!
                </p>

               {/*  <Carousel autoPlay={true} infiniteLoop={true} interval={3000} style={{zindex:'-1'}}>
                    <div className="review">
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio esse soluta fugit facilis quam nostrum accusamus iste, ducimus atque!"</p>
                        <div className="review-person">
                            <img style={{width:'80px'}} src={person1} alt="John Doe" />
                            <p>John Doe</p>
                        </div>
                    </div>
                    <div className="review">
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio esse soluta fugit facilis quam nostrum accusamus iste, ducimus atque!"</p>
                        <div className="review-person">
                            <img style={{width:'80px'}} src={person2} alt="John Doe" />
                            <p>John Doe</p>
                        </div>
                    </div>
                    <div className="review">
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio esse soluta fugit facilis quam nostrum accusamus iste, ducimus atque!"</p>
                        <div className="review-person">
                            <img style={{width:'80px'}} src={person3} alt="John Doe" />
                            <p>John Doe</p>
                        </div>
                    </div>

                </Carousel> */}
            </div>
            <div className="right-sixth">
                <img src={network} alt="" />
            </div>
        </div>
    </>
  )
}

export default Sixth