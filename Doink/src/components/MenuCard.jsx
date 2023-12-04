import React from 'react';
import { MENU_IMG_URL } from '../utils/constants';
import "../../../Doink/index.css";
import Selector from './Selector';

const MenuCard = (props) => {
    const { item } = props;

    return (
        <div className='flex gap-4 justify-between border-b-2 py-4 mx-4 text-left'>
            <div>
                <h4 className='font-bold text-lg'>{item?.name}</h4>
                <p className='font-semibold'>Rs. {item?.price / 100 || item?.defaultPrice / 100}</p>
                <p className='italic my-3'>{item?.description}</p>
            </div>
            <div className='flex-none w-[100px] h-[100px] relative'>
                <img className='rounded-md w-full h-full object-cover' src={MENU_IMG_URL + item?.imageId} alt="" />
                <div className='absolute -bottom-2'>
                    <Selector key={item?.id} foodItem={item} />
                </div>
            </div>
        </div>
    )
}

export default MenuCard