/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react';
const CartContext = createContext (
    {
        cartItem: [],
    }
);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    console.log(cartItems);

    // función para agregar un item al carrito
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const updateCart = [...cartItems];
            updateCart.forEach((e) => {
                if(e.id === item.id) {
                    e.quantity += quantity;
                }
            });
            setCartItems(updateCart);
        } else {
            setCartItems([...cartItems, {...item, quantity}]);
        }
    };

    //función para remover un item del carrito
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    //función para limpiar el carrito
    const clearCart = () => {
        setCartItems([]);
    };

    //función para obtener el precio total del carrito
    const getTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price*item.quantity, 0);
    };

    //función para devolver la cantidad de items en el carrito
    const getQuantity = () => {
        return cartItems.reduce ((acc, item) => acc + item.quantity, 0);
    };

    //funcion para saber si un tiem está en el carrito
    const isInCart = (id) => {
        return cartItems.some((item) => item.id === id);
    };

    //retornamos el provider del contexto
    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getTotalPrice,
                getQuantity,
                isInCart,
            }}
            >
                {children}
            </CartContext.Provider>
    );
};


export { CartContext, CartProvider};