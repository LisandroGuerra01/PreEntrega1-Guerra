import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="text-center footer">
            <img src="https://ar.freddo.com/wp-content/uploads/2022/08/Freddo-logo-iso-200x131.png" alt="logo de Tello" width={100}/>
            <p>¡Seguinos!</p>
            <div className="icons">
                <a href="https://www.facebook.com/freddohelados" className="mx-4"><FaFacebookF /></a>
                <a href="https://www.instagram.com/heladosfreddo" className="mx-4"><FaInstagram /></a>
            </div>
            <p className="bases">Bases y Condiciones | <strong>Beneficios</strong> </p>
        </div>
    );
};

export default Footer;