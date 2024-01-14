import { useContext, useState } from "react";
import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../Components/Firebase/config.js";
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "@firebase/firestore";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.jsx";
import Spinner from 'react-bootstrap/Spinner';



const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");

    const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);

    const { currentUser } = useAuth();

    const createOrder = async ({ phone, cardholderName, cardNumber, expirationDate, securityCode, dni }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    phone,
                    cardholderName,
                    cardNumber,
                    expirationDate,
                    securityCode,
                    dni
                },
                items: cartItems,
                total: getTotalPrice(),
                date: Timestamp.fromDate(new Date()),
                userId: currentUser.uid,
                status: "Generada"
            };

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cartItems.map((item) => item.id);

            const productsRef = collection(db, "products");

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)));

            const { docs } = productsAddedFromFirestore;

            docs.forEach((doc) => {
                const product = doc.data();
                const stockDb = product.stock;

                const productAddedToCart = cartItems.find((item) => item.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ ...product, id: doc.id });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const docRef = await addDoc(collection(db, "orders"), objOrder);
                setOrderId(docRef.id);
                clearCart();
            } else {
                console.log("Productos sin stock");
                throw new Error("Productos sin stock");
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className='d-flex justify-content-center detail p-3'>
                <Spinner animation="border" variant="warning" />
            </div>
        );
    }

    if (orderId) {

        return (
            <div className="container-fluid detail">
            <div className="row justify-content-center my-5">
                <div className="col-12 col-md-6 col-lg-4 border p-5 rounded-3 shadow bg-body mx-auto my-auto text-center">
                    <h2 className="text-center mb-5">Gracias por tu compra!</h2>
                    <p className="mb-5">
                        Tu numero de orden es: <strong>{orderId}</strong>
                    </p>
                    <p className="mb-5">
                        Podes ver el detalle de tu compra en el siguiente link:
                        <br />
                        <Link to={`/order/${orderId}`}>Detalle de la compra</Link>
                    </p>
                    <p className="mb-5">
                        Tambien te enviamos un mail con el detalle de tu compra.
                    </p>
                    <p className="mb-5">
                        <Link to="/">Volver al inicio</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

    return (
        <div className="detail p-3 container">
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout