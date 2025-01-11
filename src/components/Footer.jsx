import React from "react";

const Footer= ({items})=>{
    if(!items.length){
        return(
            <div className="footer bg-orange-950 text-white font-bold py-10 w-full">
                Start adding some items to your packing list
            </div>
        )
    }

    const itemNum= items.length;
    const numPacked= items.filter((item)=>item.packed).length;
    const percentage= Math.round((numPacked / itemNum)*100);
    return(
        <>
        <div className="footer bg-orange-950 text-white font-bold py-10 w-full">
            <em>
                {percentage === 100 ? 'You got everything! Ready':
                 `YOu have  ${itemNum} items on your list, and you already packed ${numPacked} (${percentage}% }`
}
                </em>
        </div>
        </>
    )
}
export default Footer; 