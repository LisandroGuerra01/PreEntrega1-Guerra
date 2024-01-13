/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { db } from "../../Components/Firebase/config";
import { addDoc, collection, Timestamp } from "@firebase/firestore";
import { FiUser } from "react-icons/fi";

const Profile = ({ cartItems, clearCart, currentUser, logout }) => {
    const saveCartPending = async () => {
        const objCartPending = {
            cartItems,
            date: Timestamp.fromDate(new Date()),
            userId: currentUser.uid,
        };

        try {
            const cartPendingRef = collection(db, "cartPending");
            await addDoc(cartPendingRef, objCartPending);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        if (cartItems.length > 0) {
            await saveCartPending();
            clearCart();
        }
        logout();
    }

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <i className="fs-2 text-white text-decoration-none">
                <FiUser />
            </i>
            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
        </>
    );
};

export default Profile;