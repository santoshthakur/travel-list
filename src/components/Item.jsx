import React from "react";

const Item=({item,onDeleteItem})=>{
    return(
        <li className="px-4">            
        <span className="text-lg font-bold" style={item.packed ? {textDecoration:'line-through'}: {}}>{item.quantity}{item.description}</span>
        <button className="border-0 bg-red-600 text-white text-sm font-bold px-6 py-2 rounded-lg ml-4" onClick={()=>onDeleteItem(item.id)}>X</button>
    </li>
    )
}

export default Item