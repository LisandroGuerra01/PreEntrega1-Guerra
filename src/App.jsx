/* eslint-disable react/jsx-no-undef */

import "./App.css";
import { CartProvider } from "./Context/CartContext";
import Routes from "./routes/index";
import { AuthProvider } from "./Context/AuthContext";


const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <Routes />
            </CartProvider>
        </AuthProvider>
    )
}
export default App;