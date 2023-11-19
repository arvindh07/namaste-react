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
        <div className='mx-3.5 mb-6'>
            <div className="shadow-md p-4 flex flex-col bg-gray-50">
                <div className="left">
                    <h6 className="font-bold text-lg">{hotelInfo?.name}</h6>
                    {hotelInfo?.cuisines?.map((cuisine) => {
                        return (
                            <p key={cuisine} className="text-slate-800">{cuisine}</p>
                        )
                    })}
                    <p className="location">{hotelInfo?.areaName}, {hotelInfo?.city}</p>
                </div>
                <div className="mt-4">
                    <span className="bg-black text-white px-2 text-center rounded-md py-0.5">{hotelInfo?.avgRating}⭐</span>
                </div>
            </div>
            <div className="my-8 shadow-md p-4 bg-gray-50">
                <p className="font-semibold mb-2">&#x1F551; {hotelInfo?.sla?.slaString}</p>
                <span className="font-bold">{hotelInfo?.costForTwoMessage}</span>
            </div>
            {/* <div className="vegfilter">
                <button className="veg">Only veg</button>
                <button className="nv">Only non veg</button>
            </div> */}
            {renderMenuItems()}
        </div>
    )
}

export default Restaurant