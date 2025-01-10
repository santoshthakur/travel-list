import React from "react";

const Footer= ({items})=>{
    const itemNum= items.length;
    const numPacked= items.filter((item)=>item.packed).length;
    const percentage= Math.round((numPacked / itemNum)*100);
    return(
        <>
        <div className="footer bg-orange-950 text-white font-bold py-10 w-full">
            <em>YOu have <span className="text-yellow-300">
                {itemNum}</span> items on your list, and you already packed {numPacked} ({percentage}%)
                </em>
        </div>
        </>
    )
}
export default Footer; 