import React, { useState } from 'react'
import MenuCard from './MenuCard';

const CustomAccordion = ({ title, items, open, setOpen }) => {
  // const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        data-testid="accHeader"
        onClick={setOpen}
        className
        ={`border-2 border-orange-600 px-4 py-3 
          flex justify-between cursor-pointer rounded-md transition-all
        hover:bg-orange-50 ${open ? "border-b-2" : "border-b-0"}`}>
        <h4 className='font-bold'>
          {title} ({items?.length})
        </h4>
        {!open && <span>🔺</span>}
        {open && <span>🔻</span>}
      </div>
      {open && <>
        {items?.map((item) => (
          <MenuCard key={item?.card?.id} item={item?.card?.info} />
        ))}
      </>}
    </div>
  )
}

export default CustomAccordion;