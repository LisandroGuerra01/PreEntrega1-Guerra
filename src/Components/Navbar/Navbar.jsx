import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';
import { NavDropdown } from 'react-bootstrap';
import "./Header.css";
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div className='header'>
            <Navbar data-bs-theme="dark" className='p-3 text-center'>
                <Link to='/' className='col-4'><Logo ></Logo></Link>
                <Nav className="col-8 justify-content-end px-5 fs-5 fw-semibold">
                    <NavDropdown title="PRODUCTOS" id="navbarscrollingproductos" className='my-auto'>
                        <Link to='/category/sabores' className='fw-semibold'>
                            SABORES
                        </Link>
                        <Link to='/category/tentaciones' className='fw-semibold'>
                            TENTACIONES
                        </Link>
                        <Link to='/category/pre-envasados' className='fw-semibold'>
                            PRE ENVASADOS
                        </Link>
                    </NavDropdown>
                    <NavDropdown title="DÓNDE ESTAMOS" id="navbarscrollingdondeestamos" className='my-auto'>
                        <Link to='#Locales' className='fw-semibold'>
                            LOCALES
                        </Link>
                        <Link to='#PuntosDeVenta' className='fw-semibold'>
                            PUNTOS DE VENTA
                        </Link>
                    </NavDropdown>
                    <NavDropdown title="NOSOTROS" id="navbarscrollingproductos" className='my-auto'>
                        <Link to='#QuienesSomos' className='fw-semibold'>
                            QUIENES SOMOS
                        </Link>
                        <Link to='#Novedades' className='fw-semibold'>
                            NOVEDADES
                        </Link>
                        <Link to='#AbriTuFranquicia' className='fw-semibold'>
                            ABRÍ TU FRANQUICIA
                        </Link>
                        <Link to='/category/sabores' className='fw-semibold'>
                            SABORES
                        </Link>
                        <Link to='#Contacto' className='fw-semibold'>
                            CONTACTO
                        </Link>
                    </NavDropdown>
                    <Nav.Link to='#Carrito' className='my-auto'><CartWidget /></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;