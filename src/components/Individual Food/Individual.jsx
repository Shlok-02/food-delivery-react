import React, { useState } from 'react'
import products from '../../assets/fake-data/products'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import "./individual.css"
import { CartState } from '../../Context';

const Individual = () => {
  const { cart,setCart } = CartState();
 
  let navigate=useNavigate()
  
  let urlElements = window.location.href.split('/')
  let productId=urlElements[4].split("=")[1];

  const result = products.filter(product=>product.id == productId);

  const similar=products.filter(product=>product.category == result[0].category)

  console.log("Similar",similar)
  console.log(result)
  let src=result[0].image01;

  const[option,setOption]=useState('Description')
  const[img,setImg]=useState(src)

  function handleClick(e){
    console.log(e.target.innerText)
    setOption(e.target.innerText)
    e.preventDefault()
  }

  function handleClickFood(e){
    console.log(e)
    navigate(`/foods/id=${e.id}`);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

function handleClickImg(e,id){
  console.log(e.target.src)
  setImg(e.target.src)
  console.log(id)
}

function handleFormBtn(e){

  e.preventDefault()
}

function handleCart(e,value){
  console.log(e)
  setCart(cart=>[...cart,value])
    e.target.innerText="Added to cart"
  

  e.preventDefault()
  }

  return (
    <>
      <Header/>
      
      <div className="main-indi">
        <h1>{result[0].title}</h1>

        <div className="deatil-product">
          <div className="left-deatil">
            <img onClick={(src)=>handleClickImg(src)} src={result[0].image01} alt="" />
            <img onClick={handleClickImg} src={result[0].image02} alt="" />
            <img onClick={handleClickImg} src={result[0].image03} alt="" />
          </div>
          <div className="mid-deatil">
            <img src={img} alt="" />
          </div>
          <div className="right-deatil">
            <h2>{result[0].title}</h2>
            <p className='product-price'>Price: <span>${result[0].price}</span></p>
            <p className='product-category'>Category: <span>{result[0].category}</span> </p>
            <button className='addtocart' onClick={(e,result)=>handleCart(e,result)}>Add to Cart</button>
          </div>
        </div>

        <div className="desc-rev">
          <div className="top-desc-rev">
            <p onClick={handleClick} className={option=='Description'?'active-option':''}>Description</p>
            <p onClick={handleClick} className={option=='Review'?'active-option':''}>Review</p>
          </div>
          <div className="bottom-desc-rev">
            {
              option=='Description'?
              <div className='option-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate dolor nam odio quae, magni non consectetur saepe iure? Rerum cum voluptatum voluptate eveniet ad! Quam, adipisci? Nihil, voluptatem ut!
              </div>

              :
              <div className='option-review'>
                <div className='review'>
                  <h6 className='user-name'>John Doe</h6>
                  <p className='user-email'>john@gmail.com</p>
                  <p className='user-feedback'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sed.</p>
                </div>
                <div className='review'>
                  <h6 className='user-name'>John Doe</h6>
                  <p className='user-email'>john@gmail.com</p>
                  <p className='user-feedback'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tempore?</p>
                </div>
                <div className='review'>
                  <h6 className='user-name'>John Doe</h6>
                  <p className='user-email'>john@gmail.com</p>
                  <p className='user-feedback'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, distinctio!</p>
                </div>
                <div className="add-review">
                  <form >
                      <input type="text" placeholder='Enter your name' />
                      <input type="text" placeholder='Enter your name'/>
                      <textarea name="" id="" cols="30" rows="5" placeholder='Write your review'></textarea>
                      <button onClick={handleFormBtn}>Submit</button>
                  </form>
                </div>
              </div>
            }
          </div>
        </div>
        
      <div className="you-like">
         <div className="display-foods">
                {
                    similar.map((value, index ) => {
                      return (
                          <div className="food">
                              <img  src={value.image01} alt={value.category} />
                              <h5 onClick={(index)=>handleClickFood(value)}>{value.title}</h5>
                              <div className="info">
                                  <div className="price">
                                  <h5> ${value.price} </h5>
                                  </div>

                                  <div className="cart">
                                  <button onClick={(e,index)=>handleCart(e,value)}>Add to cart</button>
                                  </div>
                              </div>
                              
                          </div>
                      )  
                   })
                 }
                </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Individual