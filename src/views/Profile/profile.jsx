import { useState, useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { db } from '../../Components/Firebase/config.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


const Profile = () => {
    const { currentUser } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            setLoading(true);
            const getOrders = async () => {
                if (!currentUser) return;
                const ordersRef = collection(db, "orders");
                const orderSnapshot = await getDocs(query(ordersRef, where("userId", "==", currentUser.uid)));
                const ordersList = orderSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setOrders(ordersList);
                setLoading(false);
            };
            getOrders();
        } catch (error) {
            console.log(error);
        }
    }, [currentUser]);

    if (orders.length === 0) {

        return (
            <div className="container detail">
                {loading ? (
                    <div className="text-center">
                        <div className='d-flex justify-content-center detail p-3'>
                            <Spinner animation="border" variant="warning" />
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <div className="row my-4">
                            <div className="col-12">
                                <h2 className="text-center">Mis ordenes</h2>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="alert alert-info" role="alert">
                                    No tienes ordenes realizadas
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-12">
                    <h2 className="text-center">Mis ordenes</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {loading ? (
                        <div className="text-center">
                            <div className="
                            spinner-border 
                            text-secondary
                            " role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {orders.map((order) => (
                                <div key={order.id} className="col">
                                    <div className="
                                    card 
                                    h-100
                                    bg-light
                                    border
                                    border-1
                                    shadow-lg
                                    rounded
                                    ">
                                        <div className="
                                            card-body
                                        ">
                                            <h5 className="card-title">Orden: {order.id}</h5>
                                            <p className="card-text">Estado: {order.status}</p>
                                            <p className="card-text">Total: ${order.total}</p>
                                            <Link to={`/order/${order.id}`} className="btn btn-outline-success">Ver detalle</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Profile;