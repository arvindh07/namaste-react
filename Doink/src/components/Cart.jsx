import React from 'react'
import { useSelector } from 'react-redux'
import MenuCard from './MenuCard';
import useCart from '../utils/hooks/useCart';

const Cart = () => {
  const cartItems = useSelector(store => store?.cart?.items);
  const { calculateTotalPrice } = useCart();
  // console.log("cart", cartItems);
  return (
    <div className='text-center w-9/12 mx-auto mb-8'>
      <h3 className='text-3xl my-8'>Cart</h3>
      <div>
        {Object.keys(cartItems)?.map((key) => {
          const item = cartItems[key];
          return (
            <MenuCard key={item?.id} item={item} />
          )
        })}
      </div>
      <div className='my-8 text-left'>
        {Object.keys(cartItems)?.length > 0
          ? (
            <h3 className='text-2xl'>Total price:
              <span className='ml-2 font-bold'> {calculateTotalPrice()}₹</span>
            </h3>
          ) : (
            <h3 className='text-2xl'>Cart is empty. Please add items to cart.</h3>
          )}
      </div>
    </div>
  )
}

export default Cart