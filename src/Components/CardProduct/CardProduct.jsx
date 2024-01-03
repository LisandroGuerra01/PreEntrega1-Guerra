import "./CardProduct.css";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardProduct = ({ products }) => {
    return (
        <div className="d-grid">
            {products.map((product) => {
                return (
                    <div key={`product-${product.id}`} className="row border-bottom p-1 my-3 product">
                        <div className="col-2">
                            <h6>{product.category}</h6>
                            <h5>{product.name}</h5>
                            <p className="fw-bold fs-5">${product.price}</p>
                            <Link to={`/product/${product.id}`} className="btn btn-success">Comprar</Link>
                        </div>
                        <div className="col-2">
                            <img src={product.img} className="rounded-5 shadow-lg" alt={product.name} width={220}/>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default CardProduct