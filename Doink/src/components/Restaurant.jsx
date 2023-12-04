import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useParams } from 'react-router-dom';
import useFetchMenu from '../utils/hooks/useFetchMenu';
import CustomAccordion from './CustomAccordion';

const Restaurant = () => {
    const [activePanel, setActivePanel] = useState(0);
    const [toggle, setToggle] = useState(true);
    const { hotelId } = useParams();
    const [menuItems, hotelInfo] = useFetchMenu(hotelId);

    // const renderMenuItems = () => {
    //     return (<Accordion allowZeroExpanded allowMultipleExpanded={false}>
    //         {menuItems?.map((menu, index) => {
    //             const outsideList = menu?.card?.card?.itemCards;
    //             const outsideTitle = menu?.card?.card?.title;
    //             if (outsideList) {
    //                 return (
    //                     <AccordionItem key={outsideTitle}>
    //                         <AccordionItemHeading>
    //                             <AccordionItemButton>
    //                                 {outsideTitle}<span className='pl-1 font-bold'>({outsideList?.length})</span>
    //                             </AccordionItemButton>
    //                         </AccordionItemHeading>
    //                         <AccordionItemPanel>
    //                             {outsideList?.map((hm) => {
    //                                 const item = hm?.card?.info;
    //                                 return (
    //                                     <MenuCard key={item?.id} item={item} />
    //                                 )
    //                             })}
    //                         </AccordionItemPanel>
    //                     </AccordionItem>
    //                 )
    //             } else {
    //                 return <></>
    //             }
    //         })}
    //     </Accordion>)
    // }

    const renderMenuItems = () => {
        return (
            <>
                {menuItems?.map((menuList, index) => {
                    const actMenuItems = menuList?.card?.card?.itemCards;
                    const title = menuList?.card?.card?.title;
                    return (
                        <CustomAccordion
                            key={title}
                            title={title}
                            items={actMenuItems}
                            open={(activePanel === index) && toggle}
                            setOpen={() => {
                                if(activePanel === index){
                                    setToggle(!toggle)
                                }else{
                                    setToggle(true)
                                }
                                setActivePanel(index)
                            }} />)
                })}
            </>
        )
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