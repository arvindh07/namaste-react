import React from 'react';
import { MENU_IMG_URL } from '../utils/constants';
import "../../../Doink/index.css";

const MenuCard = (props) => {
    const {item} = props;

    return (
        <div className='menu__card'>
            <div className="menu__left">
                <h4 className='hotel__name'>{item?.name}</h4>
                <p className='hotel__price'>{item?.price || item?.defaultPrice}</p>
                <p className='hotel__desc'>{item?.description}</p>
            </div>
            <div className="menu__right">
                <img src={MENU_IMG_URL + item?.imageId} alt="" />
            </div>
        </div>
    )
}

export default MenuCard