import {useState} from "react";

export default function ItemEntry(){

    console.log('Item entry render');
    const [price,setPrice] = useState(0);
    const [quantity,setQuantity] = useState(0);

    return(<div>
        <div>
            Item Price
            <input type={"text"} value={price}
                    onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div>
            Item Qty
            <input type={"text"} value={quantity}
                   onChange={(e)=>setQuantity(e.target.value)}/>
        </div>
        <div>
            Item Total
            {price * quantity}
        </div>
    </div>);
}