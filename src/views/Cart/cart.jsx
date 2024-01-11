import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartItems, removeFromCart, clearCart, getQuantity, getTotalPrice } = useContext(CartContext);

    if (getQuantity() === 0) {
        return (
            <div className="container">
                <h2 className="display-4 detail">Tu carrito está vacío!</h2>
                <Link to="/" className="btn btn-primary mb-3">Volver al inicio</Link>
            </div>
        )
    }

    return (
        
        <div className="container">
            <div className="">
                <h1 className="pt-3 card-body detail"><span>TU COMPRA</span></h1>
                <Link to="/" className="btn btn-primary m-1">Volver al inicio</Link>
                <button className="btn btn-danger" onClick={clearCart}>Vaciar carrito</button>
            </div>
            <div className="col-6">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio unitario</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.img} alt={item.name} className="border border-2 rounded-3 bg-light" width={70}/>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price}</td>
                                <td>${item.price * item.quantity}</td>
                                <td><button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>X</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="col-6 text-end">
                <h2 className="display-4">Total: ${getTotalPrice()}</h2>
                <hr />
                <Link to="/checkout" className="btn btn-success mb-3">Finalizar compra</Link>
            </div>
        </div>

    )
}

export default Cart