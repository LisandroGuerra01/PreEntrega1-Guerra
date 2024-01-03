/* eslint-disable react/prop-types */
import { useState } from "react";
import "./itemDetailContainer.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = ({product}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }



    return (
        <div>
            <div className="items">
                <img src={product.img} alt={product.name} className="img-thumbnail"/>
                <div className="">
                    <h5 className="">{product.name}</h5>
                    <h5 className="">{product.description}</h5>
                    <p className="">${product.price}</p>
                    {
                        quantityAdded === 0
                        ?
                        <ItemCount 
                        stock={product.stock}
                        handleOnAdd={handleOnAdd}
                        />
                        :
                        <div>
                            <p>Cantidad</p>
                            <p>{quantityAdded}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer