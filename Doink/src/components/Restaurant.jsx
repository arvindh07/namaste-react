import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useParams } from 'react-router-dom';
import MenuCard from './MenuCard';
import useFetchMenu from '../utils/hooks/useFetchMenu';

const Restaurant = () => {
    const { hotelId } = useParams();
    const [menuItems, hotelInfo] = useFetchMenu(hotelId);

    const renderMenuItems = () => {
        return (<Accordion allowZeroExpanded allowMultipleExpanded={false}>
            {menuItems?.map((menu, index) => {
                if (index !== 0) {
                    const outsideList = menu?.card?.card?.itemCards;
                    const outsideTitle = menu?.card?.card?.title;
                    if (outsideList) {
                        return (
                            <>

                                <AccordionItem key={outsideTitle}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {outsideTitle}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        {outsideList?.map((hm) => {
                                            const item = hm?.card?.info;
                                            return (
                                                <MenuCard key={item?.id} item={item} />
                                            )
                                        })}
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </>
                        )
                    } else {
                        return <></>
                    }
                } else {
                    return <></>
                }
            })}
        </Accordion>)
    }

    return (
        <div className='container restro'>
            <div className="res__header">
                <div className="left">
                    <h6 className="res__name">{hotelInfo?.name}</h6>
                    {hotelInfo?.cuisines?.map((cuisine) => {
                        return (
                            <p key={cuisine} className="res__type">{cuisine}</p>
                        )
                    })}
                    <p className="location">{hotelInfo?.areaName}, {hotelInfo?.city}</p>
                </div>
                <div className="right">
                    <span className="ratings">{hotelInfo?.avgRating}⭐</span>
                </div>
            </div>
            <div className="res__info">
                <p className="timing">&#x1F551; {hotelInfo?.sla?.slaString}</p>
                <span className="rs">{hotelInfo?.costForTwoMessage}</span>
            </div>
            <div className="vegfilter">
                <button className="veg">Only veg</button>
                <button className="nv">Only non veg</button>
            </div>
            {renderMenuItems()}
        </div>
    )
}

export default Restaurant