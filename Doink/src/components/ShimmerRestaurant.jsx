import React from 'react'

const SimmerRestaurant = () => {
  return (
    <div className='container restro'>
            <div className="res__header">
                <div className="left">
                    <h6 className="res__name">Sangeetha hotel</h6>
                    <p className="res__type">South Indian</p>
                    <p className="location">Egmore, 2 km</p>
                </div>
                <div className="right">
                    <span className="ratings">4.3⭐</span>
                </div>
            </div>
            <div className="res__info">
                <p className="timing">&#x1F551; 21mins</p>
                <span className="rs">&#8377;200 for two</span>
            </div>
            <div className="vegfilter">
                <button className="veg">Only veg</button>
                <button className="nv">Only non veg</button>
            </div>
            <Accordion>
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
            </Accordion>
        </div>
  )
}

export default SimmerRestaurant