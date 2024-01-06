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
                    <NavDropdown title="PRODUCTOS"  className='my-auto'>
                        <Link to='/category/sabores' className='fw-semibold'>
                            SABORES
                        </Link><br />
                        <Link to='/category/tentaciones' className='fw-semibold'>
                            TENTACIONES
                        </Link><br />
                        <Link to='/category/pre-envasados' className='fw-semibold'>
                            PRE ENVASADOS
                        </Link>
                    </NavDropdown>
                    <NavDropdown title="DÓNDE ESTAMOS" className='my-auto'>
                        <Link to='/proximamente' className='fw-semibold'>
                            LOCALES
                        </Link><br />
                        <Link to='/proximamente' className='fw-semibold'>
                            PUNTOS DE VENTA
                        </Link>
                    </NavDropdown>
                    <NavDropdown title="NOSOTROS" className='my-auto'>
                        <Link to='/proximamente' className='fw-semibold'>
                            QUIENES SOMOS
                        </Link><br />
                        <Link to='/proximamente' className='fw-semibold'>
                            NOVEDADES
                        </Link><br />
                        <Link to='/proximamente' className='fw-semibold'>
                            ABRÍ TU FRANQUICIA
                        </Link><br />
                        <Link to='/proximamente' className='fw-semibold'>
                            CONTACTO
                        </Link>
                    </NavDropdown>
                    <Link to='/Cart' ><CartWidget /></Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;