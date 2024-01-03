/* eslint-disable react/jsx-no-undef */

import "./App.css";
import { CartProvider } from "./Context/CartContext";
import Routes from "./routes/index";


const App = () => {
    return (
        <CartProvider>
            <Routes />
        </CartProvider>
    )
}
export default App;