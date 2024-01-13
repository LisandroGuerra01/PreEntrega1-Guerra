/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "../../views/Detail/detail.css";
import { FiUserPlus } from 'react-icons/fi'


const ItemDetailContainer = ({ product, currentUser }) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addToCart, getTotalPrice, getItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
        }

        addToCart(item, quantity)

    }

    return (
        <div>
            <div className="text-center">
                <div className="card-body detail">
                    <h5 className="fs-1 pt-3"><span>{product.name}</span></h5>
                </div>
                <img src={product.img} alt={product.name} className="img-thumbnail" />
                <div>
                    <h5>{product.description}</h5>
                    <p>${product.price}</p>
                    {
                        quantityAdded === 0 && currentUser
                            ?
                            <ItemCount
                                stock={product.stock}
                                handleOnAdd={handleOnAdd}
                                itemInCart={getItem(product.id)}
                            />
                            :
                            <div>
                                {
                                    !currentUser
                                        ?
                                        <Link to="/login">
                                            <button>
                                            <FiUserPlus /> Iniciar sesión para agregar al carrito.
                                            </button>
                                        </Link>
                                        :
                                        <div>
                                            <p><span className="fw-bolder">{product.name}</span> x {quantityAdded}</p>
                                            <div className="m-1">
                                                <Link to="/" className="btn btn-primary mx-1">Agregar y seguir comprando</Link>
                                                <Link to="/Cart" className="btn btn-success">Agregar e ir a pagar $ {getTotalPrice()}</Link>
                                            </div>
                                        </div>
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer