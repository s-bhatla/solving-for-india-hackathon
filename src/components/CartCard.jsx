import React, { useEffect } from 'react'
import { useState } from 'react'
import imageid from "../assets/book.jpg"

const CartCard = (props) => {
  const [quantity, setquantity] = useState(1)
  const [price, setprice] = useState(69)


  const handleIncrementClick = () => {
    props.childAdd(props.id);
  };

  const handleDecrementClick = () => {
    props.childRemove(props.id);
  };


  
  const increment = () => {
    setquantity(quantity+1);
  }

  const decrement = () => {
    setquantity(quantity-1);
  }

  return (
    <div className='shadow p-3 mb-5 bg-body rounded sm:w-100 w-75 me-auto ms-auto d-flex justify-content-between'>
        <div className='left d-flex '>
          <img src={imageid} width={100} className='cartimg'/>
          <div className='d-flex flex-column'>
            <div className='h5'>Name of Item</div>
            <div className='text-secondary'>Lorem Ipsum ${price}</div>
          </div>
        </div>
        <div className='right d-flex flex-column mt-auto mb-auto'>
          <div className='quantity-section d-flex'>
            <span onClick={handleDecrementClick}><button className='btn btn-danger'>-</button></span>
            <span className='quantity-space'>{props.quantity}</span>
            <span onClick={handleIncrementClick}><button className='btn btn-success'>+</button></span>
          </div>
          <div className='total-price h4'>
            $ {props.quantity*price}
          </div>
        </div>
    </div>
  )
}

export default CartCard