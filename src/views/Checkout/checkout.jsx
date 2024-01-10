import { useContext, useState } from "react";
import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm.jsx";
import { CartContext } from "../../Context/CartContext.jsx";
import { db } from "../../Components/Firebase/config.js";
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "@firebase/firestore";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';


const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [cartItemCopy, setCartItemCopy] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
    
        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: cartItems,
                total: getTotalPrice(),
                date: Timestamp.fromDate(new Date()),
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
                setCartItemCopy(cartItems);
                setTotalPrice(getTotalPrice());
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
            <div className="detail p-3">
                <div className="border border-2 rounded-3 bg-light col-4 align-self-center d-grid p-4">
                <h3 className="fs-1 mb-5">¡Compra finalizada!</h3>
                <p>Tu orden por:</p>
                {
                    cartItemCopy.map((item) => (
                        <div key={item.id}>
                            <span>{item.name} x </span>
                            <span>{item.quantity} x </span>
                            <span>${item.price}</span>
                        </div>
                    ))
                }
                <span className="fs-5">Total ${totalPrice}</span>
                <p>Fue realizada</p>

                <p>El ID de tu orden es {orderId}</p>

                <Link to="/" className="btn btn-primary m-1">Volver al inicio</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="detail p-3 container">
            <h1>Complete sus datos</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout