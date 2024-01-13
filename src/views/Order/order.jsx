import { getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { db } from '../../Components/Firebase/config.js';
import Spinner from 'react-bootstrap/Spinner';


const Order = () => {
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);

    const { orderId } = useParams();

    useEffect(() => {
        const getOrder = async () => {
            const orderDoc = doc(db, "orders", orderId);
            const orderSnapshot = await getDoc(orderDoc);
            const orderData = orderSnapshot.data();
            setOrder({ id: orderSnapshot.id, ...orderData });
            setLoading(false);
        }
        getOrder();
    }, [orderId]);

    if (loading) {
        return (
                <div className='d-flex justify-content-center detail p-3'>
                    <Spinner animation="border" variant="warning" />
                </div>
        );
    }

    return (
        <div className="container">
            <h2 className="text-center text-uppercase my-5">Orden N° {order.id}</h2>
            <div className="row">
                <div className="col-12 col-md-6">
                    <h4 className="text-center text-uppercase">Datos del comprador</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Nombre: {order.buyer.cardholderName}</li>
                        <li className="list-group-item">Teléfono: {order.buyer.phone}</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <h4 className="text-center text-uppercase">Datos de la compra</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Fecha: {order.date.toDate().toLocaleDateString()}</li>
                        <li className="list-group-item">Total: ${order.total}</li>
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <h4 className="text-center text-uppercase">Productos comprados</h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio unitario</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price}</td>
                                    <td>${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <h4 className="text-center text-uppercase">Estado de la orden</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Estado: {order.status}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
    
export default Order;