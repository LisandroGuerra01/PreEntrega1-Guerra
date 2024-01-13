import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';
import "./Header.css";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profile from "../Profile/profile";
import { useAuth } from "../../Context/AuthContext";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FiUser } from "react-icons/fi";


function NavScrollExample() {

    const { cartItems, clearCart } = useContext(CartContext);
    const { currentUser, logout } = useAuth();


    return (
        <Navbar expand="lg" data-bs-theme="dark" fixed="top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.336)' }} className='text-center'>
            <Navbar.Brand className='col-4'><Link to='/'><Logo ></Logo></Link></Navbar.Brand>
            <Navbar.Collapse className="col-8 justify-content-end px-5 fs-5 fw-semibold">
                <Nav navbarScroll >
                    <NavDropdown title="PRODUCTOS" id="navbarScrollingDropdown">
                        <div className='col-3'>
                            <NavDropdown.Item>
                                <Link className='font-nav' to='/category/sabores'>
                                    SABORES
                                </Link>
                            </NavDropdown.Item>
                        </div>
                        <div className='col-3'>
                            <NavDropdown.Item>
                                <Link className='font-nav' to='/category/tentaciones'>
                                    TENTACIONES
                                </Link>
                            </NavDropdown.Item>
                        </div>
                        <div className='col-3'>
                            <NavDropdown.Item>
                                <Link className='font-nav' to='/category/pre-envasados'>
                                    PRE ENVASADOS
                                </Link>
                            </NavDropdown.Item>
                        </div>
                    </NavDropdown>
                    <NavDropdown title="DÓNDE ESTAMOS" id="navbarScrollingDropdown">
                        <div className='col-3'>
                            <NavDropdown.Item>
                                <Link className='font-nav' to='/proximamente'>
                                    LOCALES
                                </Link>
                            </NavDropdown.Item>
                        </div>
                        <div className='col-3'>
                            <NavDropdown.Item>
                                <Link className='font-nav' to='/proximamente'>
                                    PUNTOS DE VENTA
                                </Link>
                            </NavDropdown.Item>
                        </div>
                    </NavDropdown>
                    <NavDropdown title="NOSOTROS" id="navbarScrollingDropdown">
                        <div className='col-3'>
                            <NavDropdown.Item>
                                <Link className='font-nav' to='/proximamente'>
                                    QUIÉNES SOMOS
                                </Link>
                            </NavDropdown.Item>
                        </div>
                        <div className='col-3'>
                            <NavDropdown.Item>
                                <Link className='font-nav' to='/proximamente'>
                                    NOVEDADES
                                </Link>
                            </NavDropdown.Item>
                        </div>
                        <div className='col-3'>
                            <NavDropdown.Item>
                                <Link className='font-nav' to='/proximamente'>
                                    AQUÍ TU FRANQUICIA
                                </Link>
                            </NavDropdown.Item>
                        </div>
                        <div className='col-3'>
                            <NavDropdown.Item>
                                <Link className='font-nav' to='/proximamente'>
                                    CONTACTO
                                </Link>
                            </NavDropdown.Item>
                        </div>
                    </NavDropdown>
                </Nav>
                <Link to="/Profile">
                    <Profile
                        cartItems={cartItems}
                        clearCart={clearCart}
                        currentUser={currentUser}
                        logout={logout} />
                </Link>
                <Nav.Link>
                    {currentUser ? (
                        <div className="px-2 py-1 ms-3 ">
                            <Link to='/Cart' ><CartWidget /></Link>
                        </div>
                    )
                        : (
                            <div className="px-2 py-1 ms-3">
                                <Link to="/login" className='text-white fs-3'><FiUser /></Link>
                            </div>
                        )}
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default NavScrollExample;