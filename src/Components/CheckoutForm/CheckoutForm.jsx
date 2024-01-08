/* eslint-disable react/prop-types */
import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleConfirm = (e) => {
        e.preventDefault();

        const userData = {
            name,
            phone,
            email,
        };

        onConfirm(userData);
    };

    return (
        <div>
        <form onSubmit={handleConfirm}>
            <input className="mt-1"
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <input className="mt-1"
                type="tel"
                placeholder="Telefono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            /><br/>
            <input className="mt-1"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <button type="submit" className="btn btn-primary mt-1">Confirmar</button>
        </form>
        </div>
    );
}

export default CheckoutForm;