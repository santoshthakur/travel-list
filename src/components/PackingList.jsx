import React, { useState } from "react";
import Item from "./Item";

function PackingList({items,onDeleteItem, onToggleItem, onClearList}){ 
    const [sortBy, setSortBy]= useState('input') ;
    const handleSortValue=(e)=>{
      setSortBy(e.target.value)
    } 
    let sortedItems;
    if(sortBy === 'input')
      sortedItems =items
    if(sortBy === 'description')
      sortedItems =items
    .slice()
    .sort((a,b)=> a.description.localeCompare(b.description))
    if(sortBy === 'packed')
      sortedItems= items
    .slice()
    .sort((a,b)=> Number(a.packed)- Number(b.packed))
    return(
      <>
       <div className="list py-6">
        <ul>
        {sortedItems.map((item)=>(<Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />))}
        </ul>
       
        </div>
        <div className='action bg-orange-400 py-4 flex justify-center text-lg '>
            <select className='p-2 rounded-md mr-3' value={sortBy} onChange={handleSortValue}>
              <option value='input'>
                Sort by input order
              </option>
              <option value='description'>
                Sort by description
              </option>
              <option value='packed'>
                Sort by packed Status
              </option>
            </select>
            <button onClick={onClearList} className='bg-red-600 text-white px-3 py-2 rounded-md'>
              Clear List
            </button>
        </div>
        </>
    )
  }

  export default PackingList