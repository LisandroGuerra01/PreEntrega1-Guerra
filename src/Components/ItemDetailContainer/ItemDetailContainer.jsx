/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./itemDetailContainer.css"
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";

const ItemDetailContainer = ({product}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addToCart } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    
        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
        }

        addToCart(item, quantity)
    
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