import React, { useState } from "react";

const Form=({onAddItems})=>{
    const [description, setDescription]= useState("");
    const [quantity, setQuantity] = useState(1);
   
    const handleChange=(e)=>{
        setQuantity(e.target.value)
    }
    const handlerInputValue= (e)=>{
        setDescription(e.target.value)
    }
    const handlerSubmit=(e)=>{
        e.preventDefault();
        if(!description) return
        const newItem= {description, quantity,package:false,id: Date.now()  }
        onAddItems(newItem);
        setDescription("")
        setQuantity(1)
        console.log(e);
        console.log(newItem);
    }
    return(
        <div className="py-20 bg-orange-800">
        <form className="add-form flex justify-center items-center" onSubmit={handlerSubmit}>
            <h3 className="font-bold text-white mr-3">What do you need for your trip</h3>
            <select className="p-2 rounded-lg bg-red-200 mr-3" value={quantity} onChange={handleChange }>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
                {num}
            </option>
            ))}
            </select>
            <input type="text" className="p-2 rounded-lg bg-red-200 mr-3" value={description} onChange={handlerInputValue} placeholder="item..." />
            <button className="bg-blue-700 text-white py-2 px-6 rounded-lg">
                Add
            </button>

        </form>
        </div>
    )
}

export default Form;