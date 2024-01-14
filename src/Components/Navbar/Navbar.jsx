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
        <Navbar expand="lg" data-bs-theme="dark" fixed="top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.336)' }}>
            <Navbar.Brand className='col-3 text-end'><Link to='/'><Logo ></Logo></Link></Navbar.Brand>
            <Navbar.Collapse className="col-9 px-5 fs-5 fw-semibold">
                <Nav navbarScroll className='col-8'>
                    <NavDropdown title="PRODUCTOS" id="navbarScrollingDropdown">
                        <NavDropdown.Item>
                            <div className='col-3'>
                                <Link className='font-nav' to='/category/sabores'>
                                    SABORES
                                </Link>
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <div className='col-3'>
                                <Link className='font-nav' to='/category/tentaciones'>
                                    TENTACIONES
                                </Link>
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <div className='col-3'>
                                <Link className='font-nav' to='/category/pre-envasados'>
                                    PRE ENVASADOS
                                </Link>
                            </div>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="DÓNDE ESTAMOS" id="navbarScrollingDropdown">
                        <NavDropdown.Item>
                            <div className='col-3'>
                                <Link className='font-nav' to='/proximamente'>
                                    LOCALES
                                </Link>
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <div className='col-3'>
                                <Link className='font-nav' to='/proximamente'>
                                    PUNTOS DE VENTA
                                </Link>
                            </div>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="NOSOTROS" id="navbarScrollingDropdown">
                        <NavDropdown.Item>
                            <div className='col-3'>
                                <Link className='font-nav' to='/proximamente'>
                                    QUIÉNES SOMOS
                                </Link>
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <div className='col-3'>
                                <Link className='font-nav' to='/proximamente'>
                                    NOVEDADES
                                </Link>
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <div className='col-3'>
                                <Link className='font-nav' to='/proximamente'>
                                    AQUÍ TU FRANQUICIA
                                </Link>
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <div className='col-3'>
                                <Link className='font-nav' to='/proximamente'>
                                    CONTACTO
                                </Link>
                            </div>
                        </NavDropdown.Item>
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
                        <div className="px-2 py-1 ms-3">
                            <Link to='/Cart' ><CartWidget /></Link>
                        </div>
                    )
                        : (
                            <div className="px-2 py-1 ms-3">
                                <Link to="/login" className='text-white fs-2'><FiUser /></Link>
                            </div>
                            
                        )}
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default NavScrollExample;