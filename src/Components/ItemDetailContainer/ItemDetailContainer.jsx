/* eslint-disable react/prop-types */
import "./itemDetailContainer.css"
import { Link } from "react-router-dom";

const ItemDetailContainer = ({product}) => {
    return (
        <div>
            <div className="items">
                <img src={product.img} alt={product.name} className="img-thumbnail"/>
                <div className="">
                    <h5 className="">{product.name}</h5>
                    <h5 className="">{product.description}</h5>
                    <p className="">${product.price}</p>
                    <button type="button" className="btn btn-success">
                    <Link to="/" className="text-white">Pedir ahora</Link>
                </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer