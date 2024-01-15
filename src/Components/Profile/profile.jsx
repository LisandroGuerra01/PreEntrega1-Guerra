/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Profile = ({ cartItems, clearCart, currentUser, logout }) => {

/*     const saveCartPending = async () => {
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
 */

    const handleLogout = async () => {
        await logout();
        if (cartItems.length > 0) {
            // await saveCartPending();
            clearCart();
        }
    };

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <NavDropdown title={<FiUser />} id="navbarScrollingDropdown" className="text-light fs-3">
                <NavDropdown.Item>
                    <div className='col-3 font-nav'>
                        {currentUser.email}
                    </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                    <Link className='col-3 font-nav' to='/profile'>
                        Mis órdenes
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                    <div className='col-3 font-nav'>
                        Logout
                    </div>
                </NavDropdown.Item>
            </NavDropdown>
        </div>
    );
}


export default Profile;