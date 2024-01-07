import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';
import "./Header.css";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
        <Navbar expand="lg" data-bs-theme="dark" fixed="top" className='header p-3 text-center'>
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
                <Link to='/Cart' ><CartWidget /></Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavScrollExample;