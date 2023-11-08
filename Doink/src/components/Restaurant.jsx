import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { RESTAURANT_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import MenuCard from './MenuCard';

const Restaurant = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [hotelInfo, setHotelInfo] = useState({});
    const { hotelId } = useParams();

    const fetchData = async () => {
        const response = await fetch(RESTAURANT_URL + hotelId);
        const json = await response.json();
        // console.log("json ", json);
        setHotelInfo(json?.data?.cards?.[0]?.card?.card?.info);
        setMenuItems(json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        console.log("single", json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    const renderMenuItems = () => {
        return (<Accordion allowMultipleExpanded={false}>
            {menuItems?.map((menu, index) => {
                if (index !== 0) {
                    const outsideList = menu?.card?.card?.itemCards;
                    const outsideTitle = menu?.card?.card?.title;
                    console.log("out -> ", outsideList, outsideTitle);
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

    useEffect(() => {
        fetchData();
    }, [])

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
            {/* <Accordion>
                {menuItems?.map((item, index) => {
                    if (index === 0) {
                        return <></>
                    }
                    const res = item?.card?.card
                    return (
                        <AccordionItem key={res.Title} allowZeroExpanded>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {res.Title}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                {item.content}
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}

                <AccordionItem key={"123"} allowzeroexpanded="true">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {"heading"}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {"content"}
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion> */}
            {renderMenuItems()}
        </div>
    )
}

export default Restaurant