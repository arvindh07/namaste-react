import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from "../store/slice/cartSlice";

const Selector = ({foodItem}) => {
    const quantity = useSelector(store => store?.cart?.items[foodItem?.id]?.quantity) || 0;
    // const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const handleAddItem = () => {
        if(foodItem?.id){
            dispatch(cartActions.addItems(foodItem))
        }
    }

    const handleRemoveItem = () => {
        if(foodItem?.id){
            dispatch(cartActions.reduceItems(foodItem))
        }
    }

    // useEffect(() => {
    //     if(foodItem?.id){
    //         setQuantity(cartItems?.["id"]?.quantity || 0);
    //     }
    // }, [foodItem?.id])

    console.log("quan:store", quantity, foodItem?.id);

    return (
        <div className='bg-black text-white flex cursor-pointer px-2 justify-center items-center w-[100px]'>
            {quantity === 0 
                ? (
                    <button 
                        className='px-1 my-1'
                        onClick={handleAddItem}>Add</button>
                ) : ( 
                    <>
                    <button 
                        className='hover:bg-slate-100 hover:text-black px-1 my-1'
                        onClick={handleRemoveItem}
                        disable={quantity === 0}>-</button>
                    <p className='px-4'>{quantity}</p>
                    <button 
                        className='hover:bg-slate-100 hover:text-black px-1 my-1'
                        onClick={handleAddItem}>+</button>
                    </>
                )
            }
        </div >
    )
}

export default Selector